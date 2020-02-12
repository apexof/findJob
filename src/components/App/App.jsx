import React, { Component, Fragment } from "react";
import VacancyBlock from "../VacancyBlock/VacancyBlock";
import SearchForm from "../SearchForm/SearchForm";
import "./App.scss";


class App extends Component {
    state = { findText: "" }

    typeRequest = (e) => {
        this.setState({ findText: e.target.value });
        console.log(e.target.value);
    }

    render() {
        return (
            <Fragment>
                <SearchForm typeRequest={this.typeRequest} />
                <VacancyBlock findText={this.state.findText} />
            </Fragment>
        );
    }
}

export default App;
