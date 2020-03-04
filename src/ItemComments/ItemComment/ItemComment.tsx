import React from "react";
import {Comment, Placeholder} from 'semantic-ui-react';
import {NewsItem} from "../../models/newsItem";
import {RestApis} from "../../restApis";
import Moment from "react-moment";


interface Props {
    itemId: number;
}

interface State {
    item: NewsItem,
    isLoaded: boolean,
    error: null
}

export class ItemComment extends React.Component<Props, State> {


    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            item: null,
            isLoaded: false,
            error: null
        };
    }

    componentDidMount(): void {
        fetch(RestApis.item(this.props.itemId))
            .then(res => res.json())
            .then((item: NewsItem) => {
                this.setState({
                    item: item,
                    error: null,
                    isLoaded: true
                });
            }, (error) => {
                this.setState({
                    item: null,
                    error: error,
                    isLoaded: true
                });
            });
    }

    render() {
        const {item} = this.state;
        if (this.state.isLoaded) {
            return (
                <Comment>
                    <Comment.Content>
                        <Comment.Author as='a'>{item.by}</Comment.Author>
                        <Comment.Metadata>
                            <span><Moment fromNow>{item.time*1000}</Moment></span>
                        </Comment.Metadata>
                        <Comment.Text>{item.text}</Comment.Text>
                        <Comment.Actions>
                            <a>Reply</a>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            );
        } else {
            return (
                <Comment>
                    <Comment.Content>
                        <Placeholder>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder>
                    </Comment.Content>
                </Comment>
            );
        }
    }
}
