import React, { Component } from 'react';
import { showCompany } from '../Services/api_helper';

import Reviews from './Reviews';

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      company: {},
      reviews: []
    }
  }

  componentDidMount = async () => {
    try {
      const company = await showCompany(this.props.userId);
      this.setState({
        company,
      })
    } catch (e) {
      console.error(e)
    }
  }


  render() {
    return (
      <div>
        <h2>{this.state.company.company_name}</h2>
        <img src={this.state.company.logo_url} alt="logo" />
        <p>{this.state.company.category_1}</p>
        <p>{this.state.company.category_2}</p>
        <p>{this.state.company.category_3}</p>
        <p>{this.state.company.website}</p>
        <p>{this.state.company.about}</p>
        <p>{this.state.company.unique}</p>
        <Reviews
          reviews={this.state.reviews}
          userId={this.props.userId}
          currentUser={this.props.currentUser}
          currentUserCompany={this.props.currentUserCompany}
        />
      </div>
    )
  }
}