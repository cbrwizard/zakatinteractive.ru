import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

import './style.scss';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      isProcessing: false,
      submitText: 'Отправить'
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({isProcessing: true})

    const form = e.target
    const formData = new FormData(form)
    addToMailchimp(formData.get('email'))
      .then(() => {
        this.setState({submitText: 'Спасибо!', isProcessing: false})
        form.reset()
      })
  }

  render() {
    const {isProcessing, submitText} = this.state

    return (
      <div className="emailForm" >
        <form name="email" onSubmit={this.handleSubmit} >
          <label htmlFor="email">Подпишись на новости</label>
          <input type="email" name="email" id="email" placeholder="Твой имейл" disabled={isProcessing}/>
          <button type="submit" disabled={isProcessing}>{submitText}</button>
        </form>
        <a href="https://www.patreon.com/cbrwizard" target="_blank" rel="noopener">Поддержи автора на Patreon!</a>
      </div>
    );
  }
}

export default EmailForm;
