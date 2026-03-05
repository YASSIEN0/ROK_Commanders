
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowUpDown, Shield, Wind, Crosshair, Castle, Zap, ShieldCheck, Crown, Flame, Swords, Combine, Pickaxe, Heart, Layers, Star } from 'lucide-react';
import { commanders } from '../data/commanders';
import { RARITY_COLORS, RARITY_BG, COMMANDER_IMAGES } from '../data/gameData';
import { cn } from '../lib/utils';

const SPECIALTY_ICONS: Record<string, any> = {
  'Infantry': Shield,
  'Cavalry': Wind,
  'Archer': Crosshair,
  'Garrison': Castle,
  'Skill': Zap,
  'Peacekeeping': ShieldCheck,
  'Leadership': Crown,
  'Conquering': Flame,
  'Attack': Swords,
  'Integration': Combine,
  'Gathering': Pickaxe,
  'Support': Heart,
  'Versatility': Layers,
  'Defense': Shield,
  'Mobility': Wind,
};

const CommanderCard: React.FC<{ commander: any; idx: number }> = ({ commander, idx }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: idx * 0.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute inset-x-2 bottom-full mb-3 z-50 p-4 rounded-2xl bg-zinc-900/98 border border-white/10 backdrop-blur-xl shadow-2xl pointer-events-none"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <p className="text-[9px] font-black uppercase tracking-widest text-orange-500">Historical Record</p>
                <p className="text-[8px] text-zinc-500 font-black uppercase tracking-tighter">{commander.nationality}</p>
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed italic line-clamp-6">
                "{commander.biography}"
              </p>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <Link 
        to={`/commander/${commander.id}`}
        className={cn(
          "group block relative aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 border transition-all hover:-translate-y-1 hover:shadow-xl",
          commander.rarity === 'Legendary' ? "border-orange-500/10 hover:border-orange-500/30" :
          commander.rarity === 'Epic' ? "border-purple-500/10 hover:border-purple-500/30" :
          commander.rarity === 'Elite' ? "border-blue-500/10 hover:border-blue-500/30" :
          "border-green-500/10 hover:border-green-500/30"
        )}
      >
        <img 
          src={COMMANDER_IMAGES[commander.name] || COMMANDER_IMAGES["Sun Tzu"]} 
          alt={commander.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "max-w-[200px] h-auto mx-auto rounded-lg transition-all duration-700 group-hover:scale-105",
            isLoaded ? "opacity-100 blur-0" : "opacity-100 blur-sm grayscale"
          )}
          referrerPolicy="no-referrer"
        />
        
        {/* Consistent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="flex items-center gap-2 mb-1">
            <div className={cn("w-1.5 h-1.5 rounded-full", 
              commander.rarity === 'Legendary' ? "bg-orange-500" :
              commander.rarity === 'Epic' ? "bg-purple-500" :
              commander.rarity === 'Elite' ? "bg-blue-500" :
              "bg-green-500"
            )} />
            <p className={cn("text-[9px] font-black uppercase tracking-widest", RARITY_COLORS[commander.rarity])}>
              {commander.rarity}
            </p>
          </div>
          
          <h3 className="text-lg font-bold leading-tight group-hover:text-orange-500 transition-colors truncate">
            {commander.name}
          </h3>

          <div className="flex gap-1.5 mt-1.5">
            {commander.specialties.slice(0, 2).map((s: string) => {
              const Icon = SPECIALTY_ICONS[s] || Star;
              return (
                <span 
                  key={s} 
                  className="inline-flex items-center gap-1 text-[8px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-md uppercase font-bold tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors"
                >
                  <Icon size={10} className="opacity-70" />
                  {s}
                </span>
              );
            })}
          </div>
          
          <div className="flex flex-wrap gap-1.5 mt-4 h-6 content-start overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
            {commander.specialties.slice(2).map((s: string) => {
              const Icon = SPECIALTY_ICONS[s] || Star;
              return (
                <span 
                  key={s} 
                  className="inline-flex items-center gap-1 text-[7px] px-2 py-0.5 bg-black/40 border border-white/5 rounded-full uppercase font-black tracking-wider text-zinc-500"
                >
                  <Icon size={8} className="opacity-50" />
                  {s}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'rarity' | 'specialty' | 'nationality'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const rarities = ['Legendary', 'Epic', 'Elite', 'Advanced'];
  const rarityOrder: Record<string, number> = {
    'Legendary': 0,
    'Epic': 1,
    'Elite': 2,
    'Advanced': 3
  };

  const filteredCommanders = commanders
    .filter((commander) => {
      const matchesSearch = commander.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRarity = selectedRarity ? commander.rarity === selectedRarity : true;
      return matchesSearch && matchesRarity;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'rarity') {
        comparison = rarityOrder[a.rarity] - rarityOrder[b.rarity];
        // If rarity is same, sort by name
        if (comparison === 0) comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'specialty') {
        comparison = a.specialties[0].localeCompare(b.specialties[0]);
        if (comparison === 0) comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'nationality') {
        comparison = a.nationality.localeCompare(b.nationality);
        if (comparison === 0) comparison = a.name.localeCompare(b.name);
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-900/20 to-zinc-900 border border-white/5">
        <div className="relative z-10 px-6 sm:px-8 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-7xl font-black tracking-tighter uppercase italic mb-4 sm:mb-6 leading-none"
          >
            Rise of <span className="text-orange-500">Kingdoms</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8 max-w-xl"
          >
            Master the art of war with our comprehensive commander database and advanced battle simulator. 
            Analyze stats, plan talent builds, and calculate upgrade requirements to dominate the kingdom.
          </motion.p>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedRarity(null)}
              className={cn(
                "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border transition-all active:scale-95",
                !selectedRarity ? "bg-white text-black border-white" : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/30"
              )}
            >
              All
            </button>
            {rarities.map((rarity) => (
              <button 
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                className={cn(
                  "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border transition-all active:scale-95",
                  selectedRarity === rarity 
                    ? cn("bg-opacity-100 text-white", RARITY_BG[rarity as keyof typeof RARITY_BG].split(' ')[0].replace('/10', ''))
                    : cn("bg-opacity-10 text-zinc-400 hover:text-white", RARITY_BG[rarity as keyof typeof RARITY_BG])
                )}
              >
                {rarity}
              </button>
            ))}
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full opacity-10 sm:opacity-20 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/rok-hero/800/800" 
            alt="Hero Background" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-transparent to-[#0a0a0a] sm:to-transparent" />
        </div>
      </section>

      {/* Commander Gallery */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight uppercase italic">Commander Gallery</h2>
            <p className="text-zinc-500">
              {selectedRarity ? `${selectedRarity} Commanders` : 'All Commanders'} — {filteredCommanders.length} Found
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1 sm:w-48">
              <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={16} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-zinc-900 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500/50 appearance-none cursor-pointer transition-colors"
              >
                <option value="name">Sort by Name</option>
                <option value="rarity">Sort by Rarity</option>
                <option value="specialty">Sort by Primary Specialty</option>
                <option value="nationality">Sort by Nationality</option>
              </select>
            </div>

            <button
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm hover:border-orange-500/30 transition-all flex items-center justify-center gap-2"
              title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
            >
              <span className="text-zinc-400 uppercase font-black text-[10px] tracking-widest">
                {sortOrder === 'asc' ? 'ASC' : 'DESC'}
              </span>
            </button>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input
                type="text"
                placeholder="Search commanders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {filteredCommanders.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCommanders.map((commander, idx) => (
                <CommanderCard key={commander.id} commander={commander} idx={idx} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl bg-zinc-900/20">
            <p className="text-zinc-500 italic">No commanders found matching your criteria.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedRarity(null); }}
              className="mt-4 text-orange-500 text-sm font-bold uppercase hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
