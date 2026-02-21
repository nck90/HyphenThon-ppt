import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ControlBar from './components/ControlBar';
import Slide from './components/Slide';
import slidesData from './data/slidesData';

function App() {
    const [current, setCurrent] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [slideshowMode, setSlideshowMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [transitioning, setTransitioning] = useState(false);
    const [data, setData] = useState(slidesData);

    const total = data.length;

    const goTo = (index) => {
        if (index < 0 || index >= total || transitioning) return;
        setTransitioning(true);
        setCurrent(index);
        setTimeout(() => {
            setTransitioning(false);
        }, 350);
    };

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    // Fullscreen logic
    const startSlideshow = () => {
        setSlideshowMode(true);
        if (editMode) setEditMode(false);
        document.documentElement.requestFullscreen?.() || document.documentElement.webkitRequestFullscreen?.();
    };

    const exitSlideshow = () => {
        setSlideshowMode(false);
        if (document.fullscreenElement) {
            document.exitFullscreen?.() || document.webkitExitFullscreen?.();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (editMode && (e.target.contentEditable === 'true' || e.target.tagName === 'INPUT')) return;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                next();
            }
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                prev();
            }
            if (e.key === 'Escape') {
                if (slideshowMode) exitSlideshow();
                else setSidebarOpen(false);
            }
        };

        const handleWheel = (e) => {
            if (editMode) return;
            if (transitioning) return;
            if (e.deltaY > 0) next();
            else prev();
        };

        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                setSlideshowMode(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheel);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [current, editMode, slideshowMode, transitioning]);

    const updateSlideData = (slideIdx, field, value) => {
        const newData = [...data];
        // In a real app, we'd find the specific nested element. 
        // For now, we'll let the contentEditable work on the DOM 
        // but if we wanted to persist, we'd update the state here.
        // However, making every single text bit a controlled component might be overkill 
        // for a simple PPT migrator. We'll use a hybrid approach or just let it stay in DOM.
    };

    return (
        <div className={`app-root ${editMode ? 'edit-mode' : ''} ${slideshowMode ? 'slideshow-mode' : ''}`}>
            <div id="progress-bar" style={{ width: `${((current + 1) / total) * 100}%` }}></div>

            {!slideshowMode && (
                <>
                    <ControlBar
                        editMode={editMode}
                        onToggleEdit={() => setEditMode(!editMode)}
                        onStartSlideshow={startSlideshow}
                    />
                    <button id="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen ? 'Close' : 'Menu'}
                    </button>
                    <Sidebar
                        isOpen={sidebarOpen}
                        current={current}
                        slides={data}
                        onGoTo={(idx) => { goTo(idx); setSidebarOpen(false); }}
                    />
                    <div className="edit-indicator">
                        {editMode ? 'Edit Mode — Click text to edit, drag cards to move' : ''}
                    </div>
                    <div id="nav-dots">
                        {data.map((_, i) => (
                            <div
                                key={i}
                                className={`dot ${i === current ? 'active' : ''}`}
                                onClick={() => goTo(i)}
                            ></div>
                        ))}
                    </div>
                    <div id="slide-counter">
                        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </div>
                </>
            )}

            <div id="slides-container">
                {data.map((slide, i) => (
                    <Slide
                        key={i}
                        index={i}
                        active={i === current}
                        content={slide}
                        editMode={editMode}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
