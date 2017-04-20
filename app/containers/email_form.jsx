import React from 'react';
import Reqwest from 'reqwest';
import { Row, Col, FormGroup, Button } from 'react-bootstrap';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.postEmail = this.postEmail.bind(this);
  }

  componentDidMount() {
    const { email } = this.refs;
  }

  handleSubmit(event) {
    event.preventDefault();

    const { refs } = this;
    const email = refs.email.value;
    console.log(email);
    this.postEmail(email);
  }

  postEmail(email) {
    Reqwest({
      url: ('/api/emails/' + email),
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
            <FormGroup>
              <input
                className="form-control text-center"
                type="text"
                ref="email"
                placeholder="Enter Email"
              />
            </FormGroup>
          </Col>
          <Col xs={ 4 }>
            <Button type="submit" bsStyle="primary" block>Submit</Button>
          </Col>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="email-form col-xs-12">
        { this.renderForm() }
      </div>
    );
  }
}

EmailForm.propTypes = {};

export default EmailForm;