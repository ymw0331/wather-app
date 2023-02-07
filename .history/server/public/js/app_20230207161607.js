console.log( "Client side js file loaded" )

const weatherForm = document.querySelector( 'form' )
const search = document.querySelector( 'input' )
const messageOne = document.querySelector( '#firstMessage' )
const messageTwo = document.querySelector( '#secondMessage' )

messageOne.textContent = 'Loading...'

weatherForm.addEventListener( 'submit', ( e ) => {
  e.preventDefault()

  const location = search.value
  messageOne.textContent = "Loading..."
  messageOne.textContent = "Loading..."


  fetch( 'http://localhost:3000/weather?address=' + location ).then( ( response ) => {
    response.json().then( ( data ) => {
      if ( data.error ) {
        console.log( data.error )
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    } )
  } )

} )