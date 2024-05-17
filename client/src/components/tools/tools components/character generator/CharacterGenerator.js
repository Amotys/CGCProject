// 角色生成器
import React, { useState } from 'react';
import ToolViewTitlePart from '../ToolViewTitlePart';
import PageComponents from '../../../PageComponents';

const CharacterGenerator = ({ setCurrentPage, imageUrl, title, text }) => {
    const [currentStep, setCurrentStep] = useState('character_generator_type_part');
    const [data, setData] = useState({
        typePart: '',
        racePart: '',
        basicInfoPart: {
        },
    });
    const renderStep = () => {
        const DisplayPage = PageComponents[currentStep];
        if (DisplayPage) {
            return <DisplayPage setCurrentStep={setCurrentStep} data={data} setData={setData} />;
        } else {
            return <div>该角色生成器步骤是{currentStep}，但该步骤不存在！</div>;
        }
    };

    return (
        <div className='container'>
            <ToolViewTitlePart imageUrl={imageUrl} title={title} text={text} />

            {/* 生成器本体，按步骤执行 */}
            {renderStep()}
        </div>
    );
}

export default CharacterGenerator;