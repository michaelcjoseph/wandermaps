import React from 'react';
import { Row, Col, FormGroup, Button } from 'react-bootstrap';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email_submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  componentDidMount() {
    const { email } = this.refs;
  }

  handleSubmit(event) {
    event.preventDefault();

    const { refs } = this;
    const email = refs.email.value;
    if (this.validateEmail(email)) {
      this.props.handleSubmit(email);
      this.setState({
        email_submitted: true
      });
    } else {
      console.log("Invalid email");
    }
  }

  validateEmail(email) {
    const regex_pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (regex_pattern.test(email)) {
      return true
    } else {
      return false
    }
  }
  
  renderForm() {
    return (
      <form className="col-xs-12" onSubmit={ this.handleSubmit }>
        <div className="col-xs-12">
          <Col xs={ 8 }>
            <FormGroup className="margin0">
              <input
                className="form-control text-center"
                type="text"
                ref="email"
                placeholder="Enter Email"
              />
            </FormGroup>
          </Col>
          <Col xs={ 4 }>
            <Button type="submit" bsStyle="primary" block>{this.props.button_text}</Button>
          </Col>
        </div>
      </form>
    );
  }

  renderThankYou() {
    return (
      <div className="col-xs-12">
        <p className="header-text"><strong>{this.props.email_submitted_text}</strong></p>
      </div>
    )
  }

  render() {
    return (
      <div className="email-form col-xs-12">
        { this.state.email_submitted ? this.renderThankYou() : this.renderForm() }
      </div>
    );
  }
}

EmailForm.propTypes = {};

export default EmailForm;