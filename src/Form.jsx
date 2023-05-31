import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    state = {userName:''};
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(resp.data);
        this.setState({userName:''})
    }
  render() {
    return (
      <form className='text-center border-spacing-6' onSubmit={this.handleSubmit}>
        <input className='border-2 px-28 py-6' type="text" value={this.state.userName}
         onChange={event=>this.setState({userName:event.target.value})}
         placeholder='Type Github Name...' required/>
        <button className='border-2 bg-blue-400 px-6 py-2 rounded-md '>Add Card</button>
      </form>
    )
  }
}
