import Backers from "./Backers";
import GamePartner from "./GamePartner";
import Promoters from "./Promoters";

const Partner = () => {
  return (
    <section className="main-container section-margin">
      <Promoters />
      <Backers />
      <GamePartner />
    </section>
  );
};

export default Partner;
