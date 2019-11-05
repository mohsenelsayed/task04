import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class CreateMember extends React.Component{
  render(){
    return(
      <Router>
      <div className="member-form">
        <form>
          <input className="name" placeholder="Name"></input>
          <input className="phone" placeholder="Phone"></input>
          <input className="email" placeholder="Email"></input>
          <input className="committee" placeholder="Committee"></input>
          <Link to="/success">
          <button type="button" onClick={this.props.addMember}>Submit</button>
          </Link>
          <Route exact path="/success">
            <h2>Member added</h2>
          </Route>
        </form>
      </div>
      </Router>
    )
  }
}
