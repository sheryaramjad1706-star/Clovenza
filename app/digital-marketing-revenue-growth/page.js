import Digitalmarketing from "../../src/components/pages/Digitalmarketing";
import Thechallenge from "../../src/components/pages/Thechallenge"
import Whatwedo from "../../src/components/pages/Whatwedo"
import Seehowitworks from "../../src/components/pages/Seehowitworks"
import ClouvenzaDifference from "../../src/components/pages/ClouvenzaDifference";
import Goodtoknow from "../../src/components/pages/Goodtoknow"
import Workstogether from "../../src/components/Workstogether";

export default function DigitalMarketingPage() {
  return (
    <main>
      <Digitalmarketing />
      <Thechallenge />
      <Whatwedo />
      <Seehowitworks />
      <ClouvenzaDifference />
      <Goodtoknow />
      <Workstogether />
    </main>
  );
}