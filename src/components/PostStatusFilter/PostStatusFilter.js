import React from 'react';
import { Button } from 'reactstrap';
import './PostStatusFilter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group d-flex">
            <Button color="info">Visi</Button>
            <button className="btn btn-info">Visi</button>
            <button className="btn btn-outline-secondary">Patikę</button>
        </div>
    )
}

export default PostStatusFilter
