import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Paul</div>
          <div>18th Feb, 20:29</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
