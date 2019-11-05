import React from 'react';
export default class CreateMember extends React.Component{
  render(){
    return(
      <div className="member-form">
        <form>
          <input className="name" placeholder="Name"></input>
          <input className="phone" placeholder="Phone"></input>
          <input className="email" placeholder="Email"></input>
          <input className="committee" placeholder="Committee"></input>
          <button type="button" onClick={this.props.addMember}>Submit</button>
        </form>
      </div>
    )
  }
}
