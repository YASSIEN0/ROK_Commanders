
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { commanders } from '../data/commanders';
import { RARITY_COLORS, SCULPTURE_REQUIREMENTS, STAR_REQUIREMENTS, calculateXP, XP_TOMES, STAR_REQUIREMENTS_DATA, COMMANDER_IMAGES } from '../data/gameData';
import { 
  ChevronLeft, Star, Zap, Target, Calculator as CalcIcon, Sparkles, BookOpen,
  Shield, Wind, Castle, Swords, Crown, Flame, Combine, Pickaxe, Heart, Layers, ShieldCheck, Crosshair
} from 'lucide-react';
import { cn } from '../lib/utils';

const TALENT_ICONS: Record<string, any> = {
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

const TALENT_COLORS: Record<string, string> = {
  'Infantry': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'Cavalry': 'text-red-400 bg-red-500/10 border-red-500/20',
  'Archer': 'text-green-400 bg-green-500/10 border-green-500/20',
  'Garrison': 'text-yellow-500 bg-yellow-600/10 border-yellow-600/20',
  'Skill': 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  'Peacekeeping': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'Leadership': 'text-amber-400 bg-amber-500/10 border-amber-400/20',
  'Conquering': 'text-orange-500 bg-orange-600/10 border-orange-600/20',
  'Attack': 'text-red-500 bg-red-600/10 border-red-600/20',
  'Integration': 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20',
  'Gathering': 'text-lime-500 bg-lime-600/10 border-lime-600/20',
  'Support': 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  'Versatility': 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  'Defense': 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  'Mobility': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
};

export const CommanderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const commander = commanders.find(c => c.id === id);
  
  const [calcLevel, setCalcLevel] = useState(60);
  const [calcStartLevel, setCalcStartLevel] = useState(1);
  const [calcRarity, setCalcRarity] = useState(commander?.rarity || 'Legendary');

  if (!commander) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Commander Not Found</h1>
        <Link to="/" className="text-orange-500 hover:underline">Return Home</Link>
      </div>
    );
  }

  const totalSculptures = SCULPTURE_REQUIREMENTS[commander.rarity].reduce((a, b) => a + b, 0);
  const xpNeeded = calculateXP(calcStartLevel, calcLevel, calcRarity);

  // Calculate stars needed for the next tier
  // Stars are typically needed at levels 10, 20, 30, 40, 50
  const getStarsNeeded = () => {
    const starLevels = [10, 20, 30, 40, 50];
    const requirements = STAR_REQUIREMENTS_DATA[calcRarity as keyof typeof STAR_REQUIREMENTS_DATA] || STAR_REQUIREMENTS_DATA.Legendary;
    
    let totalStars = 0;
    starLevels.forEach((lvl, idx) => {
      if (calcStartLevel <= lvl && calcLevel > lvl) {
        totalStars += requirements[idx] || 0;
      }
    });
    return totalStars;
  };

  const starsRequired = getStarsNeeded();

  const getNextTierStars = () => {
    const starLevels = [10, 20, 30, 40, 50];
    const requirements = STAR_REQUIREMENTS_DATA[calcRarity as keyof typeof STAR_REQUIREMENTS_DATA] || STAR_REQUIREMENTS_DATA.Legendary;
    
    const nextTierIdx = starLevels.findIndex(lvl => calcStartLevel <= lvl);
    if (nextTierIdx === -1) return 0;
    return requirements[nextTierIdx] || 0;
  };

  const nextTierStars = getNextTierStars();
  const nextTierLevel = [10, 20, 30, 40, 50].find(lvl => calcStartLevel <= lvl) || 60;

  const calculateTomes = (totalXp: number) => {
    let remaining = totalXp;
    return XP_TOMES.map(tome => {
      const count = Math.floor(remaining / tome.xp);
      remaining %= tome.xp;
      return { ...tome, count };
    });
  };

  const tomesNeeded = calculateTomes(xpNeeded);

  return (
    <div className="space-y-12">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-500 transition-colors">
        <ChevronLeft size={20} />
        <span>Back to Gallery</span>
      </Link>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Portrait & Basic Info */}
        <div className="w-full lg:col-span-5 space-y-6 lg:space-y-8 lg:sticky lg:top-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative group flex justify-center lg:block"
          >
            {/* Rarity Glow Background */}
            <div className={cn(
              "absolute -inset-4 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity rounded-[3rem] hidden lg:block",
              commander.rarity === 'Legendary' ? "bg-orange-500" :
              commander.rarity === 'Epic' ? "bg-purple-500" :
              commander.rarity === 'Elite' ? "bg-blue-500" :
              "bg-green-500"
            )} />
            
            <div className={cn(
              "relative aspect-[3/4] sm:aspect-[2/3] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] w-full max-w-[280px] sm:max-w-xs lg:max-w-none h-auto max-h-[50vh] lg:max-h-none flex items-center justify-center bg-black/20",
              commander.rarity === 'Legendary' ? "border-orange-500/30 shadow-orange-500/20" :
              commander.rarity === 'Epic' ? "border-purple-500/30 shadow-purple-500/20" :
              commander.rarity === 'Elite' ? "border-blue-500/30 shadow-blue-500/20" :
              "border-green-500/30 shadow-green-500/20"
            )}>
              <img 
                src={COMMANDER_IMAGES[commander.name] || COMMANDER_IMAGES["Sun Tzu"]} 
                alt={commander.name} 
                className="max-w-[200px] h-auto mx-auto rounded-lg transition-transform duration-700 group-hover:scale-110 opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Rarity Badge Overlay */}
              <div className={cn(
                "absolute top-4 right-4 lg:top-6 lg:right-6 px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-[8px] lg:text-[10px] font-black uppercase tracking-widest border backdrop-blur-md",
                commander.rarity === 'Legendary' ? "bg-orange-500/20 border-orange-500/50 text-orange-500" :
                commander.rarity === 'Epic' ? "bg-purple-500/20 border-purple-500/50 text-purple-500" :
                commander.rarity === 'Elite' ? "bg-blue-500/20 border-blue-500/50 text-blue-500" :
                "bg-green-500/20 border-green-500/50 text-green-500"
              )}>
                {commander.rarity}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-zinc-900/50 border border-white/5 space-y-4 lg:space-y-6 backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className={cn("w-2 h-2 rounded-full animate-pulse", 
                  commander.rarity === 'Legendary' ? "bg-orange-500" :
                  commander.rarity === 'Epic' ? "bg-purple-500" :
                  commander.rarity === 'Elite' ? "bg-blue-500" :
                  "bg-green-500"
                )} />
                <p className={cn("text-[10px] lg:text-xs font-black uppercase tracking-widest", RARITY_COLORS[commander.rarity])}>
                  {commander.rarity} Commander
                </p>
              </div>
              <h1 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase italic leading-none">{commander.name}</h1>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="px-3 lg:px-4 py-1 lg:py-1.5 bg-white/5 rounded-full border border-white/10 text-[9px] lg:text-[10px] font-black text-zinc-400 uppercase tracking-wider">
                {commander.nationality}
              </div>
              {commander.specialties.map(s => (
                <div key={s} className="px-3 lg:px-4 py-1 lg:py-1.5 bg-orange-500/10 rounded-full border border-orange-500/20 text-[9px] lg:text-[10px] font-black text-orange-400 uppercase tracking-wider">
                  {s}
                </div>
              ))}
            </div>

            <div className="relative">
              <span className="absolute -top-3 -left-1 lg:-top-4 lg:-left-2 text-4xl lg:text-6xl text-white/5 font-serif">"</span>
              <p className="text-zinc-400 text-xs lg:text-sm leading-relaxed italic relative z-10 pl-2">
                {commander.biography}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Mechanics & Calculator */}
          <div className="lg:col-span-7 space-y-12 w-full overflow-hidden">
            {/* Skills */}
            <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Zap className="text-orange-500" />
              <h2 className="text-2xl font-bold uppercase italic">Skills & Mechanics</h2>
            </div>
            
            <div className="grid gap-4">
              {commander.skills.map((skill, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/20 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-orange-500">{skill.name}</h3>
                    <span className="text-[10px] px-2 py-0.5 bg-white/10 rounded uppercase font-bold text-zinc-500">
                      {skill.type}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Talent Trees */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Target className="text-orange-500" />
              <h2 className="text-2xl font-bold uppercase italic">Talent Builds</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {commander.talentTrees.map(tree => {
                const Icon = TALENT_ICONS[tree] || Star;
                const colors = TALENT_COLORS[tree] || 'text-zinc-500 bg-white/5 border-white/10';
                
                return (
                  <motion.div 
                    key={tree}
                    whileHover={{ y: -5 }}
                    className={cn(
                      "p-4 sm:p-6 rounded-2xl sm:rounded-3xl border text-center transition-all duration-300",
                      colors
                    )}
                  >
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-white/5">
                      <Icon size={20} className="sm:w-7 sm:h-7" />
                    </div>
                    <p className="font-black uppercase text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em]">{tree}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Upgrade Calculator */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <CalcIcon className="text-orange-500" />
              <h2 className="text-2xl font-bold uppercase italic">Upgrade Calculator</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold uppercase text-sm text-zinc-500">Requirements</h3>
                  <button 
                    onClick={() => { setCalcStartLevel(1); setCalcLevel(60); }}
                    className="text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    Reset to Max
                  </button>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-xs text-zinc-500 uppercase font-bold">Commander Rarity</label>
                    <select 
                      value={calcRarity}
                      onChange={(e) => setCalcRarity(e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 appearance-none cursor-pointer"
                    >
                      {['Legendary', 'Epic', 'Elite', 'Advanced'].map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <label className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Current Level</label>
                        <span className="text-xl font-black text-white italic">Lvl {calcStartLevel}</span>
                      </div>
                      <div className="p-6 bg-black border border-white/10 rounded-xl space-y-4">
                        <input 
                          type="range" 
                          min="1" 
                          max="60" 
                          value={calcStartLevel}
                          onChange={(e) => {
                            const val = Math.min(60, Math.max(1, parseInt(e.target.value) || 1));
                            setCalcStartLevel(val);
                            if (val > calcLevel) setCalcLevel(val);
                          }}
                          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                        <div className="flex justify-between text-[8px] font-bold text-zinc-600 uppercase tracking-tighter">
                          <span>1</span>
                          <span>15</span>
                          <span>30</span>
                          <span>45</span>
                          <span>60</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <label className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Target Level</label>
                        <span className="text-xl font-black text-orange-500 italic">Lvl {calcLevel}</span>
                      </div>
                      <div className="p-6 bg-black border border-white/10 rounded-xl space-y-4">
                        <input 
                          type="range" 
                          min="1" 
                          max="60" 
                          value={calcLevel}
                          onChange={(e) => {
                            const val = Math.min(60, Math.max(1, parseInt(e.target.value) || 1));
                            setCalcLevel(val);
                            if (val < calcStartLevel) setCalcStartLevel(val);
                          }}
                          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                        <div className="flex justify-between text-[8px] font-bold text-zinc-600 uppercase tracking-tighter">
                          <span>1</span>
                          <span>15</span>
                          <span>30</span>
                          <span>45</span>
                          <span>60</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-orange-500/5 p-4 rounded-xl border border-orange-500/10">
                        <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Total XP Needed</p>
                        <p className="text-2xl font-black text-orange-500 leading-none">{xpNeeded.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Tomes Breakdown (Optimal Usage)</p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {tomesNeeded.map((tome, i) => (
                          <div key={i} className="bg-white/5 p-2 rounded-lg border border-white/10 text-center">
                            <p className={cn("text-[8px] font-black uppercase mb-1", tome.color)}>{tome.name.split(' ')[1]}</p>
                            <p className="text-xs font-black text-white">x{tome.count.toLocaleString()}</p>
                            <p className="text-[6px] text-zinc-600 mt-1">{tome.xp.toLocaleString()} XP</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-500/5 p-4 rounded-xl border border-yellow-500/10 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Stars for Next Tier (Lvl {nextTierLevel})</p>
                        <p className="text-xl font-black text-yellow-500 leading-none">
                          {nextTierStars > 0 ? `${nextTierStars.toLocaleString()} Stars` : 'Max Tier Reached'}
                        </p>
                      </div>
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center backdrop-blur-sm">
                            <Star size={12} className="text-yellow-500 fill-yellow-500" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-zinc-500">
                          <BookOpen size={14} />
                          <p className="text-[10px] font-bold uppercase tracking-wider">Total Stars (Start → Target)</p>
                        </div>
                        <span className="text-sm font-black text-white">{starsRequired.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-500 transition-all duration-500" 
                          style={{ width: `${Math.min(100, (starsRequired / 1000) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-6">
                <h3 className="font-bold uppercase text-sm text-zinc-500">Skill & Star Requirements</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-400">Total Sculptures for Expertise</span>
                    <span className="text-xl font-black text-orange-500">{totalSculptures}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-zinc-500 uppercase">Sculpture Breakdown</p>
                    <div className="flex flex-wrap gap-2">
                      {SCULPTURE_REQUIREMENTS[commander.rarity].map((req, i) => (
                        <div key={i} className="w-8 h-8 flex items-center justify-center bg-white/5 rounded text-[10px] font-bold">
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-yellow-500" />
                      <p className="text-xs text-zinc-500 uppercase">Star Requirements</p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {STAR_REQUIREMENTS[commander.rarity].map((req, i) => (
                        <div key={i} className="text-center">
                          <div className="w-full aspect-square flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-xs font-bold text-yellow-500 mb-1">
                            {req}
                          </div>
                          <span className="text-[8px] text-zinc-500 uppercase">{i + 2}★</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
