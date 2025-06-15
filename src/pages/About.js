import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About MovieApp</h1>
      <p>
        MovieApp is a modern movie discovery platform where users can explore trending, top-rated,
        and upcoming movies. Powered by TMDb API, it allows users to search for any movie and see
        detailed information including genres, ratings, language, and more.
      </p>
      <p>
        Built with ❤️ using React and styled with glassmorphism, the site is responsive and intuitive for all screen sizes.
      </p>
      <p>
        This project is open-source and was created to learn and showcase web development skills.
      </p>
    </div>
  );
}

export default About;
