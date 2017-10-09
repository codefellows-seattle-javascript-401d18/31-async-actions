import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import * as utils from '../../lib/utils';
import * as childActions from '../../action/child-actions';

class ChildList extends React.Component {

  render () {
    return (
      <div className='childList'>
        {this.props.children.map(child =>
          <div key={child._id}>
            <p>{child.name}</p>
            <button onClick={() => this.props.childDelete(child)}>x</button>

            <div className='childUpdateForm'>
              <ChildForm
                onComplete={this.handleSubmit()}
                buttonText="Update Child"/>
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
