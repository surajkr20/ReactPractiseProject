import React from 'react'

const FoodCards = ({data}) => {
  return (
    <div>
      {data?.map((value) => (
        <FoodCards key={value.name}>
          {console.log(value)}
        </FoodCards>
      ))}
    </div>
  )
}

export default FoodCards;