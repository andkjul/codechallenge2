"use client";

import { getUsers } from "@/api/users";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Team() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const params = { results: 9 };
    const response = await getUsers(params);
    setUsers(response?.data?.results ?? []);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-5xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="h-1  bg-gray-600 rounded"></div>
        </div>
        <div class="flex flex-wrap -m-4">
          {users?.map((user, index) => {
            return (
              <div class="p-4 lg:w-1/3 md:w-1/2 mb-10" key={index}>
                <div class="h-full flex flex-col items-center text-center bg-gray-100">
                  <Image
                    alt="team" 
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" 
                    src={user.picture.large}
                    width={100} 
                    height={100}
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">{`${user.name.first} ${user.name.last}`}</h2>
                    <h3 class="text-gray-500 mb-3">Barber</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}