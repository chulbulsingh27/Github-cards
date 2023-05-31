import React, { Component } from 'react';

import './App.css';
import Card from './Card';
import { CardList } from './CardList';
import Form from './Form';
// const testData = [
//   {
//       name: "dan",
//       company: "@facebook ", avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4",
//   },
//   {
//       name: "Daniel Berteaud",
//       company: "Ehtrace", avatar_url: "https://avatars.githubusercontent.com/u/1039424?v=4",
//   },
//   {
//     name: "Sophie Berteaud",
//     company: "LinkedIn", avatar_url: "https://avatars.githubusercontent.com/u/61904667?v=4",
// }
// ]



export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      profiles : [],
    }
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles : [...prevState.profiles,profileData],
    }))

  }
  render() {
  return (
    <div className="flex  flex-col ">
      <h1 className='text-center pt-16 text-3xl '>The Github Cards App</h1>
      <Form onSubmit = {this.addNewProfile}/>
      <CardList profiles={this.state.profiles}/>
    </div>
  );
  }
}

//export default App;
