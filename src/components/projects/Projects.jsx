import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I have built</span>

      <div className="projects__container container grid">
        {/* Project 1 */}
        <div className="projects__content">
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title">
              Face Landmark <br />
              Detection
            </h3>
          </div>
          <span className="projects__button" onClick={() => setToggle(1)}>
            View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          {/* Modal for Project 1 */}
          <div className={toggle === 1 ? "projects__modal active-modal" : "projects__modal"}>
            <div className="projects__modal-content">
              <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)}></i>
              <h3 className="projects__modal-title">Face Landmark Detection</h3>
              <div className="projects__modal-subtitle">
                <p className="projects__modal-description">
                  Goal is to increase facial landmark coverage and enhance accuracy.
                </p>
                <a href="https://github.com/Shreyanshsachan/Face-Landmark-Detection" target="_blank" rel="noopener noreferrer">
                  <i className="bx bx-link-alt"></i>
                </a>
              </div>
              <ul className="projects__modal-items grid">
                <li className="projects__modal-item">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Performed variably on common datasets 300W, AFLW, COFW and WFLW.
                  </p>
                </li>
                <li className="projects__modal-item">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Used DMM-CNN Neural Network to improve exsisting FAC performance.
                  </p>
                </li>
                <li className="projects__modal-item">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    HPRNet employs hierarchical regression to encode each body landmark as a relative offset vector anchored to the human bounding box.
                  </p>
                </li>
                <li className="projects__modal-item">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Perform well on enhancing robustness under extreme pose and occlusion, where current models show high landmark error.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="projects__content">
          <div>
            <i className="uil uil-edit projects__icon"></i>
            <h3 className="projects__title">
              Diagnosis and Data Probability Decision Based on Non-Small <br />
              Cell Lung Cancer
            </h3>
          </div>
          <span className="projects__button" onClick={() => setToggle(2)}>
            View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          {/* Modal for Project 2 */}
          <div className={toggle === 2 ? "projects__modal active-modal" : "projects__modal"}>
            <div className="projects__modal-content">
              <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)}></i>
              <h3 className="projects__modal-title">
                Diagnosis and Data Probability Decision Based on Non-Small Cell Lung Cancer
              </h3>
              <div className="projects__modal-subtitle">
                <p className="projects__modal-description">
                  Developed a model integrating probabilistic analysis and decision-making for Non-Small Cell Lung Cancer detection.
                </p>
                <a
                  href="https://github.com/Shreyanshsachan/Diagnosis-and-Data-Probability-Decision-Based-on-Non-Small-Cell-Lung-Cancer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bx-link-alt"></i>
                </a>
              </div>
              <ul className="projects__modal-items grid">
                <li className="projects__modal-item">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Utilized four CNN architectures (NFNet, EfficientNet, ResNet, DenseNet) for feature extraction and CoxPH/CoxCC models for survival prediction.
                  </p>
                </li>
                <li className="projects__modal-item">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Survival prediction optimized via C-index, accuracy, and MAE, with DenseNet and ResNet outperforming across most metrics.
                  </p>
                </li>
                <li className="projects__modal-item">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">
                    Project can benefit from probability theory and statistics and judgment calls in NSCLC using means of computation migration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
