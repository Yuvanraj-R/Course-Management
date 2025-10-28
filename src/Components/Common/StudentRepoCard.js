import React from 'react';
import { Github, Link as LinkIcon, ExternalLink } from 'lucide-react'; // Import icons

const StudentRepoCard = ({ student }) => {
  return (
    <div className="repo-card">
      <div className="repo-card-header">
        <Github size={24} className="github-icon" />
        <h3 className="student-name">{student.studentName}</h3>
      </div>
      <p className="project-name">{student.projectName}</p>
      <a
        href={student.repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="repo-link"
      >
        <LinkIcon size={16} /> {student.repoLink.replace('https://github.com/', '')}
        <ExternalLink size={16} className="external-link-icon" />
      </a>
    </div>
  );
};

export default StudentRepoCard;
