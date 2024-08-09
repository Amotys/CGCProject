import React from "react";

const smallPadding = '0.25rem'

const CGBasicInfoPartStateDescription = ({ data, statesInfos }) => {
    return (
        <div className="container" style={{
            borderBottom: '0.01rem solid darkgreen',
        }}>
            <div style={{
                padding: '2rem',
                paddingTop: '0.5rem',
            }}>
                {data['typePart'] === 'PC' || data['typePart'] === 'NPC' ?
                    <table>
                        <tbody>
                            <tr >
                                <td style={{ padding: smallPadding, }}>{`属性总点数是创建角色时，角色的八项属性对应的点数总和的限制。
                            ${data['racePart']}的属性总点数是${statesInfos[0][0]}，这意味着每个新创建的${data['typePart']}${data['racePart']}的属性点数总和都不能超过${statesInfos[0][0]}。`}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: smallPadding, }}>{`角色的八项属性分别为力量、体质、灵巧、意志、智慧、魔力、魅力、幸运，每个种族的每项属性都有对应的范围限制。`}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: smallPadding, }}>{`角色的寿命是角色能够豁免死门检定的最大自然年龄。
                            例如，对每一个${data['racePart']}而言，在${statesInfos[0][1].match(/(.*?)年/)[1]}年内，都不需要进行任何的死门检定。`}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: smallPadding, }}>{`当角色的年龄超过寿命时，每过一段时间，都需要进行即死检定，如果该检定成功，则等待下个检定周期，否则角色将老死（自然死亡）。
                            每个检定周期的长度是总寿命的1%，每次检定通过，下次检定的难度会逐渐递增，这种机制即“死门检定”。`}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: smallPadding, }}>{`体积指数是角色在战斗中单方向所占的格子数量。
                            角色的体型在战斗中所体现的是占据的格子数量，由于角色在战斗中始终为正方形单位，因此体型应是体积指数的平方。
                            在角色扮演过程中，每级体积指数对应的身高约为1.5~2米。`}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: smallPadding, }}>{`当角色的体积指数为0时，并不代表角色的真实体型为0或不存在，而同样包括角色真实体型小到不应被计算战斗体型的情况，例如婴儿和小猫小狗。
                            角色的体积指数为0时，仍然需要将战斗用角色卡放置于战场上，但计算碰撞体积时，除非无法通过的地形，否则可以忽视角色的碰撞体积。
                            因此，体积指数为0的角色可以停留在其他单位所处的格子上，也可以穿过其他单位。`}</td>
                            </tr>
                        </tbody>
                    </table> :
                    <></>}
            </div>
        </div>
    )
}

export default CGBasicInfoPartStateDescription;