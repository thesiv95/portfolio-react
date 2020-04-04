import React from "react";
import ProfileInfo from "./Main/ProfileInfo";
import MyWorks from "./Main/MyWorks";
import {Route, Switch} from "react-router";

export default class Main extends React.Component {

    render() {
        return (
            <div className="variable-content">
                <Switch>
                    <Route path={'/'} exact component={ProfileInfo}/>
                    <Route path={'/my-works'} component={MyWorks}/>
                </Switch>
            </div>
        )
    }

}