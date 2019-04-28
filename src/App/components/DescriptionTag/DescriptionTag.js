import React, { Component } from 'react';
import './style.css'
import '../../App.css'
import { statSync } from 'fs';

class DescriptionTag extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.defaultSelected }
  }
  render() { 
    return ( 
      <div className={this.state.selected ? 'tag selected' : 'tag' }
      onClick={()=> this.setState({ selected: !this.state.selected})
      
      }
      >
      {this.props.pref}
    </div>
     );
  }
}
 
export default DescriptionTag;