import React from 'react';
import ClickableCardFirstBatch from './ClickableCardFirstBatch';
import Worldview from '../../static/images/Worldview.png';
import Race from '../../static/images/Race.png';
import Characters from '../../static/images/Characters.png';
import Geography from '../../static/images/Geography.png';
import Library from '../../static/images/Library.png';
import '../../App.css';
import '../../index.css';

const HomeCardsFirstBatch = ({ setCurrentPage, setActiveButton, scrollToTop }) => {

    const cardPadding = '1rem';

    // 按下按钮后，激活按钮，从主页选取对应的次级页面
    const buttonClick = (label) => {
        setActiveButton(label);
        setCurrentPage(label);
        scrollToTop();
    }

    return (
        < div className='container flex flex-row flex-grow' >

            {/* 第一竖列 */}
            < div className='container flex flex-col' >

                {/* 上侧 */}
                < div style={{
                    padding: cardPadding,
                }}>
                    <ClickableCardFirstBatch imageUrl={Worldview} text='简单的阐述' title='世界观' buttonClick={() => {
                        buttonClick('app_worldview');
                    }} />
                </div >

                {/* 下侧 */}
                < div style={{
                    padding: cardPadding,
                }}>
                    <ClickableCardFirstBatch imageUrl={Race} text='简单的阐述' title='世界种族' buttonClick={() => {
                        buttonClick('app_race');
                    }} />
                </div >

            </div >

            {/* 第二竖列 */}
            < div className='container' style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div style={{
                    padding: cardPadding,
                }}>
                    <ClickableCardFirstBatch imageUrl={Characters} text='简单的阐述' title='世界角色' buttonClick={() => {
                        buttonClick('app_characters');
                    }} />
                </div>
            </div >

            {/* 第三竖列 */}
            < div className='container flex flex-col' >

                {/* 上侧 */}
                < div style={{
                    padding: cardPadding,
                }}>
                    <ClickableCardFirstBatch imageUrl={Geography} text='简单的阐述' title='世界地理' buttonClick={() => {
                        buttonClick('app_geography');
                    }} />
                </div >

                {/* 下侧 */}
                < div style={{
                    padding: cardPadding,
                }}>
                    <ClickableCardFirstBatch imageUrl={Library} text='简单的阐述' title='世界百科' buttonClick={() => {
                        buttonClick('app_library');
                    }} />
                </div >

            </div >

        </div >
    );
}

export default HomeCardsFirstBatch;