import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import pingActionCreator from "../actions/ping.action";
import pongActionCreator from "../actions/pong.action";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.pingCount}</div>
        <div>{this.props.pongCount}</div>
        <button onClick={() => this.props.ping()}>PING</button>
        <button onClick={() => this.props.pong()}>PONG</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pingCount: state.ping,
    pongCount: state.pong
  };
}

function mapDispatchToProps(disptach) {
  return bindActionCreators(
    {
      ping: pingActionCreator,
      pong: pongActionCreator
    },
    disptach
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
