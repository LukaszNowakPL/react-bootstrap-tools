import * as React from "react";
import { Component } from "react";
import "./bootstrap.min.css";
import "./style.scss";
import AlertBoxCard from "./ComponentCards/AlertBox";
import AlertBoxGroupCard from "./ComponentCards/AlertBoxGroup";
import AvatarCard from "./ComponentCards/Avatar";
import GlyphiconCard from "./ComponentCards/Glyphicon";
import DescribedButtonCard from "./ComponentCards/DescribedButton";
import DescribedComponentCard from "./ComponentCards/DescribedComponent";
import { Button, Collapse } from "react-bootstrap";
import { AppState, VariantValues } from "./interfaces";

export class App extends Component<{}, AppState> {
  componentNameButtonVariant: VariantValues;

  constructor(props) {
    super(props);
    this.state = {
      show: "Avatar"
    };

    this.componentNameButtonVariant = "outline-dark";
  }

  expandDescription = id => {
    this.setState({ show: id });
  };

  expandDescribedComponent = () => {
    this.expandDescription("DescribedComponent");
  };

  expandDescribedButton = () => {
    this.expandDescription("DescribedButton");
  };

  expandGlyphicon = () => {
    this.expandDescription("Glyphicon");
  };

  expandAlertBox = () => {
    this.expandDescription("AlertBox");
  };

  expandAlertBoxGroup = () => {
    this.expandDescription("AlertBoxGroup");
  };

  expandAvatar = () => {
    this.expandDescription("Avatar");
  };

  render() {
    return (
      <div>
        <h1>React bootstrap tools</h1>

        <Button
          onClick={this.expandDescribedComponent}
          variant={this.componentNameButtonVariant}
          className="ComponentName"
          block
        >
          <h2>Described component</h2>
        </Button>
        <Collapse in={this.state.show === "DescribedComponent"}>
          <div className="ComponentArea">
            <DescribedComponentCard />
          </div>
        </Collapse>

        <Button
          onClick={this.expandDescribedButton}
          variant={this.componentNameButtonVariant}
          className="ComponentName"
          block
        >
          <h2>Described button</h2>
        </Button>
        <Collapse in={this.state.show === "DescribedButton"}>
          <div className="ComponentArea">
            <DescribedButtonCard />
          </div>
        </Collapse>

        <Button
          onClick={this.expandGlyphicon}
          variant={this.componentNameButtonVariant}
          className="ComponentName"
          block
        >
          <h2>Glyphicon</h2>
        </Button>
        <Collapse in={this.state.show === "Glyphicon"}>
          <div className="ComponentArea">
            <GlyphiconCard />
          </div>
        </Collapse>

        <Button
          onClick={this.expandAlertBox}
          variant={this.componentNameButtonVariant}
          className="ComponentName"
          block
        >
          <h2>AlertBox</h2>
        </Button>
        <Collapse in={this.state.show === "AlertBox"}>
          <div className="ComponentArea">
            <AlertBoxCard />
          </div>
        </Collapse>

        <Button
          onClick={this.expandAlertBoxGroup}
          variant={this.componentNameButtonVariant}
          className="ComponentName"
          block
        >
          <h2>AlertBoxGroup</h2>
        </Button>
        <Collapse in={this.state.show === "AlertBoxGroup"}>
          <div className="ComponentArea">
            <AlertBoxGroupCard />
          </div>
        </Collapse>

        <Button
          onClick={this.expandAvatar}
          variant={this.componentNameButtonVariant}
          className="ComponentName"
          block
        >
          <h2>Avatar</h2>
        </Button>
        <Collapse in={this.state.show === "Avatar"}>
          <div className="ComponentArea">
            <AvatarCard />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default App;
