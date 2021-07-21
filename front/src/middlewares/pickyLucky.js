import axios from 'axios';
import { GET_RANDOM_FOR_PICKY_LUCKY, GET_RANDOM_FOR_PICKY_LUCKY_SHOW, saveInfoPickyLucky, saveInfoPickyLuckyShow, setPickyShowToTrue, setPickyToTrue } from 'src/actions/lucky';

const resultPickyLucky = (store) => (next) => (action) => {
  switch (action.type){
    case GET_RANDOM_FOR_PICKY_LUCKY: {
      axios.get('/api/picky/movies/random')
        .then((response)=> {
          const action = setPickyToTrue()
          const  movie  = response.data[0].movies[0]
          store.dispatch(saveInfoPickyLucky(movie))
          store.dispatch(action)
        })
        .catch((error) => {
          console.log(error)
        })
        break;
    }

    case GET_RANDOM_FOR_PICKY_LUCKY_SHOW: {
      axios.get('/api/picky/shows/random')
        .then((response) => {
          const action = setPickyShowToTrue();
          const show = response.data[0].shows[0];
          store.dispatch(action)
          store.dispatch(saveInfoPickyLuckyShow(show))
        })
        .catch((error)=>{
          console.log(error)
        })
        break
    }
    default:
      next(action)
  }
};

export default resultPickyLucky
