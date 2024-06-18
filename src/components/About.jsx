import React from 'react'

function About() {
  return (
    <section id="about">
      <div id="my-photo"></div>
      <div>
        <h2>Hi I'm Neeraj 👋</h2>
        <span>
          <img src="./asset/icons8-location-30.webp" alt="location" />
          <p>Udaipur, Rajasthan</p>
        </span>
        <p>
          A passionate MERN Stack Developer 🚀 with hands-on experience in
          creating web applications using MongoDB, Express.js, React.js and
          Node.js. Through developing personal projects, I have honed my skills
          in full-stack development and explored various libraries and tools to
          enhance web applications.
        </p>
        <div className="social-media-links">
          <a href="https://github.com/NeerajUpadhyay01">
            <img src="./asset/icons8-github-24.webp" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-upadhyay-a527aa226">
            <img src="./asset/icons8-linkedin-48.webp" alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/invites/contact/?i=zib9lixemrsa&utm_content=48jiow0">
            <img src="./asset/icons8-instagram-48.webp" alt="instagram" />
          </a>
          <a href="mailto:neerajsaraswat111@gmail.com">
            <img src="./asset/icons8-gmail-96.webp" alt="gmail" />
          </a>
          <a href="https://x.com/Neeraj_178?t=SimfZ5p0Oz3E6cNMgTlKqg&s=08">
            <img src="./asset/icons8-twitter-50.webp" alt="twitter" />
          </a>
        </div>
        <div id="buttons">
          <a href="tel:+916378086178">
            <button>Contact Me</button>
          </a>
          <a href="https://drive.google.com/file/d/1S-1pK8ORPHcdI0HNwfWS9kJT8Elr1oNk/view?usp=drive_link">
            <button>See Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About