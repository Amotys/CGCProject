import React, { useState, useEffect } from "react";
import DefaultSkillsPoint from '../../static/skills/DefaultSkillsPoint';
import SkillsName from '../../static/skills/SkillsName';

const CharacterViewSkillsPart = ({ character }) => {
    const [characterSkills, setCharacterSkills] = useState(character.skills);

    // 一旦角色发生变化，就立即重新计算点数，以满足物品和道具修正
    useEffect(() => {
    }, [character])

    const higherSkillTable = (characterSkills, part) => {
        return (
            <div className='flex-1' style={{ padding: '2rem', paddingTop: '0', }}>
                <table style={{ width: '100%', height: '100%' }}>
                    <tbody>
                        {Object.entries(characterSkills[part]).map(([key, value], index) => (
                            <tr key={`${key} ${index}`}>
                                <td style={{ width: '66%' }}>
                                    {`${SkillsName[key]}：`}
                                </td>
                                <td>
                                    <b>{value[0] + value[1]}</b>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div className='flex flex-col'>

            {/* 通常技能 */}
            <div className='container' style={{ padding: '2rem', paddingTop: '0', }}>
                <table style={{ width: '100%', }}>
                    <tbody>
                        {Object.entries(characterSkills.normal).map((key, index, array) => (
                            index % 4 === 0 && (
                                <tr key={`${key} ${index}`}>
                                    {[index, index + 1, index + 2, index + 3].map((innerIndex) => {
                                        const [innerKey, innerValue] = array[innerIndex] || [];
                                        return (
                                            innerKey && (
                                                <React.Fragment key={`${character.name} ${innerKey} ${innerIndex}`}>
                                                    <td style={{ width: '12%' }}>
                                                        {`${SkillsName[innerKey]}：`}
                                                    </td>
                                                    <td>
                                                        <b>{innerValue[0] + innerValue[1]}</b>
                                                    </td>
                                                </React.Fragment>
                                            )
                                        );
                                    })}
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 战斗、魔法、工程理论 */}
            <div className='container flex flex-row' style={{ padding: '0rem', }}>
                {higherSkillTable(characterSkills, 'combat')}
                {higherSkillTable(characterSkills, 'magic')}
                {higherSkillTable(characterSkills, 'engineering')}
            </div>
            {/* 炼金、社会、商业理论 */}
            <div className='container flex flex-row' style={{ padding: '0rem', }}>
                {higherSkillTable(characterSkills, 'alchemical')}
                {higherSkillTable(characterSkills, 'social')}
                {higherSkillTable(characterSkills, 'business')}
            </div>
            {/* 侦查、星象、逆境生存理论 */}
            <div className='container flex flex-row' style={{ padding: '0rem', }}>
                {higherSkillTable(characterSkills, 'surveillance')}
                {higherSkillTable(characterSkills, 'astrological')}
                {higherSkillTable(characterSkills, 'adversitySurvival')}
            </div>
        </div>
    );
}

export default CharacterViewSkillsPart;