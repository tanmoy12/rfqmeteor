import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class SideKick extends Component {
    constructor(props) {
        super(props);
    }
    handleSignForward(e) {
        e.preventDefault();
        var that=this;
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        console.log(password);
        var digest = Package.sha.SHA256(password);
        Meteor.call('checkPassword', digest, function (err, result) {
            if (result) {
                console.log('the passwords match!');
                console.log("wtf");
            }
            else {
                console.log("no match");
                Bert.alert('Incorrect Password!!', 'danger', 'growl-top-right');
            }
        });
    }

    render() {

        return (
            <div className="col-md-3">
                <div id="sidekickjumbo" className="col-md-12 jumbotron">
                    <div className="form-group text-center">
                        <p>FORWARD TO <strong>VERIFIER :</strong></p>
                        <div className="form-group">
                            <select className="form-control">
                                <option>Scientific Officer</option>
                                <option>Trader</option>
                                <option>Normal user</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <input type="password" name="password" className="form-control" ref="password"
                                   placeholder="Password"/>
                        </div>

                        <div>
                            <input onClick={this.handleSignForward.bind(this)} type="submit" name="login-submit" id="submit-all"
                                   className="btn btn-primary" value="SIGN & FORWARD"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
