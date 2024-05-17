import YinLianUrl from '../../images/characters/BlackRoseYinLian.png';
import YinLianShotUrl from '../../images/characters/BlackRoseYinLianShot.png';
import defaultSkillsPoint from '../../skills/DefaultSkillsPoint';

const BlackRoseYinLian = {
    type: 'NPC',
    imageUrl: YinLianUrl,
    iconUrl: YinLianShotUrl,
    idName: 'black_rose_yin_lian',
    name: '银莲',
    fullname: '银莲',
    shortDescription: '黑玫瑰义军的成员，身手敏捷、执行任务高效。',
    race: '人类（芙拉）',
    gender: 0,
    age: 17,
    startYear: 1789,
    birthday: '1772-3-11',
    height: 161,
    weight: 48,
    preference: ['友情', '亲情'],
    aversion: ['虐待', '恐吓'],
    personality: ['三无', '冷静', '纯洁'],
    occupation: ['暗杀者', '黑玫瑰义军成员'],
    side: ['黑玫瑰义军'],
    faith: {
        morality: 4,
        orderliness: 3,
        extroversion: 2,
        peacefulness: 2,
        equality: 2,
        idealism: 3
    },
    story: ['等待编写角色故事'],
    level: 50,
    experience: 12750,
    size: [1, 1],
    property: {
        health: [1888, 0],
        magic: [65, 0],
        attack: [195, 0],
        defend: [160, 0],
        damage: [182, 0],
        movement: [12, 0],
        initiative: [1380, 0],
        morale: [34, 0],
        critic: [37, 0],
    },
    status: {
        strength: [600, 0],
        constitution: [600, 0],
        agility: [1200, 0],
        willpower: [900, 0],
        intelligence: [800, 0],
        power: [200, 0],
        appearance: [900, 0],
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

export default BlackRoseYinLian;