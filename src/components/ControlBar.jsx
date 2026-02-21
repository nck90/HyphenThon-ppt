import React from 'react';

function ControlBar({ editMode, onToggleEdit, onStartSlideshow }) {
    return (
        <div id="control-bar">
            <button
                className={`ctrl-btn ${editMode ? 'active' : ''}`}
                id="btn-edit"
                onClick={onToggleEdit}
            >
                Edit
            </button>
            <button
                className="ctrl-btn"
                id="btn-slideshow"
                onClick={onStartSlideshow}
            >
                Slideshow
            </button>
        </div>
    );
}

export default ControlBar;
