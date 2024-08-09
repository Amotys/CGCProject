import React from "react";

const CharacterViewBasicStatus = ({ character }) => {
    return (
        <div className='flex flex-row' style={{ paddingBottom: '2rem', }}>
            {/* 图片 */}
            <div className='container' style={{
                width: '40%',
            }}>
                <img src={character.imageUrl} alt={character.name} style={{
                    borderRadius: '3rem',
                    border: '0.25rem solid #4c9f0c',
                }} />
            </div>

            <div className='container' style={{
                display: 'flex',
                justifyContent: 'right',
                width: '60%',
            }}>
                {/* 基本描述 */}
                <div className='container flex flex-col' style={{
                    width: '80%',
                    //fontFamily: 'Kaiti',
                    fontSize: '1.25rem',
                }}>
                    <table style={{ height: '100%' }}>
                        <tbody>

                            <tr>
                                <td>姓名：</td>
                                <td><b>{character.fullname}</b></td>
                            </tr>

                            <tr>
                                <td>种族：</td>
                                <td><b>{character.race}</b></td>
                            </tr>

                            <tr>
                                <td>性别：</td>
                                <td><b>{
                                    character.gender === 0 ? '女性' :
                                        character.gender === 1 ? '男性' :
                                            character.gender === 2 ? '无性' : '双性'}</b></td>
                            </tr>

                            <tr>
                                <td>年龄：</td>
                                <td><b>{`${character.age}（${character.startYear}）`}</b></td>
                            </tr>

                            <tr>
                                <td>生日：</td>
                                <td><b>{character.birthday}</b></td>
                            </tr>

                            <tr>
                                <td>身高：</td>
                                <td><b>{character.height}公分</b></td>
                            </tr>

                            <tr>
                                <td>体重：</td>
                                <td><b>{character.weight}公斤</b></td>
                            </tr>

                            <tr>
                                <td>阵营：</td>
                                <td><b>{character.side.join('、')}</b></td>
                            </tr>

                            <tr rowSpan={character.occupation.length}>
                                <td>职位：</td>
                                <td><b>{character.occupation[0]}</b></td>
                            </tr>
                            {character.occupation.map((occupationItem, index) => (index >= 1 ? (
                                <tr key={index}>
                                    <td></td>
                                    <td><b>{occupationItem}</b></td>
                                </tr>
                            ) : null
                            ))}

                            <tr>
                                <td>性格：</td>
                                <td><b>{character.personality.join('、')}</b></td>
                            </tr>

                            <tr rowSpan={character.preference.length}>
                                <td>喜好：</td>
                                <td><b>{character.preference[0]}</b></td>
                            </tr>
                            {character.preference.map((preferenceItem, index) => (index >= 1 ? (
                                <tr key={index}>
                                    <td></td>
                                    <td><b>{preferenceItem}</b></td>
                                </tr>
                            ) : null
                            ))}

                            <tr rowSpan={character.preference.length}>
                                <td>厌恶：</td>
                                <td><b>{character.aversion[0]}</b></td>
                            </tr>
                            {character.aversion.map((aversionItem, index) => (index >= 1 ? (
                                <tr key={index}>
                                    <td></td>
                                    <td><b>{aversionItem}</b></td>
                                </tr>
                            ) : null
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CharacterViewBasicStatus;