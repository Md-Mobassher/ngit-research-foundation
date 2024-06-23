import PageTitle from "@/components/ui/PageTitle";
import Governance from "./components/Governance";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <PageTitle ctitle="About" title="Us" />

      <div className="lg:-mt-16 md:-mt-10 -mt-5">
        <Governance />
      </div>
    </div>
  );
};

export default AboutPage;
