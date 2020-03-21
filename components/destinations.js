import { useState } from 'react'
import Card from '../components/card'

const mockDestinations = [
  {
    city: 'Miami',
    country: 'USA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ullam odio aliquam?',
    backgroundImage: '/miami.jpg',
    bgClass: 'bg-teal-700',
  },
  {
    city: 'Shanghai',
    country: 'China',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ullam odio aliquam?',
    backgroundImage: '/shanghai.jpg',
    bgClass: 'bg-red-400'
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ullam odio aliquam?',
    backgroundImage: '/amsterdam.jpg',
    bgClass: 'bg-orange-500'
  },
  {
    city: 'Riyadh',
    country: 'Saudi Arabia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ullam odio aliquam?',
    backgroundImage: '/saudi-arabia.jpg',
    bgClass: 'bg-red-800'
  },
]

export default () => {
  const [destinations] = useState(mockDestinations)
  return (
    <div className="flex flex-col md:flex-row">
      {
        destinations.map(destination => <Card key={destination.city} destination={destination} />)
      }
    </div>
  )
}