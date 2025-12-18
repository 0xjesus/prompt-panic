// Next, React
import { FC, useState, useEffect, useCallback, useRef } from 'react';
import pkg from '../../../package.json';

// DO NOT EDIT ANYTHING ABOVE THIS LINE

export const HomeView: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* HEADER – fake Scrolly feed tabs */}
      <header className="flex items-center justify-center border-b border-white/10 py-3">
        <div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px]">
          <button className="rounded-full bg-slate-900 px-3 py-1 font-semibold text-white">
            Feed
          </button>
          <button className="rounded-full px-3 py-1 text-slate-400">
            Casino
          </button>
          <button className="rounded-full px-3 py-1 text-slate-400">
            Kids
          </button>
        </div>
      </header>

      {/* MAIN – central game area (phone frame) */}
      <main className="flex flex-1 items-center justify-center px-4 py-3">
        <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
          {/* Fake "feed card" top bar inside the phone */}
          <div className="flex items-center justify-between px-3 py-2 text-[10px] text-slate-400">
            <span className="rounded-full bg-white/5 px-2 py-1 text-[9px] uppercase tracking-wide">
              Prompt Panic
            </span>
            <span className="text-[9px] opacity-70">#ScrollyGameJam</span>
          </div>

          {/* The game lives INSIDE this phone frame */}
          <div className="flex h-[calc(100%-26px)] flex-col items-center justify-start px-3 pb-3 pt-1">
            <GameSandbox />
          </div>
        </div>
      </main>

      {/* FOOTER – tiny version text */}
      <footer className="flex h-5 items-center justify-center border-t border-white/10 px-2 text-[9px] text-slate-500">
        <span>Scrolly · v{pkg.version}</span>
      </footer>
    </div>
  );
};

// THIS IS THE ONLY PART YOU EDIT FOR THE JAM
// Prompt Panic Game Implementation

interface Prompt {
  emoji: string;
  word: string;
  correctCategory: string;
}

interface CategorySet {
  left: string;
  right: string;
  prompts: Prompt[];
}

const CATEGORY_SETS: CategorySet[] = [
  {
    left: 'FOOD',
    right: 'NOT FOOD',
    prompts: [
      { emoji: '🍕', word: 'Pizza', correctCategory: 'FOOD' },
      { emoji: '🍔', word: 'Burger', correctCategory: 'FOOD' },
      { emoji: '🍟', word: 'Fries', correctCategory: 'FOOD' },
      { emoji: '🍩', word: 'Donut', correctCategory: 'FOOD' },
      { emoji: '🍦', word: 'Ice Cream', correctCategory: 'FOOD' },
      { emoji: '🌮', word: 'Taco', correctCategory: 'FOOD' },
      { emoji: '🍣', word: 'Sushi', correctCategory: 'FOOD' },
      { emoji: '🐕', word: 'Dog', correctCategory: 'NOT FOOD' },
      { emoji: '🚀', word: 'Rocket', correctCategory: 'NOT FOOD' },
      { emoji: '🎸', word: 'Guitar', correctCategory: 'NOT FOOD' },
      { emoji: '📱', word: 'Phone', correctCategory: 'NOT FOOD' },
      { emoji: '🚗', word: 'Car', correctCategory: 'NOT FOOD' },
      { emoji: '🌭', word: 'Hot Dog', correctCategory: 'FOOD' }, // trick prompt
      { emoji: '🍿', word: 'Popcorn', correctCategory: 'FOOD' },
      { emoji: '💎', word: 'Diamond', correctCategory: 'NOT FOOD' },
    ],
  },
  {
    left: 'ANIMAL',
    right: 'OBJECT',
    prompts: [
      { emoji: '🐕', word: 'Dog', correctCategory: 'ANIMAL' },
      { emoji: '🐈', word: 'Cat', correctCategory: 'ANIMAL' },
      { emoji: '🦁', word: 'Lion', correctCategory: 'ANIMAL' },
      { emoji: '🐘', word: 'Elephant', correctCategory: 'ANIMAL' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'ANIMAL' },
      { emoji: '🐍', word: 'Snake', correctCategory: 'ANIMAL' },
      { emoji: '🚗', word: 'Car', correctCategory: 'OBJECT' },
      { emoji: '📱', word: 'Phone', correctCategory: 'OBJECT' },
      { emoji: '💻', word: 'Laptop', correctCategory: 'OBJECT' },
      { emoji: '🎸', word: 'Guitar', correctCategory: 'OBJECT' },
      { emoji: '🪑', word: 'Chair', correctCategory: 'OBJECT' },
      { emoji: '🐻', word: 'Teddy Bear', correctCategory: 'OBJECT' }, // trick prompt
      { emoji: '🦊', word: 'Fox', correctCategory: 'ANIMAL' },
      { emoji: '🔑', word: 'Key', correctCategory: 'OBJECT' },
    ],
  },
  {
    left: 'HOT',
    right: 'COLD',
    prompts: [
      { emoji: '🔥', word: 'Fire', correctCategory: 'HOT' },
      { emoji: '☀️', word: 'Sun', correctCategory: 'HOT' },
      { emoji: '🌶️', word: 'Chili', correctCategory: 'HOT' },
      { emoji: '🍵', word: 'Tea', correctCategory: 'HOT' },
      { emoji: '🌋', word: 'Volcano', correctCategory: 'HOT' },
      { emoji: '❄️', word: 'Snowflake', correctCategory: 'COLD' },
      { emoji: '🧊', word: 'Ice Cube', correctCategory: 'COLD' },
      { emoji: '🍦', word: 'Ice Cream', correctCategory: 'COLD' },
      { emoji: '⛄', word: 'Snowman', correctCategory: 'COLD' },
      { emoji: '🐧', word: 'Penguin', correctCategory: 'COLD' },
      { emoji: '🥶', word: 'Freezing', correctCategory: 'COLD' },
      { emoji: '🌡️', word: 'Thermometer', correctCategory: 'HOT' }, // trick
      { emoji: '🏜️', word: 'Desert', correctCategory: 'HOT' },
      { emoji: '🎿', word: 'Skiing', correctCategory: 'COLD' },
    ],
  },
];

const GameSandbox: FC = () => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'over'>('menu');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [promptY, setPromptY] = useState(0);
  const [categorySetIndex, setCategorySetIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shake, setShake] = useState(false);
  const [speed, setSpeed] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<Prompt | null>(null);
  const livesRef = useRef(3);

  const currentCategorySet = CATEGORY_SETS[categorySetIndex % CATEGORY_SETS.length];

  const getRandomPrompt = useCallback(() => {
    const prompts = currentCategorySet.prompts;
    return prompts[Math.floor(Math.random() * prompts.length)];
  }, [currentCategorySet]);

  const spawnNewPrompt = useCallback(() => {
    const newPrompt = getRandomPrompt();
    setCurrentPrompt(newPrompt);
    promptRef.current = newPrompt;
    setPromptY(0);
  }, [getRandomPrompt]);

  const handleChoice = useCallback((choice: 'left' | 'right') => {
    if (!promptRef.current || gameState !== 'playing') return;

    const chosenCategory = choice === 'left' ? currentCategorySet.left : currentCategorySet.right;
    const isCorrect = promptRef.current.correctCategory === chosenCategory;

    if (isCorrect) {
      setScore(prev => {
        const newScore = prev + 10;
        // Every 50 points: increase speed and potentially change categories
        if (newScore % 50 === 0 && newScore > 0) {
          setSpeed(s => Math.min(s + 1, 10));
          setCategorySetIndex(i => i + 1);
        }
        return newScore;
      });
      setFeedback('correct');
    } else {
      livesRef.current -= 1;
      setLives(livesRef.current);
      setFeedback('wrong');
      setShake(true);
      setTimeout(() => setShake(false), 300);

      if (livesRef.current <= 0) {
        setGameState('over');
        return;
      }
    }

    setTimeout(() => setFeedback(null), 150);
    spawnNewPrompt();
  }, [gameState, currentCategorySet, spawnNewPrompt]);

  // Game loop - move prompt down
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setPromptY(prev => {
        const newY = prev + speed;
        // Check if prompt fell too far (missed)
        if (newY > 85) {
          livesRef.current -= 1;
          setLives(livesRef.current);
          setFeedback('wrong');
          setShake(true);
          setTimeout(() => setShake(false), 300);
          setTimeout(() => setFeedback(null), 150);

          if (livesRef.current <= 0) {
            setGameState('over');
            return prev;
          }

          spawnNewPrompt();
          return 0;
        }
        return newY;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [gameState, speed, spawnNewPrompt]);

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const deltaX = touchEnd - touchStart;

    if (Math.abs(deltaX) > 30) {
      handleChoice(deltaX < 0 ? 'left' : 'right');
    }
    setTouchStart(null);
  };

  // Click handling (tap left/right half)
  const handleClick = (e: React.MouseEvent) => {
    if (!gameAreaRef.current || gameState !== 'playing') return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isLeft = clickX < rect.width / 2;
    handleChoice(isLeft ? 'left' : 'right');
  };

  const startGame = () => {
    setScore(0);
    setLives(3);
    livesRef.current = 3;
    setSpeed(3);
    setCategorySetIndex(0);
    setGameState('playing');
    spawnNewPrompt();
  };

  // Menu screen
  if (gameState === 'menu') {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <div className="text-4xl">🧠</div>
        <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
          PROMPT PANIC
        </h1>
        <p className="text-xs text-slate-400 px-4">
          You ARE the AI! Sort falling prompts into the correct categories before your context window overflows!
        </p>
        <div className="mt-2 text-xs text-slate-500">
          <p>Swipe or tap left/right</p>
          <p>+10 points per correct</p>
          <p>3 lives total</p>
        </div>
        <button
          onClick={startGame}
          className="mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          START
        </button>
      </div>
    );
  }

  // Game over screen
  if (gameState === 'over') {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
        <div className="text-4xl">💥</div>
        <h2 className="text-2xl font-bold text-red-400">CONTEXT OVERFLOW!</h2>
        <p className="text-slate-400">Your AI brain could not keep up</p>
        <div className="my-4">
          <p className="text-sm text-slate-500">Final Score</p>
          <p className="text-4xl font-bold text-cyan-400">{score}</p>
        </div>
        <button
          onClick={startGame}
          className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          RESTART
        </button>
      </div>
    );
  }

  // Playing state
  return (
    <div
      ref={gameAreaRef}
      className={`relative flex h-full w-full flex-col select-none ${shake ? 'animate-shake' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      style={{
        animation: shake ? 'shake 0.3s ease-in-out' : undefined,
      }}
    >
      {/* Shake animation style */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>

      {/* HUD - Score and Lives */}
      <div className="flex w-full items-center justify-between px-2 py-1">
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`text-lg ${i < lives ? 'opacity-100' : 'opacity-30'}`}>
              ❤️
            </span>
          ))}
        </div>
        <div className="rounded-full bg-white/10 px-3 py-1">
          <span className="text-sm font-bold text-cyan-400">{score}</span>
        </div>
      </div>

      {/* Game Area */}
      <div
        className={`relative flex-1 overflow-hidden transition-colors duration-100 ${
          feedback === 'correct' ? 'bg-green-500/20' :
          feedback === 'wrong' ? 'bg-red-500/20' : ''
        }`}
      >
        {/* Falling Prompt Bubble */}
        {currentPrompt && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 px-4 py-3 shadow-lg border border-white/10 transition-all duration-50 ${
              feedback === 'correct' ? 'scale-110' : ''
            }`}
            style={{
              top: `${promptY}%`,
              animation: feedback === 'correct' ? 'bounce 0.15s ease-out' : undefined,
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl">{currentPrompt.emoji}</span>
              <span className="text-sm font-semibold text-white">{currentPrompt.word}</span>
            </div>
          </div>
        )}

        {/* Visual hint arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none opacity-20">
          <span className="text-2xl">👈</span>
          <span className="text-2xl">👉</span>
        </div>
      </div>

      {/* Category Bins at Bottom */}
      <div className="flex w-full gap-2 p-2">
        <div className="flex-1 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 py-3 text-center shadow-lg">
          <span className="text-xs font-bold text-white">{currentCategorySet.left}</span>
        </div>
        <div className="flex-1 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 py-3 text-center shadow-lg">
          <span className="text-xs font-bold text-white">{currentCategorySet.right}</span>
        </div>
      </div>

      {/* Level indicator */}
      <div className="flex justify-center pb-1">
        <span className="text-[10px] text-slate-500">
          Speed: {speed} | Category Set: {(categorySetIndex % CATEGORY_SETS.length) + 1}
        </span>
      </div>
    </div>
  );
};
