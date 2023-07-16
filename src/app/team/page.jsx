import TeamList from "../../../components/TeamList/teamList";
import Looking from "../../../components/Looking/looking";
import Contacts from "../../../components/Contacts/contacts";
import ProjectsSlider from "../../../components/ProjectsSlider/projectsSlider";

import teamData from "../../../resources/team";

const Team = () => {
  return (
    <>
      <TeamList team={teamData} />
      <Looking />
      <Contacts />
      <ProjectsSlider />
    </>
  );
};

export default Team;
