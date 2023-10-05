import "./About.css";
import { motion } from "framer-motion";
import { divVariant } from "../../Util/framerVariants";

function About() {
  return (
    <motion.div
      variants={divVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="about-container"
    >
      <div className="about-content-wrapper">
        <h2>About Me</h2>
        <ul className="about-sections-wrapper">
          <li className="about-section">
            <h3>Get To Know Me.</h3>
            <p>
              Hey my name is Gayan Weerawarnakula ( yeah I know you just tried
              to pronounce it ). I'm a Sri Lankan 🇱🇰 ( hence the long surname ),
              born in Italy 🇮🇹, living in UK 🇬🇧. I would consider myself a
              melomaniac 🎶 mainly into R&B and Hip Hop and my favourite artist
              lately has been Brent Faiyaz. For sports, basketball is my go to,
              I love watching ( #MFFL ) and playing it, I'm also a Manchester
              United Fan, although please don't ask me to come play football, I
              am absolutely shocking 😔. Finally, my favourite movie is The
              Social Network and my favourite show is It's Always Sunny In
              Philadelphia.
            </p>
          </li>
          <li className="about-section">
            <h3>The Turning Point</h3>
            <p>
              If you've had a chance to look at my CV, you've probably seen that
              I am looking to make a career change with no prior experience in
              the field. Allow me to explain, during my final year of university
              I was given the opportunity to work on a module that involved
              coding using python/matplotlib and I instantly knew this is what I
              wanted to do for a career and I fell in love with aspect of
              solving complex problems and the rewarding feeling of overcoming
              these challenges hooked me, This experience motivated me to take a
              leap of faith and pursue a career in coding and I couldn't have
              been more happier with the decision.
            </p>
          </li>
          <li className="about-section">
            <h3>The Journey</h3>
            <p>
              Over the course of year I learned the core-concepts of front-end
              development, back-end development and database management through
              online courses and a variety of online resources. I've gained
              valuable experience in various programming languages such as
              HTML/CSS JavaScript, Express and more.I consider myself a driven
              individual keen on always staying on top of the latest industry
              trends and expanding my knowledge of this field even more, to this
              end I have started dipping my digital toes into cloud computing
              and even managed to pick up certification (AWS Certified Cloud
              Practioner ) so far and hope to collect more in the near future!
            </p>
          </li>
          <li className="about-section">
            <h3>The Developer In Me</h3>
            <p>
              If I had to describe myself in 3 words it would be meticulous,
              hard-working (this counts as one word right ? ) and creative. I
              think attention to detail as a web developer is of paramount
              importance, I feel strongly about always delivering a polished
              product to the users and in turn ensuring that no stone is left
              unturned. I truly believe that you get out of something what you
              put into it, so I always make sure to give my 100% at anything I
              attempt as I owe it to myself to get the best out of anything I
              put my mind to. Growing up I was really into drawing, mainly
              because of the freedom it allowed and I believe that it translate
              over to coding, there isn't one single way of getting a solution
              and part of the fun is getting creative and figuring out different
              solutions to a problem.
            </p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default About;
