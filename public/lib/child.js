import React from 'react'

export default class Child extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('in handle click ')
    this.props.sayHello()
  }

  render() {
    return(
      <div>
        Child Component
        <button onClick={this.handleClick}>Click to say hello</button>
      </div>
    )
  }
}
