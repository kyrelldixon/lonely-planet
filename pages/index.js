import Card from '../components/card'
import Select from 'react-select'

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

const terrainOptions = [
  { value: 'all', label: 'All' },
  { value: 'mountain', label: 'Mountain' },
  { value: 'ocean', label: 'Ocean' },
  { value: 'lake', label: 'Lake' },
  { value: 'urban', label: 'Urban' },
]

const styleOptions = [
  { value: 'all', label: 'All' },
  { value: 'mountain', label: 'Mountain' },
  { value: 'ocean', label: 'Ocean' },
  { value: 'lake', label: 'Lake' },
  { value: 'urban', label: 'Urban' },
]

const activityOptions = [
  { value: 'all', label: 'All' },
  { value: 'mountain', label: 'Mountain' },
  { value: 'ocean', label: 'Ocean' },
  { value: 'lake', label: 'Lake' },
  { value: 'urban', label: 'Urban' },
]

const customStyles = {
  control: base => ({
    ...base,
    border: `0 !important`,
  }),
  container: base => ({
    ...base,
    border: 0,
    fontSize: 20,
    // tailwind shadow class styles
    boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
  }),
  indicatorSeparator: (_) => ({}),
  option: (_, state) => ({
    color: state.isSelected ? '#77797a' : state.isFocused ? '#9b9b9b' : '#c0c0c0',
    padding: 6,
    transition: 'color 150ms',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    transition: 'all 150ms',
  }),
}

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
          <Select styles={customStyles} options={terrainOptions} defaultValue={terrainOptions[0]} />
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-xs text-gray-500">Select Style</label>
          <Select styles={customStyles} options={styleOptions} defaultValue={styleOptions[0]} />
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-xs text-gray-500">Select Activity</label>
          <Select styles={customStyles} options={activityOptions} defaultValue={activityOptions[0]} />
        </div>
        <button className="py-2 px-4 h-full shadow" type="button">Random</button>
      </div>
    </form>
    <div class="flex">
      {
        destinations.map(destination => <Card key={destination.city} destination={destination} />)
      }
    </div>
  </article>
)
