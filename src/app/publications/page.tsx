import PageTitle from "@/components/ui/PageTitle";
import PublicationCard, {
  publicationsByYear,
} from "./components/PublicationCard";

const PublicationsPage = () => {
  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="mb-10 max-w-6xl mx-auto px-4">
      <PageTitle ctitle="Publication" />

      <div className="mt-8">
        {years.map((year) => (
          <div key={year} className="mt-10">
            <h2 className="text-2xl font-bold mb-4  text-blue-500">{year}</h2>

            {publicationsByYear[year].length === 0 ? (
              <p>No data found</p>
            ) : (
              publicationsByYear[year].map((pub, index) => (
                <PublicationCard key={index} pub={pub} />
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;
