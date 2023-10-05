import "./Home.css";
import { motion } from "framer-motion";
import { divVariant } from "../../Util/framerVariants";

function Home() {
  return (
    <motion.div
      variants={divVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home-container"
    >
      <div className="home-content-wrapper">
        <h2>
          HELLO <span>👋</span>
        </h2>
        <h1>I'M GAYAN WEERAWARNAKULA</h1>
        <p>
          An aspiring web developer based in Manchester with a passion for
          creating innovative and smooth online experiences that hooks users in.
          Have a look around, learn a bit about me and what I've been upto and
          hopefully we can connect!
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
