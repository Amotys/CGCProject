import DefaultSkillsPoint from '../../skills/DefaultSkillsPoint';
import MonsterTemplarsImage from '../../images/monsters/templar/MonsterTemplarsImage';

const TemplarHollyGuard = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_holly_guard',
    name: '圣堂神圣卫队',
    fullname: '圣堂神圣卫队',
    imageUrl: MonsterTemplarsImage.TemplarHollyGuard.TemplarHollyGuardUrl,
    iconUrl: MonsterTemplarsImage.TemplarHollyGuard.TemplarHollyGuardIconUrl,
    size: [1, 1],
    property: {
        health: [2200, 0],
        magic: [10, 0],
        attack: [105, 0],
        defend: [150, 0],
        damage: [135, 0],
        movement: [4, 0],
        initiative: [400, 0],
        morale: [20, 0],
        critic: [10, 0],
    },
    status: {
        strength: [800, 0],
        constitution: [800, 0],
        agility: [400, 0],
        willpower: [600, 0],
        intelligence: [400, 0],
        power: [0, 0],
        appearance: [400, 0],
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
        '圣教长枪': '圣堂神圣卫队的射程为1~2。',
        '正义铁壁': '圣堂神圣卫队可以将自己即将遭受的健康减值，与左右各1格的其他圣堂神圣卫队共同分担。',
        '坚如钢铁': '圣堂神圣卫队不做出任何宣言直接结束回合后，跳过士气轮并获得来自正面的物理伤害减免15%，直到自己的下一个轮次到来为止。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarCrossbowman = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_crossbowman',
    name: '圣堂弓弩手',
    fullname: '圣堂弓弩手',
    imageUrl: MonsterTemplarsImage.TemplarCrossbowman.TemplarCrossbowmanUrl,
    iconUrl: MonsterTemplarsImage.TemplarCrossbowman.TemplarCrossbowmanIconUrl,
    size: [1, 1],
    property: {
        health: [1400, 0],
        magic: [10, 0],
        attack: [120, 0],
        defend: [80, 0],
        damage: [160, 0],
        movement: [6, 0],
        initiative: [750, 0],
        morale: [20, 0],
        critic: [15, 0],
    },
    status: {
        strength: [1000, 0],
        constitution: [400, 0],
        agility: [600, 0],
        willpower: [500, 0],
        intelligence: [400, 0],
        power: [0, 0],
        appearance: [400, 0],
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
        '圣教铁弩': '圣堂弓弩手的射程为2~10。',
        '专注射击': '圣堂弓弩手可以选择在本回合第一个轮次开始时进行专注射击。如果这样做，圣堂弓弩手立刻损失3移动力，本回合箭术和快速射击的检定结果不会低于250。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarHolyblessingSister = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_holyblessing_sister',
    name: '圣堂圣佑修女',
    fullname: '圣堂圣佑修女',
    imageUrl: MonsterTemplarsImage.TemplarHolyblessingSister.TemplarHolyblessingSisterUrl,
    iconUrl: MonsterTemplarsImage.TemplarHolyblessingSister.TemplarHolyblessingSisterIconUrl,
    size: [1, 1],
    property: {
        health: [1600, 0],
        magic: [110, 0],
        attack: [75, 0],
        defend: [90, 0],
        damage: [75, 0],
        movement: [5, 0],
        initiative: [500, 0],
        morale: [25, 0],
        critic: [10, 0],
    },
    status: {
        strength: [300, 0],
        constitution: [500, 0],
        agility: [500, 0],
        willpower: [500, 0],
        intelligence: [500, 0],
        power: [500, 0],
        appearance: [600, 0],
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
        '和平使者': '圣堂圣佑修女无法使用普通攻击。',
        '朝圣礼拜': '圣堂圣佑修女不做出任何宣言直接结束回合后，跳过士气轮并积累一层【虔诚】，最多6层。圣堂圣佑修女可以消耗5层【虔诚】，回复距离自身不超过2格的一个目标10点魔法值。',
        '纯洁': '当圣堂圣佑修女使用驱散魔法驱散至少一个状态时，获得一层【纯洁】，最多3层。圣堂圣佑修女可以消耗2层【纯洁】，清除自身的一个可驱散状态。'
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarMissionaryPastor = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_missionary_pastor',
    name: '圣堂传教牧师',
    fullname: '圣堂传教牧师',
    imageUrl: MonsterTemplarsImage.TemplarMissionaryPastor.TemplarMissionaryPastorUrl,
    iconUrl: MonsterTemplarsImage.TemplarMissionaryPastor.TemplarMissionaryPastorIconUrl,
    size: [1, 1],
    property: {
        health: [1600, 0],
        magic: [110, 0],
        attack: [75, 0],
        defend: [90, 0],
        damage: [75, 0],
        movement: [7, 0],
        initiative: [700, 0],
        morale: [20, 0],
        critic: [10, 0],
    },
    status: {
        strength: [300, 0],
        constitution: [500, 0],
        agility: [700, 0],
        willpower: [700, 0],
        intelligence: [400, 0],
        power: [500, 0],
        appearance: [400, 0],
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
        '光明教典': '圣堂传教牧师的射程为1。',
        '救赎誓言': '圣堂传教牧师施放不高于三阶的回复类魔法回复健康值时，效果增加20%。',
        '传教': '圣堂传教牧师消耗一个动作宣言进行传教，本回合内，距离自身不超过5格的所有单位：' +
            '①若信仰为邪恶，下降5点士气；②若信仰为善良，提升3点士气；③若阵营为圣堂，提升2点士气。（可触发多条，多个传教不叠加）'
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarDemonbreakingPriest = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_demonbreaking_priest',
    name: '圣堂破魔祭司',
    fullname: '圣堂破魔祭司',
    imageUrl: MonsterTemplarsImage.TemplarDemonbreakingPriest.TemplarDemonbreakingPriestUrl,
    iconUrl: MonsterTemplarsImage.TemplarDemonbreakingPriest.TemplarDemonbreakingPriestIconUrl,
    size: [1, 1],
    property: {
        health: [1400, 0],
        magic: [190, 0],
        attack: [90, 0],
        defend: [80, 0],
        damage: [90, 0],
        movement: [3, 0],
        initiative: [300, 0],
        morale: [13, 0],
        critic: [7, 0],
    },
    status: {
        strength: [400, 0],
        constitution: [400, 0],
        agility: [300, 0],
        willpower: [300, 0],
        intelligence: [800, 0],
        power: [900, 0],
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
        '神谕法杖': '圣堂破魔祭司的射程为1~2。',
        '圣谕宣言': '当圣堂破魔祭司成功对邪恶信仰的目标造成光属性伤害后，周围1格的所有单位在本回合内增加5点士气。（可叠加）',
        '圣恩教典': '距离圣堂破魔祭司不超过2格的所有圣堂圣佑修女和圣堂传教牧师，【朝圣礼拜】和【救赎誓言】的效果额外增加10%。（加法，不可叠加）'
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarBladeMaster = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_blade_master',
    name: '圣堂剑术大师',
    fullname: '圣堂剑术大师',
    imageUrl: MonsterTemplarsImage.TemplarBladeMaster.TemplarBladeMasterUrl,
    iconUrl: MonsterTemplarsImage.TemplarBladeMaster.TemplarBladeMasterIconUrl,
    size: [1, 1],
    property: {
        health: [2250, 0],
        magic: [10, 0],
        attack: [160, 0],
        defend: [140, 0],
        damage: [180, 0],
        movement: [5, 0],
        initiative: [600, 0],
        morale: [15, 0],
        critic: [15, 0],
    },
    status: {
        strength: [1000, 0],
        constitution: [800, 0],
        agility: [500, 0],
        willpower: [400, 0],
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
        '精钢利剑': '圣堂剑术大师的射程为1。',
        '心眼剑': '当圣堂剑术大师反击成功后，优先结算反击伤害。',
        '圆切斩': '圣堂剑术大师进行攻击距离为1的近战普通攻击时，可以对攻击范围内的全体其它目标造成与主目标相同的伤害。',
        '灵敏身姿': '圣堂剑术大师不受没有击中自身的地面溅射伤害影响。',
        '巨人杀手': '圣堂剑术大师对体型超过4格的单位进行攻击宣言时，近战武器判定结果增加20%且造成的最终减值增加150点。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarSilvermanedGriffon = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_silvermaned_griffon',
    name: '圣堂银鬃狮鹫',
    fullname: '圣堂银鬃狮鹫',
    imageUrl: MonsterTemplarsImage.TemplarSilvermanedGriffon.TemplarSilvermanedGriffonUrl,
    iconUrl: MonsterTemplarsImage.TemplarSilvermanedGriffon.TemplarSilvermanedGriffonIconUrl,
    size: [4, 4],
    property: {
        health: [1600, 0],
        magic: [0, 0],
        attack: [120, 0],
        defend: [100, 0],
        damage: [160, 0],
        movement: [9, 0],
        initiative: [950, 0],
        morale: [10, 0],
        critic: [10, 0],
    },
    status: {
        strength: [1000, 0],
        constitution: [1000, 0],
        agility: [950, 0],
        willpower: [500, 0],
        intelligence: [200, 0],
        power: [0, 0],
        appearance: [200, 0],
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
        '尖嘴利喙': '圣堂银鬃狮鹫的射程为1。',
        '空中霸主': '除非遭到限制，否则，圣堂银鬃狮鹫在战斗中为永久飞行单位。',
        '俯冲': '圣堂银鬃狮鹫消耗一个动作宣言，对距离自身不超过4格的地面单位进行一次俯冲普通攻击，并会在结算后移动至相对目标的对称侧。',
        '利爪搏斗': '圣堂银鬃狮鹫针对飞行单位的区域封锁范围为3。'
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarUnicorn = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_unicorn',
    name: '圣堂独角兽',
    fullname: '圣堂独角兽',
    imageUrl: MonsterTemplarsImage.TemplarUnicorn.TemplarUnicornUrl,
    iconUrl: MonsterTemplarsImage.TemplarUnicorn.TemplarUnicornIconUrl,
    size: [4, 4],
    property: {
        health: [3000, 0],
        magic: [160, 0],
        attack: [120, 0],
        defend: [150, 0],
        damage: [200, 0],
        movement: [6, 0],
        initiative: [650, 0],
        morale: [35, 0],
        critic: [20, 0],
    },
    status: {
        strength: [1300, 0],
        constitution: [1500, 0],
        agility: [650, 0],
        willpower: [1000, 0],
        intelligence: [600, 0],
        power: [800, 0],
        appearance: [800, 0],
        luck: [900, 0],
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
        '螺旋独角': '圣堂独角兽的射程为1。',
        '无暇之灵': '圣堂独角兽不受任何精神类魔法影响，且实时为身边1格的所有善良信仰的单位提升5点士气（可叠加）。' +
            '当圣堂独角兽死亡时，正在被其提升士气的单位立刻失去此加成并在当前回合内额外下降15点士气。',
        '破军冲锋': '本回合内，圣堂独角兽的移动力增加50%，但只能够直线移动，且普通攻击变为冲撞攻击。被冲撞攻击击中的目标会被击倒，需要一个动作宣言站起。',
        '魔力消散': '每场战斗中仅限一次，圣堂独角兽立刻无宣言驱散自身和周围一格内所有单位身上的可驱散状态。',
        '魔力凝滞': '圣堂独角兽消耗一个动作宣言，本回合内，使距离自身不超过5格的2×2范围内的目标无法咏唱魔法。若目标已经开始咏唱，则会被打断并不会返还宣言。',
        '魔力驱逐': '圣堂独角兽消耗一个动作宣言，使视野内一个等级不超过40级的召唤物立刻损失20%最大值的健康值。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarKnight = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_knight',
    name: '圣堂圣殿骑士',
    fullname: '圣堂圣殿骑士',
    imageUrl: MonsterTemplarsImage.TemplarKnight.TemplarKnightUrl,
    iconUrl: MonsterTemplarsImage.TemplarKnight.TemplarKnightIconUrl,
    size: [4, 4],
    property: {
        health: [3200, 0],
        magic: [15, 0],
        attack: [180, 0],
        defend: [180, 0],
        damage: [230, 0],
        movement: [15, 0],
        initiative: [1000, 0],
        morale: [20, 0],
        critic: [15, 0],
    },
    status: {
        strength: [1000, 0],
        constitution: [1000, 0],
        agility: [1000, 0],
        willpower: [1000, 0],
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
        '骑士长枪': '圣堂圣殿骑士的射程为1~2。',
        '神圣庇护': '每场战斗中仅限一次，圣堂圣殿骑士在本回合中受到的全部伤害降低至10%。',
        '骑士冲锋': '圣堂圣殿骑士执行移动宣言时，会累计最后一次向着单一方向持续移动的格数，若其大于3格，则会在本回合的下次攻击宣言中伤害提升（移动格数×5）。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

const TemplarWarBallista = {
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
    side: ['圣堂'],
    type: 'Monster',
    idName: 'templar_war_ballista',
    name: '圣堂战争弩车',
    fullname: '圣堂战争弩车',
    imageUrl: MonsterTemplarsImage.TemplarWarBallista.TemplarWarBallistaUrl,
    iconUrl: MonsterTemplarsImage.TemplarWarBallista.TemplarWarBallistaIconUrl,
    size: [9, 9],
    property: {
        health: [2000, 0],
        magic: [0, 0],
        attack: [150, 0],
        defend: [150, 0],
        damage: [400, 0],
        movement: [1, 0],
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
        '攻城弩炮': '圣堂战争弩车的射程为4~30。圣堂战争弩车的攻击检定结果不会低于500，但圣堂战争弩车只能够伤害到射程范围内的目标。',
        '抗魔涂层': '圣堂战争弩车受到的小型远程物理攻击伤害为20%，受到的魔法伤害为50%。',
        '战争器械': '圣堂战争弩车没有生命，是由石头、木头和金属组成的战争器械，拥有最大射程限制，不受精准、疾行、强壮、士气、毒、睡眠、麻木、恐惧等效果和状态的影响。' +
            '除此之外，圣堂战争弩车不受生物治疗效果、医学等影响，也不受流血、重伤等效果影响，健康值归零直接损毁。',
    },
    items: {},
    equips: {},
    relationship: {
    },
}

export {
    TemplarHollyGuard,
    TemplarCrossbowman,
    TemplarHolyblessingSister,
    TemplarMissionaryPastor,
    TemplarDemonbreakingPriest,
    TemplarBladeMaster,
    TemplarSilvermanedGriffon,
    TemplarUnicorn,
    TemplarKnight,
    TemplarWarBallista,
}