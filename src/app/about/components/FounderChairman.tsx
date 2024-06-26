import assets from "@/assets";
import ResearchItem from "@/components/ui/ResearchItem";
import Image from "next/image";

const FounderChairman = () => {
  return (
    <div className="pt-10 overflow-hidden">
      <div className=" flex lg:flex-row md:flex-row flex-col items-start gap-10">
        <div className="lg:w-[25%] md:w-[30%] max-w-[350px] flex flex-col mx-auto items-center border rounded-md border-gray-300 shadow-md">
          <Image
            src={assets.governance.founder}
            alt="A K M AHASAN HABIB"
            width={360}
            height={400}
            className="object-cover shadow-lg mx-auto rounded-t-lg border-b"
          />
          <div className="p-3">
            <h2 className="text-xl font-semibold text-center">
              A K M AHASAN HABIB{" "}
            </h2>
          </div>
        </div>
        <div className="lg:w-[75%] md:w-[70%] w-full">
          <p className="text-justify">
            <span className="font-semibold">A K M AHASAN HABIB</span> received
            B.Sc. in Electrical and Electronics Engineering from Daffodil
            International University (DIU) in 2015 and M.Sc. in Electrical
            Engineering in the area of Electrical and Communication Engineering
            from International Islamic University Malaysia in 2018. He joined
            DIU as a Research Associate (Teaching Position) in August 2018 and
            served till Dec 2020. He founded a research institute named
            &quot;North Garth Institute of Technology&quot; in Feb 2020.
          </p>
          <p className="text-justify mt-4">
            Currently, he is a PhD student at the Center for Cyber Security,
            Faculty of Information Science and Technology, Universiti Kebangsaan
            Malaysia under the Ministry of Higher Education Malaysia Fundamental
            Research Grand on Cyber Security. During his PhD period, he also got
            a Malaysian International Scholarship (MIS). He has published more
            than 28 indexed papers in ranked journals and conference
            proceedings. His research interests include Electric Vehicles,
            Energy Storage and Management Systems, Smart Grid and Cyber Security
            Systems, Artificial Intelligence, Smart Vehicular Networks, Smart
            Grids, and Industrial IoT. He is a reviewer in the Journal of
            Network and Computer Applications, Journal of Energy Storage,
            Applied Energy, SoftwareX, Energy Reports, IET wireless sensor
            systems, and so many others.
          </p>
          <div className="lg:mt-8 md:mt-7 mt-6">
            <h2 className="text-xl font-semibold md:text-start text-center">
              Research Profile:
            </h2>

            <ResearchItem
              title="Google Scholar"
              link="https://scholar.google.com/citations?user=lgf89rMAAAAJ&hl=en"
            />
            <ResearchItem
              title="Research Gate"
              link="https://www.researchgate.net/profile/A-K-M-Habib"
            />
            <ResearchItem
              title="Scopus"
              link="https://www.scopus.com/authid/detail.uri?authorId=57199174305"
            />
            <ResearchItem
              title="Web of Science"
              link="https://www.webofscience.com/wos/author/record/GRX-6777-2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderChairman;
