const geocode = require( "./utils/geocode" )
const forecast = require( './utils/forecast' )

geocode( "Kuala Lumpur", ( error, data ) => {

  if ( error ) {
    return console.log( "Error", error )
  }

  forecast( data.latitude, data.longitude, ( error, forecastData ) => {
    if ( error ) {
      return console.log( 'Error', error )

    }
    console.log( data.location )
    console.log( forecastData )
  } )
} )