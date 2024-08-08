import React from "react"
import { createHero } from '../Functions'

import FortalezaArchdraonst from '../../../../images/monsters/fortaleza/heros/FortalezaArchdraonst.png'
import FortalezaArchdraonstIcon from '../../../../images/monsters/fortaleza/heros/FortalezaArchdraonstIcon.png'
import FortalezaSerenibela from '../../../../images/monsters/fortaleza/heros/FortalezaSerenibela.png'
import FortalezaSerenibelaIcon from '../../../../images/monsters/fortaleza/heros/FortalezaSerenibelaIcon.png'
import FortalezaTormentale from '../../../../images/monsters/fortaleza/heros/FortalezaTormentale.png'
import FortalezaTormentaleIcon from '../../../../images/monsters/fortaleza/heros/FortalezaTormentaleIcon.png'

const FortalezaHeros = {
    FortalezaArchdraonst:
        createHero(
            '阿克朵莱恩斯特', '昆吉斯塔龙牙先锋·猩红狂剑士',
            [1200, 1750, 2400, 3250], [150, 150, 150, 150], [15, 21, 28, 35], [2, 2, 3, 3],
            [100, 130, 160, 200], [100, 130, 160, 200], [210, 250, 295, 350],
            [
                ['近战武器', 1, 2, '物理'],
                ['远程冲击（需要赤龙化）', 1, 8, '火系魔法']
            ],
            [6, 6, 7, 8], [550, 650, 750, 850], [25, 35, 45, 60], [15, 18, 21, 25], '4（16）',
            {
                '杀戮斩击': '阿克朵莱恩斯特消耗25/45/65/90点魔法值，本回合下一次攻击宣言将额外造成80/145/210/290点伤害。',
                '死斗': '阿克朵莱恩斯特消耗35/48/65/90点魔法值，选择一个距离她不超过3/4/5/6格的目标，立刻进入【死斗】状态。' +
                    '【死斗】状态需要阿克朵莱恩斯特每回合都与该目标交手至少一次，否则【死斗】将在回合结束阶段解除；当该目标距离阿克朵莱恩斯特超过10/14/17/20格，【死斗】也立刻解除。' +
                    '处于【死斗】状态下的阿克朵莱恩斯特，获得乘法形式的的10%/15%/20%/25%伤害减免、无视任何减速和位移控制类技能并且基础移动力增加1/2/3/4格，' +
                    '同时对该目标造成的伤害增加10%/18%/26%/35%。',
                '浴血死神（被动）': '阿克朵莱恩斯特每损失12.5%/8%/4%/2%健康值，距离她不超过4/4/5/6格的本部族昆吉斯塔军团阵营的全部单位士气就会提升1点且经验获取倍率就会' +
                    '提升1%/1.5%/2%/3%，并且她也会提升1.5点伤害值。',
                '赤龙化': '阿克朵莱恩斯特在8回合内变身为一条永久飞行的赤龙，增加她100点攻击力、75点防御力、100点伤害值、6点移动力、65点健康值回复/每回合，' +
                    '体型增加到16格且攻击方式变为火系魔法远程攻击。第8回合的结束阶段，阿克朵莱恩斯特变回人形。一旦阿克朵莱恩斯特变身成功，该技能立刻进入冷却，冷却时间50回合。',
            },
            '',
            [FortalezaArchdraonst, FortalezaArchdraonstIcon],
        ),
    FortalezaSerenibela:
        createHero(
            '塞蕾妮贝菈', '纯白姬·白翼的黎明少女',
            [900, 1100, 1400, 1750], [150, 165, 180, 200], [15, 18, 21, 25], [3, 3, 4, 5],
            [100, 130, 160, 200], [100, 130, 160, 200], [180, 235, 290, 350],
            [
                ['远程箭矢', 3, 10, '物理'],
                ['近身格斗（需要白龙化）', 1, 2, '物理'],
            ],
            [8, 8, 9, 9], [925, 965, 1005, 1045], [25, 28, 31, 35], [15, 23, 31, 40], '1（9）',
            {
                '弹射箭': '塞蕾妮贝菈消耗125/135/145/160点魔法值，刷新她持续5回合的3/3/4/5层【弹射箭】状态，【弹射箭】层数归零时状态立刻移除。' +
                    '塞蕾妮贝菈处于【弹射箭】状态下时，攻击宣言会消耗1层【弹射箭】，从命中目标开始，箭矢将会逐一弹射到距离该目标不超过5格的最近目标上，' +
                    '箭矢最多弹射3/4/5/6次，并造成35/40/45/50点物理伤害。',
                '击退': '塞蕾妮贝菈消耗60/70/80/90点魔法值，立刻用龙翼将距离她不超过2格的一个体型不大于4格或体型不小于9格的单位分别击退3/4/6/8格或2/2/3/3格，' +
                    '并对其造成20/50/90/145点伤害。',
                '银白翼骨（被动）': '塞蕾妮贝菈的移动力增加1/2/4/6点，最大射程增加1/2/3/5点。',
                '白龙化': '塞蕾妮贝菈立刻解除【重伤】状态，并在6回合内变身为一条永久飞行的白龙，增加50点攻击力、50点防御力、50点伤害值、3点移动力、10点健康值回复/每回合、' +
                    '20点魔法值回复/每回合，体型增加到9格且且攻击方式变为物理近战攻击。白龙化期间，塞蕾妮贝菈免疫【重伤】状态，且不会倒下（最少健康值为1点）。' +
                    '第6回合的结束阶段，塞蕾妮贝菈变回人形，并立刻回复40%已损失的健康值和25%已损失的魔法值。一旦塞蕾妮贝菈变身成功，该技能立刻进入冷却，冷却时间45回合。',
            },
            '',
            [FortalezaSerenibela, FortalezaSerenibelaIcon],
        ),
    FortalezaTormentale:
        createHero(
            '托蒙塔尔', '焚煞龙王·伊格纳西奥的传奇',
            [975, 1325, 1700, 2300], [200, 230, 260, 300], [15, 16, 18, 20], [3, 4, 5, 6],
            [100, 130, 160, 200], [100, 130, 160, 200], [135, 185, 235, 300],
            [
                ['近身格斗', 1, 1, '物理和气系魔法'],
                ['近身格斗（需要黑龙化）', 1, 3, '物理和气系魔法'],
            ],
            [5, 5, 6, 6], [800, 860, 920, 980], [15, 16, 18, 20], [15, 16, 18, 20], '4（16）',
            {
                '慷慨的赏赐': '响应式主动技能。距离托蒙塔尔不超过4/5/6/8格的本部族单位击倒非本部族单位后，托蒙塔尔可以立刻消耗80/120/160/200点魔法值，' +
                    '使这个单位本次获得的经验值增加50%/80%/115%/150%。',
                '嗜血': '托蒙塔尔每次造成健康减值后，回复一定比例的健康值，其比例为15%/25%/37.5%/50%该伤害造成的健康减值。',
                '雷电拳': '托蒙塔尔的攻击宣言可以消耗10/13/16/20点魔法值，为目标刷新4回合的【雷电麻痹】状态，并使【雷电麻痹】的层数增加1个（最多10层）。' +
                    '处于【雷电麻痹】状态下的目标，士气值、暴击值分别下降（层数×2）点、（层数×1）点，并在其轮次结束后立刻对其造成（5/9/14/20×层数）点健康减值。' +
                    '当【雷电麻痹】状态在回合结束阶段解除时，立刻对原附着单位造成（30/39/48/60×层数）点健康减值。【雷电麻痹】造成的健康减值来源是托蒙塔尔。',
                '黑龙化': '托蒙塔尔在15回合内变身为一条永久飞行的黑龙，增加50点攻击力、50点防御力、50点伤害值、10点移动力、25点健康值回复/每回合，' +
                    '体型增加到16格且近战最大射程增加。黑龙化期间，托蒙塔尔不会成为魔法法术的目标且受到的魔法伤害下降80%，除此以外，他的嗜血的健康值转换比例以加法的形式增加15%。' +
                    '第15回合的结束阶段，托蒙塔尔变回人形。一旦托蒙塔尔变身成功，该技能立刻进入冷却，冷却时间80回合。',
            },
            '',
            [FortalezaTormentale, FortalezaTormentaleIcon],
        ),
}

export default FortalezaHeros