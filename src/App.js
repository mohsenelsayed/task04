import React from 'react';
import Members from './components/Members';

let membersData = [
  {
    id: 1,
    name: "Mohsen",
    committee: "Technical"
  },
  {
    id: 2,
    name: "Mohamed",
    committee: "Media"
  },
  {
    id: 3,
    name: "Sobhy",
    committee: "Events"
  },
  {
    id: 4,
    name: "Kareem",
    committee: "Events"
  },
  {
    id: 5,
    name: "Khaled",
    committee: "Technical"
  },
  {
    id: 6,
    name: "Adel",
    committee: "Training"
  }
];

export default class App extends React.Component{
  state = {
    members: membersData
  }

  render() {
    return(
      <div className="members">
        <Members members={this.state.members} />
      </div>
    );
  }
}
