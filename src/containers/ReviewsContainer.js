import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} /> 
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} delete={this.props.delete} update={this.props.update} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: formData => dispatch({ type: 'ADD_REVIEW', formData }),
    update: formData => dispatch({ type: 'UPDATE_REVIEW', formData }),
    delete: id => dispatch({type: 'DELETE_REVIEW', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)