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
        {/* FULLSCREEN BUTTON - MORE VISIBLE */}
        <button
          onClick={toggleFullscreen}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-purple-500/50 active:scale-95"
        >
          {isFullscreen ? (
            <>
              <span className="text-lg">✕</span>
              <span>EXIT</span>
            </>
          ) : (
            <>
              <span className="text-lg">⛶</span>
              <span>FULLSCREEN</span>
            </>
          )}
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
          <span>Scrolly GameJam v{pkg.version}</span>
        </footer>
      )}
    </div>
  );
};

// ============================================================================
// PROMPT PANIC - LOGICAL CATEGORY DATASETS
// Each item ONLY belongs to categories that make sense!
// ============================================================================

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
  // ============================================================================
  // SET 1: FOOD vs NOT FOOD - Classic and clear
  // ============================================================================
  {
    left: 'FOOD',
    right: 'NOT FOOD',
    prompts: [
      // FOOD - Things you eat
      { emoji: '🍕', word: 'Pizza', correctCategory: 'FOOD' },
      { emoji: '🍔', word: 'Burger', correctCategory: 'FOOD' },
      { emoji: '🍟', word: 'Fries', correctCategory: 'FOOD' },
      { emoji: '🌭', word: 'Hot Dog', correctCategory: 'FOOD' },
      { emoji: '🍿', word: 'Popcorn', correctCategory: 'FOOD' },
      { emoji: '🥓', word: 'Bacon', correctCategory: 'FOOD' },
      { emoji: '🍳', word: 'Eggs', correctCategory: 'FOOD' },
      { emoji: '🥞', word: 'Pancakes', correctCategory: 'FOOD' },
      { emoji: '🧇', word: 'Waffle', correctCategory: 'FOOD' },
      { emoji: '🥐', word: 'Croissant', correctCategory: 'FOOD' },
      { emoji: '🍞', word: 'Bread', correctCategory: 'FOOD' },
      { emoji: '🥖', word: 'Baguette', correctCategory: 'FOOD' },
      { emoji: '🥨', word: 'Pretzel', correctCategory: 'FOOD' },
      { emoji: '🧀', word: 'Cheese', correctCategory: 'FOOD' },
      { emoji: '🍖', word: 'Meat', correctCategory: 'FOOD' },
      { emoji: '🍗', word: 'Chicken', correctCategory: 'FOOD' },
      { emoji: '🥩', word: 'Steak', correctCategory: 'FOOD' },
      { emoji: '🌮', word: 'Taco', correctCategory: 'FOOD' },
      { emoji: '🌯', word: 'Burrito', correctCategory: 'FOOD' },
      { emoji: '🥪', word: 'Sandwich', correctCategory: 'FOOD' },
      { emoji: '🍜', word: 'Ramen', correctCategory: 'FOOD' },
      { emoji: '🍝', word: 'Spaghetti', correctCategory: 'FOOD' },
      { emoji: '🍛', word: 'Curry', correctCategory: 'FOOD' },
      { emoji: '🍣', word: 'Sushi', correctCategory: 'FOOD' },
      { emoji: '🍱', word: 'Bento', correctCategory: 'FOOD' },
      { emoji: '🥟', word: 'Dumpling', correctCategory: 'FOOD' },
      { emoji: '🍤', word: 'Tempura', correctCategory: 'FOOD' },
      { emoji: '🍚', word: 'Rice', correctCategory: 'FOOD' },
      { emoji: '🥗', word: 'Salad', correctCategory: 'FOOD' },
      { emoji: '🍰', word: 'Cake', correctCategory: 'FOOD' },
      { emoji: '🧁', word: 'Cupcake', correctCategory: 'FOOD' },
      { emoji: '🍩', word: 'Donut', correctCategory: 'FOOD' },
      { emoji: '🍪', word: 'Cookie', correctCategory: 'FOOD' },
      { emoji: '🍫', word: 'Chocolate', correctCategory: 'FOOD' },
      { emoji: '🍬', word: 'Candy', correctCategory: 'FOOD' },
      { emoji: '🍭', word: 'Lollipop', correctCategory: 'FOOD' },
      { emoji: '🍦', word: 'Ice Cream', correctCategory: 'FOOD' },
      { emoji: '🍨', word: 'Sundae', correctCategory: 'FOOD' },
      { emoji: '🍯', word: 'Honey', correctCategory: 'FOOD' },
      { emoji: '🍎', word: 'Apple', correctCategory: 'FOOD' },
      { emoji: '🍌', word: 'Banana', correctCategory: 'FOOD' },
      { emoji: '🍇', word: 'Grapes', correctCategory: 'FOOD' },
      { emoji: '🍓', word: 'Strawberry', correctCategory: 'FOOD' },
      { emoji: '🍑', word: 'Peach', correctCategory: 'FOOD' },
      { emoji: '🍒', word: 'Cherry', correctCategory: 'FOOD' },
      { emoji: '🍉', word: 'Watermelon', correctCategory: 'FOOD' },
      { emoji: '🍊', word: 'Orange', correctCategory: 'FOOD' },
      { emoji: '🍋', word: 'Lemon', correctCategory: 'FOOD' },
      { emoji: '🍍', word: 'Pineapple', correctCategory: 'FOOD' },
      { emoji: '🥭', word: 'Mango', correctCategory: 'FOOD' },
      { emoji: '🥕', word: 'Carrot', correctCategory: 'FOOD' },
      { emoji: '🥔', word: 'Potato', correctCategory: 'FOOD' },
      { emoji: '🌽', word: 'Corn', correctCategory: 'FOOD' },
      { emoji: '🥦', word: 'Broccoli', correctCategory: 'FOOD' },
      { emoji: '🥬', word: 'Lettuce', correctCategory: 'FOOD' },
      { emoji: '🥒', word: 'Cucumber', correctCategory: 'FOOD' },
      { emoji: '🍄', word: 'Mushroom', correctCategory: 'FOOD' },
      { emoji: '🧅', word: 'Onion', correctCategory: 'FOOD' },
      { emoji: '🧄', word: 'Garlic', correctCategory: 'FOOD' },
      { emoji: '🥑', word: 'Avocado', correctCategory: 'FOOD' },
      // NOT FOOD - Objects, animals, things you dont eat
      { emoji: '🚗', word: 'Car', correctCategory: 'NOT FOOD' },
      { emoji: '🚕', word: 'Taxi', correctCategory: 'NOT FOOD' },
      { emoji: '🚌', word: 'Bus', correctCategory: 'NOT FOOD' },
      { emoji: '🚂', word: 'Train', correctCategory: 'NOT FOOD' },
      { emoji: '✈️', word: 'Airplane', correctCategory: 'NOT FOOD' },
      { emoji: '🚀', word: 'Rocket', correctCategory: 'NOT FOOD' },
      { emoji: '🚁', word: 'Helicopter', correctCategory: 'NOT FOOD' },
      { emoji: '🚢', word: 'Ship', correctCategory: 'NOT FOOD' },
      { emoji: '🏠', word: 'House', correctCategory: 'NOT FOOD' },
      { emoji: '🏢', word: 'Building', correctCategory: 'NOT FOOD' },
      { emoji: '🏰', word: 'Castle', correctCategory: 'NOT FOOD' },
      { emoji: '⛪', word: 'Church', correctCategory: 'NOT FOOD' },
      { emoji: '🗼', word: 'Tower', correctCategory: 'NOT FOOD' },
      { emoji: '📱', word: 'Phone', correctCategory: 'NOT FOOD' },
      { emoji: '💻', word: 'Laptop', correctCategory: 'NOT FOOD' },
      { emoji: '🖥️', word: 'Computer', correctCategory: 'NOT FOOD' },
      { emoji: '📺', word: 'TV', correctCategory: 'NOT FOOD' },
      { emoji: '🎮', word: 'Controller', correctCategory: 'NOT FOOD' },
      { emoji: '📷', word: 'Camera', correctCategory: 'NOT FOOD' },
      { emoji: '🔑', word: 'Key', correctCategory: 'NOT FOOD' },
      { emoji: '🔨', word: 'Hammer', correctCategory: 'NOT FOOD' },
      { emoji: '🔧', word: 'Wrench', correctCategory: 'NOT FOOD' },
      { emoji: '✂️', word: 'Scissors', correctCategory: 'NOT FOOD' },
      { emoji: '📚', word: 'Books', correctCategory: 'NOT FOOD' },
      { emoji: '✏️', word: 'Pencil', correctCategory: 'NOT FOOD' },
      { emoji: '🎸', word: 'Guitar', correctCategory: 'NOT FOOD' },
      { emoji: '🎹', word: 'Piano', correctCategory: 'NOT FOOD' },
      { emoji: '🎺', word: 'Trumpet', correctCategory: 'NOT FOOD' },
      { emoji: '⚽', word: 'Soccer Ball', correctCategory: 'NOT FOOD' },
      { emoji: '🏀', word: 'Basketball', correctCategory: 'NOT FOOD' },
      { emoji: '🎾', word: 'Tennis Ball', correctCategory: 'NOT FOOD' },
      { emoji: '👟', word: 'Sneaker', correctCategory: 'NOT FOOD' },
      { emoji: '👗', word: 'Dress', correctCategory: 'NOT FOOD' },
      { emoji: '👒', word: 'Hat', correctCategory: 'NOT FOOD' },
      { emoji: '🎒', word: 'Backpack', correctCategory: 'NOT FOOD' },
      { emoji: '💎', word: 'Diamond', correctCategory: 'NOT FOOD' },
      { emoji: '💡', word: 'Light Bulb', correctCategory: 'NOT FOOD' },
      { emoji: '🔦', word: 'Flashlight', correctCategory: 'NOT FOOD' },
      { emoji: '🧲', word: 'Magnet', correctCategory: 'NOT FOOD' },
      { emoji: '🪑', word: 'Chair', correctCategory: 'NOT FOOD' },
      { emoji: '🛏️', word: 'Bed', correctCategory: 'NOT FOOD' },
      { emoji: '🚿', word: 'Shower', correctCategory: 'NOT FOOD' },
      { emoji: '🛁', word: 'Bathtub', correctCategory: 'NOT FOOD' },
      { emoji: '🧸', word: 'Teddy Bear', correctCategory: 'NOT FOOD' },
      { emoji: '🎈', word: 'Balloon', correctCategory: 'NOT FOOD' },
      { emoji: '🎁', word: 'Gift Box', correctCategory: 'NOT FOOD' },
      { emoji: '🌂', word: 'Umbrella', correctCategory: 'NOT FOOD' },
      { emoji: '🗑️', word: 'Trash Can', correctCategory: 'NOT FOOD' },
      { emoji: '🧹', word: 'Broom', correctCategory: 'NOT FOOD' },
      { emoji: '🪥', word: 'Toothbrush', correctCategory: 'NOT FOOD' },
    ],
  },
  // ============================================================================
  // SET 2: ANIMAL vs PLANT - Living things
  // ============================================================================
  {
    left: 'ANIMAL',
    right: 'PLANT',
    prompts: [
      // ANIMALS
      { emoji: '🐕', word: 'Dog', correctCategory: 'ANIMAL' },
      { emoji: '🐈', word: 'Cat', correctCategory: 'ANIMAL' },
      { emoji: '🐁', word: 'Mouse', correctCategory: 'ANIMAL' },
      { emoji: '🐇', word: 'Rabbit', correctCategory: 'ANIMAL' },
      { emoji: '🐿️', word: 'Squirrel', correctCategory: 'ANIMAL' },
      { emoji: '🦔', word: 'Hedgehog', correctCategory: 'ANIMAL' },
      { emoji: '🐻', word: 'Bear', correctCategory: 'ANIMAL' },
      { emoji: '🐼', word: 'Panda', correctCategory: 'ANIMAL' },
      { emoji: '🐨', word: 'Koala', correctCategory: 'ANIMAL' },
      { emoji: '🦁', word: 'Lion', correctCategory: 'ANIMAL' },
      { emoji: '🐯', word: 'Tiger', correctCategory: 'ANIMAL' },
      { emoji: '🐆', word: 'Leopard', correctCategory: 'ANIMAL' },
      { emoji: '🦊', word: 'Fox', correctCategory: 'ANIMAL' },
      { emoji: '🐺', word: 'Wolf', correctCategory: 'ANIMAL' },
      { emoji: '🐗', word: 'Boar', correctCategory: 'ANIMAL' },
      { emoji: '🐴', word: 'Horse', correctCategory: 'ANIMAL' },
      { emoji: '🦄', word: 'Unicorn', correctCategory: 'ANIMAL' },
      { emoji: '🦓', word: 'Zebra', correctCategory: 'ANIMAL' },
      { emoji: '🦌', word: 'Deer', correctCategory: 'ANIMAL' },
      { emoji: '🐄', word: 'Cow', correctCategory: 'ANIMAL' },
      { emoji: '🐖', word: 'Pig', correctCategory: 'ANIMAL' },
      { emoji: '🐑', word: 'Sheep', correctCategory: 'ANIMAL' },
      { emoji: '🐐', word: 'Goat', correctCategory: 'ANIMAL' },
      { emoji: '🐘', word: 'Elephant', correctCategory: 'ANIMAL' },
      { emoji: '🦛', word: 'Hippo', correctCategory: 'ANIMAL' },
      { emoji: '🦏', word: 'Rhino', correctCategory: 'ANIMAL' },
      { emoji: '🦒', word: 'Giraffe', correctCategory: 'ANIMAL' },
      { emoji: '🐪', word: 'Camel', correctCategory: 'ANIMAL' },
      { emoji: '🦘', word: 'Kangaroo', correctCategory: 'ANIMAL' },
      { emoji: '🦥', word: 'Sloth', correctCategory: 'ANIMAL' },
      { emoji: '🦦', word: 'Otter', correctCategory: 'ANIMAL' },
      { emoji: '🦨', word: 'Skunk', correctCategory: 'ANIMAL' },
      { emoji: '🦡', word: 'Badger', correctCategory: 'ANIMAL' },
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
      { emoji: '🐸', word: 'Frog', correctCategory: 'ANIMAL' },
      { emoji: '🐊', word: 'Crocodile', correctCategory: 'ANIMAL' },
      { emoji: '🐢', word: 'Turtle', correctCategory: 'ANIMAL' },
      { emoji: '🦎', word: 'Lizard', correctCategory: 'ANIMAL' },
      { emoji: '🐍', word: 'Snake', correctCategory: 'ANIMAL' },
      { emoji: '🦕', word: 'Dinosaur', correctCategory: 'ANIMAL' },
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
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'ANIMAL' },
      { emoji: '🐛', word: 'Caterpillar', correctCategory: 'ANIMAL' },
      { emoji: '🐜', word: 'Ant', correctCategory: 'ANIMAL' },
      { emoji: '🐝', word: 'Bee', correctCategory: 'ANIMAL' },
      { emoji: '🐞', word: 'Ladybug', correctCategory: 'ANIMAL' },
      { emoji: '🦗', word: 'Cricket', correctCategory: 'ANIMAL' },
      { emoji: '🕷️', word: 'Spider', correctCategory: 'ANIMAL' },
      { emoji: '🦂', word: 'Scorpion', correctCategory: 'ANIMAL' },
      // PLANTS
      { emoji: '🌲', word: 'Pine Tree', correctCategory: 'PLANT' },
      { emoji: '🌳', word: 'Oak Tree', correctCategory: 'PLANT' },
      { emoji: '🌴', word: 'Palm Tree', correctCategory: 'PLANT' },
      { emoji: '🌵', word: 'Cactus', correctCategory: 'PLANT' },
      { emoji: '🌾', word: 'Wheat', correctCategory: 'PLANT' },
      { emoji: '🌿', word: 'Herb', correctCategory: 'PLANT' },
      { emoji: '☘️', word: 'Shamrock', correctCategory: 'PLANT' },
      { emoji: '🍀', word: 'Clover', correctCategory: 'PLANT' },
      { emoji: '🍁', word: 'Maple Leaf', correctCategory: 'PLANT' },
      { emoji: '🍂', word: 'Fallen Leaf', correctCategory: 'PLANT' },
      { emoji: '🍃', word: 'Leaves', correctCategory: 'PLANT' },
      { emoji: '🪴', word: 'Potted Plant', correctCategory: 'PLANT' },
      { emoji: '🌱', word: 'Seedling', correctCategory: 'PLANT' },
      { emoji: '🌸', word: 'Cherry Blossom', correctCategory: 'PLANT' },
      { emoji: '💮', word: 'White Flower', correctCategory: 'PLANT' },
      { emoji: '🏵️', word: 'Rosette', correctCategory: 'PLANT' },
      { emoji: '🌹', word: 'Rose', correctCategory: 'PLANT' },
      { emoji: '🥀', word: 'Wilted Rose', correctCategory: 'PLANT' },
      { emoji: '🌺', word: 'Hibiscus', correctCategory: 'PLANT' },
      { emoji: '🌻', word: 'Sunflower', correctCategory: 'PLANT' },
      { emoji: '🌼', word: 'Blossom', correctCategory: 'PLANT' },
      { emoji: '🌷', word: 'Tulip', correctCategory: 'PLANT' },
      { emoji: '💐', word: 'Bouquet', correctCategory: 'PLANT' },
      { emoji: '🪻', word: 'Hyacinth', correctCategory: 'PLANT' },
      { emoji: '🪷', word: 'Lotus', correctCategory: 'PLANT' },
      { emoji: '🎋', word: 'Bamboo', correctCategory: 'PLANT' },
      { emoji: '🎍', word: 'Pine Decor', correctCategory: 'PLANT' },
    ],
  },
  // ============================================================================
  // SET 3: LAND ANIMAL vs SEA CREATURE
  // ============================================================================
  {
    left: 'LAND',
    right: 'SEA',
    prompts: [
      // LAND ANIMALS
      { emoji: '🐕', word: 'Dog', correctCategory: 'LAND' },
      { emoji: '🐈', word: 'Cat', correctCategory: 'LAND' },
      { emoji: '🐁', word: 'Mouse', correctCategory: 'LAND' },
      { emoji: '🐇', word: 'Rabbit', correctCategory: 'LAND' },
      { emoji: '🦔', word: 'Hedgehog', correctCategory: 'LAND' },
      { emoji: '🐻', word: 'Bear', correctCategory: 'LAND' },
      { emoji: '🐼', word: 'Panda', correctCategory: 'LAND' },
      { emoji: '🐨', word: 'Koala', correctCategory: 'LAND' },
      { emoji: '🦁', word: 'Lion', correctCategory: 'LAND' },
      { emoji: '🐯', word: 'Tiger', correctCategory: 'LAND' },
      { emoji: '🦊', word: 'Fox', correctCategory: 'LAND' },
      { emoji: '🐺', word: 'Wolf', correctCategory: 'LAND' },
      { emoji: '🐴', word: 'Horse', correctCategory: 'LAND' },
      { emoji: '🦓', word: 'Zebra', correctCategory: 'LAND' },
      { emoji: '🦌', word: 'Deer', correctCategory: 'LAND' },
      { emoji: '🐄', word: 'Cow', correctCategory: 'LAND' },
      { emoji: '🐖', word: 'Pig', correctCategory: 'LAND' },
      { emoji: '🐑', word: 'Sheep', correctCategory: 'LAND' },
      { emoji: '🐐', word: 'Goat', correctCategory: 'LAND' },
      { emoji: '🐘', word: 'Elephant', correctCategory: 'LAND' },
      { emoji: '🦛', word: 'Hippo', correctCategory: 'LAND' },
      { emoji: '🦏', word: 'Rhino', correctCategory: 'LAND' },
      { emoji: '🦒', word: 'Giraffe', correctCategory: 'LAND' },
      { emoji: '🐪', word: 'Camel', correctCategory: 'LAND' },
      { emoji: '🦘', word: 'Kangaroo', correctCategory: 'LAND' },
      { emoji: '🦥', word: 'Sloth', correctCategory: 'LAND' },
      { emoji: '🐓', word: 'Rooster', correctCategory: 'LAND' },
      { emoji: '🦃', word: 'Turkey', correctCategory: 'LAND' },
      { emoji: '🦚', word: 'Peacock', correctCategory: 'LAND' },
      { emoji: '🦜', word: 'Parrot', correctCategory: 'LAND' },
      { emoji: '🦅', word: 'Eagle', correctCategory: 'LAND' },
      { emoji: '🦉', word: 'Owl', correctCategory: 'LAND' },
      { emoji: '🐢', word: 'Tortoise', correctCategory: 'LAND' },
      { emoji: '🦎', word: 'Lizard', correctCategory: 'LAND' },
      { emoji: '🐍', word: 'Snake', correctCategory: 'LAND' },
      { emoji: '🐜', word: 'Ant', correctCategory: 'LAND' },
      { emoji: '🐝', word: 'Bee', correctCategory: 'LAND' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'LAND' },
      { emoji: '🐞', word: 'Ladybug', correctCategory: 'LAND' },
      { emoji: '🕷️', word: 'Spider', correctCategory: 'LAND' },
      // SEA CREATURES
      { emoji: '🐳', word: 'Whale', correctCategory: 'SEA' },
      { emoji: '🐋', word: 'Humpback', correctCategory: 'SEA' },
      { emoji: '🐬', word: 'Dolphin', correctCategory: 'SEA' },
      { emoji: '🦈', word: 'Shark', correctCategory: 'SEA' },
      { emoji: '🐙', word: 'Octopus', correctCategory: 'SEA' },
      { emoji: '🦑', word: 'Squid', correctCategory: 'SEA' },
      { emoji: '🦐', word: 'Shrimp', correctCategory: 'SEA' },
      { emoji: '🦞', word: 'Lobster', correctCategory: 'SEA' },
      { emoji: '🦀', word: 'Crab', correctCategory: 'SEA' },
      { emoji: '🐠', word: 'Tropical Fish', correctCategory: 'SEA' },
      { emoji: '🐟', word: 'Fish', correctCategory: 'SEA' },
      { emoji: '🐡', word: 'Blowfish', correctCategory: 'SEA' },
      { emoji: '🦭', word: 'Seal', correctCategory: 'SEA' },
      { emoji: '🐚', word: 'Shell', correctCategory: 'SEA' },
      { emoji: '🦪', word: 'Oyster', correctCategory: 'SEA' },
      { emoji: '🪼', word: 'Jellyfish', correctCategory: 'SEA' },
      { emoji: '🪸', word: 'Coral', correctCategory: 'SEA' },
      { emoji: '🦦', word: 'Sea Otter', correctCategory: 'SEA' },
      { emoji: '🐧', word: 'Penguin', correctCategory: 'SEA' },
      { emoji: '🐋', word: 'Blue Whale', correctCategory: 'SEA' },
    ],
  },
  // ============================================================================
  // SET 4: FRUIT vs VEGETABLE
  // ============================================================================
  {
    left: 'FRUIT',
    right: 'VEGETABLE',
    prompts: [
      // FRUITS
      { emoji: '🍎', word: 'Apple', correctCategory: 'FRUIT' },
      { emoji: '🍏', word: 'Green Apple', correctCategory: 'FRUIT' },
      { emoji: '🍐', word: 'Pear', correctCategory: 'FRUIT' },
      { emoji: '🍊', word: 'Orange', correctCategory: 'FRUIT' },
      { emoji: '🍋', word: 'Lemon', correctCategory: 'FRUIT' },
      { emoji: '🍌', word: 'Banana', correctCategory: 'FRUIT' },
      { emoji: '🍉', word: 'Watermelon', correctCategory: 'FRUIT' },
      { emoji: '🍇', word: 'Grapes', correctCategory: 'FRUIT' },
      { emoji: '🍓', word: 'Strawberry', correctCategory: 'FRUIT' },
      { emoji: '🫐', word: 'Blueberry', correctCategory: 'FRUIT' },
      { emoji: '🍈', word: 'Melon', correctCategory: 'FRUIT' },
      { emoji: '🍒', word: 'Cherry', correctCategory: 'FRUIT' },
      { emoji: '🍑', word: 'Peach', correctCategory: 'FRUIT' },
      { emoji: '🥭', word: 'Mango', correctCategory: 'FRUIT' },
      { emoji: '🍍', word: 'Pineapple', correctCategory: 'FRUIT' },
      { emoji: '🥥', word: 'Coconut', correctCategory: 'FRUIT' },
      { emoji: '🥝', word: 'Kiwi', correctCategory: 'FRUIT' },
      // VEGETABLES (using common understanding, not botanical)
      { emoji: '🥕', word: 'Carrot', correctCategory: 'VEGETABLE' },
      { emoji: '🥔', word: 'Potato', correctCategory: 'VEGETABLE' },
      { emoji: '🧅', word: 'Onion', correctCategory: 'VEGETABLE' },
      { emoji: '🧄', word: 'Garlic', correctCategory: 'VEGETABLE' },
      { emoji: '🌽', word: 'Corn', correctCategory: 'VEGETABLE' },
      { emoji: '🥦', word: 'Broccoli', correctCategory: 'VEGETABLE' },
      { emoji: '🥬', word: 'Lettuce', correctCategory: 'VEGETABLE' },
      { emoji: '🍆', word: 'Eggplant', correctCategory: 'VEGETABLE' },
      { emoji: '🥒', word: 'Cucumber', correctCategory: 'VEGETABLE' },
      { emoji: '🍅', word: 'Tomato', correctCategory: 'VEGETABLE' },
      { emoji: '🫑', word: 'Bell Pepper', correctCategory: 'VEGETABLE' },
      { emoji: '🌶️', word: 'Chili', correctCategory: 'VEGETABLE' },
      { emoji: '🍄', word: 'Mushroom', correctCategory: 'VEGETABLE' },
      { emoji: '🫘', word: 'Beans', correctCategory: 'VEGETABLE' },
      { emoji: '🫛', word: 'Peas', correctCategory: 'VEGETABLE' },
      { emoji: '🍠', word: 'Sweet Potato', correctCategory: 'VEGETABLE' },
      { emoji: '🥑', word: 'Avocado', correctCategory: 'VEGETABLE' },
      { emoji: '🥗', word: 'Salad', correctCategory: 'VEGETABLE' },
    ],
  },
  // ============================================================================
  // SET 5: VEHICLE vs BUILDING
  // ============================================================================
  {
    left: 'VEHICLE',
    right: 'BUILDING',
    prompts: [
      // VEHICLES
      { emoji: '🚗', word: 'Car', correctCategory: 'VEHICLE' },
      { emoji: '🚕', word: 'Taxi', correctCategory: 'VEHICLE' },
      { emoji: '🚙', word: 'SUV', correctCategory: 'VEHICLE' },
      { emoji: '🚌', word: 'Bus', correctCategory: 'VEHICLE' },
      { emoji: '🚎', word: 'Trolley', correctCategory: 'VEHICLE' },
      { emoji: '🏎️', word: 'Race Car', correctCategory: 'VEHICLE' },
      { emoji: '🚓', word: 'Police Car', correctCategory: 'VEHICLE' },
      { emoji: '🚑', word: 'Ambulance', correctCategory: 'VEHICLE' },
      { emoji: '🚒', word: 'Fire Truck', correctCategory: 'VEHICLE' },
      { emoji: '🚐', word: 'Van', correctCategory: 'VEHICLE' },
      { emoji: '🛻', word: 'Pickup', correctCategory: 'VEHICLE' },
      { emoji: '🚚', word: 'Truck', correctCategory: 'VEHICLE' },
      { emoji: '🚛', word: 'Semi Truck', correctCategory: 'VEHICLE' },
      { emoji: '🚜', word: 'Tractor', correctCategory: 'VEHICLE' },
      { emoji: '🏍️', word: 'Motorcycle', correctCategory: 'VEHICLE' },
      { emoji: '🛵', word: 'Scooter', correctCategory: 'VEHICLE' },
      { emoji: '🚲', word: 'Bicycle', correctCategory: 'VEHICLE' },
      { emoji: '🛴', word: 'Kick Scooter', correctCategory: 'VEHICLE' },
      { emoji: '🚂', word: 'Train', correctCategory: 'VEHICLE' },
      { emoji: '🚃', word: 'Rail Car', correctCategory: 'VEHICLE' },
      { emoji: '🚄', word: 'Bullet Train', correctCategory: 'VEHICLE' },
      { emoji: '🚅', word: 'Speed Train', correctCategory: 'VEHICLE' },
      { emoji: '🚆', word: 'Metro', correctCategory: 'VEHICLE' },
      { emoji: '✈️', word: 'Airplane', correctCategory: 'VEHICLE' },
      { emoji: '🛩️', word: 'Small Plane', correctCategory: 'VEHICLE' },
      { emoji: '🚀', word: 'Rocket', correctCategory: 'VEHICLE' },
      { emoji: '🛸', word: 'UFO', correctCategory: 'VEHICLE' },
      { emoji: '🚁', word: 'Helicopter', correctCategory: 'VEHICLE' },
      { emoji: '⛵', word: 'Sailboat', correctCategory: 'VEHICLE' },
      { emoji: '🚤', word: 'Speedboat', correctCategory: 'VEHICLE' },
      { emoji: '🛥️', word: 'Motorboat', correctCategory: 'VEHICLE' },
      { emoji: '🚢', word: 'Ship', correctCategory: 'VEHICLE' },
      { emoji: '🛶', word: 'Canoe', correctCategory: 'VEHICLE' },
      // BUILDINGS
      { emoji: '🏠', word: 'House', correctCategory: 'BUILDING' },
      { emoji: '🏡', word: 'Home', correctCategory: 'BUILDING' },
      { emoji: '🏢', word: 'Office', correctCategory: 'BUILDING' },
      { emoji: '🏣', word: 'Post Office', correctCategory: 'BUILDING' },
      { emoji: '🏤', word: 'Bank', correctCategory: 'BUILDING' },
      { emoji: '🏥', word: 'Hospital', correctCategory: 'BUILDING' },
      { emoji: '🏦', word: 'Bank', correctCategory: 'BUILDING' },
      { emoji: '🏨', word: 'Hotel', correctCategory: 'BUILDING' },
      { emoji: '🏩', word: 'Love Hotel', correctCategory: 'BUILDING' },
      { emoji: '🏪', word: 'Store', correctCategory: 'BUILDING' },
      { emoji: '🏫', word: 'School', correctCategory: 'BUILDING' },
      { emoji: '🏬', word: 'Mall', correctCategory: 'BUILDING' },
      { emoji: '🏭', word: 'Factory', correctCategory: 'BUILDING' },
      { emoji: '🏯', word: 'Japanese Castle', correctCategory: 'BUILDING' },
      { emoji: '🏰', word: 'Castle', correctCategory: 'BUILDING' },
      { emoji: '💒', word: 'Wedding Chapel', correctCategory: 'BUILDING' },
      { emoji: '⛪', word: 'Church', correctCategory: 'BUILDING' },
      { emoji: '🕌', word: 'Mosque', correctCategory: 'BUILDING' },
      { emoji: '🛕', word: 'Temple', correctCategory: 'BUILDING' },
      { emoji: '🕍', word: 'Synagogue', correctCategory: 'BUILDING' },
      { emoji: '🗼', word: 'Tower', correctCategory: 'BUILDING' },
      { emoji: '🏗️', word: 'Construction', correctCategory: 'BUILDING' },
      { emoji: '🏚️', word: 'Abandoned House', correctCategory: 'BUILDING' },
      { emoji: '🏛️', word: 'Museum', correctCategory: 'BUILDING' },
      { emoji: '🏟️', word: 'Stadium', correctCategory: 'BUILDING' },
      { emoji: '🏘️', word: 'Houses', correctCategory: 'BUILDING' },
      { emoji: '🏙️', word: 'City', correctCategory: 'BUILDING' },
    ],
  },
  // ============================================================================
  // SET 6: DAY vs NIGHT - Things associated with day or night
  // ============================================================================
  {
    left: 'DAY',
    right: 'NIGHT',
    prompts: [
      // DAY things
      { emoji: '☀️', word: 'Sun', correctCategory: 'DAY' },
      { emoji: '🌞', word: 'Sun Face', correctCategory: 'DAY' },
      { emoji: '🌅', word: 'Sunrise', correctCategory: 'DAY' },
      { emoji: '🌄', word: 'Sunset', correctCategory: 'DAY' },
      { emoji: '🌈', word: 'Rainbow', correctCategory: 'DAY' },
      { emoji: '☁️', word: 'Cloud', correctCategory: 'DAY' },
      { emoji: '⛅', word: 'Partly Cloudy', correctCategory: 'DAY' },
      { emoji: '🌤️', word: 'Sunny', correctCategory: 'DAY' },
      { emoji: '🐓', word: 'Rooster', correctCategory: 'DAY' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'DAY' },
      { emoji: '🐝', word: 'Bee', correctCategory: 'DAY' },
      { emoji: '🌻', word: 'Sunflower', correctCategory: 'DAY' },
      { emoji: '🏖️', word: 'Beach', correctCategory: 'DAY' },
      { emoji: '🏕️', word: 'Camping', correctCategory: 'DAY' },
      { emoji: '🧑‍🌾', word: 'Farmer', correctCategory: 'DAY' },
      { emoji: '☕', word: 'Coffee', correctCategory: 'DAY' },
      { emoji: '🥐', word: 'Breakfast', correctCategory: 'DAY' },
      { emoji: '📰', word: 'Newspaper', correctCategory: 'DAY' },
      { emoji: '🏃', word: 'Jogging', correctCategory: 'DAY' },
      { emoji: '⚽', word: 'Soccer', correctCategory: 'DAY' },
      { emoji: '🎾', word: 'Tennis', correctCategory: 'DAY' },
      { emoji: '🏊', word: 'Swimming', correctCategory: 'DAY' },
      { emoji: '🚴', word: 'Cycling', correctCategory: 'DAY' },
      { emoji: '🧺', word: 'Picnic', correctCategory: 'DAY' },
      { emoji: '👓', word: 'Sunglasses', correctCategory: 'DAY' },
      { emoji: '🧴', word: 'Sunscreen', correctCategory: 'DAY' },
      { emoji: '👒', word: 'Sun Hat', correctCategory: 'DAY' },
      { emoji: '🌂', word: 'Parasol', correctCategory: 'DAY' },
      { emoji: '🦅', word: 'Eagle', correctCategory: 'DAY' },
      { emoji: '🐦', word: 'Bird', correctCategory: 'DAY' },
      // NIGHT things
      { emoji: '🌙', word: 'Moon', correctCategory: 'NIGHT' },
      { emoji: '🌛', word: 'Moon Face', correctCategory: 'NIGHT' },
      { emoji: '🌜', word: 'Last Quarter', correctCategory: 'NIGHT' },
      { emoji: '🌚', word: 'New Moon', correctCategory: 'NIGHT' },
      { emoji: '🌝', word: 'Full Moon', correctCategory: 'NIGHT' },
      { emoji: '⭐', word: 'Star', correctCategory: 'NIGHT' },
      { emoji: '🌟', word: 'Glowing Star', correctCategory: 'NIGHT' },
      { emoji: '✨', word: 'Sparkles', correctCategory: 'NIGHT' },
      { emoji: '💫', word: 'Dizzy Star', correctCategory: 'NIGHT' },
      { emoji: '🦉', word: 'Owl', correctCategory: 'NIGHT' },
      { emoji: '🦇', word: 'Bat', correctCategory: 'NIGHT' },
      { emoji: '🐺', word: 'Wolf', correctCategory: 'NIGHT' },
      { emoji: '🦔', word: 'Hedgehog', correctCategory: 'NIGHT' },
      { emoji: '🦨', word: 'Skunk', correctCategory: 'NIGHT' },
      { emoji: '🦝', word: 'Raccoon', correctCategory: 'NIGHT' },
      { emoji: '🛏️', word: 'Bed', correctCategory: 'NIGHT' },
      { emoji: '😴', word: 'Sleep', correctCategory: 'NIGHT' },
      { emoji: '🥱', word: 'Yawn', correctCategory: 'NIGHT' },
      { emoji: '💤', word: 'Zzz', correctCategory: 'NIGHT' },
      { emoji: '🧸', word: 'Teddy Bear', correctCategory: 'NIGHT' },
      { emoji: '🕯️', word: 'Candle', correctCategory: 'NIGHT' },
      { emoji: '🔦', word: 'Flashlight', correctCategory: 'NIGHT' },
      { emoji: '🎆', word: 'Fireworks', correctCategory: 'NIGHT' },
      { emoji: '🎇', word: 'Sparkler', correctCategory: 'NIGHT' },
      { emoji: '🪩', word: 'Disco Ball', correctCategory: 'NIGHT' },
      { emoji: '🍷', word: 'Wine', correctCategory: 'NIGHT' },
      { emoji: '🍸', word: 'Cocktail', correctCategory: 'NIGHT' },
      { emoji: '🎭', word: 'Theater', correctCategory: 'NIGHT' },
      { emoji: '🎬', word: 'Movies', correctCategory: 'NIGHT' },
      { emoji: '👻', word: 'Ghost', correctCategory: 'NIGHT' },
    ],
  },
  // ============================================================================
  // SET 7: HOT vs COLD - Temperature related
  // ============================================================================
  {
    left: 'HOT',
    right: 'COLD',
    prompts: [
      // HOT things
      { emoji: '🔥', word: 'Fire', correctCategory: 'HOT' },
      { emoji: '☀️', word: 'Sun', correctCategory: 'HOT' },
      { emoji: '🌞', word: 'Sunny', correctCategory: 'HOT' },
      { emoji: '🏜️', word: 'Desert', correctCategory: 'HOT' },
      { emoji: '🌋', word: 'Volcano', correctCategory: 'HOT' },
      { emoji: '♨️', word: 'Hot Springs', correctCategory: 'HOT' },
      { emoji: '🥵', word: 'Overheated', correctCategory: 'HOT' },
      { emoji: '🌶️', word: 'Chili', correctCategory: 'HOT' },
      { emoji: '☕', word: 'Hot Coffee', correctCategory: 'HOT' },
      { emoji: '🍵', word: 'Hot Tea', correctCategory: 'HOT' },
      { emoji: '🍲', word: 'Hot Pot', correctCategory: 'HOT' },
      { emoji: '🍜', word: 'Hot Soup', correctCategory: 'HOT' },
      { emoji: '🫕', word: 'Fondue', correctCategory: 'HOT' },
      { emoji: '🧨', word: 'Firecracker', correctCategory: 'HOT' },
      { emoji: '💥', word: 'Explosion', correctCategory: 'HOT' },
      { emoji: '⚡', word: 'Lightning', correctCategory: 'HOT' },
      { emoji: '🕯️', word: 'Candle', correctCategory: 'HOT' },
      { emoji: '🏖️', word: 'Beach', correctCategory: 'HOT' },
      { emoji: '🐪', word: 'Camel', correctCategory: 'HOT' },
      { emoji: '🦂', word: 'Scorpion', correctCategory: 'HOT' },
      { emoji: '🦎', word: 'Lizard', correctCategory: 'HOT' },
      { emoji: '🌵', word: 'Cactus', correctCategory: 'HOT' },
      { emoji: '🥘', word: 'Paella', correctCategory: 'HOT' },
      { emoji: '🍛', word: 'Curry', correctCategory: 'HOT' },
      { emoji: '🚒', word: 'Fire Truck', correctCategory: 'HOT' },
      { emoji: '🧯', word: 'Extinguisher', correctCategory: 'HOT' },
      { emoji: '🎆', word: 'Fireworks', correctCategory: 'HOT' },
      { emoji: '💡', word: 'Light Bulb', correctCategory: 'HOT' },
      { emoji: '🔆', word: 'Brightness', correctCategory: 'HOT' },
      { emoji: '🌡️', word: 'Thermometer', correctCategory: 'HOT' },
      // COLD things
      { emoji: '❄️', word: 'Snowflake', correctCategory: 'COLD' },
      { emoji: '🌨️', word: 'Snow', correctCategory: 'COLD' },
      { emoji: '☃️', word: 'Snowman', correctCategory: 'COLD' },
      { emoji: '⛄', word: 'Snowman', correctCategory: 'COLD' },
      { emoji: '🧊', word: 'Ice', correctCategory: 'COLD' },
      { emoji: '🥶', word: 'Freezing', correctCategory: 'COLD' },
      { emoji: '🏔️', word: 'Snow Mountain', correctCategory: 'COLD' },
      { emoji: '🗻', word: 'Mt Fuji', correctCategory: 'COLD' },
      { emoji: '🎿', word: 'Skiing', correctCategory: 'COLD' },
      { emoji: '🏂', word: 'Snowboard', correctCategory: 'COLD' },
      { emoji: '⛷️', word: 'Skier', correctCategory: 'COLD' },
      { emoji: '🛷', word: 'Sled', correctCategory: 'COLD' },
      { emoji: '🏒', word: 'Ice Hockey', correctCategory: 'COLD' },
      { emoji: '⛸️', word: 'Ice Skate', correctCategory: 'COLD' },
      { emoji: '🐧', word: 'Penguin', correctCategory: 'COLD' },
      { emoji: '🐻‍❄️', word: 'Polar Bear', correctCategory: 'COLD' },
      { emoji: '🦭', word: 'Seal', correctCategory: 'COLD' },
      { emoji: '🍦', word: 'Ice Cream', correctCategory: 'COLD' },
      { emoji: '🍧', word: 'Shaved Ice', correctCategory: 'COLD' },
      { emoji: '🍨', word: 'Sundae', correctCategory: 'COLD' },
      { emoji: '🧃', word: 'Iced Juice', correctCategory: 'COLD' },
      { emoji: '🥤', word: 'Iced Drink', correctCategory: 'COLD' },
      { emoji: '🧣', word: 'Scarf', correctCategory: 'COLD' },
      { emoji: '🧤', word: 'Gloves', correctCategory: 'COLD' },
      { emoji: '🧥', word: 'Coat', correctCategory: 'COLD' },
      { emoji: '🎄', word: 'Christmas Tree', correctCategory: 'COLD' },
      { emoji: '🎅', word: 'Santa', correctCategory: 'COLD' },
      { emoji: '🌬️', word: 'Cold Wind', correctCategory: 'COLD' },
      { emoji: '🥣', word: 'Cereal', correctCategory: 'COLD' },
      { emoji: '🌊', word: 'Ocean', correctCategory: 'COLD' },
    ],
  },
  // ============================================================================
  // SET 8: SWEET vs SALTY - Taste only!
  // ============================================================================
  {
    left: 'SWEET',
    right: 'SALTY',
    prompts: [
      // SWEET foods
      { emoji: '🍬', word: 'Candy', correctCategory: 'SWEET' },
      { emoji: '🍭', word: 'Lollipop', correctCategory: 'SWEET' },
      { emoji: '🍫', word: 'Chocolate', correctCategory: 'SWEET' },
      { emoji: '🍩', word: 'Donut', correctCategory: 'SWEET' },
      { emoji: '🍰', word: 'Cake', correctCategory: 'SWEET' },
      { emoji: '🎂', word: 'Birthday Cake', correctCategory: 'SWEET' },
      { emoji: '🧁', word: 'Cupcake', correctCategory: 'SWEET' },
      { emoji: '🍪', word: 'Cookie', correctCategory: 'SWEET' },
      { emoji: '🥧', word: 'Pie', correctCategory: 'SWEET' },
      { emoji: '🍦', word: 'Ice Cream', correctCategory: 'SWEET' },
      { emoji: '🍨', word: 'Sundae', correctCategory: 'SWEET' },
      { emoji: '🍧', word: 'Shaved Ice', correctCategory: 'SWEET' },
      { emoji: '🍯', word: 'Honey', correctCategory: 'SWEET' },
      { emoji: '🍮', word: 'Pudding', correctCategory: 'SWEET' },
      { emoji: '🍡', word: 'Dango', correctCategory: 'SWEET' },
      { emoji: '🥞', word: 'Pancakes', correctCategory: 'SWEET' },
      { emoji: '🧇', word: 'Waffle', correctCategory: 'SWEET' },
      { emoji: '🍇', word: 'Grapes', correctCategory: 'SWEET' },
      { emoji: '🍓', word: 'Strawberry', correctCategory: 'SWEET' },
      { emoji: '🍒', word: 'Cherry', correctCategory: 'SWEET' },
      { emoji: '🍑', word: 'Peach', correctCategory: 'SWEET' },
      { emoji: '🍌', word: 'Banana', correctCategory: 'SWEET' },
      { emoji: '🥭', word: 'Mango', correctCategory: 'SWEET' },
      { emoji: '🍍', word: 'Pineapple', correctCategory: 'SWEET' },
      { emoji: '🍎', word: 'Apple', correctCategory: 'SWEET' },
      { emoji: '🍉', word: 'Watermelon', correctCategory: 'SWEET' },
      { emoji: '🧋', word: 'Boba Tea', correctCategory: 'SWEET' },
      { emoji: '🥤', word: 'Soda', correctCategory: 'SWEET' },
      { emoji: '🍿', word: 'Caramel Corn', correctCategory: 'SWEET' },
      { emoji: '🥐', word: 'Croissant', correctCategory: 'SWEET' },
      // SALTY foods
      { emoji: '🧂', word: 'Salt', correctCategory: 'SALTY' },
      { emoji: '🍟', word: 'Fries', correctCategory: 'SALTY' },
      { emoji: '🥨', word: 'Pretzel', correctCategory: 'SALTY' },
      { emoji: '🥓', word: 'Bacon', correctCategory: 'SALTY' },
      { emoji: '🌭', word: 'Hot Dog', correctCategory: 'SALTY' },
      { emoji: '🍔', word: 'Burger', correctCategory: 'SALTY' },
      { emoji: '🍕', word: 'Pizza', correctCategory: 'SALTY' },
      { emoji: '🧀', word: 'Cheese', correctCategory: 'SALTY' },
      { emoji: '🥪', word: 'Sandwich', correctCategory: 'SALTY' },
      { emoji: '🌮', word: 'Taco', correctCategory: 'SALTY' },
      { emoji: '🌯', word: 'Burrito', correctCategory: 'SALTY' },
      { emoji: '🥗', word: 'Salad', correctCategory: 'SALTY' },
      { emoji: '🍿', word: 'Popcorn', correctCategory: 'SALTY' },
      { emoji: '🥜', word: 'Peanuts', correctCategory: 'SALTY' },
      { emoji: '🫒', word: 'Olives', correctCategory: 'SALTY' },
      { emoji: '🥒', word: 'Pickle', correctCategory: 'SALTY' },
      { emoji: '🍖', word: 'Ham', correctCategory: 'SALTY' },
      { emoji: '🥩', word: 'Steak', correctCategory: 'SALTY' },
      { emoji: '🍗', word: 'Chicken', correctCategory: 'SALTY' },
      { emoji: '🐟', word: 'Salted Fish', correctCategory: 'SALTY' },
      { emoji: '🦐', word: 'Shrimp', correctCategory: 'SALTY' },
      { emoji: '🍣', word: 'Sushi', correctCategory: 'SALTY' },
      { emoji: '🥟', word: 'Dumpling', correctCategory: 'SALTY' },
      { emoji: '🍜', word: 'Ramen', correctCategory: 'SALTY' },
      { emoji: '🍝', word: 'Pasta', correctCategory: 'SALTY' },
      { emoji: '🥫', word: 'Canned Food', correctCategory: 'SALTY' },
      { emoji: '🫕', word: 'Fondue', correctCategory: 'SALTY' },
      { emoji: '🥚', word: 'Boiled Egg', correctCategory: 'SALTY' },
      { emoji: '🍳', word: 'Fried Egg', correctCategory: 'SALTY' },
      { emoji: '🧅', word: 'Onion Rings', correctCategory: 'SALTY' },
    ],
  },
  // ============================================================================
  // SET 9: FAST vs SLOW - Speed related
  // ============================================================================
  {
    left: 'FAST',
    right: 'SLOW',
    prompts: [
      // FAST things
      { emoji: '🚀', word: 'Rocket', correctCategory: 'FAST' },
      { emoji: '✈️', word: 'Jet', correctCategory: 'FAST' },
      { emoji: '🏎️', word: 'Race Car', correctCategory: 'FAST' },
      { emoji: '🏍️', word: 'Motorcycle', correctCategory: 'FAST' },
      { emoji: '🚄', word: 'Bullet Train', correctCategory: 'FAST' },
      { emoji: '⚡', word: 'Lightning', correctCategory: 'FAST' },
      { emoji: '💨', word: 'Dash', correctCategory: 'FAST' },
      { emoji: '🌪️', word: 'Tornado', correctCategory: 'FAST' },
      { emoji: '🏃', word: 'Runner', correctCategory: 'FAST' },
      { emoji: '🐆', word: 'Cheetah', correctCategory: 'FAST' },
      { emoji: '🦅', word: 'Eagle', correctCategory: 'FAST' },
      { emoji: '🦇', word: 'Bat', correctCategory: 'FAST' },
      { emoji: '🐎', word: 'Horse', correctCategory: 'FAST' },
      { emoji: '🐇', word: 'Rabbit', correctCategory: 'FAST' },
      { emoji: '🦊', word: 'Fox', correctCategory: 'FAST' },
      { emoji: '🐕', word: 'Greyhound', correctCategory: 'FAST' },
      { emoji: '🐬', word: 'Dolphin', correctCategory: 'FAST' },
      { emoji: '🦈', word: 'Shark', correctCategory: 'FAST' },
      { emoji: '🎿', word: 'Skier', correctCategory: 'FAST' },
      { emoji: '🏂', word: 'Snowboarder', correctCategory: 'FAST' },
      { emoji: '🚴', word: 'Cyclist', correctCategory: 'FAST' },
      { emoji: '🏊', word: 'Swimmer', correctCategory: 'FAST' },
      { emoji: '⏩', word: 'Fast Forward', correctCategory: 'FAST' },
      { emoji: '☄️', word: 'Comet', correctCategory: 'FAST' },
      { emoji: '🎯', word: 'Arrow', correctCategory: 'FAST' },
      { emoji: '🔫', word: 'Bullet', correctCategory: 'FAST' },
      { emoji: '🚁', word: 'Helicopter', correctCategory: 'FAST' },
      { emoji: '🦜', word: 'Parrot', correctCategory: 'FAST' },
      { emoji: '🐝', word: 'Bee', correctCategory: 'FAST' },
      { emoji: '🦟', word: 'Mosquito', correctCategory: 'FAST' },
      // SLOW things
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
      { emoji: '🐐', word: 'Goat', correctCategory: 'SLOW' },
      { emoji: '🦒', word: 'Giraffe', correctCategory: 'SLOW' },
      { emoji: '🐪', word: 'Camel', correctCategory: 'SLOW' },
      { emoji: '🐻', word: 'Bear', correctCategory: 'SLOW' },
      { emoji: '🐼', word: 'Panda', correctCategory: 'SLOW' },
      { emoji: '🦦', word: 'Otter', correctCategory: 'SLOW' },
      { emoji: '🧘', word: 'Meditation', correctCategory: 'SLOW' },
      { emoji: '🚶', word: 'Walking', correctCategory: 'SLOW' },
      { emoji: '🛶', word: 'Canoe', correctCategory: 'SLOW' },
      { emoji: '⛵', word: 'Sailboat', correctCategory: 'SLOW' },
      { emoji: '🚣', word: 'Rowing', correctCategory: 'SLOW' },
      { emoji: '🌱', word: 'Seedling', correctCategory: 'SLOW' },
      { emoji: '🌳', word: 'Tree', correctCategory: 'SLOW' },
      { emoji: '🏔️', word: 'Mountain', correctCategory: 'SLOW' },
      { emoji: '🪨', word: 'Rock', correctCategory: 'SLOW' },
      { emoji: '⏪', word: 'Rewind', correctCategory: 'SLOW' },
      { emoji: '😴', word: 'Sleep', correctCategory: 'SLOW' },
      { emoji: '🧓', word: 'Elder', correctCategory: 'SLOW' },
      { emoji: '🐚', word: 'Shell', correctCategory: 'SLOW' },
      { emoji: '🦪', word: 'Oyster', correctCategory: 'SLOW' },
    ],
  },
  // ============================================================================
  // SET 10: HAPPY vs SAD - Emotions
  // ============================================================================
  {
    left: 'HAPPY',
    right: 'SAD',
    prompts: [
      // HAPPY things
      { emoji: '😀', word: 'Grinning', correctCategory: 'HAPPY' },
      { emoji: '😁', word: 'Beaming', correctCategory: 'HAPPY' },
      { emoji: '😂', word: 'Laughing', correctCategory: 'HAPPY' },
      { emoji: '🤣', word: 'ROFL', correctCategory: 'HAPPY' },
      { emoji: '😃', word: 'Smiley', correctCategory: 'HAPPY' },
      { emoji: '😄', word: 'Grin', correctCategory: 'HAPPY' },
      { emoji: '😆', word: 'Laughing', correctCategory: 'HAPPY' },
      { emoji: '😊', word: 'Blushing', correctCategory: 'HAPPY' },
      { emoji: '🥰', word: 'Loving', correctCategory: 'HAPPY' },
      { emoji: '😍', word: 'Heart Eyes', correctCategory: 'HAPPY' },
      { emoji: '🤩', word: 'Star Struck', correctCategory: 'HAPPY' },
      { emoji: '😎', word: 'Cool', correctCategory: 'HAPPY' },
      { emoji: '🥳', word: 'Party', correctCategory: 'HAPPY' },
      { emoji: '🎉', word: 'Celebration', correctCategory: 'HAPPY' },
      { emoji: '🎊', word: 'Confetti', correctCategory: 'HAPPY' },
      { emoji: '🎁', word: 'Gift', correctCategory: 'HAPPY' },
      { emoji: '🎂', word: 'Birthday', correctCategory: 'HAPPY' },
      { emoji: '🏆', word: 'Trophy', correctCategory: 'HAPPY' },
      { emoji: '🥇', word: 'Gold Medal', correctCategory: 'HAPPY' },
      { emoji: '💯', word: 'Perfect', correctCategory: 'HAPPY' },
      { emoji: '✨', word: 'Sparkles', correctCategory: 'HAPPY' },
      { emoji: '🌈', word: 'Rainbow', correctCategory: 'HAPPY' },
      { emoji: '🌞', word: 'Sunny', correctCategory: 'HAPPY' },
      { emoji: '💖', word: 'Love', correctCategory: 'HAPPY' },
      { emoji: '💕', word: 'Hearts', correctCategory: 'HAPPY' },
      { emoji: '🎵', word: 'Music', correctCategory: 'HAPPY' },
      { emoji: '🦋', word: 'Butterfly', correctCategory: 'HAPPY' },
      { emoji: '🌸', word: 'Blossom', correctCategory: 'HAPPY' },
      { emoji: '🍀', word: 'Lucky', correctCategory: 'HAPPY' },
      { emoji: '👍', word: 'Thumbs Up', correctCategory: 'HAPPY' },
      // SAD things
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
      { emoji: '🌑', word: 'Dark', correctCategory: 'SAD' },
      { emoji: '👎', word: 'Thumbs Down', correctCategory: 'SAD' },
      { emoji: '😤', word: 'Frustrated', correctCategory: 'SAD' },
      { emoji: '🤕', word: 'Hurt', correctCategory: 'SAD' },
      { emoji: '🤒', word: 'Sick', correctCategory: 'SAD' },
      { emoji: '😓', word: 'Downcast', correctCategory: 'SAD' },
      { emoji: '😪', word: 'Sleepy', correctCategory: 'SAD' },
      { emoji: '🤧', word: 'Sneezing', correctCategory: 'SAD' },
    ],
  },
];

interface GameSandboxProps {
  isFullscreen?: boolean;
}

// localStorage keys
const STORAGE_KEYS = {
  HIGH_SCORES: 'promptPanic_highScores',
  TOTAL_GAMES: 'promptPanic_totalGames',
  BEST_COMBO: 'promptPanic_bestCombo',
  USERNAME: 'promptPanic_username',
};

// Random username generator
const ADJECTIVES = [
  'Cool', 'Fast', 'Smart', 'Wild', 'Brave', 'Swift', 'Lucky', 'Epic', 'Mega', 'Super',
  'Crazy', 'Happy', 'Fuzzy', 'Mighty', 'Noble', 'Quick', 'Rapid', 'Sharp', 'Turbo', 'Ultra',
  'Cosmic', 'Cyber', 'Digital', 'Electric', 'Neon', 'Pixel', 'Quantum', 'Sonic', 'Hyper', 'Atomic'
];

const NOUNS = [
  'Panda', 'Eagle', 'Tiger', 'Wolf', 'Bear', 'Shark', 'Dragon', 'Phoenix', 'Falcon', 'Lion',
  'Ninja', 'Wizard', 'Knight', 'Pirate', 'Robot', 'Alien', 'Ghost', 'Samurai', 'Viking', 'Warrior',
  'Coder', 'Gamer', 'Hacker', 'Player', 'Master', 'Legend', 'Champion', 'Hero', 'Star', 'King'
];

const generateUsername = (): string => {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const num = Math.floor(Math.random() * 100);
  return `${adj}${noun}_${num}`;
};

const getStoredUsername = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(STORAGE_KEYS.USERNAME);
  } catch {
    return null;
  }
};

const saveUsername = (username: string) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.USERNAME, username);
  } catch {
    // Ignore
  }
};

// Leaderboard entry type
interface LeaderboardEntry {
  username: string;
  score: number;
  category_name: string;
  max_combo: number;
  created_at: string;
}

// Helper functions for localStorage
const getStoredHighScores = (): Record<number, number> => {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.HIGH_SCORES);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveHighScore = (categoryIndex: number, score: number) => {
  if (typeof window === 'undefined') return;
  try {
    const scores = getStoredHighScores();
    if (!scores[categoryIndex] || score > scores[categoryIndex]) {
      scores[categoryIndex] = score;
      localStorage.setItem(STORAGE_KEYS.HIGH_SCORES, JSON.stringify(scores));
    }
  } catch {
    // Ignore storage errors
  }
};

const getTotalGames = (): number => {
  if (typeof window === 'undefined') return 0;
  try {
    return parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_GAMES) || '0', 10);
  } catch {
    return 0;
  }
};

const incrementTotalGames = () => {
  if (typeof window === 'undefined') return;
  try {
    const total = getTotalGames() + 1;
    localStorage.setItem(STORAGE_KEYS.TOTAL_GAMES, total.toString());
  } catch {
    // Ignore storage errors
  }
};

const getBestCombo = (): number => {
  if (typeof window === 'undefined') return 0;
  try {
    return parseInt(localStorage.getItem(STORAGE_KEYS.BEST_COMBO) || '0', 10);
  } catch {
    return 0;
  }
};

const saveBestCombo = (combo: number) => {
  if (typeof window === 'undefined') return;
  try {
    const best = getBestCombo();
    if (combo > best) {
      localStorage.setItem(STORAGE_KEYS.BEST_COMBO, combo.toString());
    }
  } catch {
    // Ignore storage errors
  }
};

const GameSandbox: FC<GameSandboxProps> = ({ isFullscreen = false }) => {
  const [gameState, setGameState] = useState<'menu' | 'select' | 'playing' | 'over' | 'leaderboard'>('menu');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [promptY, setPromptY] = useState(0);
  const [categorySetIndex, setCategorySetIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shake, setShake] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [highScores, setHighScores] = useState<Record<number, number>>({});
  const [totalGames, setTotalGames] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [username, setUsername] = useState<string>('');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const [leaderboardFilter, setLeaderboardFilter] = useState<number | 'all'>('all');
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<Prompt | null>(null);
  const livesRef = useRef(3);
  const scoreRef = useRef(0);

  // Load stored data on mount
  useEffect(() => {
    setHighScores(getStoredHighScores());
    setTotalGames(getTotalGames());
    setBestCombo(getBestCombo());

    // Load or generate username
    const stored = getStoredUsername();
    if (stored) {
      setUsername(stored);
    } else {
      const newUsername = generateUsername();
      setUsername(newUsername);
      saveUsername(newUsername);
    }
  }, []);

  // Fetch leaderboard
  const fetchLeaderboard = async (categoryIdx?: number) => {
    setLeaderboardLoading(true);
    try {
      const url = categoryIdx !== undefined && categoryIdx !== -1
        ? `/api/scores?category=${categoryIdx}&limit=20`
        : '/api/scores?limit=20';
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setLeaderboard(data.leaderboard || []);
      }
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
    }
    setLeaderboardLoading(false);
  };

  // Submit score to server
  const submitScoreToServer = useCallback(async (finalScore: number, finalCombo: number) => {
    if (!username) return;

    const categoryIdx = selectedCategory !== null ? selectedCategory : -1;
    const categoryName = selectedCategory !== null
      ? `${CATEGORY_SETS[selectedCategory].left} vs ${CATEGORY_SETS[selectedCategory].right}`
      : 'Random Mix';

    try {
      await fetch('/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          categoryIndex: categoryIdx,
          categoryName,
          score: finalScore,
          maxCombo: finalCombo
        })
      });
    } catch (error) {
      console.error('Failed to submit score:', error);
    }
  }, [username, selectedCategory]);

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
      setCombo(prev => {
        const newCombo = prev + 1;
        setMaxCombo(m => Math.max(m, newCombo));
        return newCombo;
      });
      const comboBonus = Math.floor(combo / 5) * 5;
      setScore(prev => {
        const newScore = prev + 10 + comboBonus;
        scoreRef.current = newScore;

        // Only change categories in random mode
        if (selectedCategory === null && newScore % 50 === 0 && newScore > 0) {
          setSpeed(s => Math.min(s + 0.5, 8));
          setCategorySetIndex(i => i + 1);
        } else if (selectedCategory !== null && newScore % 50 === 0 && newScore > 0) {
          // Just increase speed in single category mode
          setSpeed(s => Math.min(s + 0.5, 8));
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
        // Save progress locally
        const categoryIdx = selectedCategory !== null ? selectedCategory : -1;
        saveHighScore(categoryIdx, score);
        saveBestCombo(maxCombo);
        incrementTotalGames();
        // Update local state
        setHighScores(getStoredHighScores());
        setTotalGames(getTotalGames());
        setBestCombo(getBestCombo());
        // Submit to server
        submitScoreToServer(score, maxCombo);
        setGameState('over');
        return;
      }
    }

    setTimeout(() => setFeedback(null), 150);
    spawnNewPrompt();
  }, [gameState, currentCategorySet, spawnNewPrompt, combo, score, selectedCategory, maxCombo, submitScoreToServer]);

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
            // Save progress locally
            const categoryIdx = selectedCategory !== null ? selectedCategory : -1;
            saveHighScore(categoryIdx, scoreRef.current);
            saveBestCombo(maxCombo);
            incrementTotalGames();
            setHighScores(getStoredHighScores());
            setTotalGames(getTotalGames());
            setBestCombo(getBestCombo());
            // Submit to server
            submitScoreToServer(scoreRef.current, maxCombo);
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
  }, [gameState, speed, spawnNewPrompt, selectedCategory, maxCombo, submitScoreToServer]);

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

  const startGame = (categoryIndex: number | null = null) => {
    setScore(0);
    scoreRef.current = 0;
    setLives(3);
    livesRef.current = 3;
    setSpeed(2);
    setCombo(0);
    setMaxCombo(0);
    setSelectedCategory(categoryIndex);
    if (categoryIndex !== null) {
      setCategorySetIndex(categoryIndex);
    } else {
      setCategorySetIndex(Math.floor(Math.random() * CATEGORY_SETS.length));
    }
    setGameState('playing');
    spawnNewPrompt();
  };

  const goToSelect = () => {
    setGameState('select');
  };

  const goToMenu = () => {
    setGameState('menu');
  };

  const goToLeaderboard = () => {
    fetchLeaderboard();
    setGameState('leaderboard');
  };

  const regenerateUsername = () => {
    const newUsername = generateUsername();
    setUsername(newUsername);
    saveUsername(newUsername);
  };

  const getOverallHighScore = () => {
    const scores = Object.values(highScores);
    return scores.length > 0 ? Math.max(...scores) : 0;
  };

  if (gameState === 'menu') {
    const overallHigh = getOverallHighScore();
    return (
      <div className={`flex h-full w-full flex-col items-center justify-center text-center overflow-y-auto ${isFullscreen ? 'gap-4 py-8' : 'gap-2 py-3'}`}>
        <div className={`${isFullscreen ? 'text-6xl' : 'text-3xl'}`}>🧠</div>
        <h1 className={`bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-bold text-transparent ${isFullscreen ? 'text-4xl' : 'text-xl'}`}>
          PROMPT PANIC
        </h1>

        {/* USERNAME */}
        <div className={`flex items-center gap-2 ${isFullscreen ? 'text-sm' : 'text-[10px]'}`}>
          <span className="text-slate-500">Playing as:</span>
          <span className="text-cyan-400 font-bold">{username}</span>
          <button
            onClick={regenerateUsername}
            className="text-slate-500 hover:text-white transition-colors"
            title="Get new name"
          >
            🎲
          </button>
        </div>

        {/* CLEAR INSTRUCTIONS */}
        <div className={`bg-slate-800/50 rounded-xl mx-3 ${isFullscreen ? 'p-5 max-w-lg' : 'p-2'}`}>
          <h2 className={`font-bold text-cyan-400 mb-1 ${isFullscreen ? 'text-lg' : 'text-xs'}`}>HOW TO PLAY</h2>
          <div className={`text-slate-300 space-y-0.5 ${isFullscreen ? 'text-sm' : 'text-[10px]'}`}>
            <p><span className="text-yellow-400 font-bold">1.</span> Words fall from the top</p>
            <p><span className="text-yellow-400 font-bold">2.</span> Each word belongs to ONE category</p>
            <p><span className="text-yellow-400 font-bold">3.</span> <span className="text-cyan-400">TAP LEFT</span> or <span className="text-purple-400">TAP RIGHT</span> to sort</p>
            <p><span className="text-yellow-400 font-bold">4.</span> You can also <span className="font-semibold">SWIPE</span></p>
          </div>
          <div className={`mt-2 pt-2 border-t border-slate-700 text-slate-400 ${isFullscreen ? 'text-xs' : 'text-[9px]'}`}>
            <p><span className="text-green-400">+10 pts</span> correct • <span className="text-red-400">-1 life</span> wrong • <span className="text-red-400 font-bold">3 lives</span> total</p>
          </div>
        </div>

        {/* STATS */}
        {(totalGames > 0 || overallHigh > 0) && (
          <div className={`text-slate-500 ${isFullscreen ? 'text-xs' : 'text-[9px]'}`}>
            {overallHigh > 0 && <span className="text-cyan-400 mr-2">Best: {overallHigh}</span>}
            {bestCombo > 0 && <span className="text-yellow-400 mr-2">Combo: {bestCombo}x</span>}
            {totalGames > 0 && <span>Games: {totalGames}</span>}
          </div>
        )}

        {/* BUTTONS */}
        <div className={`flex flex-col gap-2 ${isFullscreen ? 'gap-3' : ''}`}>
          <button
            onClick={() => startGame(null)}
            className={`rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${
              isFullscreen ? 'px-12 py-4 text-xl' : 'px-6 py-2 text-sm'
            }`}
          >
            RANDOM MIX
          </button>
          <button
            onClick={goToSelect}
            className={`rounded-full bg-slate-700 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-slate-600 active:scale-95 ${
              isFullscreen ? 'px-12 py-3 text-lg' : 'px-6 py-2 text-xs'
            }`}
          >
            CHOOSE CATEGORY
          </button>
          <button
            onClick={goToLeaderboard}
            className={`rounded-full bg-yellow-600 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-yellow-500 active:scale-95 ${
              isFullscreen ? 'px-12 py-3 text-lg' : 'px-6 py-2 text-xs'
            }`}
          >
            🏆 LEADERBOARD
          </button>
        </div>

        <p className={`text-slate-600 ${isFullscreen ? 'text-xs' : 'text-[8px]'}`}>
          10 categories • 600+ prompts
        </p>
      </div>
    );
  }

  // CATEGORY SELECTION SCREEN
  if (gameState === 'select') {
    return (
      <div className={`flex h-full w-full flex-col overflow-y-auto ${isFullscreen ? 'p-4' : 'p-2'}`}>
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={goToMenu}
            className={`text-slate-400 hover:text-white transition-colors ${isFullscreen ? 'text-lg' : 'text-sm'}`}
          >
            ← Back
          </button>
          <h2 className={`font-bold text-white ${isFullscreen ? 'text-xl' : 'text-sm'}`}>Choose Category</h2>
          <div className={`${isFullscreen ? 'w-12' : 'w-8'}`}></div>
        </div>

        <div className={`grid gap-2 flex-1 overflow-y-auto ${isFullscreen ? 'grid-cols-2 gap-3' : 'grid-cols-2'}`}>
          {CATEGORY_SETS.map((cat, index) => (
            <button
              key={index}
              onClick={() => startGame(index)}
              className={`rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 text-left transition-all hover:scale-[1.02] hover:border-cyan-500 active:scale-95 ${
                isFullscreen ? 'p-4' : 'p-2'
              }`}
            >
              <div className={`flex items-center gap-1 mb-1 ${isFullscreen ? 'text-xl' : 'text-sm'}`}>
                <span>{cat.prompts[0]?.emoji}</span>
                <span className="text-slate-500">vs</span>
                <span>{cat.prompts[cat.prompts.length - 1]?.emoji}</span>
              </div>
              <div className={`font-bold text-white ${isFullscreen ? 'text-base' : 'text-[10px]'}`}>
                {cat.left} vs {cat.right}
              </div>
              <div className={`text-slate-500 ${isFullscreen ? 'text-xs' : 'text-[9px]'}`}>
                {cat.prompts.length} prompts
                {highScores[index] && (
                  <span className="text-cyan-400 ml-2">Best: {highScores[index]}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (gameState === 'over') {
    const categoryIdx = selectedCategory !== null ? selectedCategory : -1;
    const previousBest = highScores[categoryIdx] || 0;
    const isNewHighScore = score >= previousBest && score > 0;
    const categoryName = selectedCategory !== null
      ? `${CATEGORY_SETS[selectedCategory].left} vs ${CATEGORY_SETS[selectedCategory].right}`
      : 'Random Mix';

    return (
      <div className={`flex h-full w-full flex-col items-center justify-center gap-3 text-center ${isFullscreen ? 'gap-5' : ''}`}>
        <div className={`${isFullscreen ? 'text-7xl' : 'text-4xl'}`}>💥</div>
        <h2 className={`font-bold text-red-400 ${isFullscreen ? 'text-4xl' : 'text-2xl'}`}>GAME OVER!</h2>
        <p className={`text-slate-400 ${isFullscreen ? 'text-base' : 'text-xs'}`}>
          Category: {categoryName}
        </p>

        <div className="my-2">
          <p className={`text-slate-500 ${isFullscreen ? 'text-base' : 'text-xs'}`}>Final Score</p>
          <p className={`font-bold text-cyan-400 ${isFullscreen ? 'text-6xl' : 'text-4xl'}`}>{score}</p>
          {isNewHighScore && (
            <p className={`text-yellow-400 mt-1 font-bold ${isFullscreen ? 'text-lg' : 'text-sm'}`}>NEW HIGH SCORE!</p>
          )}
        </div>

        {maxCombo > 0 && (
          <p className={`text-slate-500 ${isFullscreen ? 'text-sm' : 'text-xs'}`}>
            Best Combo: <span className="text-yellow-400 font-bold">{maxCombo}x</span>
          </p>
        )}

        <div className={`flex flex-col gap-2 mt-3 ${isFullscreen ? 'gap-3' : ''}`}>
          <button
            onClick={() => startGame(selectedCategory)}
            className={`rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${
              isFullscreen ? 'px-12 py-4 text-xl' : 'px-8 py-3'
            }`}
          >
            PLAY AGAIN
          </button>
          <button
            onClick={goToMenu}
            className={`rounded-full bg-slate-700 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-slate-600 active:scale-95 ${
              isFullscreen ? 'px-12 py-3 text-lg' : 'px-8 py-2 text-sm'
            }`}
          >
            MAIN MENU
          </button>
        </div>
      </div>
    );
  }

  // LEADERBOARD SCREEN
  if (gameState === 'leaderboard') {
    const handleFilterChange = (filter: number | 'all') => {
      setLeaderboardFilter(filter);
      if (filter === 'all') {
        fetchLeaderboard();
      } else {
        fetchLeaderboard(filter);
      }
    };

    return (
      <div className={`flex h-full w-full flex-col overflow-hidden ${isFullscreen ? 'p-4' : 'p-2'}`}>
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={goToMenu}
            className={`text-slate-400 hover:text-white transition-colors ${isFullscreen ? 'text-lg' : 'text-sm'}`}
          >
            ← Back
          </button>
          <h2 className={`font-bold text-yellow-400 ${isFullscreen ? 'text-xl' : 'text-sm'}`}>
            🏆 LEADERBOARD
          </h2>
          <div className={`${isFullscreen ? 'w-12' : 'w-8'}`}></div>
        </div>

        {/* Category Filter Tabs */}
        <div className={`flex gap-1 overflow-x-auto pb-2 mb-2 ${isFullscreen ? 'gap-2' : ''}`}>
          <button
            onClick={() => handleFilterChange('all')}
            className={`whitespace-nowrap rounded-full px-3 py-1 font-bold transition-all ${
              isFullscreen ? 'text-sm' : 'text-[10px]'
            } ${leaderboardFilter === 'all'
              ? 'bg-yellow-500 text-black'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            🌍 GLOBAL
          </button>
          {CATEGORY_SETS.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleFilterChange(idx)}
              className={`whitespace-nowrap rounded-full px-2 py-1 font-bold transition-all ${
                isFullscreen ? 'text-xs' : 'text-[9px]'
              } ${leaderboardFilter === idx
                ? 'bg-cyan-500 text-black'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {cat.left.slice(0, 4)}
            </button>
          ))}
        </div>

        {/* Filter label */}
        <p className={`text-slate-500 text-center mb-2 ${isFullscreen ? 'text-xs' : 'text-[9px]'}`}>
          {leaderboardFilter === 'all'
            ? 'Best score per player (all categories)'
            : `Best scores in: ${CATEGORY_SETS[leaderboardFilter as number].left} vs ${CATEGORY_SETS[leaderboardFilter as number].right}`
          }
        </p>

        {leaderboardLoading ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-slate-400">Loading...</p>
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <p className={`text-slate-500 ${isFullscreen ? 'text-base' : 'text-sm'}`}>No scores yet!</p>
            <p className={`text-slate-600 ${isFullscreen ? 'text-sm' : 'text-xs'}`}>Be the first to play!</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className={`grid gap-2 ${isFullscreen ? 'gap-3' : ''}`}>
              {leaderboard.map((entry, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 rounded-xl bg-slate-800/50 ${
                    isFullscreen ? 'p-4' : 'p-2'
                  } ${entry.username === username ? 'border border-cyan-500' : ''}`}
                >
                  <div className={`font-bold ${
                    index === 0 ? 'text-yellow-400' :
                    index === 1 ? 'text-slate-300' :
                    index === 2 ? 'text-orange-400' :
                    'text-slate-500'
                  } ${isFullscreen ? 'text-2xl w-10' : 'text-lg w-6'}`}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}`}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-white truncate ${isFullscreen ? 'text-base' : 'text-xs'}`}>
                      {entry.username}
                      {entry.username === username && <span className="text-cyan-400 ml-1">(you)</span>}
                    </p>
                    {leaderboardFilter === 'all' && (
                      <p className={`text-slate-500 truncate ${isFullscreen ? 'text-xs' : 'text-[9px]'}`}>
                        {entry.category_name}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-cyan-400 ${isFullscreen ? 'text-xl' : 'text-sm'}`}>
                      {entry.score}
                    </p>
                    {entry.max_combo > 0 && (
                      <p className={`text-yellow-400 ${isFullscreen ? 'text-xs' : 'text-[9px]'}`}>
                        {entry.max_combo}x
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => handleFilterChange(leaderboardFilter)}
          className={`mt-2 rounded-full bg-slate-700 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-slate-600 active:scale-95 ${
            isFullscreen ? 'py-3 text-base' : 'py-2 text-xs'
          }`}
        >
          🔄 Refresh
        </button>
      </div>
    );
  }

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

      <div
        className={`relative flex-1 overflow-hidden transition-colors duration-100 ${
          feedback === 'correct' ? 'bg-green-500/20' :
          feedback === 'wrong' ? 'bg-red-500/20' : ''
        }`}
      >
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

        <div className={`absolute inset-0 flex items-center justify-between pointer-events-none opacity-20 ${isFullscreen ? 'px-8' : 'px-2'}`}>
          <span className={`${isFullscreen ? 'text-5xl' : 'text-2xl'}`}>👈</span>
          <span className={`${isFullscreen ? 'text-5xl' : 'text-2xl'}`}>👉</span>
        </div>
      </div>

      <div className={`flex w-full gap-2 ${isFullscreen ? 'p-4 gap-4' : 'p-2'}`}>
        <div className={`flex-1 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 text-center shadow-lg ${isFullscreen ? 'py-6' : 'py-3'}`}>
          <span className={`font-bold text-white ${isFullscreen ? 'text-xl' : 'text-xs'}`}>{currentCategorySet.left}</span>
        </div>
        <div className={`flex-1 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-center shadow-lg ${isFullscreen ? 'py-6' : 'py-3'}`}>
          <span className={`font-bold text-white ${isFullscreen ? 'text-xl' : 'text-xs'}`}>{currentCategorySet.right}</span>
        </div>
      </div>

      <div className="flex justify-center pb-1">
        <span className={`text-slate-500 ${isFullscreen ? 'text-sm' : 'text-[10px]'}`}>
          Set {(categorySetIndex % CATEGORY_SETS.length) + 1}/{CATEGORY_SETS.length} | Speed: {speed.toFixed(1)}
        </span>
      </div>
    </div>
  );
};
