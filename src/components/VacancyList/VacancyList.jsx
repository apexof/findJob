import React, { Component } from "react";
import Vacancy from "../Vacancy/Vacancy";
import "./VacancyList.scss";

class VacancyList extends Component {
    state = {}

    render() {
        const { company, vacancies, findText } = this.props;
        return (
            <div className="vacancy-list">
                <div className="vacancy-list__header">
                    {company}
                </div>
                {vacancies.map((vacancy) => {
                    const str = vacancy.name.toLowerCase();
                    const subStr = findText.toLowerCase();
                    if (str.indexOf(subStr) >= 0) {
                        return (
                            <Vacancy
                                id={vacancy.id}
                                name={vacancy.name}
                            />
                        );
                    }
                })}
            </div>
        );
    }
}

export default VacancyList;
