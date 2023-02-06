const geocode = require( "./utils/geocode" )
const forecast = require( './utils/forecast' )

geocode( "Kuala Lumpur", ( error, data ) => {

  if ( error ) {
    console.log( "Error", error )

  }e

  forecast( data.latitude, data.longitude, ( error, data ) => {
    console.log( 'Error', error )
    console.log( 'Data', data )
  } )
} )