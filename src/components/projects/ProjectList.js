import React from 'react';

const ProjectList = () => {
  return (
    <div className="project-list section">

      <div className="card z-depth-0 project-summary">
        <div className="card-content gray-text text-darken-3">
        <span className="card-title">Project Title</span>
          <p>Posted by Paul</p>
          <p className="gray-text">17 Feb 21:08</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content gray-text text-darken-3">
        <span className="card-title">Project Title</span>
          <p>Posted by Lou</p>
          <p className="gray-text">17 Feb 21:23</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content gray-text text-darken-3">
        <span className="card-title">Project Title</span>
          <p>Posted by Melly</p>
          <p className="gray-text">17 Feb 21:38</p>
        </div>
      </div>

    </div>
  )
}

export default ProjectList;