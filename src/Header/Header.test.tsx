import ReactDOM from "react-dom";
import * as React from "react";
import {AppHeader} from "./Header";

describe("<AppHeader />", () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppHeader />, div);
    });
});
