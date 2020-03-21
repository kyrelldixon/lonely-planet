
export default ({ destination }) => (
  <div
    style={{ backgroundImage: `url(${destination.backgroundImage})` }}
    className="group transition duration-150 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:z-10 relative flex flex-col justify-end h-96 flex-1 bg-cover bg-center"
  >
    <div className={`${destination.bgClass} transition duration-150 ease-in-out absolute inset-x-0 bottom-0 h-16 z-20 opacity-75 group-hover:inset-0 group-hover:h-full`}></div>
    <div className="text-center pb-4 px-4 text-sm text-white z-30 group-hover:pb-8">
      <p className="font-semibold">{destination.city}</p>
      <p className="italic font-thin text-xs">{destination.country}</p>
      <p className="hidden group-hover:block group-hover:py-8 text-sm opacity-75">{destination.description}</p>
    </div>
  </div>
)