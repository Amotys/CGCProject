// PC

// NPC
// 圣堂
import TemplarPriscillaRiesas from './npcs/TemplarPriscillaRiesas';                         // 普莉茜菈
// 黑玫瑰义军
import BlackRoseYinLian from './npcs/BlackRoseYinLian';                                     // 银莲
// 赛利库姆皇室
import SericumLingHu from './npcs/SericumLingHu';                                           // 陵瑚
// 十二星宫议会
import NebulaTakapunna from './npcs/NebulaTakapunna';                                       // 塔克布娜
// 独立者
import OthersHuaDiao from './npcs/OthersHuaDiao';                                           // 花雕

// 野怪、BOSS
import {
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
} from './monsters/Templars';
import {
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
} from './monsters/Henges';
import {
    CourtHeavyGuard,
    CourtHeavyArcher,
    CourtCrossbowmen,
    CourtWarsmith,
    CourtWarDrummer,
    CourtOverlordKnight,
    CourtSiegeRam,
    CourtHeavenLadder,
    CourtSkylight,
    CourtFireCrowBallista,
    CourtVulcanBallista,
    CourtThunderCatapult,
    CourtThreeBowBallista,
    CourtTigerCannon,
    Skylight,
} from './monsters/Courts';
import {
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
} from './monsters/Legions';
import {
    ResistanceFalconHunter,
    ResistanceDualBladeMamluk,
    ResistanceSlaveRanger,
    ResistanceMaskOfSand,
} from './monsters/Resistances';
import {
    NebulaEragon,
} from './monsters/Nebulas';

const AllCharacterComponents = {
    // NPC
    // 圣堂
    TemplarPriscillaRiesas: TemplarPriscillaRiesas,
    // 黑玫瑰义军
    BlackRoseYinLian: BlackRoseYinLian,
    // 赛利库姆皇室
    SericumLingHu: SericumLingHu,
    // 十二星宫议会
    NebulaTakapunna: NebulaTakapunna,
    // 独立者
    OthersHuaDiao: OthersHuaDiao,

    // 野怪、BOSS
    Templars: {
        TemplarHollyGuard: TemplarHollyGuard,
        TemplarCrossbowman: TemplarCrossbowman,
        TemplarHolyblessingSister: TemplarHolyblessingSister,
        TemplarMissionaryPastor: TemplarMissionaryPastor,
        TemplarDemonbreakingPriest: TemplarDemonbreakingPriest,
        TemplarBladeMaster: TemplarBladeMaster,
        TemplarSilvermanedGriffon: TemplarSilvermanedGriffon,
        TemplarUnicorn: TemplarUnicorn,
        TemplarKnight: TemplarKnight,
        TemplarWarBallista: TemplarWarBallista,
    },
    Henges: {
        HengeMountainGateGuard: HengeMountainGateGuard,
        HengeLunaFollower: HengeLunaFollower,
        HengeShadowHunter: HengeShadowHunter,
        HengeMoonlightWorshiper: HengeMoonlightWorshiper,
        HengeAstralGuardian: HengeAstralGuardian,
        HengeNetherGuardian: HengeNetherGuardian,
        HengePolarisLord: HengePolarisLord,
        HengeLunarLord: HengeLunarLord,
        HengeMoonlightWolf: HengeMoonlightWolf,
        HengeMoonlightOwl: HengeMoonlightOwl,
        HengeMoonlightBunny: HengeMoonlightBunny,
        LunamVenit: LunamVenit,
    },
    Courts: {
        CourtHeavyGuard: CourtHeavyGuard,
        CourtHeavyArcher: CourtHeavyArcher,
        CourtCrossbowmen: CourtCrossbowmen,
        CourtWarsmith: CourtWarsmith,
        CourtWarDrummer: CourtWarDrummer,
        CourtOverlordKnight: CourtOverlordKnight,
        CourtSiegeRam: CourtSiegeRam,
        CourtHeavenLadder: CourtHeavenLadder,
        CourtSkylight: CourtSkylight,
        CourtFireCrowBallista: CourtFireCrowBallista,
        CourtVulcanBallista: CourtVulcanBallista,
        CourtThunderCatapult: CourtThunderCatapult,
        CourtThreeBowBallista: CourtThreeBowBallista,
        CourtTigerCannon: CourtTigerCannon,
        Skylight: Skylight,
    },
    Legions: {
        LegionBandit: LegionBandit,
        LegionPoisonThrower: LegionPoisonThrower,
        LegionBlightWarlock: LegionBlightWarlock,
        LegionSerpentTamer: LegionSerpentTamer,
        LegionDoubleTeam: LegionDoubleTeam,
        LegionQuicksandPharaoh: LegionQuicksandPharaoh,
        LegionCamelCavalry: LegionCamelCavalry,
        LegionDuskExecutioner: LegionDuskExecutioner,
        LegionUnparalleledBanditKing: LegionUnparalleledBanditKing,
        LegionGiantSandworm: LegionGiantSandworm,
    },
    Resistances: {
        ResistanceFalconHunter: ResistanceFalconHunter,
        ResistanceDualBladeMamluk: ResistanceDualBladeMamluk,
        ResistanceSlaveRanger: ResistanceSlaveRanger,
        ResistanceMaskOfSand: ResistanceFalconHunter,
    },
    Nebulas: {
        NebulaEragon: NebulaEragon,
    }
}

export default AllCharacterComponents;