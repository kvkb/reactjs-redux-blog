import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from "uuid";
import { addArticle } from "../actions";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
};

class Connectedform extends Component{
    constructor() {
        super();

        this.state = {
            title: "", 
            body: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const { body } = this.state;
        const id = uuidv1();
        this.props.addArticle({id,title,body});
        this.setState({title:"",body:""});
    }

    render() {
        const { title } = this.state;
        const { body } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea
                        className="form-control"
                        id="body"
                        value={body}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                SAVE
                </button>
            </form>
        ); 
    }

}

const Form = connect(null, mapDispatchToProps)(Connectedform);

export default Form;

