const axios = require('axios');
const config = require('../config.js');

//broken down by widget to minimize toe-on-toe action

//Sets default authorization in header to your config.TOKEN. This should mean you do not need to add it into your requests
axios.defaults.headers.common['authorization'] = config.API_TOKEN



//PRODUCTS DETAIL WIDGET HELPERS

let amazingSampleHelper = (cb) => {

//(just a sample, may need revision based on how this API actually behaves)

  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5`,
    headers: {
      'Authorization': `token ${config.API_TOKEN}`
    }
  }

    axios.get(options.url, options.headers)
    .then(response => cb(null, response))
    .catch(err => cb(err, null));

}

let getProductData = (id, cb) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}`)
  .then((response) => {
    cb(null, response)
  })
  .catch(err => cb(err, null))
}

let getStyles = (id, cb) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/styles`)
  .then((response) => {
    cb(null, response)
  })
  .catch(err => cb(err, null))
}

let getRelated = (id, cb) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/related`)
  .then((response) => {
    cb(null, response)
  })
  .catch(err => cb(err, null))
}

//RATINGS/REVIEWS WIDGET HELPERS







// Q/A WIDGET HELPERS







// RELATED ITEMS/OUTFIT WIDGET HELPERS






module.exports = {
  //export all helper functions here,
  //amazingSampleHelper,
  //...
  getProductData,
  getStyles
}
