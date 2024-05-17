import React, { useState } from "react";
import ToolViewTitlePart from '../ToolViewTitlePart';
import BattleCalculatorLoadPart from './BattleCalculatorLoadPart';
import BattleCalculatorStatesPart from './BattleCalculatorStatesPart';
import BattleCalculatorResultPart from './BattleCalculatorResultPart';

const defaultInput = {
    hp: '',
    atk: '',
    dmg: '',
    def: '',
    mor: '',
    cri: '',

    str: '',
    con: '',
    agi: '',
    wil: '',
    int: '',
    pow: '',
    app: '',
    luc: '',

    // 攻击类型
    handToHandCombat: '',
    meleeWeapons: '',
    shieldCombat: '',
    archery: '',
    throwing: '',

    // 防御类型
    evasion: '',
    parryCounter: '',
    precisionDefense: '',

    // 被动计算
    criticalHit: '',
    manaRegeneration: '',
    augmentedFlux: '',
    magicPenetration: '',
    injuryExemption: '',
    rapidHealing: '',
    magicResistance: '',
    lastStand: '',

    // 特殊选项
    rapidFire: '',
    assistedBlock: '',
}

const BattleCalculator = ({ setCurrentPage, imageUrl, title, text }) => {
    const [leftCharacter, setLeftCharacter] = useState(undefined)
    const [leftData, setLeftData] = useState(defaultInput)
    const [rightCharacter, setRightCharacter] = useState(undefined)
    const [rightData, setRightData] = useState(defaultInput)
    const [validStates, setValidStates] = useState(false)
    return (
        <div className="container">
            <ToolViewTitlePart imageUrl={imageUrl} title={title} text={text} />

            {/* 数据载入、角色对战面板部分 */}
            <BattleCalculatorLoadPart
                leftCharacter={leftCharacter} rightCharacter={rightCharacter}
                setLeftCharacter={setLeftCharacter} setRightCharacter={setRightCharacter}
                setLeftData={setLeftData} setRightData={setRightData}
            />

            {/* 数据修改部分 */}
            <BattleCalculatorStatesPart
                leftData={leftData} rightData={rightData}
                setLeftData={setLeftData} setRightData={setRightData}
                validStates={validStates} setValidStates={setValidStates} />

            {/* 结果部分 */}
            <BattleCalculatorResultPart validStates={validStates} leftData={leftData} rightData={rightData} />
        </div>
    );
}

export default BattleCalculator;