import Backers from "./Backers";
import GamePartner from "./GamePartner";
import Promoters from "./Promoters";
import RiskWarning from "./RiskWarning";

const Partner = () => {
  return (
    <section className="main-container section-margin">
      <Promoters />
      <Backers />
      <GamePartner />
      <RiskWarning />
    </section>
  );
};

export default Partner;
