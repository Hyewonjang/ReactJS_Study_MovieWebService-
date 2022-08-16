import React from "react";
import { PropTypes } from 'prop-types';


function Food({name, picture, rating}){
  // console.log(props.fav);
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired

}

const foodILike = [
  {
    id : 1,
    name : 'Kimchi',
    image : '',
    rating: 5
  },
  {
    id : 2,
    name : 'Sangyeopsal',
    image : '',
    rating : 4.9
  },
  {
    id : 3, 
    name : 'Bibimbap',
    image : '',
    rating : 5.5
  },
  {
    id : 4,
    name : 'Dongasu',
    image : '',
    rating : 4.7
  },
]

// function renderFood(dish){
//   //console.log(dish)
//   return <Food name={dish.name} picture={this.image}/>
// }


function App_Food() {
  return (
    <div>
      {/* <h1>Hello!</h1> */}
      {/* <Food fav="kimchi" something={true} papapapa ={["hello", 1,2,3,4, true]}/> */}
      {/* <Food favourite="kimchi"/>
      <Food favourite="ramen"/>
      <Food favourite="samgiopsal"/>
      <Food favourite="chukumi"/>
      <Food favourite="kimbap"/> */}

      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
      {/* {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App_Food;
