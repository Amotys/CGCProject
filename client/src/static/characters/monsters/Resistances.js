import DefaultSkillsPoint from '../../skills/DefaultSkillsPoint';
import MonsterResistancesImage from '../../images/monsters/resistance/MonsterResistancesImage';

const ResistanceFalconHunter = {
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
    side: ['波札那反抗军'],
    type: 'Monster',
    idName: 'resistance_falcon_hunter',
    name: '反抗军沙隼猎人',
    fullname: '反抗军沙隼猎人',
    imageUrl: MonsterResistancesImage.ResistanceFalconHunter.ResistanceFalconHunterUrl,
    iconUrl: MonsterResistancesImage.ResistanceFalconHunter.ResistanceFalconHunterIconUrl,
    size: [1, 1],
    property: {
        health: [1600, 0],
        magic: [10, 0],
        attack: [78, 0],
        defend: [90, 0],
        damage: [97, 0],
        movement: [9, 0],
        initiative: [1010, 0],
        morale: [30, 0],
        critic: [10, 0],
    },
    status: {
        strength: [475, 0],
        constitution: [500, 0],
        agility: [900, 0],
        willpower: [800, 0],
        intelligence: [550, 0],
        power: [0, 0],
        appearance: [650, 0],
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
        '护身匕首': '反抗军山门守卫的射程为1。',
        '擅长反击': '反抗军山门守卫造成的反击伤害为普通反击伤害的200%。',
        '反射斗笠': '反抗军山门守卫受到的魔法伤害为80%。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const ResistanceDualBladeMamluk = {
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
    side: ['波札那反抗军'],
    type: 'Monster',
    idName: 'resistance_dual_blade_mamluk',
    name: '反抗军双刀侠客',
    fullname: '反抗军双刀侠客',
    imageUrl: MonsterResistancesImage.ResistanceDualBladeMamluk.ResistanceDualBladeMamlukUrl,
    iconUrl: MonsterResistancesImage.ResistanceDualBladeMamluk.ResistanceDualBladeMamlukIconUrl,
    size: [1, 1],
    property: {
        health: [2425, 0],
        magic: [15, 0],
        attack: [160, 0],
        defend: [165, 0],
        damage: [180, 0],
        movement: [7, 0],
        initiative: [700, 0],
        morale: [25, 0],
        critic: [15, 0],
    },
    status: {
        strength: [900, 0],
        constitution: [900, 0],
        agility: [700, 0],
        willpower: [600, 0],
        intelligence: [450, 0],
        power: [0, 0],
        appearance: [500, 0],
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
        '虔诚信仰': '反抗军月神信徒无法使用普通攻击。',
        '祝佑呢喃': '反抗军月神信徒消耗一个动作宣言，可以回复距离不超过自身2格内全部生物目标20健康值与1魔法值。',
        '月神祈祷仪式': '反抗军月神信徒不做出任何宣言直接结束回合后，跳过士气轮次，并使距离自身1格的所有单位士气+1。如果此时战场为夜晚，则【月神降临】的进度+1。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const ResistanceSlaveRanger = {
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
    side: ['波札那反抗军'],
    type: 'Monster',
    idName: 'resistance_slave_ranger',
    name: '反抗军奴隶游侠',
    fullname: '反抗军奴隶游侠',
    imageUrl: MonsterResistancesImage.ResistanceSlaveRanger.ResistanceSlaveRangerUrl,
    iconUrl: MonsterResistancesImage.ResistanceSlaveRanger.ResistanceSlaveRangerIconUrl,
    size: [1, 1],
    property: {
        health: [1850, 0],
        magic: [15, 0],
        attack: [170, 0],
        defend: [135, 0],
        damage: [220, 0],
        movement: [8, 0],
        initiative: [800, 0],
        morale: [20, 0],
        critic: [15, 0],
    },
    status: {
        strength: [1100, 0],
        constitution: [600, 0],
        agility: [800, 0],
        willpower: [800, 0],
        intelligence: [400, 0],
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
        '柔弱身姿': '反抗军月光供奉无法使用普通攻击。',
        '月光契约': '反抗军月光供奉不做出任何宣言直接结束回合后，反抗军月光供奉累计1点【月光】（最大10点）。' +
            '如果战场为夜晚则立刻进行一次士气检定，若士气检定通过，【月光】额外增加1点。' +
            '反抗军月光供奉可以通过【月光】来召唤契约生物，且每个反抗军月光供奉只能同时拥有一个契约生物。',
        '呼唤狼灵': '反抗军月光供奉在回合开始阶段，可以消耗3点【月光】，于不超过自身3格的2×2区域内召唤一只月光狼。',
        '呼唤鸟灵': '反抗军月光供奉在回合开始阶段，可以消耗2点【月光】，于不超过自身5格的单元格内召唤一只月光鸮，月光鸮的初始状态为飞行。',
        '呼唤兔灵': '反抗军月光供奉在回合开始阶段，可以消耗2点【月光】，于不超过自身3格的单元格内召唤一只月光兔。',
        '抚慰生灵': '反抗军月光供奉消耗一个动作宣言，回复任意月光生物50健康值。若同时消耗1点【月光】，则回复量增加至125。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const ResistanceMaskOfSand = {
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
    side: ['波札那反抗军'],
    type: 'Monster',
    idName: 'resistance_mask_of_sand',
    name: '反抗军沙之假面',
    fullname: '反抗军沙之假面',
    imageUrl: MonsterResistancesImage.ResistanceMaskOfSand.ResistanceMaskOfSandUrl,
    iconUrl: MonsterResistancesImage.ResistanceMaskOfSand.ResistanceMaskOfSandIconUrl,
    size: [1, 1],
    property: {
        health: [2250, 0],
        magic: [200, 0],
        attack: [170, 0],
        defend: [170, 0],
        damage: [180, 0],
        movement: [8, 0],
        initiative: [880, 0],
        morale: [25, 0],
        critic: [15, 0],
    },
    status: {
        strength: [800, 0],
        constitution: [800, 0],
        agility: [800, 0],
        willpower: [600, 0],
        intelligence: [450, 0],
        power: [800, 0],
        appearance: [550, 0],
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
        '暗影镰刃': '反抗军暗影猎手的近战射程为1~2。',
        '噬血轮刃': '反抗军暗影猎手的远程射程为2~3。',
        '百里追猎': '反抗军暗影猎手可以在非士气轮使用血轮刃进行远程投掷攻击宣言，如果这样做，反抗军暗影猎手将立刻免除本回合内的士气判定并失去本回合剩余的所有宣言和下回合的一个动作宣言。' +
            '血轮刃造成近战伤害，并会以反抗军暗影猎手的意愿，向着距离当前目标不超过3格的下一个目标依次攻击，最多攻击共5个目标，并对每个目标造成一次100%伤害的普通攻击。',
        '暗夜帷幕': '反抗军暗影猎手在夜晚作战且为潜行状态时，现身的当前轮次获得25%额外的伤害加成。若处于【狂暴之月】状态时，额外伤害加成提升至50%。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

export {
    ResistanceFalconHunter,
    ResistanceDualBladeMamluk,
    ResistanceSlaveRanger,
    ResistanceMaskOfSand,
}