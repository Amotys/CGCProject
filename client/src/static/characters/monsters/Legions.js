import DefaultSkillsPoint from '../../skills/DefaultSkillsPoint';
import MonsterLegionsImage from '../../images/monsters/legion/MonsterLegionsImage';

const LegionBandit = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_bandit',
    name: '军团匪兵',
    fullname: '军团匪兵',
    imageUrl: MonsterLegionsImage.LegionBandit.LegionBanditUrl,
    iconUrl: MonsterLegionsImage.LegionBandit.LegionBanditIconUrl,
    size: [1, 1],
    property: {
        health: [1950, 0],
        magic: [5, 0],
        attack: [95, 0],
        defend: [90, 0],
        damage: [145, 0],
        movement: [6, 0],
        initiative: [650, 0],
        morale: [17, 0],
        critic: [12, 0],
    },
    status: {
        strength: [700, 0],
        constitution: [700, 0],
        agility: [650, 0],
        willpower: [650, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [300, 0],
        luck: [550, 0],
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
        '涂毒匕首': '军团匪兵的射程为1，普通攻击对目标造成伤害时，会刷新目标3回合【蝎毒】。处于【蝎毒】状态下的目标，移动速度-1、防御力下降10%（乘法）、每回合结束阶段流失50健康值。',
        '抢钱': '军团匪兵每次命中携带金钱的目标，都会抢夺（1D3+1）枚银币。战斗结束后，若军团匪兵成功存活，则抢夺的银币不会归还，而是被转移至该匪兵的背包中；' +
            '否则，军团匪兵抢夺的银币可以作为物品被搜刮。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionPoisonThrower = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_poison_thrower',
    name: '军团毒师',
    fullname: '军团毒师',
    imageUrl: MonsterLegionsImage.LegionPoisonThrower.LegionPoisonThrowerUrl,
    iconUrl: MonsterLegionsImage.LegionPoisonThrower.LegionPoisonThrowerIconUrl,
    size: [1, 1],
    property: {
        health: [1750, 0],
        magic: [5, 0],
        attack: [70, 0],
        defend: [80, 0],
        damage: [115, 0],
        movement: [9, 0],
        initiative: [750, 0],
        morale: [20, 0],
        critic: [11, 0],
    },
    status: {
        strength: [600, 0],
        constitution: [600, 0],
        agility: [750, 0],
        willpower: [825, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [300, 0],
        luck: [425, 0],
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
        '施暴拳': '军团毒师的射程为1。',
        '蛇毒瓶': '战斗开始后，军团毒师拥有2瓶【蛇毒药剂】。军团毒师消耗一个动作宣言和1瓶【蛇毒药剂】，可以对距离自身2~6格的区域投掷蛇毒瓶。' +
            '蛇毒瓶炸裂后会在当前格子和其周围共4个格子制造【蛇毒云】，接触【蛇毒云】的单位会实时刷新2回合的【蛇毒】状态。' +
            '处于【蛇毒】状态下的单位，防御力下降10%（乘法）、每回合结束阶段流失2%最大值的健康值。',
        '麻药瓶': '战斗开始后，军团毒师拥有2瓶【麻痹药剂】。军团毒师消耗一个动作宣言和1瓶【麻痹药剂】，可以对距离自身2~6格的区域投掷麻药瓶。' +
            '蛇毒瓶炸裂后会在当前格子和其周围共4个格子制造【麻痹云】，接触【麻痹云】的单位会实时刷新2回合的【麻痹】状态。' +
            '处于【麻痹】状态下的单位，防御力下降25%（乘法）、每回合开始阶段需要进行体质检定，若失败则本回合失去一个移动宣言且技能判定结果下降20%（乘法）。',
        '致幻瓶': '战斗开始后，军团毒师拥有1瓶【致幻药剂】。军团毒师消耗一个动作宣言和1瓶【致幻药剂】，可以对距离自身2~6格的区域投掷致幻瓶。' +
            '蛇毒瓶炸裂后会在当前格子和其周围共4个格子制造【致幻云】，接触【致幻云】的单位会实时刷新1回合的【致幻】状态。' +
            '处于【致幻】状态下的单位，回合结束阶段需要进行体质检定，若失败则下回合开始阶段进入【睡眠】状态——无法进行任何宣言直到受到伤害为止，持续一个回合。',
        '兴奋瓶': '战斗开始后，军团毒师拥有1瓶【兴奋药剂】。军团毒师消耗一个动作宣言和1瓶【兴奋药剂】，可以对距离自身2~6格的区域投掷兴奋瓶。' +
            '蛇毒瓶炸裂后会在当前格子和其周围共4个格子制造【兴奋云】，接触【兴奋云】的单位会实时刷新1回合的【兴奋】状态。' +
            '处于【兴奋】状态下的单位，攻击力与防御力上升20%（乘法）。',
        '愈合瓶': '战斗开始后，军团毒师拥有1瓶【愈合药剂】。军团毒师消耗一个动作宣言和1瓶【愈合药剂】，可以对距离自身2~6格的区域投掷愈合瓶。' +
            '蛇毒瓶炸裂后会在当前格子和其周围共4个格子制造【愈合云】，接触【愈合云】的单位会实时刷新1回合的【愈合】状态。' +
            '处于【愈合】状态下的单位，回合结束阶段回复10%最大值的健康值（最大回复300健康值）。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionBlightWarlock = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_blight_warlock',
    name: '军团枯萎术士',
    fullname: '军团枯萎术士',
    imageUrl: MonsterLegionsImage.LegionBlightWarlock.LegionBlightWarlockUrl,
    iconUrl: MonsterLegionsImage.LegionBlightWarlock.LegionBlightWarlockIconUrl,
    size: [1, 1],
    property: {
        health: [1750, 0],
        magic: [165, 0],
        attack: [75, 0],
        defend: [80, 0],
        damage: [100, 0],
        movement: [5, 0],
        initiative: [500, 0],
        morale: [13, 0],
        critic: [8, 0],
    },
    status: {
        strength: [500, 0],
        constitution: [600, 0],
        agility: [500, 0],
        willpower: [300, 0],
        intelligence: [600, 0],
        power: [800, 0],
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
        '施暴拳': '军团枯萎术士的射程为1。',
        '恶毒意志': '被军团枯萎术士施加过减益效果的目标，受到该军团枯萎术士的攻击宣言时，防御力临时下降40点。（优先于乘法结算）',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionSerpentTamer = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_serpent_tamer',
    name: '军团驯蛇使',
    fullname: '军团驯蛇使',
    imageUrl: MonsterLegionsImage.LegionSerpentTamer.LegionSerpentTamerUrl,
    iconUrl: MonsterLegionsImage.LegionSerpentTamer.LegionSerpentTamerIconUrl,
    size: [1, 1],
    property: {
        health: [2150, 0],
        magic: [5, 0],
        attack: [55, 0],
        defend: [120, 0],
        damage: [90, 0],
        movement: [5, 0],
        initiative: [770, 0],
        morale: [35, 0],
        critic: [8, 0],
    },
    status: {
        strength: [400, 0],
        constitution: [800, 0],
        agility: [500, 0],
        willpower: [300, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [1000, 0],
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
        '蛇咬': '军团驯蛇使的射程为1~3，攻击类型为近战。',
        '蛇毒侵蚀': '军团驯蛇使对目标造成伤害时，会使目标刷新3回合并叠加1层【蛇毒】（最大5层）。回合的结束阶段，处于【蛇毒】状态的目标会损失（1%最大健康值×【蛇毒】层数）的健康值。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionDoubleTeam = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_double_team',
    name: '军团双人刀弩小队',
    fullname: '军团双人刀弩小队',
    imageUrl: MonsterLegionsImage.LegionDoubleTeam.LegionDoubleTeamUrl,
    iconUrl: MonsterLegionsImage.LegionDoubleTeam.LegionDoubleTeamIconUrl,
    size: [1, 1],
    property: {
        health: [3200, 0],
        magic: [10, 0],
        attack: [200, 0],
        defend: [200, 0],
        damage: [240, 0],
        movement: [9, 0],
        initiative: [900, 0],
        morale: [21, 0],
        critic: [14, 0],
    },
    status: {
        strength: [1500, 0],
        constitution: [1300, 0],
        agility: [900, 0],
        willpower: [800, 0],
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
        '流沙弯刀': '军团双人刀弩小队的近战射程为1。',
        '猎隼弓': '军团双人刀弩小队的远程射程为2~8。',
        '双人作战': '军团双人刀弩小队进行不同的攻击宣言不需要切换武器，在遭受攻击宣言时，可以同时检定【闪避】与【格挡反击】并自由挑选与之对抗的技能和对应的检定结果。' +
            '军团双人刀弩小队若不处于【残部】状态时，健康值小于最大值的50%时立刻获得不可被驱散和消除的【残部】状态。' +
            '处于【残部】状态时，军团双人刀弩小队健康值上限、攻击力与防御力、力量体质意志属性也会变为50%，并且最大士气不会超过0。' +
            '除此之外，处于【残部】状态的军团双人刀弩小队将会获得以下修正之一：①禁用近战攻击宣言与【格挡反击】技能且伤害值下降90；②禁用远程攻击宣言与【闪避】技能且伤害值下降60。',
        '重组队伍': '处于【残部】状态下的军团双人刀弩小队可以对另一个处于【残部】状态下的军团双人刀弩小队进行重组，重组的两个军团双人刀弩小队的当前健康值之和必须大于1600。' +
            '如果这样做，该军团双人刀弩小队将会立刻解散（从战场上消除），并且使目标军团双人刀弩小队的【残部】状态解除，并使目标组增加自身组剩余的健康值，作为目标组新的健康值。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionQuicksandPharaoh = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_quicksand_pharaoh',
    name: '军团流沙法老',
    fullname: '军团流沙法老',
    imageUrl: MonsterLegionsImage.LegionQuicksandPharaoh.LegionQuicksandPharaohUrl,
    iconUrl: MonsterLegionsImage.LegionQuicksandPharaoh.LegionQuicksandPharaohIconUrl,
    size: [1, 1],
    property: {
        health: [1600, 0],
        magic: [190, 0],
        attack: [92, 0],
        defend: [90, 0],
        damage: [100, 0],
        movement: [4, 0],
        initiative: [450, 0],
        morale: [20, 0],
        critic: [10, 0],
    },
    status: {
        strength: [500, 0],
        constitution: [500, 0],
        agility: [450, 0],
        willpower: [500, 0],
        intelligence: [450, 0],
        power: [600, 0],
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
        '黄土掌': '军团流沙法老的近战射程为1。',
        '唤土驱沙': '军团流沙法老身上的附魔类型永久为【土附魔】，且无法被其他类型的附魔覆盖。' +
            '除此以外，距离军团流沙法老不超过3格的全部地面沙漠地形将会变为流沙地形，没有处于【土附魔】下的地面单位，除非特殊情况，否则将会视流沙地形为困难地形。' +
            '若单位处于【土附魔】状态，可以消耗一个动作宣言潜入流沙地形之中，使其处于【潜地】状态。' +
            '处于【潜地】状态的单位将会对其他目标隐藏其视野但移动力花费为2倍，并且受到的地表以上的任何范围伤害降低50%。' +
            '处于【潜地】状态的单位消耗一个动作宣言，可以从没有遮挡的流沙地形上钻出地表。',
        '厚土咒印': '军团流沙法老使用【土附魔】（1阶）魔法时，可以额外选定一个目标。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionCamelCavalry = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_camel_cavalry',
    name: '军团骆驼骑兵',
    fullname: '军团骆驼骑兵',
    imageUrl: MonsterLegionsImage.LegionCamelCavalry.LegionCamelCavalryUrl,
    iconUrl: MonsterLegionsImage.LegionCamelCavalry.LegionCamelCavalryIconUrl,
    size: [4, 4],
    property: {
        health: [3000, 0],
        magic: [15, 0],
        attack: [120, 0],
        defend: [170, 0],
        damage: [150, 0],
        movement: [10, 0],
        initiative: [635, 0],
        morale: [30, 0],
        critic: [15, 0],
    },
    status: {
        strength: [500, 0],
        constitution: [900, 0],
        agility: [600, 0],
        willpower: [500, 0],
        intelligence: [300, 0],
        power: [0, 0],
        appearance: [800, 0],
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
        '斩马弯刀': '军团骆驼骑兵的射程为1。',
        '血统压制': '军团骆驼骑兵与其他骑兵单位交战时，若对方骑乘的坐骑没有骆驼壮硕，则军团骆驼骑兵获得额外的30攻击力和10士气。',
        '飞旋刃': '战斗开始后，军团骆驼骑兵拥有2个【斩马弯刀】。军团骆驼骑兵消耗一个动作宣言和1个【斩马弯刀】，可以进行一次必中的、伤害为160%、射程为2~5的远程普通攻击。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionDuskExecutioner = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_dusk_executioner',
    name: '军团日暮刽子手',
    fullname: '军团日暮刽子手',
    imageUrl: MonsterLegionsImage.LegionDuskExecutioner.LegionDuskExecutionerUrl,
    iconUrl: MonsterLegionsImage.LegionDuskExecutioner.LegionDuskExecutionerIconUrl,
    size: [1, 1],
    property: {
        health: [1825, 0],
        magic: [15, 0],
        attack: [175, 0],
        defend: [120, 0],
        damage: [250, 0],
        movement: [10, 0],
        initiative: [1085, 0],
        morale: [13, 0],
        critic: [13, 0],
    },
    status: {
        strength: [1200, 0],
        constitution: [600, 0],
        agility: [1000, 0],
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
        '断头重劈': '军团日暮刽子手的近战射程为1。',
        '处刑飞斧': '军团日暮刽子手的投掷射程为2~6。',
        '头破血流': '军团日暮刽子手对目标造成伤害时，会使目标增加1层【处刑伤口】（最大10层）。' +
            '处于【处刑伤口】状态下的目标，士气下降（【处刑伤口】层数）、回合结束阶段损失（【处刑伤口】层数×3）健康值。' +
            '当军团日暮刽子手对处于10层【处刑伤口】的目标造成伤害时，目标额外损失60点健康值。【处刑伤口】在战斗中不会随时间解除，但可以通过【急救】技能解除1D2层。' +
            '非战斗中，【处刑伤口】也可以通过【医疗】技能解除1D3+1层。当【处刑伤口】层数不大于5层时，每天会自然减少3层，否则每天会自然增加2层。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionUnparalleledBanditKing = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_unparalleled_bandit_king',
    name: '军团无双匪王',
    fullname: '军团无双匪王',
    imageUrl: MonsterLegionsImage.LegionUnparalleledBanditKing.LegionUnparalleledBanditKingUrl,
    iconUrl: MonsterLegionsImage.LegionUnparalleledBanditKing.LegionUnparalleledBanditKingIconUrl,
    size: [1, 1],
    property: {
        health: [2125, 0],
        magic: [15, 0],
        attack: [200, 0],
        defend: [135, 0],
        damage: [245, 0],
        movement: [3, 0],
        initiative: [300, 0],
        morale: [16, 0],
        critic: [10, 0],
    },
    status: {
        strength: [1200, 0],
        constitution: [750, 0],
        agility: [300, 0],
        willpower: [575, 0],
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
        '钉头重锤': '军团无双匪王的射程为1。',
        '狂挥乱打': '军团无双匪王可以在每回合开始阶段狂暴化，如果这样做，该军团无双匪王本回合内，攻击力上升80点，但防御力下降70点。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const LegionGiantSandworm = {
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
    side: ['沙之军团'],
    type: 'Monster',
    idName: 'legion_giant_sandworm',
    name: '军团巨型沙虫',
    fullname: '军团巨型沙虫',
    imageUrl: MonsterLegionsImage.LegionGiantSandworm.LegionGiantSandwormUrl,
    iconUrl: MonsterLegionsImage.LegionGiantSandworm.LegionGiantSandwormIconUrl,
    size: [9, 9],
    property: {
        health: [4250, 0],
        magic: [17, 0],
        attack: [165, 0],
        defend: [250, 0],
        damage: [185, 0],
        movement: [1, 0],
        initiative: [150, 0],
        morale: [15, 0],
        critic: [8, 0],
    },
    status: {
        strength: [1200, 0],
        constitution: [1800, 0],
        agility: [150, 0],
        willpower: [700, 0],
        intelligence: [100, 0],
        power: [0, 0],
        appearance: [200, 0],
        luck: [200, 0],
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
        '撕咬': '军团巨型沙虫的射程为1。',
        '吞噬': '军团巨型沙虫可以消耗一个动作宣言，吞噬一个距离自身不超过2格、等级低于自身且体型小于自身的地面、地下或低空飞行单位。' +
            '被吞噬的单位将失去战斗能力，并且在沙虫消化期间，每回合或每5秒受到50真实伤害。沙虫同一时间最多消化共计20体型的单位。' +
            '消化期间，若军团巨型沙虫死亡，则被吞噬的单位会从沙虫肚子中钻出，并在后续回合受到轻微的酸液影响。' +
            '若消化期间，被吞噬的单位健康值归零，则直接死亡。',
        '瘤胃囊': '军团巨型沙虫可以消耗一个动作宣言，吞噬一个距离自身不超过2格、自愿进入其瘤胃囊的体型小于自身的地面、地下或低空飞行单位，被吞噬的单位将临时失去战斗轮次。' +
            '军团巨型沙虫可以消耗一个动作宣言，将瘤胃囊中的一个单位吐在身边一格处。在瘤胃囊中的单位也可以消耗一个动作宣言自己从瘤胃囊中走出，并来到军团巨型沙虫身边一格处。' +
            '瘤胃囊将被视为半流通环境，在其中的单位可以在沙虫完全封闭气孔的状态下存活20分钟。',
        '潜沙钻地': '军团巨型沙虫可以消耗2个回合内的共计2个动作宣言，在坚硬的土质地面打洞，潜入地下或钻出地表；也可以消耗1个动作宣言，在至少3格的流沙地形上直接潜入地下或钻出地表。' +
            '期间，若军团巨型沙虫的潜入或钻出动作被打断，导致2个回合内消耗的动作宣言不足2个，则本次潜入或钻出动作失败；否则，军团巨型沙虫将在第二个回合结束阶段完成动作。' +
            '正在钻出地表的军团巨型沙虫会引起地面单位的警觉，若军团巨型沙虫钻出地表时，有单位阻挡，则单位会被击退至沙虫周围并受到150点近战物理伤害。' +
            '潜入地下的沙虫在回合开始阶段将会额外获得8点移动力，并且受到的地表以上的任何范围伤害降低50%。',
        '气系弱点': '军团巨型沙虫身上的附魔类型永久为【土附魔】，且无法被其他类型的附魔覆盖。' +
            '若军团巨型沙虫一个回合内受到900点气系伤害，或一次性受到600点气系伤害，将会立刻尝试从地下破土而出，并且进入不可被驱散或被消除的状态【瘫软】，持续三个回合。' +
            '处于【瘫软】状态下的军团巨型沙虫，无法进行任何宣言，并且防御力降低100。',
        '巨型野兽': '军团巨型沙虫无视对方暴击，且不享受围攻加成，健康值归零后立刻死亡。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

export {
    LegionBandit,
    LegionPoisonThrower,
    LegionBlightWarlock,
    LegionSerpentTamer,
    LegionDoubleTeam,
    LegionQuicksandPharaoh,
    LegionCamelCavalry,
    LegionDuskExecutioner,
    LegionUnparalleledBanditKing,
    LegionGiantSandworm,
}