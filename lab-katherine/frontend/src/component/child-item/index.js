import React from 'react'
import {connect} from 'react-redux'
import ChildForm from '../child-form'
import * as childActions from '../../action/child-actions';


class ChildItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="child-item">
        <button onClick={() => this.props.childDelete(this.props.child)}>X</button>
        <h3>{this.props.child}</h3>
        <ChildForm
          buttonText="update"
          onComplete={this.props.childUpdate}
          child={this.props.child}/>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch, getState) => {
  return {
    childUpdate: child => dispatch(childUpdate(child)),
    childDelete: child => dispatch(childDelete(child)),
  }
}

export default connect(null, mapDispatchToProps)(ChildItem)
