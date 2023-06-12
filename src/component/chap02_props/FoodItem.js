import React from 'react'

const FoodItem = (props) => {
    console.log('props: ' + props);
  return (
    <li id = 'chinese'>{props.foodName} ({props.price}원)</li>
  )
}

export default FoodItem