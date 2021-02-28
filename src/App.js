import React from 'react';
import Profile from './Profile';
import './style.css';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      fullName: "John Doe",
      profession: "Web Developer",
      bio: "Cat lover, bookworm, apple pie fanatic and nature enthousiast :)",
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.setState({show: true});
  }
  render () {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Show Profile</button>
        <Profile infos={this.state}/>
      </div>
    );
  }
}

export default App;
