import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateDetails from '../components/CandidateDetails'

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub(''); // Adjust the query as needed
        setCandidates(data.items);
        setCurrentCandidate(data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    if (currentCandidate) {
      setSavedCandidates([...savedCandidates, currentCandidate]);
      showNextCandidate();
    }
  };

  const showNextCandidate = () => {
    const nextCandidate = candidates.shift();
    setCandidates(candidates);
    setCurrentCandidate(nextCandidate || null);
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {currentCandidate ? (
        <CandidateDetails
          candidate={currentCandidate}
          onSave={handleSaveCandidate}
          onNext={showNextCandidate}
        />
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;