import React from 'react';
import { Row, Col, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetEmail = this.resetEmail.bind(this);
  }

  resetEmail() {
    this.setState({ email: null });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.resetEmail();

    const { refs } = this;
    const email = refs.email.value;
    console.log(email);

    this.setState({
      email: email
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

  componentDidMount() {
    const { email } = this.refs;
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