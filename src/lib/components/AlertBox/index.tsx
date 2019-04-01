import * as React from "react";
import { PureComponent } from "react";
import {
  AlertBoxProps,
  AlertProps,
  TransitionProps,
  AlertBoxState,
  GetTransitionPropsMethods
} from "./interfaces";
import { Alert, Badge, Collapse, Fade } from "react-bootstrap";
import Glyphicon from "../Glyphicon";
import { GlyphiconProps } from "../Glyphicon/interfaces";
import {
  getAlertProps,
  getGlyphiconProps,
  getTransitionProps
} from "./functions";
import "./style.scss";

const IconComponent = (props: AlertBoxProps) => {
  const { withIcon } = props;

  if (withIcon) {
    const glyphiconProps: GlyphiconProps = getGlyphiconProps(props);

    return <Glyphicon {...glyphiconProps} />;
  }
};

const BadgeComponent = (props: AlertBoxProps) => {
  const { variant, waitingItems } = props;

  if (waitingItems) {
    return (
      <Badge variant={variant} className="AlertBox__badge">
        {waitingItems}
      </Badge>
    );
  }
};

class AlertBox extends PureComponent<AlertBoxProps, AlertBoxState> {
  displayName: string = "AlertBox";

  constructor(props) {
    super(props);

    const id = !props.id ? String(new Date().getTime()) : props.id;

    this.state = {
      shouldOpen: false,
      shouldClose: false,
      in: false,
      id
    };
  }

  componentDidMount() {
    this.setState({ shouldOpen: true });
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    const { shouldOpen, shouldClose } = nextState;
    if (shouldOpen === true)
      return { ...nextState, in: true, shouldOpen: false };
    if (shouldClose === true)
      return { ...nextState, in: false, shouldClose: true };

    return { ...nextState };
  }

  onClose = () => {
    this.setState({ shouldClose: true });
  };

  onEnter = () => {
    const { onEnter } = this.props;
    onEnter && onEnter(this.state.id);
  };

  onEntering = () => {
    const { onEntering } = this.props;
    onEntering && onEntering(this.state.id);
  };

  onEntered = () => {
    const { onEntered, hideAfter } = this.props;
    onEntered && onEntered(this.state.id);

    if (hideAfter) setTimeout(this.onClose, hideAfter);
  };

  onExit = () => {
    const { onExit } = this.props;
    onExit && onExit(this.state.id);
  };

  onExiting = () => {
    const { onExiting } = this.props;
    onExiting && onExiting(this.state.id);
  };

  onExited = () => {
    const { onExited } = this.props;
    onExited && onExited(this.state.id);
  };

  render() {
    const { withIcon, waitingItems, message, withCollapse } = this.props;

    const iconComponent = withIcon ? IconComponent(this.props) : null;
    const badgeComponent = waitingItems ? BadgeComponent(this.props) : null;

    const alertProps: AlertProps = getAlertProps({
      props: this.props,
      state: this.state,
      methods: { onClose: this.onClose }
    });

    const alert = (
      <div className="AlertBox__wrapper">
        <Alert {...alertProps}>
          {iconComponent}
          {badgeComponent}
          {message}
        </Alert>
      </div>
    );

    const transitionMethods: GetTransitionPropsMethods = {
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    };
    const transitionProps: TransitionProps = getTransitionProps({
      state: this.state,
      methods: transitionMethods
    });

    return withCollapse ? (
      <Collapse {...transitionProps}>{alert}</Collapse>
    ) : (
      <Fade {...transitionProps}>{alert}</Fade>
    );
  }
}

export default AlertBox;
