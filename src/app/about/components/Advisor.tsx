import assets from "@/assets";
import ResearchItem from "@/components/ui/ResearchItem";
import Image from "next/image";

const Advisor = () => {
  return (
    <div className="pt-10 overflow-hidden">
      <div className=" flex lg:flex-row-reverse md:flex-row-reverse flex-col items-start gap-10">
        <div className="lg:w-[25%] md:w-[30%] max-w-[350px] flex flex-col mx-auto items-center border rounded-md border-gray-300 shadow-md">
          <Image
            src={assets.governance.advisor}
            alt="MOHAMMAD KAMRUL HASAN "
            width={360}
            height={400}
            className="object-cover border shadow-lg mx-auto"
          />
          <div className="p-3">
            <h2 className="text-xl font-semibold text-center">
              MOHAMMAD KAMRUL HASAN{" "}
            </h2>
          </div>
        </div>
        <div className="lg:w-[75%] md:w-[70%] w-full">
          <p className="text-justify">
            <span className="font-semibold">MOHAMMAD KAMRUL HASAN </span>{" "}
            (Senior Member, IEEE) is currently an Associate Professor and Head
            of the Network and Communication Technology Research Lab at the
            Center for Cyber Security, Universiti Kebangsaan Malaysia. He
            received his M.Sc. and Ph.D. degrees in electrical and communication
            engineering from the Faculty of Engineering, International Islamic
            University, Malaysia, in 2016. He is currently an Assistant
            Professor and the Head of the Network and Communication Technology
            Research Laboratory, Cyber Security Center, Faculty of Information
            Science and Technology, Universiti Kebangsaan Malaysia (UKM). He is
            also a Visiting Researcher with the Department of Computer Science,
            University of Houston–Victoria, Victoria, TX, USA, and a Visiting
            Associate Professor with the Department of Computer Science and
            Engineering, Jain University, Bengaluru, India.
          </p>
          <p className="text-justify mt-4">
            He has published more than 200 indexed papers in ranked journals and
            conference proceedings. His research interests include cutting-edge
            information-centric networks, wireless communication and networking,
            artificial intelligence, cyber-physical systems, smart vehicular
            networks, smart grids, and Industrial IoT. He is a Senior Member of
            the Internet Society. He is a Certified Professional Technologist
            (P.Tech/Ts.) in the Board of Technology Malaysia. He has been
            selected as one of the top 2% of scientists and highly-cited authors
            worldwide, awarded by Stanford University, Elsevier, and Web of
            Science. He serves as an Associate Editor and Guest Editor for IEEJ
            Transactions on Electrical and Electronics Engineering, IEEE,
            Elsevier, IET, MDPI, and Bentham Science.
          </p>
          <div className="lg:mt-8 md:mt-7 mt-6">
            <h2 className="text-xl font-semibold md:text-start text-center">
              Research Profile:
            </h2>

            <ResearchItem
              title="Google Scholar"
              link="https://scholar.google.com/citations?user=IAybniwAAAAJ&hl=en"
            />
            <ResearchItem
              title="Research Gate"
              link="https://www.researchgate.net/profile/Mohammad-Kamrul-Hasan-5"
            />
            <ResearchItem
              title="Scopus"
              link="https://www.scopus.com/authid/detail.uri?authorId=55057479600"
            />
            <ResearchItem
              title="Web of Science"
              link="https://www.webofscience.com/wos/author/record/1324520"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
