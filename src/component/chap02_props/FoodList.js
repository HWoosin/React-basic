import React from 'react'
import FoodItem from './FoodItem'

const FoodList = () => {
  return (
    <ul>
        <FoodItem foodName='짜장면' price={6000}/>
        <FoodItem foodName='해물파전' price={12000}/>
        <FoodItem foodName='가츠동' price={8000}/>
    </ul>
  )
}

export default FoodList