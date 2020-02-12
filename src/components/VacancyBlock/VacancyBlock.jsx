import Masonry from "react-masonry-component";
import React, { Component } from "react";
import data from "./data";
import "./VacancyBlock.scss";
import VacancyList from "../VacancyList/VacancyList";

class VacancyBlock extends Component {
    state = {}

    render() {
        const { findText } = this.props;
        const masonryOptions = {
            itemSelector: ".vacancy-list",
            columnWidth: 150,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <div className="container">
                <Masonry
                    className="vacancy-block"
                    options={masonryOptions}
                >
                    {data.map(item => (
                        <VacancyList
                            id={item.id}
                            company={item.company}
                            vacancies={item.vacancies}
                            findText={findText}
                        />
                    ))}
                </Masonry>
            </div>
        );
    }
}

export default VacancyBlock;
