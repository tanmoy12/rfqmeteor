import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";

import SideBar from './SideBar';

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

    genApplyHead(){
        var i=0;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i} id="nss">{application.company.user_id}
                    Mamun Plaza, Shop-127(G.F), 31 Hatkhola Road, Tikatuli, Dhaka- 1203.
                </td>
            )
        })
    }

    genApplyAmount(){
        var i=0;
        var that=this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}><strong>{application.amount} Tk
                    ({that.convertNumberToWords(application.amount)} taka only)</strong>
                </td>
            )
        })
    }

    genApplyTitle(){
        var i=0;
        var that=this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}><strong>supply of {that.props.RFQ_details.chahida.title}</strong>
                </td>
            )
        })
    }

    genApplyTrade(){
        var i=0;
        var that=this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}>Submitted</td>
            )
        })
    }

    genApplyTax(){
        var i=0;
        var that=this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}>Submitted</td>
            )
        })
    }

    genApplySolvency(){
        var i=0;
        var that=this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}>Submitted</td>
            )
        })
    }

    genApplyValidity(){
        var i=0;
        var that=this;
        return this.props.RFQ_details.standard_apply.map(function (application) {
            i++;
            return (
                <td key={i}>20 Days</td>
            )
        })
    }

    render() {
        if(this.props.RFQ_details) {
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
                                        <span
                                            className="pull-left"><strong>RFQ No :  <b>{this.props.RFQ_details.standard.RFQ_no}</b></strong></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p id="dateload"><strong>DATE {this.datefromcreate(this.props.RFQ_details.meeting.dateOfMeeting)}</strong></p>
                                        </div>
                                    </div>


                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead className="text-center">
                                            <tr>
                                                <td>S/N</td>
                                                <td id="nss">As tender document</td>
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
                                                <td>মIncome tax certificate</td>
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
                                    <thead>
                                    <tr>
                                        <td>Item No</td>
                                        <td>Required Specification</td>
                                        {this.genApplyHead()}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><strong>01</strong></td>
                                        <td><strong>BSTFA</strong></td>
                                        <td><strong>BSTFA</strong></td>
                                        <td><strong>BSTFA</strong></td>
                                        <td><strong>BSTFA</strong></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>N, O- bis (trimethylsilyl) trifluoroacetamide <br/>
                                            Grade: Derivatization Grade for GC <br/>
                                            derivatization <br/>
                                            Pack Size: 25 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: To be mentioned <br/>
                                            Origin: To be mentioned
                                        </td>
                                        <td>N, O- bis (trimethylsilyl) trifluoroacetamide <br/>
                                            Grade: Derivatization Grade for GC derivatization <br/>
                                            Pack Size: 25 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe <br/>
                                            <br/>
                                            <br/>
                                            <strong>Price: 14,400.00 TK</strong>

                                        </td>
                                        <td>N, O- bis (trimethylsilyl) trifluoroacetamide <br/>
                                            Grade: Derivatization Grade for GC <br/>
                                            derivatization <br/>
                                            Pack Size: 25 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Fluka <br/>
                                            Origin: USA <br/>
                                            <br/>
                                            <br/>
                                            <strong>Price: 15,500.00 TK</strong>
                                        </td>
                                        <td>N, O- bis (trimethylsilyl) trifluoroacetamide <br/>
                                            Grade: Derivatization Grade for GC derivatization <br/>
                                            Pack Size: 25 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Fluka <br/>
                                            Origin: USA <br/>
                                            <br/>
                                            <br/>
                                            <strong>Price: 16,000.00 TK</strong>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><strong>02</strong></td>
                                        <td><strong>Tert- butyldimethylsilyl trifluoromethanesulfonate</strong></td>
                                        <td><strong>Tert- butyldimethylsilyl trifluoromethanesulfonate</strong></td>
                                        <td><strong>Tert- butyldimethylsilyl trifluoromethanesulfonate</strong></td>
                                        <td><strong>Tert- butyldimethylsilyl trifluoromethanesulfonate</strong></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>Tert- butyldimethylsilyl trifluoromethanesulfonate <br/>
                                            Grade: GC derivatization
                                            <br/>
                                            Pack Size: 10 mL<br/>
                                            Quantity: 01<br/>
                                            Make: To be mentioned <br/>
                                            Origin: To be mentioned

                                        </td>
                                        <td>Tert- butyldimethylsilyl trifluoromethanesulfonate <br/>
                                            Grade: GC derivatization <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe <br/>
                                            <br/>
                                            <strong>Price: 33,200.00 TK</strong>

                                        </td>
                                        <td>Tert- butyldimethylsilyl trifluoromethanesulfonate<br/>
                                            Grade: GC derivatization<br/>
                                            <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Fluka <br/>
                                            Origin: USA
                                            <br/>
                                            <strong>Price: 35,000.00 TK</strong>
                                        </td>
                                        <td>Tert- butyldimethylsilyl trifluoromethanesulfonate <br/>
                                            Grade: GC derivatization <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 35,200.00 TK</strong>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><strong>03</strong></td>
                                        <td><strong>N- tert- Butyldimethylsilyl- N- methyltrifluoroacetamide</strong></td>
                                        <td><strong>N- tert- Butyldimethylsilyl- N- methyltrifluoroacetamide</strong></td>
                                        <td><strong>N- tert- Butyldimethylsilyl- N- methyltrifluoroacetamide</strong></td>
                                        <td><strong>N- tert- Butyldimethylsilyl- N- methyltrifluoroacetamide</strong></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>N- tert- Butyldimethylsilyl- N methyltrifluoroacetamide <br/>
                                            N- tert- Butyldimethylsilyl- N methyltrifluoroacetamide <br/>
                                            with 1% tert- Butyldimethylchlorosilane <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: To be mentioned <br/>
                                            Origin: To be mentioned
                                        </td>
                                        <td>N- tert- Butyldimethylsilyl- N methyltrifluoroacetamide <br/>
                                            N- tert- Butyldimethylsilyl- N methyltrifluoroacetamide <br/>
                                            with 1% tert- Butyldimethylchlorosilane <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 38,200.00 TK </strong>
                                        </td>
                                        <td>N- tert- Butyldimethylsilyl- N methyltrifluoroacetamide <br/>
                                            N- tert- Butyldimethylsilyl- N methyltrifluoroacetamide <br/>
                                            with 1% tert- Butyldimethylchlorosilane <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 40,500.00 TK</strong>
                                        </td>
                                        <td>N- tert- Butyldimethylsilyl- N methyltrifluoroacetamide <br/>
                                            N- tert- Butyldimethylsilyl- N methyltrifluoroacetamide <br/>
                                            with 1% tert- Butyldimethylchlorosilane <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 42,500.00 TK </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>04</strong></td>
                                        <td><strong>1- (Trimethylsilyl)imidazole- Pyridine mixture</strong></td>
                                        <td><strong>1- (Trimethylsilyl)imidazole- Pyridine mixture</strong></td>
                                        <td><strong>1- (Trimethylsilyl)imidazole- Pyridine mixture</strong></td>
                                        <td><strong>1- (Trimethylsilyl)imidazole- Pyridine mixture</strong></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>1- (Trimethylsilyl)imidazole- Pyridine mixture
                                            Grade: GC derivatization <br/>
                                            Assay: 98% <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: To be mentioned <br/>
                                            Origin: To be mentioned

                                        </td>
                                        <td>1- (Trimethylsilyl)imidazole- Pyridine mixture <br/>
                                            Grade: GC derivatization <br/>
                                            Assay: 98% <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 20,200.00 TK</strong>

                                        </td>
                                        <td>1- (Trimethylsilyl)imidazole- Pyridine mixture <br/>
                                            Grade: GC derivatization <br/>
                                            Assay: 98% <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 22,000.00 TK</strong>
                                        </td>
                                        <td>1- (Trimethylsilyl)imidazole- Pyridine mixture <br/>
                                            Grade: GC derivatization <br/>
                                            Assay: 98% <br/>
                                            Pack Size: 10 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Fluka <br/>
                                            Origin: USA
                                            <br/>
                                            <strong>Price: 20,500.00 TK</strong>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><strong>05</strong></td>
                                        <td><strong>Toluene</strong></td>
                                        <td><strong>Toluene</strong></td>
                                        <td><strong>Toluene</strong></td>
                                        <td><strong>Toluene</strong></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>Toluene <br/>
                                            Grade: Analytical standard <br/>
                                            Pack Size: 5 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: To be mentioned <br/>
                                            Origin: To be mentioned
                                        </td>
                                        <td>Toluene <br/>
                                            Grade: Analytical standard <br/>
                                            Pack Size: 5 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 4,000.00 TK </strong>
                                        </td>
                                        <td>Toluene <br/>
                                            Grade: Analytical standard <br/>
                                            Pack Size: 5 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 4,750.00 TK</strong>
                                        </td>
                                        <td>Toluene <br/>
                                            Grade: Analytical standard <br/>
                                            Pack Size: 5 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong>Price: 5,000.00 TK</strong>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><strong>06</strong></td>
                                        <td><strong>Suprapure Nitric Acid</strong></td>
                                        <td><strong>Suprapure Nitric Acid</strong></td>
                                        <td><strong>Suprapure Nitric Acid</strong></td>
                                        <td><strong>Suprapure Nitric Acid</strong></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td>Nitric Acid <br/>
                                            Grade: Suprapure <br/>
                                            Pack Size: 250 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: To be mentioned <br/>
                                            Origin: To be mentioned
                                        </td>
                                        <td>Nitric Acid <br/>
                                            Grade: Suprapure <br/>
                                            Pack Size: 250 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Roth <br/>
                                            Origin: Spain
                                            <br/>
                                            <strong>Price: 30,000.00 TK</strong>
                                        </td>
                                        <td>Nitric Acid <br/>
                                            Grade: Suprapure <br/>
                                            Pack Size: 250 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Roth <br/>
                                            Origin: Spain
                                            <br/>
                                            <strong>Price: 32,400.00 TK</strong>
                                        </td>
                                        <td>Nitric Acid <br/>
                                            Grade: Suprapure <br/>
                                            Pack Size: 250 mL <br/>
                                            Quantity: 01 <br/>
                                            Make: Sigma Aldrich <br/>
                                            Origin: Europe
                                            <br/>
                                            <strong> Price: 34,500.00 TK </strong>
                                        </td>
                                    </tr>
                                    </tbody>

                                </table>

                            </div>

                            <div className="row">
                                <div className="col-lg-12 ">
                                    <div className="col-lg-6 col-md-6 text-center">
                                        <p id="text-stnd">
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            (Sumiya Akter) <br/>
                                            Scientific Officer <br/>
                                            DRiCM, BCSIR <br/>
                                            & Member- Secretary, TEC
                                        </p>
                                    </div>

                                    <div className="col-lg-6 col-md-6 text-center">
                                        <p id="text-stnd">
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            (Md. Juwel Hossen) <br/>
                                            Scientific Officer <br/>
                                            DRiCM, BCSIR <br/>
                                            & Member, TEC

                                        </p>
                                    </div>

                                    <div className="col-lg-6 col-md-6 text-center">
                                        <p id="text-stnd">
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            (Md. Abdul Hai) <br/>
                                            Technical Officer (Purchase) <br/>
                                            BCSIR <br/>
                                            & Member, TEC

                                        </p>
                                    </div>

                                    <div className="col-lg-6 col-md-6 text-center">
                                        <p id="text-stnd">
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            (Dr. Bilkis Ara Begum) <br/>
                                            PSO & Head,Chemistry Division <br/>
                                            Bangladesh Atomic Energy Center,Dhaka <br/>
                                            & Member, TEC

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <p id="text-stnd">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    (Farzana Hossain) <br/>
                                    Scientific Officer <br/>
                                    DRiCM, BCSIR <br/>
                                    &Chairman, TEC
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


            );
        }else{
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
