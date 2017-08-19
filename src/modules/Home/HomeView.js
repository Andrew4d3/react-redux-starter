import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as sampleActions } from '../../redux/modules/sampleActions';

class HomeView extends Component {
  static propTypes = {
    sampleActions: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired
  }
  render() {
    const { message, sampleActions } = this.props;
    return (
      <p className="App-intro">
        Hello World! <br />
        <button onClick={sampleActions.sayHelloWorld}>Test Redux Action</button>
        <br />
        <strong>{message}</strong>
      </p>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  sampleActions: bindActionCreators(sampleActions, dispatch)
});

const mapStateToProps = (state) => ({
  message: state.sampleActions.message
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
