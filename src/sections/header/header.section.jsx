import React, { Component } from 'react'
import { Logo, ImageButton } from '../../components'
import githubLogo from '../../assets/github-logo'
import linkedinLogo from '../../assets/linkedin-logo'
import myLogo from '../../assets/my-logo'
import './header.style.css'

export class HeaderSection extends Component {

  redirectToLinkedIn = () => {
    //code to redirect here...
    console.log('redirecting to linkedin')
  }

  redirectToGitHub = () => {
    //code to redirect here...
    console.log('redirecting to github')
  }

  render() {
    return(
      <header className="header">
        <section className="section left-side">
          <Logo svgSource={myLogo} theme='green' />
          <span className="title">Site do Jão, Padrin</span>
        </section>
        <section className="section right-side">
          <ImageButton
            action={this.redirectToGitHub}
          >
            <Logo svgSource={githubLogo} theme='light' />
          </ImageButton>
          <ImageButton
            action={this.redirectToLinkedIn}
          >
            <Logo svgSource={linkedinLogo} theme='blue' />
          </ImageButton>
        </section>
      </header>
    )
  }
}
