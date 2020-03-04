import ReactDOM from "react-dom";
import * as React from "react";
import {ItemComments} from "./ItemComments";

describe("<ItemComments />", () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ItemComments itemIds={[]} />, div);
    });
});
