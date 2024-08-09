import { createUnit } from '../Functions'
import FortalezaHardLabor from '../../../../images/monsters/fortaleza/FortalezaHardLabor.png'
import FortalezaHardLaborIcon from '../../../../images/monsters/fortaleza/icon/FortalezaHardLaborIcon.png'
import FortalezaRaptor from '../../../../images/monsters/fortaleza/FortalezaRaptor.png'
import FortalezaRaptorIcon from '../../../../images/monsters/fortaleza/icon/FortalezaRaptorIcon.png'
import FortalezaDestroyer from '../../../../images/monsters/fortaleza/FortalezaDestroyer.png'
import FortalezaDestroyerIcon from '../../../../images/monsters/fortaleza/icon/FortalezaDestroyerIcon.png'
import FortalezaShadowclaw from '../../../../images/monsters/fortaleza/FortalezaShadowclaw.png'
import FortalezaShadowclawIcon from '../../../../images/monsters/fortaleza/icon/FortalezaShadowclawIcon.png'
import FortalezaHammerPterosaur from '../../../../images/monsters/fortaleza/FortalezaHammerPterosaur.png'
import FortalezaHammerPterosaurIcon from '../../../../images/monsters/fortaleza/icon/FortalezaHammerPterosaurIcon.png'
import FortalezaLongtailedPterosaur from '../../../../images/monsters/fortaleza/FortalezaLongtailedPterosaur.png'
import FortalezaLongtailedPterosaurIcon from '../../../../images/monsters/fortaleza/icon/FortalezaLongtailedPterosaurIcon.png'
import FortalezaTortoiseShellDragon from '../../../../images/monsters/fortaleza/FortalezaTortoiseShellDragon.png'
import FortalezaTortoiseShellDragonIcon from '../../../../images/monsters/fortaleza/icon/FortalezaTortoiseShellDragonIcon.png'
import FortalezaBlackDragon from '../../../../images/monsters/fortaleza/FortalezaBlackDragon.png'
import FortalezaBlackDragonIcon from '../../../../images/monsters/fortaleza/icon/FortalezaBlackDragonIcon.png'
import FortalezaFrostDragon from '../../../../images/monsters/fortaleza/FortalezaFrostDragon.png'
import FortalezaFrostDragonIcon from '../../../../images/monsters/fortaleza/icon/FortalezaFrostDragonIcon.png'

const FortalezaUnits = {
    FortalezaHardLabor:
        createUnit(
            '蜥龙劳役', 1500, 0, 10, 0,
            50, 100, 50, [['近身格斗', 1, 1, '物理']],
            4, 110, 0, 0, 4,
            [0, 250, 0], [0, 3, 0], 5, 5,
            ['蜥穴议事厅/龙纹会堂/龙王殿'],
            {
                '资源采集者': '蜥龙劳役可以花费一整个回合采集木材/食纤/魔晶资源，采集速度分别为：4木材/每回合、20食纤/每回合、8魔晶（普通矿）/每回合，20魔晶（高纯矿）/每回合。',
                '快速采集': '蜥龙劳役采集资源时，若距离任意资源收集建筑不大于6格，则可以直接将采集到的资源传送回资源收集建筑。',
                '巢穴建造者': '蜥龙劳役可以建造昆吉斯塔军团阵营的建筑。同一时间，一个昆吉斯塔阵营的建筑只允许一个蜥龙劳役推进建设。' +
                    '蜥龙劳役建造建筑时会钻入地下，处于无敌状态。',
                '建筑修补': '蜥龙劳役可以消耗一个动作宣言，维修临近自身的非生命建筑单位最多60点健康值，该蜥龙劳役的控制者将支付对应的维修资源消耗。',
                '晋升者': '蜥龙劳役训练完成时为新兵阶级，采集资源可以获得经验值（木材×1+食纤×1+魔晶×2）。' +
                    '当蜥龙劳役的经验值不少于300/750时，蜥龙劳役将晋升为老兵阶级/精英阶级。',
                '老兵（需要晋升至老兵阶级）': '蜥龙劳役的资源采集速度提升为：5木材/每回合、22食纤/每回合、9魔晶（普通矿）/每回合，22魔晶（高纯矿）/每回合。',
                '精英（需要晋升至精英阶级）': '蜥龙劳役的资源采集速度提升为：6木材/每回合、25食纤/每回合、10魔晶（普通矿）/每回合，25魔晶（高纯矿）/每回合。',
                '劳动的智慧（需要在蜥穴议事厅/龙纹会堂/龙王殿中升级）': '蜥龙劳役额外获得100%的总经验。',
                '献祭文化（需要在龙纹会堂或龙王殿中升级）': '除蜥龙劳役以外的本部族单位可以消耗一个动作宣言将本部族的蜥龙劳役作为祭品享用，被享用的蜥龙劳役将会死亡，' +
                    '享用者立刻解除【重伤】状态，并将在三回合内，每个回合的结束阶段回复20%这只蜥龙劳役当前的健康值。',
            },
            '',
            [FortalezaHardLabor, FortalezaHardLaborIcon],
        ),
    FortalezaRaptor:
        createUnit(
            '迅猛龙', 2700, 0, 10, 0,
            100, 100, 180, [['近身格斗', 1, 2, '物理']],
            5, 160, 15, 15, 9,
            [0, 400, 0], [0, 4, 0], 7, 8,
            ['爬行龙巢'],
            {
                '晋升者': '迅猛龙训练完成时为新兵阶级，击败非本部族的单位可以获得该单位造价相关的经验值（木材×1+食纤×1+魔晶×2，1000/每个特殊角色）。' +
                    '当迅猛龙的经验值不少于1000/2500时，迅猛龙将晋升为老兵阶级/精英阶级。',
                '狂暴': '只能在回合开始阶段发动，这个迅猛龙将在本回合增加20点攻击力与20点伤害值，但会降低20点防御力。',
                '老兵（需要晋升至老兵阶级）': '迅猛龙增加10点攻击力与防御力。',
                '精英（需要晋升至精英阶级）': '迅猛龙增加10点攻击力与防御力（共20点）。',
                '裂地践踏（需要晋升至老兵阶级）': '迅猛龙消耗一个动作宣言，对邻近自身的所有单位造成100点减值。',
                '嗜血（需要晋升至精英阶级）': '迅猛龙每次造成健康减值后，回复15%造成减值的健康值。',
                '军团意志（需要在龙之圣殿中升级）': '迅猛龙的训练时间减少3回合（共4回合）。',
                '暴力传统（需要在龙之圣殿中升级）': '迅猛龙额外获得50%的总经验。',
            },
            '',
            [FortalezaRaptor, FortalezaRaptorIcon],
        ),
    FortalezaDestroyer:
        createUnit(
            '毁灭龙', 2100, 0, 10, 0,
            100, 100, 140, [['远程爆炸（可以对格子）', 3, 8, '火系魔法']],
            5, 145, 15, 15, 9,
            [0, 350, 125], [0, 6, 0], 10, 9,
            ['爬行龙巢', '烈焰巢穴'],
            {
                '晋升者': '毁灭龙训练完成时为新兵阶级，击败非本部族的单位可以获得该单位造价相关的经验值（木材×1+食纤×1+魔晶×2，1000/每个特殊角色）。' +
                    '当毁灭龙的经验值不少于1200/2800时，毁灭龙将晋升为老兵阶级/精英阶级。',
                '老兵（需要晋升至老兵阶级）': '毁灭龙增加10点攻击力与防御力。',
                '精英（需要晋升至精英阶级）': '毁灭龙增加2格最大射程（共10格）并减少1格最小射程（共2格）。',
                '火焰抛射（需要晋升至老兵阶级）': '毁灭龙消耗一个动作宣言，在距离自身不超过14格的任意位置（包括无视野格子）召唤延迟的抛射火焰。发动火焰抛射后会立刻出现征兆，' +
                    '抛射火焰会在下个回合的结束阶段命中召唤的格子，对其中的目标造成200点火系魔法伤害。',
                '炸裂火球（需要晋升至精英阶级）': '毁灭龙的远程冲击攻击和火焰抛射会造成3×3的范围伤害，非核心的区域内的单位将会受到50%的伤害。',
                '茹火饮焰（需要在烈焰巢穴中升级）': '训练毁灭龙的费用永久降低25食纤和25魔晶（共325食纤和100魔晶）。',
                '火花绽放（需要在烈焰巢穴中升级）': '毁灭龙对非水系或不拥有水附魔的非建筑单位造成火系伤害后，目标会刷新2回合的【毁灭火花】状态。' +
                    '处于【毁灭火花】状态下的目标，每回合结束阶段再次受到来源于这个毁灭龙的30点火系魔法伤害。' +
                    '若目标在3个回合内持续受到3次毁灭火花的伤害（包括被溅射），则立刻移除该目标的【毁灭火花】状态，并以该目标为核心，' +
                    '对3×3范围内的全部单位造成一次来源于这个毁灭龙的60点火系魔法伤害。',
                '军团意志（需要在龙之圣殿中升级）': '毁灭龙的训练时间减少4回合（共6回合）。',
                '暴力传统（需要在龙之圣殿中升级）': '毁灭龙额外获得50%的总经验。',
            },
            '',
            [FortalezaDestroyer, FortalezaDestroyerIcon],
        ),
    FortalezaShadowclaw:
        createUnit(
            '影爪龙', 1600, 200, 6, 2,
            100, 100, 130, [['近身格斗', 1, 2, '物理和暗系魔法']],
            5, 1205, 15, 15, 9,
            [0, 300, 300], [0, 8, 0], 11, 12,
            ['爬行龙巢', '暗影巢穴'],
            {
                '晋升者': '影爪龙训练完成时为新兵阶级，击败非本部族的单位可以获得该单位造价相关的经验值（木材×1+食纤×1+魔晶×2，1000/每个特殊角色）。' +
                    '当影爪龙的经验值不少于1500/3600时，影爪龙将晋升为老兵阶级/精英阶级。',
                '老兵（需要晋升至老兵阶级）': '影爪龙增加50点最大魔法值。',
                '精英（需要晋升至精英阶级）': '影爪龙每回合增加2点魔法值回复。',
                '声纳探测': '只能在回合开始阶段使用，影爪龙消耗50点魔法值和一个动作宣言，在本回合感知距离自身不超过20格的任何单位移动（包括【潜行】状态下的单位）。',
                '幻影爪（需要晋升至老兵阶级）': '影爪龙消耗75点魔法值和一个动作宣言，使一个昆吉斯塔军团阵营的单位在本回合内增加2点近战最大射程，并且使其造成物理与暗系魔法的混合伤害。',
                '破胆影袭（需要晋升至老兵阶级）': '影爪龙消耗125点魔法值和一个动作宣言，使一个距离自身不超过8格的目标刷新3回合的【破胆】状态。处于【破胆】状态下的单位，士气减少100点。',
                '影傀儡附身（需要晋升至精英阶级）': '影爪龙消耗250点魔法值和一个动作宣言，本回合内获得一个距离自身不超过6格的非特殊角色单位的控制权。影傀儡附身属于魔法效果。',
                '幻影穿梭（需要在暗影巢穴中升级）': '影爪龙增加2点移动力，并且在移动中无视单位碰撞体积。',
                '黑暗魔力相性（需要在暗影巢穴中升级）': '影爪龙在夜晚的每个回合额外回复4点魔法值。',
                '军团意志（需要在龙之圣殿中升级）': '影爪龙的训练时间减少5回合（共6回合）。',
                '暴力传统（需要在龙之圣殿中升级）': '影爪龙额外获得50%的总经验。',
            },
            '',
            [FortalezaShadowclaw, FortalezaShadowclawIcon],
        ),
    FortalezaHammerPterosaur:
        createUnit(
            '铁锤翼龙', 1600, 0, 6, 0,
            100, 100, 150, [['近身格斗（对空）', 1, 2, '物理'], ['近身格斗（对地）', 1, 1, '80%物理']],
            12, 1195, 15, 15, 9,
            [0, 400, 50], [0, 5, 0], 11, 9,
            ['飞行龙巢'],
            {
                '永久飞行单位': '铁锤翼龙是飞行单位，且无法自主落地。',
                '晋升者': '铁锤翼龙训练完成时为新兵阶级，击败非本部族的单位可以获得该单位造价相关的经验值（木材×1+食纤×1+魔晶×2，1000/每个特殊角色）。' +
                    '当铁锤翼龙的经验值不少于1100/2650时，铁锤翼龙将晋升为老兵阶级/精英阶级。',
                '老兵（需要晋升至老兵阶级）': '铁锤翼龙增加10点攻击力与防御力。',
                '精英（需要晋升至精英阶级）': '铁锤翼龙增加10点攻击力与防御力（共20点）。',
                '易怒': '回合开始阶段，铁锤翼龙会根据水平距离自身不超过2格内的其他生物单位数量计数，提升（计数×4）点攻击力并降低（计数×2）点防御力，该加成会在回合结束阶段移除。',
                '铁锤重击（需要晋升至老兵阶级）': '只能在回合开始阶段使用，本回合内，铁锤翼龙地对地的近身格斗与铁锤俯冲将会造成120%物理伤害。技能使用后立刻进入冷却，冷却时间4回合。',
                '铁锤狂暴（需要晋升至精英阶级）': '只能在回合开始阶段使用，铁锤翼龙立刻流失20%当前健康值，本回合内，这个铁锤翼龙造成的全部伤害增加40%。',
                '铁锤俯冲（需要在螺旋巢穴中升级）': '铁锤翼龙消耗一个动作宣言，对一个水平距离自己不超过3格的地面格子进行俯冲，并对其中的单位造成80%物理伤害。' +
                    '若命中【潜行】状态下的单位，则会立刻解除该单位的【潜行】状态。',
            },
            '',
            [FortalezaHammerPterosaur, FortalezaHammerPterosaurIcon],
        ),
    FortalezaLongtailedPterosaur:
        createUnit(
            '长尾翼龙', 1800, 200, 5, 2,
            100, 100, 120, [['远程冲击', 1, 3, '气系魔法']],
            13, 510, 10, 10, 4,
            [0, 300, 200], [0, 7, 0], 14, 10,
            ['飞行龙巢', '螺旋巢穴'],
            {
                '永久飞行单位': '长尾翼龙是飞行单位，且无法自主落地。',
                '晋升者': '长尾翼龙训练完成时为新兵阶级，击败非本部族的单位可以获得该单位造价相关的经验值（木材×1+食纤×1+魔晶×2，1000/每个特殊角色）。' +
                    '当长尾翼龙的经验值不少于1300/3000时，长尾翼龙将晋升为老兵阶级/精英阶级。',
                '老兵（需要晋升至老兵阶级）': '长尾翼龙增加50点最大魔法值。',
                '精英（需要晋升至精英阶级）': '长尾翼龙每回合增加2点魔法值回复。',
                '拖拽': '长尾翼龙消耗50点魔法值和一个动作宣言，拖拽一个水平距离自身不超过4格的地面单位或者一个水平距离自身不超过10格的空中单位，' +
                    '并根据其体型4-/9/16+，使其移动至自身周围/向着自身方向移动4格/向着自身方向移动2格。',
                '治疗波（需要晋升至老兵阶级）': '长尾翼龙消耗125点魔法值和一个动作宣言，对一个水平距离自身不超过6格的除自身以外的生物单位施放治疗波。' +
                    '治疗波将会弹射至距离当前目标不超过4格的最近一个健康受损的另一个生物单位上，最多治疗5次且健康回复量依次减半。治疗波对第一个单位的健康回复量为240点。',
                '魔力聚集（需要晋升至精英阶级）': '长尾翼龙消耗一个动作宣言，为一个水平临近自己的其他目标回复3点魔法值。',
                '回路共振（需要在螺旋巢穴中升级）': '长尾翼龙的治疗波和魔力聚集可以对自身施放。',
                '惯性甩尾（需要在螺旋巢穴中升级）': '长尾翼龙的地面拖拽范围增加2格，空中拖拽范围增加3格。',
            },
            '',
            [FortalezaLongtailedPterosaur, FortalezaLongtailedPterosaurIcon],
        ),
    FortalezaTortoiseShellDragon:
        createUnit(
            '龟甲巨龙', 4000, 0, 25, 0,
            120, 130, 220, [['近身格斗', 1, 1, '物理'], ['近身冲击（对建筑和器械）', 1, 1, '400%物理']],
            3, 125, 15, 15, 16,
            [0, 800, 500], [0, 15, 0], 45, 20,
            ['巨龙巢'],
            {
                '晋升者': '龟甲巨龙训练完成时为新兵阶级，击败非本部族的单位可以获得该单位造价相关的经验值（木材×1+食纤×1+魔晶×2，1000/每个特殊角色）。' +
                    '当龟甲巨龙的经验值不少于2500/6000时，龟甲巨龙将晋升为老兵阶级/精英阶级。',
                '老兵（需要晋升至老兵阶级）': '龟甲巨龙增加20点攻击力与防御力。',
                '精英（需要晋升至精英阶级）': '龟甲巨龙的健康值上限增加500点，并且对建筑和器械单位的总伤害增加50%。',
                '巨龙吞噬（需要晋升至老兵阶级）': '龟甲巨龙消耗一个动作宣言，立刻吞下一个临近自身的体型不超过9格的生物单位。被龟甲巨龙吞噬的单位无法行动，' +
                    '并且每回合结束阶段流失150健康值。龟甲巨龙同一时间只能消化一个目标，并且在死亡时，被吞噬的目标会被放出。',
                '滚动冲击（需要晋升至精英阶级）': '龟甲巨龙消耗一个动作宣言，以滚动的形式对距离自身不超过8格的4×4范围内的区域进行冲撞，造成275点物理伤害并尝试击退范围内的目标最多3格。' +
                    '技能使用后将进入冷却，冷却时间8回合。',
                '尖刺外壳（需要在巨龙巢中升级）': '龟甲巨龙受到的远程伤害降低20%；龟甲巨龙受到近战伤害时，将会反弹20%同类型的伤害给伤害来源。',
            },
            '',
            [FortalezaTortoiseShellDragon, FortalezaTortoiseShellDragonIcon],
        ),
    FortalezaBlackDragon:
        createUnit(
            '黑龙', 5000, 200, 25, 2,
            150, 150, 250, [['近身格斗（地对地）', 1, 3, '物理'], ['近身格斗（空对空）', 1, 3, '物理'], ['远程爆炸（对地）', 4, 10, '50%暗系魔法']],
            16, 865, 25, 25, 16,
            [0, 1000, 800], [0, 15, 2], 80, 30,
            ['巨龙巢', '黑龙巢穴'],
            {
                '飞行单位': '黑龙可以飞行，可以消耗一个移动宣言和10点移动力降落至地面或飞跃至空中。',
                '巨型单位': '无论黑龙是否处于飞行状态，黑龙无法被栅栏和围墙等建筑遮挡，且会被距离不超过自身50格的所有单位捕捉到视野。当黑龙位于地面时，对空攻击仍然可以伤害到黑龙。',
                '晋升者': '黑龙训练完成时为新兵阶级，击败非本部族的单位可以获得该单位造价相关的经验值（木材×1+食纤×1+魔晶×2，1000/每个特殊角色）。' +
                    '当黑龙的经验值不少于3500/8000时，黑龙将晋升为老兵阶级/精英阶级。',
                '老兵（需要晋升至老兵阶级）': '黑龙增加25点攻击力与防御力。',
                '精英（需要晋升至精英阶级）': '黑龙增加25点攻击力与防御力（共50点）。',
                '魔爆（需要晋升至老兵阶级）': '黑龙消耗200点魔法值和一个动作宣言，立刻对一个距离自身不超过12格的目标造成850点暗系伤害。',
                '毁灭龙息（需要晋升至精英阶级）': '黑龙位于地面时，立刻消耗150点魔法值和一个动作宣言，并获得1层【龙息蓄力】。在【龙息蓄力】状态下的黑龙无法回复魔法值、无法被打断，' +
                    '且每个轮次开始时都要选择继续蓄力或进行吐息。若继续蓄力，黑龙获得1层【龙息蓄力】并跳过该回合，最多叠加到10层。' +
                    '若进行吐息，则黑龙会消耗一个动作宣言会对身前90°的扇形区域的每个格子造成一次暗系魔法伤害。' +
                    '吐息的初始范围为身前两排（第一排3格+第二排5格），每有1层【龙息蓄力】，吐息的范围增加一排。吐息的初始伤害为150点暗系魔法伤害，每有1层【龙息蓄力】，吐息的伤害增加60点。' +
                    '吐息结束后，清空身上的【龙息蓄力】状态。毁灭龙息对同一目标造成的伤害上限为3000点。',
                '暴食（需要在黑龙巢穴中升级）': '黑龙可以彻底吞噬一个自己部族的魔法单位，' +
                    '获得该单位造价相关的经验值（木材×0.5+食纤×0.5+魔晶×1，可以与献祭文化科技叠加）并回复该单位剩余的魔法值。',
                '御空吐息（需要在黑龙巢穴中升级）': '黑龙可以在飞行状态下施放毁灭龙息。',
                '魔法免疫（需要在黑龙巢穴中升级）': '黑龙永远不会成为魔法法术的目标，并且受到的魔法伤害下降50%。',
            },
            '',
            [FortalezaBlackDragon, FortalezaBlackDragonIcon],
        ),
    FortalezaFrostDragon:
        createUnit(
            '霜龙', 4800, 200, 25, 2,
            150, 150, 150, [['近身爆炸（可以对格子）', 1, 3, '水系魔法']],
            14, 795, 15, 15, 16,
            [0, 1000, 1000], [0, 15, 3], 90, 30,
            ['巨龙巢', '霜龙巢穴'],
            {
                '飞行单位': '霜龙可以飞行，可以消耗一个移动宣言和10点移动力降落至地面或飞跃至空中。',
                '巨型单位': '无论霜龙是否处于飞行状态，霜龙无法被栅栏和围墙等建筑遮挡，且会被距离不超过自身50格的所有单位捕捉到视野。当霜龙位于地面时，对空攻击仍然可以伤害到霜龙。',
                '晋升者': '霜龙训练完成时为新兵阶级，击败非本部族的单位可以获得该单位造价相关的经验值（木材×1+食纤×1+魔晶×2，1000/每个特殊角色）。' +
                    '当霜龙的经验值不少于3500/8000时，霜龙将晋升为老兵阶级/精英阶级。',
                '老兵（需要晋升至老兵阶级）': '霜龙增加100点最大魔法值。',
                '精英（需要晋升至精英阶级）': '霜龙每回合增加4点魔法值回复。',
                '魔力湮灭': '霜龙消耗150点魔法值和一个动作宣言，进入无法打断的蓄力状态，立刻跳过本回合的轮次并在之后跳过下个回合的轮次。下个回合结束阶段，霜龙将会施展魔力湮灭吐息，' +
                    '使身前90°的四排（第一排3格+第二排5格+第一排7格+第二排9格）覆盖区域内的所有单位流失150点魔法值。',
                '寒冰环（需要晋升至老兵阶级）': '霜龙消耗125点魔法值和一个动作宣言，对一个距离自身不超过10格的目标施放。' +
                    '寒冰环会对距离被施放目标不超过2格的所有单位造成300点水系魔法伤害，被施放的目标不会受到寒冰环的伤害。',
                '暴风雪（需要晋升至精英阶级）': '霜龙消耗200点魔法值和一个动作宣言，在距离自身不超过12格的6×6范围内召唤延时的暴风雪。此举会立刻给予征兆，并在下回合开始阶段，' +
                    '暴风雪将会被召唤至该区域内，召唤共持续6个回合。处于暴风雪区域内的单位，移动时将会无条件视为困难地形，并且单位每移动1格就会流失25健康值。回合结束阶段，' +
                    '仍处于暴风雪覆盖区域内的单位将会受到来源于霜龙的200点水系魔法伤害。',
                '魔力汲取（需要在霜龙巢穴中升级）': '霜龙消耗一个动作宣言，偷取距离自身不超过8格的任意单位上的25点魔法值。',
                '魔力回流（需要在霜龙巢穴中升级）': '霜龙的所有魔法消耗降低25点。',
                '急冻气流（需要在霜龙巢穴中升级）': '霜龙对建筑造成伤害后，将会刷新其2回合【冰冻】状态。处于冰冻状态下的建筑，无法推进生产和升级。',
            },
            '',
            [FortalezaFrostDragon, FortalezaFrostDragonIcon],
        ),


}

export default FortalezaUnits