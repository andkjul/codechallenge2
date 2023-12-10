import Image from "next/image";
import Link from "next/link";

export default function HomeStart() {
  return (
    <section id="HomeStart" class="text-gray-600 body-font h-screen flex items-center">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            class="object-cover object-center rounded"
            alt="Icon"
            src="/img/icon-home.jpeg"
            width={300}
            height={300}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium #09122f">
            Manhattan Barbershop
          </h1>
          <p class="mb-8 leading-relaxed #09122f">
          Established in 1982, The Barber Shop Group has a passionate commitment to men’s grooming and offers no-nonsense high quality, value-for-money haircuts, styling and shaving for men.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
              <Link href="#HomeTeam">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
