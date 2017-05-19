import React from 'react';
import { FormattedMessage, FormattedDate, InjectedIntlProps, injectIntl, defineMessages } from 'react-intl';

interface IAppState {
  counter: number;
}

interface IOwnProps {

}

const defaultMessages = defineMessages({
  app: {
    id: 'app.inputThing',
    defaultMessage: 'Input a thing!'
  }
});

class App extends React.Component<IOwnProps & InjectedIntlProps, IAppState> {

  constructor() {
    super();
    this.state = { counter: 0 };
  }

  private handleIncrementCounterClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  public render() {
    return (
      <div>
        <p><FormattedMessage id="app.welcome" defaultMessage="Hello World" /></p>
        <p><FormattedMessage id="app.currentDate" defaultMessage="Today it is" />&nbsp;
          <FormattedDate value={new Date()}
            year='numeric'
            month='long'
            day='2-digit' />
        </p>
        <p>
          <FormattedMessage id="app.count" defaultMessage="You have {counter, plural, =0 {never clicked} =1 {clicked once} other {clicked # times}}!" values={{ counter: this.state.counter }} />
        </p>
        <button onClick={this.handleIncrementCounterClick}>Click me!</button>
        <input placeholder={this.props.intl.formatMessage(defaultMessages.app)} />
      </div>
    )
  }
}

export default injectIntl(App);
