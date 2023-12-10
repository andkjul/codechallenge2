'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function AboutCulture() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div>
            <Image
              class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="Icon"
              src="/img/gettoknow.avif"
              width={500}
              height={500}
            />
            <div class="flex flex-col text-center w-full">
              <h1 class="text-xl font-medium title-font mb-4 text-gray-900">Do Your Styling to Attract People</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              A barbershop is one of the places where people go to get their hair cut. You might visit a barbershop at the beginning of every summer to get a short crew cut. While some hair cutters call themselves stylists and the places where they work salons, others are barbers who trim hair and shave necks in barbershops.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <Image
              class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="hero"
              src="/img/gettoknow.avif"
              width={500}
              height={500}
            />
            <div class="flex flex-col text-center w-full">
              <h1 class="text-xl font-medium title-font mb-4 text-gray-900">Get to Know Us</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              A barbershop is one of the places where people go to get their hair cut. You might visit a barbershop at the beginning of every summer to get a short crew cut. While some hair cutters call themselves stylists and the places where they work salons, others are barbers who trim hair and shave necks in barbershops.
              </p>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              A barbershop is one of the places where people go to get their hair cut. You might visit a barbershop at the beginning of every summer to get a short crew cut. While some hair cutters call themselves stylists and the places where they work salons, others are barbers who trim hair and shave necks in barbershops.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex flex-wrap mb-20 w-full">
          <a
            onClick={() => handleStepClick(1)}
            className={`mr-auto sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${activeStep === 1
              ? 'bg-white border-gray-900 text-gray-900'
              : 'border-gray-500 hover:text-gray-900'
              } inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            About Us
          </a>
          <a
            onClick={() => handleStepClick(2)}
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${activeStep === 2
              ? 'bg-white border-gray-900 text-gray-900'
              : 'border-gray-500 hover:text-gray-900'
              } inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Get to Know Us
          </a>
        </div>
        {renderStepContent()}
      </div>
    </section>
  );
}
