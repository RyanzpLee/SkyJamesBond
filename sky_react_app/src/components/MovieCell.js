import React, { Component } from "react"


export default class MovieCell extends Component {
    state = {
        name: this.props.name,
        title: this.props.title,
        startTime: this.props.startTime,
        endTime: this.props.endTime,
    }

    render() {
        return (
            <div>
                <td>
                    {this.props.title}
                </td>
            </div>
        )
    }

}