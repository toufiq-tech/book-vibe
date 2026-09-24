import React from "react";
import Image from "next/image";
import bannerImage from "@/app/assets/hero_img.jpg";

const BannerSection = () => {
  return (
    <section className="py-24 bg-gray-100 border rounded-4xl shadow-lg container mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-[50px] font-bold text-gray-900">
            Books to freshen up <span className="text-green-500">your bookshelf</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Curated selections to inspire, entertain, and expand your reading journey.
          </p>
          <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg shadow hover:bg-gray-700 transition">
            View The List
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="rounded-xl shadow-lg object-cover"
            height={400}
            width={400}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
