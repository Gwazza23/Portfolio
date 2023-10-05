import { projects } from "../../Util/projects";
import { VscLinkExternal } from "react-icons/vsc";
import { AiFillGithub, AiFillExclamationCircle } from "react-icons/ai";
import "./Projects.css";
import { motion } from "framer-motion";
import { divVariant } from "../../Util/framerVariants";

function Projects() {
  return (
    <motion.div
      variants={divVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="projects-container"
    >
      <div className="projects-content-wrapper">
        <h2>Projects</h2>
        <ul className="projects-section-wrapper">
          {projects.map((project) => {
            return (
              <li className="project-container" key={project.id}>
                <img src={project.img} alt={project.name} />
                <div className="project-info">
                  <div className="info-header">
                    <div className="info-metadata">
                      <h3>{project.name}</h3>
                      <p>- {project.created}</p>
                      {project.note ? (
                        <div className="exclamation-container">
                          <AiFillExclamationCircle id="exclamation" />
                          <p className="pop-up">{project.note}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="external-links">
                      <a href={project.url} rel="noreferrer" target="blank_">
                        <VscLinkExternal />
                      </a>
                      <a href={project.git} rel="noreferrer" target="blank_">
                        <AiFillGithub />
                      </a>
                    </div>
                  </div>
                  <p>{project.desc}</p>
                  <div className="project-stack">
                    {project.stack.map((tool) => {
                      return <p key={tool}>{tool}</p>;
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default Projects;
