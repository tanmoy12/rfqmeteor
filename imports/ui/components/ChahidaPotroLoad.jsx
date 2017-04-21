import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import SideBar from "./SideBar";


class ChahidaPotroLoad extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            signed: false,
            showBlock: false,
            selectValue: 0
        };
    }

    static convertNumberToWords(amount) {
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

    passwordcheck(e) {
        if (e.key === 'Enter') {
            var that = this;
            var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
            var digest = Package.sha.SHA256(password);
            Meteor.call('checkPassword', digest, function (err, result) {
                if (result) {
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


    genSignBlock(signfor, user) {
        const cursor = ImagesCol.findOne({_id: user.pic});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-6 center-block">
                    <img id="signPic" src={link} className="img-circle" alt="User Image"/>
                    <div className="form-inline" style={{marginLeft: "20%", marginRight: "20%"}}>
                        <p id="signLabel" style={{display: "inline-flex", float: "left"}}>
                            <strong>{user.name}</strong></p>
                        <p id="signLabel" style={{display: "inline-flex", float: "right"}}>
                            <strong>{this.datefromcreate(user.sign_date)}</strong>
                        </p>
                    </div>
                    <hr id="signhr" style={{width: "80%"}}/>
                    <p id="signTag"><strong>{signfor}</strong></p>
                </div>
            )
        }
        else if (user.user_id && !user.signed) {
            if (Meteor.userId() == user.user_id) {
                if (this.state.signed) {
                    return (
                        <div className="col-md-6 center-block">
                            <img id="signPic" src={link} className="img-circle" alt="User Image"/>
                            <div className="form-inline" style={{marginLeft: "20%", marginRight: "20%"}}>
                                <p id="signLabel" style={{display: "inline-flex", float: "left"}}>
                                    <strong>{Meteor.user().profile.name}</strong></p>
                                <p id="signLabel" style={{display: "inline-flex", float: "right"}}>
                                    <strong>{this.dateTodayString()}</strong>
                                </p>
                            </div>
                            <hr id="signhr" style={{width: "80%"}}/>
                            <p id="signTag"><strong>{signfor}</strong></p>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-6 center-block form-group">
                            <div className="col-md-1">
                            </div>
                            <div id="signblock" className="form-style-4">
                                <input style={{float: "center"}} onKeyPress={this.passwordcheck.bind(this)} type="password" name="password"
                                       ref="password"
                                       placeholder="Password"/><br/>
                            </div>
                            <div>
                                <div className="form-inline">
                                    <p id="signLabel" style={{display: "inline-flex", float: "center"}}>
                                        <strong>{Meteor.user().profile.name}</strong></p>
                                </div>
                                <hr id="signhr" style={{width: "80%"}}/>
                                <p id="signTag"><strong>{signfor}</strong></p>
                            </div>
                        </div>
                    )
                }
            }
            else {
                return (
                    <div className="col-md-6 center-block">
                        <hr id="unsignhr" style={{width: "80%"}}/>
                        <p id="signTag"><strong>{signfor} </strong></p>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="col-md-6 center-block">
                    <hr id="unsignhr" style={{width: "80%"}}/>
                    <p id="signTag"><strong>{signfor} </strong></p>
                </div>
            )
        }
    }

    handleForward(value) {
        if (this.state.signed == true) {
            var AcOff = null;

            if (this.props.RFQ_details.chahida.substep_no == 1) {
                this.props.AcOf.map(function (Of) {
                    if (Of._id == value) {
                        AcOff = Of;
                    }
                });
            } else if (this.props.RFQ_details.chahida.substep_no == 2) {
                this.props.DrOf.map(function (Of) {
                    if (Of._id == value) {
                        AcOff = Of;
                    }
                });
            } else if (this.props.RFQ_details.chahida.substep_no == 3) {
                this.props.AcOf.map(function (Of) {
                    if (Of._id == value) {
                        AcOff = Of;
                    }
                });
            }

            if (AcOff) {
                var updateForm;
                if (this.props.RFQ_details.chahida.substep_no == 1) {
                    updateForm = {
                        'chahida.substep_no': 2,
                        'chahida.verifier.signed': true,
                        'chahida.verifier.sign_date': new Date(),
                        'chahida.accountant.user_id': AcOff._id,
                        'chahida.accountant.name': AcOff.profile.name,
                        'chahida.accountant.pic': AcOff.profile.seal
                    }
                }
                else if (this.props.RFQ_details.chahida.substep_no == 2) {
                    updateForm = {
                        'chahida.substep_no': 3,
                        'chahida.accountant.signed': true,
                        'chahida.accountant.sign_date': new Date(),
                        'chahida.director.user_id': AcOff._id,
                        'chahida.director.name': AcOff.profile.name,
                        'chahida.director.pic': AcOff.profile.seal
                    }
                }
                else if (this.props.RFQ_details.chahida.substep_no == 3) {
                    updateForm = {
                        step_no: 3,
                        'chahida.substep_no': 4,
                        'chahida.director.signed': true,
                        'chahida.director.sign_date': new Date(),
                        'standard.initiator.user_id': AcOff._id,
                        'standard.initiator.name': AcOff.profile.name,
                        'standard.initiator.pic': AcOff.profile.seal
                    }
                }
                var that = this;
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
            }
            else {
                Bert.alert('Forwarded to NoOne!!', 'danger', 'growl-top-right');
            }
        } else {
            Bert.alert('Please Sign the Document!!', 'danger', 'growl-top-right');
        }

    }

    render() {
        if (this.props.RFQ_details) {
            var chahida_potro = this.props.RFQ_details.chahida;
            var forward_to, dropdownList;
            if (chahida_potro.substep_no == 1 && Meteor.userId() == this.props.RFQ_details.chahida.verifier.user_id) {
                forward_to = {
                    toWhom: "হিসাবরক্ষক",
                    dropdownList: this.props.AcOf,
                    sendSelect: (value) => this.handleForward(value)
                }
            } else if (chahida_potro.substep_no == 2 && Meteor.userId() == this.props.RFQ_details.chahida.accountant.user_id) {
                forward_to = {
                    toWhom: "অনুমোদনকারী",
                    dropdownList: this.props.DrOf,
                    sendSelect: (value) => this.handleForward(value)
                }
            } else if (chahida_potro.substep_no == 3 && Meteor.userId() == this.props.RFQ_details.chahida.director.user_id) {
                forward_to = {
                    toWhom: "Specification committee",
                    dropdownList: this.props.AcOf,
                    sendSelect: (value) => this.handleForward(value)
                }
            }
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar ref="SideBar"
                                     forwardTo={forward_to}
                                     goToNote={'/Note/' + this.props.RFQ_details._id}
                            />


                        </div>
                        <div className="col-md-9">
                            <div id="chahidajumbo" className="jumbotron text-center">
                                <div className="row">
                                    <div className="title-top col-md-12">
                                        <img src="/dricmlogo.jpg" className="center-block"/>
                                        <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                        <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12 pull-left">
                                                <span
                                                    className="pull-left"><strong>সুত্র নং : <b>{chahida_potro.sutro_no}</b></strong></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p id="dateload"><strong>DATE
                                            : {this.datefromcreate(chahida_potro.createdAt)}</strong></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 id="chahidatitle"> চাহিদা পত্র</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <br/>
                                        <p className="text"> ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)- এ
                                            অন্তকালীন
                                            ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস (ডিআরআইসিএম) - এ
                                            নিম্নক্ত
                                            <strong>  {chahida_potro.title} </strong>ক্রয় করা প্রয়োজন। </p>

                                        <br/>
                                        <div id="tabledesc" className="table">
                                            <table id="customers"
                                                   className="table table-responsive table-bordered table-condensed">

                                                <thead>
                                                <tr>
                                                    <th className="col-md-1 text-center">Item</th>
                                                    <th className="col-md-4 text-center">Description Of Item</th>
                                                    <th className="col-md-2 text-center">Unit</th>
                                                    <th className="col-md-1 text-center">Quantity</th>
                                                    <th className="col-md-2 text-center">Rate/unit</th>
                                                    <th className="col-md-2 text-center">Total Amount</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    chahida_potro.details.map(function (detailsrow) {
                                                        return (
                                                            <tr key={detailsrow.id}>
                                                                <td className="col-md-1 text-center">{detailsrow.item_no}</td>
                                                                <td className="col-md-4 text-left">{detailsrow.desc}</td>
                                                                <td className="col-md-2 text-right">{detailsrow.unit}</td>
                                                                <td className="col-md-1 text-right">{detailsrow.qty}</td>
                                                                <td className="col-md-2 text-right">{detailsrow.rate}</td>
                                                                <td className="col-md-2 text-right">{detailsrow.total}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                                <tr>
                                                    <td className="col-md-1 text-center"></td>
                                                    <td className="col-md-4 text-center"></td>
                                                    <td className="col-md-2 text-center"></td>
                                                    <td className="col-md-1 text-center"></td>
                                                    <td className="col-md-2 text-center"></td>
                                                    <td className="col-md-2 text-right"><p id="item_no">
                                                        <strong>{chahida_potro.estimate}</strong></p></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <br/><br/>

                                        </div>
                                        <p className="text">
                                            ২। এ জন্য আনুমানিক {chahida_potro.estimate}/-
                                            (কথায়)
                                            {ChahidaPotroLoad.convertNumberToWords(chahida_potro.estimate)} টাকা ব্যয়।
                                            <br/>
                                            ৩। অতএব, উপরোক্ত বর্ণনামাতে {chahida_potro.title} ক্রয়ের অনুমোদনের
                                            জন্য বিনীতভাবে অনুরোধ জানানো যাচ্ছে।
                                        </p>
                                        <br/>
                                    </div>
                                </div>
                                <div className="row">
                                    {this.genSignBlock("নিবেদক", chahida_potro.initiator)}
                                    {this.genSignBlock("যাচাইকারী", chahida_potro.verifier)}
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text2"> ৪। উক্ত ব্যয় {chahida_potro.year} অর্থ বছরের রাজস্ব
                                            বাজেটের
                                            সরবরাহ
                                            ও সেবা খাতের (ঊপখাতঃ {chahida_potro.upokhat}) হতে ক্রয় প্রক্রিয়া
                                            মাধ্যমে
                                            নির্বাহ করা যেতে পারে। </p>
                                    </div>
                                </div>
                                <div className="row">
                                    {this.genSignBlock("হিসাবরক্ষক", chahida_potro.accountant)}
                                    {this.genSignBlock("অনুমোদনকারী", chahida_potro.director)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            );
        }
        else {
            return (
                <div className="loading-div">
                    Loading
                </div>
            );
        }
    }
}


ChahidaPotroLoad.propTypes = {
    AcOf: PropTypes.array.isRequired,
    DrOf: PropTypes.array.isRequired,
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    return {
        AcOf: Meteor.users.find(
            {
                'profile.designation': "Accounting Officer",
                _id: {$ne: Meteor.userId()}
            }).fetch(),
        DrOf: Meteor.users.find(
            {
                'profile.designation': "Director",
                _id: {$ne: Meteor.userId()}
            }).fetch(),
        RFQ_details: RFQDetails.findOne({_id: props.id})
    };
}, ChahidaPotroLoad);