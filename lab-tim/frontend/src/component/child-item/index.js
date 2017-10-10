import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import * as childActions from '../../action/child-actions';
import * as util from '../../lib/util';

class ChildItem  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem() {
    this.setState({edit: !this.state.edit});
  }

  render() {
    return (
      <div className='child-item'>
        {this.props.children.map(child =>
          <div key={child._id}>
            <p>{child.name}</p>
            <button onClick={() => this.props.childDelete(child)}>X</button>
            <button onClick={this.toggleItem}>edit name</button>
            <div className='child-update-form'>
              {this.state.editName ?
                <ChildForm
                  child={child}
                  onComplete={this.props.childUpdate}
                  buttonText="update child"/>
                :
                undefined
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    children: state.children,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    childUpdate: (child) => dispatch(childActions.childUpdateRequest(child)),
    childCreate: (child) => dispatch(childActions.childCreateRequest(child)),
    childDelete: (child) => dispatch(childActions.childDeleteRequest(child)),
    childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildItem);
