import ReactDOM from "react-dom";
import {ItemComment} from "./ItemComment";
import * as React from "react";

describe("<ItemComment />", () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ItemComment itemId={null} />, div);
    });
});
