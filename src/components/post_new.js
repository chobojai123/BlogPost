import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostNew extends Component {
  renderField(field) {
    return (
      <div className='form-group has-danger'>
        <label>{field.label}</label>
        <input 
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  } 

  onSubmit(values) {
    console.log(values);
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label='Title For Post'
            name='title'
            component={this.renderField}
          />
          <Field 
            label='Categories'
            name='categories'
            component={this.renderField}
          />
          <Field
            label='Content'
            name='content'
            component={this.renderField}
          />
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  };
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }
  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostNew);