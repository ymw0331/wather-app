api_key=2cc241dd2a7a2cbbbe993b8ad8de7350

// non blocking model
console.log( "Starting" )

setTimeout( () => {

  console.log( "2 seconds timer" )

}, 2000 )

setTimeout( () => {
  console.log( "0 second timer" )
}, 0 )

console.log( "Stopping" )