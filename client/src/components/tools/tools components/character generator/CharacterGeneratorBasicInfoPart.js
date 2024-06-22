import React, { useState, useEffect } from "react";
import { getImageUrl, getIntroInfo, getStatesInfo } from './CharacterGeneratorFuntions';
import CGBasicInfoPartRaceIntro from './CGBasicInfoPartRaceIntro';
import CGBasicInfoPartStateTable from './CGBasicInfoPartStateTable';
import CGBasicInfoPartStateDescription from './CGBasicInfoPartStateDescription';
import CGBasicInfoPartStateForm from './CGBasicInfoPartStateForm';
import CGButton from './CGButton';
import CGAlert from './CGAlert';

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

    const [formStates, setFormStates] = useState(
        {
            name: '',
            age: '',
            gender: '',
            sizeFactor: '',
            experience: '',
            strength: '',
            constitution: '',
            agility: '',
            willpower: '',
            intelligence: '',
            power: '',
            appearance: '',
            luck: '',
        }
    )
    const [errorMessage, setErrorMessage] = useState(
        {
            name: '名字尚未填完！',
            age: '年龄尚未填完！',
            gender: '性别尚未选择！',
            sizeFactor: '体积指数尚未填完！',
            experience: '阅历尚未填完！',
            strength: '力量属性尚未填完！',
            constitution: '体质属性尚未填完！',
            agility: '灵巧属性尚未填完！',
            willpower: '意志属性尚未填完！',
            intelligence: '智慧属性尚未填完！',
            power: '魔力属性尚未填完！',
            appearance: '魅力属性尚未填完！',
            luck: '幸运属性尚未填完！',
        }
    )
    const nextPage = () => {
        const allValid = !(Object.values(errorMessage).some(value => value.includes('尚未') || value.includes('必须') || value.includes('不')))
        const scrollToDiv = (divId) => {
            const componentNode = document.getElementById(divId)
            if (componentNode) { componentNode.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
        }
        if (allValid) { setCurrentStep('character_generator_advanced_info_part') }
        else {
            setIsVisible(true)
            scrollToDiv('CGBP_form_part_div')
        }
    }
    const backPage = () => {
        const newData = {
            ...data,
            'racePart': '',
        }
        setData(newData);
        setCurrentStep('character_generator_race_part');
    }

    const [isVisible, setIsVisible] = useState(false)           // 警告信息是否可见

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
                <div className="container" id='CGBP_form_part_div'>
                    <CGBasicInfoPartStateForm data={data} statesInfos={statesInfos} formStates={formStates} setFormStates={setFormStates}
                        errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
                </div>

                {/* 警告组件 */}
                <CGAlert isVisible={isVisible} setIsVisible={setIsVisible} />

            </div >

            <div className="container flex flex-row" style={{
                paddingTop: '2rem',
            }}>
                <div style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <CGButton label={'上一步'} onClick={() => backPage()} />
                </div>
                <div style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <CGButton label={'下一步'} onClick={() => nextPage()} />
                </div>
            </div>
        </div >
    )
}

export default CharacterGeneratorBasicInfoPart;