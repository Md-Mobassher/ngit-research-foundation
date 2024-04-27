import TeamMember from "@/components/ui/TeamMember";

const PeoplePage = () => {
  return (
    <div className="lg:my-12 my-8 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl mb-2  font-semibold ">People</h2>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mt-6">
        {/* {teamMembers?.map((teamMember) => (
          <TeamMember key={teamMember._id} teamMember={teamMember}></TeamMember>
        ))} */}
      </div>
    </div>
  );
};

export default PeoplePage;
