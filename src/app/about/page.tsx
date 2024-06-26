import PageTitle from "@/components/ui/PageTitle";
import Governance from "./components/Governance";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <PageTitle ctitle="About" title="Us" />

      <div className="">
        <Governance />
      </div>
    </div>
  );
};

export default AboutPage;
