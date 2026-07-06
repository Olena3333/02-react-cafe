import { useState } from "react";
import CafeInfo from "./components/CafeInfo";
import VoteOptions from "./components/VoteOptions";
import VoteStats from "./components/VoteStats";
import type { Votes, VoteType } from "./types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
      <VoteStats votes={votes} />
    </>
  );
}
