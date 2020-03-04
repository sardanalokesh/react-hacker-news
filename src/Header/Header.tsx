import {Menu} from "semantic-ui-react";
import React from "react";
import {AppContext} from "../appContext";

export class AppHeader extends React.Component {

    static contextType = AppContext;

    render() {
        return (
            <Menu color={this.context.themeColor} inverted>
                <Menu.Item header link href="/">Hacker News</Menu.Item>
            </Menu>
        );
    }
}
