
export interface Skill {
  name: string;
  description: string;
  type: 'Active' | 'Passive';
}

export interface Commander {
  id: string;
  name: string;
  rarity: 'Legendary' | 'Epic' | 'Elite' | 'Advanced';
  nationality: string;
  biography: string;
  portrait: string;
  specialties: string[];
  skills: Skill[];
  talentTrees: string[];
}

export const commanders: Commander[] = [
  {
    id: 'sun-tzu',
    name: 'Sun Tzu',
    rarity: 'Epic',
    nationality: 'China',
    biography: 'A legendary Chinese military strategist, Taoist philosopher, and general in the 6th century BC.',
    portrait: 'https://rok.guide/wp-content/uploads/sun-tzu.webp',
    specialties: ['Infantry', 'Garrison', 'Skill'],
    skills: [
      { name: 'Art of War', type: 'Active', description: 'Deals direct damage to up to 3 targets in a fan-shaped area, and deals additional damage to these targets on the next turn.' },
      { name: 'Philosophy of War', type: 'Passive', description: 'Reduces damage taken by garrison when this commander is serving as garrison commander.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Skill']
  },
  {
    id: 'minamoto',
    name: 'Minamoto no Yoshitsune',
    rarity: 'Legendary',
    nationality: 'Japan',
    biography: 'A military commander of the Minamoto clan of Japan in the late Heian and early Kamakura periods.',
    portrait: 'https://rok.guide/wp-content/uploads/minamoto-no-yoshitsune.webp',
    specialties: ['Cavalry', 'Peacekeeping', 'Skill'],
    skills: [
      { name: 'Kyoichi', type: 'Active', description: 'Deals massive direct damage to a single target and has a chance to deal additional damage each second for the next 2 seconds.' }
    ],
    talentTrees: ['Cavalry', 'Peacekeeping', 'Skill']
  },
  {
    id: 'scipio-africanus',
    name: 'Scipio Africanus',
    rarity: 'Epic',
    nationality: 'Rome',
    biography: 'A Roman general and later consul who is often regarded as one of the greatest military commanders and strategists of all time.',
    portrait: 'https://rok.guide/wp-content/uploads/scipio-africanus.webp',
    specialties: ['Leadership', 'Conquering', 'Attack'],
    skills: [
      { name: 'Military Life', type: 'Active', description: 'Reduces damage taken and increases counterattack damage for a short period.' }
    ],
    talentTrees: ['Leadership', 'Conquering', 'Attack']
  },
  {
    id: 'aethelflaed',
    name: 'Aethelflaed',
    rarity: 'Legendary',
    nationality: 'Britain',
    biography: 'The Lady of the Mercians, who ruled Mercia in the English Midlands from 911 until her death.',
    portrait: 'https://rok.guide/wp-content/uploads/aethelflaed.webp',
    specialties: ['Leadership', 'Peacekeeping', 'Support'],
    skills: [
      { name: 'Arrow of Arrows', type: 'Active', description: 'Deals direct damage to up to 5 targets in a forward-facing fan-shaped area, and reduces their attack, defense, and health.' }
    ],
    talentTrees: ['Leadership', 'Peacekeeping', 'Support']
  },
  {
    id: 'joan-of-arc',
    name: 'Joan of Arc',
    rarity: 'Epic',
    nationality: 'France',
    biography: 'A heroine of France for her role during the Lancastrian phase of the Hundred Years War.',
    portrait: 'https://rok.guide/wp-content/uploads/joan-of-arc.webp',
    specialties: ['Integration', 'Gathering', 'Support'],
    skills: [
      { name: 'Divine Revelation', type: 'Active', description: 'Joan of Arc grants a powerful buff to her own troops and nearby allied troops.' }
    ],
    talentTrees: ['Integration', 'Gathering', 'Support']
  },
  {
    id: 'boudica',
    name: 'Boudica',
    rarity: 'Epic',
    nationality: 'Britain',
    biography: 'A queen of the British Celtic Iceni tribe who led an uprising against the occupying forces of the Roman Empire.',
    portrait: 'https://rok.guide/wp-content/uploads/boudica.webp',
    specialties: ['Integration', 'Peacekeeping', 'Skill'],
    skills: [
      { name: 'Lament of the Insurgent', type: 'Active', description: 'Deals direct damage to the target, reduces their rage, and decreases their attack.' }
    ],
    talentTrees: ['Integration', 'Peacekeeping', 'Skill']
  },
  {
    id: 'guan-yu',
    name: 'Guan Yu',
    rarity: 'Legendary',
    nationality: 'China',
    biography: 'A general serving under the warlord Liu Bei during the late Eastern Han dynasty of China.',
    portrait: 'https://rok.guide/wp-content/uploads/guan-yu.webp',
    specialties: ['Infantry', 'Conquering', 'Skill'],
    skills: [
      { name: 'Saint of War', type: 'Active', description: 'Deals direct damage to up to 3 targets in a fan-shaped area and silences them.' }
    ],
    talentTrees: ['Infantry', 'Conquering', 'Skill']
  },
  {
    id: 'alexander-the-great',
    name: 'Alexander the Great',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A king of the ancient Greek kingdom of Macedon and a member of the Argead dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/alexander-the-great.webp',
    specialties: ['Infantry', 'Versatility', 'Attack'],
    skills: [
      { name: 'Shield of the King', type: 'Active', description: 'Alexander gains a massive shield for 4 seconds. While the shield is active, he also grants a smaller shield to a nearby ally.' }
    ],
    talentTrees: ['Infantry', 'Versatility', 'Attack']
  },
  {
    id: 'yi-seong-gye',
    name: 'Yi Seong-Gye',
    rarity: 'Legendary',
    nationality: 'Korea',
    biography: 'The founder and the first king of the Joseon Dynasty of Korea.',
    portrait: 'https://rok.guide/wp-content/uploads/yi-seong-gye.webp',
    specialties: ['Archer', 'Garrison', 'Skill'],
    skills: [
      { name: 'Rain of Arrows', type: 'Active', description: 'Deals direct damage to up to 5 targets in a circular area.' }
    ],
    talentTrees: ['Archer', 'Garrison', 'Skill']
  },
  {
    id: 'richard-i',
    name: 'Richard I',
    rarity: 'Legendary',
    nationality: 'Britain',
    biography: 'King of England from 1189 until his death. He also ruled as Duke of Normandy, Aquitaine and Gascony.',
    portrait: 'https://rok.guide/wp-content/uploads/richard-i.webp',
    specialties: ['Infantry', 'Garrison', 'Defense'],
    skills: [
      { name: 'Soul of the Crusaders', type: 'Active', description: 'Heals wounded units and reduces damage taken by troops in a fan-shaped area.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Defense']
  },
  {
    id: 'charles-martel',
    name: 'Charles Martel',
    rarity: 'Legendary',
    nationality: 'France',
    biography: 'A Frankish statesman and military leader who as Duke and Prince of the Franks and Mayor of the Palace.',
    portrait: 'https://rok.guide/wp-content/uploads/charles-martel.webp',
    specialties: ['Infantry', 'Garrison', 'Defense'],
    skills: [
      { name: 'Shield of France', type: 'Active', description: 'Charles gains a shield that absorbs damage and increases his troops damage.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Defense']
  },
  {
    id: 'cao-cao',
    name: 'Cao Cao',
    rarity: 'Legendary',
    nationality: 'China',
    biography: 'A Chinese statesman and warlord who rose to great power in the final years of the Eastern Han dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/cao-cao.webp',
    specialties: ['Cavalry', 'Peacekeeping', 'Mobility'],
    skills: [
      { name: 'Dragon Rider', type: 'Active', description: 'Deals direct damage to the target and reduces their attack and march speed.' }
    ],
    talentTrees: ['Cavalry', 'Peacekeeping', 'Mobility']
  },
  {
    id: 'saladin',
    name: 'Saladin',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The first sultan of Egypt and Syria and the founder of the Ayyubid dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/saladin.webp',
    specialties: ['Cavalry', 'Conquering', 'Support'],
    skills: [
      { name: 'Hold Fast', type: 'Active', description: 'Deals direct damage to the target and reduces their march speed and healing received.' }
    ],
    talentTrees: ['Cavalry', 'Conquering', 'Support']
  },
  {
    id: 'genghis-khan',
    name: 'Genghis Khan',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The founder and first Great Khan of the Mongol Empire, which became the largest contiguous empire in history after his death.',
    portrait: 'https://rok.guide/wp-content/uploads/genghis-khan.webp',
    specialties: ['Cavalry', 'Versatility', 'Skill'],
    skills: [
      { name: 'Chosen One', type: 'Active', description: 'Deals massive direct damage to a single target.' }
    ],
    talentTrees: ['Cavalry', 'Versatility', 'Skill']
  },
  {
    id: 'attila',
    name: 'Attila',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The ruler of the Huns from 434 until his death in March 453.',
    portrait: 'https://rok.guide/wp-content/uploads/attila.webp',
    specialties: ['Cavalry', 'Conquering', 'Attack'],
    skills: [
      { name: 'King of the Huns', type: 'Active', description: 'Increases normal attack damage and counterattack damage for 4 seconds.' }
    ],
    talentTrees: ['Cavalry', 'Conquering', 'Attack']
  },
  {
    id: 'takeda-shingen',
    name: 'Takeda Shingen',
    rarity: 'Legendary',
    nationality: 'Japan',
    biography: 'A pre-eminent daimyo in feudal Japan with exceptional military prestige in the late stage of the Sengoku period.',
    portrait: 'https://rok.guide/wp-content/uploads/takeda-shingen.webp',
    specialties: ['Cavalry', 'Versatility', 'Defense'],
    skills: [
      { name: 'Furin Kazan', type: 'Active', description: 'Grants a buff to his troops, increasing their attack, defense, and march speed.' }
    ],
    talentTrees: ['Cavalry', 'Versatility', 'Defense']
  },
  {
    id: 'ramesses-ii',
    name: 'Ramesses II',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The third pharaoh of the Nineteenth Dynasty of Egypt. He is often regarded as the greatest, most celebrated, and most powerful pharaoh of the New Kingdom.',
    portrait: 'https://rok.guide/wp-content/uploads/ramesses-ii.webp',
    specialties: ['Archer', 'Conquering', 'Attack'],
    skills: [
      { name: 'Ceremony of Karnak', type: 'Active', description: 'Deals direct damage to the target and reduces their defense.' }
    ],
    talentTrees: ['Archer', 'Conquering', 'Attack']
  },
  {
    id: 'artemisia-i',
    name: 'Artemisia I',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A queen of the ancient Greek city-state of Halicarnassus and of the nearby islands of Kos, Nisyros and Kalymnos.',
    portrait: 'https://rok.guide/wp-content/uploads/artemisia-i.webp',
    specialties: ['Archer', 'Garrison', 'Defense'],
    skills: [
      { name: 'Battle of Salamis', type: 'Active', description: 'Deals direct damage to up to 3 targets in a forward-facing fan-shaped area, but also deals damage to her own troops.' }
    ],
    talentTrees: ['Archer', 'Garrison', 'Defense']
  },
  {
    id: 'nebuchadnezzar-ii',
    name: 'Nebuchadnezzar II',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The longest-reigning and most powerful monarch of the Neo-Babylonian Empire.',
    portrait: 'https://rok.guide/wp-content/uploads/nebuchadnezzar-ii.webp',
    specialties: ['Archer', 'Conquering', 'Skill'],
    skills: [
      { name: 'Babylonian King', type: 'Active', description: 'Deals direct damage to up to 5 targets in a forward-facing fan-shaped area.' }
    ],
    talentTrees: ['Archer', 'Conquering', 'Skill']
  },
  {
    id: 'cyrus-the-great',
    name: 'Cyrus the Great',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The founder of the Achaemenid Empire, the first Persian Empire.',
    portrait: 'https://rok.guide/wp-content/uploads/cyrus-the-great.webp',
    specialties: ['Archer', 'Versatility', 'Attack'],
    skills: [
      { name: 'King of the World', type: 'Active', description: 'Deals direct damage to the target and increases archer attack.' }
    ],
    talentTrees: ['Archer', 'Versatility', 'Attack']
  },
  {
    id: 'william-i',
    name: 'William I',
    rarity: 'Legendary',
    nationality: 'Britain',
    biography: 'Usually known as William the Conqueror and sometimes William the Bastard, was the first Norman King of England.',
    portrait: 'https://rok.guide/wp-content/uploads/william-i.webp',
    specialties: ['Cavalry', 'Versatility', 'Attack'],
    skills: [
      { name: 'Hidden Bloodline', type: 'Active', description: 'Deals direct damage to up to 3 targets in a forward-facing fan-shaped area.' }
    ],
    talentTrees: ['Cavalry', 'Versatility', 'Attack']
  },
  {
    id: 'chandragupta-maurya',
    name: 'Chandragupta Maurya',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The founder of the Maurya Empire in ancient India.',
    portrait: 'https://rok.guide/wp-content/uploads/chandragupta-maurya.webp',
    specialties: ['Cavalry', 'Conquering', 'Attack'],
    skills: [
      { name: 'Hidden Moon', type: 'Active', description: 'Increases troop attack and deals additional damage on normal attacks.' }
    ],
    talentTrees: ['Cavalry', 'Conquering', 'Attack']
  },
  {
    id: 'harald-sigurdsson',
    name: 'Harald Sigurdsson',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'King of Norway from 1046 to 1066. He also unsuccessfully claimed both the Danish throne until 1064 and the English throne in 1066.',
    portrait: 'https://rok.guide/wp-content/uploads/harald-sigurdsson.webp',
    specialties: ['Infantry', 'Conquering', 'Skill'],
    skills: [
      { name: 'Berserker', type: 'Active', description: 'Deals direct damage to the target and increases infantry attack.' }
    ],
    talentTrees: ['Infantry', 'Conquering', 'Skill']
  },
  {
    id: 'zenobia',
    name: 'Zenobia',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A third-century queen of the Palmyrene Empire in Syria.',
    portrait: 'https://rok.guide/wp-content/uploads/zenobia.webp',
    specialties: ['Infantry', 'Garrison', 'Support'],
    skills: [
      { name: 'Queen of Palmyra', type: 'Active', description: 'Heals wounded units and grants a buff to nearby allied troops.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Support']
  },
  {
    id: 'yi-sun-sin',
    name: 'Yi Sun-Sin',
    rarity: 'Legendary',
    nationality: 'Korea',
    biography: 'A Korean naval commander noted for his victories against the Japanese navy during the Imjin War in the Joseon Dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/yi-sun-sin.webp',
    specialties: ['Leadership', 'Garrison', 'Defense'],
    skills: [
      { name: 'Chungmu', type: 'Active', description: 'Deals direct damage to the target and reduces their attack.' }
    ],
    talentTrees: ['Leadership', 'Garrison', 'Defense']
  },
  {
    id: 'mulan',
    name: 'Mulan',
    rarity: 'Legendary',
    nationality: 'China',
    biography: 'A legendary Chinese warrior from the Northern and Southern dynasties period of Chinese history.',
    portrait: 'https://rok.guide/wp-content/uploads/mulan.webp',
    specialties: ['Integration', 'Peacekeeping', 'Support'],
    skills: [
      { name: 'Act of Grace', type: 'Active', description: 'Grants a powerful buff to nearby allied troops, increasing their attack, defense, and health.' }
    ],
    talentTrees: ['Integration', 'Peacekeeping', 'Support']
  },
  {
    id: 'honda-tadakatsu',
    name: 'Honda Tadakatsu',
    rarity: 'Legendary',
    nationality: 'Japan',
    biography: 'A Japanese samurai, general, and daimyo of the late Sengoku through early Edo periods.',
    portrait: 'https://rok.guide/wp-content/uploads/honda-tadakatsu.webp',
    specialties: ['Leadership', 'Versatility', 'Skill'],
    skills: [
      { name: '蜻蛉切', type: 'Active', description: 'Deals direct damage to up to 3 targets in a fan-shaped area.' }
    ],
    talentTrees: ['Leadership', 'Versatility', 'Skill']
  },
  {
    id: 'trajan',
    name: 'Trajan',
    rarity: 'Legendary',
    nationality: 'Rome',
    biography: 'Roman emperor from 98 to 117. Officially declared by the Senate optimus princeps.',
    portrait: 'https://rok.guide/wp-content/uploads/trajan.webp',
    specialties: ['Leadership', 'Versatility', 'Support'],
    skills: [
      { name: 'Great Expedition', type: 'Active', description: 'Increases troop health and grants a buff to nearby allied troops.' }
    ],
    talentTrees: ['Leadership', 'Versatility', 'Support']
  },
  {
    id: 'cheok-jun-gyeong',
    name: 'Cheok Jun-Gyeong',
    rarity: 'Legendary',
    nationality: 'Korea',
    biography: 'A Korean general and politician during the Goryeo Dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/cheok-jun-gyeong.webp',
    specialties: ['Infantry', 'Conquering', 'Attack'],
    skills: [
      { name: 'Goryeo Sword', type: 'Active', description: 'Deals direct damage to the target and increases infantry attack.' }
    ],
    talentTrees: ['Infantry', 'Conquering', 'Attack']
  },
  {
    id: 'gilgamesh',
    name: 'Gilgamesh',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A major hero in ancient Mesopotamian mythology and the protagonist of the Epic of Gilgamesh.',
    portrait: 'https://rok.guide/wp-content/uploads/gilgamesh.webp',
    specialties: ['Archer', 'Conquering', 'Attack'],
    skills: [
      { name: 'King of Uruk', type: 'Active', description: 'Deals direct damage to the target and reduces their defense.' }
    ],
    talentTrees: ['Archer', 'Conquering', 'Attack']
  },
  {
    id: 'amanitore',
    name: 'Amanitore',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A Kandake of the Kingdom of Kush who ruled from Meroë.',
    portrait: 'https://rok.guide/wp-content/uploads/amanitore.webp',
    specialties: ['Archer', 'Garrison', 'Defense'],
    skills: [
      { name: 'Justice of Meroe', type: 'Active', description: 'Deals direct damage to the target and increases archer defense.' }
    ],
    talentTrees: ['Archer', 'Garrison', 'Defense']
  },
  {
    id: 'pakal-ii',
    name: 'Pakal II',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'Ajaw of the Maya city-state of Palenque in the Late Classic period of pre-Columbian Mesoamerican chronology.',
    portrait: 'https://rok.guide/wp-content/uploads/pakal-ii.webp',
    specialties: ['Infantry', 'Conquering', 'Attack'],
    skills: [
      { name: 'Great Shield of Palenque', type: 'Active', description: 'Pakal gains a shield and increases his troops damage.' }
    ],
    talentTrees: ['Infantry', 'Conquering', 'Attack']
  },
  {
    id: 'flavius-aetius',
    name: 'Flavius Aetius',
    rarity: 'Legendary',
    nationality: 'Rome',
    biography: 'A Roman general of the closing period of the Western Roman Empire.',
    portrait: 'https://rok.guide/wp-content/uploads/flavius-aetius.webp',
    specialties: ['Infantry', 'Garrison', 'Defense'],
    skills: [
      { name: 'Last of the Romans', type: 'Active', description: 'Deals direct damage to the target and increases infantry defense.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Defense']
  },
  {
    id: 'scipio-prime',
    name: 'Scipio Africanus Prime',
    rarity: 'Legendary',
    nationality: 'Rome',
    biography: 'The legendary Roman general returned in his prime to lead the legions once more.',
    portrait: 'https://rok.guide/wp-content/uploads/scipio-africanus-prime.webp',
    specialties: ['Infantry', 'Versatility', 'Skill'],
    skills: [
      { name: 'Unstoppable Force', type: 'Active', description: 'Deals direct damage to up to 3 targets in a fan-shaped area and reduces their health.' }
    ],
    talentTrees: ['Infantry', 'Versatility', 'Skill']
  },
  {
    id: 'boudica-prime',
    name: 'Boudica Prime',
    rarity: 'Legendary',
    nationality: 'Britain',
    biography: 'The Iceni Queen in her prime, leading her people with renewed fury.',
    portrait: 'https://rok.guide/wp-content/uploads/boudica-prime.webp',
    specialties: ['Archer', 'Versatility', 'Skill'],
    skills: [
      { name: 'Iceni Fury', type: 'Active', description: 'Deals direct damage to the target and increases archer attack.' }
    ],
    talentTrees: ['Archer', 'Versatility', 'Skill']
  },
  {
    id: 'henry-v',
    name: 'Henry V',
    rarity: 'Legendary',
    nationality: 'Britain',
    biography: 'King of England from 1413 until his death in 1422.',
    portrait: 'https://rok.guide/wp-content/uploads/henry-v.webp',
    specialties: ['Archer', 'Conquering', 'Attack'],
    skills: [
      { name: 'Agincourt', type: 'Active', description: 'Deals direct damage to the target and increases archer attack.' }
    ],
    talentTrees: ['Archer', 'Conquering', 'Attack']
  },
  {
    id: 'jan-zizka',
    name: 'Jan Zizka',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A Czech general, contemporary and follower of Jan Hus and a radical Hussite leader.',
    portrait: 'https://rok.guide/wp-content/uploads/jan-zizka.webp',
    specialties: ['Infantry', 'Garrison', 'Defense'],
    skills: [
      { name: 'War Wagon', type: 'Active', description: 'Deals direct damage to the target and increases infantry defense.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Defense']
  },
  {
    id: 'joan-prime',
    name: 'Joan of Arc Prime',
    rarity: 'Legendary',
    nationality: 'France',
    biography: 'The Maid of Orleans in her prime, a symbol of hope and divine strength.',
    portrait: 'https://rok.guide/wp-content/uploads/joan-of-arc-prime.webp',
    specialties: ['Cavalry', 'Versatility', 'Support'],
    skills: [
      { name: 'Saintly Banner', type: 'Active', description: 'Grants a powerful buff to nearby allied troops.' }
    ],
    talentTrees: ['Cavalry', 'Versatility', 'Support']
  },
  {
    id: 'tariq',
    name: 'Tariq ibn Ziyad',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'An Umayyad commander who led the Muslim conquest of Visigothic Hispania in 711–718 A.D.',
    portrait: 'https://rok.guide/wp-content/uploads/tariq-ibn-ziyad.webp',
    specialties: ['Infantry', 'Conquering', 'Attack'],
    skills: [
      { name: 'Gibraltar', type: 'Active', description: 'Deals direct damage to the target and increases infantry attack.' }
    ],
    talentTrees: ['Infantry', 'Conquering', 'Attack']
  },
  {
    id: 'sargon',
    name: 'Sargon the Great',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The first ruler of the Akkadian Empire, known for his conquests of the Sumerian city-states.',
    portrait: 'https://rok.guide/wp-content/uploads/sargon-the-great.webp',
    specialties: ['Infantry', 'Versatility', 'Attack'],
    skills: [
      { name: 'Empire Builder', type: 'Active', description: 'Deals direct damage to the target and increases infantry attack.' }
    ],
    talentTrees: ['Infantry', 'Versatility', 'Attack']
  },
  {
    id: 'heraclius',
    name: 'Heraclius',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The Emperor of the Byzantine Empire from 610 to 641.',
    portrait: 'https://rok.guide/wp-content/uploads/heraclius.webp',
    specialties: ['Leadership', 'Garrison', 'Defense'],
    skills: [
      { name: 'Byzantine Shield', type: 'Active', description: 'Deals direct damage to the target and increases troop defense.' }
    ],
    talentTrees: ['Leadership', 'Garrison', 'Defense']
  },
  {
    id: 'zhuge-liang',
    name: 'Zhuge Liang',
    rarity: 'Legendary',
    nationality: 'China',
    biography: 'A Chinese statesman and strategist. He was the chancellor and regent of the state of Shu Han during the Three Kingdoms period.',
    portrait: 'https://rok.guide/wp-content/uploads/zhuge-liang.webp',
    specialties: ['Archer', 'Versatility', 'Skill'],
    skills: [
      { name: 'Chu-ko-nu', type: 'Active', description: 'Deals direct damage to up to 3 targets in a fan-shaped area.' }
    ],
    talentTrees: ['Archer', 'Versatility', 'Skill']
  },
  {
    id: 'dido',
    name: 'Dido',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The founder and first queen of Carthage.',
    portrait: 'https://rok.guide/wp-content/uploads/dido.webp',
    specialties: ['Archer', 'Garrison', 'Defense'],
    skills: [
      { name: 'Founder of Carthage', type: 'Active', description: 'Deals direct damage to the target and increases archer defense.' }
    ],
    talentTrees: ['Archer', 'Garrison', 'Defense']
  },
  {
    id: 'pyrrhus',
    name: 'Pyrrhus',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A Greek king and statesman of the Hellenistic period.',
    portrait: 'https://rok.guide/wp-content/uploads/pyrrhus.webp',
    specialties: ['Infantry', 'Versatility', 'Attack'],
    skills: [
      { name: 'Pyrrhic Victory', type: 'Active', description: 'Deals direct damage to the target and increases infantry attack.' }
    ],
    talentTrees: ['Infantry', 'Versatility', 'Attack']
  },
  {
    id: 'huo-qubing',
    name: 'Huo Qubing',
    rarity: 'Legendary',
    nationality: 'China',
    biography: 'A Chinese military general of the Western Han dynasty during the reign of Emperor Wu.',
    portrait: 'https://rok.guide/wp-content/uploads/huo-qubing.webp',
    specialties: ['Cavalry', 'Versatility', 'Attack'],
    skills: [
      { name: 'Champion of Han', type: 'Active', description: 'Deals direct damage to the target and increases cavalry attack.' }
    ],
    talentTrees: ['Cavalry', 'Versatility', 'Attack']
  },
  {
    id: 'justinian',
    name: 'Justinian I',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The Eastern Roman emperor from 527 to 565.',
    portrait: 'https://rok.guide/wp-content/uploads/justinian-i.webp',
    specialties: ['Cavalry', 'Garrison', 'Defense'],
    skills: [
      { name: 'Code of Justinian', type: 'Active', description: 'Deals direct damage to the target and increases cavalry defense.' }
    ],
    talentTrees: ['Cavalry', 'Garrison', 'Defense']
  },
  {
    id: 'liu-che',
    name: 'Liu Che',
    rarity: 'Legendary',
    nationality: 'China',
    biography: 'The seventh emperor of the Han dynasty of China, ruling from 141 to 87 BC.',
    portrait: 'https://rok.guide/wp-content/uploads/liu-che.webp',
    specialties: ['Infantry', 'Versatility', 'Attack'],
    skills: [
      { name: 'Heavenly Might', type: 'Active', description: 'Deals direct damage to the target and increases infantry attack.' }
    ],
    talentTrees: ['Infantry', 'Versatility', 'Attack']
  },
  {
    id: 'gorgo',
    name: 'Gorgo',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The daughter of King Cleomenes I of Sparta and the wife of King Leonidas I.',
    portrait: 'https://rok.guide/wp-content/uploads/gorgo.webp',
    specialties: ['Infantry', 'Garrison', 'Defense'],
    skills: [
      { name: 'Queen of Sparta', type: 'Active', description: 'Deals direct damage to the target and increases infantry defense.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Defense']
  },
  {
    id: 'hermann-prime',
    name: 'Hermann Prime',
    rarity: 'Legendary',
    nationality: 'Germany',
    biography: 'The Cherusci chieftain in his prime, leading the Germanic tribes to victory.',
    portrait: 'https://rok.guide/wp-content/uploads/hermann-prime.webp',
    specialties: ['Archer', 'Versatility', 'Skill'],
    skills: [
      { name: 'Teutoburg Fury', type: 'Active', description: 'Deals direct damage to the target and increases archer attack.' }
    ],
    talentTrees: ['Archer', 'Versatility', 'Skill']
  },
  {
    id: 'ashurbanipal',
    name: 'Ashurbanipal',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The last great king of the Neo-Assyrian Empire.',
    portrait: 'https://rok.guide/wp-content/uploads/ashurbanipal.webp',
    specialties: ['Archer', 'Conquering', 'Attack'],
    skills: [
      { name: 'Library of Nineveh', type: 'Active', description: 'Deals direct damage to the target and increases archer attack.' }
    ],
    talentTrees: ['Archer', 'Conquering', 'Attack']
  },
  {
    id: 'lohar',
    name: 'Lohar',
    rarity: 'Epic',
    nationality: 'Other',
    biography: 'A barbarian chieftain who was eventually recruited by the kingdom.',
    portrait: 'https://rok.guide/wp-content/uploads/lohar.webp',
    specialties: ['Integration', 'Peacekeeping', 'Support'],
    skills: [
      { name: 'Overwhelming Force', type: 'Active', description: 'Deals direct damage to the target and heals some wounded units.' }
    ],
    talentTrees: ['Integration', 'Peacekeeping', 'Support']
  },
  {
    id: 'hermann',
    name: 'Hermann',
    rarity: 'Epic',
    nationality: 'Germany',
    biography: 'A chieftain of the Germanic Cherusci tribe who defeated a Roman army in the Battle of the Teutoburg Forest.',
    portrait: 'https://rok.guide/wp-content/uploads/hermann.webp',
    specialties: ['Archer', 'Garrison', 'Skill'],
    skills: [
      { name: 'Ambush', type: 'Active', description: 'Deals direct damage to the target and reduces their rage.' }
    ],
    talentTrees: ['Archer', 'Garrison', 'Skill']
  },
  {
    id: 'pelagius',
    name: 'Pelagius',
    rarity: 'Epic',
    nationality: 'Spain',
    biography: 'A Visigothic nobleman who founded the Kingdom of Asturias, ruling from 718 until his death.',
    portrait: 'https://rok.guide/wp-content/uploads/pelagius.webp',
    specialties: ['Cavalry', 'Garrison', 'Skill'],
    skills: [
      { name: 'Charge', type: 'Active', description: 'Deals direct damage to the target and increases cavalry attack.' }
    ],
    talentTrees: ['Cavalry', 'Garrison', 'Skill']
  },
  {
    id: 'eulji',
    name: 'Eulji Mundeok',
    rarity: 'Epic',
    nationality: 'Korea',
    biography: 'A military leader of early 7th century Goguryeo, one of the Three Kingdoms of Korea.',
    portrait: 'https://rok.guide/wp-content/uploads/eulji-mundeok.webp',
    specialties: ['Infantry', 'Garrison', 'Attack'],
    skills: [
      { name: 'Water Attack', type: 'Active', description: 'Deals direct damage to the target and reduces their defense.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Attack']
  },
  {
    id: 'kusunoki',
    name: 'Kusunoki Masashige',
    rarity: 'Epic',
    nationality: 'Japan',
    biography: 'A 14th-century samurai who fought for Emperor Go-Daigo in the Genko War.',
    portrait: 'https://rok.guide/wp-content/uploads/kusunoki-masashige.webp',
    specialties: ['Archer', 'Garrison', 'Skill'],
    skills: [
      { name: 'Shichisei Hokoku', type: 'Active', description: 'Removes all negative effects from his troops and deals direct damage to up to 3 targets.' }
    ],
    talentTrees: ['Archer', 'Garrison', 'Skill']
  },
  {
    id: 'baibars',
    name: 'Baibars',
    rarity: 'Epic',
    nationality: 'Other',
    biography: 'The fourth Sultan of Egypt and Syria during the Mamluk Bahri dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/baibars.webp',
    specialties: ['Cavalry', 'Conquering', 'Skill'],
    skills: [
      { name: 'Sandstorm', type: 'Active', description: 'Deals direct damage to up to 3 targets in a fan-shaped area and reduces their march speed.' }
    ],
    talentTrees: ['Cavalry', 'Conquering', 'Skill']
  },
  {
    id: 'osman',
    name: 'Osman I',
    rarity: 'Epic',
    nationality: 'Other',
    biography: 'The leader of the Ottoman Turks and the founder of the Ottoman dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/osman-i.webp',
    specialties: ['Leadership', 'Conquering', 'Skill'],
    skills: [
      { name: 'The Empire Awakens', type: 'Active', description: 'Deals direct damage to the target and deals additional damage on the next turn.' }
    ],
    talentTrees: ['Leadership', 'Conquering', 'Skill']
  },
  {
    id: 'belisarius',
    name: 'Belisarius',
    rarity: 'Epic',
    nationality: 'Rome',
    biography: 'A general of the Byzantine Empire. He was instrumental to Emperor Justinian I\'s ambitious project of reconquering much of the Mediterranean territory.',
    portrait: 'https://rok.guide/wp-content/uploads/belisarius.webp',
    specialties: ['Cavalry', 'Peacekeeping', 'Mobility'],
    skills: [
      { name: 'Deception', type: 'Active', description: 'Reduces the target\'s attack and defense, and deals direct damage on the next turn.' }
    ],
    talentTrees: ['Cavalry', 'Peacekeeping', 'Mobility']
  },
  {
    id: 'bjorn',
    name: 'Bjorn Ironside',
    rarity: 'Epic',
    nationality: 'Other',
    biography: 'A legendary king of Sweden and the first ruler of the Munso dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/bjorn-ironside.webp',
    specialties: ['Infantry', 'Conquering', 'Skill'],
    skills: [
      { name: 'Fearless Fighter', type: 'Active', description: 'Deals direct damage to the target and increases skill damage taken by the target.' }
    ],
    talentTrees: ['Infantry', 'Conquering', 'Skill']
  },
  {
    id: 'matilda',
    name: 'Matilda of Flanders',
    rarity: 'Epic',
    nationality: 'France',
    biography: 'The wife of William the Conqueror and, as such, Queen of England.',
    portrait: 'https://rok.guide/wp-content/uploads/matilda-of-flanders.webp',
    specialties: ['Integration', 'Gathering', 'Support'],
    skills: [
      { name: 'Power of Flanders', type: 'Active', description: 'Increases troop attack and defense.' }
    ],
    talentTrees: ['Integration', 'Gathering', 'Support']
  },
  {
    id: 'diaochan',
    name: 'Diaochan',
    rarity: 'Epic',
    nationality: 'China',
    biography: 'One of the Four Beauties of ancient China.',
    portrait: 'https://rok.guide/wp-content/uploads/diaochan.webp',
    specialties: ['Integration', 'Peacekeeping', 'Support'],
    skills: [
      { name: 'Dance of the Lotus', type: 'Active', description: 'Deals direct damage to the target and heals some wounded units.' }
    ],
    talentTrees: ['Integration', 'Peacekeeping', 'Support']
  },
  {
    id: 'keira',
    name: 'Keira',
    rarity: 'Epic',
    nationality: 'Other',
    biography: 'A mysterious archer known for her precision and deadly aim.',
    portrait: 'https://rok.guide/wp-content/uploads/keira.webp',
    specialties: ['Archer', 'Peacekeeping', 'Skill'],
    skills: [
      { name: 'Dance of the Flamestrike', type: 'Active', description: 'Deals direct damage to up to 3 targets in a fan-shaped area.' }
    ],
    talentTrees: ['Archer', 'Peacekeeping', 'Skill']
  },
  {
    id: 'imhotep',
    name: 'Imhotep',
    rarity: 'Epic',
    nationality: 'Other',
    biography: 'An Egyptian chancellor to the Pharaoh Djoser, probable architect of the Step Pyramid.',
    portrait: 'https://rok.guide/wp-content/uploads/imhotep.webp',
    specialties: ['Archer', 'Garrison', 'Support'],
    skills: [
      { name: 'High Priest', type: 'Active', description: 'Reduces the target\'s attack and defense.' }
    ],
    talentTrees: ['Archer', 'Garrison', 'Support']
  },
  {
    id: 'pericles',
    name: 'Pericles',
    rarity: 'Epic',
    nationality: 'Other',
    biography: 'A prominent and influential Greek statesman, orator and general of Athens during its Golden Age.',
    portrait: 'https://rok.guide/wp-content/uploads/pericles.webp',
    specialties: ['Infantry', 'Garrison', 'Support'],
    skills: [
      { name: 'Golden Age', type: 'Active', description: 'Grants a shield to his troops and increases infantry defense.' }
    ],
    talentTrees: ['Infantry', 'Garrison', 'Support']
  },
  {
    id: 'lancelot',
    name: 'Lancelot',
    rarity: 'Elite',
    nationality: 'Britain',
    biography: 'One of the Knights of the Round Table in the Arthurian legend.',
    portrait: 'https://rok.guide/wp-content/uploads/lancelot.webp',
    specialties: ['Cavalry', 'Versatility', 'Mobility'],
    skills: [
      { name: 'Strike', type: 'Active', description: 'Deals direct damage to the target.' }
    ],
    talentTrees: ['Cavalry', 'Versatility', 'Mobility']
  },
  {
    id: 'tomoe',
    name: 'Tomoe Gozen',
    rarity: 'Elite',
    nationality: 'Japan',
    biography: 'An onna-musha from the late Heian period of Japanese history.',
    portrait: 'https://rok.guide/wp-content/uploads/tomoe-gozen.webp',
    specialties: ['Archer', 'Versatility', 'Attack'],
    skills: [
      { name: 'Blood Sakura', type: 'Active', description: 'Increases troop attack and rage restoration.' }
    ],
    talentTrees: ['Archer', 'Versatility', 'Attack']
  },
  {
    id: 'gaius',
    name: 'Gaius Marius',
    rarity: 'Elite',
    nationality: 'Rome',
    biography: 'A Roman general and statesman. He held the office of consul an unprecedented seven times during his career.',
    portrait: 'https://rok.guide/wp-content/uploads/gaius-marius.webp',
    specialties: ['Integration', 'Gathering', 'Skill'],
    skills: [
      { name: 'Savior of Italy', type: 'Active', description: 'Heals wounded units.' }
    ],
    talentTrees: ['Integration', 'Gathering', 'Skill']
  },
  {
    id: 'constance',
    name: 'Constance',
    rarity: 'Elite',
    nationality: 'Other',
    biography: 'A legendary queen known for her wisdom and ability to manage resources.',
    portrait: 'https://rok.guide/wp-content/uploads/constance.webp',
    specialties: ['Integration', 'Gathering', 'Attack'],
    skills: [
      { name: 'Struggle', type: 'Active', description: 'Deals direct damage to the target.' }
    ],
    talentTrees: ['Integration', 'Gathering', 'Attack']
  },
  {
    id: 'sarka',
    name: 'Šárka',
    rarity: 'Elite',
    nationality: 'Other',
    biography: 'A figure in the Bohemian legend of The Maidens\' War.',
    portrait: 'https://rok.guide/wp-content/uploads/sarka.webp',
    specialties: ['Integration', 'Gathering', 'Skill'],
    skills: [
      { name: 'Enchantment', type: 'Active', description: 'Deals direct damage to the target.' }
    ],
    talentTrees: ['Integration', 'Gathering', 'Skill']
  },
  {
    id: 'centurion',
    name: 'Centurion',
    rarity: 'Advanced',
    nationality: 'Rome',
    biography: 'A professional officer of the Roman army after the Marian reforms of 107 BC.',
    portrait: 'https://rok.guide/wp-content/uploads/centurion.webp',
    specialties: ['Integration', 'Gathering', 'Defense'],
    skills: [
      { name: 'Bloodthirsty', type: 'Active', description: 'Increases troop attack.' }
    ],
    talentTrees: ['Integration', 'Gathering', 'Defense']
  },
  {
    id: 'city-keeper',
    name: 'City Keeper',
    rarity: 'Advanced',
    nationality: 'Other',
    biography: 'A dedicated guardian of the city walls.',
    portrait: 'https://rok.guide/wp-content/uploads/city-keeper.webp',
    specialties: ['Infantry', 'Versatility', 'Defense'],
    skills: [
      { name: 'Shield', type: 'Active', description: 'Increases troop defense.' }
    ],
    talentTrees: ['Infantry', 'Versatility', 'Defense']
  },
  {
    id: 'dragon-lancer',
    name: 'Dragon Lancer',
    rarity: 'Advanced',
    nationality: 'Other',
    biography: 'A swift rider skilled in hit-and-run tactics.',
    portrait: 'https://rok.guide/wp-content/uploads/dragon-lancer.webp',
    specialties: ['Cavalry', 'Versatility', 'Mobility'],
    skills: [
      { name: 'Arrow of Death', type: 'Active', description: 'Deals direct damage to the target.' }
    ],
    talentTrees: ['Cavalry', 'Versatility', 'Mobility']
  },
  {
    id: 'markswoman',
    name: 'Markswoman',
    rarity: 'Advanced',
    nationality: 'Other',
    biography: 'A skilled archer who never misses her mark.',
    portrait: 'https://rok.guide/wp-content/uploads/markswoman.webp',
    specialties: ['Archer', 'Versatility', 'Attack'],
    skills: [
      { name: 'Poison Arrow', type: 'Active', description: 'Deals direct damage to the target.' }
    ],
    talentTrees: ['Archer', 'Versatility', 'Attack']
  },
  {
    id: 'frederick-i',
    name: 'Frederick I',
    rarity: 'Legendary',
    nationality: 'Germany',
    biography: 'Frederick I, also known as Frederick Barbarossa, was the Holy Roman Emperor from 1155 until his death.',
    portrait: 'https://rok.guide/wp-content/uploads/frederick-i.webp',
    specialties: ['Leadership', 'Conquering', 'Attack'],
    skills: [{ name: 'Barbarossa', type: 'Active', description: 'Deals direct damage to the target.' }],
    talentTrees: ['Leadership', 'Conquering', 'Attack']
  },
  {
    id: 'el-cid',
    name: 'El Cid',
    rarity: 'Legendary',
    nationality: 'Spain',
    biography: 'A Castilian nobleman and military leader in medieval Spain.',
    portrait: 'https://rok.guide/wp-content/uploads/el-cid.webp',
    specialties: ['Archer', 'Versatility', 'Skill'],
    skills: [{ name: 'Famous Warrior', type: 'Active', description: 'Deals direct damage to the target and silences them.' }],
    talentTrees: ['Archer', 'Versatility', 'Skill']
  },
  {
    id: 'julius-caesar',
    name: 'Julius Caesar',
    rarity: 'Legendary',
    nationality: 'Rome',
    biography: 'A Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic.',
    portrait: 'https://rok.guide/wp-content/uploads/julius-caesar.webp',
    specialties: ['Leadership', 'Conquering', 'Attack'],
    skills: [{ name: 'Unbreakable Will', type: 'Active', description: 'Increases troop attack and defense.' }],
    talentTrees: ['Leadership', 'Conquering', 'Attack']
  },
  {
    id: 'hannibal-barca',
    name: 'Hannibal Barca',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A Carthaginian general and statesman who is widely considered one of the greatest military strategists in history.',
    portrait: 'https://rok.guide/wp-content/uploads/hannibal-barca.webp',
    specialties: ['Leadership', 'Conquering', 'Attack'],
    skills: [{ name: 'War Elephant', type: 'Active', description: 'Deals direct damage to the target and reduces their damage.' }],
    talentTrees: ['Leadership', 'Conquering', 'Attack']
  },
  {
    id: 'mehmed-ii',
    name: 'Mehmed II',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'Commonly known as Mehmed the Conqueror, was an Ottoman Sultan who ruled from August 1444 to September 1446.',
    portrait: 'https://rok.guide/wp-content/uploads/mehmed-ii.webp',
    specialties: ['Leadership', 'Conquering', 'Skill'],
    skills: [{ name: 'Ottoman Cannons', type: 'Active', description: 'Deals direct damage to up to 5 targets in a fan-shaped area.' }],
    talentTrees: ['Leadership', 'Conquering', 'Skill']
  },
  {
    id: 'charlemagne',
    name: 'Charlemagne',
    rarity: 'Legendary',
    nationality: 'France',
    biography: 'King of the Franks from 768, King of the Lombards from 774, and Emperor of the Romans from 800.',
    portrait: 'https://rok.guide/wp-content/uploads/charlemagne.webp',
    specialties: ['Leadership', 'Conquering', 'Skill'],
    skills: [{ name: 'Carolus Magnus', type: 'Active', description: 'Deals direct damage to the target.' }],
    talentTrees: ['Leadership', 'Conquering', 'Skill']
  },
  {
    id: 'ishida-mitsunari',
    name: 'Ishida Mitsunari',
    rarity: 'Legendary',
    nationality: 'Japan',
    biography: 'A Japanese samurai and daimyo of the late Sengoku period of Japan.',
    portrait: 'https://rok.guide/wp-content/uploads/ishida-mitsunari.webp',
    specialties: ['Integration', 'Gathering', 'Support'],
    skills: [{ name: 'Zankoku', type: 'Active', description: 'Increases troop attack and defense.' }],
    talentTrees: ['Integration', 'Gathering', 'Support']
  },
  {
    id: 'seondeok',
    name: 'Seondeok',
    rarity: 'Legendary',
    nationality: 'Korea',
    biography: 'Reigned as Queen of Silla, one of the Three Kingdoms of Korea, from 632 to 647.',
    portrait: 'https://rok.guide/wp-content/uploads/seondeok.webp',
    specialties: ['Integration', 'Gathering', 'Attack'],
    skills: [{ name: 'Insightful Queen', type: 'Active', description: 'Increases troop attack and defense.' }],
    talentTrees: ['Integration', 'Gathering', 'Attack']
  },
  {
    id: 'cleopatra-vii',
    name: 'Cleopatra VII',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The last active ruler of the Ptolemaic Kingdom of Egypt.',
    portrait: 'https://rok.guide/wp-content/uploads/cleopatra-vii.webp',
    specialties: ['Integration', 'Gathering', 'Support'],
    skills: [{ name: 'Queen of Kings', type: 'Active', description: 'Heals wounded units.' }],
    talentTrees: ['Integration', 'Gathering', 'Support']
  },
  {
    id: 'tomyris',
    name: 'Tomyris',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A Massagetean queen who reigned over the Massagetae, an Iranian people from a Scythian pastoral-nomadic confederation of Central Asia.',
    portrait: 'https://rok.guide/wp-content/uploads/tomyris.webp',
    specialties: ['Archer', 'Versatility', 'Attack'],
    skills: [{ name: 'Massagetae Fury', type: 'Active', description: 'Deals direct damage to the target.' }],
    talentTrees: ['Archer', 'Versatility', 'Attack']
  },
  {
    id: 'edward-of-woodstock',
    name: 'Edward of Woodstock',
    rarity: 'Legendary',
    nationality: 'Britain',
    biography: 'Known to history as the Black Prince, was the eldest son of King Edward III of England.',
    portrait: 'https://rok.guide/wp-content/uploads/edward-of-woodstock.webp',
    specialties: ['Archer', 'Versatility', 'Skill'],
    skills: [{ name: 'Black Prince', type: 'Active', description: 'Deals direct damage to the target.' }],
    talentTrees: ['Archer', 'Versatility', 'Skill']
  },
  {
    id: 'leonidas-i',
    name: 'Leonidas I',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A king of the Greek city-state of Sparta, and the 17th of the Agiad line.',
    portrait: 'https://rok.guide/wp-content/uploads/leonidas-i.webp',
    specialties: ['Infantry', 'Versatility', 'Defense'],
    skills: [{ name: 'King of Sparta', type: 'Active', description: 'Increases troop attack and defense.' }],
    talentTrees: ['Infantry', 'Versatility', 'Defense']
  },
  {
    id: 'theodora',
    name: 'Theodora',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'Empress of the Byzantine Empire by marriage to Emperor Justinian I.',
    portrait: 'https://rok.guide/wp-content/uploads/theodora.webp',
    specialties: ['Leadership', 'Garrison', 'Defense'],
    skills: [{ name: 'Empress of Byzantium', type: 'Active', description: 'Deals direct damage to up to 5 targets in a circular area.' }],
    talentTrees: ['Leadership', 'Garrison', 'Defense']
  },
  {
    id: 'moctezuma-i',
    name: 'Moctezuma I',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The second Aztec emperor and fifth king of Tenochtitlan.',
    portrait: 'https://rok.guide/wp-content/uploads/moctezuma-i.webp',
    specialties: ['Leadership', 'Versatility', 'Attack'],
    skills: [{ name: 'Aztec Empire', type: 'Active', description: 'Deals direct damage to the target.' }],
    talentTrees: ['Leadership', 'Versatility', 'Attack']
  },
  {
    id: 'wu-zetian',
    name: 'Wu Zetian',
    rarity: 'Legendary',
    nationality: 'China',
    biography: 'The only female emperor in the history of China.',
    portrait: 'https://rok.guide/wp-content/uploads/wu-zetian.webp',
    specialties: ['Leadership', 'Garrison', 'Support'],
    skills: [{ name: 'Empress Wu', type: 'Active', description: 'Deals direct damage to the target and heals wounded units.' }],
    talentTrees: ['Leadership', 'Garrison', 'Support']
  },
  {
    id: 'constantine-i',
    name: 'Constantine I',
    rarity: 'Legendary',
    nationality: 'Rome',
    biography: 'Roman emperor from 306 to 337. He was the first Roman emperor to convert to Christianity.',
    portrait: 'https://rok.guide/wp-content/uploads/constantine-i.webp',
    specialties: ['Infantry', 'Garrison', 'Defense'],
    skills: [{ name: 'Edict of Milan', type: 'Active', description: 'Reduces damage taken and heals wounded units.' }],
    talentTrees: ['Infantry', 'Garrison', 'Defense']
  },
  {
    id: 'ragnar-lodbrok',
    name: 'Ragnar Lodbrok',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'A legendary Norse Viking hero and king.',
    portrait: 'https://rok.guide/wp-content/uploads/ragnar-lodbrok.webp',
    specialties: ['Leadership', 'Conquering', 'Attack'],
    skills: [{ name: 'King of the North', type: 'Active', description: 'Increases troop attack and defense.' }],
    talentTrees: ['Leadership', 'Conquering', 'Attack']
  },
  {
    id: 'thutmose-iii',
    name: 'Thutmose III',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The sixth pharaoh of the Eighteenth Dynasty.',
    portrait: 'https://rok.guide/wp-content/uploads/thutmose-iii.webp',
    specialties: ['Archer', 'Versatility', 'Attack'],
    skills: [{ name: 'Brave Heart', type: 'Active', description: 'Deals direct damage to the target.' }],
    talentTrees: ['Archer', 'Versatility', 'Attack']
  },
  {
    id: 'jadwiga',
    name: 'Jadwiga',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'The first female monarch of the Kingdom of Poland, reigning from 1384 until her death.',
    portrait: 'https://rok.guide/wp-content/uploads/jadwiga.webp',
    specialties: ['Cavalry', 'Garrison', 'Defense'],
    skills: [{ name: 'Polish Crown', type: 'Active', description: 'Deals direct damage to the target.' }],
    talentTrees: ['Cavalry', 'Garrison', 'Defense']
  },
  {
    id: 'alexander-nevsky',
    name: 'Alexander Nevsky',
    rarity: 'Legendary',
    nationality: 'Other',
    biography: 'Served as Prince of Novgorod, Grand Prince of Kiev and Grand Prince of Vladimir during some of the most difficult times in Kievan Rus\' history.',
    portrait: 'https://rok.guide/wp-content/uploads/alexander-nevsky.webp',
    specialties: ['Cavalry', 'Versatility', 'Skill'],
    skills: [{ name: 'Battle on the Ice', type: 'Active', description: 'Deals direct damage to the target and reduces their defense.' }],
    talentTrees: ['Cavalry', 'Versatility', 'Skill']
  }
];
