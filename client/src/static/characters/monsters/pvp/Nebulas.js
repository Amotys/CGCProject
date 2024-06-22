import React from "react";
import DefaultSkillsPoint from '../../skills/DefaultSkillsPoint';
import MonsterNebulasImage from '../../images/monsters/nebula/MonsterNebulasImage';

const NebulaEragon = {
    // 没用的属性
    shortDescription: '',
    race: '',
    gender: 0,
    age: 0,
    startYear: 1789,
    birthday: '',
    height: 0,
    weight: 0,
    preference: [],
    aversion: [],
    personality: [],
    occupation: [],
    faith: {
        morality: 3,
        orderliness: 3,
        extroversion: 3,
        peacefulness: 3,
        equality: 3,
        idealism: 3
    },
    story: [],
    level: 0,
    experience: 0,

    // 有用的属性
    side: ['十二星宫议会'],
    type: 'Monster',
    idName: 'nebula_eragon',
    name: '星云城龙骑士',
    fullname: '星云城龙骑士',
    imageUrl: MonsterNebulasImage.NebulaEragon.NebulaEragonUrl,
    iconUrl: MonsterNebulasImage.NebulaEragon.NebulaEragonIconUrl,
    size: [9, 9],
    property: {
        health: [3600, 0],
        magic: [300, 0],
        attack: [400, 0],
        defend: [280, 0],
        damage: [320, 0],
        movement: [20, 0],
        initiative: [1000, 0],
        morale: [25, 0],
        critic: [15, 0],
    },
    status: {
        strength: [1000, 0],
        constitution: [1000, 0],
        agility: [1000, 0],
        willpower: [800, 0],
        intelligence: [750, 0],
        power: [1000, 0],
        appearance: [575, 0],
        luck: [500, 0],
        psychic: 0,
    },
    skills: {
        ...DefaultSkillsPoint,
        normal: {
            ...DefaultSkillsPoint.normal,
        },
        combat: {
            ...DefaultSkillsPoint.combat,
        },
    },
    magics: [],
    abilities: {
        '大师级剑技·弧光蜿电': '星云城龙骑士的近战攻击宣言射程为1~2、远程攻击宣言射程为1~10，造成的伤害类型均为源力魔法伤害。' +
            '当星云城龙骑士攻击地面目标时，不需要进行箭术判定，而是对射程范围内的单个格子内所有目标造成一次100%伤害的必中普通攻击。' +
            '然后，对其相邻一格的目标格子内所有目标造成一次50%伤害的必中普通攻击。' +
            '当星云城龙骑士攻击骑乘单位时，会对坐骑和骑乘者分别造成100%的伤害。（或对无法分割的骑乘单位造成双倍伤害）',
        '大师级吉拉贡飞行骑乘术': '星云城龙骑士受到远程物理攻击时，有1D3=1的概率闪避；受到魔法攻击时，有1D4=1的概率闪避。（独立计算该技能的闪避）',
        '大师级气系魔法使': '星云城龙骑士咏唱气系魔法时，咏唱需要的回合数-1。若原本咏唱需要的回合数为0，则可以瞬间咏唱完毕。',
        '灵能枷锁': '星云城龙骑士消耗一个动作宣言，对一个距离自身不超过10格的、灵能等级低于6级的飞行单位抛出灵能枷锁，使其处于无法被驱散和消除的【灵能禁锢】状态。' +
            '处于【灵能禁锢】状态下的飞行单位将会停留在空中原地并且无法进行任何宣言，每回合的结束阶段流失5%最大值的健康值（最大200点）直至其倒下为止。' +
            '【灵能禁锢】需要星云城龙骑士每回合消耗一个动作宣言来维持，否则【灵能禁锢】将会在回合结束阶段被解除。' +
            '除此以外，若星云城龙骑士与被禁锢的目标实时距离超过15格，或者星云城龙骑士倒下，则【灵能禁锢】状态会立刻被解除。' +
            '一旦目标的【灵能禁锢】状态被解除，目标将在下个回合内免疫【灵能禁锢】。',
        '灵能障壁': '星云城龙骑士消耗一个动作宣言，可以使自身进入或取消不可被驱散和解除的【灵能障壁】状态。' +
            '处于【灵能障壁】状态下的星云城龙骑士每回合会减少5点魔法值，但受到伤害时，会以（20点伤害/1点魔法值）的效率使用魔法值抵消受到的伤害。（不足20点按照1点魔法值计算花费）',
        '灵能压制': '星云城龙骑士与灵能等级低于5级的目标战斗时，目标的士气下降（25-目标灵能等级×5）点。',
        '反重力迅捷灵能纹章': '星云城龙骑士免疫任何类型的移动和宣言的限制手段，且不会受到超重力、风暴区域等环境的负面影响。',
        '坚定意志': '星云城龙骑士免疫精神类魔法和技能。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

export {
    NebulaEragon,
}