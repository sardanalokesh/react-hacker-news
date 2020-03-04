import ReactDOM from "react-dom";
import * as React from "react";
import {ItemDiscussion} from "./ItemDiscussion";

describe("<ItemDescription />", () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ItemDiscussion />, div);
    });
});
