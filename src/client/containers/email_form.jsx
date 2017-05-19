import React from 'react';
import Reqwest from 'reqwest';
import { Row, Col, FormGroup, Button } from 'react-bootstrap';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email_submitted: false
    };

    this.postEmail = this.postEmail.bind(this);
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
      this.postEmail(email);
      this.setState({
        email_submitted: true
      });
    } else {
      console.log("Invalid email");
    }
  }

  validateEmail(email) {
    const regex_pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (regex_pattern.test(email)) {
      return true
    } else {
      return false
    }
  }
  
  postEmail(email) {
    Reqwest({
      url: '/api/emails',
      method: 'post',
      data: { email: email },
      success: function() {
        console.log(email + ' added to list of subscribed emails.');
      }
    });
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
            <Button type="submit" bsStyle="primary" block>Subscribe</Button>
          </Col>
        </div>
      </form>
    );
  }

  renderThankYou() {
    return (
      <div className="col-xs-12">
        <p className="header-text"><strong>Thanks! We'll email you with news.</strong></p>
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