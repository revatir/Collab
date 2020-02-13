import React, { Component } from 'react'

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newReview: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <section>
          <h2>Reviews</h2>
          {this.props.reviews.map(review => (
            <div key={review.id}>
              <p>{review.review}</p>
            </div>
          ))}
        </section>
        <section>
          <h3>Review This Company:</h3>
          <form onSubmit={(e) => this.handleSubmit(e, { newReview: this.state.newReview })}>
            <span className="field">
              <label htmlFor="review">Review</label>
              <input
                type="text"
                name="username"
                value={this.state.newReview}
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