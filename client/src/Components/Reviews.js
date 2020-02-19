import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { showReviews, createReview, deleteReview } from '../Services/api_helper'

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      review: ""
    }
  }

  componentDidMount = async () => {
    try {
      const reviews = await showReviews(this.props.userId)
      this.setState({
        reviews,
      })
      console.log(this.props.currentUser)
    } catch (e) {
      console.error(e)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmitReview = async (e) => {
    e.preventDefault()
    const reviews = this.state.reviews
    let review = await createReview(this.props.userId,
      {
        user_id: this.props.currentUser.id,
        submitted_user: this.props.currentUser.username,
        submitted_company: this.props.currentUserCompany.company_name,
        review: this.state.review
      })
    review = review.data
    this.setState({
      reviews: [...reviews, review]
    })
    console.log(this.state.reviews)
  }




  handleDeleteReview = async (e, userId, reviewId) => {
    e.preventDefault()
    await deleteReview(userId, reviewId)
    const reviews = this.state.reviews.filter(review => (
      review.id !== reviewId
    ))
    this.setState({
      reviews,
    })
    console.log(this.state.reviews)
  }

  render() {
    return (
      <div>
        <section>
          <h2>Reviews</h2>
          {this.state.reviews.map(review => (
            <div key={review.id}>
              <p>{review.review}</p>
              <p>Submitted By: {review.submitted_user}</p>
              <p>From: {review.submitted_company}</p>
              {this.props.currentUser.username === review.submitted_user &&
                <div>
                  <Link to={`/reviews/${review.id}/edit`}><button>Edit Review</button></Link>

                  <input type="submit" className="delete" value="Delete Review" onClick={(e) => this.handleDeleteReview(e, this.props.userId, review.id)} />
                </div>
              }
            </div>
          ))}
        </section>
        {parseInt(this.props.userId) !== parseInt(this.props.currentUser.id) &&
          <section>
            <h3>Review This Company:</h3>
            <form onSubmit={(e) => this.handleSubmitReview(e)}>
              <span className="field">
                <label htmlFor="review">Review</label>
                <input
                  type="text"
                  name="review"
                  value={this.state.review}
                  onChange={this.handleChange}
                />
              </span>
              <input type="submit" className="submit" value="Submit Review" />
            </form>
          </section>
        }
      </div >
    )
  }
}