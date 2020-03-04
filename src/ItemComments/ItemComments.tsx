import React from "react";
import {Comment, Header} from "semantic-ui-react";
import {ItemComment} from "./ItemComment";

interface Props {
    itemIds: number[];
}

export class ItemComments extends React.Component<Props> {

    render() {
        const {itemIds} = this.props;
        const comments = itemIds.map(itemId => {
            return <ItemComment itemId={itemId} key={itemId} />
        });
        return (
            <Comment.Group>
                <Header as='h3' dividing>
                    Comments
                </Header>
                {comments}
            </Comment.Group>
        );
    }
}
