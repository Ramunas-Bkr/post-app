import React from 'react';
import './PostAddForm.css';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Parašykite ką galvojate dabar"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
            Pridėti</button>
        </form>
    )
}

export default PostAddForm
