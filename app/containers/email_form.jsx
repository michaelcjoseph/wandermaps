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
      <form className="CardForm" onSubmit={ this.handleSubmit }>
        <Row>
          <Col xs={ 9 }>
            <FormGroup>
              <input
                className="form-control text-center"
                type="text"
                ref="email"
                placeholder="Enter Email"
              />
            </FormGroup>
          </Col>
          <Col xs={ 3 }>
            <Button type="submit" bsStyle="primary" block>Submit</Button>
          </Col>
        </Row>
      </form>
    );
  }

  render() {
    return (
      <div className="email-form">
        { this.renderForm() }
      </div>
    );
  }
}

EmailForm.propTypes = {};

export default EmailForm;