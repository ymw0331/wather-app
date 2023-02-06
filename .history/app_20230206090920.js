const request = require( "request" )

const api_key = `2cc241dd2a7a2cbbbe993b8ad8de7350`

const url = 'http://api.weatherstack.com/current?access_key=2cc241dd2a7a2cbbbe993b8ad8de7350&query=3.1569,101.7123'

request( {
  url: url,
  json: true
}, ( error, response ) => {


  console.log( response.body.current.weather_descriptions[ 0 ] + "It is currently " + response.body.current.temperature + " degrees out. There is " + response.body.current.precip + " of rain." )


} )