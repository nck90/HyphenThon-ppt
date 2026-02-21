import React from 'react';

function Sidebar({ isOpen, current, slides, onGoTo }) {
    return (
        <nav id="sidebar" className={isOpen ? 'open' : ''}>
            {slides.map((slide, i) => (
                <button
                    key={i}
                    className={`sidebar-item ${i === current ? 'active' : ''}`}
                    onClick={() => onGoTo(i)}
                >
                    {slide.label || `슬라이드 ${i + 1}`}
                </button>
            ))}
        </nav>
    );
}

export default Sidebar;
