import { Component } from "react"
import { Movies } from "../components/Movies"
import { Search } from "../components/Search"


class Main extends Component {
    state = {
        data: [],
        loading: true,
        filterData: [],
        radio: '',
        inputValue: ''
    }

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters')
            .then(response => response.json())
            .then(json => this.setState({ data: json }))
            .then(() => this.setState({ filterData: this.state.data }))
            .then(() => this.setState({ loading: false }))
    }

    getRadio = (radio) => {
        this.setState({ radio })
    }

    getInputValue = (inputValue) => {
        this.setState({ inputValue })
    }

    searchUpdateRadio = (radio, filter) => {
        switch (radio) {
            case 'all':
                return filter
            case 'Alive':
                return (
                    filter.filter(item => {
                        return item.status.indexOf('Alive') > -1
                    })
                )
            case 'Presumed dead':
                return (
                    filter.filter(item => {
                        return item.status.indexOf('Presumed dead') > -1
                    })
                )
            case 'Deceased':
                return (
                    filter.filter(item => {
                        return item.status.indexOf('Deceased') > -1
                    })
                )
            case 'Unknown':
                return (
                    filter.filter(item => {
                        return item.status.indexOf('Unknown') > -1
                    })
                )
            default:
                return filter

        }
    }

    searchUpdateInputChange = (inputValue, filter) => {
        const newArr = filter.filter(item => {
            return item.name.indexOf(inputValue) > -1
        })

        if (inputValue !== '') {
            return newArr
        } else {
            return filter
        }
    }

    render() {
        const { data, loading, radio, inputValue } = this.state
        const preloader = (<div className="progress" > <div className="indeterminate" ></div ></div >)
        let movies = this.searchUpdateInputChange(inputValue, this.searchUpdateRadio(radio, data))

        return (
            <main className="content container" >
                <div className="movies">
                    <Search getRadio={this.getRadio} getInputValue={this.getInputValue} />
                    {loading ? preloader : <Movies data={movies} />}
                </div>
            </main>
        )
    }
}



export { Main }