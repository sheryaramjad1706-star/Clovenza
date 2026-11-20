import Hero from "../../src/components/Ongoing page/Hero";
import Thechallenge from "../../src/components/Ongoing page/Thechallenge"
import Whatwedo from "../../src/components/Ongoing page/Whatwedo"
import Seehowitworks from "../../src/components/Ongoing page/Seehowitworks"
import ClouvenzaDifference from "../../src/components/Ongoing page/ClouvenzaDifference"
import Goodtoknow from "../../src/components/Ongoing page/Goodtoknow"
import Workstogether from "../../src/components/Workstogether"

export default function OngoingDigitalManagementPage() {
  return (
    <main>
      <Hero />
      <Thechallenge />
      <Whatwedo />
      <Seehowitworks />
      <ClouvenzaDifference />
      <Goodtoknow />
      <Workstogether />
    </main>
  );
}