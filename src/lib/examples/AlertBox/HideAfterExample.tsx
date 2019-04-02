import * as React from "react";
import { AlertBox } from "../../../lib";

class HideAfterExample extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      alerts: []
    };
  }

  show = () => {
    const { alerts } = this.state;
    alerts.push(new Date());
    this.setState({ alerts });
  };

  render() {
    return (
      <div>
        <h3>Hide after example</h3>
        <p>
          Each message will dismiss automatically after 3000 milliseconds.{" "}
          <button onClick={this.show}>Show another message</button>
        </p>
        {this.state.alerts.map(key => (
          <AlertBox
            key={key}
            variant="info"
            dismissible
            withIcon
            withCollapse
            message={
              "Message initiated at " +
              key.getHours() +
              ":" +
              key.getMinutes() +
              ":" +
              key.getSeconds()
            }
            hideAfter={3000}
          />
        ))}
      </div>
    );
  }
}

export default HideAfterExample;
