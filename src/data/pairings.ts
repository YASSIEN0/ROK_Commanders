
export interface Pairing {
  commanderId: string;
  partnerId: string;
  role: 'Tank' | 'Damage' | 'Support' | 'Garrison' | 'Conquering' | 'Open Field';
  description: string;
}

export const RECOMMENDED_PAIRINGS: Pairing[] = [
  // Sun Tzu
  { commanderId: 'sun-tzu', partnerId: 'bjorn', role: 'Open Field', description: 'Excellent early game infantry pair with high skill damage.' },
  { commanderId: 'sun-tzu', partnerId: 'richard-i', role: 'Tank', description: 'Very durable pair with high AOE damage and healing.' },
  { commanderId: 'sun-tzu', partnerId: 'yi-seong-gye', role: 'Damage', description: 'Massive AOE skill damage, great for group fights.' },
  
  // Minamoto
  { commanderId: 'minamoto', partnerId: 'cao-cao', role: 'Damage', description: 'The classic cavalry nuke pair. High single target damage.' },
  { commanderId: 'minamoto', partnerId: 'pelagius', role: 'Damage', description: 'Good F2P cavalry pair with decent sustain.' },
  
  // Guan Yu
  { commanderId: 'guan-yu', partnerId: 'scipio-prime', role: 'Damage', description: 'The current meta infantry pair. Massive AOE and debuffs.' },
  { commanderId: 'guan-yu', partnerId: 'alexander-the-great', role: 'Damage', description: 'High mobility and high damage infantry pair.' },
  
  // Alexander the Great
  { commanderId: 'alexander-the-great', partnerId: 'guan-yu', role: 'Damage', description: 'Strong synergy with Alex providing shields and Guan providing nukes.' },
  { commanderId: 'alexander-the-great', partnerId: 'scipio-prime', role: 'Damage', description: 'Very strong open field presence with high survivability.' },
  
  // Richard I
  { commanderId: 'richard-i', partnerId: 'charles-martel', role: 'Tank', description: 'The ultimate tank pair. Extremely hard to kill.' },
  { commanderId: 'richard-i', partnerId: 'alexander-the-great', role: 'Tank', description: 'Balanced pair with good defense and decent damage.' },
  
  // YSG
  { commanderId: 'yi-seong-gye', partnerId: 'zhuge-liang', role: 'Damage', description: 'Insane AOE damage. Best archer pair for open field.' },
  { commanderId: 'yi-seong-gye', partnerId: 'boudica-prime', role: 'Damage', description: 'High skill damage and great debuffs.' },
  
  // Saladin
  { commanderId: 'saladin', partnerId: 'genghis-khan', role: 'Damage', description: 'Strong cavalry pair with good control and high burst.' },
  { commanderId: 'saladin', partnerId: 'william-i', role: 'Support', description: 'Great utility pair with AOE buffs and debuffs.' },
  
  // Boudica Prime
  { commanderId: 'boudica-prime', partnerId: 'zhuge-liang', role: 'Damage', description: 'Top tier archer pair. High damage and silence.' },
  { commanderId: 'boudica-prime', partnerId: 'yi-seong-gye', role: 'Damage', description: 'Classic archer nuke pair.' },
  
  // Scipio Prime
  { commanderId: 'scipio-prime', partnerId: 'guan-yu', role: 'Damage', description: 'Best infantry pair for AOE damage.' },
  { commanderId: 'scipio-prime', partnerId: 'liu-che', role: 'Damage', description: 'High damage and great survivability.' },
  
  // Zhuge Liang
  { commanderId: 'zhuge-liang', partnerId: 'boudica-prime', role: 'Damage', description: 'Unmatched archer AOE damage.' },
  { commanderId: 'zhuge-liang', partnerId: 'hermann-prime', role: 'Damage', description: 'High skill damage and poison synergy.' },
  
  // Liu Che
  { commanderId: 'liu-che', partnerId: 'scipio-prime', role: 'Damage', description: 'Current meta infantry pair for massive damage.' },
  { commanderId: 'liu-che', partnerId: 'guan-yu', role: 'Damage', description: 'Strong AOE and control.' },
  
  // Aethelflaed
  { commanderId: 'aethelflaed', partnerId: 'joan-of-arc', role: 'Support', description: 'Great debuff and buff combination for group support.' },
  { commanderId: 'aethelflaed', partnerId: 'yi-seong-gye', role: 'Damage', description: 'Massive AOE debuffs followed by YSG nukes.' },

  // Joan of Arc
  { commanderId: 'joan-of-arc', partnerId: 'scipio-africanus', role: 'Support', description: 'Classic F2P support pair with good durability.' },

  // Cao Cao
  { commanderId: 'cao-cao', partnerId: 'minamoto', role: 'Damage', description: 'High mobility and single target burst.' },

  // Genghis Khan
  { commanderId: 'genghis-khan', partnerId: 'saladin', role: 'Damage', description: 'Pure cavalry damage with high rage restoration.' },

  // Attila
  { commanderId: 'attila', partnerId: 'takeda-shingen', role: 'Damage', description: 'The legendary normal attack pair. Unstoppable in rallies.' },

  // Takeda Shingen
  { commanderId: 'takeda-shingen', partnerId: 'attila', role: 'Damage', description: 'Perfect synergy for normal attack damage and durability.' },

  // Ramesses II
  { commanderId: 'ramesses-ii', partnerId: 'yi-seong-gye', role: 'Damage', description: 'High defense archer pair with great AOE.' },

  // Artemisia I
  { commanderId: 'artemisia-i', partnerId: 'yi-seong-gye', role: 'Damage', description: 'Strong archer defense with high skill damage.' },

  // Nebuchadnezzar II
  { commanderId: 'nebuchadnezzar-ii', partnerId: 'yi-seong-gye', role: 'Damage', description: 'Massive AOE and rage restoration.' },

  // William I
  { commanderId: 'william-i', partnerId: 'saladin', role: 'Support', description: 'Excellent cavalry support with AOE buffs.' },

  // Harald Sigurdsson
  { commanderId: 'harald-sigurdsson', partnerId: 'pakal-ii', role: 'Damage', description: 'Unmatched infantry counterattack and survivability.' },

  // Zenobia
  { commanderId: 'zenobia', partnerId: 'flavius-aetius', role: 'Garrison', description: 'The premier infantry garrison pair.' },

  // Mulan
  { commanderId: 'mulan', partnerId: 'trajan', role: 'Support', description: 'High troop capacity and massive team buffs.' },

  // Trajan
  { commanderId: 'trajan', partnerId: 'mulan', role: 'Support', description: 'Best support pair for increasing allied damage and tankiness.' },

  // Sargon the Great
  { commanderId: 'sargon', partnerId: 'scipio-prime', role: 'Damage', description: 'High skill damage and stacking debuffs.' },

  // Hermann Prime
  { commanderId: 'hermann-prime', partnerId: 'zhuge-liang', role: 'Damage', description: 'Top tier archer pair with poison and silence.' },
];
