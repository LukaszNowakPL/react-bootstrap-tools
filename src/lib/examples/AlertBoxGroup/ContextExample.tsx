import * as React from "react";
import { AlertBoxGroup } from "../../../lib";
import { addAlert as utilAddAlert } from "../../../lib";
import { dismissAlert as utilDismissAlert } from "../../../lib";

/**
 * This class is our state manager. It holds all state and methods available via Context.
 * It also wraps all passed children with it's state.
 */
class GlobalState extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      alerts: []
    };
  }

  // Local method that consumes addAlert imported from utils
  addAlert = alert => {
    const finalAlert = {
      ...alert,
      // After alert will collapse, just remove it from memory as unneeded
      onExited: this.dismissAlert,
      // After close button is clicked, just remove the alert from memory
      onClose: this.dismissAlert
    };

    const alerts = utilAddAlert(this.state.alerts, finalAlert);

    // Reload alert list with added one
    this.setState({ alerts });
  };

  // Local method that consumes dismissAlert imported from utils
  dismissAlert = id => {
    const alerts = utilDismissAlert(this.state.alerts, id);

    // Reload alert list with no dismissed one
    this.setState({ alerts });
  };

  render() {
    const { alerts } = this.state;

    // Those data will be inside the context
    const contextValue = {
      alerts,
      addAlert: this.addAlert
    };

    return (
      <AppContext.Provider value={contextValue}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const defaultAppContext = {
  alerts: [],
  addAlert: alert => {}
};

const AppContext = React.createContext(defaultAppContext);

/**
 * This class is our global view wrapped with context.
 */
class GlobalView extends React.PureComponent<any, any> {
  static contextType = AppContext;

  render() {
    // Extracting alert list from context.
    const { alerts } = this.context;

    return (
      <section>
        <AddPanel />
        <div>
          <AlertBoxGroup alerts={alerts} />
        </div>
      </section>
    );
  }
}

/**
 * This component handles control panel for adding new AlertBoxes
 */
class AddPanel extends React.PureComponent<any, any> {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      variant: "info",
      message: "custom message",
      hideAfter: 5000
    };
  }

  changeContent = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  // Handles addition of an alert
  addAlert = () => {
    // Extract add method to update context's state
    const { addAlert } = this.context;
    const { variant, message, hideAfter } = this.state;

    // Use the method to update context's state (using util under the hood)
    addAlert({
      variant,
      message,
      hideAfter,
      withCollapse: true,
      dismissible: true
    });
  };

  render() {
    return (
      <div>
        <p>
          Variant:{" "}
          <select name="variant" onChange={this.changeContent}>
            {[
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
              "info",
              "dark",
              "light"
            ].map(variant => (
              <option key={variant} value={variant}>{variant}</option>
            ))}
          </select>
        </p>
        <p>
          Message:{" "}
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.changeContent}
          />
        </p>
        <p>
          Hide after:{" "}
          <input
            type="text"
            name="hideAfter"
            value={this.state.hideAfter}
            onChange={this.changeContent}
          />{" "}
          milliseconds
        </p>
        <p>
          <button onClick={this.addAlert}>Add alert</button>
        </p>
      </div>
    );
  }
}

const ContextExample = () => (
  <div>
    <h3>Context example</h3>
    <p>
      With this example we use React Context Api where we store Alert list. Just
      create few alerts using options provided and observe the component's
      behaviour.
    </p>
    <p>
      The store manager consumes <code>addAlert</code> helper to correctly
      update the list. It also pass it's own <code>addAlert</code> method to
      expose it to lower components. If lower components will need it (i.e.
      because of Api call for data save ended up with success) they just call
      new alert's addition.
    </p>
    <p>
      The store manager also consumes <code>dismissAlert</code> helper to
      correctly remove given alert from the list. As alert will disappear (by
      self collapse, or by clicking close button) there is no need to store it
      on a memory anymore. This is the reason for mentioned dismissal.
    </p>
    <GlobalState>
      <GlobalView />
    </GlobalState>
  </div>
);

export default ContextExample;
