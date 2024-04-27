import Image from "next/image";

type TCardProps = {
  img?: any;
  title: string;
  details: string;
};
const Card = ({ img, title, details }: TCardProps) => {
  return (
    <div className="card max-w-[400px] card-compact  bg-base-100 shadow-xl mx-auto">
      <figure>
        <Image src={img} alt={title} width={400} height={250} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Card;
