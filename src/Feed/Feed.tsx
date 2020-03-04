import React from "react";
import {RestApis} from "../restApis";
import {NewsCard} from "../NewsCard/NewsCard";
import {Segment} from "semantic-ui-react";
import {NewsItemType} from "../models/newsItem";

interface Props {
}

interface State {
    error: any;
    isLoaded: boolean;
    items: number[]
}

export class Feed extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(): void {
        Feed.fetchTopStories().then(
            (ids: number[]) => {
                this.setState({
                    error: null,
                    isLoaded: true,
                    items: ids
                });
            },
            (error) => {
                console.log(error);
                this.setState({
                    isLoaded: true,
                    items: [],
                    error: error
                });
            }
        );
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            throw error;
        }
        const itemCards = items.map((itemId: number) => {
            return (
                <NewsCard newsItemId={itemId} key={itemId} />
            );
        });
        return (
            <Segment loading={!isLoaded} style={{minHeight: 50}}>
                {itemCards}
            </Segment>
        );
    }

    private static async fetchTopStories(): Promise<number[]> {
        return await fetch(RestApis.TOP_STORIES)
            .then(res => res.json())
            .then(items => items.slice(0, 20));
    }
}
