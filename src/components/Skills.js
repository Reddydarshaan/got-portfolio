import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [touchedSkill, setTouchedSkill] = useState(null);

  const handleTouchStart = (index) => {
    setTouchedSkill(index);
    playSound();
  };

  const handleTouchEnd = () => {
    setTouchedSkill(null);
  };

  const handleMouseEnter = () => {
    playSound();
  };

  const playSound = () => {
    const audio = new Audio('/assets/sword-unsheathe.wav');
    audio.play().catch((error) => {
      console.log('Audio playback failed:', error);
    });
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Bootstrap", "Git",
    "Responsive Design", "PhP", "Java", "Python", "C++", "AI & ML",
    "Android", "SQL", "Firebase","Operating Systems"
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Weapons of My Craft</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 mb-3">
              <div
                className={`skill-item p-3 rounded text-center ${touchedSkill === index ? 'touched' : ''}`}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={handleMouseEnter}
              >
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;