import Image from "next/image";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import specific icons

export default function Features() {
  return (
    <main className="py-8">
      <div className="container mx-auto px-8"> 
        <h1 className="text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] font-semibold mt-[20px] sm:mt-[30px] md:mt-[30px] lg:mt-[30px] text-[#263C5A] text-center">
          Features
        </h1>
        
        {/* First Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[10px] sm:gap-[15px] md:gap-[20px] lg:gap-[25px] mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px]">
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[55%] lg:w-[35%]"> 
            <img src="/images/picture4.png" className="w-full shadow-lg  shadow-gray-395" />
            <p className="text-[17px] sm:text-[16px] md:text-[24px] lg:text-[20px] font-semibold mt-[-27px] sm:mt-[-25px] md:mt-[-35px] lg:mt-[-35px] text-[#263C5A] text-center">
              Real-time Pricing Updates
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[55%] lg:w-[35%]">
            <img src="/images/picture1.png" className="w-full shadow-lg shadow-gray-395" />
            <p className="text-[17px] sm:text-[16px] md:text-[24px] lg:text-[20px] font-semibold mt-[-27px] sm:mt-[-25px] md:mt-[-35px] lg:mt-[-35px] text-[#263C5A] text-center">
              Price Comparison
            </p>
          </div>
        </div>
    
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[10px] sm:gap-[15px] md:gap-[20px] lg:gap-[25px] mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px]">
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[55%] lg:w-[35%]">
            <img src="/images/picture2.png" className="w-full shadow-lg shadow-gray-395" />
            <p className="text-[17px] sm:text-[16px] md:text-[24px] lg:text-[20px] font-semibold mt-[-27px] sm:mt-[-25px] md:mt-[-35px] lg:mt-[-35px] text-[#263C5A] text-center">
              Inventory Management
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[55%] lg:w-[35%]">
            <img src="/images/picture3.png" className="w-full shadow-lg shadow-gray-395" />
            <p className="text-[16px] sm:text-[16px] md:text-[24px] lg:text-[20px] font-semibold mt-[-27px] sm:mt-[-30px] md:mt-[-35px] lg:mt-[-35px] text-[#263C5A] text-center">
              Location-Based Information
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}