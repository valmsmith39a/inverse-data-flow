import React from 'react'

export default class Child extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.sayHello(this.refs.input.value)
  }

  render() {
    return(
      <div>
        Child Component
        <input ref='input' />
        <button onClick={this.handleClick}>Click to display greeting</button>
      </div>
    )
  }
}
