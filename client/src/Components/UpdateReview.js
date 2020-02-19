import React, { Component } from 'react';

export default class UpdateReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      review: "",
      company_id: "",
    }
  }

  setFormData = () => {
    if (this.props.reviews.length) {
      console.log(this.props.reviews);
      const { review, company_id } = this.props.reviews.find(reviewData => {
        return parseInt(reviewData.id) === parseInt(this.props.reviewId)
      })
      this.setState({ review, company_id })
    }
  }


  componentDidMount() {
    this.setFormData();
    console.log(this.props.reviews)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviews !== this.props.reviews) {
      this.setFormData();
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleEditReview(e, this.state.company_id, this.props.reviewId, this.state)
      }}>
        <label htmlFor="review">Review</label>
        <input
          type="text"
          name="review"
          value={this.state.review}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
