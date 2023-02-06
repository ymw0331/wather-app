const geocode = require( "./utils/geocode" )
const forecast = require( './utils/forecast' )

const address = process.argv[ 2 ]

console.log( process.argv )

geocode( address, ( error, data ) => {

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