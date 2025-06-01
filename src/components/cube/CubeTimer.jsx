import React, { useState, useEffect, useRef } from 'react';

// Main component that replaces cube-stat
export default function CubeTimer(){
  return (
    <div className="relative rounded-lg overflow-hidden border flex h-[78vh] w-full bg-background dark:bg-dark-background text-text dark:text-dark-text flex-row border border-primary dark:border-dark-primary shadow-lg/50 shadow-secondary dark:shadow-dark-secondary">
      <div className="flex flex-col w-3/4 items-center justify-center text-center gap-10">
        <div>
          <h1 className="text-7xl text-accent dark:text-dark-accent">Rubik's Cube Timer</h1>
          <StatTimer />
        </div>
        <StatScramble />
      </div>
      <div className="w-1/4 bg-primary/20 dark:bg-dark-primary/20 text-center">
        <div className="h-full w-full py-10 px-10">
          <StatOutput />
        </div>
      </div>
    </div>
  );
};

// Timer component that replaces stat-timer
function StatTimer() {
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState('0.00');
  const [isActive, setIsActive] = useState(false);
  const startTimeRef = useRef(0);

  // This effect handles the timer animation
  useEffect(() => {
    let animationId = null;
    
    if (isOn) {
      // Start timer logic
      setTime('0.00');
      startTimeRef.current = Date.now();
      
      const update = () => {
        const elapsed = ((Date.now() - startTimeRef.current) / 1000).toFixed(2);
        setTime(elapsed);
        animationId = window.requestAnimationFrame(update);
      };
      
      animationId = window.requestAnimationFrame(update);
    } else {
      // Dispatch custom events to maintain compatibility with other components
      window.dispatchEvent(new CustomEvent('stat-update', { detail: parseFloat(time) }));
      window.dispatchEvent(new Event('stat-scramble'));
    }
    
    // Cleanup function that runs when isOn changes or component unmounts
    return () => {
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }

    };
  }, [isOn]); // Re-run effect when isOn changes

  const startStop = () => {
    setIsOn(prev => !prev);
  };

  // This effect handles keyboard events and only needs to run once on mount
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ') {
        setIsActive(true);
        
        // Only reset time when starting, not when stopping
        if (!isOn) {
          setTime('0.00');
        }
      }
    };
    
    const handleKeyUp = (e) => {
      if (e.key === ' ') {
        setIsActive(false);
        startStop();
      }
    };
    
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="block flex flex-col items-center justify-center">
      <span className={`text-[12rem] transition-opacity duration-100 ${isActive ? 'opacity-50' : ''}`}>
        {time}
      </span>
      <button  
        className={`relative rounded-lg px-10 py-1 text-2xl uppercase transition-colors duration-150 hover:bg-white/20 dark:hover:bg-black/20 ${isActive ? 'bg-white/30 dark:bg-black/30' : 'bg-accent/50 dark:bg-dark-accent/50'}`}
        onClick={startStop}
        onMouseDown={(e) => e.preventDefault()}
      >
        {isOn ? 'Stop' : 'Start'}
      </button>
      <span className="text-lg lowercase opacity-60">
          or press [space]
      </span>
    </div>
  );
};

// Stats output component that replaces stat-output
const StatOutput = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const handleStatUpdate = (e) => {
      setAttempts(prevAttempts => [...prevAttempts, e.detail]);
    };
    
    window.addEventListener('stat-update', handleStatUpdate);
    
    return () => {
      window.removeEventListener('stat-update', handleStatUpdate);
    };
  }, []);

  const renderAttempts = () => {
    const UP = "↗";
    const DOWN = "↘";
    
    return attempts.map((time, i) => {
      const direction = i > 0 ? (time > attempts[i - 1] ? UP : DOWN) : '';
      return (
        <div key={i} className="mt-5 flex w-full justify-between rounded-lg bg-primary dark:bg-dark-primary py-2 px-4 text-2xl">
          <span className="font-bold">
            <span className="mr-2 font-extrabold">{direction}</span>
            {time.toFixed(2)}
          </span>
          <span>Attempt {i + 1}</span>
        </div>
      );
    }).reverse();
  };

  return (
    <div className="block">
      <StatGroup data={attempts} />
      <div className="mt-10">
        <h2 className="mb-5 uppercase text-3xl font-bold text-accent dark:text-dark-accent">Attempts</h2>
        <div className="max-h-[55vh] overflow-y-auto pr-3">
          {renderAttempts()}
        </div>
      </div>
    </div>
  );
};

// Stats summary component that replaces stat-group
const StatGroup = ({ data }) => {
  const processedData = [...data].sort((a, b) => a - b);
  const best = processedData[0];
  const average = processedData.reduce((a, b) => a + b, 0) / processedData.length;
  const worst = processedData[processedData.length - 1];

  // Helper component for each stat box
  const StatBox = ({ label, value, highlight = false }) => (
    <div className="relative w-full">
      <div className={`text-lg font-bold uppercase ${highlight ? "text-accent dark:text-dark-accent" : ""}`}>
        {label}
      </div>
      <div className="rounded-lg bg-secondary/20 dark:bg-dark-secondary/20 p-2 text-2xl">
        {value}
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex w-full gap-5 flex-row">
        <StatBox 
          label="best" 
          value={best?.toFixed?.(2) || "--"} 
          highlight={true} 
        />
        <StatBox 
          label="average" 
          value={isNaN(average) ? "--" : average.toFixed(2)} 
        />
        <StatBox 
          label="worst" 
          value={worst?.toFixed?.(2) || "--"} 
        />
      </div>
    </div>
  );
};

// Scramble component that replaces stat-scramble
const StatScramble = () => {
  const [scrambleText, setScrambleText] = useState([]);

  const generateScramble = () => {
    const rand = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
    const moves = [["F", "R", "U", "B", "L", "D"]];
    moves.push(moves[0].map(i => i + "'"));
    moves.push(moves[0].map(i => i + "2"));

    const outputLength = 25;
    const result = [];
    
    for (let i = 0; i < outputLength; i++) {
      const choice = Math.random();
      const type = choice > 0.5 ? 0 : choice > 0.2 ? 1 : 2;
      let move;
      
      if (i > 0) {
        const prev = result[i - 1];
        const pos = moves[0].findIndex(j => j.startsWith(prev[0]));
        const choose = moves[type].slice(0, pos).concat(moves[type].slice(pos + 1));
        move = choose[rand(choose.length)];
      } else {
        move = moves[type][rand(moves[0].length)];
      }
      
      result[i] = move;
    }
    
    setScrambleText(result);
  };

  useEffect(() => {
    generateScramble();
    
    const handleScrambleEvent = () => {
      generateScramble();
    };
    
    window.addEventListener('stat-scramble', handleScrambleEvent);
    
    return () => {
      window.removeEventListener('stat-scramble', handleScrambleEvent);
    };
  }, []);

  return (
    <div 
      className="rounded-lg bg-primary/50 dark:bg-dark-primary/50 p-5 text-xl whitespace-pre"
      onClick={generateScramble}
    >
      {scrambleText.join("      ")}
    </div>
  );
};