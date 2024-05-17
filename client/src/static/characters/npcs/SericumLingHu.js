import LingHuUrl from '../../images/characters/SericumLingHu.png';
import LingHuShotUrl from '../../images/characters/SericumLingHuShot.png';
import defaultSkillsPoint from '../../skills/DefaultSkillsPoint';

const SericumLingHu = {
    type: 'NPC',
    imageUrl: LingHuUrl,
    iconUrl: LingHuShotUrl,
    idName: 'sericum_ling_hu',
    name: '陵瑚',
    fullname: '陵瑚',
    shortDescription: '夏默曼最后的皇室公主，乐于助人但有些害羞。',
    race: '夏默曼',
    gender: 0,
    age: 65,
    startYear: 1789,
    birthday: '1724-11-30',
    height: 169,
    weight: 61,
    preference: ['身边的家人和朋友', '夏默曼族群', '厨艺'],
    aversion: ['破坏自己所珍视事物的人', '无法沟通且带有恶意之人'],
    personality: ['害羞', '人妻', '温柔'],
    occupation: ['夏默曼公主', '归星殿堂宫主', '艾瑞亚斯星宫副议会长'],
    side: ['赛利库姆皇室','十二星宫议会'],
    faith: {
        morality: 5,
        orderliness: 4,
        extroversion: 3,
        peacefulness: 4,
        equality: 2,
        idealism: 4
    },
    story: ['等待编写角色故事'],
    level: 150,
    experience: 113250,
    size: [1, 4],
    property: {
        health: [6128, 0],
        magic: [435, 0],
        attack: [400, 0],
        defend: [560, 0],
        damage: [136, 0],
        movement: [6, 0],
        initiative: [600, 0],
        morale: [45, 0],
        critic: [13, 0],
    },
    status: {
        strength: [800, 0],
        constitution: [2600, 0],
        agility: [600, 0],
        willpower: [1200, 0],
        intelligence: [600, 0],
        power: [1800, 0],
        appearance: [1200, 0],
        luck: [600, 0],
        psychic: 0,
    },
    skills: {
        ...defaultSkillsPoint,
    },
    magics: [],
    abilities: {},
    items: {},
    equips: {},
    relationship: {
    },
}

export default SericumLingHu;