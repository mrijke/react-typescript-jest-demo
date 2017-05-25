import React from 'react';
import { translate, InjectedTranslateProps } from "react-i18next";
import LocateSwitcher from 'LocaleSwitcher';

interface IAppState {
  counter: number;
}

interface IOwnProps extends InjectedTranslateProps{

}

class App extends React.Component<IOwnProps, IAppState> {

  constructor() {
    super();
    this.state = {counter: 0};
  }

  private handleIncrementCounterClick = () => {
    this.setState({ counter: this.state.counter+1 });
  }

  public render() {
    const { t } = this.props;
    return (
      <div>
        <p>{t!('Hello world')}</p>
        <p>{t!('This thing has been clicked {{counter}} many times! So much.', {counter: this.state.counter})}</p>
        <button onClick={this.handleIncrementCounterClick}>Click me!</button>
        <LocateSwitcher />
      </div>
    )
  }
}

export default translate()(App);