import React from "react";
import AnchorBay from '../../../../../static/images/maps/AnchorBay.png'
import YggdrasilAncientBattlefield from '../../../../../static/images/maps/YggdrasilAncientBattlefield.png'
import ClickableMap from './ClickableMap'

const PVPMaps = () => {

    const maps = {
        AnchorBay: {
            imageUrl: AnchorBay,
            text: '岛屿中心有高纯度魔晶矿，玩家需要争夺中心高台以获得优势。定期的浪潮会改变岛屿两端的地形，影响资源采集点的防守与进攻策略。',
            title: '【2v2】锚心湾',
        },
        YggdrasilAncientBattlefield: {
            imageUrl: YggdrasilAncientBattlefield,
            text: '巨大的世界树附近有着强大的生命能量，可以治愈伤员并增强部队的防御力，玩家们将不得不在复杂的地形中做好拉锯战的准备。',
            title: '【4v4】依格朵拉西尔古战场',
        },
    }
    return (
        <div className="container flex flex-row" style={{
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            {Object.entries(maps).map(([key, value]) => (
                <div key={`pvp map ${key}`} style={{ width: '25%', height:'100%' }}>
                    <ClickableMap imageUrl={value.imageUrl} text={value.text} title={value.title} />
                </div>
            ))}
        </div >
    )
}

export default PVPMaps