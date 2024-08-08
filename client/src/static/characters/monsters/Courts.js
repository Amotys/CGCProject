import React from "react";
import DefaultSkillsPoint from '../../skills/DefaultSkillsPoint';
import MonsterCourtsImage from '../../images/monsters/court/MonsterCourtsImage';

const CourtHeavyGuard = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_heavy_guard',
    name: '朝廷重型甲胄兵',
    fullname: '朝廷重型甲胄兵',
    imageUrl: MonsterCourtsImage.CourtHeavyGuard.CourtHeavyGuardUrl,
    iconUrl: MonsterCourtsImage.CourtHeavyGuard.CourtHeavyGuardIconUrl,
    size: [1, 1],
    property: {
        health: [2800, 0],
        magic: [10, 0],
        attack: [95, 0],
        defend: [230, 0],
        damage: [125, 0],
        movement: [2, 0],
        initiative: [50, 0],
        morale: [15, 0],
        critic: [8, 0],
    },
    status: {
        strength: [700, 0],
        constitution: [1100, 0],
        agility: [300, 0],
        willpower: [450, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [300, 0],
        luck: [300, 0],
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
        '精铁朴刀': '朝廷重型甲胄兵的射程为1。',
        '铁盾甲墙': '本回合内，朝廷重型甲胄兵的移动力将变为1，并获得80%箭矢类远程物理伤害减免，并免疫击倒和暴击。',
        '一夫当关': '朝廷重型甲胄兵不做出任何宣言直接结束回合后，区域封锁范围+1。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtHeavyArcher = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_heavy_archer',
    name: '朝廷重装强弓兵',
    fullname: '朝廷重装强弓兵',
    imageUrl: MonsterCourtsImage.CourtHeavyArcher.CourtHeavyArcherUrl,
    iconUrl: MonsterCourtsImage.CourtHeavyArcher.CourtHeavyArcherIconUrl,
    size: [1, 1],
    property: {
        health: [1800, 0],
        magic: [10, 0],
        attack: [135, 0],
        defend: [100, 0],
        damage: [280, 0],
        movement: [3, 0],
        initiative: [330, 0],
        morale: [13, 0],
        critic: [13, 0],
    },
    status: {
        strength: [1200, 0],
        constitution: [600, 0],
        agility: [300, 0],
        willpower: [300, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [300, 0],
        luck: [300, 0],
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
        '巨型长弓': '朝廷重装强弓兵的射程为4~20，但无法进行普通攻击。',
        '满弦': '当朝廷重装强弓兵没有进行任何移动宣言时，可以消耗一个动作宣言进入【满弦拉弓】状态。' +
            '处于【满弦拉弓】状态下的朝廷重装强弓兵无法移动，且遭受任何伤害导致健康减值超过90时，【满弦拉弓】的状态就会被解除，此时朝廷重装强弓兵会继承本回合的全部剩余宣言。',
        '满射': '当朝廷重装强弓兵处于【满弦拉弓】状态下时，可以消耗一个动作宣言进行一次150%伤害的远程重击。' +
            '受到重击伤害的目标需要与朝廷重装强弓兵进行【体质VS力量】的属性对抗。若对抗失败，则体型不大于4的生物目标会被击退1格，且体型不大于1的目标会被击倒。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtCrossbowmen = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_crossbowmen',
    name: '朝廷连弩射手',
    fullname: '朝廷连弩射手',
    imageUrl: MonsterCourtsImage.CourtCrossbowmen.CourtCrossbowmenUrl,
    iconUrl: MonsterCourtsImage.CourtCrossbowmen.CourtCrossbowmenIconUrl,
    size: [1, 1],
    property: {
        health: [2200, 0],
        magic: [10, 0],
        attack: [88, 0],
        defend: [120, 0],
        damage: [112, 0],
        movement: [8, 0],
        initiative: [920, 0],
        morale: [14, 0],
        critic: [14, 0],
    },
    status: {
        strength: [600, 0],
        constitution: [800, 0],
        agility: [600, 0],
        willpower: [400, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [300, 0],
        luck: [800, 0],
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
        '机关连弩': '朝廷连弩射手的射程为1~6，攻击宣言的进攻系数固定为3520，且普通攻击为4次单独计算的攻击宣言。',
        '箭雨压制': '若朝廷连弩射手对目标造成了暴击，则本回合内，士气上升10点。（无法叠加）',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtWarsmith = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_warsmith',
    name: '朝廷战争工匠',
    fullname: '朝廷战争工匠',
    imageUrl: MonsterCourtsImage.CourtWarsmith.CourtWarsmithUrl,
    iconUrl: MonsterCourtsImage.CourtWarsmith.CourtWarsmithIconUrl,
    size: [1, 1],
    property: {
        health: [2000, 0],
        magic: [10, 0],
        attack: [95, 0],
        defend: [130, 0],
        damage: [125, 0],
        movement: [10, 0],
        initiative: [700, 0],
        morale: [16, 0],
        critic: [10, 0],
    },
    status: {
        strength: [700, 0],
        constitution: [700, 0],
        agility: [700, 0],
        willpower: [600, 0],
        intelligence: [550, 0],
        power: [0, 0],
        appearance: [300, 0],
        luck: [300, 0],
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
        '钉锤': '朝廷战争工匠的射程为1。',
        '紧急修补': '战斗开始后，朝廷战争工匠持有1个【修补材料】。朝廷战争工匠消耗一个动作宣言和1份【修补材料】，立刻回复一个器械单位200健康值。',
        '不稳定材料': '战斗开始后，朝廷战争工匠持有1个【不稳定材料】。朝廷战争工匠消耗一个动作宣言和1份【不稳定材料】，立刻为一个器械单位增加【弹药强化】状态。',
        '物资补充': '朝廷战争工匠距离任何攻城辎重冲车为1格时，可以消耗一个动作宣言，补充1份【修补材料】或【不稳定材料】。（最大各为3份）',
        '工程学精通': '朝廷战争工匠与器械单位的交互效率为普通交互的2倍。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtWarDrummer = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_war_drummer',
    name: '朝廷战争鼓手',
    fullname: '朝廷战争鼓手',
    imageUrl: MonsterCourtsImage.CourtWarDrummer.CourtWarDrummerUrl,
    iconUrl: MonsterCourtsImage.CourtWarDrummer.CourtWarDrummerIconUrl,
    size: [4, 4],
    property: {
        health: [2600, 0],
        magic: [10, 0],
        attack: [95, 0],
        defend: [140, 0],
        damage: [125, 0],
        movement: [3, 0],
        initiative: [300, 0],
        morale: [21, 0],
        critic: [8, 0],
    },
    status: {
        strength: [700, 0],
        constitution: [1000, 0],
        agility: [300, 0],
        willpower: [550, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [500, 0],
        luck: [300, 0],
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
        '大型鼓槌': '朝廷战争鼓手的射程为1。',
        '进军鼓': '朝廷战争鼓手消耗一个动作宣言，跳过本回合的士气轮并清除全部剩余宣言，进入无法被打断的状态【击鼓进军】，直到下个回合自身轮次到来为止。' +
            '当朝廷战争鼓手处于【击鼓进军】状态时，所有与其距离不超过6格的同阵营目标，实时增加10%的攻击力与防御力。（加法，最多可叠加两次）',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtOverlordKnight = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_overlord_knight',
    name: '朝廷炎黄骑兵',
    fullname: '朝廷炎黄骑兵',
    imageUrl: MonsterCourtsImage.CourtOverlordKnight.CourtOverlordKnightUrl,
    iconUrl: MonsterCourtsImage.CourtOverlordKnight.CourtOverlordKnightIconUrl,
    size: [4, 4],
    property: {
        health: [4000, 0],
        magic: [20, 0],
        attack: [200, 0],
        defend: [300, 0],
        damage: [265, 0],
        movement: [5, 0],
        initiative: [120, 0],
        morale: [15, 0],
        critic: [10, 0],
    },
    status: {
        strength: [1200, 0],
        constitution: [1200, 0],
        agility: [300, 0],
        willpower: [500, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [300, 0],
        luck: [300, 0],
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
        '乾坤刀': '朝廷炎黄骑兵的射程为1~2。',
        '昭惺之愿': '如果朝廷炎黄骑兵在本回合没有进行或受到攻击宣言，则跳过士气轮次检定，并且下个回合基础移动力再-1（最低为3）；' +
            '反之，朝廷炎黄骑兵将会在下个回合移动力再度+2（最高为6）。除此以外，朝廷炎黄骑兵无法与器械单位交互。',
        '百战铁骑': '朝廷炎黄骑兵无视任何形式的移动力和轮次的限制和干扰手段（包括区域封锁）。每次朝廷炎黄骑兵击败目标（濒死或致死），本场战斗中，该朝廷炎黄骑兵士气永久额外增加3点。',
        '斩腰断肩': '朝廷炎黄骑兵进行攻击距离为1~2的近战普通攻击时，可以对其身前及身侧攻击范围内的全体其它目标造成与主目标相同的伤害。',
        '征战践踏': '初次进入朝廷炎黄骑兵区域封锁范围内、及回合结束阶段仍处于其区域封锁范围内的体型不大于1的目标，均受到80点健康或护盾减值。',
        '赤胆烈火': '朝廷炎黄骑兵连续对同一个体型不小于4格的目标进行攻击宣言时，士气、暴击随着已发动的攻击宣言次数依次增加3、2。' +
            '这些加成将在朝廷炎黄骑兵连续两个回合内没有作出任何攻击宣言或转换攻击目标时清零。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtSiegeRam = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_siege_ram',
    name: '朝廷攻城辎重冲车',
    fullname: '朝廷攻城辎重冲车',
    imageUrl: MonsterCourtsImage.CourtSiegeRam.CourtSiegeRamUrl,
    iconUrl: MonsterCourtsImage.CourtSiegeRam.CourtSiegeRamIconUrl,
    size: [9, 9],
    property: {
        health: [3000, 0],
        magic: [0, 0],
        attack: [150, 0],
        defend: [250, 0],
        damage: [350, 0],
        movement: [4, 0],
        initiative: [50, 0],
        morale: [0, 0],
        critic: [0, 0],
    },
    status: {
        strength: [1000, 0],
        constitution: [1500, 0],
        agility: [50, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '攻城铁槌': '朝廷攻城辎重冲车的射程为1，且对器械单位和建筑单位造成的普通攻击伤害为300%。',
        '厚重甲板': '朝廷攻城辎重冲车受到物理箭矢类远程攻击伤害为10%、受到其他类型物理远程攻击伤害为50%、受到魔法伤害为75%。',
        '临时据点': '朝廷攻城辎重冲车中可以容纳共计30体型、个体体型不大于9的单位，可以消耗一个动作轮次装载或卸载共计10体型的单位。' +
            '朝廷攻城辎重冲车中每容纳10体型的单位，其移动力实时额外+1。' +
            '若朝廷攻城辎重冲车被毁时，尚有未卸载的单位，则这些单位会被强制卸载，并立刻损失50%当前的健康值。',
        '后勤补给': '朝廷攻城辎重冲车可以容纳大量的材料、物品、装备、补给品。',
        '战争器械': '朝廷攻城辎重冲车没有生命，是由石头、木头和金属组成的战争器械，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，朝廷攻城辎重冲车不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtHeavenLadder = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_heaven_ladder',
    name: '朝廷登云塔',
    fullname: '朝廷登云塔',
    imageUrl: MonsterCourtsImage.CourtHeavenLadder.CourtHeavenLadderUrl,
    iconUrl: MonsterCourtsImage.CourtHeavenLadder.CourtHeavenLadderIconUrl,
    size: [16, 16],
    property: {
        health: [4000, 0],
        magic: [0, 0],
        attack: [0, 0],
        defend: [250, 0],
        damage: [0, 0],
        movement: [2, 0],
        initiative: [45, 0],
        morale: [15, 0],
        critic: [10, 0],
    },
    status: {
        strength: [500, 0],
        constitution: [1000, 0],
        agility: [500, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '登天梯': '朝廷登云塔无法使用普通攻击，但可以容纳共计80体型、个体体型不大于16的单位，可以消耗一个动作轮次装载或卸载共计16体型的单位。' +
            '若朝廷登云塔被毁时，尚有未卸载的单位，则这些单位会被强制卸载，并立刻损失50%当前的健康值。',
        '厚重甲板': '朝廷登云塔受到物理箭矢类远程攻击伤害为10%、受到其他类型物理远程攻击伤害为50%、受到魔法伤害为75%。',
        '楼宇高台': '朝廷登云塔最上层为其内装载单位提供4×4格的高地战斗平台，位于该平台上的单位将会暴露它们的视野，但不会受到来源于地面的任何伤害。' +
            '这些位于平台上的单位，无法对地面目标进行近战攻击，但攻击飞行单位时无视垂直高度，且当朝廷登云塔距离城墙为1格时可以直接登上城墙。',
        '战争器械': '朝廷登云塔没有生命，是由石头、木头和金属组成的战争器械，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，朝廷登云塔不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtSkylight = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_skylight',
    name: '朝廷天明灯',
    fullname: '朝廷天明灯',
    imageUrl: MonsterCourtsImage.CourtSkylight.CourtSkylightUrl,
    iconUrl: MonsterCourtsImage.CourtSkylight.CourtSkylightIconUrl,
    size: [4, 4],
    property: {
        health: [1000, 0],
        magic: [0, 0],
        attack: [0, 0],
        defend: [150, 0],
        damage: [0, 0],
        movement: [5, 0],
        initiative: [515, 0],
        morale: [27, 0],
        critic: [15, 0],
    },
    status: {
        strength: [300, 0],
        constitution: [500, 0],
        agility: [0, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '天灯': '朝廷天明灯无法使用普通攻击，但战斗开始后，拥有5个【天灯火】（最大5个）。朝廷天明灯可以消耗一个动作轮次和3个【天灯火】，释放并召唤空军单位【天火照明灯】。' +
            '朝廷天明灯不做出任何宣言直接结束回合后，增加1个【天灯火】。',
        '轻装甲板': '朝廷天明灯受到物理箭矢类远程攻击伤害为50%。',
        '战争器械': '朝廷天明灯没有生命，是由石头、木头和金属组成的战争器械，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，朝廷天明灯不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtFireCrowBallista = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_fire_crow_ballista',
    name: '朝廷神火飞鸦',
    fullname: '朝廷神火飞鸦',
    imageUrl: MonsterCourtsImage.CourtFireCrowBallista.CourtFireCrowBallistaUrl,
    iconUrl: MonsterCourtsImage.CourtFireCrowBallista.CourtFireCrowBallistaIconUrl,
    size: [4, 4],
    property: {
        health: [600, 0],
        magic: [0, 0],
        attack: [200, 0],
        defend: [120, 0],
        damage: [0, 0],
        movement: [13, 0],
        initiative: [1125, 0],
        morale: [0, 0],
        critic: [0, 0],
    },
    status: {
        strength: [0, 0],
        constitution: [0, 0],
        agility: [0, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '天鸢': '朝廷神火飞鸦无法使用普通攻击，但战斗开始后，拥有4个【鸢纸】（最大6个）。' +
            '朝廷神火飞鸦可以消耗一个动作轮次和2个【鸢纸】，向距离自身不短于10格、不超过20格的区域发射一枚神天鸢。' +
            '通常状态下的神天鸢可以搭载共计体型不大于1格的最多两个单位。' +
            '朝廷神火飞鸦不做出任何宣言直接结束回合后，增加1个【鸢纸】。',
        '火飞鸦': '当朝廷神火飞鸦处于【弹药强化】状态时，若消耗一个动作轮次和2个【鸢纸】，则发射道具会被替换成神火飞鸦。' +
            '神火飞鸦不再能够搭乘单位，但除了可以飞向距离自身不短于10格、不超过20格的单格区域，也可以瞄准飞行单位。' +
            '神火飞鸦会对命中的地面格子造成200火系伤害，并对其周围4个格子造成100火系伤害。神火飞鸦也会对命中的飞行单体单位造成350火系伤害。' +
            '神火飞鸦发射后，【弹药强化】状态会被解除。',
        '抛射弹道': '朝廷神火飞鸦的发射物不会被直线障碍物阻挡。',
        '轻装甲板': '朝廷神火飞鸦受到物理箭矢类远程攻击伤害为50%。',
        '战争器械': '朝廷神火飞鸦没有生命，是由石头、木头和金属组成的战争器械，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，朝廷神火飞鸦不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtVulcanBallista = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_moonlight_bunny',
    name: '朝廷火神炮',
    fullname: '朝廷火神炮',
    imageUrl: MonsterCourtsImage.CourtVulcanBallista.CourtVulcanBallistaUrl,
    iconUrl: MonsterCourtsImage.CourtVulcanBallista.CourtVulcanBallistaIconUrl,
    size: [16, 16],
    property: {
        health: [2750, 0],
        magic: [0, 0],
        attack: [300, 0],
        defend: [250, 0],
        damage: [300, 0],
        movement: [1, 0],
        initiative: [30, 0],
        morale: [0, 0],
        critic: [0, 0],
    },
    status: {
        strength: [0, 0],
        constitution: [2000, 0],
        agility: [0, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '神机箭雨': '朝廷火神炮的射程为8~24。朝廷火神炮需要一个动作宣言进入【箭矢填充】状态，当朝廷火神炮处于【箭矢填充】状态时才可以进行攻击宣言。攻击宣言结算后，【箭矢填充】状态解除。' +
            '朝廷火神炮的攻击宣言无法被任何防御技能对抗，但只能够攻击射程范围内的格子。' +
            '朝廷火神炮没有伤害浮动，攻击宣言会对命中的格子造成100%伤害，并会对距离该格子1/2/3格的周围格子造成75%/50%/25%伤害。',
        '笨重器械': '朝廷火神炮只能攻击朝向范围内90°的目标区域，且无法自己转向。' +
            '任何非器械的可交互目标都可以消耗一个动作宣言与朝廷火神炮进行交互，如果这样做，朝廷火神炮积累1层【笨重器械转向】（最大2层）。' +
            '朝廷火神炮可以花费一个移动宣言和2层【笨重器械转向】，朝任意方向转向45°。',
        '炎雨火海': '当朝廷火神炮处于【弹药强化】状态时，射程变更为6~18，基础伤害提升至150%，且造成远程物理与火系魔法的双重伤害判定。下一个攻击宣言结算后，【弹药强化】状态解除。',
        '密集抛射弹道': '朝廷火神炮的发射物不会被直线障碍物阻挡，且对抛射路径5格宽上的所有飞行单位造成100%全额总伤害。' +
            '若朝廷火神炮处于【弹药强化】状态，对路径上飞行单位造成的总伤害会提升至125%。（可以与【炎雨火海】的伤害加成以乘法叠加）',
        '重型防火甲板': '朝廷火神炮受到物理箭矢类远程攻击伤害为10%、受到其他类型物理远程攻击伤害为50%、受到土系魔法伤害为200%、免疫火系魔法伤害。',
        '战争器械': '朝廷火神炮没有生命，是由石头、木头和金属组成的战争器械，拥有最大射程限制，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，朝廷火神炮不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtThunderCatapult = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'lunam_venit',
    name: '朝廷霹雳战车',
    fullname: '朝廷霹雳战车',
    imageUrl: MonsterCourtsImage.CourtThunderCatapult.CourtThunderCatapultUrl,
    iconUrl: MonsterCourtsImage.CourtThunderCatapult.CourtThunderCatapultIconUrl,
    size: [16, 16],
    property: {
        health: [3000, 0],
        magic: [0, 0],
        attack: [400, 0],
        defend: [250, 0],
        damage: [150, 0],
        movement: [1, 0],
        initiative: [15, 0],
        morale: [0, 0],
        critic: [0, 0],
    },
    status: {
        strength: [0, 0],
        constitution: [2500, 0],
        agility: [0, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '巨石抛射': '朝廷霹雳战车的射程为15~50。朝廷霹雳战车需要一个动作宣言进入【巨石填充】状态，当朝廷火神炮处于【巨石填充】状态时才可以进行攻击宣言。' +
            '攻击宣言结算后，【巨石填充】状态解除。朝廷霹雳战车的攻击宣言无法被任何防御技能对抗，但只能够攻击射程范围内的格子。' +
            '朝廷霹雳战车没有伤害浮动，伤害类型为攻城伤害，攻击宣言会对命中的格子造成100%伤害，并会对距离该格子1/2格的周围格子造成70%/40%伤害。' +
            '除此以外，朝廷霹雳战车对建筑单位、器械单位等造成的伤害提升至600%。',
        '笨重器械': '朝廷霹雳战车只能攻击朝向范围内90°的目标区域，且无法自己转向。' +
            '任何非器械的可交互目标都可以消耗一个动作宣言与朝廷霹雳战车进行交互，如果这样做，朝廷霹雳战车积累1层【笨重器械转向】（最大2层）。' +
            '朝廷霹雳战车可以花费一个移动宣言和2层【笨重器械转向】，朝任意方向转向45°。',
        '霹雳火': '当朝廷霹雳战车处于【弹药强化】状态时，射程变更为10~35，基础伤害提升至150%，且造成远程攻城与火系魔法的双重伤害判定。' +
            '并且，朝廷霹雳战车伤害与溅射到的区域若为可通行区域，则这些区域会刷新4回合的【燃烧】状态。' +
            '初次进入燃烧区域内、及回合结束阶段仍处于燃烧区域内的目标，均受到（1%最大健康值×覆盖燃烧格子数）的健康或护盾减值。朝廷霹雳战车攻击宣言结算后，【弹药强化】状态解除。',
        '抛射弹道': '朝廷霹雳战车的发射物不会被直线障碍物阻挡。',
        '重型防火甲板': '朝廷霹雳战车受到物理箭矢类远程攻击伤害为10%、受到其他类型物理远程攻击伤害为50%、受到土系魔法伤害为200%、免疫火系魔法伤害。',
        '战争器械': '朝廷霹雳战车没有生命，是由石头、木头和金属组成的战争器械，拥有最大射程限制，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，朝廷霹雳战车不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtThreeBowBallista = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_three_bow_ballista',
    name: '朝廷三弓床弩',
    fullname: '朝廷三弓床弩',
    imageUrl: MonsterCourtsImage.CourtThreeBowBallista.CourtThreeBowBallistaUrl,
    iconUrl: MonsterCourtsImage.CourtThreeBowBallista.CourtThreeBowBallistaIconUrl,
    size: [16, 16],
    property: {
        health: [2250, 0],
        magic: [0, 0],
        attack: [400, 0],
        defend: [250, 0],
        damage: [400, 0],
        movement: [1, 0],
        initiative: [20, 0],
        morale: [0, 0],
        critic: [0, 0],
    },
    status: {
        strength: [0, 0],
        constitution: [1000, 0],
        agility: [0, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '沉弦重箭': '朝廷三弓床弩的射程为4~25。朝廷三弓床弩需要一个动作宣言增加1层【紧弦】状态（最大3层），当朝廷三弓床弩至少拥有1层【紧弦】时才可以进行攻击宣言。' +
            '朝廷三弓床弩的伤害类型为攻城伤害，攻击宣言结算后，【紧弦】层数会被清零。朝廷三弓床弩的攻击宣言无法被任何防御技能对抗，但只能够攻击射程范围内的目标。' +
            '当【紧弦】的层数为2/3时，朝廷三弓床弩的射程额外增加3~15/2~10（最大9~50），且伤害额外增加175/150（最大725）。',
        '笨重器械': '朝廷三弓床弩只能攻击朝向范围内90°的目标，且无法自己转向。' +
            '任何非器械的可交互目标都可以消耗一个动作宣言与朝廷三弓床弩进行交互，如果这样做，朝廷三弓床弩积累1层【笨重器械转向】（最大2层）。' +
            '朝廷三弓床弩可以花费一个移动宣言和2层【笨重器械转向】，朝任意方向转向45°。',
        '火焰爆破弩箭': '当朝廷三弓床弩处于【弹药强化】状态时，朝廷三弓床弩的攻击宣言将变为攻击射程范围内的格子区域或单体飞行单位。' +
            '朝廷三弓床弩的基础伤害提升至150%，对建筑和器械等造成的伤害额外提升100%，且造成远程攻城与火系魔法的双重伤害判定。' +
            '朝廷三弓床弩会对命中的格子或单位周围1/2格的其他全部区域造成140/80基础伤害的火系伤害。',
        '厚重甲板': '朝廷三弓床弩受到物理箭矢类远程攻击伤害为10%、受到其他类型物理远程攻击伤害为50%、受到魔法伤害为75%。',
        '战争器械': '朝廷三弓床弩没有生命，是由石头、木头和金属组成的战争器械，拥有最大射程限制，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，朝廷三弓床弩不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const CourtTigerCannon = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'court_tiger_cannon',
    name: '朝廷虎樽炮',
    fullname: '朝廷虎樽炮',
    imageUrl: MonsterCourtsImage.CourtTigerCannon.CourtTigerCannonUrl,
    iconUrl: MonsterCourtsImage.CourtTigerCannon.CourtTigerCannonIconUrl,
    size: [9, 9],
    property: {
        health: [2000, 0],
        magic: [0, 0],
        attack: [500, 0],
        defend: [250, 0],
        damage: [600, 0],
        movement: [1, 0],
        initiative: [5, 0],
        morale: [0, 0],
        critic: [0, 0],
    },
    status: {
        strength: [0, 0],
        constitution: [800, 0],
        agility: [0, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '破甲轰击': '朝廷虎樽炮的射程为1~3，无法攻击飞行单位。朝廷虎樽炮需要一个动作宣言进入【火药填充】状态，当朝廷虎樽炮处于【火药填充】状态时才可以进行攻击宣言。' +
            '朝廷虎樽炮没有伤害浮动，伤害类型为攻城伤害，攻击宣言结算后，【火药填充】状态解除。' +
            '朝廷虎樽炮的攻击宣言无法被任何防御技能对抗，且能够对射击直线方向的射程范围内所有目标造成伤害判定。' +
            '除此以外，朝廷虎樽炮对建筑、器械等类型单位造成的伤害提升至300%。',
        '沉重器械': '朝廷虎樽炮只能攻击朝向范围内90°的目标，且需要花费一个移动宣言转向45°。' +
            '任何非器械的可交互目标都可以消耗一个动作宣言与朝廷虎樽炮进行交互，如果这样做，朝廷虎樽炮积累1层【沉重器械转向】（最大2层）。' +
            '朝廷虎樽炮可以花费一个移动宣言和2层【沉重器械转向】，朝任意方向转向90°。',
        '烈火重炮': '当朝廷虎樽炮处于【弹药强化】状态时，基础伤害提升至180%，且造成远程攻城与火系魔法的双重伤害判定。',
        '厚重防爆甲板': '朝廷虎樽炮受到物理箭矢类远程攻击伤害为10%、受到其他类型物理远程攻击伤害为25%、受到魔法伤害为75%。',
        '战争器械': '朝廷虎樽炮没有生命，是由石头、木头和金属组成的战争器械，拥有最大射程限制，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，朝廷虎樽炮不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const Skylight = {
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
    side: ['朝廷'],
    type: 'Monster',
    idName: 'skylight',
    name: '天火照明灯',
    fullname: '天火照明灯',
    imageUrl: MonsterCourtsImage.Skylight.SkylightUrl,
    iconUrl: MonsterCourtsImage.Skylight.SkylightIconUrl,
    size: [0, 0],
    property: {
        health: [300, 0],
        magic: [0, 0],
        attack: [0, 0],
        defend: [50, 0],
        damage: [0, 0],
        movement: [0, 0],
        initiative: [0, 0],
        morale: [0, 0],
        critic: [0, 0],
    },
    status: {
        strength: [0, 0],
        constitution: [0, 0],
        agility: [0, 0],
        willpower: [0, 0],
        intelligence: [0, 0],
        power: [0, 0],
        appearance: [0, 0],
        luck: [0, 0],
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
        '烈日悬空': '天火照明灯无法进行任何宣言且没有自己的轮次，在被召唤回合的下个回合起开始持续发光和飞行5个回合，之后天火照明灯自动烧毁。' +
            '天火照明灯可以照亮距离自身所在地面格不超过10格的战斗场地，处于该区域内的目标潜行会被暴露，且未处于封闭空间内的单位会完全暴露其视野。' +
            '除此以外，天火照明灯照亮的区域中，单位的夜晚技能无法生效，但战斗场地不被强制视为白昼。（即夜间仍被视为夜晚）',
        '一次性装置': '天火照明灯没有生命，是由石头、木头和金属组成的装置，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，天火照明灯不受任何治疗效果和修复效果影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

export {
    CourtHeavyGuard,
    CourtHeavyArcher,
    CourtCrossbowmen,
    CourtWarsmith,
    CourtWarDrummer,
    CourtOverlordKnight,
    CourtSiegeRam,
    CourtHeavenLadder,
    CourtSkylight,
    CourtFireCrowBallista,
    CourtVulcanBallista,
    CourtThunderCatapult,
    CourtThreeBowBallista,
    CourtTigerCannon,
    Skylight,
}