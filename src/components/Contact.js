import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const handleClick = () => {
    setIsClicked((prev) => !prev); // Toggle to retrigger animation
  };

  return (
    <section
      id="contact"
      className={`contact-section py-5 ${isVisible ? 'animate' : ''} ${isClicked ? 'clicked' : ''}`}
      ref={sectionRef}
      onClick={handleClick}
    >
      <div className="container">
        <h2 className="text-center mb-4">Send a Raven</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-info parchment p-4 rounded">
              <h3 className="text-center mb-4">My Sigils of Reach</h3>
              <ul className="contact-list list-unstyled text-center">
                <li className="contact-item">
                  <span className="contact-label">Phone:</span>{' '}
                  <span className="contact-value">7093727673</span>
                </li>
                <li className="contact-item">
                  <span className="contact-label">Email:</span>{' '}
                  <a href="mailto:reddydarshaan@gmail.com" className="contact-value">
                    reddydarshaan@gmail.com
                  </a>
                </li>
                <li className="contact-item">
                  <span className="contact-label">LinkedIn:</span>{' '}
                  <a
                    href="www.linkedin.com/in/reddydarshaan-d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    linkedin.com/in/reddydarshaan-d
                  </a>
                </li>
                <li className="contact-item">
                  <span className="contact-label">Instagram:</span>{' '}
                  <a
                    href="https://www.instagram.com/reddy_darshaan?igsh=eGp6bXBqYW92c28y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    instagram.com/reddydarshaan
                  </a>
                </li>
                <li className="contact-item">
                  <span className="contact-label">GitHub:</span>{' '}
                  <a
                    href="https://github.com/Reddydarshaan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    GitHub/reddydarshaan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;