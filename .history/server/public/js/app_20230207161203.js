console.log( "Client side js file loaded" )

const weatherForm = document.querySelector( 'form' )
const search = document.querySelector( 'input' )
const messageOne = document.findBy

weatherForm.addEventListener( 'submit', ( e ) => {
  e.preventDefault()

  const location = search.value

  fetch( 'http://localhost:3000/weather?address=' + location ).then( ( response ) => {
    response.json().then( ( data ) => {
      if ( data.error ) {
        console.log( data.error )
      } else {
        console.log( data.location )
        console.log( data.forecast )
      }
    } )
  } )


} )