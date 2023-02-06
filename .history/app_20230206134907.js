const geocode = require( "./utils/geocode" )
const forecast = require( './utils/forecast' )

console.log( process.argv )

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