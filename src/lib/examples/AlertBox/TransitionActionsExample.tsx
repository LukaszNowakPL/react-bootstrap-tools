import * as React from "react";
import { AlertBox } from "../../../lib";

class TransitionActionsExample extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = { show: false, console: [] };
  }

  show = () => {
    this.setState({ show: true, console: [] });
  };

  onEnter = id => {
    const info = this.state.console;
    info.push("onEnter (with arg: " + id + ")");
    this.setState({ console: info });
  };
  onEntering = id => {
    const info = this.state.console;
    info.push("onEntering (with arg: " + id + ")");
    this.setState({ console: info });
  };
  onEntered = id => {
    const info = this.state.console;
    info.push("onEntered (with arg: " + id + ")");
    this.setState({ console: info });
  };
  onExit = id => {
    const info = this.state.console;
    info.push("onExit (with arg: " + id + ")");
    this.setState({ console: info });
  };
  onExiting = id => {
    const info = this.state.console;
    info.push("onExiting (with arg: " + id + ")");
    this.setState({ console: info });
  };
  onExited = id => {
    const info = this.state.console;
    info.push("onExited (with arg: " + id + ")");
    this.setState({ show: false, console: info });
  };

  render() {
    return (
      <div>
        <h3>Transition actions example</h3>
        <p>
          Component with callbacks fired on each transition step. Show and click
          on close button to see results.
        </p>
        <p>
          <strong>Transition actions executed</strong>:{" "}
          {this.state.console.map(action => {
            return action + ", ";
          })}
        </p>
        <div>
          <button onClick={this.show}>Show message</button>
        </div>
        {this.state.show && (
          <AlertBox
            variant="primary"
            message="Click close button to execute further callbacks"
            withIcon
            dismissible
            onEnter={this.onEnter}
            onEntering={this.onEntering}
            onEntered={this.onEntered}
            onExit={this.onExit}
            onExiting={this.onExiting}
            onExited={this.onExited}
          />
        )}
      </div>
    );
  }
}

export default TransitionActionsExample;
