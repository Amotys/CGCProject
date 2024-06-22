import raceImages from '../../../../static/races/raceImages';

const getImageUrl = (race) => {
    switch (race) {
        case '人类':
            return [raceImages.human.male, raceImages.human.female]
        case '萨曼斯特':
            return [raceImages.semonster.male, raceImages.semonster.female]
        case '迦塔':
            return [raceImages.gata.male, raceImages.gata.female]
        case '佩菈':
            return [raceImages.pera.male, raceImages.pera.female]
        case '缇格利':
            return [raceImages.tigrey.male, raceImages.tigrey.female]
        case '哈那':
            return [raceImages.hana.male, raceImages.hana.female]
        case '托西卡':
            return [raceImages.toxica.male, raceImages.toxica.female]
        case '古拉根':
            return [raceImages.gragon.male, raceImages.gragon.female]
        case '赫帕利':
            return [raceImages.hepary.male, raceImages.hepary.female]
        case '梅杜萨':
            return [raceImages.medusa.male, raceImages.medusa.female]
        case '夏默曼':
            return [raceImages.sharmerman.male, raceImages.sharmerman.female]
        case '桑布菈':
            return [raceImages.sambra.male, raceImages.sambra.female]
        case '帕加罗':
            return [raceImages.pagallo.male, raceImages.pagallo.female]
        case '卡泽尔芙':
            return [raceImages.kazelf.male, raceImages.kazelf.female]
        case '迪摩尼奥':
            return [raceImages.daemonium.male, raceImages.daemonium.female]
        case '野生(未开智)':
            return [raceImages.wild.stupid]
        case '野生(半开智)':
            return [raceImages.wild.normal]
        case '野生(智慧生物)':
            return [raceImages.wild.wise]
        case '创造物':
            return [raceImages.creature]
        case '元素生命':
            return [raceImages.element]
        case '不死者':
            return [raceImages.necro.male, raceImages.necro.female]
        case '虚境实体':
            return [raceImages.cosmosentity]
        case '灵能体':
            return [raceImages.psyche]
        default:
            return []
    }
}

const getIntroInfo = (race) => {
    switch (race) {
        case '人类':
            return [
                '人类是多才多艺的生物，在各个领域展现出了惊人的适应能力。',
                '他们拥有多样的外貌特征，如肤色、眼睛和头发颜色等，形成了丰富的文化和社会结构。',
                '人类社会通常以城市和村落为单位组织，生活方式多样，涵盖了从农业和手工业到科技和艺术的各个领域。',
                '他们的交流和理解能力使得他们能够与其他种族和开展合作与交流，但他们的野心和欲望也使他们与其他种族的关系变得微妙。',
            ]
        case '萨曼斯特':
            return [
                '萨曼斯特是角型人型生物，体力较人类更强壮，但智慧普遍较人类更低，角坚硬且形状不一。',
                '战斗中能通过刺激血液沸腾增强力量，但会失去理智变得野蛮。',
                '社会原始，长时间生活在部落制度之下，大多数以狩猎沙漠野兽为生。',
                '与人类文化信仰差异大，信仰战斗和荣誉，视为展现力量和获得尊重的途径。',
            ]
        case '迦塔':
            return []
        case '佩菈':
            return []
        case '缇格利':
            return []
        case '哈那':
            return []
        case '托西卡':
            return []
        case '古拉根':
            return []
        case '赫帕利':
            return []
        case '梅杜萨':
            return []
        case '夏默曼':
            return []
        case '桑布菈':
            return []
        case '帕加罗':
            return []
        case '卡泽尔芙':
            return []
        case '迪摩尼奥':
            return []
        case '野生(未开智)':
            return []
        case '野生(半开智)':
            return []
        case '野生(智慧生物)':
            return []
        case '创造物':
            return []
        case '元素生命':
            return []
        case '不死者':
            return []
        case '虚境实体':
            return []
        case '灵能体':
            return []
        default:
            return []
    }
}

const getStatesInfo = (race, data) => {
    if (data['typePart'] == 'PC' || data['typePart'] == 'NPC') {
        switch (race) {
            case '人类':
                return [
                    [
                        '4800',
                        '80年/9月18天',
                        '0~2',
                        [0, 1],                      // 年龄类型，0=女性，1=男性，2=无性，3=双性
                        '300~1200',
                        '300~1200',
                        '300~',
                        '300~',
                        '300~',
                        '0~1000',
                        '300~',
                        '300~',
                    ],
                    [],
                ]
            case '萨曼斯特':
                return [
                    [
                        '4800',
                        '70年/8月12天',
                        '0~2',
                        [0, 1],
                        '400~',
                        '400~',
                        '300~',
                        '300~',
                        '200~800',
                        '0~800',
                        '200~',
                        '200~',
                    ],
                    [
                        [
                            '沸血：',
                            '萨曼斯特在每场战斗中仅一次，在保持战斗三个回合后，可以主动开启持续三个回合的沸血。沸血期间，攻击力和伤害值得到提升，但防御力下降。'
                        ]
                    ],
                ]
            case '迦塔':
                return []
            case '佩菈':
                return []
            case '缇格利':
                return []
            case '哈那':
                return []
            case '托西卡':
                return []
            case '古拉根':
                return []
            case '赫帕利':
                return []
            case '梅杜萨':
                return []
            case '夏默曼':
                return []
            case '桑布菈':
                return []
            case '帕加罗':
                return []
            case '卡泽尔芙':
                return []
            case '迪摩尼奥':
                return []
            case '野生(未开智)':
                return []
            case '野生(半开智)':
                return []
            case '野生(智慧生物)':
                return []
            case '创造物':
                return []
            case '元素生命':
                return []
            case '不死者':
                return []
            case '虚境实体':
                return []
            case '灵能体':
                return []
            default:
                return []
        }
    } else {
        return [
            [
                '99999',
                '自定义',
                '自定义',
                2,
                '0~',
                '0~',
                '0~',
                '0~',
                '0~',
                '0~',
                '0~',
                '0~',
            ],
            [],
        ]
    }
}

export { getImageUrl, getIntroInfo, getStatesInfo };