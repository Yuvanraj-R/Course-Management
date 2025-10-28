import React from 'react';
import StudentRepoCard from '../Common/StudentRepoCard';
import githubReposData from '../../data/githubReposData.js';

const GitHubReposPage = () => {
  return (
    <> {/* React Fragment as this component is part of a larger layout */}
      <main className="github-repos-main-content">
        <h2 className="github-repos-section-title">Student GitHub Repositories </h2>
        <p className="github-repos-intro-text">
          Explore the projects and code contributions from our talented students. Click on a link to view the repository.
        </p>
        <div className="repos-grid">
          {githubReposData.map((student) => (
            <StudentRepoCard key={student.id} student={student} />
          ))}
        </div>
      </main>
    </>
  );
};

export default GitHubReposPage;
