import assets from "@/assets";
import ResearchItem from "@/components/ui/ResearchItem";
import Image from "next/image";

const ItSpecialist = () => {
  return (
    <div className="pt-10 overflow-hidden">
      <div className=" flex lg:flex-row md:flex-row flex-col items-start gap-10">
        <div className="lg:w-[25%] md:w-[30%] max-w-[350px] flex flex-col mx-auto items-center border rounded-md border-gray-300 shadow-md">
          <Image
            src={assets.governance.itSpecialist}
            alt="Md. Mobassher Hossain"
            width={360}
            height={400}
            className="object-cover shadow-lg mx-auto rounded-t-lg border-b"
          />
          <div className="p-3">
            <h2 className="text-xl font-semibold text-center">
              Md Mobassher Hossain
            </h2>
          </div>
        </div>
        <div className="lg:w-[75%] md:w-[70%] w-full">
          <p className="text-justify">
            <span className="font-semibold uppercase">
              Md Mobassher Hossain
            </span>{" "}
            received his B.Sc. in Textile Engineering from Primeasia University
            (PAU) in 2021. After graduation, he pivoted his career towards
            programming, with a particular focus on web development.
          </p>
          <p className="text-justify mt-4">
            To kickstart his journey, he enrolled in the Complete Web
            Development with Jhankar Mahbub (ID: WEB5-1490) course at
            Programming Hero. His dedication and hard work earned him the SCIC
            reward upon successfully completing the course. Seeking to deepen
            his expertise, Mobassher pursued advanced topics in MERN stack web
            development through the Next Level Web Development (ID: L2B2-0353)
            course at Programming Hero, where he excelled and secured a position
            among the top 50 students.
          </p>
          <p className="text-justify mt-4">
            Currently, Mobassher is a skilled Full Stack Developer, known for
            delivering high-quality projects for his clients. His proficiency
            spans front-end and back-end development, allowing him to create
            seamless and dynamic web applications.
          </p>
          <p className="text-justify mt-4">
            As a valued team member at North Girth Institute of Technology,
            Mobassher continues to leverage his extensive knowledge and
            experience to enhance the institution&apos;s digital landscape. His
            contributions ensure that the website remains both functional and
            visually appealing, reflecting his commitment to excellence in web
            development and design.
          </p>
          <div className="lg:mt-8 md:mt-7 mt-6">
            <h2 className="text-xl font-semibold md:text-start text-center">
              Profile:
            </h2>

            <ResearchItem
              title="Portfolio"
              link="https://dev-mobassher.web.app"
            />
            <ResearchItem
              title="Github"
              link="https://github.com/Md-Mobassher"
            />
            <ResearchItem
              title="Linkedin"
              link="https://www.linkedin.com/in/md-mobassher"
            />
            <ResearchItem
              title="Facebook"
              link="https://www.facebook.com/mdmobassherf"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItSpecialist;
