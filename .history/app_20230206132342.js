const request = require( "request" )
const geocode = require( "./utils/geocode" )

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

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = ( long, lat, callback ) => {
  const url = 'http://api.weatherstack.com/current?access_key=2cc241dd2a7a2cbbbe993b8ad8de7350&query=' + lat + '',' +long'


  request( {
    url: url,
    json: true
  }, ( error, response ) => {

    if ( error ) {
      callback( "Unable to connect to weather services", undefined )
    } else if ( response.body.error ) {
      callback( "Unable to find location", undefined )

    } else {

      callback( undefined, response.body.current.weather_descriptions[ 0 ] + ". It is currently " + response.body.current.temperature + " degrees out. There is " + response.body.current.precip + " of rain." )
    }

  } )
}


forecast( -75.7088, 44.1545, ( error, data ) => {
  console.log( 'Error', error )
  console.log( 'Data', data )
} )


// const geocode = ( address, callback ) => {

//   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent( address ) + '.json?access_token=pk.eyJ1IjoieW13MDMzMSIsImEiOiJja2lweHoyaHcwNGd3MnlvOHhlZ29rc2piIn0.hyGnRxMyvNpB6qAUS8rnTw&limit=1'

//   request( {
//     url: url,
//     json: true
//   }, ( error, response ) => {
//     if ( error ) {
//       callback( 'Unable to connect to location services!', undefined )
//     } else if ( response.body.features.length === 0 ) {
//       callback( "Unable to find location. Try another search", undefined )
//     } else {
//       callback( undefined, {
//         latitude: response.body.features[ 0 ].center[ 1 ],
//         longtitude: response.body.features[ 0 ].center[ 0 ],
//         location: response.body.features[ 0 ].place_name
//       } )
//     }
//   } )

// }




// geocode( "Boston", ( error, data ) => {
//   console.log( "Error", error )
//   console.log( "Data", data )
// } )