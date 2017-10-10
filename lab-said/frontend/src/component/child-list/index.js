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
      <div className='childList'>
        {this.props.children.map(child =>
          <div key={child._id}>
            <p>{child.name}</p>
            <button onClick={() => this.props.childDelete(child)}>Delete</button>

            <div className='childUpdateForm'>
              <ChildForm
                child={child}
                onComplete={this.props.childUpdate}
                buttonText="Update Child"
              />
            </div>
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
