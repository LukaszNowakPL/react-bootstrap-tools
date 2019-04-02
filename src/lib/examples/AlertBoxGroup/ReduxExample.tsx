import * as React from "react";
import { AlertBoxGroup } from "../../../lib";
import { addAlert as utilAddAlert } from "../../../lib";
import { dismissAlert as utilDismissAlert } from "../../../lib";
import { Provider, connect } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

// Action for alert dismissal.
const actionDismissAlert = id => {
  return {
    type: "DISMISS_ALERT",
    id
  };
};

// Action for alert addition
const actionAddAlert = alert => {
  return {
    type: "ADD_ALERT",
    alert: {
      ...alert
    }
  };
};

/**
 * This object wraps all passed children with global store.
 */
const GlobalStore = props => {
  // Reducer for handling the alerts data
  const alertsReducers = (state = [], action) => {
    switch (action.type) {
      case "ADD_ALERT":
        // Reload alert list with new one by consuming addAlert imported from utils
        return utilAddAlert(state, action.alert);
      case "DISMISS_ALERT":
        // Reload alert list with no dismissed one by consuming dismissAlert imported from utils
        return utilDismissAlert(state, action.id);
      default:
        // Reducer actions not recognized. Just do nothing with alerts
        return state;
    }
  };

  const reducers = combineReducers({
    alerts: alertsReducers
    // Here you can add reducers for some other data
  });

  const middleware = [thunkMiddleware];

  const enhancer = compose(applyMiddleware(...middleware));

  const store = createStore(reducers, enhancer);

  return <Provider store={store}>{props.children}</Provider>;
};

/**
 * This object is our global view wrapped with store.
 */
const GlobalView = props => {
  const { alerts, actionAddAlert, actionDismissAlert } = props;

  return (
    <section>
      <AddPanel
        actionAddAlert={actionAddAlert}
        actionDismissAlert={actionDismissAlert}
      />
      <div>
        <AlertBoxGroup alerts={alerts} />
      </div>
    </section>
  );
};

// Extract some store data
const mapStateToProps = state => ({
  alerts: state.alerts
});

// Collect actions taken on store's data
const mapDispatchToProps = {
  actionAddAlert,
  actionDismissAlert
};

/**
 * This object takes parts of store and pass it to components as props.
 */
const GlobalViewWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalView);

/**
 * This component handles control panel for adding new AlertBoxes
 */
class AddPanel extends React.PureComponent<any, any> {
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
    const { variant, message, hideAfter } = this.state;
    const { actionAddAlert, actionDismissAlert } = this.props;

    // Use action to update global store values (using util under the hood)
    actionAddAlert({
      variant,
      message,
      hideAfter,
      withCollapse: true,
      dismissible: true,
      onExited: actionDismissAlert,
      onClose: actionDismissAlert
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
              <option key={variant} value={variant}>
                {variant}
              </option>
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

const ReduxExample = () => (
  <div>
    <h3>Redux example</h3>
    <p>
      With this example we use <code>Redux</code> store manager where we store
      Alert list. Just create few alerts using options provided and observe the
      component's behaviour.
    </p>
    <p>
      The reducer consumes <code>addAlert</code> helper to correctly update the
      list. It's happening using <code>actionAddAlert</code> action object
      exposed to lower components. If lower components will need it (i.e.
      because of Api call for data save ended up with success) they just call
      new alert's addition.
    </p>
    <p>
      The reducer also consumes <code>dismissAlert</code> helper to correctly
      remove given alert from the list. As alert will disappear (by self
      collapse, or by clicking close button) there is no need to store it on a
      memory anymore. This is the reason for mentioned dismissal.
    </p>
    <GlobalStore>
      <GlobalViewWrapper />
    </GlobalStore>
  </div>
);

export default ReduxExample;
