import React from 'react';
export default class Member extends React.Component{
  render(){
    return(
      <div className="member">
          <h2>{this.props.memberInfo.name}</h2>
          <p>{this.props.memberInfo.committee}</p>
      </div>
    );
  }
}
