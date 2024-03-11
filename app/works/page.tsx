import { BackgroundDots } from "@/components/background-dots";
import LetterSection from "@/components/letter-section";
import UploadAnimation from "@/components/animations/upload-animation";
import Image from "next/image";
import ProcessAnimation from "@/components/animations/process-animation";

export default function Home() {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
          <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            How Does it Work?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            veniam animi assumenda nostrum sequi neque, praesentium vel eaque
            architecto dolores dolore ipsam excepturi totam ratione! Accusantium
            magni ipsum ea necessitatibus!
          </p>
        </div>
      </section>
      <section>
        <div className="py-8 px-4 lg:py-16 lg:px-12 flex flex-row max-w-screen-xl mx-auto">
          <div className="text-left flex flex-col items-start">
            <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              1. People Upload Data
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              veniam animi assumenda nostrum sequi neque, praesentium vel eaque
              architecto dolores dolore ipsam excepturi totam ratione!
              Accusantium magni ipsum ea necessitatibus!
            </p>
          </div>
          <div className="w-full">
            <UploadAnimation />
          </div>
        </div>
      </section>
      <section>
        <div className="py-8 px-4 lg:py-16 lg:px-12 flex flex-row max-w-screen-xl mx-auto">
          <div className="w-full">
            <ProcessAnimation />
          </div>
          <div className="text-left flex flex-col items-start">
            <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              2. We Process Each Word
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              veniam animi assumenda nostrum sequi neque, praesentium vel eaque
              architecto dolores dolore ipsam excepturi totam ratione!
              Accusantium magni ipsum ea necessitatibus!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="py-8 px-4 lg:py-16 lg:px-12 flex flex-row max-w-screen-xl mx-auto">
          <div className="text-left flex flex-col items-start">
            <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              3. We See How Words Relate
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              veniam animi assumenda nostrum sequi neque, praesentium vel eaque
              architecto dolores dolore ipsam excepturi totam ratione!
              Accusantium magni ipsum ea necessitatibus!
            </p>
          </div>
          <div className="w-full"></div>
        </div>
      </section>
      <section>
        <div className="py-8 px-4 lg:py-16 lg:px-12 flex flex-row max-w-screen-xl mx-auto">
          <div className="w-full"></div>
          <div className="text-left flex flex-col items-start">
            <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              4. We Refine the Definitions
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              veniam animi assumenda nostrum sequi neque, praesentium vel eaque
              architecto dolores dolore ipsam excepturi totam ratione!
              Accusantium magni ipsum ea necessitatibus!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="py-8 px-4 lg:py-16 lg:px-12 flex flex-row max-w-screen-xl mx-auto">
          <div className="text-left flex flex-col items-start">
            <h1 className="relative mb-4 mt-16 text-4xl w-min whitespace-nowrap font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              5. We Make It Public
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              veniam animi assumenda nostrum sequi neque, praesentium vel eaque
              architecto dolores dolore ipsam excepturi totam ratione!
              Accusantium magni ipsum ea necessitatibus!
            </p>
          </div>
          <div className="w-full"></div>
        </div>
      </section>
    </>
  );
}
