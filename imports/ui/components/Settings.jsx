import React, {Component, PropTypes} from 'react';
import $ from 'jquery';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addClass1: "sidebar_li",
            addClass2: "sidebar_li",
            addClass3: "sidebar_li",
            addClass4: "sidebar_li",
            addClass5: "sidebar_li",
            bgColorComm: ["#337ab7","#337ab7","#337ab7","#337ab7","#337ab7"],
            commDivShow: [false, false, false, false, false],
        };
    }

    sidebar_link_click(e) {
        //console.log(e);
        if (e == "1") {

            //SCROLL ANIMATE
            var x = this.refs.div1;
            var top = $(x).offset().top - 70;
                $('html, body').animate({
                    scrollTop: top
                }, 600);

            this.setState({
                addClass1: "current sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",

            });
        }
        else if (e == "2") {

            //SCROLL ANIMATE
            var x = this.refs.div2;
            var top = $(x).offset().top - 70;
            $('html, body').animate({
                scrollTop: top
            }, 600);

            this.setState({
                addClass1: "sidebar_li",
                addClass2: "current sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",

            });
        }
        else if (e == "3") {

            //SCROLL ANIMATE
            var x = this.refs.div3;
            var top = $(x).offset().top - 70;
            $('html, body').animate({
                scrollTop: top
            }, 600);

            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "current sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if (e == "4") {

            //SCROLL ANIMATE
            var x = this.refs.div4;
            var top = $(x).offset().top - 70;
            $('html, body').animate({
                scrollTop: top
            }, 600);

            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "current sidebar_li",
                addClass5: "sidebar_li",

            });
        }
        else if (e == "5") {

            //SCROLL ANIMATE
            var x = this.refs.div5;
            var top = $(x).offset().top - 70;
            $('html, body').animate({
                scrollTop: top
            }, 600);

            this.state = {

                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",
                bgColorSpecComm: "#337ab7",
            };
        }


    }

    commClicked(e){
        var x = !this.state.commDivShow[parseInt(e)];
        var newcommDivShow = {};
        for (var i = 0; i < 5; i++) {
            newcommDivShow[i] = this.state.commDivShow[i];
        }
        newcommDivShow[parseInt(e)] = x;

        var col = "#337ab7";
        if(x){
            col = "darkred";
        }
        var newBgColorComm = {};
        for (var i = 0; i < 5; i++) {
            newBgColorComm[i] = this.state.bgColorComm[i];
        }
        newBgColorComm[parseInt(e)] = col;

        this.setState({
            commDivShow: newcommDivShow,
            bgColorComm: newBgColorComm,
        });
    }


    render() {
        var sideBar =
            <div className="navbar navbar-inverse navbar-fixed-left sidebar">
                <ul className="sidebar_ul">
                    <li className={this.state.addClass1}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "1")}>
                            Settings
                        </a>
                    </li>

                    <li className={this.state.addClass2}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "2")}>
                            Committee
                        </a>
                    </li>

                    <li className={this.state.addClass3}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "3")}>
                            Create Standard Doc
                        </a>
                    </li>

                    <li className={this.state.addClass4}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "4")}>
                            Create Standard Doc
                        </a>
                    </li>

                    <li className={this.state.addClass5}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "5")}>
                            Create Standard Doc
                        </a>
                    </li>
                </ul>

            </div>

        var specCommDiv;
        if(this.state.commDivShow[0]){
            specCommDiv=
                <div>
                    <h1 style={{textAlign: "center", paddingTop:"2%"}}>THE COW</h1>
                    <p style={{marginLeft:"3%",marginRight:"3%", paddingBottom:"2%"}}>
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                        Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                    </p>
                </div>
        }

        var specCommitte =
            <div>
                <button type="button" className="btn btn-primary"
                        style={{width: "100%", backgroundColor: this.state.bgColorComm[0]}}
                        onClick={this.commClicked.bind(this, "0")}>
                    Specification Company
                </button>
                {specCommDiv}
            </div>



        return (
            <div className="row ">
                <div className="col-md-2">
                    {sideBar}
                </div>
                <div className="col-md-10">
                    <div  ref="div1" style={{marginLeft:"3%",marginRight:"3%", marginTop:"2%", marginBottom:"6%",backgroundColor:"white"}}>
                        {specCommitte}
                    </div>

                    <div  ref="div2" style={{marginLeft:"3%",marginRight:"3%", marginTop:"2%", marginBottom:"6%",backgroundColor:"white"}}>
                        <h1 style={{textAlign: "center", paddingTop:"2%"}}>THE COW</h1>
                        <p style={{marginLeft:"3%",marginRight:"3%", paddingBottom:"2%"}}>
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        </p>
                    </div>

                    <div  ref="div3" style={{marginLeft:"3%",marginRight:"3%", marginTop:"2%", marginBottom:"6%",backgroundColor:"white"}}>
                        <h1 style={{textAlign: "center", paddingTop:"2%"}}>THE COW</h1>
                        <p style={{marginLeft:"3%",marginRight:"3%", paddingBottom:"2%"}}>
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        </p>
                    </div>

                    <div  ref="div4" style={{marginLeft:"3%",marginRight:"3%", marginTop:"2%", marginBottom:"6%",backgroundColor:"white"}}>
                        <h1 style={{textAlign: "center", paddingTop:"2%"}}>THE COW</h1>
                        <p style={{marginLeft:"3%",marginRight:"3%", paddingBottom:"2%"}}>
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        </p>
                    </div>

                    <div  ref="div5" style={{marginLeft:"3%",marginRight:"3%", marginTop:"2%", marginBottom:"6%",backgroundColor:"white"}}>
                        <h1 style={{textAlign: "center", paddingTop:"2%"}}>THE COW</h1>
                        <p style={{marginLeft:"3%",marginRight:"3%", paddingBottom:"2%"}}>
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                            Cow is a domestic and very successful animal. It is of great importance for the people of Hindu religion. It is a most important pet animal kept by almost all people of Hindu religion. It is female animal who gives us milk daily two times, in the morning and evening. Some cow gives milk three times a day according to their diet and capacity. Cow is considered by the Hindu people as a mother and called as the Gau Mata. Hindu people respect cow very much and do worship. Cow milk is offered to God during pooja and katha. It is also used to do abhishek of the God and Goddess statue during festivals and pooja.
                            Cow milk is given high status in the society as it is very beneficial to us. She gives birth to a small calf after 12 months. She does not give any practice to her child to walk or run, he/she starts walking and running just after the birth. Her calf drinks her milk for some days or months and starts eating food like her. Cow is a very sacred animal for all Hindus. It is a big domestic animal having four legs, a tail, two ear, two eyes, one nose, one mouth, one head and a wide back.
                        </p>
                    </div>
                </div>
            </div>
        );

    }
}