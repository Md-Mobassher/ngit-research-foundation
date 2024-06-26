import { MailOpen, Map, MapPin, PhoneCallIcon } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className=" flex flex-1 flex-col gap-5">
      <div className="border border-gray-300 rounded-lg  flex justify-start pl-7 items-center lg:gap-8 md:gap-7 gap-5 p-5  bg-gray-100 ">
        <div className="bg-blue-500 lg:p-8 md:p-6 p-5 text-white rounded-full flex justify-center items-center border border-white">
          <PhoneCallIcon className="lg:size-12 md:size-10 size-10" />
        </div>
        <div>
          <h5 className="text-xl font-semibold">
            <strong> Phone: </strong>
            <span className="text-blue-500 ml-2 ">+8801737632508</span>
          </h5>
          <h5 className="lg:mt-3 md:mt-2 mt-1 text-xl font-semibold">
            <strong> Whatsapp: </strong>
            <span className="text-blue-500 ml-2 ">+60142655175</span>
          </h5>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg  flex justify-start pl-7 items-center lg:gap-8 md:gap-7 gap-5 p-5  bg-gray-100 ">
        <div className="bg-blue-500 lg:p-8 md:p-6 p-5 text-white rounded-full flex justify-center items-center border border-white">
          <MailOpen className="lg:size-12 md:size-10 size-8" />
        </div>
        <div>
          <h5 className=" text-xl font-semibold">
            <strong> Email: </strong>
            <span className="text-blue-500 ml-2 ">ngit.info@gmail.com</span>
          </h5>
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg  flex justify-start pl-7 items-center lg:gap-8 md:gap-7 gap-5 p-5  bg-gray-100 ">
        <div className="bg-blue-500 lg:p-8 md:p-6 p-5 text-white rounded-full flex justify-center items-center border border-white">
          <MapPin className="lg:size-12 md:size-10 size-10" />
        </div>
        <div>
          <h5 className=" text-xl font-semibold">
            <strong> Address: </strong>
            <span className="text-blue-500 ml-2 ">
              House-50/11, Road-07, Babukha, Masterpara, Rangpur Sadar, Rangpur
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
