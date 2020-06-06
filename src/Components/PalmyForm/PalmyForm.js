import React, { Component } from 'react'
import './PalmyForm.css'

export default class PalmyForm extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div className="palmy-form">
        <form action="">
          <h1>Form</h1>
          <label >Name</label>
          <input type="text"/>
          <label >Name</label>
          <input type="text"/>
          <label >Name</label>
          <input type="text"/>
          <label >Name</label>
          <input type="text"/>
          <label >Name</label>
          <input type="text"/>
          <label >Name</label>
          <input type="text"/>
          <input type="text"/>
          <input type="submit" className='.btn' />
        </form>
      </div>
    )
  }
}