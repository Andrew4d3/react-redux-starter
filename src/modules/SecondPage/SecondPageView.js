import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as sampleActions } from '../../redux/modules/sampleActions';
import Picture from './components/Picture'

class SecondPageView extends Component {
  static propTypes = {
    sampleActions: PropTypes.object.isRequired,
    currentTime: PropTypes.object.isRequired
  }
  componentDidMount() {
    setInterval(() => {
      // Updating time via redux each 1 sec
      this.props.sampleActions.updateTime();
    }, 1000);
  }
  render() {
    const { currentTime } = this.props;
    return (
      <div className="App-intro">
        This is a second page!
        <Picture />
        <br />
        <strong>Time being refreshed by redux: {currentTime.toString()}</strong>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  sampleActions: bindActionCreators(sampleActions, dispatch)
});

const mapStateToProps = (state) => ({
  currentTime: state.sampleActions.currentTime
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondPageView);
