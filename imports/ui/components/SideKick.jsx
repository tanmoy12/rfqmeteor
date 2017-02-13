import React, {Component} from "react";


export default class SideKick extends Component {

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
                            <input type="text" name="username" className="form-control"
                                   placeholder="Username"/>

                        </div>

                        <div className="form-group">
                            <input type="password" name="password" className="form-control"
                                   placeholder="Password"/>


                        </div>

                        <div>
                            <input type="submit" name="login-submit" id="submit-all"
                                   className="btn btn-primary" value="SIGN & FORWARD"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
