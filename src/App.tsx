import React from 'react';
import './App.scss';
import {AppHeader} from "./Header/Header";
import {AppContext} from "./appContext";
import {Container} from "semantic-ui-react";
import {Feed} from "./Feed/Feed";
import {Router} from "react-router";
import {AppRouter} from "./AppRouter";

interface Props {
}

interface State {
}


export default class App extends React.Component<Props, State> {

    private appContext: any = {
      themeColor: "blue"
    };

    render() {
        return (
            <div className="App">
                <AppContext.Provider value={this.appContext}>
                    <AppHeader />
                    <Container>
                        <AppRouter />
                    </Container>
                </AppContext.Provider>
            </div>
        );
    }
}
