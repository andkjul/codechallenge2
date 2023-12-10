'use client'
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Home/Testimonials";

export default function Service() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { error, data, isLoading } = useSWR(
    "https://cdn.contentful.com/spaces/pbr2tlh9a5kz/environments/master/entries?access_token=PyfogagG4edVcbicQCVWNatXssRWgDwK-YyTAeowL2an0A&content_type=modul",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <section class="text-gray-600 body-font overflow-hidden pt-[30px]">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-500 ">
          <center>
            <h1 class="text-[50px] font-medium title-font mb-2 text-gray-900">
              Service
            </h1>
            <div class="h-1 bg-gray-600 rounded"></div>
          </center>
          {data?.items?.map((item, index) => {
            return (
              <div class="py-8 flex flex-wrap md:flex-nowrap" key={index}>
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <Image
                    class="h-full rounded w-80 object-cover object-center pr-6"
                    src={item.fields.thumbnail}
                    alt="content"
                    width={500}
                    height={500}
                  />
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{item.fields.title}</h2>
                  <p class="leading-relaxed">{item.fields.subtitle}</p>
                  <Link
                    class="text-indigo-500 inline-flex items-center mt-4 hover:text-indigo-800"
                    href="/DetailService/"
                  >Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
          <Testimonials />
        </div>
      </div>
    </section>
  )
}