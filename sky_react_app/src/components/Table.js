import react, { Component } from "react"
import MovieCell from './MovieCell'

//import movieData from 'j../Data/Data.json';

const movieData = require('../Data/Data.json')
console.log(movieData);
console.log("WORKS?")

// const movieString = JSON.stringify(movieData)

export default class Table extends Component {
    constructor() {
        super()
        this.state = {
            // channels: movieString
        }
    }

    // createMovieCell = name => {
    //     <MovieCell
    //         name=""
    //     />
    // }

    // createMovieCells = () => {
    //     this.state.channels.map(this.createMovieCell)
    // }

    render() {
        // const channelItems = this.state.channels.map()
        console.log("Testing")
        return (
            <main>
                <div>
                    {this.state.channels}
                </div>
                <table>
                    <th>Table goes here</th>
                </table>
            </main>
        )
    }
}

