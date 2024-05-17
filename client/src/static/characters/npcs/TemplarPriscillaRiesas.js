import PriscillaUrl from '../../images/characters/TemplarPriscillaRiesas.png';
import PriscillaShotUrl from '../../images/characters/TemplarPriscillaRiesasShot.png';
import defaultSkillsPoint from '../../skills/DefaultSkillsPoint';

const TemplarPriscillaRiesas = {
    type: 'NPC',
    imageUrl: PriscillaUrl,
    iconUrl: PriscillaShotUrl,
    idName: 'templar_priscilla_riesas',
    name: '普莉茜菈',
    fullname: '普莉茜菈·里萨斯',
    shortDescription: '里萨斯家族的养女，圣堂二十二圣贤之一。',
    race: '混血（人类-古拉根）',
    gender: 0,
    age: 29,
    startYear: 1789,
    birthday: '1760-9-10',
    height: 166,
    weight: 73,
    preference: ['交朋友', '有善良和守序倾向的人', '智慧高于600的人'],
    aversion: ['有邪恶倾向的东西', '不肯接受教导的人'],
    personality: ['理性', '母性', '成熟'],
    occupation: ['二十二圣贤：隐士'],
    side: ['圣堂'],
    faith: {
        morality: 5,
        orderliness: 4,
        extroversion: 4,
        peacefulness: 4,
        equality: 4,
        idealism: 4
    },
    story: [`她诞生于佛塔里萨要塞，其父亲为古拉根，而母亲则为人类，这样的混血身份在崇尚纯正血统与力量至高的要塞中，却成为了她遭受欺凌与排斥的标签，就连要塞的法律也将歧视加诸于她。
    尽管她拥有非凡的聪颖和智慧，但这并未改变她在佛塔里萨的地位，年幼时，她便被要塞军抛弃在地表。`,

    `当她倒在雪地中失去意识之际，她最终见到的是里萨斯家族的家主，一位来自欧卡尼奥城的贵族人类。
    她被送往教会，以里萨斯家族养女的身份接受人类文化和价值观的教育，却得到了超乎她期望的爱与关怀。
    神父赐予她人类的名字——普莉茜菈，象征着善良、纯洁和虔诚。`,
    
    `在教会的庇护下，普莉茜菈顺利成长，正义与善良的品质深深地根植于她的内心。
    她的思想和行为与其他古拉根族人截然不同，她更接近于人类，同时拥有着超凡的同理心和同情心。
    教会中有许多她所珍爱的人，也有许多爱她的人，幸福的童年经历使她逐渐学会了接纳自己和爱护他人，这不仅塑造了她坚韧不拔的性格，也培育了她无私的灵魂。`,
    
    `在她十几岁时，她便已开始渐渐崭露头角，但深渊入侵的战争却打响了。
    在这场战争中，无数生灵丧生，圣堂的圣贤也尽数陨落，而普莉茜菈则一直履行着她作为修女的职责，不停地将人们从生死线上拉回。
    战争胜利后，里萨斯家族推荐她成为陨落的前圣贤“隐士”的继承者。
    普莉茜菈以她纯净的心灵和虔诚的信仰胜任了这个职位，正式加入了圣堂。
    作为圣堂的一员，她不仅仅是一名修女，更是一位导师和引路者，她的言行深深地触动着那些迷失和困惑的人们。`,
    
    `然而，普莉茜菈内心常受着煎熬。她时常思索着自己的身份和使命——她究竟是龙族还是人类？她的使命，又是否为她所寻求的正义之所在？`],
    level: 60,
    experience: 18300,
    size: [1, 4],
    property: {
        health: [1915, 0],
        magic: [240, 0],
        attack: [245, 0],
        defend: [200, 0],
        damage: [112, 0],
        movement: [5, 0],
        initiative: [550, 0],
        morale: [34, 0],
        critic: [11, 0],
    },
    status: {
        strength: [600, 0],
        constitution: [600, 0],
        agility: [550, 0],
        willpower: [600, 0],
        intelligence: [700, 0],
        power: [1000, 0],
        appearance: [1000, 0],
        luck: [600, 0],
        psychic: 0,
    },
    skills: {
        ...defaultSkillsPoint,
        normal: {
            ...defaultSkillsPoint.normal,
            observation: [600, 0],
            listening: [600, 0],
            firstAid: [2000, 0],
            medicalSkill: [2000, 0],
            psychologicalInterpretation: [800, 0],
            psychoanalysis: [1000, 0],
            persuasion: [1000, 0],
            languageLearning: [300, 500],
        },
        combat: {
            ...defaultSkillsPoint.combat,
            combatTheory: [400, 0],
            battleCry: [1000, 0],
        },
        magic: {
            ...defaultSkillsPoint.magic,
            magicTheory: [400, 0],
            rapidIncantation: [1000, 0],
            manaRegeneration: [1000, 0],
            manaPerception: [500, 0],
        },
        social: {
            ...defaultSkillsPoint.social,
            socialTheory: [400, 0],
            zoology: [500, 0],
            mysticalCulturalInterpretation: [800, 0],
        }

    },
    magics: [
        'TheEyeOfDarkNight'
    ],
    abilities: {},
    items: {},
    equips: {},
    relationship: {
    },
}

export default TemplarPriscillaRiesas;