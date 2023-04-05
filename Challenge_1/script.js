const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number ==parseInt( primaryPhone) 
let o = false
o = Number(o)
console.log( o , typeof o)

const secondaryValid = typeof number == Number(secondaryPhone)

console.log(parseInt('Primary phone is valid numerical string:', primaryValid))
console.log('Secondary phone is valid numerical string:', secondaryValid )