import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  // State to track which projects are open
  const [openProjects, setOpenProjects] = useState({
    deepfake: false,
    crop: false,
    montessori: false,
  });

  // Toggle function for each project
  const toggleProject = (projectKey) => {
    setOpenProjects((prev) => ({
      ...prev,
      [projectKey]: !prev[projectKey],
    }));
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Scrolls of Great Deeds</h2>
        <div className="row">
          {/* Project 1: Deepfake Call Detection App */}
          <div className="col-md-4 mb-4">
            {openProjects.deepfake ? (
              <div className="card parchment h-100 project-card" onClick={() => toggleProject('deepfake')}>
                <div className="card-body">
                  <h5 className="card-title">Deepfake Call Detection App</h5>
                  <p className="card-text">
                    A mobile app that detects fraudulent phone calls by identifying deepfake voices using machine learning. Built with Python, TensorFlow, and Flask, it records calls, analyzes audio for deepfake signatures, and flags potential scams in real-time.
                  </p>
                </div>
              </div>
            ) : (
              <div className="scroll-container text-center" onClick={() => toggleProject('deepfake')}>
                <img src="/assets/scroll.jpeg" alt="Folded Scroll" className="scroll-image" />
                <p className="scroll-label">Unfold Deed</p>
              </div>
            )}
          </div>
          {/* Project 2: Crop Recommendation System */}
          <div className="col-md-4 mb-4">
            {openProjects.crop ? (
              <div className="card parchment h-100 project-card" onClick={() => toggleProject('crop')}>
                <div className="card-body">
                  <h5 className="card-title">Crop Recommendation System</h5>
                  <p className="card-text">
                    A web application that recommends optimal crops based on soil and weather data using machine learning. Developed with Flask, scikit-learn, and PyTorch, it helps farmers improve yield through data-driven decisions.
                  </p>
                </div>
              </div>
            ) : (
              <div className="scroll-container text-center" onClick={() => toggleProject('crop')}>
                <img src="/assets/scroll.jpeg" alt="Folded Scroll" className="scroll-image" />
                <p className="scroll-label">Unfold Deed</p>
              </div>
            )}
          </div>
          {/* Project 3: Aksharabhyas Montessori Website */}
          <div className="col-md-4 mb-4">
            {openProjects.montessori ? (
              <div className="card parchment h-100 project-card" onClick={() => toggleProject('montessori')}>
                <div className="card-body">
                  <h5 className="card-title">Aksharabhyas Montessori Website</h5>
                  <p className="card-text">
                    A responsive website for Aksharabhyas Montessori International School, showcasing their programs and events. Built with HTML, CSS, and JavaScript, ensuring accessibility and a seamless user experience.
                  </p>
                </div>
              </div>
            ) : (
              <div className="scroll-container text-center" onClick={() => toggleProject('montessori')}>
                <img src="/assets/scroll.jpeg" alt="Folded Scroll" className="scroll-image" />
                <p className="scroll-label">Unfold Deed</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;