import React from 'react';
import './PostAddForm.css';

const PostAddForm = ({ onAdd }) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Parašykite ką galvojate dabar"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('text from input')}>
                Pridėti</button>
        </div>
    )
}

export default PostAddForm
