import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as sampleActions } from '../../redux/modules/sampleActions';
import Picture from './components/Picture'

class SecondPageView extends Component {
  static propTypes = {
    sampleActions: PropTypes.object.isRequired,
    currentTime: PropTypes.object.isRequired,
    asyncMessage: PropTypes.string.isRequired
  }
  componentDidMount() {
    setInterval(() => {
      // Updating time via redux each 1 sec
      this.props.sampleActions.updateTime();
    }, 1000);
  }
  testAsync = () => {
    this.props.sampleActions.triggerRequest();
  }
  render() {
    const { currentTime, isLoading } = this.props;
    return (
      <div className="App-intro">
        This is a second page!
        <Picture />
        <br />
        <strong>Time being refreshed by redux: {currentTime.toString()}</strong>
        <br />
          {
            !isLoading
            ? <button onClick={this.testAsync}>Test Async</button>
            : <span>Loading ...</span>
          }
        <br />
        <strong>{this.props.asyncMessage}</strong>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  sampleActions: bindActionCreators(sampleActions, dispatch)
});

const mapStateToProps = (state) => ({
  currentTime: state.sampleActions.currentTime,
  asyncMessage: state.sampleActions.asyncMessage,
  isLoading: state.sampleActions.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondPageView);
