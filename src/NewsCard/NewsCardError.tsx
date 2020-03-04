import React from "react";
import {Card} from "semantic-ui-react";

export class NewsCardError extends React.Component {

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Description>Uh oh! an error occurred</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}
