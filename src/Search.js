import React from "react";

class Search extends React.Component {
    state = { value: "" };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleKeyUp = event => {
        if (event.keyCode === 13 || this.state.value.length > 2) this.triggerSearch();
    };

    triggerSearch = () => this.props.onSubmit(this.state.value);

    render = function() {
        return (
            <div className="search">
                <input
                    className="input"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                />
                <button className="submitBtn" type="submit" onClick={this.triggerSearch}>
                    Search!
                </button>
            </div>
        );
    };
}

export default Search;
