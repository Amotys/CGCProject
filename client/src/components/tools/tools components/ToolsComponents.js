// 工具组件合集

// 角色生成器
import CharacterGenerator from './character generator/CharacterGenerator';
import characterGeneratorImage from '../../../static/images/tools/CharacterGenerator.png';
import characterGeneratorShotcut from '../../../static/images/tools/CharacterGeneratorShot.png';

// 战斗计算器
import BattleCalculator from './battle calculator/BattleCalculator';
import battleCalculatorImage from '../../../static/images/tools/BattleCalculator.png';
import battleCalculatorShotcut from '../../../static/images/tools/BattleCalculatorShot.png';

const ToolsComponents = {
    tools_character_generator: {
        self: CharacterGenerator,
        imageUrl: characterGeneratorImage,
        imageShotUrl: characterGeneratorShotcut,
        text: '快速、简便的角色创建工具。' +
            '通过简单的步骤，轻松地生成各种背景下的角色，包括种族、属性、技能、魔法等。',
        title: '角色生成器',
        onClickLabel: 'character_generator',
    },
    battleCalculator: {
        self: BattleCalculator,
        imageUrl: battleCalculatorImage,
        imageShotUrl: battleCalculatorShotcut,
        text: '提供精确的战斗数据和结果。' +
            '通过简单输入战斗参数或导入已有角色数据，计算攻击的伤害、模拟士气和暴击。',
        title: '战斗计算器',
        onClickLabel: 'battle_calculator',
    }
};

export default ToolsComponents;