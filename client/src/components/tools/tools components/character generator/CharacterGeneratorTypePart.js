import React, { useEffect } from "react";
import ClickableCGTypeCard from "./ClickableCGTypeCard";
import TypePCUrl from '../../../../static/images/tools/characterGenerator/TypePC.png';
import TypeNPCUrl from '../../../../static/images/tools/characterGenerator/TypeNPC.png';
import TypeMonsterUrl from '../../../../static/images/tools/characterGenerator/TypeMonster.png';

const cardStyle = {
    padding: '2rem',
    width: '33%',
}

const CharacterGeneratorTypePart = ({ setCurrentStep, data, setData }) => {
    useEffect(() => {
        const scrollToThisTop = () => {
            // 获取当前组件的DOM节点
            const componentNode = document.getElementById('character_generator_type_part');
            if (componentNode) {
                // 滚动至当前组件的顶部
                componentNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        // 页面加载时执行滚动操作
        scrollToThisTop();
    }, []); // 仅在组件挂载时执行一次

    const typePartClick = (type) => {
        const newData = {
            ...data,
            'typePart': type,
        }
        setData(newData);
        setCurrentStep('character_generator_race_part');
    }
    return (
        <div className="container flex flex-row" id='character_generator_type_part'>
            <div style={{
                ...cardStyle,
                justifyContent: 'right',
                display: 'flex',
            }}>
                <ClickableCGTypeCard imageUrl={TypePCUrl}
                    text={`玩家角色，简称PC，是由玩家控制的虚拟角色。
                    每位玩家都将扮演一个或多个独特的PC，他们拥有自己的背景故事、技能和目标。
                    PC可以是各种职业、种族和性格类型，由玩家根据规则和设定进行塑造。
                    他们将通过冒险、探索和与其他人交互来推动故事情节的发展，创造出跑团中的精彩故事。`}
                    title='玩家角色（PC）'
                    buttonClick={() => typePartClick('PC')}
                    layoutReversed={false}
                />
            </div>
            <div style={{
                ...cardStyle,
                justifyContent: 'center',
                display: 'flex',
            }}>
                <ClickableCGTypeCard imageUrl={TypeNPCUrl}
                    text={`非玩家角色，简称NPC，是由主持人（GM）控制的虚拟角色，用来丰富跑团世界和故事情节。
                    NPC可以是各种形式的角色，包括PC的盟友和敌人。他们可以是冒险者、商人、村民、国王、巨龙等等。
                    他们可以有各自的目标、动机和背景故事，可以是重要的支持角色、也可以是狡诈的反派。
                    在CGC中，NPC角色的审核会比PC角色更宽松。`}
                    title='非玩家角色（NPC）'
                    buttonClick={() => typePartClick('NPC')}
                    layoutReversed={false}
                />
            </div>
            <div style={{
                ...cardStyle,
                justifyContent: 'left',
                display: 'flex',
            }}>
                <ClickableCGTypeCard imageUrl={TypeMonsterUrl}
                    text={`存在于特定模组中的特殊个体，通常由主持人（GM）控制。
                    它们可以是各种形式的敌对生物或高等存在，从野兽、机械造物到灵能体等。
                    怪物不会在模组外的世界沙盒中发挥影响力，因此它们的属性和技能以及天赋的选择是完全自由的。
                    通常被用来丰富世界观和增加跑团乐趣。`}
                    title='怪物（Monster）'
                    buttonClick={() => typePartClick('MONSTER')}
                    layoutReversed={false}
                />
            </div>
        </div>
    );
}

export default CharacterGeneratorTypePart;