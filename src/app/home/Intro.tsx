import Card from "@/components/ui/Card";
import mission from "@/assets/image/mission.png";
import vission from "@/assets/image/vission.png";
import values from "@/assets/image/values.png";

const introData = [
  {
    title: "Mission",
    details:
      "NGIT mission is to achieve the integration, comprehensive excellences and internationalization.",
    img: mission,
  },
  {
    title: "Vission",
    details:
      "NGIT aim is doing research on Advance Science & Technology that have highly impact on personal life as well as our nation.",
    img: vission,
  },
  {
    title: "Values",
    details:
      "Ethically responsible, collaboration, transparent and accountable.",
    img: values,
  },
];

const Intro = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-semibold text-center">
        Welcome to <span className="text-blue-500">NGIT</span> Research
        Foundation
      </h1>
      <p className="text-center mt-5 lg:w-[80%] w-full mx-auto">
        NGIT is an independent, non-profit, non-political organization which was
        established by A K M Ahasan Habib. Mainly, NGIT focus on science and
        engineering research and take necessary initiatives from Undergraduate
        level student (i.e. new innovative idea, high level research, publish
        research article, skill development course & help desk for higher
        study). We will try to do scientific research collaborate with national
        and international researcher and build better future for our
        member/researcher in home & abroad. NGIT started its official journey in
        February 2020..
      </p>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {introData.map((item) => (
          <Card
            key={item.title}
            img={item.img}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;
