import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://www.maangchi.com/wp-content/uploads/2013/12/easykimchi.jpg",
    rating: 3.5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "http://cfile227.uf.daum.net/image/2743B64655C98B4821CDBA",
    rating: 5,
  },
  {
    id: 3,
    name: "bibimbap",
    image:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https:%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F227B634355E4A45823",
    rating: 4.2,
  },
  {
    id: 4,
    name: "sushi",
    image:
      "https://seachef.com/wp-content/uploads/2018/02/Optimized-shutterstock_1252098172.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "pizza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg/1200px-Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg",
    rating: 5,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
