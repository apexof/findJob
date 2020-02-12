import React, { Component } from "react";

class SearchForm extends Component {
    state = {}

    render() {
        const { typeRequest } = this.props;
        return (
            <div>
                <input type="text" onChange={typeRequest} />
            </div>
        );
    }
}

export default SearchForm;
