import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import SideBar from './SideBar';

class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signed: false
        };
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
        else {
            return (
                <div className="col-md-6 center-block">
                    <hr id="unsignhr" style={{width: "80%"}}/>
                    <p id="signTag"><strong>{signfor} </strong></p>
                </div>
            )
        }
    }

    render() {
        if (this.props.RFQ_details) {
            var chahida_potro = this.props.RFQ_details.chahida;
            var RFQItem = this.props.RFQ_details;
            var chahidaSend = {
                name: "চাহিদা পত্র",
                info: [
                    {
                        title: 'RFQ Title',
                        details: RFQItem.chahida.title
                    },
                    {
                        title: 'RFQ Estimae',
                        details: 'TK. ' + RFQItem.chahida.estimate + ' /='
                    },
                    {
                        title: 'Initiator',
                        details: RFQItem.chahida.initiator.name
                    }
                ],
                link: '/ChahidaPotroload/' + RFQItem._id
            }
            var stanCreate, stanLoad, allowanceNikosh,meetingNotice;
            if(this.props.RFQ_details.step_no==3 && Meteor.userId()==this.props.RFQ_details.standard.initiator.user_id){
                stanCreate = "/StandardDocument/" + this.props.RFQ_details._id;
            }
            if(this.props.RFQ_details.step_no>3){
                stanLoad = {
                    name: 'Standard Document',
                    info: [],
                    link: "/StandardDocumentLoad/" + this.props.RFQ_details._id
                };
            }
            if(this.props.RFQ_details.step_no==6 && Meteor.userId()==this.props.RFQ_details.meeting.initiator.user_id){
                meetingNotice= "/MeetingNotice/"+this.props.RFQ_details._id;
            }
            if(this.props.RFQ_details.step_no>6){
                meetingNotice= "/MeetingNotice/"+this.props.RFQ_details._id;
            }
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar
                                chahidaBlock={chahidaSend}
                                createStandardDoc={stanCreate}
                                standardBlock={stanLoad}
                                allowanceNikosh={allowanceNikosh}
                                meetingNotice={meetingNotice}
                            />


                        </div>
                        <div className="col-md-9 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-top col-md-12">
                                        <img src="../dricmlogo.jpg" className="center-block"/>
                                        <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                        <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>

                            <p className="text">
                                ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)-এর আওতাধীন ডেজিগনেটেড
                                রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস- এর বৈজ্ঞানিক কর্মকর্তা
                                <strong>{this.props.RFQ_details.chahida.initiator.name}</strong>- এর কাছ
                                থেকে প্রাপ্ত চাহিদার (কপি সংযুক্ত) আলোকে গবেষণার জন্য
                                <strong>{this.props.RFQ_details.title}</strong> ক্রয় করা প্রয়োজন। কাজটি
                                জরুরী বিধায় স্থানীয় সরবরাহকারী প্রতিষ্ঠানের সাথে যোগাযোগ করে তুলনামূলক প্রতিযোগী
                                দরদাতা দ্বারা PPR-২০০৮ এর তফসীল-২-এর বিধি ৯(২)(ক) অনুসরণে RFQ পদ্ধতিতে সংগ্রহ করা
                                যেতে পারে।
                            </p>

                            <p className="text"> ২। সদয় অনুমোদনের জন্য নথি উপস্থাপন করা হলো </p>

                            {this.genSignBlock("হিসাবরক্ষক", chahida_potro.accountant)}
                            {this.genSignBlock("অনুমোদনকারী", chahida_potro.director)}

                            <p className="text"> ৩। নোটানুচ্ছেদ ০১ এর অনুমোদনের আলোকে গবেষণাগারের প্রয়োজনের নিরীখে
                                ……………….. এর Specification প্রস্তুত করার দায়িত্ব বাজারমূল্য নির্ধারন ও স্পেসিফিকেশন
                                প্রস্তুতকরন কমিটিকে দেয়া যেতে পারে।
                            </p>

                            {this.genSignBlock("হিসাবরক্ষক", chahida_potro.accountant)}
                            {this.genSignBlock("অনুমোদনকারী", chahida_potro.director)}

                            <p className="text"> ৪। নোটানুচ্ছেদ ০৩ এর মাধ্যমে প্রাপ্ত আদেশের আলোকে প্রয়োজনীয় …………..
                                সমূহের
                                Specification ও বাজারমূল্য নির্ধারনকৃত হয়েছে(কপি সংযুক্ত)। প্রস্তুতকৃত Specification
                                ও বাজারমূল্যের আলোকে প্রয়োজনীয় ……………… ক্রয় করা যেতে পারে।

                            </p>

                            <div className="row">
                                <div className="col-md-6">
                                    <p className="verify"> নিবেদক </p>
                                    <div className="boxed"> Image & Signature</div>
                                </div>
                                <div className="col-md-6">
                                    <p className="verify"> জাছাইকারি </p>
                                    <div className="boxed"> Image & Signature</div>
                                </div>
                                <div className="notefooter">
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>

                            </div>

                        </div>


                        <div className="row page-2">
                            <div className="col-md-3">
                                <SideBar
                                    chahidaBlock={chahidaSend}
                                />
                            </div>

                            <div className="col-md-9 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="../dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text">
                                        ৫। নোটানুচ্ছেদ ০১ এর অনুমোদনের আলোকে Chemicals সরবরাহকারী প্রতিষ্ঠানের নিকট হতে
                                        দরপত্র আহ্বানের লক্ষ্যে নোটিশ বোর্ডে বিজ্ঞপ্তি প্রকাশ এবং চিঠির মাধ্যমে অবগত
                                        করার
                                        ব্যাপারে অনুমোদনের জন্য নথি উপস্থাপন করা হলো।
                                    </p>


                                    <p className="text">
                                        ৬। নোটানুচ্ছেদ ০৫ এর অনুমোদনের আলোকে স্বচ্ছপত্র স্বাক্ষরের জন্য উপস্থাপন করা
                                        হলো।
                                    </p>


                                    <p className="text">
                                        ৭। ২৮/০২/২০১৬ তারিখে দরপত্র আহ্বানের প্রেক্ষিতে মোট ০৩ (তিন) টি দরপত্র পাওয়া
                                        গিয়েছে।
                                        দরপত্রগুলো যাচাই-বাছাই করার জন্য স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব
                                        মূল্যায়ন কমিটির সভা আহ্বান করা যেতে পারে।
                                    </p>


                                </div>
                                <div className="notefooter">
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>

                            </div>

                        </div>


                        <div className="row page-3">
                            <div className="col-md-3">
                                <SideBar
                                    chahidaBlock={chahidaSend}
                                />
                            </div>

                            <div className="col-md-9 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="../dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text">
                                        ৮।
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </p>


                                    <p className="text">
                                        ৯। টোকানুচ্ছেদ ০৮ এর আলোকে দরপত্রগুলো পুঙ্খানুপুঙ্খরূপে বিশ্লেষণের লক্ষ্যে
                                        ২৮/০২/২০১৬ তারিখে স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব মূল্যায়ন কমিটির
                                        সভা অনুষ্ঠিত হয়। দরপত্রগুলোর তুলনামূলক তালিকা প্রস্তুত করা হয়। (সংলগ্নী-১) দেখা
                                        যেতে পারে। তুলনামূলক তালিকা যাচাই-বাছাইপূর্বক সভার কার্যবিবরণী প্রস্তুত করা হয়।
                                        সভার কার্যবিবরণী (সংলগ্নী-২) দেখা যেতে পারে।
                                    </p>

                                    <div className="notetext">
                                        <p className="text">
                                            স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব মূল্যায়ন কমিটির সুপারিশকৃত
                                            BSTFA,
                                            Tert-butyldimethylsilyl trifluoromethanesulfonate, N- tert-
                                            Butyldimethylsilyl-
                                            N- methyltrifluoroacetamide, 1- (Trimethylsilyl)imidazole- Pyridine mixture,
                                            Toluene, Suprapure Nitric Acid ক্রয় করার জন্য ১,৪০,০০০/- (এক লক্ষ চল্লিশ
                                            হাজার
                                            টাকা মাত্র) টাকা প্রয়োজন। উক্ত ব্যয় ২০১৫-২০১৬ অর্থবছরের রাজস্ব বরাদ্দের
                                            রাসায়নিক
                                            দ্রব্যাদি ক্রয় খাত থেকে নির্বাহ করা যেতে পারে। উল্লেখ্য যে, ক্রয় প্রক্রিয়া
                                            সম্পন্নের জন্য প্রয়োজনীয় অর্থ রাসায়নিক দ্রব্যাদি ক্রয় খাতে প্রাপ্ত বরাদ্দের
                                            মধ্যে রয়েছে।
                                        </p>
                                    </div>

                                    <div className="notetext">
                                        <p className="text">
                                            নিম্নবর্ণিত সর্বনিম্ন দরদাতা স্থানীয় Chemicals সরবরাহকারী প্রতিষ্ঠান থেকে
                                            BSTFA,
                                            Tert-butyldimethylsilyl trifluoromethanesulfonate, N- tert-
                                            Butyldimethylsilyl-
                                            N- methyltrifluoroacetamide, 1- (Trimethylsilyl)imidazole- Pyridine mixture,
                                            Toluene, Suprapure Nitric Acid ক্রয় করার জন্য কর্তৃপক্ষের অনুমতিক্রমে
                                            কার্যাদেশ
                                            প্রদানের জন্য স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব মূল্যায়ন কমিটি
                                            সর্বসম্মতিক্রমে সুপারিশ করেন।
                                        </p>
                                    </div>

                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>ক্রমিক <br/>নং</th>
                                                <th>প্রতিষ্ঠানের নাম</th>
                                                <th>কমিটি কর্তৃক সুপারিশকৃত আইটেম</th>
                                                <th>টাকার পরিমাণ</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>০১</td>
                                                <td><strong> Millennium Dreams Co. </strong>
                                                    Mamun Plaza,<br/> Shop-127(G.F), <br/> 31 Hatkhola Road, Tikatuli,
                                                    <br/> Dhaka- 1203.
                                                </td>
                                                <td>BSTFA, Tert-butyldimethylsilyl trifluoromethanesulfonate, N- tert-
                                                    Butyldimethylsilyl- N- methyltrifluoroacetamide, 1-
                                                    (Trimethylsilyl)imidazole- Pyridine mixture, Toluene, Suprapure
                                                    Nitric Acid
                                                </td>
                                                <td>১,৪০,০০০/-</td>
                                            </tr>
                                            </tbody>

                                        </table>

                                    </div>
                                    <div className="notetext">
                                        <p className="text">
                                            ১০। বর্ণিত অবস্থার প্রেক্ষিতে স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব
                                            মূল্যায়ন কমিটির সুপারিশের আলোকে Millennium Dreams Co. কে = ১,৪০,০০০/- (এক
                                            লক্ষ চল্লিশ হাজার টাকা মাত্র) টাকার কার্যাদেশ প্রদানের সদয় অনুমোদনের জন্য
                                            উপস্থাপন করা হলো।
                                        </p>

                                    </div>
                                </div>
                                <div className="notefooter">
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>

                            </div>
                        </div>


                        <div className="row page-4">
                            <div className="col-md-3">
                                <SideBar
                                    chahidaBlock={chahidaSend}
                                />
                            </div>

                            <div className="col-md-9 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="../dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text">
                                        ১১। অনুচ্ছেদ নং ১০ এর অনুমোদনের আলোকে দরপত্রের কার্যাদেশ স্বাক্ষরের অনুমতির জন্য
                                        উপস্থাপন করা হলো।
                                    </p>


                                    <p className="text">
                                        ১২। ২৯/০২/২০১৬ ইং তারিখে 39.378.007.08.01.001.2016/WO-01 সংখ্যক কার্যাদেশের
                                        মাধ্যমে Millennium Dreams Co.-কে BSTFA, Tert-butyldimethylsilyl
                                        trifluoromethanesulfonate, N- tert- Butyldimethylsilyl- N-
                                        methyltrifluoroacetamide, 1- (Trimethylsilyl)imidazole- Pyridine mixture,
                                        Toluene, Suprapure Nitric Acid সরবরাহ বাবদ = ১,৪০,০০০/- (এক লক্ষ চল্লিশ হাজার
                                        টাকা মাত্র) টাকার কার্যাদেশ প্রদান করা হয়। নথি যোগাযোগ পৃষ্ঠা নং- মোতাবেক
                                        সরবরাহকারী প্রতিষ্ঠান Kuri & Company (Pvt.) Ltd. কার্যাদেশ চুক্তির শর্ত মোতাবেক
                                        BSTFA, Tert-butyldimethylsilyl trifluoromethanesulfonate, N- tert-
                                        Butyldimethylsilyl- N- methyltrifluoroacetamide, 1- (Trimethylsilyl)imidazole-
                                        Pyridine mixture, Toluene, Suprapure Nitric Acid ভালো অবস্থায় সরবরাহ করেছে।
                                        (চালান পৃ: নং- )
                                    </p>


                                    <p className="text">
                                        ১৩। অত্র ইনষ্টিটিউট- এ Chemicals এর প্রয়োজনীয়তা দেখা দেয়ায় BSTFA,
                                        Tert-butyldimethylsilyl trifluoromethanesulfonate, N- tert- Butyldimethylsilyl-
                                        N- methyltrifluoroacetamide, 1- (Trimethylsilyl)imidazole- Pyridine mixture,
                                        Toluene, Suprapure Nitric Acid ক্রয়ের সিদ্ধান্ত নেয়া হয়। ক্রয়ের জন্য নোটিশ
                                        বোর্ডে দরপত্র বিজ্ঞপ্তি দেয়া হয়। (নথি পৃষ্ঠা নং- )। <br/>
                                        <br/> সে সূত্রে নির্দিষ্ট দিনে ও সময়ে ০৩ (তিন) টি দরপত্র পাওয়া যায়। প্রাপ্ত
                                        দরপত্রগুলোর তুলনামূলক বিবরণী ২০/০৩/২০১৬ তারিখে অনুষ্ঠিত স্বল্পমূল্যের ক্রয়ের
                                        জন্য দরপত্র ও প্রস্তাব মূল্যায়ন
                                        কমিটির সভায় উপস্থাপন করা হলে কমিটি দরপত্রগুলো পর্যালোচনা করতঃ সর্বনিম্ন দরদাতা
                                        হিসেবে Millennium Dreams Co.-কে সর্বমোট = ১,৪০,০০০/- (এক লক্ষ চল্লিশ হাজার টাকা
                                        মাত্র) টাকায় কার্যাদেশ দেয়ার জন্য সুপারিশ করে। সে মতে Millennium Dreams Co.-কে
                                        পত্র পৃষ্ঠা নং তে রাখা কার্যাদেশ দেয়া হয়। অতঃপর কার্যাদেশে উল্লিখিত সময়সীমার
                                        মধ্যে সরবরাহকারী মালামাল সরবরাহ করেছে। চালান পত্র পৃষ্ঠা নং তে রাখা হলো। BSTFA,
                                        Tert-butyldimethylsilyl trifluoromethanesulfonate, N- tert- Butyldimethylsilyl-
                                        N- methyltrifluoroacetamide, 1- (Trimethylsilyl)imidazole- Pyridine mixture,
                                        Toluene, Suprapure Nitric Acid গবেষণাগারে সঠিকভাবে ব্যবহৃত হচ্ছে মর্মে সংশ্লিষ্ট
                                        বিজ্ঞানীরা জানান (নথি পৃষ্ঠা নং )। <br/>
                                        <br/> BSTFA, Tert-butyldimethylsilyl
                                        trifluoromethanesulfonate, N-tert- Butyldimethylsilyl- N-
                                        methyltrifluoroacetamide, 1- (Trimethylsilyl)imidazole- Pyridine mixture,
                                        Toluene, Suprapure Nitric Acid এর স্টক এন্ট্রি করা হয়েছে (স্টক বই পৃষ্ঠা নং )।
                                        <br/>
                                        <br/>
                                        কাজেই বিল পরিশোধ্য হিসেবে পরিক্ষান্তে পাওয়া গেল। বিলের বিবরণ নিম্নরূপ-
                                    </p>

                                    <div className="text-center">
                                        <p id="text-stnd1">
                                            <strong>Millennium Dreams Co.</strong> <br/>
                                            <br/>
                                            মোট টাকার পরিমাণ = ১,৪০,০০০.০০ /- <br/>
                                            ভ্যাট ৫% কর্তন = (-) ৭,০০০.০০ /- <br/>
                                            <br/> মোট = ১,৩৩,০০০ /-


                                        </p>

                                    </div>
                                </div>
                                <div className="notefooter">
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>

                            </div>
                        </div>


                        <div className="row page-5">
                            <div className="col-md-3">
                                <SideBar
                                    chahidaBlock={chahidaSend}
                                />
                            </div>

                            <div className="col-md-9 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="../dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text">
                                        ১৪। বর্ণনা মোতাবেক সরবরাহকারীকে = ১,৩৩,০০০ /- (এক লক্ষ তেত্রিশ হাজার টাকা মাত্র)
                                        টাকা পরিশোধ্য এবং কর্তিত ভ্যাট = ৭,০০০.০০ /- (সাত হাজার টাকা মাত্র) টাকা সরকারী
                                        কোষাগারে জমাযোগ্য। উক্তরূপ পরিশোধ ব্যবস্থা গ্রহণ করা যেতে পারে । বিল ফরমে
                                        প্রয়োজনীয় রেকর্ড করা হয়েছে। বিলের অর্থ ২০১৫-২০১৬ অর্থবছরের রাজস্ব বরাদ্দের
                                        রাসায়নিক দ্রব্যাদি ক্রয় খাত হতে পরিশোধযোগ্য।
                                    </p>

                                    <p className="text">
                                        ১৫। প্রস্তাব সদয় অনুমোদনের জন্য নথি উপস্থাপন করা হলো।

                                    </p>

                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>

                                    <p className="text">
                                        ১৬। অনুমোদন মোতাবেক নিম্নের চেক ইস্যু করা হলো-
                                    </p>
                                    <div className="notetext">
                                        <p className="wo">
                                            ক) সরবরাহকারী চেক নং-………………………………………, তারিখ- ………………………… টাকা = ………………………….
                                            <br/>
                                            <br/>
                                            (…………………. লক্ষ ……………………. হাজার টাকা মাত্র)
                                        </p>
                                    </div>
                                    <div className="notetext">
                                        <p className="wo">
                                            খ) ভ্যাট (বাংলাদেশ ব্যাংক) চেক নং-………………………… , তারিখ-………………………… , টাকা =
                                            ………………………. <br/>
                                            <br/>
                                            (………………………. হাজার টাকা মাত্র)
                                        </p>
                                    </div>
                                </div>
                                <div className="notefooter">
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


Note.propTypes = {
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    return {
        RFQ_details: RFQDetails.findOne({_id: props.id})
    };
}, Note);
