import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      company_name: "",
      category_1: "",
      category_2: "",
      category_3: "",
      about: "",
      unique: "",
      website: "",
      logo_url: "",
      errorText: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.state.username ||
      !this.state.password ||
      !this.state.email ||
      !this.state.company_name ||
      !this.state.category_1 ||
      !this.state.about ||
      !this.state.unique) {
      this.setState({
        errorText: "Please fill in all of the required fields!"
      })
    } else if (!this.state.logo_url) {
      this.props.handleRegister(e,
        {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        },
        {
          company_name: this.state.company_name,
          category_1: this.state.category_1,
          category_2: this.state.category_2,
          category_3: this.state.category_3,
          about: this.state.about,
          unique: this.state.unique,
          website: this.state.website,
          logo_url: "http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png"
        })

    } else {
      this.props.handleRegister(e,
        {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        },
        {
          company_name: this.state.company_name,
          category_1: this.state.category_1,
          category_2: this.state.category_2,
          category_3: this.state.category_3,
          about: this.state.about,
          unique: this.state.unique,
          website: this.state.website,
          logo_url: this.state.logo_url
        })
    }
  }
  render() {
    return (
      <div>
        {this.props.currentUser ?
          <div>
            <div className="restrict">
              <h1>You are already logged in. Go to <a href="/explore">Explore.</a></h1>
            </div>
          </div>
          :
          <div className="register-form">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <h2>Let's get started...</h2>
              {this.state.errorText && <p className="error-text">{this.state.errorText}</p>}
              <span className="field">
                <label htmlFor="username">Username*</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  autoComplete="off"
                  autoFocus={true}
                  autoCorrect="off"
                  spellCheck="false"
                />
              </span>
              <span className="field">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="company_name">Company Name*</label>
                <input
                  type="text"
                  name="company_name"
                  value={this.state.company_name}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="category_1">Category 1*</label>
                <input
                  type="text"
                  name="category_1"
                  value={this.state.category_1}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="category_2">Category 2*</label>
                <input
                  type="text"
                  name="category_2"
                  value={this.state.category_2}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="category_3">Category 3*</label>
                <input
                  type="text"
                  name="category_3"
                  value={this.state.category_3}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="about">Share a short description of your company*</label>
                <input
                  type="text"
                  name="about"
                  value={this.state.about}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="unique">What makes your company unique?*</label>
                <input
                  type="text"
                  name="unique"
                  value={this.state.unique}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="website">Company Website</label>
                <input
                  type="text"
                  name="website"
                  value={this.state.website}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="logo_url">Logo URL</label>
                <input
                  type="text"
                  name="logo_url"
                  value={this.state.logo_url}
                  onChange={this.handleChange}
                />
              </span>
              <input type="submit" className="submit" value="Register" />
            </form>
          </div>
        }
      </div>
    )
  }
}