import {Feed} from "./Feed";
import ReactDOM from "react-dom";
import * as React from "react";

describe("<Feed />", () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Feed />, div);
    });
});
