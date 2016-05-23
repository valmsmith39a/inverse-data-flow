import React from 'react'
import Child from './child'

export default class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {
    alert('Live long and prosper!')
  }

  render() {
    return(
      <div>
        Parent Component
        <Child
          sayHello={this.handleClick}
        />
      </div>
    )
  }
}
