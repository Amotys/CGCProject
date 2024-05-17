import React, { useState, useEffect, useRef } from 'react';
import PageComponents from './components/PageComponents';
import MainImage from './static/images/Main.png';
import MusicIcon from './static/icons/Music.png';
import AppButton from './AppButton';
import Themes from './components/Themes';
import './App.css';
import './index.css';

function App() {

    // 音乐播放器
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentPlayingTheme, setCurrentPlayingTheme] = useState(Themes.mainTheme);
    const [currentPlayingList, setCurrentPlayingList] = useState([Themes.mainTheme]);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    const audioRef = useRef(null);
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [isPlaying]);
    const switchTheme = (direction) => {
        const currentIndex = currentPlayingList.indexOf(currentPlayingTheme);
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = currentPlayingList.length - 1;
        if (newIndex >= currentPlayingList.length) newIndex = 0;
        setCurrentPlayingTheme(currentPlayingList[newIndex]);
    };
    const removeCurrentTheme = () => {
        if (currentPlayingList.length >= 2) {
            const updatedList = currentPlayingList.filter(theme => theme !== currentPlayingTheme);
            setCurrentPlayingList(updatedList);
        } else {
            console.log('无法移除当前曲目，曲目只有一首！');
        }
    };

    // 渲染哪个次级页面
    const [currentPage, setCurrentPage] = useState('app_home');

    // 本页面中哪个按钮被激活了
    const [activeButton, setActiveButton] = useState('app_home');

    // 按下按钮后，激活按钮，跳转到当前次级页面
    const buttonClick = (label) => {
        setActiveButton(label);
        setCurrentPage(label);
    }

    // 渲染次级页面
    const renderContent = () => {
        const DisplayPage = PageComponents[currentPage];
        if (DisplayPage) {
            return <DisplayPage setCurrentPage={setCurrentPage} setActiveButton={setActiveButton} />;
        } else {
            return <div>你要找的页面是{currentPage}，但该页面不存在！</div>;
        }
    };

    return (
        <div className='container flex flex-col' style={{ /* 背景图片 */
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), url(${MainImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            minHeight: '768px',
        }}>

            {/* 顶部导航条 */}
            <div className='container flex flex-row' style={{ height: '15%', }}>

                {/* 音乐盒 */}
                <div className='container test-g' style={{
                    width: '25%',
                    textAlign: 'center',
                }}>
                    <div className='flex flex-row'>
                        <img src={MusicIcon} onClick={togglePlay} style={{
                            width: '25%',
                            border: '0.3rem solid transparent',
                            margin: '0.6rem',
                            borderRadius: '50%',
                            animation: isPlaying ? 'border-color-change 10s infinite' : '',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }} />
                        <audio ref={audioRef} src={currentPlayingTheme.music} loop={true} style={{ width: '100%', }} />
                        <button onClick={() => switchTheme(-1)}>上</button>
                        <button onClick={() => switchTheme(1)}>下</button>
                        <button onClick={removeCurrentTheme}>删除</button>
                        <div>{currentPlayingTheme.title}</div>
                    </div>
                </div>

                {/* 导航栏 */}
                <div className='container flex-grow' style={{
                    alignItems: 'center',
                    display: 'flex',
                }}>

                    {/* 按钮栏 */}
                    <div className='test-b flex flex-row' style={{
                        backgroundColor: '#f9e79f',
                        textAlign: 'center',
                        margin: '0.6rem',
                        borderRadius: '2rem',
                        border: '0.2rem solid',
                        borderColor: '#186a3b',
                        overflow: 'hidden',
                        width: '100%',
                    }}>

                        {/* 主页按钮 */}
                        <AppButton label='主页' activeButton={activeButton === 'app_home'} onClick={() => {
                            buttonClick('app_home');
                        }} />

                        {/* 世界按钮 */}
                        <AppButton label='世界' activeButton={activeButton === 'app_worldview'} onClick={() => {
                            buttonClick('app_worldview');
                        }} />

                        {/* 种族按钮 */}
                        <AppButton label='种族' activeButton={activeButton === 'app_race'} onClick={() => {
                            buttonClick('app_race');
                        }} />

                        {/* 角色按钮 */}
                        <AppButton label='角色' activeButton={activeButton === 'app_characters'} onClick={() => {
                            buttonClick('app_characters');
                        }} />

                        {/* 地理按钮 */}
                        <AppButton label='地理' activeButton={activeButton === 'app_geography'} onClick={() => {
                            buttonClick('app_geography');
                        }} />

                        {/* 物产按钮 */}
                        <AppButton label='百科' activeButton={activeButton === 'app_library'} onClick={() => {
                            buttonClick('app_library');
                        }} />

                        {/* 工具按钮 */}
                        <AppButton label='工具' activeButton={activeButton === 'app_tools'} onClick={() => {
                            buttonClick('app_tools');
                        }} />

                    </div>
                </div>

            </div>

            {/* 次级内容部分 */}
            <div className='container flex flex-grow flex-col'>
                {renderContent()}
            </div>

            {/* 底部版本栏 */}
            <div className='container'>
                v1.07 @Amotys
            </div>

        </div>
    );
}

export default App;