import React, { Component } from "react";
import Select from "react-select";

class JobField extends Component {
    render() {
        const { jobSelectedOption } = this.props;
        const jobValue = jobSelectedOption && jobSelectedOption.value;

        const options = [
            {value: "парикмахер", label: "Парикмахер"},
            {value: "парикмахер-визажист", label: "Парикмахер-визажист"},
            {value: "веб-программист", label: "Веб-программист"},
            {value: "btl-менеджер", label: "BTL-менеджер"},
            {value: "erp-программист", label: "ERP-программист"},
            {value: "html-верстальщик", label: "HTML-верстальщик"},
            {value: "pr-специалист", label: "PR-специалист"},
            {value: "seo-специалист", label: "SEO-специалист"},
            {value: "web-дизайнер", label: "Web-дизайнер"},
            {value: "авиадиспетчер", label: "Авиадиспетчер"},
            {value: "авиаиненер", label: "Авиаиненер"},
            {value: "автомеханик", label: "Автомеханик"},
            {value: "автослесарь", label: "Автослесарь"},
            {value: "агент по туризму", label: "Агент по туризму"},
            {value: "грузчик", label: "Грузчик"},
            {value: "брокер", label: "Брокер"},
            {value: "бухгалтер", label: "Бухгалтер"},
        ];

        return (
            <div className="form-group">
                <label htmlFor="job">Профессия</label>
                <Select
                    id="job"
                    className="form__job"
                    name="form-field-name"
                    placeholder="Выберите профессию"
                    value={ jobValue }
                    onChange={ this.props.handleJobSelectChange }
                    options={ options }
                />
            </div>
        );
    };
}

export default JobField;