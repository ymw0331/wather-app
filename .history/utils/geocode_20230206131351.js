const request = require( 'request' )

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadephia.json?access_token=pk.eyJ1IjoieW13MDMzMSIsImEiOiJja2lweHoyaHcwNGd3MnlvOHhlZ29rc2piIn0.hyGnRxMyvNpB6qAUS8rnTw&limit=1'

// request( {
//   url: geocodeURL,
//   json: true
// }, ( error, response ) => {
//   if ( error ) {
//     console.log( "Unable to connect to location services" )

//   } else if ( response.body.features.length === 0 ) {
//     console.log( "Unable to find location. Try another search" )
//   } else {
//     const latitude = response.body.features[ 0 ].center[ 1 ]
//     const longtitude = response.body.features[ 0 ].center[ 0 ]
//     console.log( latitude, longtitude )
//   }

// } )

const geocode = ( address, callback ) => {

  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent( address ) + '.json?access_token=pk.eyJ1IjoieW13MDMzMSIsImEiOiJja2lweHoyaHcwNGd3MnlvOHhlZ29rc2piIn0.hyGnRxMyvNpB6qAUS8rnTw&limit=1'


  request( {
    url: url,
    json: true
  }, ( error, response ) => {
    if ( error ) {
      callback( 'Unable to connect to location services!', undefined )
    } else if ( response.body.features.length === 0 ) {
      callback( "Unable to find location. Try another search", undefined )
    } else {
      callback( undefined, {
        latitude: response.body.features[ 0 ].center[ 1 ],
        longtitude: response.body.features[ 0 ].center[ 0 ],
        location: response.body.features[ 0 ].place_name
      } )
    }
  } )

}

module.exports = {
  
}