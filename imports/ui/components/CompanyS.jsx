import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import SideBar from "./SideBar";

class CompanyS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signed: false
        };
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

    genApplyHead() {
        var i = 0;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i} className="text-center"><strong>{application.company.name}</strong>
                </td>
            )
        })
    }

    genApplyAmount() {
        var i = 0;
        var that = this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}><strong>{application.amount} Tk
                    ({that.convertNumberToWords(application.amount)} taka only)</strong>
                </td>
            )
        })
    }

    genApplyTitle() {
        var i = 0;
        var that = this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}><strong>supply of {that.props.RFQ_details.chahida.title}</strong>
                </td>
            )
        })
    }

    genApplyTrade() {
        var i = 0;
        var that = this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}>Submitted</td>
            )
        })
    }

    genApplyTax() {
        var i = 0;
        var that = this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}>Submitted</td>
            )
        })
    }

    genApplySolvency() {
        var i = 0;
        var that = this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}>Submitted</td>
            )
        })
    }

    genApplyValidity() {
        var i = 0;
        var that = this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}>20 Days</td>
            )
        })
    }

    genDetailsTable() {
        var apply = this.props.RFQ_details.standard_apply;
        var applyNum = apply.length;
        var detailNum = apply[0].StandardApply.length;
        console.log(applyNum);
        console.log(detailNum);
        var transposed = [];
        for (var i = 0; i < detailNum; i++) {
            var vert = [];
            for (var j = 0; j < applyNum; j++) {
                //console.log(apply[j].StandardApply[i]);
                vert.push(apply[j].StandardApply[i]);
            }
            transposed.push(vert);
        }

        //console.log(transposed);
        var i = -1;
        var that = this;
        return transposed.map(function (t) {
            i++;
            var standard = that.props.RFQ_details.standard.standard_details[i];
            var j = 0;
            var Table = t.map(function (app) {
                j++;
                return (
                    <td key={j} className="text-left">
                        <strong>{app.desc}</strong> <br/><br/>
                        {app.spec}<br/>
                        Quantity: {app.qty} <br/>
                        Make: {app.making} <br/>

                        <strong>{app.total} TK/=</strong>
                    </td>
                )
            });

            return (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td className="text-left"><strong>{standard.desc}</strong> <br/><br/>
                        {standard.spec}<br/>
                        Quantity: {standard.qty} <br/>
                        Make: {standard.making} <br/>
                    </td>
                    {Table}
                </tr>
            )
        });

    }

    handleSign() {
        Meteor.call('updateCompanyS', this.props.RFQ_details._id, Meteor.userId());
    }

    passwordcheck(e) {
        if (e.key === 'Enter') {
            var that = this;
            var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
            var digest = Package.sha.SHA256(password);
            Meteor.call('checkPassword', digest, function (err, result) {
                if (result) {
                    that.handleSign();
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

    genTable2() {
        var that = this;
        //this.handleSign();
        return this.props.RFQ_details.company_s.map(function (member) {
            var block = that.genSignBlock(member);
            //console.log(member);
            return (
                <tr key={member.user_id}>
                    <td>০১</td>
                    <td>{member.name}<br/>
                        {"DRiCM , BCSIR"}<br/>
                        {member.comdes}, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/> ও প্রস্তাব মূল্যায়ন
                        কমিটি
                    </td>
                    <td scope="colgroup">{block}</td>
                </tr>
            );
        });
    }

    render() {
        if (this.props.RFQ_details) {
            var side = <SideBar goToNote={'/Note/' + this.props.RFQ_details._id}/>;
            return (
                <div className="container">
                    <div className="col-md-3">
                        {side}
                    </div>
                    <div className="col-md-9">
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
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-12 pull-left">
                                        <span className="pull-left"><strong>RFQ No :  <b>{this.props.RFQ_details.standard.RFQ_no}</b></strong></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p id="dateload">
                                                <strong>DATE {this.datefromcreate(this.props.RFQ_details.meeting.dateOfMeeting)}</strong>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead className="text-left">
                                            <tr>
                                                <td>S/N</td>
                                                <td className="text-center">As tender document</td>
                                                {this.genApplyHead()}

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1.a</td>
                                                <td>Name of the Goods</td>
                                                {this.genApplyTitle()}
                                            </tr>
                                            <tr>
                                                <td>b</td>
                                                <td>Offered price</td>
                                                {this.genApplyAmount()}
                                            </tr>

                                            <tr>
                                                <td>c</td>
                                                <td>Trade License</td>
                                                {this.genApplyTrade()}
                                            </tr>
                                            <tr>
                                                <td>d</td>
                                                <td>Income tax certificate</td>
                                                {this.genApplyTax()}
                                            </tr>

                                            <tr>
                                                <td>e</td>
                                                <td>Bank Solvency Certificate</td>
                                                {this.genApplySolvency()}
                                            </tr>
                                            <tr>
                                                <td>2.a</td>
                                                <td>Tender Validity</td>
                                                {this.genApplyValidity()}
                                            </tr>
                                            </tbody>

                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr/>
                                <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                <h4>Tel : 02 9671830, 01715032057</h4>
                            </div>
                        </div>

                        <div id="chahidajumbo" className="col-md-12 jumbotron text-center">

                            <div className="table table-bordered table-responsive">
                                <table className="table">
                                    <thead className="text-left">
                                    <tr>
                                        <td>Item No</td>
                                        <td className="text-left">Required Specification</td>
                                        {this.genApplyHead()}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.genDetailsTable()}

                                    </tbody>

                                </table>

                            </div>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-lg-12 ">
                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead className="text-center">
                                            <tr>
                                                <th>ক্র.নং</th>
                                                <th className="text-center">কর্মকর্তার নাম</th>
                                                <th className="text-center">স্বাক্ষর</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.genTable2()}

                                            </tbody>

                                        </table>

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

CompanyS.propTypes = {
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    return {
        RFQ_details: RFQDetails.findOne({_id: props.id})
    };
}, CompanyS);
