import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Feed} from "./Feed/Feed";
import {ItemDiscussion} from "./ItemDiscussion/ItemDiscussion";

export class AppRouter extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/feed">
                        <Feed />
                    </Route>
                    <Route path="/item-discussion/:itemId" component={ItemDiscussion}>
                    </Route>
                    <Redirect to='/feed' />
                </Switch>
            </BrowserRouter>
        );
    }
}
