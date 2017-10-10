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
        <section className="child">
        //stuff to render about the kiddo
          // <h2>{child.name}</h2>
        </section>
      )
    }
}

let mapStateToProps = state => {
  return {
    //not sure - do we even need this?
  }
}

let mapDispatchToProps = (dispatch, getState) => {
  return {
    //it should probably do something here with the children actions that we wrote
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChildItem)
//MONGO ISN"T WORKING AND IT"S THE WORST EVER
