import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { showCompany } from '../Services/api_helper';
import UpdateCompany from './UpdateCompany.js'

import Reviews from './Reviews';

export default class MyProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      company: {},
    }
  }

  componentDidMount = async () => {
    try {
      const company = await showCompany(this.props.currentUserId);
      this.setState({
        company,
      })
    } catch (e) {
      console.error(e)
    }
  }


  render() {
    return (
      <div className="profile">
        <h2>{this.state.company.company_name}</h2>
        <img src={this.state.company.logo_url} alt="logo" />
        <h3>Categories</h3>
        <p>{this.state.company.category_1}</p>
        <p>{this.state.company.category_2}</p>
        <p>{this.state.company.category_3}</p>
        <h3>Website</h3>
        <p>{this.state.company.website}</p>
        <h3>About Us</h3>
        <p>{this.state.company.about}</p>
        <h3>What Makes Us Unique?</h3>
        <p>{this.state.company.unique}</p>
        <Reviews
          reviews={this.state.reviews}
          userId={this.props.currentUserId}
          currentUser={this.props.currentUser}
          currentUserCompany={this.props.currentUserCompany}
        />
        <Route path="/companies/:id/edit" render={(props) => (
          <UpdateCompany
            companies={this.state.companies}
            updateCompany={this.updateCompany}
            companyId={props.match.params.id}
          />
        )} />
      </div>
    )
  }
}