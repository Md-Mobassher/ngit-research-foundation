type TPageTitleProps = {
  ctitle?: string;
  title?: string;
};

const PageTitle = ({ ctitle, title }: TPageTitleProps) => {
  return (
    <div className="lg:mt-8 md:mt-7 mt-6">
      <h2 className="text-4xl mb-3 font-semibold text-center ">
        <span className="text-blue-500">{ctitle}</span> {title}
      </h2>
      <hr className="border-gray-400 " />
    </div>
  );
};

export default PageTitle;
