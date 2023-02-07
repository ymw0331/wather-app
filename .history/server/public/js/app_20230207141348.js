console.log( "Client side js file loaded" )


fetch( 'http://localhost:3000/weather?address=philadelphia' ).then( ( response ) => {

  response.json().then( ( data ) => {
    console.log( data )
  } )

} )