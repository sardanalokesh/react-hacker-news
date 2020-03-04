import React from "react";
import {Card, Placeholder} from "semantic-ui-react";

export class NewsCardPlaceholder extends React.Component {

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Placeholder fluid>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder>
                </Card.Content>
            </Card>
        );
    }
}
