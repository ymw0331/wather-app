const request = require( 'request' )

const forecast = ( latitude, longtitude, callback ) => {
  const url = 'http://api.weatherstack.com/current?access_key=2cc241dd2a7a2cbbbe993b8ad8de7350&query=' + latitude + ',' + longtitude;


  request( {
    url,
    json: true
  }, ( error, {body} ) => {

    if ( error ) {
      callback( "Unable to connect to weather services", undefined )
    } else if ( body.error ) {
      callback( "Unable to find location", undefined )
    } else {
      callback( undefined, response.body.current.weather_descriptions[ 0 ] + ". It is currently " + response.body.current.temperature + " degrees out. There is " + response.body.current.precip + " of rain." )
    }

  } )
}

module.exports = forecast


// const url = 'http://api.weatherstack.com/current?access_key=2cc241dd2a7a2cbbbe993b8ad8de7350&query=3.1569,101.7123'

// request( {
//   url: url,
//   json: true
// }, ( error, response ) => {

//   if ( error ) {
//     console.log( "Unable to connect to weather services" )
//   } else if ( response.body.error ) {
//     console.log( "Unable to find location" )

//   } else {

//     console.log( response.body.current.weather_descriptions[ 0 ] + ". It is currently " + response.body.current.temperature + " degrees out. There is " + response.body.current.precip + " of rain." )
//   }

// } )