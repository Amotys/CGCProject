import { createBuilding } from '../Functions'
import InariHuntingLodge from '../../../../images/monsters/inari/buildings/InariHuntingLodge.png'
import InariForestMarket from '../../../../images/monsters/inari/buildings/InariForestMarket.png'
import InariForestSettlement from '../../../../images/monsters/inari/buildings/InariForestSettlement.png'
import InariGreenFortress from '../../../../images/monsters/inari/buildings/InariGreenFortress.png'
import InariPlentyAltar from '../../../../images/monsters/inari/buildings/InariPlentyAltar.png'
import InariFruitTree from '../../../../images/monsters/inari/buildings/InariFruitTree.png'
import InariGardenOfBeast from '../../../../images/monsters/inari/buildings/InariGardenOfBeast.png'
import InariStoneOfPlenty from '../../../../images/monsters/inari/buildings/InariStoneOfPlenty.png'
import InariSafariCamp from '../../../../images/monsters/inari/buildings/InariSafariCamp.png'
import InariGreenstoneTower from '../../../../images/monsters/inari/buildings/InariGreenstoneTower.png'
import InariVerdantWatchtower from '../../../../images/monsters/inari/buildings/InariVerdantWatchtower.png'
import InariBlessingFountain from '../../../../images/monsters/inari/buildings/InariBlessingFountain.png'
import InariNaturalAltar from '../../../../images/monsters/inari/buildings/InariNaturalAltar.png'
import InariRangerForest from '../../../../images/monsters/inari/buildings/InariRangerForest.png'
import InariTempleOfStorm from '../../../../images/monsters/inari/buildings/InariTempleOfStorm.png'

const InariBuildings = {
    InariHuntingLodge:
        createBuilding(
            '狩猎小屋', 2500, 0, 0, 0,
            0, 200, 0, [], 16,
            [275, 0, 0], [1, 0, 0, 20], 28,
            [0, 5], [],
            {
                '大本营建筑': '该建筑是伊纳利三足联盟的大本营建筑。',
                '资源收集建筑': '该建筑是资源收集建筑。',
                '精简训练（需要在绿荫要塞中升级）': '该建筑是短弓刺客、猎狮矛手的生产建筑。',
            },
            {
                '升级成林间集市': [225, 0, 0, 22, [],
                    '将这个狩猎小屋升级成林间集市，解锁更多的生产和升级。'
                ],
            },
            '',
            [InariHuntingLodge, null],
        ),
    InariForestMarket:
        createBuilding(
            '林间集市', 3000, 0, 0, 0,
            0, 200, 0, [], 16,
            [500, 0, 0], [3, 0, 0, 40], 50,
            [0, 12], [],
            {
                '升级而来的建筑': '该建筑无法直接被建造，而是应该通过其他建筑升级得到。',
                '大本营建筑': '该建筑是伊纳利三足联盟的大本营建筑。',
                '资源收集建筑': '该建筑是资源收集建筑。',
                '生产建筑': '该建筑是稻荷猎人、稻荷工匠的生产建筑。',
                '精简训练（需要在绿荫要塞中升级）': '该建筑是短弓刺客、猎狮矛手的生产建筑。',
                '战争武装': '我方所有稻荷猎人可以在任意位置消耗60食纤、15魔晶、2回合时间，升级成短弓刺客；我方所有稻荷工匠可以在任意位置消耗60食纤、2回合时间，升级成猎狮矛手。',
                '卸甲归田': '我方所有短弓刺客可以在任意位置消耗2回合时间，降级成稻荷猎人，若降级位置与资源收集建筑相邻，则降级完成后返还40食纤、15魔晶；' +
                    '我方所有猎狮矛手可以在任意位置消耗2回合时间，降级成稻荷工匠，若降级位置与资源收集建筑相邻，则降级完成后返还40食纤。',
            },
            {
                '升级成森林聚居地': [300, 0, 50, 32, ['丰饶祭坛', '兽灵之园'],
                    '将这个林间集市升级成森林聚居地，解锁更多的生产和升级。'
                ],
                '反射扳机': [150, 0, 100, 18, [],
                    '短弓刺客的远程箭矢攻击最小射程降低1格（变为1格），当短弓刺客以1格射程进行远程箭矢攻击时，造成的伤害提升20%。'
                ],
                '加长猎矛': [125, 0, 40, 10, [],
                    '猎狮矛手的近战武器攻击最大射程增加1格（变为2格）。'
                ],
            },
            '',
            [InariForestMarket, null],
        ),
    InariForestSettlement:
        createBuilding(
            '森林聚居地', 4000, 0, 0, 0,
            0, 200, 0, [], 16,
            [800, 0, 50], [16, 0, 1, 160], 82,
            [0, 20], [],
            {
                '升级而来的建筑': '该建筑无法直接被建造，而是应该通过其他建筑升级得到。',
                '大本营建筑': '该建筑是伊纳利三足联盟的大本营建筑。',
                '资源收集建筑': '该建筑是资源收集建筑。',
                '生产建筑': '该建筑是稻荷猎人、稻荷工匠的生产建筑。',
                '精简训练（需要在绿荫要塞中升级）': '该建筑是短弓刺客、猎狮矛手的生产建筑。',
                '战争武装': '我方所有稻荷猎人可以在任意位置消耗60食纤、15魔晶、2回合时间，升级成短弓刺客；我方所有稻荷工匠可以在任意位置消耗60食纤、2回合时间，升级成猎狮矛手。',
                '卸甲归田': '我方所有短弓刺客可以在任意位置消耗2回合时间，降级成稻荷猎人，若降级位置与资源收集建筑相邻，则降级完成后返还40食纤、15魔晶；' +
                    '我方所有猎狮矛手可以在任意位置消耗2回合时间，降级成稻荷工匠，若降级位置与资源收集建筑相邻，则降级完成后返还40食纤。',
            },
            {
                '升级成绿荫要塞': [500, 0, 150, 48, ['游猎营地/翠石高塔', '森灵石碑'],
                    '将这个森林聚居地升级成绿荫要塞，解锁更多的生产和升级。'
                ],
                '反射扳机': [150, 0, 100, 18, [],
                    '短弓刺客的远程箭矢攻击最小射程降低1格（变为1格），当短弓刺客以1格射程进行远程箭矢攻击时，造成的伤害提升20%。'
                ],
                '加长猎矛': [125, 0, 40, 10, [],
                    '猎狮矛手的近战武器攻击最大射程增加1格（变为2格）。'
                ],
                '快速改装': [150, 0, 50, 13, [],
                    '使稻荷猎人和稻荷工匠能够瞬间完成武装和卸甲，不再需要额外的回合数。'
                ],
                '回收网': [200, 0, 100, 15, [],
                    '短弓刺客和猎狮矛手的卸甲返还资源不再需要与资源收集建筑相邻，而是在其周围10格或以内即可。'
                ],
                '良种选育': [150, 150, 0, 20, [],
                    '每个果树林额外提供2个人口，并且每次产出时额外生产1食纤。'
                ],
                '骑乘训练': [100, 200, 200, 27, [],
                    '短弓刺客和猎狮矛手可以骑乘林狼和猎鹰。如果短弓刺客、猎狮矛手骑乘的是迅捷弓骑兵/浸毒标枪骑兵/骁勇轻骑兵，短弓刺客、猎狮矛手的攻击力与防御力上升10点。'
                ],
            },
            '',
            [InariForestSettlement, null],
        ),
    InariGreenFortress:
        createBuilding(
            '绿荫要塞', 5000, 0, 0, 0,
            0, 200, 0, [], 16,
            [1300, 0, 200], [6, 0, 1, 50], 130,
            [0, 30], [],
            {
                '升级而来的建筑': '该建筑无法直接被建造，而是应该通过其他建筑升级得到。',
                '大本营建筑': '该建筑是伊纳利三足联盟的大本营建筑。',
                '资源收集建筑': '该建筑是资源收集建筑。',
                '生产建筑': '该建筑是稻荷猎人、稻荷工匠的生产建筑。',
                '精简训练（需要在绿荫要塞中升级）': '该建筑是短弓刺客、猎狮矛手的生产建筑。',
                '战争武装': '我方所有稻荷猎人可以在任意位置消耗60食纤、15魔晶、2回合时间，升级成短弓刺客；我方所有稻荷工匠可以在任意位置消耗60食纤、2回合时间，升级成猎狮矛手。',
                '卸甲归田': '我方所有短弓刺客可以在任意位置消耗2回合时间，降级成稻荷猎人，若降级位置与资源收集建筑相邻，则降级完成后返还40食纤、15魔晶；' +
                    '我方所有猎狮矛手可以在任意位置消耗2回合时间，降级成稻荷工匠，若降级位置与资源收集建筑相邻，则降级完成后返还40食纤。',
            },
            {
                '反射扳机': [150, 0, 100, 18, [],
                    '短弓刺客的远程箭矢攻击最小射程降低1格（变为1格），当短弓刺客以1格射程进行远程箭矢攻击时，造成的伤害提升20%。'
                ],
                '加长猎矛': [125, 0, 40, 10, [],
                    '猎狮矛手的近战武器攻击最大射程增加1格（变为2格）。'
                ],
                '快速改装': [150, 0, 50, 13, [],
                    '使稻荷猎人和稻荷工匠能够瞬间完成武装和卸甲，不再需要额外的回合数。'
                ],
                '回收网': [200, 0, 100, 15, [],
                    '短弓刺客和猎狮矛手的卸甲返还资源不再需要与资源收集建筑相邻，而是在其周围10格或以内即可。'
                ],
                '良种选育': [150, 150, 0, 20, [],
                    '每个果树林额外提供2个人口，并且每次产出时额外生产1食纤。'
                ],
                '骑乘训练': [100, 200, 200, 27, [],
                    '短弓刺客和猎狮矛手可以骑乘林狼和猎鹰。如果短弓刺客、猎狮矛手骑乘的是迅捷弓骑兵/浸毒标枪骑兵/骁勇轻骑兵，短弓刺客、猎狮矛手的攻击力与防御力上升10点。'
                ],
                '精简训练': [0, 250, 60, 20, [],
                    '资源收集建筑、兽灵之园、游猎营地、翠石高塔可以花费2回合直接训练短弓刺客和猎狮矛手，这样的训练会降低15食纤的总费用。'
                ],
                '游击战术': [120, 280, 250, 33, ['骑乘训练'],
                    '所有骑乘单位有1D4=1的几率闪避远程箭矢攻击；所有被骑乘单位的移动力增加2格、先攻值增加225点。'
                ],
            },
            '',
            [InariGreenFortress, null],
        ),
    InariPlentyAltar:
        createBuilding(
            '丰饶祭坛', 1600, 0, 0, 0,
            0, 200, 0, [], 4,
            [150, 0, 0], [1, 0, 0, 20], 20,
            [0, 0], ['林间集市/森林聚居地/绿荫要塞'],
            {
                '英雄祭坛': '当丰饶祭坛存在时，允许从三名伊纳利三足联盟阵营特殊角色中选择召唤一位，领导军队和协助战斗。一个部族只能从所有祭坛中召唤仅一名特殊角色。',
            },
            {
                '稻荷英雄降临': [0, 0, 0, 20, ['当前部族没有召唤任何特殊角色'],
                    '立刻在任意一个丰饶祭坛周围召唤一名伊纳利三足联盟阵营的特殊角色。'
                ],
                '稻荷初级天眷': [0, 200, 100, 25, ['稻荷英雄降临', '森林聚居地/绿荫要塞'],
                    '伊纳利三足联盟的特殊角色将会解锁第二个技能，并且获得一次强化技能和角色基础属性的权力。技能的解锁和强化不需要任何宣言。'
                ],
                '稻荷中级天眷': [0, 400, 200, 30, ['稻荷初级天眷', '绿荫要塞'],
                    '伊纳利三足联盟的特殊角色将会解锁第三个技能，并且获得一次强化技能和角色基础属性的权力。技能的解锁和强化不需要任何宣言。'
                ],
                '稻荷终级天眷': [0, 800, 400, 40, ['稻荷中级天眷'],
                    '伊纳利三足联盟的特殊角色将会解锁终极技能，并且获得一次强化非终极技能和角色基础属性的权力。技能的解锁和强化不需要任何宣言。'
                ],
                '救赎天眷': [0, '200+已强化次数×100', '100+已强化次数×50', '14回合+已强化次数×2', ['特殊角色已经倒下'],
                    '使已经倒下的角色健康值、魔法值重置到50%最大值，并在任意一个丰饶祭坛周围召唤此角色。' +
                    '角色的技能组、强化、经验值全部得到保留，但持有物品会被清空。救赎天眷若满足需求则可以重复升级。',
                ],
            },
            '',
            [InariPlentyAltar, null],
        ),
    InariFruitTree:
        createBuilding(
            '果树林', 800, 0, 0, 0,
            0, 150, 0, [], 4,
            [120, 0, 0], [1, 0, 0, 20], 9,
            [0, 7], ['林间集市/森林聚居地/绿荫要塞'],
            {
                '收获': '每五个回合，果树林就会进行一次产出，生产2食纤。',
                '良种选育（需要在森林聚居地或绿荫要塞中升级）': '果树林额外提供2个人口，并且每次产出时额外生产1食纤。',
            },
            {},
            '',
            [InariFruitTree, null],
        ),
    InariGardenOfBeast:
        createBuilding(
            '兽灵之园', 2000, 0, 0, 0,
            0, 200, 0, [], 9,
            [200, 0, 0], [1, 0, 0, 20], 10,
            [0, 0], ['林间集市/森林聚居地/绿荫要塞'],
            {
                '生产建筑': '该建筑是林狼、猎鹰的生产建筑。',
                '精简训练（需要在绿荫要塞中升级）': '该建筑是短弓刺客、猎狮矛手的生产建筑。',
            },
            {
                '充足营养': [0, 300, 25, 12, ['森林聚居地/绿荫要塞'],
                    '林狼和猎鹰的健康值上限增加150点。'
                ],
            },
            '',
            [InariGardenOfBeast, null],
        ),
    InariStoneOfPlenty:
        createBuilding(
            '森灵石碑', 1500, 0, 0, 0,
            0, 200, 0, [], 4,
            [195, 0, 0], [1, 0, 0, 15], 21,
            [0, 0], ['兽灵之园'],
            {},
            {
                '初级灵活骑术': [100, 200, 160, 15, [],
                    '短弓刺客、猎狮矛手在骑乘状态下，先攻值增加100点。'
                ],
                '中级灵活骑术': [150, 225, 200, 23, ['初级灵活骑术', '森林聚居地/绿荫要塞'],
                    '短弓刺客、猎狮矛手在骑乘状态下，先攻值增加100点（共增加200点）。'
                ],
                '高级灵活骑术': [200, 250, 240, 30, ['中级灵活骑术', '绿荫要塞'],
                    '短弓刺客、猎狮矛手在骑乘状态下，先攻值增加100点（共增加300点）。'
                ],
                '初级稻荷箭术': [125, 150, 175, 22, [],
                    '短弓刺客、迅捷弓骑兵、浸毒标枪骑兵的攻击力增加11点。'
                ],
                '中级稻荷箭术': [150, 200, 225, 25, ['初级稻荷箭术', '森林聚居地/绿荫要塞'],
                    '短弓刺客、迅捷弓骑兵、浸毒标枪骑兵的攻击力增加12点（共增加23点）。'
                ],
                '高级稻荷箭术': [175, 250, 275, 28, ['中级稻荷箭术', '绿荫要塞'],
                    '短弓刺客、迅捷弓骑兵、浸毒标枪骑兵的攻击力增加12点（共增加35点）。'
                ],
                '初级马铠': [175, 125, 200, 23, [],
                    '林狼、迅捷弓骑兵、浸毒标枪骑兵、骁勇轻骑兵的防御力增加11点。'
                ],
                '中级马铠': [175, 175, 250, 26, ['初级马铠', '森林聚居地/绿荫要塞'],
                    '林狼、迅捷弓骑兵、浸毒标枪骑兵、骁勇轻骑兵的防御力增加12点（共增加23点）。'
                ],
                '高级马铠': [175, 225, 300, 30, ['中级马铠', '绿荫要塞'],
                    '林狼、迅捷弓骑兵、浸毒标枪骑兵、骁勇轻骑兵的防御力增加12点（共增加35点）。'
                ],
                '隐伏战术': [50, 150, 95, 13, [],
                    '短弓刺客和猎狮矛手在没有进行和遭受任何宣言两回合后，在第三个回合开始阶段会进入【潜行】状态。'
                ],
                '伺机而动': [75, 175, 160, 18, ['隐伏战术', '森林聚居地/绿荫要塞'],
                    '若【潜行】状态下的短弓刺客和猎狮矛手的移动宣言只移动了1格，则【潜行】状态不会失效。'
                ],
            },
            '',
            [InariStoneOfPlenty, null],
        ),
    InariSafariCamp:
        createBuilding(
            '游猎营地', 2000, 0, 0, 0,
            0, 200, 0, [], 9,
            [160, 0, 30], [8, 0, 1, 200], 20,
            [0, 0], ['兽灵之园', '森林聚居地/绿荫要塞'],
            {
                '生产建筑': '该建筑是迅捷弓骑兵、浸毒标枪骑兵的生产建筑。',
                '高级生产建筑（需要拥有游骑兵林场建筑）': '该建筑是骁勇轻骑兵的生产建筑。',
                '精简训练（需要在绿荫要塞中升级）': '该建筑是短弓刺客、猎狮矛手的生产建筑。',
            },
            {
                '硬质弓弦': [275, 0, 125, 21, [],
                    '迅捷弓骑兵的最大射程增加3格（共10格）。'
                ],
                '不稳定花粉': [125, 125, 160, 19, [],
                    '浸毒标枪骑兵的毒粉陷阱激活时，影响范围增加2格。'
                ],
                '灵巧身姿': [100, 200, 150, 28, ['绿荫要塞'],
                    '迅捷弓骑兵无视区域封锁。'
                ],
                '投掷标枪': [200, 200, 225, 35, ['绿荫要塞'],
                    '浸毒标枪骑兵解锁最小射程3格、最大射程7格的远程投掷攻击手段，该攻击为抛射弹道且伤害为150%，可以越过树木和面积不大于4格的非防御建筑。' +
                    '投掷标枪后，浸毒标枪骑兵可以在本回合或下回合取回命中地点的标枪，或是消耗20木材和一个动作宣言，制作一杆新的标枪。'
                ],
            },
            '',
            [InariSafariCamp, null],
        ),
    InariGreenstoneTower:
        createBuilding(
            '翠石高塔', 1800, 0, 0, 0,
            0, 200, 0, [], 9,
            [260, 0, 180], [13, 0, 9, 180], 28,
            [0, 0], ['兽灵之园', '森林聚居地/绿荫要塞'],
            {
                '生产建筑': '该建筑是森林贤者、自然巫师的生产建筑。',
                '高级生产建筑（需要拥有风暴神殿建筑）': '该建筑是风暴祭司的生产建筑。',
                '精简训练（需要在绿荫要塞中升级）': '该建筑是短弓刺客、猎狮矛手的生产建筑。',
            },
            {},
            '',
            [InariGreenstoneTower, null],
        ),
    InariVerdantWatchtower:
        createBuilding(
            '翠绿哨塔', 850, 0, 0, 0,
            100, 200, 60, [['远程箭矢', 2, 12, '物理']], 4,
            [130, 0, 10], [13, 0, 1, 170], 16,
            [0, 0], ['兽灵之园'],
            {
                '防御建筑': '该建筑是防御建筑。',
                '临时驻地': '该建筑可以容纳个体体型不超过1格、共计数量不超过8个的单位群体。单位进驻或离开建筑需要1个移动宣言和2点移动力。' +
                    '建筑毁坏时，会强制卸载全部单位，并使这些单位流失50%当前健康值。',
                '射击孔': '该建筑最多允许两个驻扎在其中的单位使用远程箭矢类攻击。',
            },
            {
                '荧光花粉': [50, 0, 30, 4, [],
                    '在这个翠绿哨塔周围5格的全部覆盖区域布置荧光花粉。在地面上接触荧光花粉的单位，三回合内无法进入或维持【潜行】状态。',
                ],
            },
            '',
            [InariVerdantWatchtower, null],
        ),
    InariBlessingFountain:
        createBuilding(
            '祝福喷泉', 600, 100, 0, 2,
            0, 150, 0, [], 4,
            [100, 0, 150], [2, 0, 3, 25], 15,
            [0, 0], ['森灵石碑'],
            {
                '大自然的祝福': '距离祝福喷泉不超过5格的所有伊纳利三足联盟阵营的单位，每回合结束阶段回复1%最大健康值（无法叠加）。',
                '魔力传导': '祝福喷泉消耗2点魔力，回复距离自身不超过5格的一个单位5点健康值或1点魔法值，此举不需要任何宣言。',
                '治愈顽疾':'5个连续回合的结束阶段均受到大自然的祝福的单位，在第6个回合的开始阶段解除身上的所有疾病效果和【重伤】效果。',
                '魔力泉水（需要为此祝福喷泉单独升级）': '距离这个祝福喷泉不超过5格的所有伊纳利三足联盟阵营的单位，每回合结束阶段回复1点魔法值（无法叠加）。',
            },
            {
                '魔力泉水': [50, 0, 100, 12, [],
                    '距离这个祝福喷泉不超过5格的所有伊纳利三足联盟阵营的单位，每回合结束阶段回复1点魔法值。',
                ],
            },
            '',
            [InariBlessingFountain, null],
        ),
    InariNaturalAltar:
        createBuilding(
            '自然祭坛', 1800, 0, 0, 0,
            0, 200, 0, [], 9,
            [135, 0, 125], [5, 0, 5, 144], 24,
            [0, 0], ['翠石高塔', '森林聚居地/绿荫要塞'],
            {
                '自然巫师': '该建筑的存在允许翠石高塔训练自然巫师。',
            },
            {
                '利爪撕裂': [0, 250, 225, 22, [],
                    '森林贤者每次普通攻击命中非器械或建筑目标后，在本回合内为目标附加【重创易伤】状态。' +
                    '处于【重创易伤】状态下的目标防御力下降20点，且一击导致重伤的承受伤害阈值下降至20%最大健康值、单回合重伤的承受伤害阈值下降至40%最大健康值。'
                ],
                '真视咒文': [0, 250, 150, 20, [],
                    '自然巫师布置的显形图腾侦测暴露潜行的范围增加4格（共12格）。'
                ],
                '丰收之环': [200, 200, 175, 36, ['绿荫要塞'],
                    '自然巫师掌握丰收之环魔法：消耗100魔法值和一个动作宣言，使一个资源收集建筑在5回合内，从周围收集资源的速度翻倍（对受影响的采集者同样生效）。',
                ],
            },
            '',
            [InariNaturalAltar, null],
        ),
    InariRangerForest:
        createBuilding(
            '游骑兵林场', 2800, 0, 0, 0,
            0, 200, 0, [], 16,
            [350, 0, 125], [14, 0, 5, 224], 30,
            [0, 0], ['游猎营地', '绿荫要塞'],
            {
                '骁勇轻骑兵': '该建筑的存在允许游猎营地训练骁勇轻骑兵。',
            },
            {
                '奔腾飞跃': [60, 175, 90, 13, [],
                    '骁勇轻骑兵移动时，可以花费150%移动力（向上取整）飞跃不长于4格的沟壑地形或攀登不高于2格的高地地形。',
                ],
                '健步如飞': [175, 200, 235, 23, [],
                    '骁勇轻骑兵的移动力增加3格（共15格）、无视所有困难地形，并且不会触发任何地面陷阱。',
                ],
            },
            '',
            [InariRangerForest, null],
        ),
    InariTempleOfStorm:
        createBuilding(
            '风暴神殿', 2500, 0, 0, 0,
            0, 200, 0, [], 9,
            [325, 0, 250], [6, 0, 5, 100], 36,
            [0, 0], ['翠石高塔', '绿荫要塞'],
            {
                '风暴祭司': '该建筑的存在允许翠石高塔训练风暴祭司。',
            },
            {
                '闪电风暴': [0, 300, 250, 27, [],
                    '风暴祭司消耗125魔法值和一个动作宣言，在距离自身不超过12格的任意位置（包括无视野格子）召唤延迟的闪电风暴。' +
                    '闪电风暴将在下个回合出现征兆并将在下下个回合落下，以该施法格子为中心的3×3区域内，对每个格子造成一次500点的气系魔法伤害。闪电风暴对同一单位造成的伤害上限为2500点。',
                ],
                '导向性等离子云': [0, 400, 300, 43, [],
                    '风暴祭司的闪电风暴对所有伊纳利三足联盟阵营单位造成的伤害下降90%，并且对器械单位和建筑的伤害增加20%。' +
                    '此外，闪电风暴对同一单位造成的伤害上限提升至3000点。',
                ],
            },
            '',
            [InariTempleOfStorm, null],
        ),
}

export default InariBuildings