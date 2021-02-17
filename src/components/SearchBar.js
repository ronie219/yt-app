import React from "react";

export default class SearchBar extends React.Component {
    state = {term : ''}

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onTermSubbit(this.state.term)
    }


    render(){
        return (
            <div className = "ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form">
                <div className = "field">
                    <label>Search
                        <input 
                        type="text"  
                        value={this.state.term}
                        onChange = {e => this.setState({term:e.target.value})}
                        />
                    </label>
                </div>
                
                </form>
            </div>
            
        )
    }
}