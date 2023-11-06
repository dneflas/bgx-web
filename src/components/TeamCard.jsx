const TeamCard = (team) => {
  const teamData = [
    {
      name: "Samantha Smith",
      title: "Marketing Coordinator",
      img: "",
      funFact:
        "Samantha once won a pie-eating contest at her local fair, devouring eight pies in under 10 minutes",
    },
    {
      name: "Max Johnson,",
      title: "Software Developer",
      img: "",
      funFact:
        "Max is a certified scuba diver and has explored shipwrecks in the Caribbean.",
    },
    {
      name: "Emily Patel",
      title: "HR Specialist,",
      img: "",
      funFact:
        "Emily is an avid salsa dancer and has even competed in regional salsa dance competitions, winning a few trophies along the way.",
    },
  ];
  return (
    <>
      {teamData.map((member) => (
        <div className="card">
          <h3 className="card-header">{member.name}</h3>
          <img alt={`Image of ${member.name}`} src={member.img} />
          <div className="card-body">
            <h5>{member.title}</h5>
            <p>{member.funFact}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
