import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../PostListItem/PostListItem';
import './PostList.css';

const PostList = ({ posts }) => {

    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps} />
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList
