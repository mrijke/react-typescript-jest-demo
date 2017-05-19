import React from 'react';

interface IAppState {
  counter: number;
}

export default class App extends React.Component<{}, IAppState> {

  constructor() {
    super();
    this.state = {counter: 0};
  }

  private handleIncrementCounterClick = () => {
    this.setState({ counter: this.state.counter+1 });
  }

  public render() {
    return (
      <div>
        <p>Hello World</p>
        <p>This thing has been clicked {this.state.counter} many times! So much.</p>
        <button onClick={this.handleIncrementCounterClick}>Click me!</button>
      </div>
    )
  }
}
