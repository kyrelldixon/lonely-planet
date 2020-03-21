import Select from 'react-select'

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
  <form className="hidden md:block">
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
)