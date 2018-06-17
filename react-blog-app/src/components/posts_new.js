import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from "../actions";

class PostsNew extends Component {

    renderField(field) {

        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    { ...field.input }
                    // equal to
                    // onChange={ field.input.onChange }
                    // onSubmit={ field.input.onSubmit }
                    // ... all the event handlers
                />
                {/* touched是用户离开了这一个input */}
                {/* error和validate方程相对应, error message */}
                <div className="text-help">{ touched ? error : ''}</div>
            </div>
        );
    }

    // 自定义的submit方程
    onSubmit(values) {
        // this === component
        // console.log(values);
        // call an action creator
        this.props.createPost(values, () => {
            this.props.history.push('/'); // callback
        });
    }

    render() {

        // The curly braces around handleSubmit is picking handleSubmit from this.props and assigning it to const handleSubmit.
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    // validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Please enter a title";
    }

    if (!values.categories) {
        errors.categories = "Please enter categories!";
    }

    if (!values.content) {
        errors.content = "Please enter some content!";
    }


    // if the error is empty, the form is fine to submit
    // otherwise redux form assume the form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm' // name of the form
})(
    connect(null, { createPost })(PostsNew)
);