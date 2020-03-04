import React from "react";
import {NewsItem} from "../models/newsItem";
import {RestApis} from "../restApis";
import {NewsCardContent} from "./NewsCardContent";
import {NewsCardPlaceholder} from "./NewsCardPlaceholder";
import {NewsCardError} from "./NewsCardError";

interface Props {
    newsItemId: number;
}

interface State {
    error: string;
    isLoaded: boolean;
    item: NewsItem;
}

export class NewsCard extends React.Component<Props, State> {

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: null
        };
    }

    componentDidMount(): void {
        this.fetchNewsItem(this.props.newsItemId)
            .then(
            (newsItem: NewsItem) => {
                if (newsItem) {
                    this.setState({
                        item: newsItem,
                        isLoaded: true,
                        error: null
                    });
                }
            },
            (error) => {
                this.setState({
                    item: null,
                    isLoaded: true,
                    error: error
                });
            }
        );
    }

    render() {
        const {item, isLoaded, error} = this.state;
        if (error) {
            console.error(error);
            return <NewsCardError />
        }

        if (isLoaded) {
            return <NewsCardContent item={item}/>;
        } else {
            return <NewsCardPlaceholder />
        }
    }

    private async fetchNewsItem(newsItemId: number): Promise<NewsItem> {
        try {
            return await fetch(RestApis.item(newsItemId))
                .then(res => res.json())
                .then(res => {
                    if (res.error) {
                        this.setState({
                            item: null,
                            isLoaded: true,
                            error: res.error
                        });
                        return null;
                    }
                    return res;
                });
        } catch (e) {
            this.setState({
                item: null,
                isLoaded: true,
                error: e
            });
            return null;
        }
    }


}
