import React from 'react'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <div className="project">
          <h3>The Coca-Cola Company</h3>
          <p>
            Created a 3D front-end website similar to the Coca-Cola company’s
            website. Also, implemented immersive 3D animations to enhance user
            engagement.
          </p>
          <a href="https://the-coca-cola-company.vercel.app/">
            <button>Try it here</button>
          </a>
        </div>
        <div className="project">
          <h3>BuzzTube</h3>
          <p>
            A comprehensive web application allowing users to upload, stream and
            comment on videos seamlessly. Users can also share their thoughts
            and experiences by tweeting directly from the application.
          </p>
          <a href="https://video-streaming-project-frontend.vercel.app/">
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
      </div>
    </section>
  );
}

export default Projects