import React, { Component } from 'react';
import { showCompany, showReviews } from '../Services/api_helper';

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
      const company = await showCompany(this.props.currentUserId);
      const reviews = await showReviews(this.props.currentUserId)
      this.setState({
        company,
        reviews,
      })
      console.error(this.state.company)
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
        />
      </div>
    )
  }
}