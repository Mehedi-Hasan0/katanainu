import Backers from "./Backers";
import Promoters from "./Promoters";

const Partner = () => {
  return (
    <section className="main-container section-margin">
      <Promoters />
      <Backers />
    </section>
  );
};

export default Partner;
