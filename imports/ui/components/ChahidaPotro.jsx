import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import Table from "./Table";
import SideBar from "./SideBar";

class ChahidaPotro extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            products: [],
            estimate: 0,
            signed: false,
            title: "",
            selectValue: null
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

    setSelected(value){
        this.setState({selectValue: value});
    }


    renderScOf() {
        let scc = this.props.ScOf;
        var i=0;
        return scc.map(function (ScOfficers) {

            return <option value={i++} key={ScOfficers._id}>{ScOfficers.username}</option>
        });
    }

    getdatafromtable(products, estimate) {
        this.setState({
            products: products,
            estimate: estimate
        });

    }

    dateToday() {
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
        return <p id="datetoday"><strong>Date : {dateshow}</strong></p>;
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

    RFQtitleChange(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        this.setState({
            title: item.value
        })
    }

    handleCreate(value) {
        var ScOff=null;
        this.props.ScOf.map(function (Of) {
            if(Of._id==value){
                ScOff=Of;
            }
        });
        var sutrono = ReactDOM.findDOMNode(this.refs.sutrono).value.trim();
        var title = ReactDOM.findDOMNode(this.refs.title).value.trim();
        var year = ReactDOM.findDOMNode(this.refs.year).value.trim();
        var upokhat = ReactDOM.findDOMNode(this.refs.upokhat).value.trim();
        var productbool = true;
        var that = this;
        if (this.state.signed && title && sutrono && this.state.products.length && ScOff) {
            this.state.products.map(function (product) {
                if (product.desc && product.qty && product.total) {

                } else {
                    productbool = false;
                }
            });
            if (productbool && this.state.selectValue>-1) {
                var Chahidaform = {
                    title: title,
                    sutro_no: sutrono,
                    estimate: that.state.estimate,
                    details: that.state.products,
                    upokhat: upokhat,
                    year: year,
                    verifier: {
                        user_id: ScOff._id,
                        name: ScOff.profile.name,
                        pic: ScOff.profile.seal
                    },
                    initiator: {
                        user_id: Meteor.userId(),
                        name: Meteor.user().profile.name,
                        pic: Meteor.user().profile.seal,
                        signed: true,
                        sign_date: new Date()
                    }
                };
                var RFQDetailsForm = {
                    chahida: Chahidaform,
                    title: title
                };
                RFQDetails.insert(RFQDetailsForm, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('Unknown Error2!!', 'danger', 'growl-top-right');
                    }
                    else {
                        var from= {
                            user_id: Meteor.userId(),
                            name: Meteor.user().profile.name,
                            pic: Meteor.user().profile.ProPic,
                        };
                        var Rfqid = res;
                        var NotificationForm = {
                            from: from,
                            to_id: ScOff._id,
                            type: 1,
                            title: title,
                            RFQ_id: Rfqid
                        };
                        //NotificationsSchema.validate(NotificationForm);
                        Notifications.insert(NotificationForm, function (err, res) {
                            if (err) {
                                console.log(err);
                                Bert.alert('Unknown Error3!!', 'danger', 'growl-top-right');
                            }
                            else {
                                FlowRouter.go('/Note/' + Rfqid);
                            }
                        })
                    }
                });


            } else {
                Bert.alert('Please Fill up Table details!!', 'danger', 'growl-top-right');
            }
        } else {
            Bert.alert('Please Fill up all Details!!', 'danger', 'growl-top-right');
        }
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

    render() {
        var signBlock;
        let link='';
        if(Meteor.user()) {
            const cursor = ImagesCol.findOne({_id: Meteor.user().profile.seal});
            if (cursor) {
                link = cursor.link();
            }
            if (this.state.signed) {
                signBlock =
                    <div className="col-md-6 center-block">
                        <img id="signPic" src={link} className="img-circle" alt="User Image"/>
                        <p id="signLabel"><strong>{Meteor.user().profile.name}</strong></p>
                        <p id="signLabel"><strong>{this.dateTodayString()}</strong></p>
                        <hr/>
                        <p id="signLabel"><strong>নিবেদক</strong></p>
                    </div>
            } else {
                signBlock =
                    <div className="col-md-6 center-block form-group">
                        <div className="col-md-1">
                        </div>
                        <div id="signblock" className="col-md-10 col-md-offset-1 form-style-4">
                            <input onKeyPress={this.passwordcheck.bind(this)} type="password" name="password" ref="password"
                                   placeholder="Password"/><br/>
                        </div>
                        <div>
                            <p id="signLabel"><strong>{Meteor.user().profile.name}</strong></p>
                            <hr className="center-block" id="signhr"/>
                            <p id="signLabel"><strong>নিবেদক</strong></p>
                        </div>

                    </div>
            }
        }

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-3" >
                        <SideBar ref="SideBar"
                            forwardTo = {{toWhom: "যাচাইকারী",
                                dropdownList: this.props.ScOf,
                                sendSelect: (value) => this.handleCreate(value)
                            }}

                        />


                    </div>
                    <div className="col-md-9">
                        <div id="chahidajumbo" className="jumbotron text-center">
                            <div className="row">
                                <div className="title-top col-md-12">
                                    <img src="../dricmlogo.jpg" className="center-block"/>
                                    <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                    <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                    <hr/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12 form-style-4">
                                            <label htmlFor="sutrono">
                                                <span>সুত্র নং :</span>
                                                <input ref="sutrono" placeholder="সুত্র নং :" name="sutrono"
                                                       type="text"/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {this.dateToday()}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2> চাহিদা পত্র</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <br/>
                                    <p className="text displayinblock"> ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ
                                        (বিসিএসআইআর)- এ
                                        অন্তকালীন
                                        ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস (ডিআরআইসিএম) - এ
                                        নিম্নক্ত
                                        <input ref="title" onChange={this.RFQtitleChange.bind(this)}
                                               placeholder="RFQ Title" name="title" type="text"/>
                                        ক্রয় করা প্রয়োজন। </p><br/>

                                    <Table
                                        sendData={(products, estimate) => this.getdatafromtable(products, estimate) }/>

                                    <p className="text">
                                        ২। এ জন্য আনুমানিক {this.state.estimate}/-
                                        (কথায়) {ChahidaPotro.convertNumberToWords(this.state.estimate)} টাকা ব্যয়।
                                        <br/>
                                        ৩। অতএব, উপরোক্ত বর্ণনামাতে <strong>{this.state.title}</strong> ক্রয়ের অনুমোদনের
                                        জন্য বিনীতভাবে অনুরোধ জানানো যাচ্ছে।
                                    </p>
                                    <br/>


                                </div>
                            </div>
                            <div className="row">
                                {signBlock}
                                <div className="col-md-6 center-block">

                                    <p id="unsignLabel"><strong>যাচাইকারী </strong></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text displayinblock"> ৪। উক্ত ব্যয়
                                        <input id="year" ref="year" placeholder="Session" name="title" type="text"/>
                                        অর্থ বছরের রাজস্ব বাজেটের সরবরাহ ও সেবা খাতের<br/> (ঊপখাতঃ
                                        <input ref="upokhat" placeholder="ঊপখাত" name="title" type="text"/>
                                        ) হতে ক্রয় প্রক্রিয়া
                                        মাধ্যমে
                                        নির্বাহ করা যেতে পারে। </p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 center-block">

                                    <p id="unsignLabel"><strong>হিসাবরক্ষক </strong></p>
                                </div>
                                <div className="col-md-6 center-block">

                                    <p id="unsignLabel"><strong>অনুমোদনকারী </strong></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


ChahidaPotro.propTypes = {
    ScOf: PropTypes.array.isRequired
};

export default createContainer(() => {

    return {
        ScOf: Meteor.users.find(
            {
                'profile.designation': "Scientific Officer",
                _id: { $ne: Meteor.userId() }
            }
        ).fetch()
    };
}, ChahidaPotro);