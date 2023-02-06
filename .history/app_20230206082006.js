// non blocking model
console.log( "Starting" )

setTimeout( () => {

  console.log( "2 seconds timer" )

}, 2000 )

setTimeout( () => {

}, 0 )

console.log( "Stopping" )