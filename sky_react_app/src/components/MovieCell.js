import React, { Component } from "react"


class MovieCell extends Component {
    state = {
        name: this.props.name,
        title: this.props.title,
        startTime: this.props.startTime,
        endTime: this.props.endTime,
    }

    render() {
        return (
                
                <td>
                    {this.props.title}
                </td>
        )
    }

}


export default MovieCell