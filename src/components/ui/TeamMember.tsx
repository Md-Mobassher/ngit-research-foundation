import Image from "next/image";
import { useRouter } from "next/router";

const TeamMember = ({ teamMember }: any) => {
  const { img, designation, interest, name, _id } = teamMember;
  const router = useRouter();

  const handleDescription = (id: string) => {
    router.push(`/people/${id}`);
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <Image src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl mb-2 font-semibold">{name}</h2>
        <p className="text-sm mb-2">{designation}</p>
        <p className="text-sm">
          {interest?.slice(0, 40)}{" "}
          <button
            onClick={() => {
              handleDescription(_id);
            }}
            className="text-primary "
          >
            Read More...
          </button>
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
