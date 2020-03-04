import React from "react";
import {match} from "react-router";
import {RestApis} from "../restApis";
import {NewsItem} from "../models/newsItem";
import {NewsCardContent} from "../NewsCard/NewsCardContent";
import {NewsCardPlaceholder} from "../NewsCard/NewsCardPlaceholder";
import {ItemComments} from "../ItemComments/ItemComments";
import {Segment} from "semantic-ui-react";

interface Props {
    match: match
}

interface State {
    item: NewsItem,
    isLoaded: boolean,
    error: any
}

export class ItemDiscussion extends React.Component<Props, State> {


    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            item: null,
            isLoaded: false,
            error: null
        };
    }

    componentDidMount(): void {
        const itemId = this.props.match.params["itemId"];
        fetch(RestApis.item(itemId))
            .then(res => res.json())
            .then((item: NewsItem) => {
                this.setState({
                    item: item,
                    isLoaded: true,
                    error: null
                });
            }, (error) => {
                this.setState({
                    item: null,
                    isLoaded: true,
                    error: error
                });
            });
    }

    render() {

        if (this.state.error) {
            throw this.state.error;
        }

        if (this.state.isLoaded) {
            return (
                <Segment loading={!this.state.isLoaded}>
                    <NewsCardContent item={this.state.item} />
                    <ItemComments itemIds={this.state.item.kids} />
                </Segment>
            );
        } else {
            return (
                <NewsCardPlaceholder />
            );
        }
    }
}
