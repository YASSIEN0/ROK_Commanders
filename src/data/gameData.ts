

// Official RoK XP Data Milestones (Total XP to reach level)
const MILESTONES: Record<string, number[]> = {
  Legendary: [0, 102000, 767000, 3120000, 9340000, 22120000, 51407500],
  Epic: [0, 70000, 525000, 2150000, 6420000, 15220000, 35455000],
  Elite: [0, 48000, 362000, 1480000, 4420000, 10480000, 24425000],
  Advanced: [0, 36000, 272000, 1110000, 3320000, 7860000, 18310000]
};

// Generate XP per level data based on milestones using a polynomial growth distribution
export const ROK_XP_DATA: Record<string, number[]> = {};

Object.keys(MILESTONES).forEach(rarity => {
  const rarityMilestones = MILESTONES[rarity];
  const xpPerLevel: number[] = [];
  
  // Milestones are at levels: 1, 10, 20, 30, 40, 50, 60
  for (let i = 0; i < rarityMilestones.length - 1; i++) {
    const startXp = rarityMilestones[i];
    const endXp = rarityMilestones[i + 1];
    const blockTotal = endXp - startXp;
    const numLevels = i === 0 ? 9 : 10; // 1-10 is 9 steps, others are 10
    
    // Distribute blockTotal using a growth factor to simulate polynomial scaling
    // This ensures smooth transitions while hitting milestones exactly
    const growth = 1.15;
    const sumOfPowers = (Math.pow(growth, numLevels) - 1) / (growth - 1);
    const base = blockTotal / sumOfPowers;
    
    for (let j = 0; j < numLevels; j++) {
      xpPerLevel.push(Math.round(base * Math.pow(growth, j)));
    }
  }
  
  // Final adjustment to ensure the total is exactly as specified
  const currentTotal = xpPerLevel.reduce((a, b) => a + b, 0);
  const targetTotal = rarityMilestones[rarityMilestones.length - 1];
  const diff = targetTotal - currentTotal;
  xpPerLevel[xpPerLevel.length - 1] += diff;
  
  ROK_XP_DATA[rarity] = xpPerLevel;
});

export const calculateXP = (currentLevel: number, targetLevel: number, rarity: string): number => {
  if (currentLevel >= targetLevel) return 0;
  const data = ROK_XP_DATA[rarity] || ROK_XP_DATA.Legendary;
  // currentLevel is 1-indexed, so level 1 to 2 is index 0
  return data.slice(currentLevel - 1, targetLevel - 1).reduce((sum, xp) => sum + xp, 0);
};

export const SCULPTURE_REQUIREMENTS = {
  Legendary: [10, 15, 20, 30, 40, 45, 50, 75, 80, 100, 120, 150], // Total 690
  Epic: [10, 15, 20, 30, 40, 45, 50, 75, 80, 100], // Total 440
  Elite: [10, 15, 20, 30, 40, 45, 50, 75],
  Advanced: [10, 15, 20, 30, 40, 45]
};

// Star Requirements based on user input
// Legendary: 15, 30, 45, 60, 80, 100, 120, 150, 200, 400
// Epic: 60% of Legendary
export const STAR_REQUIREMENTS_DATA = {
  Legendary: [15, 30, 45, 60, 80, 100, 120, 150, 200, 400],
  Epic: [15, 30, 45, 60, 80, 100, 120, 150, 200, 400].map(v => Math.floor(v * 0.6)),
  Elite: [15, 30, 45, 60, 80, 100, 120, 150, 200, 400].map(v => Math.floor(v * 0.4)),
  Advanced: [15, 30, 45, 60, 80, 100, 120, 150, 200, 400].map(v => Math.floor(v * 0.3)),
};

export const STAR_REQUIREMENTS = {
  Legendary: [5, 10, 15, 20, 30], // Stars to reach 2, 3, 4, 5, 6 stars
  Epic: [2, 5, 10, 15, 20],
  Elite: [1, 3, 5, 8, 12],
  Advanced: [1, 2, 4, 6, 8]
};

export const TROOP_STATS = {
  T1: { attack: 10, defense: 10, health: 10 },
  T2: { attack: 20, defense: 20, health: 20 },
  T3: { attack: 40, defense: 40, health: 40 },
  T4: { attack: 80, defense: 80, health: 80 },
  T5: { attack: 150, defense: 150, health: 150 },
};

export const TROOP_TYPES = ['Infantry', 'Cavalry', 'Archer', 'Siege'];

export const TROOP_ADVANTAGES: Record<string, string> = {
  Infantry: 'Cavalry',
  Cavalry: 'Archer',
  Archer: 'Infantry',
};

export const XP_TOMES = [
  { name: 'Lvl 5 Tome', xp: 50000, color: 'text-orange-500' },
  { name: 'Lvl 4 Tome', xp: 10000, color: 'text-purple-500' },
  { name: 'Lvl 3 Tome', xp: 5000, color: 'text-blue-500' },
  { name: 'Lvl 2 Tome', xp: 1000, color: 'text-green-500' },
  { name: 'Lvl 1 Tome', xp: 100, color: 'text-zinc-500' },
];

export const RARITY_COLORS = {
  Legendary: 'text-orange-500',
  Epic: 'text-purple-500',
  Elite: 'text-blue-500',
  Advanced: 'text-green-500'
};

export const RARITY_BG = {
  Legendary: 'bg-orange-500/10 border-orange-500/50',
  Epic: 'bg-purple-500/10 border-purple-500/50',
  Elite: 'bg-blue-500/10 border-blue-500/50',
  Advanced: 'bg-green-500/10 border-green-500/50'
};

export const COMMANDER_IMAGES: Record<string, string> = {
  "Sun Tzu": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Sun_Tzu.png",
  "Minamoto no Yoshitsune": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Minamoto_no_Yoshitsune.png",
  "Scipio Africanus": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Scipio_Africanus.png",
  "Aethelflaed": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Aethelflaed.png",
  "Joan of Arc": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Joan_of_Arc.png",
  "Boudica": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Boudica.png",
  "Guan Yu": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Guan_Yu.png",
  "Alexander the Great": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Alexander_the_Great.png",
  "Yi Seong-Gye": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Yi_Seong-Gye.png",
  "Richard I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Richard_I.png",
  "Charles Martel": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Charles_Martel.png",
  "Cao Cao": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Cao_Cao.png",
  "Saladin": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Saladin.png",
  "Genghis Khan": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Genghis_Khan.png",
  "Attila": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Attila.png",
  "Takeda Shingen": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Takeda_Shingen.png",
  "Ramesses II": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Ramesses_II.png",
  "Artemisia I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Artemisia_I.png",
  "Nebuchadnezzar II": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Nebuchadnezzar_II.png",
  "Cyrus the Great": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Cyrus_the_Great.png",
  "William I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/William_I.png",
  "Chandragupta Maurya": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Chandragupta_Maurya.png",
  "Harald Sigurdsson": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Harald_Sigurdsson.png",
  "Zenobia": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Zenobia.png",
  "Yi Sun-Sin": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Yi_Sun-Sin.png",
  "Mulan": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Mulan.png",
  "Honda Tadakatsu": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Honda_Tadakatsu.png",
  "Trajan": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Trajan.png",
  "Cheok Jun-Gyeong": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Cheok_Jun-Gyeong.png",
  "Gilgamesh": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Gilgamesh.png",
  "Amanitore": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Amanitore.png",
  "Pakal II": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Pakal_II.png",
  "Flavius Aetius": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Flavius_Aetius.png",
  "Scipio Africanus Prime": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Scipio_Africanus_Prime.png",
  "Boudica Prime": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Boudica_Prime.png",
  "Henry V": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Henry_V.png",
  "Jan Zizka": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Jan_Zizka.png",
  "Joan of Arc Prime": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Joan_of_Arc_Prime.png",
  "Tariq ibn Ziyad": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Tariq_ibn_Ziyad.png",
  "Sargon the Great": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Sargon_the_Great.png",
  "Heraclius": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Heraclius.png",
  "Zhuge Liang": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Zhuge_Liang.png",
  "Dido": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Dido.png",
  "Pyrrhus": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Pyrrhus.png",
  "Huo Qubing": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Huo_Qubing.png",
  "Justinian I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Justinian_I.png",
  "Liu Che": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Liu_Che.png",
  "Gorgo": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Gorgo.png",
  "Hermann Prime": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Hermann_Prime.png",
  "Ashurbanipal": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Ashurbanipal.png",
  "Lohar": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Lohar.png",
  "Hermann": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Hermann.png",
  "Pelagius": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Pelagius.png",
  "Eulji Mundeok": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Eulji_Mundeok.png",
  "Kusunoki Masashige": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Kusunoki_Masashige.png",
  "Baibars": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Baibars.png",
  "Osman I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Osman_I.png",
  "Belisarius": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Belisarius.png",
  "Bjorn Ironside": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Bjorn_Ironside.png",
  "Matilda of Flanders": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Matilda_of_Flanders.png",
  "Diaochan": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Diaochan.png",
  "Keira": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Keira.png",
  "Imhotep": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Imhotep.png",
  "Pericles": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Pericles.png",
  "Lancelot": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Lancelot.png",
  "Tomoe Gozen": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Tomoe_Gozen.png",
  "Gaius Marius": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Gaius_Marius.png",
  "Constance": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Constance.png",
  "Šárka": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Šárka.png",
  "Centurion": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Centurion.png",
  "City Keeper": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/City_Keeper.png",
  "Dragon Lancer": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Dragon_Lancer.png",
  "Markswoman": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Markswoman.png",
  "Frederick I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Frederick_I.png",
  "El Cid": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/El_Cid.png",
  "Julius Caesar": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Julius_Caesar.png",
  "Hannibal Barca": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Hannibal_Barca.png",
  "Mehmed II": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Mehmed_II.png",
  "Charlemagne": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Charlemagne.png",
  "Ishida Mitsunari": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Ishida_Mitsunari.png",
  "Seondeok": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Seondeok.png",
  "Cleopatra VII": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Cleopatra_VII.png",
  "Tomyris": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Tomyris.png",
  "Edward of Woodstock": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Edward_of_Woodstock.png",
  "Leonidas I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Leonidas_I.png",
  "Theodora": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Theodora.png",
  "Moctezuma I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Moctezuma_I.png",
  "Wu Zetian": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Wu_Zetian.png",
  "Constantine I": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Constantine_I.png",
  "Ragnar Lodbrok": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Ragnar_Lodbrok.png",
  "Thutmose III": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Thutmose_III.png",
  "Jadwiga": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Jadwiga.png",
  "Alexander Nevsky": "https://riseofkingdoms.fandom.com/wiki/Special:FilePath/Alexander_Nevsky.png"
};
