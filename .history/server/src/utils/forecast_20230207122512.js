const request = require( 'request' )

const forecast = ( latitude, longtitude, callback ) => {
  const url = 'http://api.weatherstack.com/current?access_key=2cc241dd2a7a2cbbbe993b8ad8de7350&query=' + latitude + ',' + longtitude;


  request( {
    url,
    json: true
  }, ( error, {
    body
  } ) => {

    if ( error ) {
      callback( "Unable to connect to weather services", undefined )
    } else if ( body.error ) {
      callback( "Unable to find location", undefined )
    } else {
      callback( undefined, body.current.weather_descriptions[ 0 ] + ". It is currently " + body.current.temperature + " degrees out. There is " + body.current.precip + " of rain." )
    }

  } )
}

module.exports = forecast