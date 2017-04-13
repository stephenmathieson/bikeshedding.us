import uniqueRandomArray from 'unique-random-array'

const getRandomBikeshedURL = uniqueRandomArray([
  require('../images/03_Clasic-with-bikes-inside.jpg'),
  require('../images/safestore-bike-teesdale-twin-locker-large.jpg'),
  require('../images/bike-store-shed-01.jpg'),
  require('../images/dCor-design-6-x-2-Wooden-Bike-Shed.jpg')
])

export default getRandomBikeshedURL
