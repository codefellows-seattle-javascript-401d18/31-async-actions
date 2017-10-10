import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import * as childActions from '../../action/child-actions';

class ChildItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childEdit: false,
    };
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  // componentWillMount() {
  //   this.props.childrenFetch();
  //   console.log('__CHILD-ITEM_PROPS__', this.props);
  //   console.log('__CHILD-ITEM_STATE__', this.state);
  // }

  toggleUpdate(e) {
    this.setState({
      childEdit: !this.state.childEdit,
    });
  }
  render() {
    return(
      <div>
        {this.props.children.map(child =>
          <div key={child._id}>
            <p>{child.name}</p>
            <button onClick={() => this.props.childDelete(child)}>x</button>
            <button onClick={this.toggleUpdate}>edit</button>
            {this.state.childEdit ?
              <ChildForm
                child={child}
                buttonText="update"
                onComplete={this.props.childUpdate}/> :
              undefined
            }
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  children: state.children,
  // childEdit: false,
});
let mapDispatchToProps = dispatch => ({
  childDelete: child => dispatch(childActions.childDeleteRequest(child)),
  childUpdate: child => dispatch(childActions.childUpdateRequest(child)),
  childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildItem);
