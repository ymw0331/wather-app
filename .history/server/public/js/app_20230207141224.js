console.log( "Client side js file loaded" )


fetch( 'http://puzzle.mead.io/puzzle' ).then( ( response ) => {

  response.json().then( ( data ) => {

    console.log( data )
  } )

} )