import React from 'react'

const ProjectSummary = ({ project })  => {
  return (
    <div>
            <div className="card z-depth-0 project-summary">
        <div className="card-content gray-text text-darken-3">
        <span className="card-title">{project.title}</span>
          <p>Posted by Lou</p>
          <p className="gray-text">17 Feb 21:23</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary;