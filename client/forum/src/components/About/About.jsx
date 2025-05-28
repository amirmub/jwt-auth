import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.about_container}>
      <span>About</span>
      <h2>Networking With Amir</h2>
      <p>
        JoinWithAmir is a developer-focused networking platform created by a
        full stack developer, for developers, freelancers, and tech enthusiasts.
        The goal is to foster real collaboration, share knowledge, and build
        meaningful connections within the tech community.
      </p>
      <p>
        Whether you're working on your first side project, looking for a
        co-founder, or seeking mentorship and career advice, JoinWithAmir offers
        a space where developers can grow together.
      </p>
      <p>
        Get access to curated content, open-source contributions, technical
        discussions, and live project collaboration. Join a network where
        backend meets frontend, and ideas turn into deployable solutions.
      </p>
      <p>
        Built with modern web technologies and driven by a passion for
        community, the platform evolves with its users—supporting everything
        from beginner questions to advanced architecture discussions.
      </p>
      <button>How It Work</button>
    </div>
  );
}

export default About;
