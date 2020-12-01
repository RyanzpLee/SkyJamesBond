import react, { Component } from "react"
import MovieCell from './MovieCell'

const movieData = require('../Data/Data.json')
console.log(movieData);


export default class Table extends Component {
    constructor() {
        super()
        this.state = {
            // channels: movieData
            channels: [
                { id: 1, name: 'Sean Connery', title: 'Dr No', startTime: 9, endTime: 11 },
                { id: 2, name: 'Sean Connery', title: 'Thunderball', startTime: 11, endTime: 12 },
                { id: 3, name: 'Roger Moore', title: 'Moonraker', startTime: 9, endTime: 10 },
                { id: 4, name: 'Pierce Brosnan' },
                { id: 5, name: 'Daniel Craig', title: 'Skyfall', startTime: 13, endTime: 15 }
            ]
        }
    }

    // createMovieCell = () => {
    //     <MovieCell
    //         data={this.state.channels}
    //     />
    // }

    // createMovieCells = () => {
    //     this.state.channels.map(this.createMovieCell)
    // }


    // renderTableData() {
    //     return this.state.channels.map(value => {
    //         const { id, name, shows } = value
    //         console.log(shows)
    //         return (
    //             <tr>
    //                 <th scope="row" key={id}>{name}</th>
    //                 <td>{shows.Title} </td>
    //             </tr>
    //         )
    //     })
    // }

    renderTableData() {
        return this.state.channels.map((channel, index) => {
            const { id, name, title, startTime, endTime } = channel
            return (
                <tr key={id}>
                    <td> {name}</td>
                    <td>{title ? title : "No programmes available"}</td>
                    <td>{startTime}</td>
                    <td>{endTime}</td>
                </tr>
            )
        })
    }


    render() {
        return (
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Channel</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                            <th>14</th>
                            <th>15</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </main>
        )
    }
}
