// Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Import of components
import Header from 'src/containers/Header';
import SearchBar from 'src/containers/SearchBar';
import Cards from 'src/components/Cards';

// Import scss
import './home.scss';

// Display of home
const Home = ({ searchInputValue,getRandom,ranmovie,ranshow, isConnected }) => {

  useEffect(()=>{
    getRandom();
  }, []);

  return(
  <div>
    {// Header
    }
    <Header />
    {// When the input of the searchbar is empty, the searchbar is in the center of the page
    // If the user writes something in it, the searchbar moves to the top of the page
    }
    <div className={classNames('home', { 'home--noResearch': searchInputValue.length === 0, 'home--research': searchInputValue.length > 0 })}>
      <div className="home__searchBar">
        {// Title, searchbar and suggestions
        }
        <p className="home__searchBar__presentation">Le moteur de recherche pour vos moments devant la TV</p>
        <SearchBar />
        {// TODO: Add real random suggestions
        }
          <p className="home__searchBar__suggestion">Essayez: {ranmovie.title} ou {ranshow.title}</p>

      </div>
      {// Button to go to Picky Mood
      }
      <div className="home__pickyMood">
        <p>Vous ne savez pas quoi regarder? Faites nous confiance!</p>
        {isConnected && (
          <Link to="/mood">Picky Mood</Link>
        )}
        {!isConnected && (
          <Link to="/signUp">Picky Mood</Link>
        )}
      </div>
      {// Display of the results
      }
      <div className="home__results">
        <Cards />
      </div>
    </div>
  </div>
  )};

Home.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  ranmovie: PropTypes.object.isRequired,
  ranshow: PropTypes.object.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default Home;
