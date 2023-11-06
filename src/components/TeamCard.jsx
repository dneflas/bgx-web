import emp1 from "../assets/images/emp-1.svg";
import emp2 from "../assets/images/emp-2.svg";
import emp3 from "../assets/images/emp-3.svg";
const TeamCard = () => {
  const teamData = [
    {
      name: "Samantha Smith",
      title: "Marketing Coordinator",
      img: emp1,
      funFact:
        "Samantha once won a pie-eating contest at her local fair, devouring eight pies in under 10 minutes",
    },
    {
      name: "Max Johnson,",
      title: "Software Developer",
      img: emp2,
      funFact:
        "Max is a certified scuba diver and has explored shipwrecks in the Caribbean.",
    },
    {
      name: "Emily Patel",
      title: "HR Specialist,",
      img: emp3,
      funFact:
        "Emily is an avid salsa dancer and has even competed in regional salsa dance competitions, winning a few trophies along the way.",
    },
  ];
  return (
    <>
      {teamData.map((member) => (
        <div className="card" key={member.name}>
          <h3 className="card-header">{member.name}</h3>
          <img alt={`Image of ${member.name}`} src={member.img} />
          <div className="card-body">
            <h5>{member.title}</h5>
            <p>{member.funFact}</p>
          </div>
          {/* <svg width="100" height="100" viewBox="0 0 24 24">
            <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
          </svg> */}
        </div>
      ))}
    </>
  );
};

export default TeamCard;
