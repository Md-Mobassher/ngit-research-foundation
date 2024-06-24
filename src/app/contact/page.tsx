import PageTitle from "@/components/ui/PageTitle";
import { PhoneCallIcon } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="mb-10 max-w-6xl mx-auto px-4">
      <PageTitle ctitle="Contact" title="Us" />
      <div className="mt-8 flex justify-between gap-10 ">
        <div>
          <form>
            <input />
          </form>
        </div>
        <div className="flex">
          <div className="border border-gray-300 p-5 ">
            <PhoneCallIcon />
            <h5>+8801737632508</h5>
            <h5>+60142655175</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
