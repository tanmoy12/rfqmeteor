import React, {Component} from "react";
import SideNote from "./SideNote";


export default class Note extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 jumbotron text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-header">
                                    <img src="img/logo.png" className="center-block"/>
                                    <h2> ডেসিগ্নাতেদ রেফ্রেঞ্চে ইন্সিটিউট অফ কেমিক্যাল মেযারমেন্তস</h2>
                                    <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                </div>
                            </div>
                        </div>

                        <p className="text">
                            ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)-এর আওতাধীন ডেজিগনেটেড
                            রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস- এর বৈজ্ঞানিক কর্মকর্তা …………- এর কাছ
                            থেকে প্রাপ্ত চাহিদার (কপি সংযুক্ত) আলোকে গবেষণার জন্য ……………. ক্রয় করা প্রয়োজন। কাজটি
                            জরুরী বিধায় স্থানীয় সরবরাহকারী প্রতিষ্ঠানের সাথে যোগাযোগ করে তুলনামূলক প্রতিযোগী
                            দরদাতা দ্বারা PPR-২০০৮ এর তফসীল-২-এর বিধি ৯(২)(ক) অনুসরণে RFQ পদ্ধতিতে সংগ্রহ করা
                            যেতে পারে।
                        </p>

                        <p className="text"> ২। সদয় অনুমোদনের জন্য নথি উপস্থাপন করা হলো </p>

                        <div className="row">
                            <div className="col-md-6">
                                <p className="verify"> নিবেদক </p>
                                <div className="boxed"> Image & Signature</div>
                            </div>
                            <div className="col-md-6">
                                <p className="verify"> জাছাইকারি </p>
                                <div className="boxed"> Image & Signature</div>
                            </div>
                        </div>

                        <p className="text"> ৩। নোটানুচ্ছেদ ০১ এর অনুমোদনের আলোকে গবেষণাগারের প্রয়োজনের নিরীখে
                            ……………….. এর Specification প্রস্তুত করার দায়িত্ব বাজারমূল্য নির্ধারন ও স্পেসিফিকেশন
                            প্রস্তুতকরন কমিটিকে দেয়া যেতে পারে।
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
                        </div>

                        <p className="text"> ৪। নোটানুচ্ছেদ ০৩ এর মাধ্যমে প্রাপ্ত আদেশের আলোকে প্রয়োজনীয় ………….. সমূহের
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
                        </div>

                    </div>
                    <SideNote ChahidaPotro={this.props.id}/>
                </div>
            </div>


        );
    }
}
