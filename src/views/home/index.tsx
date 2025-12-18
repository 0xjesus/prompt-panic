// Next, React
import { FC, useState, useEffect, useCallback, useRef } from 'react';
import pkg from '../../../package.json';

// DO NOT EDIT ANYTHING ABOVE THIS LINE

export const HomeView: FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      gameContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div ref={gameContainerRef} className="flex min-h-screen flex-col bg-black text-white">
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
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
        <button
          onClick={toggleFullscreen}
          className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105 active:scale-95"
        >
          {isFullscreen ? '🗗 EXIT' : '⛶ FULLSCREEN'}
        </button>
      </header>

      {/* MAIN */}
      <main className="flex flex-1 items-center justify-center px-4 py-3">
        <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_40px_rgba(56,189,248,0.35)] transition-all duration-300 ${
          isFullscreen
            ? 'h-full w-full max-w-none rounded-none'
            : 'aspect-[9/16] w-full max-w-sm'
        }`}>
          {/* Top bar */}
          <div className="flex items-center justify-between px-3 py-2 text-[10px] text-slate-400">
            <span className="rounded-full bg-white/5 px-2 py-1 text-[9px] uppercase tracking-wide">
              Prompt Panic
            </span>
            <span className="text-[9px] opacity-70">#ScrollyGameJam</span>
          </div>

          {/* Game */}
          <div className={`flex flex-col items-center justify-start px-3 pb-3 pt-1 ${
            isFullscreen ? 'h-[calc(100%-40px)]' : 'h-[calc(100%-26px)]'
          }`}>
            <GameSandbox isFullscreen={isFullscreen} />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      {!isFullscreen && (
        <footer className="flex h-5 items-center justify-center border-t border-white/10 px-2 text-[9px] text-slate-500">
          <span>Scrolly · v{pkg.version}</span>
        </footer>
      )}
    </div>
  );
};

// PROMPT PANIC - MEGA EXPANDED VERSION

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
  // SET 1: FOOD vs NOT FOOD (MASSIVE)
  {
    left: 'FOOD',
    right: 'NOT FOOD',
    prompts: [
      // Foods
      { emoji: '🍕', word: 'Pizza', correctCategory: 'FOOD' },
      { emoji: '🍔', word: 'Burger', correctCategory: 'FOOD' },
      { emoji: '🍟', word: 'Fries', correctCategory: 'FOOD' },
      { emoji: '🍩', word: 'Donut', correctCategory: 'FOOD' },
      { emoji: '🍦', word: 'Ice Cream', correctCategory: 'FOOD' },
      { emoji: '🌮', word: 'Taco', correctCategory: 'FOOD' },
      { emoji: '🍣', word: 'Sushi', correctCategory: 'FOOD' },
      { emoji: '🌭', word: 'Hot Dog', correctCategory: 'FOOD' },
      { emoji: '🍿', word: 'Popcorn', correctCategory: 'FOOD' },
      { emoji: '🥗', word: 'Salad', correctCategory: 'FOOD' },
      { emoji: '🍜', word: 'Ramen', correctCategory: 'FOOD' },
      { emoji: '🍝', word: 'Spaghetti', correctCategory: 'FOOD' },
      { emoji: '🍛', word: 'Curry', correctCategory: 'FOOD' },
      { emoji: '🍚', word: 'Rice', correctCategory: 'FOOD' },
      { emoji: '🍱', word: 'Bento', correctCategory: 'FOOD' },
      { emoji: '🥟', word: 'Dumpling', correctCategory: 'FOOD' },
      { emoji: '🍤', word: 'Shrimp', correctCategory: 'FOOD' },
      { emoji: '🍗', word: 'Chicken', correctCategory: 'FOOD' },
      { emoji: '🥩', word: 'Steak', correctCategory: 'FOOD' },
      { emoji: '🥓', word: 'Bacon', correctCategory: 'FOOD' },
      { emoji: '🍳', word: 'Eggs', correctCategory: 'FOOD' },
      { emoji: '🥞', word: 'Pancakes', correctCategory: 'FOOD' },
      { emoji: '🧇', word: 'Waffle', correctCategory: 'FOOD' },
      { emoji: '🥐', word: 'Croissant', correctCategory: 'FOOD' },
      { emoji: '🍞', word: 'Bread', correctCategory: 'FOOD' },
      { emoji: '🥖', word: 'Baguette', correctCategory: 'FOOD' },
      { emoji: '🥨', word: 'Pretzel', correctCategory: 'FOOD' },
      { emoji: '🧀', word: 'Cheese', correctCategory: 'FOOD' },
      { emoji: '🥚', word: 'Egg', correctCategory: 'FOOD' },
      { emoji: '🥯', word: 'Bagel', correctCategory: 'FOOD' },
      { emoji: '🥘', word: 'Paella', correctCategory: 'FOOD' },
      { emoji: '🫕', word: 'Fondue', correctCategory: 'FOOD' },
      { emoji: '🥙', word: 'Pita', correctCategory: 'FOOD' },
      { emoji: '🧆', word: 'Falafel', correctCategory: 'FOOD' },
      { emoji: '🌯', word: 'Burrito', correctCategory: 'FOOD' },
      { emoji: '🫔', word: 'Tamale', correctCategory: 'FOOD' },
      { emoji: '🥪', word: 'Sandwich', correctCategory: 'FOOD' },
      { emoji: '🍰', word: 'Cake', correctCategory: 'FOOD' },
      { emoji: '🎂', word: 'Birthday Cake', correctCategory: 'FOOD' },
      { emoji: '🧁', word: 'Cupcake', correctCategory: 'FOOD' },
      { emoji: '🥧', word: 'Pie', correctCategory: 'FOOD' },
      { emoji: '🍫', word: 'Chocolate', correctCategory: 'FOOD' },
      { emoji: '🍬', word: 'Candy', correctCategory: 'FOOD' },
      { emoji: '🍭', word: 'Lollipop', correctCategory: 'FOOD' },
      { emoji: '🍮', word: 'Pudding', correctCategory: 'FOOD' },
      { emoji: '🍯', word: 'Honey', correctCategory: 'FOOD' },
      { emoji: '🍪', word: 'Cookie', correctCategory: 'FOOD' },
      { emoji: '🍡', word: 'Dango', correctCategory: 'FOOD' },
      { emoji: '🍧', word: 'Shaved Ice', correctCategory: 'FOOD' },
      { emoji: '🍨', word: 'Sundae', correctCategory: 'FOOD' },
      { emoji: '🥤', word: 'Soda', correctCategory: 'FOOD' },
      { emoji: '🧃', word: 'Juice Box', correctCategory: 'FOOD' },
      { emoji: '🧋', word: 'Boba', correctCategory: 'FOOD' },
      { emoji: '☕', word: 'Coffee', correctCategory: 'FOOD' },
      { emoji: '🍵', word: 'Tea', correctCategory: 'FOOD' },
      { emoji: '🍺', word: 'Beer', correctCategory: 'FOOD' },
      { emoji: '🍷', word: 'Wine', correctCategory: 'FOOD' },
      { emoji: '🥛', word: 'Milk', correctCategory: 'FOOD' },
      { emoji: '🍇', word: 'Grapes', correctCategory: 'FOOD' },
      { emoji: '🍈', word: 'Melon', correctCategory: 'FOOD' },
      { emoji: '🍉', word: 'Watermelon', correctCategory: 'FOOD' },
      { emoji: '🍊', word: 'Orange', correctCategory: 'FOOD' },
      { emoji: '🍋', word: 'Lemon', correctCategory: 'FOOD' },
      { emoji: '🍌', word: 'Banana', correctCategory: 'FOOD' },
      { emoji: '🍍', word: 'Pineapple', correctCategory: 'FOOD' },
      { emoji: '🥭', word: 'Mango', correctCategory: 'FOOD' },
      { emoji: '🍎', word: 'Apple', correctCategory: 'FOOD' },
      { emoji: '🍐', word: 'Pear', correctCategory: 'FOOD' },
      { emoji: '🍑', word: 'Peach', correctCategory: 'FOOD' },
      { emoji: '🍒', word: 'Cherry', correctCategory: 'FOOD' },
      { emoji: '🍓', word: 'Strawberry', correctCategory: 'FOOD' },
      { emoji: '🫐', word: 'Blueberry', correctCategory: 'FOOD' },
      { emoji: '🥝', word: 'Kiwi', correctCategory: 'FOOD' },
      { emoji: '🥥', word: 'Coconut', correctCategory: 'FOOD' },
      { emoji: '🥑', word: 'Avocado', correctCategory: 'FOOD' },
      { emoji: '🍆', word: 'Eggplant', correctCategory: 'FOOD' },
      { emoji: '🥔', word: 'Potato', correctCategory: 'FOOD' },
      { emoji: '🥕', word: 'Carrot', correctCategory: 'FOOD' },
      { emoji: '🌽', word: 'Corn', correctCategory: 'FOOD' },
      { emoji: '🌶️', word: 'Pepper', correctCategory: 'FOOD' },
      { emoji: '🫑', word: 'Bell Pepper', correctCategory: 'FOOD' },
      { emoji: '🥒', word: 'Cucumber', correctCategory: 'FOOD' },
      { emoji: '🥬', word: 'Lettuce', correctCategory: 'FOOD' },
      { emoji: '🥦', word: 'Broccoli', correctCategory: 'FOOD' },
      { emoji: '🧄', word: 'Garlic', correctCategory: 'FOOD' },
      { emoji: '🧅', word: 'Onion', correctCategory: 'FOOD' },
      { emoji: '🍄', word: 'Mushroom', correctCategory: 'FOOD' },
      { emoji: '🥜', word: 'Peanuts', correctCategory: 'FOOD' },
      { emoji: '🫘', word: 'Beans', correctCategory: 'FOOD' },
      { emoji: '🌰', word: 'Chestnut', correctCategory: 'FOOD' },
      // NOT Foods
      { emoji: '🐕', word: 'Dog', correctCategory: 'NOT FOOD' },
      { emoji: '🚀', word: 'Rocket', correctCategory: 'NOT FOOD' },
      { emoji: '🎸', word: 'Guitar', correctCategory: 'NOT FOOD' },
      { emoji: '📱', word: 'Phone', correctCategory: 'NOT FOOD' },
      { emoji: '🚗', word: 'Car', correctCategory: 'NOT FOOD' },
      { emoji: '💎', word: 'Diamond', correctCategory: 'NOT FOOD' },
      { emoji: '🏠', word: 'House', correctCategory: 'NOT FOOD' },
      { emoji: '✈️', word: 'Airplane', correctCategory: 'NOT FOOD' },
      { emoji: '🚂', word: 'Train', correctCategory: 'NOT FOOD' },
      { emoji: '🚢', word: 'Ship', correctCategory: 'NOT FOOD' },
      { emoji: '🎮', word: 'Controller', correctCategory: 'NOT FOOD' },
      { emoji: '💻', word: 'Laptop', correctCategory: 'NOT FOOD' },
      { emoji: '🖥️', word: 'Computer', correctCategory: 'NOT FOOD' },
      { emoji: '📺', word: 'TV', correctCategory: 'NOT FOOD' },
      { emoji: '📷', word: 'Camera', correctCategory: 'NOT FOOD' },
      { emoji: '🔑', word: 'Key', correctCategory: 'NOT FOOD' },
      { emoji: '💡', word: 'Light Bulb', correctCategory: 'NOT FOOD' },
      { emoji: '🔧', word: 'Wrench', correctCategory: 'NOT FOOD' },
      { emoji: '🔨', word: 'Hammer', correctCategory: 'NOT FOOD' },
      { emoji: '⚽', word: 'Soccer Ball', correctCategory: 'NOT FOOD' },
      { emoji: '🏀', word: 'Basketball', correctCategory: 'NOT FOOD' },
      { emoji: '🎾', word: 'Tennis Ball', correctCategory: 'NOT FOOD' },
      { emoji: '🎹', word: 'Piano', correctCategory: 'NOT FOOD' },
      { emoji: '🎺', word: 'Trumpet', correctCategory: 'NOT FOOD' },
      { emoji: '🎻', word: 'Violin', correctCategory: 'NOT FOOD' },
      { emoji: '🪑', word: 'Chair', correctCategory: 'NOT FOOD' },
      { emoji: '🛋️', word: 'Couch', correctCategory: 'NOT FOOD' },
      { emoji: '🛏️', word: 'Bed', correctCategory: 'NOT FOOD' },
      { emoji: '🚿', word: 'Shower', correctCategory: 'NOT FOOD' },
      { emoji: '🛁', word: 'Bathtub', correctCategory: 'NOT FOOD' },
      { emoji: '🪥', word: 'Toothbrush', correctCategory: 'NOT FOOD' },
      { emoji: '💄', word: 'Lipstick', correctCategory: 'NOT FOOD' },
      { emoji: '👟', word: 'Sneaker', correctCategory: 'NOT FOOD' },
      { emoji: '👗', word: 'Dress', correctCategory: 'NOT FOOD' },
      { emoji: '👒', word: 'Hat', correctCategory: 'NOT FOOD' },
      { emoji: '🎒', word: 'Backpack', correctCategory: 'NOT FOOD' },
      { emoji: '👜', word: 'Purse', correctCategory: 'NOT FOOD' },
      { emoji: '💼', word: 'Briefcase', correctCategory: 'NOT FOOD' },
      { emoji: '🌂', word: 'Umbrella', correctCategory: 'NOT FOOD' },
      { emoji: '🧸', word: 'Teddy Bear', correctCategory: 'NOT FOOD' },
      { emoji: '🎁', word: 'Gift', correctCategory: 'NOT FOOD' },
      { emoji: '🎈', word: 'Balloon', correctCategory: 'NOT FOOD' },
      { emoji: '🎭', word: 'Masks', correctCategory: 'NOT FOOD' },
      { emoji: '🖼️', word: 'Frame', correctCategory: 'NOT FOOD' },
      { emoji: '📚', word: 'Books', correctCategory: 'NOT FOOD' },
      { emoji: '✏️', word: 'Pencil', correctCategory: 'NOT FOOD' },
      { emoji: '📎', word: 'Paperclip', correctCategory: 'NOT FOOD' },
      { emoji: '✂️', word: 'Scissors', correctCategory: 'NOT FOOD' },
      { emoji: '🗑️', word: 'Trash Can', correctCategory: 'NOT FOOD' },
    ],
  },
  // SET 2: ANIMAL vs OBJECT (MASSIVE)
  {
    left: 'ANIMAL',
    right: 'OBJECT',
    prompts: [
      // Animals
      { emoji: '🐕', word: 'Dog', correctCategory: 'ANIMAL' },
      { emoji: '🐈', word: 'Cat', correctCategory: 'ANIMAL' },
      { emoji: '🦁', word: 'Lion', correctCategory: 'ANIMAL' },
      { emoji: '🐘', word: 'Elephant', correctCategory: 'ANIMAL' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'ANIMAL' },
      { emoji: '🐍', word: 'Snake', correctCategory: 'ANIMAL' },
      { emoji: '🦊', word: 'Fox', correctCategory: 'ANIMAL' },
      { emoji: '🐺', word: 'Wolf', correctCategory: 'ANIMAL' },
      { emoji: '🐻', word: 'Bear', correctCategory: 'ANIMAL' },
      { emoji: '🐼', word: 'Panda', correctCategory: 'ANIMAL' },
      { emoji: '🐨', word: 'Koala', correctCategory: 'ANIMAL' },
      { emoji: '🐯', word: 'Tiger', correctCategory: 'ANIMAL' },
      { emoji: '🦄', word: 'Unicorn', correctCategory: 'ANIMAL' },
      { emoji: '🦓', word: 'Zebra', correctCategory: 'ANIMAL' },
      { emoji: '🦒', word: 'Giraffe', correctCategory: 'ANIMAL' },
      { emoji: '🦘', word: 'Kangaroo', correctCategory: 'ANIMAL' },
      { emoji: '🦛', word: 'Hippo', correctCategory: 'ANIMAL' },
      { emoji: '🦏', word: 'Rhino', correctCategory: 'ANIMAL' },
      { emoji: '🐪', word: 'Camel', correctCategory: 'ANIMAL' },
      { emoji: '🦙', word: 'Llama', correctCategory: 'ANIMAL' },
      { emoji: '🦌', word: 'Deer', correctCategory: 'ANIMAL' },
      { emoji: '🐗', word: 'Boar', correctCategory: 'ANIMAL' },
      { emoji: '🐖', word: 'Pig', correctCategory: 'ANIMAL' },
      { emoji: '🐄', word: 'Cow', correctCategory: 'ANIMAL' },
      { emoji: '🐎', word: 'Horse', correctCategory: 'ANIMAL' },
      { emoji: '🐑', word: 'Sheep', correctCategory: 'ANIMAL' },
      { emoji: '🐐', word: 'Goat', correctCategory: 'ANIMAL' },
      { emoji: '🐓', word: 'Rooster', correctCategory: 'ANIMAL' },
      { emoji: '🦃', word: 'Turkey', correctCategory: 'ANIMAL' },
      { emoji: '🦚', word: 'Peacock', correctCategory: 'ANIMAL' },
      { emoji: '🦜', word: 'Parrot', correctCategory: 'ANIMAL' },
      { emoji: '🦢', word: 'Swan', correctCategory: 'ANIMAL' },
      { emoji: '🦩', word: 'Flamingo', correctCategory: 'ANIMAL' },
      { emoji: '🐧', word: 'Penguin', correctCategory: 'ANIMAL' },
      { emoji: '🦅', word: 'Eagle', correctCategory: 'ANIMAL' },
      { emoji: '🦆', word: 'Duck', correctCategory: 'ANIMAL' },
      { emoji: '🦉', word: 'Owl', correctCategory: 'ANIMAL' },
      { emoji: '🐦', word: 'Bird', correctCategory: 'ANIMAL' },
      { emoji: '🐸', word: 'Frog', correctCategory: 'ANIMAL' },
      { emoji: '🐊', word: 'Crocodile', correctCategory: 'ANIMAL' },
      { emoji: '🐢', word: 'Turtle', correctCategory: 'ANIMAL' },
      { emoji: '🦎', word: 'Lizard', correctCategory: 'ANIMAL' },
      { emoji: '🐉', word: 'Dragon', correctCategory: 'ANIMAL' },
      { emoji: '🦕', word: 'Dino', correctCategory: 'ANIMAL' },
      { emoji: '🦖', word: 'T-Rex', correctCategory: 'ANIMAL' },
      { emoji: '🐳', word: 'Whale', correctCategory: 'ANIMAL' },
      { emoji: '🐬', word: 'Dolphin', correctCategory: 'ANIMAL' },
      { emoji: '🦈', word: 'Shark', correctCategory: 'ANIMAL' },
      { emoji: '🐙', word: 'Octopus', correctCategory: 'ANIMAL' },
      { emoji: '🦑', word: 'Squid', correctCategory: 'ANIMAL' },
      { emoji: '🦐', word: 'Shrimp', correctCategory: 'ANIMAL' },
      { emoji: '🦞', word: 'Lobster', correctCategory: 'ANIMAL' },
      { emoji: '🦀', word: 'Crab', correctCategory: 'ANIMAL' },
      { emoji: '🐠', word: 'Fish', correctCategory: 'ANIMAL' },
      { emoji: '🐡', word: 'Blowfish', correctCategory: 'ANIMAL' },
      { emoji: '🦭', word: 'Seal', correctCategory: 'ANIMAL' },
      { emoji: '🐌', word: 'Snail', correctCategory: 'ANIMAL' },
      { emoji: '🦗', word: 'Cricket', correctCategory: 'ANIMAL' },
      { emoji: '🐛', word: 'Bug', correctCategory: 'ANIMAL' },
      { emoji: '🐜', word: 'Ant', correctCategory: 'ANIMAL' },
      { emoji: '🐝', word: 'Bee', correctCategory: 'ANIMAL' },
      { emoji: '🪲', word: 'Beetle', correctCategory: 'ANIMAL' },
      { emoji: '🐞', word: 'Ladybug', correctCategory: 'ANIMAL' },
      { emoji: '🦟', word: 'Mosquito', correctCategory: 'ANIMAL' },
      { emoji: '🪳', word: 'Cockroach', correctCategory: 'ANIMAL' },
      { emoji: '🕷️', word: 'Spider', correctCategory: 'ANIMAL' },
      { emoji: '🦂', word: 'Scorpion', correctCategory: 'ANIMAL' },
      { emoji: '🐁', word: 'Mouse', correctCategory: 'ANIMAL' },
      { emoji: '🐀', word: 'Rat', correctCategory: 'ANIMAL' },
      { emoji: '🐇', word: 'Rabbit', correctCategory: 'ANIMAL' },
      { emoji: '🐿️', word: 'Squirrel', correctCategory: 'ANIMAL' },
      { emoji: '🦔', word: 'Hedgehog', correctCategory: 'ANIMAL' },
      { emoji: '🦇', word: 'Bat', correctCategory: 'ANIMAL' },
      { emoji: '🦥', word: 'Sloth', correctCategory: 'ANIMAL' },
      { emoji: '🦦', word: 'Otter', correctCategory: 'ANIMAL' },
      { emoji: '🦨', word: 'Skunk', correctCategory: 'ANIMAL' },
      { emoji: '🦡', word: 'Badger', correctCategory: 'ANIMAL' },
      { emoji: '🐾', word: 'Paw Print', correctCategory: 'ANIMAL' },
      // Objects
      { emoji: '🚗', word: 'Car', correctCategory: 'OBJECT' },
      { emoji: '📱', word: 'Phone', correctCategory: 'OBJECT' },
      { emoji: '💻', word: 'Laptop', correctCategory: 'OBJECT' },
      { emoji: '🎸', word: 'Guitar', correctCategory: 'OBJECT' },
      { emoji: '🪑', word: 'Chair', correctCategory: 'OBJECT' },
      { emoji: '🔑', word: 'Key', correctCategory: 'OBJECT' },
      { emoji: '🚀', word: 'Rocket', correctCategory: 'OBJECT' },
      { emoji: '✈️', word: 'Airplane', correctCategory: 'OBJECT' },
      { emoji: '🚂', word: 'Train', correctCategory: 'OBJECT' },
      { emoji: '🚲', word: 'Bicycle', correctCategory: 'OBJECT' },
      { emoji: '🛵', word: 'Scooter', correctCategory: 'OBJECT' },
      { emoji: '🚁', word: 'Helicopter', correctCategory: 'OBJECT' },
      { emoji: '⛵', word: 'Sailboat', correctCategory: 'OBJECT' },
      { emoji: '🎮', word: 'Controller', correctCategory: 'OBJECT' },
      { emoji: '🖥️', word: 'Computer', correctCategory: 'OBJECT' },
      { emoji: '📺', word: 'TV', correctCategory: 'OBJECT' },
      { emoji: '📷', word: 'Camera', correctCategory: 'OBJECT' },
      { emoji: '🔦', word: 'Flashlight', correctCategory: 'OBJECT' },
      { emoji: '💡', word: 'Light Bulb', correctCategory: 'OBJECT' },
      { emoji: '🔧', word: 'Wrench', correctCategory: 'OBJECT' },
      { emoji: '🔨', word: 'Hammer', correctCategory: 'OBJECT' },
      { emoji: '⚽', word: 'Soccer Ball', correctCategory: 'OBJECT' },
      { emoji: '🏀', word: 'Basketball', correctCategory: 'OBJECT' },
      { emoji: '🎾', word: 'Tennis Ball', correctCategory: 'OBJECT' },
      { emoji: '🏈', word: 'Football', correctCategory: 'OBJECT' },
      { emoji: '⚾', word: 'Baseball', correctCategory: 'OBJECT' },
      { emoji: '🎱', word: 'Pool Ball', correctCategory: 'OBJECT' },
      { emoji: '🎹', word: 'Piano', correctCategory: 'OBJECT' },
      { emoji: '🎺', word: 'Trumpet', correctCategory: 'OBJECT' },
      { emoji: '🎻', word: 'Violin', correctCategory: 'OBJECT' },
      { emoji: '🥁', word: 'Drum', correctCategory: 'OBJECT' },
      { emoji: '🎤', word: 'Microphone', correctCategory: 'OBJECT' },
      { emoji: '🎧', word: 'Headphones', correctCategory: 'OBJECT' },
      { emoji: '📻', word: 'Radio', correctCategory: 'OBJECT' },
      { emoji: '📞', word: 'Telephone', correctCategory: 'OBJECT' },
      { emoji: '⌚', word: 'Watch', correctCategory: 'OBJECT' },
      { emoji: '⏰', word: 'Alarm Clock', correctCategory: 'OBJECT' },
      { emoji: '🧲', word: 'Magnet', correctCategory: 'OBJECT' },
      { emoji: '🔮', word: 'Crystal Ball', correctCategory: 'OBJECT' },
      { emoji: '🧸', word: 'Teddy Bear', correctCategory: 'OBJECT' }, // trick!
      { emoji: '🪆', word: 'Nesting Doll', correctCategory: 'OBJECT' },
      { emoji: '🎎', word: 'Dolls', correctCategory: 'OBJECT' },
      { emoji: '🏆', word: 'Trophy', correctCategory: 'OBJECT' },
      { emoji: '🎨', word: 'Palette', correctCategory: 'OBJECT' },
      { emoji: '🖌️', word: 'Paintbrush', correctCategory: 'OBJECT' },
      { emoji: '✏️', word: 'Pencil', correctCategory: 'OBJECT' },
      { emoji: '📝', word: 'Memo', correctCategory: 'OBJECT' },
      { emoji: '📚', word: 'Books', correctCategory: 'OBJECT' },
      { emoji: '💎', word: 'Diamond', correctCategory: 'OBJECT' },
      { emoji: '💰', word: 'Money Bag', correctCategory: 'OBJECT' },
      { emoji: '🧳', word: 'Luggage', correctCategory: 'OBJECT' },
      { emoji: '🎁', word: 'Gift', correctCategory: 'OBJECT' },
      { emoji: '🎈', word: 'Balloon', correctCategory: 'OBJECT' },
      { emoji: '🪞', word: 'Mirror', correctCategory: 'OBJECT' },
      { emoji: '🛋️', word: 'Couch', correctCategory: 'OBJECT' },
      { emoji: '🛏️', word: 'Bed', correctCategory: 'OBJECT' },
      { emoji: '🚪', word: 'Door', correctCategory: 'OBJECT' },
      { emoji: '🪟', word: 'Window', correctCategory: 'OBJECT' },
      { emoji: '🧯', word: 'Fire Extinguisher', correctCategory: 'OBJECT' },
      { emoji: '🗡️', word: 'Dagger', correctCategory: 'OBJECT' },
      { emoji: '🛡️', word: 'Shield', correctCategory: 'OBJECT' },
      { emoji: '🏹', word: 'Bow', correctCategory: 'OBJECT' },
      { emoji: '🔱', word: 'Trident', correctCategory: 'OBJECT' },
      { emoji: '⚔️', word: 'Swords', correctCategory: 'OBJECT' },
    ],
  },
  // SET 3: HOT vs COLD
  {
    left: 'HOT',
    right: 'COLD',
    prompts: [
      // Hot things
      { emoji: '🔥', word: 'Fire', correctCategory: 'HOT' },
      { emoji: '☀️', word: 'Sun', correctCategory: 'HOT' },
      { emoji: '🌶️', word: 'Chili', correctCategory: 'HOT' },
      { emoji: '🍵', word: 'Hot Tea', correctCategory: 'HOT' },
      { emoji: '🌋', word: 'Volcano', correctCategory: 'HOT' },
      { emoji: '🏜️', word: 'Desert', correctCategory: 'HOT' },
      { emoji: '♨️', word: 'Hot Springs', correctCategory: 'HOT' },
      { emoji: '🌡️', word: 'Fever', correctCategory: 'HOT' },
      { emoji: '☕', word: 'Hot Coffee', correctCategory: 'HOT' },
      { emoji: '🍲', word: 'Hot Pot', correctCategory: 'HOT' },
      { emoji: '🥵', word: 'Overheated', correctCategory: 'HOT' },
      { emoji: '🧨', word: 'Firecracker', correctCategory: 'HOT' },
      { emoji: '💥', word: 'Explosion', correctCategory: 'HOT' },
      { emoji: '⚡', word: 'Lightning', correctCategory: 'HOT' },
      { emoji: '🎆', word: 'Fireworks', correctCategory: 'HOT' },
      { emoji: '🕯️', word: 'Candle', correctCategory: 'HOT' },
      { emoji: '🔦', word: 'Flashlight', correctCategory: 'HOT' },
      { emoji: '💡', word: 'Light Bulb', correctCategory: 'HOT' },
      { emoji: '🌞', word: 'Sunny', correctCategory: 'HOT' },
      { emoji: '🏖️', word: 'Beach', correctCategory: 'HOT' },
      { emoji: '🥘', word: 'Hot Stew', correctCategory: 'HOT' },
      { emoji: '🍛', word: 'Curry', correctCategory: 'HOT' },
      { emoji: '🍜', word: 'Hot Noodles', correctCategory: 'HOT' },
      { emoji: '🫕', word: 'Fondue', correctCategory: 'HOT' },
      { emoji: '🧯', word: 'Fire Extinguisher', correctCategory: 'HOT' },
      { emoji: '🚒', word: 'Fire Truck', correctCategory: 'HOT' },
      { emoji: '👨‍🚒', word: 'Firefighter', correctCategory: 'HOT' },
      { emoji: '🐉', word: 'Fire Dragon', correctCategory: 'HOT' },
      { emoji: '🌵', word: 'Cactus', correctCategory: 'HOT' },
      { emoji: '🦎', word: 'Desert Lizard', correctCategory: 'HOT' },
      // Cold things
      { emoji: '❄️', word: 'Snowflake', correctCategory: 'COLD' },
      { emoji: '🧊', word: 'Ice Cube', correctCategory: 'COLD' },
      { emoji: '🍦', word: 'Ice Cream', correctCategory: 'COLD' },
      { emoji: '⛄', word: 'Snowman', correctCategory: 'COLD' },
      { emoji: '🐧', word: 'Penguin', correctCategory: 'COLD' },
      { emoji: '🥶', word: 'Freezing', correctCategory: 'COLD' },
      { emoji: '🎿', word: 'Skiing', correctCategory: 'COLD' },
      { emoji: '🏔️', word: 'Snow Mountain', correctCategory: 'COLD' },
      { emoji: '🌨️', word: 'Snowing', correctCategory: 'COLD' },
      { emoji: '☃️', word: 'Snowman', correctCategory: 'COLD' },
      { emoji: '🌬️', word: 'Cold Wind', correctCategory: 'COLD' },
      { emoji: '🧤', word: 'Gloves', correctCategory: 'COLD' },
      { emoji: '🧣', word: 'Scarf', correctCategory: 'COLD' },
      { emoji: '🧥', word: 'Coat', correctCategory: 'COLD' },
      { emoji: '⛷️', word: 'Skier', correctCategory: 'COLD' },
      { emoji: '🏂', word: 'Snowboarder', correctCategory: 'COLD' },
      { emoji: '🛷', word: 'Sled', correctCategory: 'COLD' },
      { emoji: '🎄', word: 'Christmas Tree', correctCategory: 'COLD' },
      { emoji: '🦭', word: 'Seal', correctCategory: 'COLD' },
      { emoji: '🐻‍❄️', word: 'Polar Bear', correctCategory: 'COLD' },
      { emoji: '🥤', word: 'Iced Drink', correctCategory: 'COLD' },
      { emoji: '🍧', word: 'Shaved Ice', correctCategory: 'COLD' },
      { emoji: '🍨', word: 'Sundae', correctCategory: 'COLD' },
      { emoji: '🧊', word: 'Ice', correctCategory: 'COLD' },
      { emoji: '🌊', word: 'Ocean', correctCategory: 'COLD' },
      { emoji: '🐋', word: 'Whale', correctCategory: 'COLD' },
      { emoji: '🦈', word: 'Shark', correctCategory: 'COLD' },
      { emoji: '❄️', word: 'Frost', correctCategory: 'COLD' },
      { emoji: '🏒', word: 'Ice Hockey', correctCategory: 'COLD' },
      { emoji: '⛸️', word: 'Ice Skating', correctCategory: 'COLD' },
    ],
  },
  // SET 4: NATURE vs MAN-MADE
  {
    left: 'NATURE',
    right: 'MAN-MADE',
    prompts: [
      // Nature
      { emoji: '🌲', word: 'Tree', correctCategory: 'NATURE' },
      { emoji: '🌸', word: 'Flower', correctCategory: 'NATURE' },
      { emoji: '🌻', word: 'Sunflower', correctCategory: 'NATURE' },
      { emoji: '🌹', word: 'Rose', correctCategory: 'NATURE' },
      { emoji: '🌺', word: 'Hibiscus', correctCategory: 'NATURE' },
      { emoji: '🌷', word: 'Tulip', correctCategory: 'NATURE' },
      { emoji: '🌼', word: 'Blossom', correctCategory: 'NATURE' },
      { emoji: '🍀', word: 'Clover', correctCategory: 'NATURE' },
      { emoji: '🍁', word: 'Maple Leaf', correctCategory: 'NATURE' },
      { emoji: '🍂', word: 'Fallen Leaf', correctCategory: 'NATURE' },
      { emoji: '🍃', word: 'Leaves', correctCategory: 'NATURE' },
      { emoji: '🌿', word: 'Herb', correctCategory: 'NATURE' },
      { emoji: '☘️', word: 'Shamrock', correctCategory: 'NATURE' },
      { emoji: '🌾', word: 'Wheat', correctCategory: 'NATURE' },
      { emoji: '🌵', word: 'Cactus', correctCategory: 'NATURE' },
      { emoji: '🌴', word: 'Palm Tree', correctCategory: 'NATURE' },
      { emoji: '🏔️', word: 'Mountain', correctCategory: 'NATURE' },
      { emoji: '⛰️', word: 'Peak', correctCategory: 'NATURE' },
      { emoji: '🌋', word: 'Volcano', correctCategory: 'NATURE' },
      { emoji: '🏕️', word: 'Forest', correctCategory: 'NATURE' },
      { emoji: '🏞️', word: 'Valley', correctCategory: 'NATURE' },
      { emoji: '🏜️', word: 'Desert', correctCategory: 'NATURE' },
      { emoji: '🏝️', word: 'Island', correctCategory: 'NATURE' },
      { emoji: '🌊', word: 'Wave', correctCategory: 'NATURE' },
      { emoji: '🌅', word: 'Sunrise', correctCategory: 'NATURE' },
      { emoji: '🌄', word: 'Sunset', correctCategory: 'NATURE' },
      { emoji: '🌈', word: 'Rainbow', correctCategory: 'NATURE' },
      { emoji: '⭐', word: 'Star', correctCategory: 'NATURE' },
      { emoji: '🌙', word: 'Moon', correctCategory: 'NATURE' },
      { emoji: '☀️', word: 'Sun', correctCategory: 'NATURE' },
      { emoji: '🌍', word: 'Earth', correctCategory: 'NATURE' },
      { emoji: '💧', word: 'Water Drop', correctCategory: 'NATURE' },
      { emoji: '🔥', word: 'Fire', correctCategory: 'NATURE' },
      { emoji: '💨', word: 'Wind', correctCategory: 'NATURE' },
      { emoji: '⚡', word: 'Lightning', correctCategory: 'NATURE' },
      { emoji: '🌪️', word: 'Tornado', correctCategory: 'NATURE' },
      { emoji: '🌊', word: 'Ocean', correctCategory: 'NATURE' },
      { emoji: '🪨', word: 'Rock', correctCategory: 'NATURE' },
      { emoji: '💎', word: 'Gem', correctCategory: 'NATURE' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'NATURE' },
      // Man-made
      { emoji: '🏠', word: 'House', correctCategory: 'MAN-MADE' },
      { emoji: '🏢', word: 'Building', correctCategory: 'MAN-MADE' },
      { emoji: '🏗️', word: 'Construction', correctCategory: 'MAN-MADE' },
      { emoji: '🏭', word: 'Factory', correctCategory: 'MAN-MADE' },
      { emoji: '🏰', word: 'Castle', correctCategory: 'MAN-MADE' },
      { emoji: '🗼', word: 'Tower', correctCategory: 'MAN-MADE' },
      { emoji: '🗽', word: 'Statue', correctCategory: 'MAN-MADE' },
      { emoji: '⛪', word: 'Church', correctCategory: 'MAN-MADE' },
      { emoji: '🕌', word: 'Mosque', correctCategory: 'MAN-MADE' },
      { emoji: '🛕', word: 'Temple', correctCategory: 'MAN-MADE' },
      { emoji: '🎡', word: 'Ferris Wheel', correctCategory: 'MAN-MADE' },
      { emoji: '🎢', word: 'Roller Coaster', correctCategory: 'MAN-MADE' },
      { emoji: '🎠', word: 'Carousel', correctCategory: 'MAN-MADE' },
      { emoji: '🚗', word: 'Car', correctCategory: 'MAN-MADE' },
      { emoji: '🚌', word: 'Bus', correctCategory: 'MAN-MADE' },
      { emoji: '🚂', word: 'Train', correctCategory: 'MAN-MADE' },
      { emoji: '✈️', word: 'Airplane', correctCategory: 'MAN-MADE' },
      { emoji: '🚀', word: 'Rocket', correctCategory: 'MAN-MADE' },
      { emoji: '🛸', word: 'UFO', correctCategory: 'MAN-MADE' },
      { emoji: '🚢', word: 'Ship', correctCategory: 'MAN-MADE' },
      { emoji: '⛵', word: 'Sailboat', correctCategory: 'MAN-MADE' },
      { emoji: '🚁', word: 'Helicopter', correctCategory: 'MAN-MADE' },
      { emoji: '🛶', word: 'Canoe', correctCategory: 'MAN-MADE' },
      { emoji: '📱', word: 'Phone', correctCategory: 'MAN-MADE' },
      { emoji: '💻', word: 'Laptop', correctCategory: 'MAN-MADE' },
      { emoji: '🖥️', word: 'Desktop', correctCategory: 'MAN-MADE' },
      { emoji: '📺', word: 'Television', correctCategory: 'MAN-MADE' },
      { emoji: '📻', word: 'Radio', correctCategory: 'MAN-MADE' },
      { emoji: '📷', word: 'Camera', correctCategory: 'MAN-MADE' },
      { emoji: '🔭', word: 'Telescope', correctCategory: 'MAN-MADE' },
      { emoji: '🔬', word: 'Microscope', correctCategory: 'MAN-MADE' },
      { emoji: '💊', word: 'Pill', correctCategory: 'MAN-MADE' },
      { emoji: '💉', word: 'Syringe', correctCategory: 'MAN-MADE' },
      { emoji: '🩹', word: 'Bandage', correctCategory: 'MAN-MADE' },
      { emoji: '🪥', word: 'Toothbrush', correctCategory: 'MAN-MADE' },
      { emoji: '🧴', word: 'Lotion', correctCategory: 'MAN-MADE' },
      { emoji: '🧹', word: 'Broom', correctCategory: 'MAN-MADE' },
      { emoji: '🧺', word: 'Basket', correctCategory: 'MAN-MADE' },
      { emoji: '🧻', word: 'Toilet Paper', correctCategory: 'MAN-MADE' },
      { emoji: '🪣', word: 'Bucket', correctCategory: 'MAN-MADE' },
    ],
  },
  // SET 5: FAST vs SLOW
  {
    left: 'FAST',
    right: 'SLOW',
    prompts: [
      // Fast
      { emoji: '🚀', word: 'Rocket', correctCategory: 'FAST' },
      { emoji: '✈️', word: 'Jet', correctCategory: 'FAST' },
      { emoji: '🏎️', word: 'Race Car', correctCategory: 'FAST' },
      { emoji: '🏍️', word: 'Motorcycle', correctCategory: 'FAST' },
      { emoji: '⚡', word: 'Lightning', correctCategory: 'FAST' },
      { emoji: '🐆', word: 'Cheetah', correctCategory: 'FAST' },
      { emoji: '🦅', word: 'Eagle', correctCategory: 'FAST' },
      { emoji: '🐎', word: 'Horse', correctCategory: 'FAST' },
      { emoji: '🐇', word: 'Rabbit', correctCategory: 'FAST' },
      { emoji: '🦊', word: 'Fox', correctCategory: 'FAST' },
      { emoji: '🐕', word: 'Greyhound', correctCategory: 'FAST' },
      { emoji: '🏃', word: 'Sprinter', correctCategory: 'FAST' },
      { emoji: '🚄', word: 'Bullet Train', correctCategory: 'FAST' },
      { emoji: '🚁', word: 'Helicopter', correctCategory: 'FAST' },
      { emoji: '🎿', word: 'Skier', correctCategory: 'FAST' },
      { emoji: '🏂', word: 'Snowboarder', correctCategory: 'FAST' },
      { emoji: '🏊', word: 'Swimmer', correctCategory: 'FAST' },
      { emoji: '🚴', word: 'Cyclist', correctCategory: 'FAST' },
      { emoji: '🎯', word: 'Arrow', correctCategory: 'FAST' },
      { emoji: '💨', word: 'Wind', correctCategory: 'FAST' },
      { emoji: '🌪️', word: 'Tornado', correctCategory: 'FAST' },
      { emoji: '☄️', word: 'Comet', correctCategory: 'FAST' },
      { emoji: '🦇', word: 'Bat', correctCategory: 'FAST' },
      { emoji: '🐬', word: 'Dolphin', correctCategory: 'FAST' },
      { emoji: '🦈', word: 'Shark', correctCategory: 'FAST' },
      { emoji: '🦜', word: 'Parrot', correctCategory: 'FAST' },
      { emoji: '🐝', word: 'Bee', correctCategory: 'FAST' },
      { emoji: '💫', word: 'Shooting Star', correctCategory: 'FAST' },
      { emoji: '🎸', word: 'Speed Metal', correctCategory: 'FAST' },
      { emoji: '⏩', word: 'Fast Forward', correctCategory: 'FAST' },
      // Slow
      { emoji: '🐢', word: 'Turtle', correctCategory: 'SLOW' },
      { emoji: '🦥', word: 'Sloth', correctCategory: 'SLOW' },
      { emoji: '🐌', word: 'Snail', correctCategory: 'SLOW' },
      { emoji: '🐛', word: 'Caterpillar', correctCategory: 'SLOW' },
      { emoji: '🦔', word: 'Hedgehog', correctCategory: 'SLOW' },
      { emoji: '🐘', word: 'Elephant', correctCategory: 'SLOW' },
      { emoji: '🦛', word: 'Hippo', correctCategory: 'SLOW' },
      { emoji: '🐄', word: 'Cow', correctCategory: 'SLOW' },
      { emoji: '🐖', word: 'Pig', correctCategory: 'SLOW' },
      { emoji: '🐑', word: 'Sheep', correctCategory: 'SLOW' },
      { emoji: '🧘', word: 'Meditation', correctCategory: 'SLOW' },
      { emoji: '🚶', word: 'Walking', correctCategory: 'SLOW' },
      { emoji: '🛶', word: 'Canoe', correctCategory: 'SLOW' },
      { emoji: '⛵', word: 'Sailboat', correctCategory: 'SLOW' },
      { emoji: '🚣', word: 'Rowing', correctCategory: 'SLOW' },
      { emoji: '🐪', word: 'Camel', correctCategory: 'SLOW' },
      { emoji: '🦒', word: 'Giraffe', correctCategory: 'SLOW' },
      { emoji: '🐻', word: 'Bear', correctCategory: 'SLOW' },
      { emoji: '🐼', word: 'Panda', correctCategory: 'SLOW' },
      { emoji: '🦦', word: 'Otter', correctCategory: 'SLOW' },
      { emoji: '🌱', word: 'Growing Plant', correctCategory: 'SLOW' },
      { emoji: '🌺', word: 'Blooming', correctCategory: 'SLOW' },
      { emoji: '🧓', word: 'Elder', correctCategory: 'SLOW' },
      { emoji: '🐚', word: 'Seashell', correctCategory: 'SLOW' },
      { emoji: '🪨', word: 'Rock', correctCategory: 'SLOW' },
      { emoji: '🏔️', word: 'Mountain', correctCategory: 'SLOW' },
      { emoji: '🌳', word: 'Old Tree', correctCategory: 'SLOW' },
      { emoji: '⏪', word: 'Slow Mo', correctCategory: 'SLOW' },
      { emoji: '😴', word: 'Sleepy', correctCategory: 'SLOW' },
      { emoji: '🛋️', word: 'Couch Potato', correctCategory: 'SLOW' },
    ],
  },
  // SET 6: HAPPY vs SAD
  {
    left: 'HAPPY',
    right: 'SAD',
    prompts: [
      // Happy
      { emoji: '😀', word: 'Grinning', correctCategory: 'HAPPY' },
      { emoji: '😁', word: 'Beaming', correctCategory: 'HAPPY' },
      { emoji: '😂', word: 'Laughing', correctCategory: 'HAPPY' },
      { emoji: '🤣', word: 'ROFL', correctCategory: 'HAPPY' },
      { emoji: '😃', word: 'Smiley', correctCategory: 'HAPPY' },
      { emoji: '😄', word: 'Happy Face', correctCategory: 'HAPPY' },
      { emoji: '😆', word: 'Glee', correctCategory: 'HAPPY' },
      { emoji: '😊', word: 'Blushing', correctCategory: 'HAPPY' },
      { emoji: '🥰', word: 'In Love', correctCategory: 'HAPPY' },
      { emoji: '😍', word: 'Heart Eyes', correctCategory: 'HAPPY' },
      { emoji: '🤩', word: 'Star Struck', correctCategory: 'HAPPY' },
      { emoji: '🥳', word: 'Party', correctCategory: 'HAPPY' },
      { emoji: '😎', word: 'Cool', correctCategory: 'HAPPY' },
      { emoji: '🎉', word: 'Celebration', correctCategory: 'HAPPY' },
      { emoji: '🎊', word: 'Confetti', correctCategory: 'HAPPY' },
      { emoji: '🎁', word: 'Gift', correctCategory: 'HAPPY' },
      { emoji: '🎂', word: 'Birthday', correctCategory: 'HAPPY' },
      { emoji: '🏆', word: 'Winner', correctCategory: 'HAPPY' },
      { emoji: '🥇', word: 'Gold Medal', correctCategory: 'HAPPY' },
      { emoji: '💯', word: 'Perfect', correctCategory: 'HAPPY' },
      { emoji: '✨', word: 'Sparkles', correctCategory: 'HAPPY' },
      { emoji: '🌈', word: 'Rainbow', correctCategory: 'HAPPY' },
      { emoji: '🌞', word: 'Sunny', correctCategory: 'HAPPY' },
      { emoji: '💖', word: 'Love', correctCategory: 'HAPPY' },
      { emoji: '💕', word: 'Hearts', correctCategory: 'HAPPY' },
      { emoji: '🎵', word: 'Music', correctCategory: 'HAPPY' },
      { emoji: '🎶', word: 'Melody', correctCategory: 'HAPPY' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'HAPPY' },
      { emoji: '🌸', word: 'Cherry Blossom', correctCategory: 'HAPPY' },
      { emoji: '🍀', word: 'Lucky', correctCategory: 'HAPPY' },
      // Sad
      { emoji: '😢', word: 'Crying', correctCategory: 'SAD' },
      { emoji: '😭', word: 'Sobbing', correctCategory: 'SAD' },
      { emoji: '😿', word: 'Sad Cat', correctCategory: 'SAD' },
      { emoji: '😞', word: 'Disappointed', correctCategory: 'SAD' },
      { emoji: '😔', word: 'Pensive', correctCategory: 'SAD' },
      { emoji: '😟', word: 'Worried', correctCategory: 'SAD' },
      { emoji: '😕', word: 'Confused', correctCategory: 'SAD' },
      { emoji: '🙁', word: 'Frowning', correctCategory: 'SAD' },
      { emoji: '☹️', word: 'Sad Face', correctCategory: 'SAD' },
      { emoji: '😣', word: 'Persevering', correctCategory: 'SAD' },
      { emoji: '😖', word: 'Confounded', correctCategory: 'SAD' },
      { emoji: '😫', word: 'Tired', correctCategory: 'SAD' },
      { emoji: '😩', word: 'Weary', correctCategory: 'SAD' },
      { emoji: '🥺', word: 'Pleading', correctCategory: 'SAD' },
      { emoji: '😰', word: 'Anxious', correctCategory: 'SAD' },
      { emoji: '😥', word: 'Sad Sweat', correctCategory: 'SAD' },
      { emoji: '💔', word: 'Broken Heart', correctCategory: 'SAD' },
      { emoji: '🖤', word: 'Black Heart', correctCategory: 'SAD' },
      { emoji: '🌧️', word: 'Rainy', correctCategory: 'SAD' },
      { emoji: '⛈️', word: 'Stormy', correctCategory: 'SAD' },
      { emoji: '🥀', word: 'Wilted', correctCategory: 'SAD' },
      { emoji: '🍂', word: 'Fallen Leaves', correctCategory: 'SAD' },
      { emoji: '🌑', word: 'Dark Moon', correctCategory: 'SAD' },
      { emoji: '👻', word: 'Ghost', correctCategory: 'SAD' },
      { emoji: '💀', word: 'Skull', correctCategory: 'SAD' },
      { emoji: '⚰️', word: 'Coffin', correctCategory: 'SAD' },
      { emoji: '🪦', word: 'Gravestone', correctCategory: 'SAD' },
      { emoji: '😤', word: 'Frustrated', correctCategory: 'SAD' },
      { emoji: '🤕', word: 'Hurt', correctCategory: 'SAD' },
      { emoji: '🤒', word: 'Sick', correctCategory: 'SAD' },
    ],
  },
  // SET 7: SKY vs GROUND
  {
    left: 'SKY',
    right: 'GROUND',
    prompts: [
      // Sky
      { emoji: '☀️', word: 'Sun', correctCategory: 'SKY' },
      { emoji: '🌙', word: 'Moon', correctCategory: 'SKY' },
      { emoji: '⭐', word: 'Star', correctCategory: 'SKY' },
      { emoji: '🌟', word: 'Glowing Star', correctCategory: 'SKY' },
      { emoji: '✨', word: 'Sparkles', correctCategory: 'SKY' },
      { emoji: '☁️', word: 'Cloud', correctCategory: 'SKY' },
      { emoji: '⛅', word: 'Partly Cloudy', correctCategory: 'SKY' },
      { emoji: '🌤️', word: 'Sunny Cloud', correctCategory: 'SKY' },
      { emoji: '🌥️', word: 'Overcast', correctCategory: 'SKY' },
      { emoji: '🌦️', word: 'Rainy Sun', correctCategory: 'SKY' },
      { emoji: '🌧️', word: 'Rainy', correctCategory: 'SKY' },
      { emoji: '⛈️', word: 'Thunder', correctCategory: 'SKY' },
      { emoji: '🌩️', word: 'Lightning', correctCategory: 'SKY' },
      { emoji: '🌨️', word: 'Snowy', correctCategory: 'SKY' },
      { emoji: '🌈', word: 'Rainbow', correctCategory: 'SKY' },
      { emoji: '✈️', word: 'Airplane', correctCategory: 'SKY' },
      { emoji: '🚀', word: 'Rocket', correctCategory: 'SKY' },
      { emoji: '🛸', word: 'UFO', correctCategory: 'SKY' },
      { emoji: '🚁', word: 'Helicopter', correctCategory: 'SKY' },
      { emoji: '🎈', word: 'Balloon', correctCategory: 'SKY' },
      { emoji: '🪁', word: 'Kite', correctCategory: 'SKY' },
      { emoji: '🦅', word: 'Eagle', correctCategory: 'SKY' },
      { emoji: '🦆', word: 'Duck', correctCategory: 'SKY' },
      { emoji: '🦢', word: 'Swan', correctCategory: 'SKY' },
      { emoji: '🦜', word: 'Parrot', correctCategory: 'SKY' },
      { emoji: '🦇', word: 'Bat', correctCategory: 'SKY' },
      { emoji: '🐝', word: 'Bee', correctCategory: 'SKY' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'SKY' },
      { emoji: '🌬️', word: 'Wind', correctCategory: 'SKY' },
      { emoji: '☄️', word: 'Comet', correctCategory: 'SKY' },
      // Ground
      { emoji: '🌍', word: 'Earth', correctCategory: 'GROUND' },
      { emoji: '🏔️', word: 'Mountain', correctCategory: 'GROUND' },
      { emoji: '⛰️', word: 'Peak', correctCategory: 'GROUND' },
      { emoji: '🌋', word: 'Volcano', correctCategory: 'GROUND' },
      { emoji: '🏜️', word: 'Desert', correctCategory: 'GROUND' },
      { emoji: '🏝️', word: 'Island', correctCategory: 'GROUND' },
      { emoji: '🏞️', word: 'Valley', correctCategory: 'GROUND' },
      { emoji: '🌲', word: 'Tree', correctCategory: 'GROUND' },
      { emoji: '🌳', word: 'Oak', correctCategory: 'GROUND' },
      { emoji: '🌴', word: 'Palm', correctCategory: 'GROUND' },
      { emoji: '🌵', word: 'Cactus', correctCategory: 'GROUND' },
      { emoji: '🌾', word: 'Wheat', correctCategory: 'GROUND' },
      { emoji: '🌿', word: 'Herb', correctCategory: 'GROUND' },
      { emoji: '🍀', word: 'Clover', correctCategory: 'GROUND' },
      { emoji: '🪨', word: 'Rock', correctCategory: 'GROUND' },
      { emoji: '🏠', word: 'House', correctCategory: 'GROUND' },
      { emoji: '🏢', word: 'Building', correctCategory: 'GROUND' },
      { emoji: '🏰', word: 'Castle', correctCategory: 'GROUND' },
      { emoji: '🚗', word: 'Car', correctCategory: 'GROUND' },
      { emoji: '🚂', word: 'Train', correctCategory: 'GROUND' },
      { emoji: '🚌', word: 'Bus', correctCategory: 'GROUND' },
      { emoji: '🐕', word: 'Dog', correctCategory: 'GROUND' },
      { emoji: '🐈', word: 'Cat', correctCategory: 'GROUND' },
      { emoji: '🐘', word: 'Elephant', correctCategory: 'GROUND' },
      { emoji: '🦁', word: 'Lion', correctCategory: 'GROUND' },
      { emoji: '🐢', word: 'Turtle', correctCategory: 'GROUND' },
      { emoji: '🐍', word: 'Snake', correctCategory: 'GROUND' },
      { emoji: '🐜', word: 'Ant', correctCategory: 'GROUND' },
      { emoji: '🌊', word: 'Ocean', correctCategory: 'GROUND' },
      { emoji: '🏖️', word: 'Beach', correctCategory: 'GROUND' },
    ],
  },
  // SET 8: BIG vs SMALL
  {
    left: 'BIG',
    right: 'SMALL',
    prompts: [
      // Big
      { emoji: '🐘', word: 'Elephant', correctCategory: 'BIG' },
      { emoji: '🐋', word: 'Whale', correctCategory: 'BIG' },
      { emoji: '🦕', word: 'Dinosaur', correctCategory: 'BIG' },
      { emoji: '🦖', word: 'T-Rex', correctCategory: 'BIG' },
      { emoji: '🦒', word: 'Giraffe', correctCategory: 'BIG' },
      { emoji: '🦛', word: 'Hippo', correctCategory: 'BIG' },
      { emoji: '🦏', word: 'Rhino', correctCategory: 'BIG' },
      { emoji: '🐻', word: 'Bear', correctCategory: 'BIG' },
      { emoji: '🦁', word: 'Lion', correctCategory: 'BIG' },
      { emoji: '🐯', word: 'Tiger', correctCategory: 'BIG' },
      { emoji: '🦈', word: 'Shark', correctCategory: 'BIG' },
      { emoji: '🐊', word: 'Crocodile', correctCategory: 'BIG' },
      { emoji: '🏔️', word: 'Mountain', correctCategory: 'BIG' },
      { emoji: '🌋', word: 'Volcano', correctCategory: 'BIG' },
      { emoji: '🌊', word: 'Wave', correctCategory: 'BIG' },
      { emoji: '🏢', word: 'Skyscraper', correctCategory: 'BIG' },
      { emoji: '🏰', word: 'Castle', correctCategory: 'BIG' },
      { emoji: '✈️', word: 'Airplane', correctCategory: 'BIG' },
      { emoji: '🚢', word: 'Ship', correctCategory: 'BIG' },
      { emoji: '🚂', word: 'Train', correctCategory: 'BIG' },
      { emoji: '🚀', word: 'Rocket', correctCategory: 'BIG' },
      { emoji: '🌍', word: 'Earth', correctCategory: 'BIG' },
      { emoji: '☀️', word: 'Sun', correctCategory: 'BIG' },
      { emoji: '🌙', word: 'Moon', correctCategory: 'BIG' },
      { emoji: '🌲', word: 'Giant Tree', correctCategory: 'BIG' },
      { emoji: '🎡', word: 'Ferris Wheel', correctCategory: 'BIG' },
      { emoji: '🗽', word: 'Statue', correctCategory: 'BIG' },
      { emoji: '🌉', word: 'Bridge', correctCategory: 'BIG' },
      { emoji: '🐪', word: 'Camel', correctCategory: 'BIG' },
      { emoji: '🦬', word: 'Bison', correctCategory: 'BIG' },
      // Small
      { emoji: '🐜', word: 'Ant', correctCategory: 'SMALL' },
      { emoji: '🐝', word: 'Bee', correctCategory: 'SMALL' },
      { emoji: '🐛', word: 'Bug', correctCategory: 'SMALL' },
      { emoji: '🦗', word: 'Cricket', correctCategory: 'SMALL' },
      { emoji: '🐞', word: 'Ladybug', correctCategory: 'SMALL' },
      { emoji: '🦟', word: 'Mosquito', correctCategory: 'SMALL' },
      { emoji: '🪰', word: 'Fly', correctCategory: 'SMALL' },
      { emoji: '🪲', word: 'Beetle', correctCategory: 'SMALL' },
      { emoji: '🐌', word: 'Snail', correctCategory: 'SMALL' },
      { emoji: '🐁', word: 'Mouse', correctCategory: 'SMALL' },
      { emoji: '🦔', word: 'Hedgehog', correctCategory: 'SMALL' },
      { emoji: '🐿️', word: 'Squirrel', correctCategory: 'SMALL' },
      { emoji: '🐣', word: 'Chick', correctCategory: 'SMALL' },
      { emoji: '🐥', word: 'Baby Chick', correctCategory: 'SMALL' },
      { emoji: '🦎', word: 'Lizard', correctCategory: 'SMALL' },
      { emoji: '🍓', word: 'Strawberry', correctCategory: 'SMALL' },
      { emoji: '🍒', word: 'Cherry', correctCategory: 'SMALL' },
      { emoji: '🫐', word: 'Blueberry', correctCategory: 'SMALL' },
      { emoji: '🥜', word: 'Peanut', correctCategory: 'SMALL' },
      { emoji: '💎', word: 'Gem', correctCategory: 'SMALL' },
      { emoji: '💊', word: 'Pill', correctCategory: 'SMALL' },
      { emoji: '🔑', word: 'Key', correctCategory: 'SMALL' },
      { emoji: '💍', word: 'Ring', correctCategory: 'SMALL' },
      { emoji: '🪙', word: 'Coin', correctCategory: 'SMALL' },
      { emoji: '📎', word: 'Paperclip', correctCategory: 'SMALL' },
      { emoji: '🧷', word: 'Safety Pin', correctCategory: 'SMALL' },
      { emoji: '🔩', word: 'Nut & Bolt', correctCategory: 'SMALL' },
      { emoji: '🧲', word: 'Magnet', correctCategory: 'SMALL' },
      { emoji: '🎲', word: 'Dice', correctCategory: 'SMALL' },
      { emoji: '🔮', word: 'Crystal Ball', correctCategory: 'SMALL' },
    ],
  },
  // SET 9: LOUD vs QUIET
  {
    left: 'LOUD',
    right: 'QUIET',
    prompts: [
      // Loud
      { emoji: '🔊', word: 'Speaker', correctCategory: 'LOUD' },
      { emoji: '📢', word: 'Megaphone', correctCategory: 'LOUD' },
      { emoji: '🎸', word: 'Electric Guitar', correctCategory: 'LOUD' },
      { emoji: '🥁', word: 'Drums', correctCategory: 'LOUD' },
      { emoji: '🎺', word: 'Trumpet', correctCategory: 'LOUD' },
      { emoji: '🎷', word: 'Saxophone', correctCategory: 'LOUD' },
      { emoji: '⚡', word: 'Thunder', correctCategory: 'LOUD' },
      { emoji: '💥', word: 'Explosion', correctCategory: 'LOUD' },
      { emoji: '🧨', word: 'Firecracker', correctCategory: 'LOUD' },
      { emoji: '🎆', word: 'Fireworks', correctCategory: 'LOUD' },
      { emoji: '🚨', word: 'Siren', correctCategory: 'LOUD' },
      { emoji: '🚒', word: 'Fire Truck', correctCategory: 'LOUD' },
      { emoji: '🚑', word: 'Ambulance', correctCategory: 'LOUD' },
      { emoji: '✈️', word: 'Jet Engine', correctCategory: 'LOUD' },
      { emoji: '🚂', word: 'Train Horn', correctCategory: 'LOUD' },
      { emoji: '🏎️', word: 'Race Car', correctCategory: 'LOUD' },
      { emoji: '🦁', word: 'Roaring Lion', correctCategory: 'LOUD' },
      { emoji: '🐕', word: 'Barking Dog', correctCategory: 'LOUD' },
      { emoji: '🐓', word: 'Rooster', correctCategory: 'LOUD' },
      { emoji: '👶', word: 'Crying Baby', correctCategory: 'LOUD' },
      { emoji: '🎤', word: 'Karaoke', correctCategory: 'LOUD' },
      { emoji: '🎉', word: 'Party', correctCategory: 'LOUD' },
      { emoji: '📯', word: 'Postal Horn', correctCategory: 'LOUD' },
      { emoji: '🔔', word: 'Bell', correctCategory: 'LOUD' },
      { emoji: '⏰', word: 'Alarm', correctCategory: 'LOUD' },
      { emoji: '🌩️', word: 'Thunderstorm', correctCategory: 'LOUD' },
      { emoji: '🌋', word: 'Erupting Volcano', correctCategory: 'LOUD' },
      { emoji: '🐘', word: 'Trumpeting', correctCategory: 'LOUD' },
      { emoji: '🎊', word: 'Celebration', correctCategory: 'LOUD' },
      { emoji: '📣', word: 'Cheering', correctCategory: 'LOUD' },
      // Quiet
      { emoji: '🤫', word: 'Shushing', correctCategory: 'QUIET' },
      { emoji: '😴', word: 'Sleeping', correctCategory: 'QUIET' },
      { emoji: '🌙', word: 'Night', correctCategory: 'QUIET' },
      { emoji: '📚', word: 'Library', correctCategory: 'QUIET' },
      { emoji: '🧘', word: 'Meditation', correctCategory: 'QUIET' },
      { emoji: '🦢', word: 'Swan', correctCategory: 'QUIET' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'QUIET' },
      { emoji: '🐌', word: 'Snail', correctCategory: 'QUIET' },
      { emoji: '🐢', word: 'Turtle', correctCategory: 'QUIET' },
      { emoji: '🐠', word: 'Fish', correctCategory: 'QUIET' },
      { emoji: '🦥', word: 'Sloth', correctCategory: 'QUIET' },
      { emoji: '🐈', word: 'Cat', correctCategory: 'QUIET' },
      { emoji: '🐇', word: 'Rabbit', correctCategory: 'QUIET' },
      { emoji: '🦔', word: 'Hedgehog', correctCategory: 'QUIET' },
      { emoji: '🕯️', word: 'Candle', correctCategory: 'QUIET' },
      { emoji: '☁️', word: 'Cloud', correctCategory: 'QUIET' },
      { emoji: '❄️', word: 'Snowfall', correctCategory: 'QUIET' },
      { emoji: '🌸', word: 'Blossom', correctCategory: 'QUIET' },
      { emoji: '🍃', word: 'Rustling Leaf', correctCategory: 'QUIET' },
      { emoji: '🌊', word: 'Calm Waves', correctCategory: 'QUIET' },
      { emoji: '🎻', word: 'Soft Violin', correctCategory: 'QUIET' },
      { emoji: '🎹', word: 'Piano', correctCategory: 'QUIET' },
      { emoji: '📖', word: 'Reading', correctCategory: 'QUIET' },
      { emoji: '✍️', word: 'Writing', correctCategory: 'QUIET' },
      { emoji: '🖼️', word: 'Museum', correctCategory: 'QUIET' },
      { emoji: '🏥', word: 'Hospital', correctCategory: 'QUIET' },
      { emoji: '🛏️', word: 'Bedroom', correctCategory: 'QUIET' },
      { emoji: '🧸', word: 'Stuffed Animal', correctCategory: 'QUIET' },
      { emoji: '🔇', word: 'Muted', correctCategory: 'QUIET' },
      { emoji: '🤐', word: 'Zipped Lips', correctCategory: 'QUIET' },
    ],
  },
  // SET 10: SWEET vs SOUR
  {
    left: 'SWEET',
    right: 'SOUR',
    prompts: [
      // Sweet
      { emoji: '🍬', word: 'Candy', correctCategory: 'SWEET' },
      { emoji: '🍭', word: 'Lollipop', correctCategory: 'SWEET' },
      { emoji: '🍫', word: 'Chocolate', correctCategory: 'SWEET' },
      { emoji: '🍩', word: 'Donut', correctCategory: 'SWEET' },
      { emoji: '🍰', word: 'Cake', correctCategory: 'SWEET' },
      { emoji: '🧁', word: 'Cupcake', correctCategory: 'SWEET' },
      { emoji: '🍪', word: 'Cookie', correctCategory: 'SWEET' },
      { emoji: '🍦', word: 'Ice Cream', correctCategory: 'SWEET' },
      { emoji: '🍨', word: 'Sundae', correctCategory: 'SWEET' },
      { emoji: '🎂', word: 'Birthday Cake', correctCategory: 'SWEET' },
      { emoji: '🍯', word: 'Honey', correctCategory: 'SWEET' },
      { emoji: '🍌', word: 'Banana', correctCategory: 'SWEET' },
      { emoji: '🍇', word: 'Grapes', correctCategory: 'SWEET' },
      { emoji: '🍓', word: 'Strawberry', correctCategory: 'SWEET' },
      { emoji: '🍑', word: 'Peach', correctCategory: 'SWEET' },
      { emoji: '🥭', word: 'Mango', correctCategory: 'SWEET' },
      { emoji: '🍍', word: 'Pineapple', correctCategory: 'SWEET' },
      { emoji: '🍎', word: 'Apple', correctCategory: 'SWEET' },
      { emoji: '🍉', word: 'Watermelon', correctCategory: 'SWEET' },
      { emoji: '🍒', word: 'Cherry', correctCategory: 'SWEET' },
      { emoji: '🥧', word: 'Pie', correctCategory: 'SWEET' },
      { emoji: '🍮', word: 'Pudding', correctCategory: 'SWEET' },
      { emoji: '🍡', word: 'Dango', correctCategory: 'SWEET' },
      { emoji: '🧇', word: 'Waffle', correctCategory: 'SWEET' },
      { emoji: '🥞', word: 'Pancakes', correctCategory: 'SWEET' },
      { emoji: '🥐', word: 'Croissant', correctCategory: 'SWEET' },
      { emoji: '🧋', word: 'Boba Tea', correctCategory: 'SWEET' },
      { emoji: '🥤', word: 'Soda', correctCategory: 'SWEET' },
      { emoji: '🍿', word: 'Caramel Corn', correctCategory: 'SWEET' },
      { emoji: '🫐', word: 'Blueberry', correctCategory: 'SWEET' },
      // Sour
      { emoji: '🍋', word: 'Lemon', correctCategory: 'SOUR' },
      { emoji: '🍊', word: 'Orange', correctCategory: 'SOUR' },
      { emoji: '🥝', word: 'Kiwi', correctCategory: 'SOUR' },
      { emoji: '🍏', word: 'Green Apple', correctCategory: 'SOUR' },
      { emoji: '🥒', word: 'Pickle', correctCategory: 'SOUR' },
      { emoji: '🫒', word: 'Olive', correctCategory: 'SOUR' },
      { emoji: '🍅', word: 'Tomato', correctCategory: 'SOUR' },
      { emoji: '🥫', word: 'Vinegar', correctCategory: 'SOUR' },
      { emoji: '🍶', word: 'Sake', correctCategory: 'SOUR' },
      { emoji: '🍸', word: 'Cocktail', correctCategory: 'SOUR' },
      { emoji: '🫗', word: 'Lemon Juice', correctCategory: 'SOUR' },
      { emoji: '🍐', word: 'Unripe Pear', correctCategory: 'SOUR' },
      { emoji: '😖', word: 'Sour Face', correctCategory: 'SOUR' },
      { emoji: '😝', word: 'Tongue Out', correctCategory: 'SOUR' },
      { emoji: '🤢', word: 'Nauseated', correctCategory: 'SOUR' },
      { emoji: '🥴', word: 'Woozy', correctCategory: 'SOUR' },
      { emoji: '🧅', word: 'Raw Onion', correctCategory: 'SOUR' },
      { emoji: '🧄', word: 'Garlic', correctCategory: 'SOUR' },
      { emoji: '🌶️', word: 'Hot Pepper', correctCategory: 'SOUR' },
      { emoji: '🫑', word: 'Bell Pepper', correctCategory: 'SOUR' },
      { emoji: '🥗', word: 'Salad', correctCategory: 'SOUR' },
      { emoji: '🍜', word: 'Sour Soup', correctCategory: 'SOUR' },
      { emoji: '🥟', word: 'Dumpling', correctCategory: 'SOUR' },
      { emoji: '🍣', word: 'Sashimi', correctCategory: 'SOUR' },
      { emoji: '🦐', word: 'Shrimp', correctCategory: 'SOUR' },
      { emoji: '🦪', word: 'Oyster', correctCategory: 'SOUR' },
      { emoji: '🧀', word: 'Sharp Cheese', correctCategory: 'SOUR' },
      { emoji: '🥛', word: 'Buttermilk', correctCategory: 'SOUR' },
      { emoji: '🍺', word: 'Sour Beer', correctCategory: 'SOUR' },
      { emoji: '🍷', word: 'Dry Wine', correctCategory: 'SOUR' },
    ],
  },
];

interface GameSandboxProps {
  isFullscreen?: boolean;
}

const GameSandbox: FC<GameSandboxProps> = ({ isFullscreen = false }) => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'over'>('menu');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [promptY, setPromptY] = useState(0);
  const [categorySetIndex, setCategorySetIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shake, setShake] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [combo, setCombo] = useState(0);
  const [highScore, setHighScore] = useState(0);
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
      setCombo(prev => prev + 1);
      const comboBonus = Math.floor(combo / 5) * 5;
      setScore(prev => {
        const newScore = prev + 10 + comboBonus;
        if (newScore % 50 === 0 && newScore > 0) {
          setSpeed(s => Math.min(s + 0.5, 8));
          setCategorySetIndex(i => i + 1);
        }
        return newScore;
      });
      setFeedback('correct');
    } else {
      setCombo(0);
      livesRef.current -= 1;
      setLives(livesRef.current);
      setFeedback('wrong');
      setShake(true);
      setTimeout(() => setShake(false), 300);

      if (livesRef.current <= 0) {
        setHighScore(prev => Math.max(prev, score));
        setGameState('over');
        return;
      }
    }

    setTimeout(() => setFeedback(null), 150);
    spawnNewPrompt();
  }, [gameState, currentCategorySet, spawnNewPrompt, combo, score]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setPromptY(prev => {
        const newY = prev + speed;
        if (newY > 80) {
          setCombo(0);
          livesRef.current -= 1;
          setLives(livesRef.current);
          setFeedback('wrong');
          setShake(true);
          setTimeout(() => setShake(false), 300);
          setTimeout(() => setFeedback(null), 150);

          if (livesRef.current <= 0) {
            setHighScore(prev => Math.max(prev, score));
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
  }, [gameState, speed, spawnNewPrompt, score]);

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
    setSpeed(2);
    setCombo(0);
    setCategorySetIndex(Math.floor(Math.random() * CATEGORY_SETS.length));
    setGameState('playing');
    spawnNewPrompt();
  };

  // Menu screen
  if (gameState === 'menu') {
    return (
      <div className={`flex h-full w-full flex-col items-center justify-center gap-4 text-center ${isFullscreen ? 'gap-6' : ''}`}>
        <div className={`${isFullscreen ? 'text-8xl' : 'text-4xl'}`}>🧠</div>
        <h1 className={`bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-bold text-transparent ${isFullscreen ? 'text-5xl' : 'text-2xl'}`}>
          PROMPT PANIC
        </h1>
        <p className={`text-slate-400 px-4 ${isFullscreen ? 'text-lg max-w-xl' : 'text-xs'}`}>
          You ARE the AI! Sort falling prompts into the correct categories before your context window overflows!
        </p>
        <div className={`mt-2 text-slate-500 ${isFullscreen ? 'text-base' : 'text-xs'}`}>
          <p>Swipe or tap left/right</p>
          <p>+10 points per correct (+ combo bonus!)</p>
          <p>3 lives total • 10 category sets</p>
          {highScore > 0 && <p className="text-cyan-400 mt-2">High Score: {highScore}</p>}
        </div>
        <button
          onClick={startGame}
          className={`mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${
            isFullscreen ? 'px-12 py-4 text-xl' : 'px-8 py-3'
          }`}
        >
          START
        </button>
      </div>
    );
  }

  // Game over screen
  if (gameState === 'over') {
    return (
      <div className={`flex h-full w-full flex-col items-center justify-center gap-4 text-center ${isFullscreen ? 'gap-6' : ''}`}>
        <div className={`${isFullscreen ? 'text-8xl' : 'text-4xl'}`}>💥</div>
        <h2 className={`font-bold text-red-400 ${isFullscreen ? 'text-4xl' : 'text-2xl'}`}>CONTEXT OVERFLOW!</h2>
        <p className={`text-slate-400 ${isFullscreen ? 'text-lg' : ''}`}>Your AI brain could not keep up</p>
        <div className="my-4">
          <p className={`text-slate-500 ${isFullscreen ? 'text-lg' : 'text-sm'}`}>Final Score</p>
          <p className={`font-bold text-cyan-400 ${isFullscreen ? 'text-6xl' : 'text-4xl'}`}>{score}</p>
          {score >= highScore && score > 0 && (
            <p className={`text-yellow-400 mt-2 ${isFullscreen ? 'text-lg' : 'text-sm'}`}>NEW HIGH SCORE!</p>
          )}
        </div>
        <button
          onClick={startGame}
          className={`rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${
            isFullscreen ? 'px-12 py-4 text-xl' : 'px-8 py-3'
          }`}
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
      className="relative flex h-full w-full flex-col select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      style={{
        animation: shake ? 'shake 0.3s ease-in-out' : undefined,
      }}
    >
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes bounce {
          0%, 100% { transform: scale(1) translateX(-50%); }
          50% { transform: scale(1.2) translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      {/* HUD */}
      <div className={`flex w-full items-center justify-between px-2 py-1 ${isFullscreen ? 'px-4 py-2' : ''}`}>
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`${isFullscreen ? 'text-2xl' : 'text-lg'} ${i < lives ? 'opacity-100' : 'opacity-30'}`}>
              ❤️
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {combo >= 3 && (
            <span className={`text-yellow-400 font-bold ${isFullscreen ? 'text-lg' : 'text-xs'}`} style={{ animation: 'pulse 0.5s infinite' }}>
              🔥 x{combo}
            </span>
          )}
          <div className={`rounded-full bg-white/10 ${isFullscreen ? 'px-4 py-2' : 'px-3 py-1'}`}>
            <span className={`font-bold text-cyan-400 ${isFullscreen ? 'text-xl' : 'text-sm'}`}>{score}</span>
          </div>
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
            className={`absolute left-1/2 -translate-x-1/2 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg border border-white/10 transition-all duration-50 ${
              isFullscreen ? 'px-8 py-6' : 'px-4 py-3'
            } ${feedback === 'correct' ? 'scale-110' : ''}`}
            style={{
              top: `${promptY}%`,
              animation: feedback === 'correct' ? 'bounce 0.15s ease-out' : undefined,
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <span className={`${isFullscreen ? 'text-6xl' : 'text-3xl'}`}>{currentPrompt.emoji}</span>
              <span className={`font-semibold text-white ${isFullscreen ? 'text-xl' : 'text-sm'}`}>{currentPrompt.word}</span>
            </div>
          </div>
        )}

        {/* Visual hint arrows */}
        <div className={`absolute inset-0 flex items-center justify-between pointer-events-none opacity-20 ${isFullscreen ? 'px-8' : 'px-2'}`}>
          <span className={`${isFullscreen ? 'text-5xl' : 'text-2xl'}`}>👈</span>
          <span className={`${isFullscreen ? 'text-5xl' : 'text-2xl'}`}>👉</span>
        </div>
      </div>

      {/* Category Bins */}
      <div className={`flex w-full gap-2 ${isFullscreen ? 'p-4 gap-4' : 'p-2'}`}>
        <div className={`flex-1 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 text-center shadow-lg ${isFullscreen ? 'py-6' : 'py-3'}`}>
          <span className={`font-bold text-white ${isFullscreen ? 'text-xl' : 'text-xs'}`}>{currentCategorySet.left}</span>
        </div>
        <div className={`flex-1 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-center shadow-lg ${isFullscreen ? 'py-6' : 'py-3'}`}>
          <span className={`font-bold text-white ${isFullscreen ? 'text-xl' : 'text-xs'}`}>{currentCategorySet.right}</span>
        </div>
      </div>

      {/* Level indicator */}
      <div className="flex justify-center pb-1">
        <span className={`text-slate-500 ${isFullscreen ? 'text-sm' : 'text-[10px]'}`}>
          Set {(categorySetIndex % CATEGORY_SETS.length) + 1}/{CATEGORY_SETS.length} | Speed: {speed.toFixed(1)}
        </span>
      </div>
    </div>
  );
};
