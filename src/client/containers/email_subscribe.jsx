import React from 'react';
import Reqwest from 'reqwest';
import EmailForm from './email_form.jsx';

class EmailSubscribe extends React.Component {
  postEmail( email ) {
    Reqwest({
      url: '/api/emails',
      method: 'post',
      data: { email: email },
      success: () => {
        console.log(email + ' added to list of subscribed emails.');
      }
    });
  }

  getEmailSubmittedText() {
    return "Thanks! We'll email you with news."
  }

  render() {
    return (
      <EmailForm 
        button_text="Subscribe" 
        email_submitted_text={this.getEmailSubmittedText()}
        handleSubmit={this.postEmail.bind(this)} />
    )
  }
}

export default EmailSubscribe;