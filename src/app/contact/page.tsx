import PageTitle from "@/components/ui/PageTitle";
import ContactInfo from "./components/ContactInfo";
import Image from "next/image";
import assets from "@/assets";

const ContactPage = () => {
  return (
    <div className="mb-10 max-w-6xl mx-auto px-4">
      <PageTitle ctitle="Contact" title="Us" />
      <div className="lg:mt-14 md:mt-10 mt-5 flex lg:flex-row md:flex-row flex-col justify-between items-center lg:gap-10 gap-5 ">
        <div className="flex-1 p-5 lg:p-7">
          <Image
            src={assets.image.contact}
            alt="Contact image"
            width={450}
            height={450}
          />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;
