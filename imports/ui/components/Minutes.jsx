import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import SideBar from "./SideBar";

export default class Minutes extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        var that = this;
        if (that.props.RFQ_details.step_no == 9) {
            this.state = {
                companyId: that.props.RFQ_details.standard_apply[0].company.user_id,
                company: that.props.RFQ_details.standard_apply[0].company.name,
                amount: that.props.RFQ_details.standard_apply[0].amount,
                signed: false
            };
        }
        else if (that.props.RFQ_details.step_no > 9) {
            this.state = {
                companyId: that.props.RFQ_details.minutes.company.user_id,
                company: that.props.RFQ_details.minutes.company.name,
                amount: that.props.RFQ_details.minutes.amount,
                signed: false
            };
        }
    }

    datefromcreate(createdAt) {
        var date = createdAt.getDate();
        var month = createdAt.getMonth() + 1;
        var year = createdAt.getFullYear();
        var dateshow;
        if (month < 10) {
            dateshow = date + '/0' + month + '/' + year;
        } else {
            dateshow = date + '/' + month + '/' + year;
        }
        return dateshow;
    }

    genTableCom() {
        var i = 0;
        var title = this.props.RFQ_details.chahida.title;
        return this.props.RFQ_details.standard_apply.map(function (apply) {
            i++;
            return (
                <tr key={i}>
                    <td>{apply.company.name}</td>
                    <td>Supply of {title}</td>
                    <td>{apply.amount}</td>
                </tr>
            )
        });
    }

    selCompany(evt) {

        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var that = this;
        this.props.RFQ_details.standard_apply.map(function (apply) {
            if (apply.company.user_id == item.value) {
                that.setState({
                    company: apply.company.name,
                    amount: apply.amount,
                    companyId: apply.company.user_id
                });
            }
        });
    }

    convertNumberToWords(amount) {
        var words = [];
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        var value;
        if (n_length <= 9) {
            var n_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
    }

    genCompanies() {
        return (
            <select onChange={this.selCompany.bind(this)} ref="companies" className="form-control"
                    style={{color: "black"}}>
                {
                    this.props.RFQ_details.standard_apply.map(function (apply) {
                        return (<option value={apply.company.user_id} key={apply.company.user_id}
                                        style={{color: "black"}}>{apply.company.name}</option>)
                    })
                }
            </select>
        )
    }

    handleSign() {
        Meteor.call('updateMinutes', this.props.RFQ_details._id, Meteor.userId());
    }

    passwordcheck(e) {
        if (e.key === 'Enter') {
            var that = this;
            var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
            var digest = Package.sha.SHA256(password);
            Meteor.call('checkPassword', digest, function (err, result) {
                if (result) {
                    if (that.props.RFQ_details.step_no == 10) that.handleSign();
                    that.setState({
                        signed: true
                    })
                }
                else {
                    Bert.alert('Incorrect Password!!', 'danger', 'growl-top-right');
                }
            });
        }
    }

    datefromcreate(createdAt) {
        var date = createdAt.getDate();
        var month = createdAt.getMonth() + 1;
        var year = createdAt.getFullYear();
        var dateshow;
        if (month < 10) {
            dateshow = date + '/0' + month + '/' + year;
        } else {
            dateshow = date + '/' + month + '/' + year;
        }
        return dateshow;
    }

    dateTodayString() {
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var dateshow;
        if (month < 10) {
            dateshow = date + '/0' + month + '/' + year;
        } else {
            dateshow = date + '/' + month + '/' + year;
        }
        return dateshow;
    }

    genSignBlock(user) {
        const cursor = ImagesCol.findOne({_id: user.pic});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-12 center-block">
                    <img id="signPic" src={link} alt="User Image"/>

                </div>
            )
        }
        else if (user.user_id && !user.signed) {
            if (Meteor.userId() == user.user_id) {
                if (this.state.signed) {
                    return (
                        <div className="col-md-12 center-block">
                            <img id="signPic" src={link} alt="User Image"/>

                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-12 center-block form-group">
                            <div id="signblock" className="form-style-4">
                                <input style={{float: "center"}} onKeyPress={this.passwordcheck.bind(this)}
                                       type="password" name="password"
                                       ref="password"
                                       placeholder="Password"/><br/>
                            </div>
                        </div>
                    )
                }
            }
            else {
                return (
                    <div className="col-md-12 center-block">
                    </div>
                )
            }
        }
        else {
            return (
                <div className="col-md-12 center-block">
                </div>
            )
        }
    }

    genTable() {
        var that = this;
        //this.handleSign();
        var i = 0;
        return this.props.RFQ_details.minutes.members.map(function (member) {
            var block = that.genSignBlock(member);
            //console.log(member);
            i++;
            return (
                <tr key={member.user_id}>
                    <td>{i}</td>
                    <td>{member.name}</td>
                    <td>{member.name}<br/>
                        {"DRiCM , BCSIR"}<br/>
                        {member.comdes}, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/> ও প্রস্তাব মূল্যায়ন
                        কমিটি
                    </td>
                    <td>{block}</td>
                </tr>
            );
        });
    }

    submitCom(value) {
        if (this.state.signed && this.state.companyId) {
            var that = this;
            var com;
            this.props.RFQ_details.standard_apply.map(function (apply) {
                if (apply.company.user_id == that.state.companyId) {
                    com = apply.company;
                }
            });
            var updateForm = {
                step_no: 10,
                'minutes.amount': this.state.amount,
                'minutes.company': com,
                'step1011accountant.user_id': this.props.RFQ_details.chahida.accountant.user_id,
                'step1011accountant.name': this.props.RFQ_details.chahida.accountant.name,
                'step1011accountant.pic': this.props.RFQ_details.chahida.accountant.pic
            };

            RFQDetails.update(
                this.props.RFQ_details._id,
                {
                    $set: updateForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
            that.handleSign();
        }
        else {
            Bert.alert('Please Sign the Document & Select a company!!', 'danger', 'growl-top-right');

        }
    }


    render() {
        if (this.props.RFQ_details) {
            var ch, comSel,side;
            this.props.RFQ_details.minutes.members.map(function (mem) {
                if (mem.comdes == 'Chairman') ch = mem;
            });
            if (this.props.RFQ_details.step_no == 9) {
                comSel = this.genCompanies();
                side= <SideBar clickFunc={{
                        name: "Submit Company",
                        sendSelect: (value) => this.submitCom(value)
                    }} goToNote={'/Note/' + this.props.RFQ_details._id}
                    />
            }
            else if (this.props.RFQ_details.step_no > 9) {
                //console.log(this.props.RFQ_details.step_no);
                comSel = this.state.company;
                side= <SideBar goToNote={'/Note/' + this.props.RFQ_details._id}
                />
            }

            return (
                <div className="container">
                    <div className="col-md-3">
                        {side}
                    </div>
                    <div className="col-md-8">
                        <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-top col-md-12">
                                        <img src="/dricmlogo.jpg" className="center-block"/>
                                        <h3>Designated Reference Institute for Chemical Measurements (DRiCM) </h3>
                                        <h3>Bangladesh Council of Scientific & Industrial Research (BCSIR)</h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div id="meeting">
                                        <p>
                                            <strong> Sub: Minutes of the meeting of Tender Evaluation Committee (TEC)
                                                held
                                                on {this.datefromcreate(this.props.RFQ_details.step78meetingDate)} at
                                                3:30 pm (RFQ no. {this.props.RFQ_details.standard.RFQ_no};
                                                dt: {this.datefromcreate(this.props.RFQ_details.standard.createdAt)})
                                            </strong>
                                        </p>

                                        <p className="text-justify">
                                            <br/>
                                            A meeting of the Tender Evaluation Committee (TEC) for “Supply
                                            of {this.props.RFQ_details.chahida.title}” (RFQ
                                            no. {this.props.RFQ_details.standard.RFQ_no};
                                            dt: {this.datefromcreate(this.props.RFQ_details.standard.createdAt)}) for
                                            Designated Reference
                                            Institute for Chemical Measurements was held
                                            on {this.datefromcreate(this.props.RFQ_details.step78meetingDate)} at 3:30
                                            pm under
                                            the chairmanship of {ch.name}, {ch.designation}, DRiCM, BCSIR.

                                        </p>

                                        <p className="text-center">
                                            <br/>
                                            <strong>Technical Report of Supply
                                                of {this.props.RFQ_details.chahida.title}</strong>
                                        </p>

                                        <p>
                                            <br/>
                                            After threadbare discussion and on the basis of comparative statements,
                                            committee
                                            opined that Technical Evaluation of Supply
                                            of {this.props.RFQ_details.chahida.title} for Designated Reference
                                            Institute for Chemical
                                            Measurements, {this.props.RFQ_details.standard_apply.length} tenders
                                            were submitted by {this.props.RFQ_details.standard_apply.length} different
                                            tenderers. The name of the bidder and their comparative quoted price are
                                            given
                                            below-

                                        </p>

                                        <div className="table table-bordered table-responsive">
                                            <table className="table">
                                                <thead className="text-center">
                                                <tr>
                                                    <th>Name of the Tenderers</th>
                                                    <th>Name of the Work</th>
                                                    <th>Quoted price In BD Tk.</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {this.genTableCom()}

                                                </tbody>

                                            </table>

                                        </div>

                                        <p>
                                            <br/>
                                            After a careful scrutiny, it has been found that the tenders submitted
                                            by {this.props.RFQ_details.standard_apply.length} different
                                            bidders, {comSel} Associates
                                            meet all the requirements as specified in the technical specification. And
                                            all {this.props.RFQ_details.standard_apply.length} are
                                            technically responsive. Among them, {this.state.company} quote the lowest
                                            price
                                            (TK. {this.state.amount}) which is also within the estimated cost. The offer
                                            given
                                            by {this.state.company} sufficiently meets the requirements of the
                                            qualifications, financial and commercial terms and conditions set out in the
                                            RFQ document.
                                        </p>

                                    </div>
                                    <div>
                                        <hr/>
                                        <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                        <h4>Tel : 02 9671830, 01715032057</h4>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-top col-md-12">
                                        <img src="../dricmlogo.jpg" className="center-block"/>
                                        <h3>Designated Reference Institute for Chemical Measurements (DRiCM) </h3>
                                        <h3>Bangladesh Council of Scientific & Industrial Research (BCSIR)</h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div id="meeting">
                                        <p>
                                            <strong> Recommendations</strong>
                                        </p>

                                        <p className="text-justify">
                                            <br/>
                                            <strong>Considering the qualification, technical specification, financial
                                                terms
                                                and
                                                conditions set out in the tender document and the price offered by the
                                                tenderer,
                                                the
                                                committee unanimously recommended the Technically Evaluated lowest price
                                                Tk. {this.state.amount}, ({this.convertNumberToWords(this.state.amount)} Only)
                                                quoted by {this.state.company} for
                                                award for Supply of {this.props.RFQ_details.chahida.title}.
                                            </strong>
                                        </p>

                                        <p>
                                            <br/>
                                            The Tender Evaluation Committee certifies that the examination and
                                            Evaluation
                                            has
                                            followed the requirements of the Regulations, the Procedures and tender
                                            document,
                                            that all facts and information have been correctly reflected in the
                                            Evaluation
                                            Report and that no substantial or important information has been omitted and
                                            we
                                            do
                                            hereby declare and confirm that we have no business or other links to any of
                                            the
                                            competing tenders.</p>

                                        <p>
                                            <br/>
                                            After threadbare discussion and on the basis of comparative statements,
                                            committee
                                            opined that Technical Evaluation of supply
                                            of {this.props.RFQ_details.chahida.title} for Designated
                                            Reference
                                            Institute for Chemical Measurements.

                                        </p>
                                        <div className="row">
                                            <div className="col-lg-12 ">
                                                <div className="table table-bordered table-responsive">
                                                    <table className="table">
                                                        <thead className="text-center">
                                                        <tr>
                                                            <th>ক্র.নং</th>
                                                            <th id="nss">কর্মকর্তার নাম</th>
                                                            <th id="nss">পদবী ও প্রতিষ্ঠান</th>
                                                            <th id="nss">স্বাক্ষর</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {this.genTable()}

                                                        </tbody>

                                                    </table>

                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                                <div>
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}
