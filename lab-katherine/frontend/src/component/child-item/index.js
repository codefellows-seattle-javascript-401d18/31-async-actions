import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import * as util from '../../lib/util';
import * as childActions from '../../action/child-actions';

class ChildItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('update', this.props.children.name)
    return (
      <div className="child-item">
        <button onClick={() => this.props.childDelete(this.props.child)}>X</button>
        <h3>{this.props.child.name}</h3>
        <ChildForm
          buttonText="update"
          onComplete={this.props.childUpdate}
          child={this.props.child}/>
      </div>
    )
  }
}

let mapStateToProps = state => ({children: state.children});
let mapDispatchToProps = dispatch => ({
  childCreate: child => dispatch(childActions.childCreateRequest(child)),
  childDelete: child => dispatch(childActions.childDeleteRequest(child)),
  childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
  childUpdate: child => dispatch(childActions.childUpdateRequest(child)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildItem)
