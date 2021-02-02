import React, { Component } from 'react';
import './PostStatusFilter.css';
export default class PostStatusFilter extends Component {

    constructor() {
        super();
        this.buttons = [
            { name: 'all', label: 'Visi' },
            { name: 'like', label: 'Patikę' }
        ]
    }
    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const active = this.props.filter === name;
            const activeClass = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    className={`btn ${activeClass}`}
                    key={name} color="info"
                    onClick={() => this.props.onFilterSelect(name)}>
                    { label}
                </button >
            )
        })
        return (
            <div className="btn-group d-flex" >
                { buttons}
            </div>
        )
    }
}
