import React, { Component } from "react";
import "./Vacancy.scss";

class Vacancy extends Component {
    state = {}

    render() {
        const { name } = this.props;
        return (
            <div className="vacancy">
                {name}
            </div>
        );
    }
}

export default Vacancy;
