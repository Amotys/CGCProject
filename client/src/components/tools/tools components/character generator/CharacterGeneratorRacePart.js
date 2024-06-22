import React, { useEffect } from "react";
import ClickableCGRaceCard from "./ClickableCGRaceCard";
import raceImages from '../../../../static/races/raceImages';
import CGButton from './CGButton';

const cardStyle = {
    padding: '1rem',
    width: '16.66%',
}

const detailTitleStyle = {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    color: 'darkgreen',
    fontSize: '1.5rem',
}

const detailTableStyle = {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    color: 'darkgreen',
    fontSize: '1rem',
}

const CharacterGeneratorTypePart = ({ setCurrentStep, data, setData }) => {
    useEffect(() => {
        const scrollToThisTop = () => {
            // 获取当前组件的DOM节点
            const componentNode = document.getElementById('character_generator_race_part');
            if (componentNode) {
                // 滚动至当前组件的顶部
                componentNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        // 页面加载时执行滚动操作
        scrollToThisTop();
    }, []); // 仅在组件挂载时执行一次

    const nextPage = (race) => {
        const newData = {
            ...data,
            'racePart': race,
        }
        setData(newData);
        setCurrentStep('character_generator_basic_info_part');
    }
    const backPage = () => {
        const newData = {
            ...data,
            'typePart': '',
        }
        setData(newData);
        setCurrentStep('character_generator_type_part');
    }
    const createRaceCard = (textArray, title, imageUrl) => {
        return (
            <div style={{
                ...cardStyle,
                justifyContent: 'center',
                display: 'flex',
            }}>
                <ClickableCGRaceCard imageUrl={imageUrl}
                    text={<span dangerouslySetInnerHTML={{
                        __html: textArray.join('<br>')
                    }} />}
                    title={title}
                    buttonClick={() => nextPage(title)}
                    layoutReversed={false}
                />
            </div>
        )
    }
    return (
        <div className="container" id='character_generator_race_part'>
            <div>
                {data['typePart'] == 'PC' ?
                    <>
                        <div style={detailTitleStyle}>你选择的角色类型为玩家角色（PC）</div>
                        <table style={detailTableStyle}>
                            <tbody>
                                <tr>
                                    <td>·</td>
                                    <td>你将成为玩家角色（PC），这意味着你对角色有绝对的行为选择的掌控权，你是CGC世界中的主角之一</td>
                                </tr>
                                <tr>
                                    <td>·</td>
                                    <td>你可以从14个不同的种族中挑选，作为你角色的种族，它们有其独特的特点和能力</td>
                                </tr>
                                <tr>
                                    <td>·</td>
                                    <td>你的角色有属性点数、阅历、能力的限制</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>（青铜纪元的种族有4800属性点数可分配、白银纪元的种族有5000属性点数可分配）</td>
                                </tr>
                            </tbody>
                        </table>
                    </> :
                    data['typePart'] == 'NPC' ?
                        <>
                            <div style={detailTitleStyle}>你选择的角色类型为非玩家角色（NPC）</div>
                            <table style={detailTableStyle}>
                                <tbody>
                                    <tr>
                                        <td>·</td>
                                        <td>你将成为非玩家角色（NPC），在CGC世界中充当支持性角色，为玩家角色提供世界的背景、线索、任务和挑战</td>
                                    </tr>
                                    <tr>
                                        <td>·</td>
                                        <td>你可以从16个不同的种族中挑选，作为你角色的种族，它们有其独特的特点和能力</td>
                                    </tr>
                                    <tr>
                                        <td>·</td>
                                        <td>你的角色有属性点数的限制，但对于阅历和能力的限制较为宽松</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>（青铜纪元的种族有4800属性点数可分配、白银纪元的种族有5000属性点数可分配、黄金纪元的种族有5400属性点数可分配）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </> : data['typePart'] == 'MONSTER' ?
                            <>
                                <div style={detailTitleStyle}>你选择的角色类型为怪物（Monster）</div>
                                <table style={detailTableStyle}>
                                    <tbody>
                                        <tr>
                                            <td>·</td>
                                            <td>你将成为怪物（Monster），在CGC世界中充当临时性角色，为特定的模组服务</td>
                                        </tr>
                                        <tr>
                                            <td>·</td>
                                            <td>你的存在不会也不应该对CGC世界产生影响，而是为了丰富、增加模组的乐趣</td>
                                        </tr>
                                        <tr>
                                            <td>·</td>
                                            <td>你可以从23个不同的种族中挑选，作为你角色的种族，它们有其独特的特点和能力</td>
                                        </tr>
                                        <tr>
                                            <td>·</td>
                                            <td>你的角色创建没有任何限制，可以根据模组的需要进行定制，以确保能够提供适当的挑战和充分的乐趣</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </> : <></>}
            </div>
            <div className="container flex flex-col" style={{
                paddingTop: '1rem',
                borderTop: '0.05rem solid darkgreen',
            }}>
                <div className="container flex flex-row">
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：地上界',
                        '寿命：80年',
                        '体型指数：0~2',
                        '数量：1,400,000',
                    ], '人类', raceImages.human.lead)}
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：地上界',
                        '寿命：70年',
                        '体型指数：0~2',
                        '数量：600,000',
                    ], '萨曼斯特', raceImages.semonster.lead)}
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：地上界',
                        '寿命：65年',
                        '体型指数：0~1(0)',
                        '数量：45,000',
                    ], '迦塔', raceImages.gata.lead)}
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：地上界',
                        '寿命：70年',
                        '体型指数：1~2(1~2)',
                        '数量：30,000',
                    ], '佩菈', raceImages.pera.lead)}
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：地上界',
                        '寿命：60年',
                        '体型指数：1~2(2)',
                        '数量：25,000',
                    ], '缇格利', raceImages.tigrey.lead)}
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：地心界',
                        '寿命：180年',
                        '体型指数：0~1',
                        '数量：50,000',
                    ], '哈那', raceImages.hana.lead)}
                </div>
                <div className="container flex flex-row">
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：地心界',
                        '寿命：40年',
                        '体型指数：0~1',
                        '数量：200,000',
                    ], '托西卡', raceImages.toxica.lead)}
                    {createRaceCard([
                        '起源：白银纪元',
                        '界域：地心界',
                        '寿命：250年',
                        '体型指数：1~2(2~4)',
                        '数量：55,000',
                    ], '古拉根', raceImages.gragon.lead)}
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：海天界',
                        '寿命：150年',
                        '体型指数：0~1',
                        '数量：15,000',
                    ], '赫帕利', raceImages.hepary.lead)}
                    {createRaceCard([
                        '起源：白银纪元',
                        '界域：海天界',
                        '寿命：280年',
                        '体型指数：1~2(2~3)',
                        '数量：7,500',
                    ], '梅杜萨', raceImages.medusa.lead)}
                    {createRaceCard([
                        '起源：白银纪元',
                        '界域：海天界',
                        '寿命：350年',
                        '体型指数：1~2(2)',
                        '数量：1,500',
                    ], '夏默曼', raceImages.sharmerman.lead)}
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：云山界',
                        '寿命：100年',
                        '体型指数：0',
                        '数量：65,000',
                    ], '桑布菈', raceImages.sambra.lead)}
                </div>
                <div className="container flex flex-row">
                    {createRaceCard([
                        '起源：青铜纪元',
                        '界域：云山界',
                        '寿命：70年',
                        '体型指数：1~2',
                        '数量：35,000',
                    ], '帕加罗', raceImages.pagallo.lead)}
                    {data['typePart'] == 'MONSTER' ?
                        <>
                            {createRaceCard([
                                '起源：黄金纪元',
                                '界域：云山界',
                                '寿命：500年',
                                '体型指数：0~1',
                                '数量：80,000',
                            ], '卡泽尔芙', raceImages.kazelf.lead)}
                            {createRaceCard([
                                '起源：黄金纪元',
                                '界域：???',
                                '寿命：450年',
                                '体型指数：1~3',
                                '数量：???',
                            ], '迪摩尼奥', raceImages.daemonium.lead)}
                            {createRaceCard([
                            ], '野生(未开智)', raceImages.wild.stupid)}
                            {createRaceCard([
                            ], '野生(半开智)', raceImages.wild.normal)}
                            {createRaceCard([
                            ], '野生(智慧生物)', raceImages.wild.wise)}
                        </> :
                        data['typePart'] == 'NPC' ?
                            <>
                                {createRaceCard([
                                    '起源：黄金纪元',
                                    '界域：云山界',
                                    '寿命：500年',
                                    '体型指数：0~1',
                                    '数量：80,000',
                                ], '卡泽尔芙', raceImages.kazelf.lead)}
                                {createRaceCard([
                                ], '野生(半开智)', raceImages.wild.normal)}
                                {createRaceCard([
                                ], '野生(智慧生物)', raceImages.wild.wise)}
                            </> :
                            <>
                                {createRaceCard([
                                ], '野生(智慧生物)', raceImages.wild.wise)}
                            </>
                    }
                </div>
                {data['typePart'] == 'MONSTER' ?
                    <div className="container flex flex-row">
                        {createRaceCard([
                        ], '创造物', raceImages.creature)}
                        {createRaceCard([
                        ], '元素生命', raceImages.element)}
                        {createRaceCard([
                        ], '不死者', raceImages.necro.lead)}
                        {createRaceCard([
                        ], '虚境实体', raceImages.cosmosentity)}
                        {createRaceCard([
                        ], '灵能体', raceImages.psyche)}
                    </div> : <></>}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '2rem',
                }}>
                    <CGButton label={'上一步'} onClick={() => backPage()} />
                </div>
            </div>
        </div>
    );
}

export default CharacterGeneratorTypePart;