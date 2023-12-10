'use client'
import useSWR from "swr";
import Image from "next/image";

export default function HomeService() {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { error, data, isLoading } = useSWR(
  //   "https://cdn.contentful.com/spaces/pbr2tlh9a5kz/environments/master/entries?access_token=PyfogagG4edVcbicQCVWNtXRWgDwK-YyTAeowL2an0A&content_type=modul",
  //   fetcher
  // );

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  return (
    <section class="text-gray-600 body-font bg-gray-100" id="HomeService">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="text-[50px] font-medium title-font mb-2 text-gray-900">
              Services
            </h1>
            <div class="h-1 w-[50%] bg-gray-600 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
            Step into our barbershop, where tradition meets modern style, and experience grooming at its finest. Services typically offered by Barber ShopsServices typically offered by Barber ShopsServices typically offered by Barber Shops
          </p>
        </div>
        {/* <div class="flex flex-wrap -m-4">
          {data?.items.map((item, index) => {
            return (
              <div class="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <div class="bg-[#e7e7e7] p-6 rounded-lg">
                  <Image
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.fields.thumbnail}
                    alt="content"
                    width={500}
                    height={500}
                  />
                  <h3 class="tracking-widest text-gray-500 text-xs font-medium title-font">
                    TECHNOLOGY
                  </h3>
                  <h2 class="text-lg text-[#000] font-medium title-font mb-4">
                    {item.fields.title}
                  </h2>
                  <p class="leading-relaxed text-gray-800 pb-5">
                    {item.fields.subtitle}
                  </p>
                  <a
                    class="text-gray-500 inline-flex items-center hover:text-gray-800"
                    href="/service"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
