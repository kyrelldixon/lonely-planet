import Card from '../components/card'

const destinations = [
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

export default () => (
  <article className="max-w-4xl mx-auto pt-32">
    <div className="flex flex-col items-center mb-16">
      <h1 className="text-3xl text-center text-gray-800 mb-4 font-thin">Find the perfect destination</h1>
      <hr className="w-8 h-1 bg-red-700" />
    </div>
    <form>
      <div className="flex items-end mb-4">
        <div className="flex flex-col flex-1">
          <label className="text-xs text-gray-500">Select Terrain</label>
          <select className="bg-white">
            <option>All</option>
            <option>Mountain</option>
            <option>Ocean</option>
            <option>Lake</option>
            <option>Urban</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-xs text-gray-500">Select Style</label>
          <select className="bg-white">
            <option>All</option>
            <option>Mountain</option>
            <option>Ocean</option>
            <option>Lake</option>
            <option>Urban</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-xs text-gray-500">Select Activity</label>
          <select className="bg-white">
            <option>All</option>
            <option>Mountain</option>
            <option>Ocean</option>
            <option>Lake</option>
            <option>Urban</option>
          </select>
        </div>
        <button type="button">Random</button>
      </div>
    </form>
    <div class="flex">
      {
        destinations.map(destination => <Card key={destination.city} destination={destination} />)
      }
    </div>
  </article>
)
