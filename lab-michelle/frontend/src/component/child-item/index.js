import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import {childUpdate, childDelete} from '../../action/child-actions';

class ChildItem extends React.Component {
    constructor(props) {
      super(props);
      // this.state = {
        //I feel like maybe it doesn't need one since it's coming from the ChildSet already? But maybe it does need one? I dunno
      };
    }

    render() {
      return (
        <div className="child">
        //stuff to render about the kiddo
          <h2>{this.props.child.name}</h2>
          <button onClick={() => this.props.childDelete(this.props.child)}x</button>
          <ChildForm
            onComplete = {this.props.childUpdate}
            child={this.props.child}
            buttonText = "update"/>
        </div>
      )
    }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  childDelete: child => dispatch(childDeleteRequest(child)),
  childUpdate: child => dispatch(childUpdateRequest(child)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ChildItem)
