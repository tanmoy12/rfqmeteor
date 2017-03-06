import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";

class ChahidaPotroLoad extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            signed: false,
            showBlock: false
        };
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

    renderAcOf() {
        let acc = this.props.AcOf;
        let dcc = this.props.DrOf;
        if (this.props.chahidapotro.substep_no == 1) {
            return acc.map(function (AcOfficers) {
                return <option value={AcOfficers._id} key={AcOfficers._id}>{AcOfficers.username}</option>
            });
        } else if (this.props.chahidapotro.substep_no == 2) {
            return dcc.map(function (AcOfficers) {
                return <option value={AcOfficers._id} key={AcOfficers._id}>{AcOfficers.username}</option>
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

    genSignBlock(signfor, userId, signed) {
        if (signed) {
            return (
                <div className="col-md-6 center-block">
                    <img src="/sign1.png" className="img-circle" alt="User Image"/>
                    <p id="signLabel"><strong>{signfor}</strong></p>
                </div>
            )
        }
        else if (userId && !signed) {
            if (Meteor.userId() == userId) {
                if (this.state.signed) {
                    return (
                        <div className="col-md-6 center-block">
                            <img src="/sign1.png" className="img-circle" alt="User Image"/>
                            <p id="signLabel"><strong>{signfor}</strong></p>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-6 center-block form-group">
                            <div className="col-md-1">
                            </div>
                            <div id="signblock" className="col-md-10 col-md-offset-1 form-style-4">
                                <input onKeyPress={this.passwordcheck.bind(this)} type="password" name="password"
                                       ref="password"
                                       placeholder="Password"/><br/>
                            </div>
                            <div>
                                <p id="signLabel"><strong>{signfor}</strong></p>
                            </div>

                        </div>
                    )
                }
            }
            else {
                return (
                    <div className="col-md-6 center-block">
                        <p id="unsignLabel"><strong>{signfor}</strong></p>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="col-md-6 center-block">
                    <p id="unsignLabel"><strong>{signfor}</strong></p>
                </div>
            )
        }
    }

    showBlock(forward_to) {
        if (Meteor.userId()== this.props.chahidapotro.verifier.user_id ||
            Meteor.userId()== this.props.chahidapotro.accountant.user_id ||
            Meteor.userId()== this.props.chahidapotro.director.user_id ) {
            return (
                <div className="col-md-10">
                    <div className="col-md-2"></div>
                    <div id="chahidajumbo" className="jumbotron col-md-8 col-md-offset-2">
                        <div className="form-group text-center">
                            <p>FORWARD TO <strong>
                                {forward_to} </strong></p>
                            <div className="form-group">
                                <select ref="AcOf" className="form-control">
                                    {this.renderAcOf()}
                                </select>
                            </div>

                            <div>
                                <input onClick={this.handleForward.bind(this)}
                                       type="submit" name="login-submit"
                                       id="submit-all"
                                       className="btn btn-primary" value="FORWARD"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    handleForward(e) {
        e.preventDefault();
        if(this.state.signed==true) {
            var AcOff = ReactDOM.findDOMNode(this.refs.AcOf).value.trim();
            var updateForm;
            if(this.props.chahidapotro.substep_no==1){
                updateForm= {
                    substep_no: 2,
                    verifier: {
                        signed: true,
                        sign_date: new Date()
                    },
                    accountant: {
                        user_id: AcOff
                    }
                }
            }
            else if(this.props.chahidapotro.substep_no==2){
                updateForm= {
                    substep_no: 3,
                    accountant: {
                        signed: true,
                        sign_date: new Date()
                    },
                    director: {
                        user_id: AcOff
                    }
                }
            }
            else if(this.props.chahidapotro.substep_no==3){
                updateForm= {
                    substep_no: 4,
                    director: {
                        signed: true,
                        sign_date: new Date()
                    }
                }
            }
            var that=this;
            Chahida_Potro.update(
                this.props.chahidapotro._id,
                {
                    $set: updateForm
                }, function (err, res) {
                    if(err) Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    else{
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        }else {
            Bert.alert('Please Sign the Document!!', 'danger', 'growl-top-right');
        }

    }

    render() {
        if (this.props.chahidapotro) {
            var chahida_potro = this.props.chahidapotro;
            var forward_to;
            if (chahida_potro.substep_no == 1) {
                forward_to = "হিসাবরক্ষক";
            } else if (chahida_potro.substep_no == 2) {
                forward_to = "অনুমোদনকারী";
            } else if (chahida_potro.substep_no == 3) {
                forward_to = null;
            }

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
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
                                            ২। এ জন্য আনুমানিক .......................................
                                            (কথায়)
                                            ................................. টাকা ব্যয়।
                                            <br/>
                                            ৩। অতএব, উপরোক্ত বর্ণনামাতে ............................. ক্রয়ের অনুমোদনের
                                            জন্য বিনীতভাবে অনুরোধ জানানো যাচ্ছে।
                                        </p>
                                        <br/>
                                    </div>
                                </div>
                                <div className="row">
                                    {this.genSignBlock("নিবেদক", chahida_potro.initiator, true)}
                                    {this.genSignBlock("যাচাইকারী", chahida_potro.verifier.user_id, chahida_potro.verifier.signed)}
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text2"> ৪। উক্ত ব্যয় ..................... অর্থ বছরের রাজস্ব
                                            বাজেটের
                                            সরবরাহ
                                            ও সেবা খাতের (ঊপখাতঃ রসায়ন দ্রব্যাদি ক্রয় নং-৪৮৫২) হতে ক্রয় প্রক্রিয়া
                                            মাধ্যমে
                                            নির্বাহ করা যেতে পারে। </p>
                                    </div>
                                </div>
                                <div className="row">
                                    {this.genSignBlock("হিসাবরক্ষক", chahida_potro.accountant.user_id, chahida_potro.accountant.signed)}
                                    {this.genSignBlock("অনুমোদনকারী", chahida_potro.director.user_id, chahida_potro.director.signed)}
                                </div>
                            </div>

                        </div>
                        {this.showBlock(forward_to)}
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
    chahidapotro: PropTypes.object,
    AcOf: PropTypes.array.isRequired,
    DrOf: PropTypes.array.isRequired,
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    return {
        chahidapotro: Chahida_Potro.findOne(props.id),
        AcOf: Meteor.users.find({'profile.designation': "Accounting Officer"}).fetch(),
        DrOf: Meteor.users.find({'profile.designation': "Director"}).fetch(),
        RFQ_details: RFQDetails.findOne({chahida_id: props.id})
    };
}, ChahidaPotroLoad);