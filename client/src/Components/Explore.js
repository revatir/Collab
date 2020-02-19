import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { indexAllCompanies } from '../Services/api_helper';
import Search from './Search'

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: false,
      filteredCompanies: [],
      apiDataLoaded: false,
      search: null,
    }
  }

  componentDidMount = async () => {
    // console.log(this.props.currentUser)
    try {
      const companies = await indexAllCompanies();
      this.setState({
        companies,
        apiDataLoaded: true
      })
    } catch (e) {
      console.error(e)
    }
  }

  handleSearchChange = async (e) => {
    const { value } = e.target;
    await this.setState({
      search: value
    })
    this.filterCompanies()
  }

  filterCompanies = () => {
    let filteredCompanies = this.state.companies.filter(company =>
      company.company_name.toLowerCase().startsWith(this.state.search.toLowerCase())
    )
    this.setState({
      filteredCompanies
    })
  }

  addDefaultSrc(ev) {
    ev.target.src = 'http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png'
  }

  render() {
    const linkStyle = {
      textDecoration: "none",
    }

    return (
      <div className="explore-section-wrapper">
        {!this.props.currentUser ?
          <div className="restrict">
            <h1>Please <a href="/login">login</a> to see your feed.</h1>
          </div>
          :
          <div>
            <div className="feedpage-controls">
              <Search handleChange={this.handleSearchChange} />
            </div>
            <div className="feedpage-wrapper">
              <div className="feedpage-content">
                {this.state.apiDataLoaded && this.state.search &&
                  this.state.filteredCompanies.map(company => (
                    <Link style={linkStyle} to={`/profile/${company.id}`} key={company.id}>
                      <div key={company.id} className="companies">
                        <h4>{company.company_name}</h4>
                        <img onError={this.addDefaultSrc} src={company.logo_url} alt="company" />
                        <div className="categories">
                          <p>{company.category_1}</p>
                          <p>{company.category_2}</p>
                          <p>{company.category_3}</p>
                        </div>
                      </div>
                    </Link>
                  ))
                }
                {this.state.apiDataLoaded && !this.state.search &&
                  this.state.companies.map(company => (
                    <Link style={linkStyle} to={`/profile/${company.id}`} key={company.id}>
                      <div key={company.id} className="companies">
                        <h4>{company.company_name}</h4>
                        <img onError={this.addDefaultSrc} src={company.logo_url} alt="user" />
                        <div className="categories">
                          <p>{company.category_1}</p>
                          <p>{company.category_2}</p>
                          <p>{company.category_3}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div >
          </div>
        }
      </div>
    )
  }
}

export default Explore
