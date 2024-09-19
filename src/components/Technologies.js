import React from 'react';
import TechnologyCard from './TechnologyCard';
import './Technologies.css';

function Technologies() {
  return (
    <div className="technologies">
      <h2 className="section-title">Our Technologies</h2>
      <div className="technology-grid">
        <TechnologyCard
          title="ZK zkbp"
          description="Allows to prove your business process execution  without revealing details."
          icon="🟩"
        >
          <p>Prove your Businss Processes</p>
        </TechnologyCard>
        <TechnologyCard
          title="Recursive proofs"
          description="Layered , Composed and Recurive Proofs for Business Scalabiltiy."
          icon="🔵"
          isCenter
        >
          <p>Game state proof</p>
        </TechnologyCard>
        <TechnologyCard
          title="MINA and Multi-Chain Mimimal Proof Availability"
          description=" Scalable Aggregations for Bringing Enterprise scale Proofs  "
          icon="⚪"
        >
          <p>MTNA</p>
        </TechnologyCard>
      </div>
    </div>
  );
}

export default Technologies;
