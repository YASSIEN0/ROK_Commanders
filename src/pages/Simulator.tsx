
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { commanders } from '../data/commanders';
import { TROOP_STATS, TROOP_TYPES, TROOP_ADVANTAGES, COMMANDER_IMAGES } from '../data/gameData';
import { RECOMMENDED_PAIRINGS } from '../data/pairings';
import { Sword, Shield, Activity, TrendingUp, Users, Wind, Crosshair, Castle, Swords as SwordsIcon, Info, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const TROOP_ICONS: Record<string, any> = {
  'Infantry': Shield,
  'Cavalry': Wind,
  'Archer': Crosshair,
  'Siege': Castle,
};

const KP_VALUES: Record<string, number> = {
  'T1': 1,
  'T2': 2,
  'T3': 4,
  'T4': 10,
  'T5': 20,
};

interface SimulationResult {
  winner: string;
  p1Remaining: number;
  p2Remaining: number;
  p1DamageDealt: number;
  p2DamageDealt: number;
  p1Wounded: number;
  p2Wounded: number;
  p1Dead: number;
  p2Dead: number;
  p1Advantage: boolean;
  p2Advantage: boolean;
  p1KP: number;
  p2KP: number;
  p1Kills: number;
  p2Kills: number;
}

export const Simulator: React.FC = () => {
  const [p1, setP1] = useState({ id: commanders[0].id, tier: 'T1', type: 'Infantry', count: 100000, level: 60 });
  const [p2, setP2] = useState({ id: commanders[1].id, tier: 'T1', type: 'Infantry', count: 100000, level: 60 });
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showPairings, setShowPairings] = useState<{ p1: boolean; p2: boolean }>({ p1: false, p2: false });

  const handleSimulate = () => {
    setIsSimulating(true);
    setResult(null);

    // Mock simulation logic
    setTimeout(() => {
      const c1 = commanders.find(c => c.id === p1.id)!;
      const c2 = commanders.find(c => c.id === p2.id)!;
      
      const s1 = TROOP_STATS[p1.tier as keyof typeof TROOP_STATS];
      const s2 = TROOP_STATS[p2.tier as keyof typeof TROOP_STATS];

      // Advantage check
      const p1Advantage = TROOP_ADVANTAGES[p1.type] === p2.type;
      const p2Advantage = TROOP_ADVANTAGES[p2.type] === p1.type;

      const advantageMult1 = p1Advantage ? 1.15 : 1.0;
      const advantageMult2 = p2Advantage ? 1.15 : 1.0;

      // Level multiplier: 1% extra power per level
      const levelMult1 = 1 + (p1.level * 0.01);
      const levelMult2 = 1 + (p2.level * 0.01);

      // Very basic formula: (Count * Attack) / Defense
      const p1Power = (p1.count * s1.attack * (c1.rarity === 'Legendary' ? 1.25 : 1.1) * advantageMult1 * levelMult1);
      const p2Power = (p2.count * s2.attack * (c2.rarity === 'Legendary' ? 1.25 : 1.1) * advantageMult2 * levelMult2);

      const winner = p1Power > p2Power ? c1.name : c2.name;
      const p1Remaining = Math.max(0, p1.count - Math.floor(p2Power / s1.defense / 10));
      const p2Remaining = Math.max(0, p2.count - Math.floor(p1Power / s2.defense / 10));

      const p1Lost = p1.count - p1Remaining;
      const p2Lost = p2.count - p2Remaining;

      // Outcome-based casualty rates
      // Winner: 10% dead, 90% wounded
      // Loser: 30% dead, 70% wounded
      const p1IsWinner = winner === c1.name;
      const p1DeadRate = p1IsWinner ? 0.1 : 0.3;
      const p2DeadRate = p1IsWinner ? 0.3 : 0.1;

      setResult({
        winner,
        p1Remaining,
        p2Remaining,
        p1DamageDealt: Math.floor(p1Power / 1000),
        p2DamageDealt: Math.floor(p2Power / 1000),
        p1Wounded: Math.floor(p1Lost * (1 - p1DeadRate)),
        p2Wounded: Math.floor(p2Lost * (1 - p2DeadRate)),
        p1Dead: Math.floor(p1Lost * p1DeadRate),
        p2Dead: Math.floor(p2Lost * p2DeadRate),
        p1Advantage,
        p2Advantage,
        p1KP: p2Lost * (KP_VALUES[p2.tier] || 1),
        p2KP: p1Lost * (KP_VALUES[p1.tier] || 1),
        p1Kills: p2Lost,
        p2Kills: p1Lost,
      });
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4 px-4">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase italic">Battle Simulator</h1>
        <p className="text-sm sm:text-base text-zinc-500">Compare two commanders and their armies to predict the outcome of a duel.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 relative">
        {/* VS Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex w-16 h-16 bg-orange-600 rounded-full items-center justify-center border-4 border-[#0a0a0a] shadow-xl">
          <span className="font-black italic text-xl">VS</span>
        </div>

        {/* Player 1 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50" />
          <h2 className="text-xl font-bold uppercase italic text-orange-500 flex items-center gap-2">
            <SwordsIcon size={20} />
            Challenger 1
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-24 h-32 sm:w-24 sm:h-32 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black shadow-2xl">
                <img 
                  src={COMMANDER_IMAGES[commanders.find(c => c.id === p1.id)?.name || ''] || COMMANDER_IMAGES["Sun Tzu"]} 
                  alt="Commander"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 w-full space-y-4">
                <div>
                  <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Select Commander</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select 
                      value={p1.id}
                      onChange={(e) => setP1({ ...p1, id: e.target.value })}
                      className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-orange-500 appearance-none cursor-pointer"
                    >
                      {commanders.map(c => <option key={c.id} value={c.id}>{c.name} ({c.rarity})</option>)}
                    </select>
                    <button 
                      onClick={() => setShowPairings(prev => ({ ...prev, p1: !prev.p1 }))}
                      className={cn(
                        "flex items-center justify-center gap-2 px-6 py-4 rounded-xl border transition-all shrink-0 active:scale-95",
                        showPairings.p1 
                          ? "bg-orange-500 border-orange-500 text-white" 
                          : "bg-black border-white/10 text-zinc-400 hover:text-orange-500 hover:border-orange-500/50"
                      )}
                      title="View Recommended Pairings"
                    >
                      <Sparkles size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Pairings</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pairing Suggestions P1 */}
            <AnimatePresence>
              {showPairings.p1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-orange-500 flex items-center gap-2">
                      <Info size={12} />
                      Recommended Partners
                    </h4>
                    <div className="space-y-2">
                      {RECOMMENDED_PAIRINGS.filter(p => p.commanderId === p1.id).length > 0 ? (
                        RECOMMENDED_PAIRINGS.filter(p => p.commanderId === p1.id).map((pairing, idx) => {
                          const partner = commanders.find(c => c.id === pairing.partnerId);
                          if (!partner) return null;
                          return (
                            <div key={idx} className="flex gap-3 p-2 rounded-lg bg-black/40 border border-white/5 group/pair">
                              <div className="w-10 h-10 rounded-md overflow-hidden border border-white/10 shrink-0">
                                <img 
                                  src={COMMANDER_IMAGES[partner.name] || COMMANDER_IMAGES["Sun Tzu"]} 
                                  alt={partner.name}
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                  <p className="text-xs font-bold truncate">{partner.name}</p>
                                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-500 font-black uppercase tracking-tighter">
                                    {pairing.role}
                                  </span>
                                </div>
                                <p className="text-[9px] text-zinc-500 leading-tight line-clamp-2">{pairing.description}</p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-[10px] text-zinc-600 italic">No specific recommendations found for this commander.</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Troop Type</label>
                <div className="relative">
                  <select 
                    value={p1.type}
                    onChange={(e) => setP1({ ...p1, type: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-orange-500 appearance-none cursor-pointer"
                  >
                    {TROOP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                    {React.createElement(TROOP_ICONS[p1.type] || Sword, { size: 16 })}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Commander Level</label>
                <div className="space-y-3 p-4 bg-black border border-white/10 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Level</span>
                    <span className="text-xl font-black text-orange-500 italic">Lvl {p1.level}</span>
                  </div>
                  <input 
                    type="range"
                    min="1"
                    max="60"
                    value={p1.level}
                    onChange={(e) => setP1({ ...p1, level: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Troop Tier</label>
                <select 
                  value={p1.tier}
                  onChange={(e) => setP1({ ...p1, tier: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 appearance-none cursor-pointer"
                >
                  {Object.keys(TROOP_STATS).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Troop Count</label>
                <div className="relative">
                  <input 
                    type="number"
                    value={p1.count}
                    onChange={(e) => setP1({ ...p1, count: parseInt(e.target.value) || 0 })}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-600 uppercase">Units</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Player 2 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50" />
          <h2 className="text-xl font-bold uppercase italic text-blue-500 flex items-center gap-2">
            <Shield size={20} />
            Challenger 2
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-24 h-32 sm:w-24 sm:h-32 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black shadow-2xl">
                <img 
                  src={COMMANDER_IMAGES[commanders.find(c => c.id === p2.id)?.name || ''] || COMMANDER_IMAGES["Sun Tzu"]} 
                  alt="Commander"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 w-full space-y-4">
                <div>
                  <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Select Commander</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select 
                      value={p2.id}
                      onChange={(e) => setP2({ ...p2, id: e.target.value })}
                      className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-orange-500 appearance-none cursor-pointer"
                    >
                      {commanders.map(c => <option key={c.id} value={c.id}>{c.name} ({c.rarity})</option>)}
                    </select>
                    <button 
                      onClick={() => setShowPairings(prev => ({ ...prev, p2: !prev.p2 }))}
                      className={cn(
                        "flex items-center justify-center gap-2 px-6 py-4 rounded-xl border transition-all shrink-0 active:scale-95",
                        showPairings.p2 
                          ? "bg-blue-500 border-blue-500 text-white" 
                          : "bg-black border-white/10 text-zinc-400 hover:text-blue-500 hover:border-blue-500/50"
                      )}
                      title="View Recommended Pairings"
                    >
                      <Sparkles size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Pairings</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pairing Suggestions P2 */}
            <AnimatePresence>
              {showPairings.p2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-500 flex items-center gap-2">
                      <Info size={12} />
                      Recommended Partners
                    </h4>
                    <div className="space-y-2">
                      {RECOMMENDED_PAIRINGS.filter(p => p.commanderId === p2.id).length > 0 ? (
                        RECOMMENDED_PAIRINGS.filter(p => p.commanderId === p2.id).map((pairing, idx) => {
                          const partner = commanders.find(c => c.id === pairing.partnerId);
                          if (!partner) return null;
                          return (
                            <div key={idx} className="flex gap-3 p-2 rounded-lg bg-black/40 border border-white/5 group/pair">
                              <div className="w-10 h-10 rounded-md overflow-hidden border border-white/10 shrink-0">
                                <img 
                                  src={COMMANDER_IMAGES[partner.name] || COMMANDER_IMAGES["Sun Tzu"]} 
                                  alt={partner.name}
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                  <p className="text-xs font-bold truncate">{partner.name}</p>
                                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-500 font-black uppercase tracking-tighter">
                                    {pairing.role}
                                  </span>
                                </div>
                                <p className="text-[9px] text-zinc-500 leading-tight line-clamp-2">{pairing.description}</p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-[10px] text-zinc-600 italic">No specific recommendations found for this commander.</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Troop Type</label>
                <div className="relative">
                  <select 
                    value={p2.type}
                    onChange={(e) => setP2({ ...p2, type: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-orange-500 appearance-none cursor-pointer"
                  >
                    {TROOP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                    {React.createElement(TROOP_ICONS[p2.type] || Sword, { size: 16 })}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Commander Level</label>
                <div className="space-y-3 p-4 bg-black border border-white/10 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Level</span>
                    <span className="text-xl font-black text-blue-500 italic">Lvl {p2.level}</span>
                  </div>
                  <input 
                    type="range"
                    min="1"
                    max="60"
                    value={p2.level}
                    onChange={(e) => setP2({ ...p2, level: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Troop Tier</label>
                <select 
                  value={p2.tier}
                  onChange={(e) => setP2({ ...p2, tier: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 appearance-none cursor-pointer"
                >
                  {Object.keys(TROOP_STATS).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Troop Count</label>
                <div className="relative">
                  <input 
                    type="number"
                    value={p2.count}
                    onChange={(e) => setP2({ ...p2, count: parseInt(e.target.value) || 0 })}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-600 uppercase">Units</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <button
          onClick={handleSimulate}
          disabled={isSimulating}
          className="w-full sm:w-auto px-12 py-5 bg-orange-600 hover:bg-orange-700 disabled:bg-zinc-800 rounded-2xl sm:rounded-full font-black uppercase italic tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20 text-lg"
        >
          {isSimulating ? 'Simulating...' : 'Simulate Battle'}
        </button>
      </div>

      {/* Results */}
      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-orange-900/20 to-zinc-900 border border-orange-500/30 space-y-8"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest">
              <SwordsIcon size={12} />
              Battle Result
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent text-center">
                {result.winner} <span className="text-zinc-500">Wins!</span>
              </p>
              
              <div className="flex flex-col items-center gap-6 mt-4 w-full">
                <div className="px-6 py-2 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-3">
                  <Sparkles size={16} className="text-yellow-500" />
                  <div className="text-left">
                    <p className="text-[8px] font-black text-yellow-500/70 uppercase tracking-widest leading-none mb-1">Total Battle KP</p>
                    <p className="text-2xl font-black text-yellow-500 leading-none">{(result.p1KP + result.p2KP).toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-orange-500/5 border border-orange-500/10 min-w-[200px] w-full sm:w-auto">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0">
                      <img 
                        src={COMMANDER_IMAGES[commanders.find(c => c.id === p1.id)?.name || ''] || COMMANDER_IMAGES["Sun Tzu"]} 
                        className="w-full h-full object-cover"
                        alt="P1"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest truncate max-w-[120px]">
                        {commanders.find(c => c.id === p1.id)?.name}
                      </p>
                      <div className="flex gap-4">
                        <div className="flex flex-col">
                          <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-tighter">Kills</span>
                          <span className="text-base font-black text-white leading-none">{result.p1Kills.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-tighter">KP Earned</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-base font-black text-yellow-500 leading-none">{result.p1KP.toLocaleString()}</span>
                            <span className="text-[8px] font-bold text-zinc-500">({Math.round((result.p1KP / (result.p1KP + result.p2KP || 1)) * 100)}%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 min-w-[200px] w-full sm:w-auto">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0">
                      <img 
                        src={COMMANDER_IMAGES[commanders.find(c => c.id === p2.id)?.name || ''] || COMMANDER_IMAGES["Sun Tzu"]} 
                        className="w-full h-full object-cover"
                        alt="P2"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest truncate max-w-[120px]">
                        {commanders.find(c => c.id === p2.id)?.name}
                      </p>
                      <div className="flex gap-4">
                        <div className="flex flex-col">
                          <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-tighter">Kills</span>
                          <span className="text-base font-black text-white leading-none">{result.p2Kills.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-tighter">KP Earned</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-base font-black text-yellow-500 leading-none">{result.p2KP.toLocaleString()}</span>
                            <span className="text-[8px] font-bold text-zinc-500">({Math.round((result.p2KP / (result.p1KP + result.p2KP || 1)) * 100)}%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {(() => {
                const winnerRemaining = result.winner === commanders.find(c => c.id === p1.id)?.name ? result.p1Remaining / p1.count : result.p2Remaining / p2.count;
                let victoryType = "Close Victory";
                let color = "text-yellow-500";
                
                if (winnerRemaining > 0.9) { victoryType = "Flawless Victory"; color = "text-emerald-500"; }
                else if (winnerRemaining > 0.7) { victoryType = "Decisive Victory"; color = "text-green-500"; }
                else if (winnerRemaining > 0.4) { victoryType = "Major Victory"; color = "text-blue-500"; }
                
                return (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={cn("text-xs font-black uppercase tracking-[0.3em] px-4 py-1 rounded-full bg-white/5 border border-white/10", color)}
                  >
                    {victoryType}
                  </motion.span>
                );
              })()}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Remaining Troops */}
            <div className="space-y-4 p-6 rounded-2xl bg-black/20 border border-white/5">
              <div className="flex items-center gap-2 text-zinc-400">
                <Users size={18} className="text-orange-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Troop Survival</span>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-bold">
                    <span className="text-zinc-500">Challenger 1</span>
                    <span className="text-orange-500">{Math.round((result.p1Remaining / p1.count) * 100)}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(result.p1Remaining / p1.count) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-orange-600 to-orange-400" 
                    />
                  </div>
                  <p className="text-[10px] text-right text-zinc-500 font-mono">{result.p1Remaining.toLocaleString()} / {p1.count.toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-bold">
                    <span className="text-zinc-500">Challenger 2</span>
                    <span className="text-blue-500">{Math.round((result.p2Remaining / p2.count) * 100)}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(result.p2Remaining / p2.count) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400" 
                    />
                  </div>
                  <p className="text-[10px] text-right text-zinc-500 font-mono">{result.p2Remaining.toLocaleString()} / {p2.count.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Damage Comparison */}
            <div className="space-y-4 p-6 rounded-2xl bg-black/20 border border-white/5">
              <div className="flex items-center gap-2 text-zinc-400">
                <Sword size={18} className="text-red-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Damage Output</span>
              </div>
              <div className="space-y-6 pt-2">
                <div className="relative h-4 bg-white/5 rounded-full overflow-hidden flex border border-white/5">
                  <motion.div 
                    initial={{ width: "50%" }}
                    animate={{ width: `${(result.p1DamageDealt / (result.p1DamageDealt + result.p2DamageDealt)) * 100}%` }}
                    transition={{ duration: 1, ease: "backOut" }}
                    className="h-full bg-orange-500"
                  />
                  <div className="h-full flex-1 bg-blue-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-full bg-white/20" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-[8px] text-zinc-500 uppercase mb-1">P1 Dealt</p>
                    <p className="text-xl font-black text-orange-500 leading-none">{result.p1DamageDealt.toLocaleString()}</p>
                  </div>
                  <div className="text-center border-l border-white/10">
                    <p className="text-[8px] text-zinc-500 uppercase mb-1">P2 Dealt</p>
                    <p className="text-xl font-black text-blue-500 leading-none">{result.p2DamageDealt.toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-center p-2 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-[8px] text-zinc-500 uppercase mb-1">Total Damage Exchanged</p>
                  <p className="text-sm font-bold">{(result.p1DamageDealt + result.p2DamageDealt).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Casualties Breakdown */}
            <div className="space-y-4 p-6 rounded-2xl bg-black/20 border border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Activity size={18} className="text-red-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">Casualties</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] uppercase font-black">
                    <span className="text-orange-500">P1 Losses</span>
                    <span className="text-zinc-400">{(p1.count - result.p1Remaining).toLocaleString()}</span>
                  </div>
                  <div className="flex h-2 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-red-500 h-full" style={{ width: `${(result.p1Wounded / (p1.count - result.p1Remaining)) * 100}%` }} />
                    <div className="bg-zinc-600 h-full flex-1" />
                  </div>
                  <div className="flex justify-between text-[8px] uppercase font-bold text-zinc-500">
                    <span>{result.p1Wounded.toLocaleString()} Wounded</span>
                    <span>{result.p1Dead.toLocaleString()} Dead</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] uppercase font-black">
                    <span className="text-blue-500">P2 Losses</span>
                    <span className="text-zinc-400">{(p2.count - result.p2Remaining).toLocaleString()}</span>
                  </div>
                  <div className="flex h-2 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-red-500 h-full" style={{ width: `${(result.p2Wounded / (p2.count - result.p2Remaining)) * 100}%` }} />
                    <div className="bg-zinc-600 h-full flex-1" />
                  </div>
                  <div className="flex justify-between text-[8px] uppercase font-bold text-zinc-500">
                    <span>{result.p2Wounded.toLocaleString()} Wounded</span>
                    <span>{result.p2Dead.toLocaleString()} Dead</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kill Points (KP) */}
            <div className="space-y-4 p-6 rounded-2xl bg-black/20 border border-white/5">
              <div className="flex items-center gap-2 text-zinc-400">
                <Sparkles size={18} className="text-yellow-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Kill Points (KP)</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-[10px] font-black uppercase text-orange-500/70">P1 Earned</span>
                    <span className="text-2xl font-black text-orange-500 italic leading-none">{result.p1KP.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[8px] text-zinc-500 font-bold uppercase tracking-tighter">
                    <span>{result.p1Kills.toLocaleString()} {p2.tier} Kills</span>
                    <span>x{KP_VALUES[p2.tier]} Multiplier</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-[10px] font-black uppercase text-blue-500/70">P2 Earned</span>
                    <span className="text-2xl font-black text-blue-500 italic leading-none">{result.p2KP.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[8px] text-zinc-500 font-bold uppercase tracking-tighter">
                    <span>{result.p2Kills.toLocaleString()} {p1.tier} Kills</span>
                    <span>x{KP_VALUES[p1.tier]} Multiplier</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[9px] font-bold text-zinc-500 uppercase">KP Ratio</span>
                    <span className={cn(
                      "text-xs font-black italic",
                      result.p1KP > result.p2KP ? "text-orange-500" : "text-blue-500"
                    )}>
                      {(result.p1KP / (result.p2KP || 1)).toFixed(2)} : 1
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kill Report Section */}
            <div className="col-span-full grid md:grid-cols-2 gap-8 p-8 rounded-3xl bg-black/40 border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black uppercase tracking-widest text-orange-500 flex items-center gap-2">
                    <SwordsIcon size={16} />
                    Challenger 1 Kill Report
                  </h4>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{commanders.find(c => c.id === p1.id)?.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <SwordsIcon size={40} />
                    </div>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Total Kills</p>
                    <p className="text-4xl font-black text-orange-500 leading-none">{result.p1Kills.toLocaleString()}</p>
                    <p className="text-[9px] text-zinc-600 mt-2 font-bold uppercase tracking-tighter italic">Enemy {p2.tier} units eliminated</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Sparkles size={40} />
                    </div>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Kill Points</p>
                    <p className="text-4xl font-black text-yellow-500 leading-none">{result.p1KP.toLocaleString()}</p>
                    <p className="text-[9px] text-zinc-600 mt-2 font-bold uppercase tracking-tighter italic">x{KP_VALUES[p2.tier]} multiplier applied</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 flex items-center gap-2">
                    <Shield size={16} />
                    Challenger 2 Kill Report
                  </h4>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{commanders.find(c => c.id === p2.id)?.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Shield size={40} />
                    </div>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Total Kills</p>
                    <p className="text-4xl font-black text-blue-500 leading-none">{result.p2Kills.toLocaleString()}</p>
                    <p className="text-[9px] text-zinc-600 mt-2 font-bold uppercase tracking-tighter italic">Enemy {p1.tier} units eliminated</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Sparkles size={40} />
                    </div>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Kill Points</p>
                    <p className="text-4xl font-black text-yellow-500 leading-none">{result.p2KP.toLocaleString()}</p>
                    <p className="text-[9px] text-zinc-600 mt-2 font-bold uppercase tracking-tighter italic">x{KP_VALUES[p1.tier]} multiplier applied</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advantages & Efficiency */}
            <div className="space-y-4 p-6 rounded-2xl bg-black/20 border border-white/5">
              <div className="flex items-center gap-2 text-zinc-400">
                <TrendingUp size={18} className="text-green-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Battle Intel</span>
              </div>
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-[8px] text-zinc-500 uppercase font-bold">Kill Points (KP) Breakdown</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-zinc-400 truncate max-w-[120px]">
                      {commanders.find(c => c.id === p1.id)?.name}
                    </span>
                    <span className="text-xs font-black text-orange-500">{result.p1KP.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-zinc-400 truncate max-w-[120px]">
                      {commanders.find(c => c.id === p2.id)?.name}
                    </span>
                    <span className="text-xs font-black text-blue-500">{result.p2KP.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-[8px] text-zinc-500 uppercase font-bold">Type Advantages</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-zinc-400">P1 Advantage</span>
                    <div className={cn("w-2 h-2 rounded-full shadow-[0_0_8px]", result.p1Advantage ? "bg-green-500 shadow-green-500/50" : "bg-zinc-700")} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-zinc-400">P2 Advantage</span>
                    <div className={cn("w-2 h-2 rounded-full shadow-[0_0_8px]", result.p2Advantage ? "bg-green-500 shadow-green-500/50" : "bg-zinc-700")} />
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-[8px] text-zinc-500 uppercase font-bold">Kill/Death Ratio</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-zinc-400">P1 Efficiency</span>
                    <span className="text-xs font-black text-orange-500">
                      {((result.p2Wounded + result.p2Dead) / (result.p1Wounded + result.p1Dead || 1)).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-zinc-400">P2 Efficiency</span>
                    <span className="text-xs font-black text-blue-500">
                      {((result.p1Wounded + result.p1Dead) / (result.p2Wounded + result.p2Dead || 1)).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-[8px] text-zinc-500 uppercase font-bold">KP Efficiency (KP per Loss)</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-zinc-400">P1 KP/Loss</span>
                    <span className="text-xs font-black text-orange-500">
                      {(result.p1KP / (result.p1Wounded + result.p1Dead || 1)).toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-zinc-400">P2 KP/Loss</span>
                    <span className="text-xs font-black text-blue-500">
                      {(result.p2KP / (result.p2Wounded + result.p2Dead || 1)).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
