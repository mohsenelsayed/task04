import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
export default class Member extends React.Component{
  render(){
    return(
      <Router>
      <div className="member">
        <Link to={"/" + this.props.memberInfo.id}>
          <h2>{this.props.memberInfo.name}</h2>
          <p>{this.props.memberInfo.committee}</p>
        </Link>
      </div>
      </Router>
    );
  }
}
