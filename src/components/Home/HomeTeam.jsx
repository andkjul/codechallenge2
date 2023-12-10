"use client";

import { getUsers } from "@/api/users";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeTeam() {
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
    <section className="text-gray-600 body-font" id="HomeTeam">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-5xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our Barber is the Best in the world
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {users?.map((user, index) => {
            return (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center bg-yellow-100 border p-4 rounded-lg">
                  <Image
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={user.picture.thumbnail}
                    width={500}
                    height={500}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {`${user.name.first} ${user.name.last}`}
                    </h2>
                    <p className="text-gray-500">Barber</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
