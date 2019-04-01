import * as React from "react";
import { AlertBox } from "../../../lib";

class CollapseExample extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  show = () => {
    this.setState({ show: true });
  };
  hide = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h3>Collapse example</h3>
        <p>Collapse as component's transition.</p>
        <div>
          <button onClick={this.show}>Expand message</button>
        </div>
        {this.state.show && (
          <AlertBox
            variant="primary"
            message="Click close button to collapse the component"
            dismissible
            onExited={this.hide}
            withCollapse
          />
        )}
      </div>
    );
  }
}

export default CollapseExample;
