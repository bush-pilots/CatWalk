const axios = require('axios');
const config = require('../config.js');

//broken down by widget to minimize toe-on-toe action


//PRODUCTS DETAIL WIDGET HELPERS

let amazingSampleHelper = (cb) => {
  
//(just a sample, may need revision based on how this API actually behaves)
  
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5`,
    headers: {
      'Authorization': `token ${config.API_TOKEN}`
    }
  };
  
    axios.get(options.url, options.headers)
    .then(response => cb(null, response))
    .catch(err => cb(err, null));

}
  
//RATINGS/REVIEWS WIDGET HELPERS





  

// Q/A WIDGET HELPERS







// RELATED ITEMS/OUTFIT WIDGET HELPERS






module.exports = {
  //export all helper functions here,
  //amazingSampleHelper,
  //...
}
