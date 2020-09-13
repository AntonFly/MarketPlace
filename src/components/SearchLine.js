import React, { Component }  from 'react';

class SearchLine extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        fetch("http://localhost:3001/search")
            .then(result => (result) => {
                    alert(result)
                    return <div> result </div>
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default SearchLine