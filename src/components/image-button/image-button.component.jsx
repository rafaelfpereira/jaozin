import React, { Component } from 'react'
import './image-button.style.css'

export class ImageButton extends Component {
  render() {
    return(
      <button className={`image-button ${this.props.theme}`} onClick={this.props.action}>
        {this.props.children}
      </button>
    )
  }
}
