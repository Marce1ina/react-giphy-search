import React from "react";
import Search from "./Search.js";
import Giph from "./Giph.js";

class App extends React.Component {
    state = { giphSrc: "", loading: false };

    search = text => {
        if (this.state.loading !== true) {
            this.setState({
                loading: true
            });
            fetch(
                `https://cors-anywhere.herokuapp.com/api.giphy.com/v1/gifs/search?q=${text}&api_key=AVVhzAJmx3krVsVHNUmvBlwHjjIjgmQH`
            )
                .then(data => data.json())
                .then(dataJSON => {
                    const results = dataJSON.data;
                    if (dataJSON.meta.status === 200 && results.length) {
                        this.setState({
                            giphSrc: results[Math.floor(Math.random() * results.length)].images.downsized.url
                        });
                    } else {
                        this.setState({
                            giphSrc: "https://media.giphy.com/media/YyKPbc5OOTSQE/giphy.gif"
                        });
                    }
                    this.setState({
                        loading: false
                    });
                });
        }
    };

    render = function() {
        return (
            <div className="app">
                <h1 className="header">Giphy search</h1>
                <Search onSubmit={this.search} />
                <Giph src={this.state.giphSrc} loading={this.state.loading} />
            </div>
        );
    };
}

export default App;
