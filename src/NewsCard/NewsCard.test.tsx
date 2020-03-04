import ReactDOM from "react-dom";
import * as React from "react";
import {NewsCard} from "./NewsCard";

describe("<NewsCard />", () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewsCard newsItemId={null}/>, div);
    });
});
