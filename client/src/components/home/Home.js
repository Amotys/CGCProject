// 主页
import React from 'react';
import HomeCardsFirstBatch from './HomeCardsFirstBatch';
import HomeCardsSecondBatch from './HomeCardsSecondBatch';
import '../../App.css';
import '../../index.css';

const Home = ({ setCurrentPage, setActiveButton }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 使用平滑滚动效果
        });
    }

    return (
        <div className='container flex flex-col'>
            {/* 前五个按钮部分 */}
            <HomeCardsFirstBatch setCurrentPage={setCurrentPage} setActiveButton={setActiveButton} scrollToTop={()=>scrollToTop()} />
            
            {/* 工具栏部分 */}
            <HomeCardsSecondBatch setCurrentPage={setCurrentPage} setActiveButton={setActiveButton} scrollToTop={()=>scrollToTop()} />
            
            {/* 资讯部分 */}

        </div>
    );
}

export default Home;