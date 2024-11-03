import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateDetailsProps {
  candidate: Candidate;
  onSave: () => void;
  onNext: () => void;
}

const CandidateDetails: React.FC<CandidateDetailsProps> = ({ candidate, onSave, onNext }) => {
  return (
    <div>
      <img src={candidate.avatar_url} alt={candidate.name} />
      <h2>{candidate.name}</h2>
      <p>Username: {candidate.username}</p>
      <p>Location: {candidate.location}</p>
      <p>Email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
      <button onClick={onSave}>+</button>
      <button onClick={onNext}>-</button>
    </div>
  );
};

export default CandidateDetails;