const request = require( "request" )

const api_key = `2cc241dd2a7a2cbbbe993b8ad8de7350`

const url = 'http://api.weatherstack.com/current?access_key=2cc241dd2a7a2cbbbe993b8ad8de7350&query=3.1569,101.7123'

request( {
  url: url,
  json: true
}, ( error, response ) => {

  if ( error ) {
    console.log( "Unable to connect to weather services" )
  } else {
    console.log( response.body.current.weather_descriptions[ 0 ] + ". It is currently " + response.body.current.temperature + " degrees out. There is " + response.body.current.precip + " of rain." )
  }

} )



// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieW13MDMzMSIsImEiOiJja2lweHoyaHcwNGd3MnlvOHhlZ29rc2piIn0.hyGnRxMyvNpB6qAUS8rnTw&limit=1'

// request( {
//   url: geocodeURL,
//   json: true
// }, ( error, response ) => {

//   const latitude = response.body.features[ 0 ].center[ 1 ]
//   const longtitude = response.body.features[ 0 ].center[ 0 ]

//   console.log( latitude, longtitude )
// } )