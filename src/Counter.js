import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add } from './actions';

const Counter = props => {
  return(
    <div>
      <button onClick={() => props.add(1)}>+</button>
      {props.count}
      <button onClick={() => props.add(-1)}>-</button>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    count: state.counter.count
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    add
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
