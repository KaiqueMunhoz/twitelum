import React, { Component } from 'react'
import './trendsArea.css'

class TrendsArea extends Component {
    render() {
        return (
            <div className="trendsArea">
                <h2 className="trendsArea__title widget__title">Trends Brasil</h2>
                <ol className="trendsArea__list">
                    <li><a>#</a></li>
                    <li><a>#</a></li>
                </ol>
            </div>
        )
    }
}

export default TrendsArea;