import Image from "next/image";

export default function HomeOverview() {
  return (
    <section class="text-gray-600 body-font" id="HomeMission">
      <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
          <h1 class="title-font sm:text-5xl text-5xl mb-4 font-medium text-gray-900">
            Get to Know Us
          </h1>
          <div className="flex relative sm:items-center md:w-3/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-900 pointer-events-none"></div>
            </div>
            <div className="flex-grow md:pl-8 pl-6 pr-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 sm:mt-0">
                <p className="leading-relaxed pb-5 text-justify">
                Established in 1982, The Barber Shop Group has a passionate commitment to men’s grooming and offers no-nonsense high quality, value-for-money haircuts, styling and shaving for men.
                </p>
                <p className="leading-relaxed text-justify">
                Services typically offered by Barber Shops
                Established in 1982, The Barber Shop Group has a passionate commitment to men’s grooming and offers no-nonsense high quality, value-for-money haircuts, styling and shaving for men.
                Established in 1982, The Barber Shop Group has a passionate commitment to men’s grooming and offers no-nonsense high quality, value-for-money haircuts, styling and shaving for men.
                Established in 1982, The Barber Shop Group has a passionate commitment to men’s grooming and offers no-nonsense high quality, value-for-money haircuts, styling and shaving for men.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
          <Image
            class="object-cover object-center rounded ml-6"
            alt="hero"
            src="/img/gettoknow.avif"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
