import React from 'react'
import Child from './child'

export default class Parent extends React.Component {
  render() {
    return(
      <div>
        Parent Component
        <Child />
      </div>
    )
  }
}
