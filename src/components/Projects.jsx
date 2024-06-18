import React from 'react'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <div className="project">
          <h3>Cat Aid</h3>
          <p>
            Developed the static frontend web application using HTML and CSS to
            assist injured street cats. The platform allows users to learn about
            the rescued cats, visit them, and adopt them.
          </p>
          <a href="https://cat-aid.onrender.com/">
            <button>Try it here</button>
          </a>
        </div>
        <div className="project">
          <h3>Car Rental</h3>
          <p>
            Developed the static frontend for a car renting application,
            ensuring a visually appealing and user-friendly interface using HTML
            and CSS.
          </p>
          <a href="https://car-rental-xt9c.onrender.com/">
            <button>Try it here</button>
          </a>
        </div>
        <div className="project">
          <h3>Video Streaming App</h3>
          <p>
            Developing a video streaming web application using MERN stack,
            allowing users to upload, stream, and comment on videos seamlessly.
            Users can share their thoughts and experiences by tweeting directly
            from the application.
          </p>
          <a href="https://github.com/NeerajUpadhyay01/Video-Streaming-Project-Frontend">
            <button>See on github</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects