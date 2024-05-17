import HuaDiaoUrl from '../../images/characters/OthersHuaDiao.png';
import HuaDiaoShotUrl from '../../images/characters/OthersHuaDiaoShot.png';
import defaultSkillsPoint from '../../skills/DefaultSkillsPoint';

const BlackRoseYinLian = {
    type: 'NPC',
    imageUrl: HuaDiaoUrl,
    iconUrl: HuaDiaoShotUrl,
    idName: 'others_hua_diao',
    name: '花雕',
    fullname: '花雕',
    shortDescription: '游荡于世界的僵尸，对任何事物都充满了好奇心。',
    race: '不死者（僵尸）',
    gender: 0,
    age: 1625,
    startYear: 1789,
    birthday: '164-?-?',
    height: 172,
    weight: 130,
    preference: ['花雕酒',' 胭脂', '上好的绸缎', '白鹤', '桂花糕'],
    aversion: ['珍视的人被伤害或欺负'],
    personality: ['活泼', '单纯', '好奇'],
    occupation: ['武术家'],
    side: ['独立者'],
    faith: {
        morality: 5,
        orderliness: 1,
        extroversion: 5,
        peacefulness: 3,
        equality: 5,
        idealism: 3
    },
    story: ['等待编写角色故事'],
    level: 200,
    experience: 201000,
    size: [1, 1],
    property: {
        health: [11031, 0],
        magic: [160, 0],
        attack: [646, 0],
        defend: [900, 0],
        damage: [400, 0],
        movement: [5, 0],
        initiative: [550, 0],
        morale: [48, 0],
        critic: [16, 0],
    },
    status: {
        strength: [3000, 0],
        constitution: [5000, 0],
        agility: [550, 0],
        willpower: [2000, 0],
        intelligence: [650, 0],
        power: [300, 0],
        appearance: [1000, 400],
        luck: [100, 0],
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

export default BlackRoseYinLian;