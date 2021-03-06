import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete} update={this.props.update} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: formData => dispatch({ type: 'ADD_RESTAURANT', formData }),
    update: formData => dispatch({ type: 'UPDATE_RESTAURANT', formData }),
    delete: id => dispatch({ type: 'DELETE_RESTAURANT', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
