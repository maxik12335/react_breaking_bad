import { Component } from "react";

class Search extends Component {

    state = {
        input: ''
    }

    getInputValue = (e) => {
        const inputValue = e.target.value
        this.setState({ input: inputValue })
        this.props.getInputValue(inputValue)
    }

    getRadio = (e) => {
        const radio = e.target.value
        this.props.getRadio(radio)
    }


    render() {
        const { input } = this.state

        return (
            <div className="search">
                <input
                    type="text"
                    className="movies__input"
                    placeholder="Поиск актёра"
                    value={input}
                    onChange={this.getInputValue} />

                <div className="search__radio">
                    <label className="search__radio-input">
                        Все<input type="radio" name="radio" value={'all'} onChange={this.getRadio} />
                    </label>
                    <label className="search__radio-input">
                        Жив<input type="radio" name="radio" value={'Alive'} onChange={this.getRadio} />
                    </label>
                    <label className="search__radio-input">
                        Возможно мёртв<input type="radio" name="radio" value={'Presumed dead'} onChange={this.getRadio} />
                    </label>
                    <label className="search__radio-input">
                        Умер<input type="radio" name="radio" value={'Deceased'} onChange={this.getRadio} />
                    </label>
                    <label className="search__radio-input">
                        Неизвестно<input type="radio" name="radio" value={'Unknown'} onChange={this.getRadio} />
                    </label>
                </div>
            </div>
        )
    }
}

export { Search }