import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import { randomBytes } from 'crypto';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map((project) => {
        const num = Math.floor(Math.random() * 9999999999999999999)
        console.log(num)
        return (
          <Link to={'/porject/' + project.id}>
            <ProjectSummary project={project} key={num} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList;