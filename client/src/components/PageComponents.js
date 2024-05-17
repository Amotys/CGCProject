import Home from './home/Home';
import Worldview from './worldview/Worldview';
import Race from './race/Race';
import Characters from './characters/Characters';
import Geography from './geography/Geography';
import Library from './library/Library';
import Tools from './tools/Tools';
import ToolsHandler from './tools/tools components/ToolsHandler';

// 角色部分组件
import CharacterHandler from './characters/CharacterHandler';
import CharacterView from './characters/CharacterView';

// 魔法部分组件
import MagicView from './library/magics/MagicView';

// 工具部分组件在CGCProject\client\src\components\tools\tools components\ToolsComponents注册

// 角色生成器
import CharacterGeneratorTypePart from './tools/tools components/character generator/CharacterGeneratorTypePart';
import CharacterGeneratorRacePart from './tools/tools components/character generator/CharacterGeneratorRacePart';
import CharacterGeneratorBasicInfoPart from './tools/tools components/character generator/CharacterGeneratorBasicInfoPart';

const createCharacterHandler = (props, side) => (
    <CharacterHandler
        {...props}
        side={side}
    />
);
const createCharacterView = (props, name) => (
    <CharacterView
        {...props}
        name={name}
    />
);
const createMagicView = (name) => (
    <MagicView
        name={name}
    />
);
const createToolsHandler = (props, name) => (
    <ToolsHandler
        {...props}
        name={name}
    />
);

const PageComponents = {
    app_home: Home,
    app_worldview: Worldview,
    app_race: Race,
    app_characters: Characters,
    app_geography: Geography,
    app_library: Library,
    app_tools: Tools,

    // 阵营显示角色卡
    characters_default: (props) => createCharacterHandler(props, '默认'),
    characters_templar: (props) => createCharacterHandler(props, '圣堂'),
    characters_red_storm: (props) => createCharacterHandler(props, '红风暴海盗团'),
    characters_sapphire: (props) => createCharacterHandler(props, '蓝宝石海盗团'),
    characters_court: (props) => createCharacterHandler(props, '朝廷'),
    characters_henge: (props) => createCharacterHandler(props, '姮娥宫'),
    characters_black_rose: (props) => createCharacterHandler(props, '黑玫瑰义军'),
    characters_legion: (props) => createCharacterHandler(props, '沙之军团'),
    characters_resistance: (props) => createCharacterHandler(props, '波札那反抗军'),
    characters_semonster: (props) => createCharacterHandler(props, '萨曼斯特联合军'),
    characters_inari: (props) => createCharacterHandler(props, '伊纳利三足联盟'),
    characters_kenvali: (props) => createCharacterHandler(props, '斯多尔特雷贤者会'),
    characters_sophiel: (props) => createCharacterHandler(props, '斯奥菲尔王庭'),
    characters_fortaleza: (props) => createCharacterHandler(props, '昆吉斯塔军团'),
    characters_terra_wanderer: (props) => createCharacterHandler(props, '铁拉行者会'),
    characters_b_dipper: (props) => createCharacterHandler(props, '七峰塔'),
    characters_sericum: (props) => createCharacterHandler(props, '赛利库姆皇室'),
    characters_apicem: (props) => createCharacterHandler(props, '阿比琪姆贸易塔'),
    characters_nebula: (props) => createCharacterHandler(props, '十二星宫议会'),
    characters_others: (props) => createCharacterHandler(props, '独立者'),

    // 角色详细
    characters_templar_priscilla_riesas: (props) => createCharacterView(props, '普莉茜菈'),
    characters_black_rose_yin_lian: (props) => createCharacterView(props, '银莲'),
    characters_sericum_ling_hu: (props) => createCharacterView(props, '陵瑚'),
    characters_nebula_takapunna: (props) => createCharacterView(props, '塔克布娜'),
    characters_others_hua_diao: (props) => createCharacterView(props, '花雕'),

    // 魔法详细
    library_magics_the_eye_of_dark_night: () => createMagicView('暗夜之眼'),

    // 工具
    tools_character_generator: (props) => createToolsHandler(props, '角色生成器'),
    tools_battle_calculator: (props) => createToolsHandler(props, '战斗计算器'),
    // 角色生成器
    character_generator_type_part: CharacterGeneratorTypePart,
    character_generator_race_part: CharacterGeneratorRacePart,
    character_generator_basic_info_part: CharacterGeneratorBasicInfoPart,
    // 战斗计算器
    
};

export default PageComponents;