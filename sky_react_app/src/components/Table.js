import react, { Component } from "react"
import movieData from './Data.json'
import MovieCell from './components/MovieCell'

const movieString = JSON.stringify(movieData)



export default class Table extends Component {
    constructor() {
        super()
        this.state = {
            channels: movieString
        }
    }

    createMovieCell = name => {
        <MovieCell 
            name=""
        />
    }

    createMovieCells = () => {
        this.state.channels.map(this.createMovieCell)
    }

    render() {
        // const channelItems = this.state.channels.map()
        return (
            <main>
                <div>
                    {dataObject}
                </div>
                <table>
                    <th>Table goes here</th>
                </table> 
            </main>
        )
    }
}
