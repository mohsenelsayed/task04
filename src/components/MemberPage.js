import React from 'react'

export default class MemberPage extends React.Component{
  render(){
    return(
      <div className="memberPage">
      <h2>ID: {this.props.memberInfo.id}</h2>
      <h2>Name: {this.props.memberInfo.name}</h2>
      <h2>Phone: {this.props.memberInfo.phone}</h2>
      <h2>Email: {this.props.memberInfo.email}</h2>
      <h2>Committee: {this.props.memberInfo.committee}</h2>
      </div>
    )
  }
}
