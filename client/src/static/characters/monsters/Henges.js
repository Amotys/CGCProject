import DefaultSkillsPoint from '../../skills/DefaultSkillsPoint';
import MonsterHengesImage from '../../images/monsters/henge/MonsterHengesImage';

const HengeMountainGateGuard = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_mountain_gate_guard',
    name: '姮娥宫山门守卫',
    fullname: '姮娥宫山门守卫',
    imageUrl: MonsterHengesImage.HengeMountainGateGuard.HengeMountainGateGuardUrl,
    iconUrl: MonsterHengesImage.HengeMountainGateGuard.HengeMountainGateGuardIconUrl,
    size: [1, 1],
    property: {
        health: [1800, 0],
        magic: [10, 0],
        attack: [80, 0],
        defend: [100, 0],
        damage: [130, 0],
        movement: [8, 0],
        initiative: [970, 0],
        morale: [20, 0],
        critic: [15, 0],
    },
    status: {
        strength: [500, 0],
        constitution: [600, 0],
        agility: [800, 0],
        willpower: [300, 0],
        intelligence: [400, 0],
        power: [0, 0],
        appearance: [500, 0],
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
        '护身匕首': '姮娥宫山门守卫的射程为1。',
        '擅长反击': '姮娥宫山门守卫造成的反击伤害为普通反击伤害的200%。',
        '反射斗笠': '姮娥宫山门守卫受到的魔法伤害为80%。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeLunaFollower = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_luna_follower',
    name: '姮娥宫月神信徒',
    fullname: '姮娥宫月神信徒',
    imageUrl: MonsterHengesImage.HengeLunaFollower.HengeLunaFollowerUrl,
    iconUrl: MonsterHengesImage.HengeLunaFollower.HengeLunaFollowerIconUrl,
    size: [1, 1],
    property: {
        health: [1350, 0],
        magic: [85, 0],
        attack: [60, 0],
        defend: [60, 0],
        damage: [80, 0],
        movement: [4, 0],
        initiative: [400, 0],
        morale: [20, 0],
        critic: [10, 0],
    },
    status: {
        strength: [400, 0],
        constitution: [400, 0],
        agility: [400, 0],
        willpower: [400, 0],
        intelligence: [400, 0],
        power: [400, 0],
        appearance: [500, 0],
        luck: [600, 0],
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
        '虔诚信仰': '姮娥宫月神信徒无法使用普通攻击。',
        '祝佑呢喃': '姮娥宫月神信徒消耗一个动作宣言，可以回复距离不超过自身2格内全部生物目标20健康值与1魔法值。',
        '月神祈祷仪式': '姮娥宫月神信徒不做出任何宣言直接结束回合后，跳过士气轮次，并使距离自身1格的所有单位士气+1。如果此时战场为夜晚，则【月神降临】的进度+1。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeShadowHunter = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_shadow_hunter',
    name: '姮娥宫暗影猎手',
    fullname: '姮娥宫暗影猎手',
    imageUrl: MonsterHengesImage.HengeShadowHunter.HengeShadowHunterUrl,
    iconUrl: MonsterHengesImage.HengeShadowHunter.HengeShadowHunterIconUrl,
    size: [1, 1],
    property: {
        health: [1400, 0],
        magic: [10, 0],
        attack: [130, 0],
        defend: [80, 0],
        damage: [180, 0],
        movement: [8, 0],
        initiative: [920, 0],
        morale: [20, 0],
        critic: [10, 0],
    },
    status: {
        strength: [900, 0],
        constitution: [400, 0],
        agility: [800, 0],
        willpower: [600, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [400, 0],
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
        '暗影镰刃': '姮娥宫暗影猎手的近战射程为1~2。',
        '噬血轮刃': '姮娥宫暗影猎手的远程射程为2~3。',
        '百里追猎': '姮娥宫暗影猎手可以在非士气轮使用血轮刃进行远程投掷攻击宣言，如果这样做，姮娥宫暗影猎手将立刻免除本回合内的士气判定并失去本回合剩余的所有宣言和下回合的一个动作宣言。' +
            '血轮刃造成近战伤害，并会以姮娥宫暗影猎手的意愿，向着距离当前目标不超过3格的下一个目标依次攻击，最多攻击共5个目标，并对每个目标造成一次100%伤害的普通攻击。',
        '暗夜帷幕': '姮娥宫暗影猎手在夜晚作战且为潜行状态时，现身的当前轮次获得25%额外的伤害加成。若处于【狂暴之月】状态时，额外伤害加成提升至50%。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeMoonlightWorshiper = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_moonlight_worshiper',
    name: '姮娥宫月光供奉',
    fullname: '姮娥宫月光供奉',
    imageUrl: MonsterHengesImage.HengeMoonlightWorshiper.HengeMoonlightWorshiperUrl,
    iconUrl: MonsterHengesImage.HengeMoonlightWorshiper.HengeMoonlightWorshiperIconUrl,
    size: [1, 1],
    property: {
        health: [1200, 0],
        magic: [10, 0],
        attack: [65, 0],
        defend: [70, 0],
        damage: [75, 0],
        movement: [4, 0],
        initiative: [400, 0],
        morale: [32, 0],
        critic: [10, 0],
    },
    status: {
        strength: [300, 0],
        constitution: [300, 0],
        agility: [400, 0],
        willpower: [900, 0],
        intelligence: [500, 0],
        power: [0, 0],
        appearance: [800, 0],
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
        '柔弱身姿': '姮娥宫月光供奉无法使用普通攻击。',
        '月光契约': '姮娥宫月光供奉不做出任何宣言直接结束回合后，姮娥宫月光供奉累计1点【月光】（最大10点）。' +
            '如果战场为夜晚则立刻进行一次士气检定，若士气检定通过，【月光】额外增加1点。' +
            '姮娥宫月光供奉可以通过【月光】来召唤契约生物，且每个姮娥宫月光供奉只能同时拥有一个契约生物。',
        '呼唤狼灵': '姮娥宫月光供奉在回合开始阶段，可以消耗3点【月光】，于不超过自身3格的2×2区域内召唤一只月光狼。',
        '呼唤鸟灵': '姮娥宫月光供奉在回合开始阶段，可以消耗2点【月光】，于不超过自身5格的单元格内召唤一只月光鸮，月光鸮的初始状态为飞行。',
        '呼唤兔灵': '姮娥宫月光供奉在回合开始阶段，可以消耗2点【月光】，于不超过自身3格的单元格内召唤一只月光兔。',
        '抚慰生灵': '姮娥宫月光供奉消耗一个动作宣言，回复任意月光生物50健康值。若同时消耗1点【月光】，则回复量增加至125。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeAstralGuardian = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_astral_guardian',
    name: '姮娥宫夜空护法',
    fullname: '姮娥宫夜空护法',
    imageUrl: MonsterHengesImage.HengeAstralGuardian.HengeAstralGuardianUrl,
    iconUrl: MonsterHengesImage.HengeAstralGuardian.HengeAstralGuardianIconUrl,
    size: [1, 1],
    property: {
        health: [1425, 0],
        magic: [215, 0],
        attack: [150, 0],
        defend: [100, 0],
        damage: [100, 0],
        movement: [3, 0],
        initiative: [325, 0],
        morale: [25, 0],
        critic: [8, 0],
    },
    status: {
        strength: [500, 0],
        constitution: [400, 0],
        agility: [325, 0],
        willpower: [500, 0],
        intelligence: [750, 0],
        power: [1000, 0],
        appearance: [700, 0],
        luck: [400, 0],
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
        '逆流冲脉': '姮娥宫夜空护法正常状态下的射程为1，且普通攻击模式为近战，造成的伤害为远程暗系魔法伤害。' +
            '若战场为夜晚，姮娥宫夜空护法的近战射程额外+1。',
        '黑暗魔种': '姮娥宫夜空护法的攻击宣言无法被闪避，且每次对目标造成暗系伤害，都会令目标刷新并叠加1层持续3回合的【魔蛊】。' +
            '【魔蛊】最大层数为10层，每层【魔蛊】都会使目标受到的暗系魔法伤害增加5%、且防御技能判定下降5%。' +
            '若处于【狂暴之月】状态时，每层【魔蛊】的效果提升至：使目标受到的暗系魔法伤害增加7.5%、防御技能判定下降6%、且防御力下降2%。',
        '御气': '姮娥宫夜空护法可以飞行至最高4格的空中。飞行时，姮娥宫夜空护法每回合消耗5点魔法值，且移动只有原来的50%。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeNetherGuardian = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_nether_guardian',
    name: '姮娥宫幽冥护法',
    fullname: '姮娥宫幽冥护法',
    imageUrl: MonsterHengesImage.HengeNetherGuardian.HengeNetherGuardianUrl,
    iconUrl: MonsterHengesImage.HengeNetherGuardian.HengeNetherGuardianIconUrl,
    size: [1, 1],
    property: {
        health: [2050, 0],
        magic: [350, 0],
        attack: [120, 0],
        defend: [130, 0],
        damage: [100, 0],
        movement: [4, 0],
        initiative: [450, 0],
        morale: [20, 0],
        critic: [10, 0],
    },
    status: {
        strength: [500, 0],
        constitution: [700, 0],
        agility: [450, 0],
        willpower: [500, 0],
        intelligence: [600, 0],
        power: [1000, 0],
        appearance: [400, 0],
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
        '心法掌': '姮娥宫幽冥护法的射程为1。',
        '幽影魔爪': '姮娥宫幽冥护法消耗一个动作宣言和70魔法值，立刻使一个视野内体型为（1-/4/9/16+）的目标向任意方向移动最大（7/6/5/4）格。',
        '邪气入体': '姮娥宫幽冥护法消耗一个动作宣言和60魔法值，立刻使一个视野内的目标在本回合内士气值下降50且最大士气值为0。',
        '遗忘诅咒': '姮娥宫幽冥护法消耗一个动作宣言和30魔法值，立刻使一个视野内的目标在本回合内无法使用任何主动类型的天赋能力。',
        '奉献': '姮娥宫幽冥护法消耗一个动作宣言和500健康值，立刻回复自身30魔法值，若战场为夜晚，则额外回复自身10魔法值。此举不会导致重伤。' +
            '若处于【狂暴之月】状态时，可以额外指定一个除自身以外的目标，令其刷新1层持续至回合结束的【狂暴奉献】。' +
            '若目标的【狂暴奉献】不小于2层，则本回合额外获得一个动作宣言，且移动力增加（【狂暴奉献】层数）。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengePolarisLord = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_polaris_lord',
    name: '姮娥宫极星长老',
    fullname: '姮娥宫极星长老',
    imageUrl: MonsterHengesImage.HengePolarisLord.HengePolarisLordUrl,
    iconUrl: MonsterHengesImage.HengePolarisLord.HengePolarisLordIconUrl,
    size: [1, 1],
    property: {
        health: [1650, 0],
        magic: [280, 0],
        attack: [280, 0],
        defend: [130, 0],
        damage: [75, 0],
        movement: [3, 0],
        initiative: [300, 0],
        morale: [20, 0],
        critic: [5, 0],
    },
    status: {
        strength: [300, 0],
        constitution: [500, 0],
        agility: [300, 0],
        willpower: [500, 0],
        intelligence: [900, 0],
        power: [1300, 0],
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
        '无章拳法': '姮娥宫极星长老的射程为1，且造成的普通攻击伤害为50%。',
        '极暗浪潮': '姮娥宫极星长老施放暗系魔法时，魔力判定上升200点。若战场为夜晚，则施放暗系魔法的魔力判定额外上升300点。若处于【狂暴之月】状态时，咏唱暗系魔法剩余需要的回合数-2。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeLunarLord = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_lunar_lord',
    name: '姮娥宫太阴长老',
    fullname: '姮娥宫太阴长老',
    imageUrl: MonsterHengesImage.HengeLunarLord.HengeLunarLordUrl,
    iconUrl: MonsterHengesImage.HengeLunarLord.HengeLunarLordIconUrl,
    size: [1, 1],
    property: {
        health: [3050, 0],
        magic: [170, 0],
        attack: [180, 0],
        defend: [250, 0],
        damage: [125, 0],
        movement: [6, 0],
        initiative: [600, 0],
        morale: [15, 0],
        critic: [10, 0],
    },
    status: {
        strength: [700, 0],
        constitution: [1170, 0],
        agility: [600, 0],
        willpower: [400, 0],
        intelligence: [400, 0],
        power: [750, 0],
        appearance: [340, 0],
        luck: [375, 0],
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
        '太阴拳法': '姮娥宫太阴长老的射程为1~2。当姮娥宫太阴长老攻击距离为2的目标时，造成的伤害类型为近战暗系伤害。',
        '百炼之体': '姮娥宫太阴长老免疫常见类型的全部毒，并且姮娥宫太阴长老对目标造成伤害时，会刷新目标2回合的【太阴毒】。' +
            '处于【太阴毒】状态下的目标，移动力下降50%、防御力下降20%，且回合结束时损失5%最大值的健康值。',
        '魔力反刍': '当姮娥宫太阴长老对目标施加状态效果时，会根据目标的魔力大小，立刻回复自己（目标魔力×0.5%）点魔法值。',
        '魔力汲取': '每个距离姮娥宫太阴长老不超过6格的单位消耗了魔力，自身的【魔力池】便上升对应消耗的魔力点数。' +
            '当【魔力池】拥有10个点数时，【魔力池】减少10点，且姮娥宫太阴长老立刻回复1点魔法值。',
        '阴云迷阵': '姮娥宫太阴长老消耗150魔法值，立刻以自身为中心，召唤阴云迷阵。阴云迷阵跟随自身移动，覆盖距离不超过自身5格的全部范围，持续2回合。' +
            '处于其中的任何没有【阴云迷阵】技能的单位，在进行任何宣言时，都会立刻受到一次不会触发任何防御和技能的（100+目标3.5%最大健康值）暗系伤害的攻击。' +
            '若战场为夜晚，阴云迷阵的持续时间增加1回合。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeMoonlightWolf = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_moonlight_wolf',
    name: '姮娥宫月光狼',
    fullname: '姮娥宫月光狼',
    imageUrl: MonsterHengesImage.HengeMoonlightWolf.HengeMoonlightWolfUrl,
    iconUrl: MonsterHengesImage.HengeMoonlightWolf.HengeMoonlightWolfIconUrl,
    size: [4, 4],
    property: {
        health: [1600, 0],
        magic: [105, 0],
        attack: [95, 0],
        defend: [80, 0],
        damage: [135, 0],
        movement: [10, 0],
        initiative: [1000, 0],
        morale: [27, 0],
        critic: [15, 0],
    },
    status: {
        strength: [800, 0],
        constitution: [600, 0],
        agility: [1000, 0],
        willpower: [700, 0],
        intelligence: [300, 0],
        power: [500, 0],
        appearance: [700, 0],
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
        '阴影爪击': '姮娥宫月光狼的射程为1，且在夜晚变为1~2。',
        '阴影狩猎': '姮娥宫月光狼消耗一个动作宣言，立刻进入【阴影狩猎】状态且本回合内无法行动。' +
            '若期间受到攻击宣言且导致健康值下降，姮娥宫月光狼的【阴影狩猎】会被打断，并继承本回合剩余的宣言和轮次。',
        '影扑': '当姮娥宫月光狼处于【阴影狩猎】状态时，消耗一个动作宣言，可以使姮娥宫月光狼立刻瞬移至一个地面目标身后（最大移动距离15格）并对其造成无法闪避的攻击宣言。' +
            '然后，姮娥宫月光狼解除【阴影狩猎】状态。',
        '嗜血战嚎': '姮娥宫月光狼消耗一个动作宣言，使所有与其同阵营的单位在本回合内上升2点士气和2点攻击力。（可叠加）若处于【狂暴之月】状态时，士气和攻击力提升上升至3点。',
        '压制': '姮娥宫月光狼可以对不超过4格高度的空中目标发动攻击，如果命中，则会导致该目标坠落至地面、损失本回合全部剩余宣言，并在下回合内降低20点士气。',
        '不稳定魔力': '姮娥宫月光狼不会进入重伤状态，当健康值归零时直接消散，并对周围2格或以内所有目标造成100点暗系魔法伤害。'
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeMoonlightOwl = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_moonlight_owl',
    name: '姮娥宫月光鸮',
    fullname: '姮娥宫月光鸮',
    imageUrl: MonsterHengesImage.HengeMoonlightOwl.HengeMoonlightOwlUrl,
    iconUrl: MonsterHengesImage.HengeMoonlightOwl.HengeMoonlightOwlIconUrl,
    size: [0, 0],
    property: {
        health: [900, 0],
        magic: [100, 0],
        attack: [150, 0],
        defend: [40, 0],
        damage: [25, 0],
        movement: [18, 0],
        initiative: [1250, 0],
        morale: [0, 0],
        critic: [0, 0],
    },
    status: {
        strength: [200, 0],
        constitution: [400, 0],
        agility: [1250, 0],
        willpower: [400, 0],
        intelligence: [200, 0],
        power: [500, 0],
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
        '娇小身躯': '姮娥宫月光鸮无法使用普通攻击。',
        '暗眼魔睛': '姮娥宫月光鸮天然拥有不受地面遮挡的空军视野和不受黑暗干扰的夜视视野，且与所有月光生物、姮娥宫月光供奉、具有暗附魔且处于【月神降临】状态下的单位共享视野。',
        '暗夜潜伏者': '姮娥宫月光鸮降落至地面或树梢上时，不会被距离超过10格的单位获取视野。' +
            '姮娥宫月光鸮连续三个回合处于这种不动状态并没有受到伤害后，于第四个回合开始阶段，姮娥宫月光鸮进入【潜行】状态。',
        '超负荷撞击': '姮娥宫月光鸮消耗一个动作宣言，立刻对一个距离为1的空军单位撞击，造成（400+10%自身剩余健康值）点暗系魔法伤害之后，自己直接健康值归零并消散。',
        '不稳定魔力': '姮娥宫月光鸮不会进入重伤状态，当健康值归零时直接消散。若姮娥宫月光鸮并非因自己的主动宣言而消散，则消散时对周围2格或以内所有目标造成50点暗系魔法伤害。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const HengeMoonlightBunny = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'henge_moonlight_bunny',
    name: '姮娥宫月光兔',
    fullname: '姮娥宫月光兔',
    imageUrl: MonsterHengesImage.HengeMoonlightBunny.HengeMoonlightBunnyUrl,
    iconUrl: MonsterHengesImage.HengeMoonlightBunny.HengeMoonlightBunnyIconUrl,
    size: [0, 0],
    property: {
        health: [500, 0],
        magic: [200, 0],
        attack: [25, 0],
        defend: [20, 0],
        damage: [65, 0],
        movement: [4, 0],
        initiative: [425, 0],
        morale: [13, 0],
        critic: [6, 0],
    },
    status: {
        strength: [200, 0],
        constitution: [200, 0],
        agility: [425, 0],
        willpower: [300, 0],
        intelligence: [100, 0],
        power: [500, 0],
        appearance: [300, 0],
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
        '温顺': '姮娥宫月光兔无法使用普通攻击。',
        '活力呼唤': '姮娥宫月光兔消耗一个动作宣言和10点魔法值，回复距离自身不超过4格的所有目标20点健康值。',
        '宁静呢喃': '姮娥宫月光兔消耗一个动作宣言和10点魔法值，回复距离自身不超过4格的所有除姮娥宫月光兔以外的目标1点魔法值。',
        '沐浴月光': '当战场为夜晚时，姮娥宫月光兔每回合结束阶段回复3点魔法值。',
        '暗夜生物': '姮娥宫月光兔不会被距离超过10格的单位获取视野。',
        '超负荷撞击': '姮娥宫月光兔消耗一个动作宣言，立刻对一个距离为1的地面单位撞击，使其损失（20+25%自身剩余魔法值）点魔法值后，自己直接健康值归零并消散。',
        '不稳定魔力': '姮娥宫月光兔不会进入重伤状态，当健康值归零时直接消散。若姮娥宫月光兔并非因自己的主动宣言而消散，则消散时对周围2格或以内所有目标造成10点魔法值流失。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LunamVenit = {
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
    side: ['姮娥宫'],
    type: 'Monster',
    idName: 'lunam_venit',
    name: '月神降临',
    fullname: '月神降临',
    imageUrl: MonsterHengesImage.LunamVenit.LunamVenitUrl,
    iconUrl: MonsterHengesImage.LunamVenit.LunamVenitIconUrl,
    size: [0, 0],
    property: {
        health: [0, 0],
        magic: [0, 0],
        attack: [0, 0],
        defend: [0, 0],
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
        '虚境存在': '月神降临会根据降临进度为战场提供附加效果，其本身无法被任何形式直接干扰、阻挡或消除。',
        '枯萎之月': '当月神降临进度达到5点时被动生效，持续至战斗结束。当一个目标身边2格内有其他目标时，该目标的攻击力和防御力实时降低20%。',
        '宁静与狂暴之月': '当月神降临进度达到10点时被动生效，持续至战斗结束。' +
            '被暗附魔的目标若不处于【枯萎之月】或【狂暴之月】状态下，则处于【宁静之月】状态。【宁静之月】状态下，目标每在一个回合内不进行攻击宣言，其造成的伤害就会累计增加10%。' +
            '战斗开始后，每六个回合在第六个回合开始阶段触发【狂暴之月】，将立刻锁定【枯萎之月】和【宁静之月】的加成，并将其效果提升至200%。' +
            '【狂暴之月】的优先级最高，触发后持续一个回合，并在回合结束时移除【宁静之月】的累计加成。',
        '影匿之月': '当月神降临进度达到15点时被动生效，持续至战斗结束。被暗附魔的目标在一个回合内未进行任何宣言时，无论其是否遭受伤害，都将被视为潜行大成功。' +
            '除非目标被魔法、技能或物品探知，或目标进行任何宣言，否则该目标不会被发现，也不会受【枯萎之月】影响。',
        '荧辉之月': '当月神降临进度达到20点时被动生效，持续至战斗结束。【宁静之月】阶段每次累计额外增加的伤害提升至12.5%，后续新轮回的【狂暴之月】变为每五个回合在第五个回合触发一次。',
        '信仰之月': '当月神降临进度达到30点时被动生效，之后月神降临进度将无法继续增加，持续至战斗结束。' +
            '当目标具有暗附魔时，目标受到的健康和魔法回复效果提升25%，造成的伤害增加15%，受到的物理伤害降低10%、受到的魔法伤害降低20%，移动力和先攻值增加30%。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

export {
    HengeMountainGateGuard,
    HengeLunaFollower,
    HengeShadowHunter,
    HengeMoonlightWorshiper,
    HengeAstralGuardian,
    HengeNetherGuardian,
    HengePolarisLord,
    HengeLunarLord,
    HengeMoonlightWolf,
    HengeMoonlightOwl,
    HengeMoonlightBunny,
    LunamVenit,
}