import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import * as util from '../../lib/util';
import * as childActions from '../../action/child-actions';

class ChildList extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };

  }

  render () {
    return (
      <div className='child-list'>
        {this.props.children.map(child =>
          <div key={child._id}>

          <ul>
            <li><h4>Child Name: {child.name}.</h4></li>

            <div className='child-update-form'>
              <ChildForm
                child={child}
                onComplete={this.props.childUpdate}
                buttonText='Update Child'
              required/>
              <button onClick={() => this.props.childDelete(child)}>Delete {child.name}</button>
            </div>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({children: state.children});
let mapDispatchToProps = dispatch => ({
  childUpdate: child => dispatch(childActions.childUpdateRequest(child)),
  childCreate: child => dispatch(childActions.childCreateRequest(child)),
  childDelete: child => dispatch(childActions.childDeleteRequest(child)),
  childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildList);
