import React, { useEffect } from "react";
import { getImageUrl, getIntroInfo, getStatesInfo } from './CharacterGeneratorFuntions';
import CGBasicInfoPartRaceIntro from './CGBasicInfoPartRaceIntro';
import CGBasicInfoPartStateTable from './CGBasicInfoPartStateTable';
import CGBasicInfoPartStateDescription from './CGBasicInfoPartStateDescription';
import CGBasicInfoPartStateForm from './CGBasicInfoPartStateForm';

const CharacterGeneratorBasicInfoPart = ({ setCurrentStep, data, setData }) => {
    useEffect(() => {
        const scrollToThisTop = () => {
            // 获取当前组件的DOM节点
            const componentNode = document.getElementById('character_generator_basic_info_part');
            if (componentNode) {
                // 滚动至当前组件的顶部
                componentNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        // 页面加载时执行滚动操作
        scrollToThisTop();
    }, []); // 仅在组件挂载时执行一次

    const imageUrls = getImageUrl(data['racePart']);
    const introInfos = getIntroInfo(data['racePart']);
    const statesInfos = getStatesInfo(data['racePart'], data);

    return (
        <div className="container" id='character_generator_basic_info_part' style={{ color: '#08331b', }}>
            <div className="container flex flex-col">

                {/* 头像和种族说明 */}
                <CGBasicInfoPartRaceIntro imageUrls={imageUrls} introInfos={introInfos} data={data} />

                <div style={{
                    padding: '0.6rem',
                    paddingBottom: '0',
                    paddingTop: '2rem',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                }}>种族的属性限制和特殊修正
                </div>
                <div style={{
                    padding: '0.6rem',
                    textAlign: 'center',
                }}>（所有限制仅对新角色生效）
                </div>

                {/* table属性 */}
                <CGBasicInfoPartStateTable statesInfos={statesInfos} />

                {/* 一些说明 */}
                <CGBasicInfoPartStateDescription data={data} statesInfos={statesInfos} />

                {/* 正式表格 */}
                <CGBasicInfoPartStateForm data={data} statesInfos={statesInfos} />

            </div >
        </div >
    )
}

export default CharacterGeneratorBasicInfoPart;