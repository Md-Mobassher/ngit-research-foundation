import { MoveRight } from "lucide-react";

type TResearchItemProps = {
  title: string;
  link: string;
};

const ResearchItem = ({ title, link }: TResearchItemProps) => {
  return (
    <div className="mt-3 flex lg:gap-5 md:gap-4 gap-3">
      <div>
        <MoveRight />
      </div>
      <h5>
        <span className="text-md font-semibold lg:mr-2 mr-1">{title}: </span>
        <a href={`${link}`} target="_blank" className="link text-blue-500">
          {link}
        </a>
      </h5>
    </div>
  );
};

export default ResearchItem;
