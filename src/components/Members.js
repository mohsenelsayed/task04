import React from 'react'
import Member from './Member'
export default class Members extends React.Component{
  render(){
      return(
        this.props.members.map(member => {
          return(
            <Member key={member.id} memberInfo={member} />
          )
        })
      )
  }
}
