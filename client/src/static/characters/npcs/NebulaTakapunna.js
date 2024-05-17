import TakapunnaUrl from '../../images/characters/NebulaTakapunna.png';
import TakapunnaShotUrl from '../../images/characters/NebulaTakapunnaShot.png';
import defaultSkillsPoint from '../../skills/DefaultSkillsPoint';

const NebulaTakapunna = {
    type: 'NPC',
    imageUrl: TakapunnaUrl,
    iconUrl: TakapunnaShotUrl,
    idName: 'nebula_takapunna',
    name: '塔克布娜',
    fullname: '塔克布娜·普兰蒂亚',
    shortDescription: '尼布菈星云城的教皇，曾经的十英雄之一，实力强大。',
    race: '卡泽尔芙',
    gender: 0,
    age: 45,
    startYear: 1789,
    birthday: '1744-1-15',
    height: 176,
    weight: 58,
    preference: ['花茶', '园艺', '家人', '路易斯', '露塔莎'],
    aversion: ['对灵能不敬之人', '伤害家人的人', '卡泽尔芙的种族内斗'],
    personality: ['御姐', '要强', '刻苦'],
    occupation: ['欧菲卢琪星宫议会长'],
    side: ['十二星宫议会'],
    faith: {
        morality: 5,
        orderliness: 4,
        extroversion: 2,
        peacefulness: 3,
        equality: 4,
        idealism: 5
    },
    story: ['等待编写角色故事'],
    level: 200,
    experience: 201000,
    size: [1, 1],
    property: {
        health: [3031, 0],
        magic: [900, 0],
        attack: [560, 1100],
        defend: [500, 100],
        damage: [160, 500],
        movement: [30, 50],
        initiative: [3000, 3000],
        morale: [43, 0],
        critic: [25, 0],
    },
    status: {
        strength: [1000, 0],
        constitution: [1000, 0],
        agility: [3000, 0],
        willpower: [1500, 0],
        intelligence: [1000, 0],
        power: [4000, 0],
        appearance: [1000, 0],
        luck: [500, 0],
        psychic: 10,
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

export default NebulaTakapunna;