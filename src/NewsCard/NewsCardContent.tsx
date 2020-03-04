import React from "react";
import {Card, Icon} from "semantic-ui-react";
import Moment from "react-moment";
import {NewsItem} from "../models/newsItem";
import {DEFAULT_URL} from "../constants";
import {Link} from "react-router-dom";

interface Props {
    item: NewsItem;
}

export class NewsCardContent extends React.Component<Props> {
    render() {
        const {item} = this.props;
        const url = item.url ? new URL(item.url) : new URL(DEFAULT_URL);
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Meta textAlign="right">
                        <Moment fromNow>{item.time*1000}</Moment>
                    </Card.Meta>
                    <Card.Header>
                        {item.title}
                    </Card.Header>
                    <Card.Meta>
                        {item.score} points by {item.by}
                    </Card.Meta>
                    <Card.Description>
                        {url.hostname}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/item-discussion/${item.id}`}>
                        <p>
                            <Icon name="chat" />
                            {item.descendants} comments
                        </p>
                    </Link>
                </Card.Content>
            </Card>
        );
    }
}
