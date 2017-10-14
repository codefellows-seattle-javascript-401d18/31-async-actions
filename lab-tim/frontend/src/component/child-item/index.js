import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import * as childActions from '../../action/child-actions';
import * as util from '../../lib/util';

class ChildItem  extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   edit: false,
    // };
    //this.toggleItem = this.toggleItem.bind(this);
    console.log('__CHILD_ITEM_PROPS__', this.props);
  }

  // toggleItem() {
  //   this.setState({edit: !this.state.edit});
  // }

  render() {
    return (
      <div className='child-list'>
        <p>{this.props.child.name}</p>
        <button onClick={() => this.props.childDelete(this.props.child)}>X</button>
        <ChildForm
          onComplete={this.props.childUpdate}
          child={this.props.child}
          buttonText='update'/>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    childUpdate: (child) => dispatch(childActions.childUpdateRequest(child)),
    childCreate: (child) => dispatch(childActions.childCreateRequest(child)),
    childDelete: (child) => dispatch(childActions.childDeleteRequest(child)),
    childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildItem);
