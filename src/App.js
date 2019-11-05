import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Members from './components/Members';
import MemberPage from './components/MemberPage';
import CreateMember from './components/CreateMember';
import membersData from './data.json'
export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      members: membersData,
      searchVal: Number(window.location.pathname.replace('/','') - 1)
    }
    this.addMember = this.addMember.bind(this);
    this.searchValChange = this.searchValChange.bind(this);
  }
  addMember(){
    console.log("Hello");
    let id = this.state.members.length+1;
    let name = document.getElementsByClassName("name")[0].value;
    let phone = document.getElementsByClassName("phone")[0].value;
    let email = document.getElementsByClassName("email")[0].value;
    let committee = document.getElementsByClassName("committee")[0].value;
    let newMember = {id: id, name: name, phone: phone,email: email, committee: committee}
    this.state.members.push(newMember);
    console.log(this.state.members);
  }
  searchValChange = (e) =>{
    if(e.target.value.length === 0 || e.target.value === '0' || e.target.value > this.state.members.length){

    }else{
      this.setState({members: membersData, searchVal : Number(e.target.value)-1});
      this.forceUpdate();
    }
  }

  render() {
    return(
      <React.Fragment>
      <Router>
      <nav>
        <Link to="/"><h2 className="home">Home</h2></Link>
        <form>
          <input onChange={this.searchValChange} className="search-input" placeholder="Write member ID"></input>
          <Link to={"/" + this.state.searchVal}><button type="submit">Search</button></Link>
        </form>
        </nav>

        <div className="add-member"><Link to="/create">
          Add Member
        </Link></div>
        <Switch>
        <Route exact path="/">
        <div className="members">
          <Members members={this.state.members}/>
        </div>
        </Route>
        <Route exact path="/create">
          <CreateMember addMember={this.addMember} />
        </Route>
        <Route path="/">
        <MemberPage memberInfo={this.state.members[this.state.searchVal]}/>
        </Route>
        </Switch>
      </Router>
      </React.Fragment>
    );
  }
}
