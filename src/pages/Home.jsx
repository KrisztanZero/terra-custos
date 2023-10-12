import React, { useEffect, useState } from 'react';
import Tours from '../components/Tours';
import '../customStyles/text-shadow.css';
import { getGreeting } from '../services/greetingService';

export default function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    async function fetchGreeting() {
      try {
        const result = await getGreeting();
        setGreeting(result);
      } catch (error) {
        console.error('Error fetching greeting: ', error);
      }
    }
    fetchGreeting();
  }, []);
  return (
    <div className="container">
      <h1 className="container mt-5 text-white custom-text-shadow">
        {greeting}
      </h1>
      <h5 className="container mt-5 text-white custom-text-shadow">
        TerraCustos is a passionately developed application that connects
        people's collective efforts in nature conservation and sustainability.
        The app aims to inspire and encourage people to protect and care for our
        Earth, while enabling them to actively participate in preserving the
        environment, all while fostering a closer connection to nature through
        the experiences gained during their journeys.
      </h5>
      <Tours />
    </div>
  );
}
