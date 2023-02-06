const request = require( "request" )

const api_key = `2cc241dd2a7a2cbbbe993b8ad8de7350`

const url = 'http://api.weatherstack.com/current?access_key=2cc241dd2a7a2cbbbe993b8ad8de7350&query=37.8267,-122.4233'

request( {
  url: url,
  json: true
}, ( error, response ) => {
  console.log( response.body.current )


} )

