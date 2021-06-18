// Import npm
import React from 'react';

// Import of components
import Card from 'src/containers/Card';
import Loading from 'src/components/App/Loading';

// Import of scss
import './cards.scss';

// Display of the cards
const Cards = ({movies, shows, loading}) => {
  console.log('loading:', loading);
  if (loading === true) {
    return <Loading />;
  }

  if (loading === false) {
    return (
      // TODO: make the display of the cards dynamic with a map
      <div className="cards">
      {console.log('movies in Cards component', movies)}
      {console.log('shows in Cards component', shows)}
      {movies.map((movie) => (
        <Card
          title={movie.title}
          key= {movie.id}
        />
      ))}
      </div>
    );
  }
};

export default Cards;
