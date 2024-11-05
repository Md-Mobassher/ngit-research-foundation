import { Publication } from "@/type/publication";
import { publicationsData } from "./publicationsData";

export const publicationsByYear = publicationsData.reduce<
  Record<number, Publication[]>
>((acc, pub) => {
  if (!acc[pub.year]) {
    acc[pub.year] = [];
  }
  acc[pub.year].push(pub);
  return acc;
}, {});

const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => (
  <div className="border border-gray-300 hover:border-gray-400 rounded-lg p-4 my-4 bg-white shadow hover:drop-shadow-lg lg:px-10 lg:py-6">
    <h3 className="text-xl font-semibold text-blue-500 text-center mb-3 underline">
      {pub?.type}
    </h3>
    {pub.title ? (
      <h3 className="text-xl font-semibold text-cyan-500 mb-2">
        <strong>Title:</strong> {pub.title}
      </h3>
    ) : (
      <p className="text-xl font-semibold text-cyan-500 mb-2 text-center">
        No data Found
      </p>
    )}
    <div>
      {pub.authors && (
        <p>
          <strong>Authors:</strong> {pub.authors}
        </p>
      )}
    </div>

    {pub.type === "Journal" && (
      <>
        <div>
          {pub.journal && (
            <p>
              <strong>Journal:</strong> {pub.journal || "No data found"}
            </p>
          )}
        </div>
        <div>
          {pub.volume && (
            <p>
              <strong>Volume:</strong> {pub.volume || "No data found"}
            </p>
          )}
        </div>
        <div>
          {pub.issue && (
            <p>
              <strong>Issue:</strong> {pub.issue || "No issue"}
            </p>
          )}
        </div>
        <div>
          {pub.pages && (
            <p>
              <strong>Pages:</strong> {pub.pages || "No data found"}
            </p>
          )}
        </div>

        <div>
          {pub?.doi && (
            <p>
              <strong>DOI:</strong> {pub.doi}
            </p>
          )}
        </div>
        <div>
          {pub?.impactFactor && (
            <p>
              <strong>Impact Factor:</strong>{" "}
              {pub.impactFactor || "No data found"}
            </p>
          )}
        </div>
        <div>
          {pub?.quartile && (
            <p>
              <strong>Quartile:</strong> {pub.quartile || "No data found"}
            </p>
          )}
        </div>
      </>
    )}
    {pub.type === "Conference" && (
      <>
        <div>
          {pub.conference && (
            <p>
              <strong>Conference:</strong> {pub.conference || "No data found"}
            </p>
          )}
        </div>
        <div>
          {pub.location && (
            <p>
              <strong>Location:</strong> {pub.location || "No data found"}
            </p>
          )}
        </div>
        <div>
          {pub.date && (
            <p>
              <strong>Date:</strong> {pub.date || "No data found"}
            </p>
          )}
        </div>
        <div>
          {pub.doi && (
            <p>
              <strong>DOI:</strong> {pub.doi || "No data found"}
            </p>
          )}
        </div>
      </>
    )}
  </div>
);

export default PublicationCard;
