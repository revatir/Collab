import React, { Component } from 'react'
import { showReviews, createReview } from '../Services/api_helper'

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

  handleSubmit = async (e) => {
    e.preventDefault()
    let newReviews = await createReview(this.props.userId, { review: this.state.review })
    newReviews = newReviews.data
    this.setState({
      reviews: newReviews
    })
  }

  render() {
    return (
      <div>
        <section>
          <h2>Reviews</h2>
          {this.state.reviews.map(review => (
            <div key={review.id}>
              <p>{review.review}</p>
            </div>
          ))}
        </section>
        <section>
          <h3>Review This Company:</h3>
          <form onSubmit={(e) => this.handleSubmit(e, { review: this.state.review })}>
            <span className="field">
              <label htmlFor="review">Review</label>
              <input
                type="text"
                name="review"
                value={this.state.review}
                onChange={this.handleChange}
              />
            </span>
            <input type="submit" className="submit" value="Submit" />
          </form>
        </section>
      </div >
    )
  }
}