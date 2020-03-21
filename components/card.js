
export default ({ destination }) => (
  <div
    style={{ backgroundImage: `url(${destination.backgroundImage})` }}
    className="relative flex flex-col justify-end h-screen bg-cover bg-center group md:transition md:duration-150 md:ease-in-out md:transform hover:scale-105 hover:shadow-2xl hover:z-10 md:h-96 md:flex-1"
  >
    <div className={`${destination.bgClass} h-full transition duration-150 ease-in-out absolute inset-x-0 bottom-0 md:h-16 z-20 opacity-25 md:opacity-50 group-hover:inset-0 group-hover:h-full`}></div>
    <div className="text-4xl pb-6 leading-tight md:text-center md:pb-4 px-4 md:text-sm text-white z-30 group-hover:pb-8">
      <p className="inline-block font-semibold md:block">{destination.city}<span className="md:hidden">,</span>{"  "}</p>
      <p className="inline-block italic font-thin md:block md:text-xs">{"  "}{destination.country}</p>
      <p className="text-base hidden group-hover:block group-hover:py-8 md:text-sm opacity-75">{destination.description}</p>
    </div>
  </div>
)