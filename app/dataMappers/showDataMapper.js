const fetch = require('node-fetch');

module.exports = {
  async getAllShows() {
    try {
      const apiUrl =
        'https://api.betaseries.com/search/shows?limit=50&svods=1%2C2%2C3&="&key=e7da6c21d678&';
      
        // Affiche un résultat de 50 series sur les 3 plateformes (Netflix, Amazon Prime Video, OCS Go)
      const response = await fetch(apiUrl);
      
      let body = await response.json();
      if (!Array.isArray(body)) {
        body = [body];
      }
      return body;
    } catch (error) {
      console.error(error);
    }
  },

  async randomShows() {
    try {
      const apiUrl =
        "https://api.betaseries.com/shows/random?nb=5&=&key=e7da6c21d678&";
      // Methode qui affiche 5 series au hasard
      const response = await fetch(apiUrl);
      let body = await response.json();
      if (!Array.isArray(body)) {
        body = [body];
      }
      return body;
    } catch (error) {
      console.error(error);
    }
  },

  async searchAllShows() {
    
      const apiUrl = 'https://api.betaseries.com/search/shows?v=3.0&key=e7da6c21d678';
      const response = await fetch(apiUrl);
      let body = await response.json();
      if (!Array.isArray(body)) {
        body = [body];
      }
      return body;
  }

};
