import React, { Component } from 'react'
import './logo.style.css'

export class Logo extends Component {
  render() {
    return (
      <div className={`my-logo ${this.props.theme}`}>
        {this.props.svgSource}
      </div>
    )
  }
}
