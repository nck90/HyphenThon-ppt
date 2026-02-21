import React, { useRef, useEffect } from 'react';

function Slide({ index, active, content, editMode }) {
    const slideRef = useRef(null);

    useEffect(() => {
        if (!slideRef.current) return;

        const editables = slideRef.current.querySelectorAll('.slide-title, .slide-subtitle, .slide-label, .card-title, .card-desc, .cover-title, .cover-sub, .cover-badge, .cover-meta-value, .timeline-content, .timeline-time, .org-name, .price-name, .price-amount, .cta-button');
        editables.forEach(el => {
            el.contentEditable = editMode ? 'true' : 'false';
            el.classList.add('editable');
        });

        const draggables = slideRef.current.querySelectorAll('.card, .price-card, .org-card, .stat-item');
        draggables.forEach(el => {
            el.classList.add('draggable');
            if (editMode) {
                enableDrag(el);
            } else {
                disableDrag(el);
            }
        });

    }, [editMode, active, content]);

    const enableDrag = (el) => {
        if (el._dragHandler) return;

        let offsetX, offsetY, startX, startY;
        const onDown = (e) => {
            // Don't drag if we're clicking to edit text inside
            if (e.target.contentEditable === 'true') return;

            e.preventDefault();
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            // Calculate start relative position if it exists
            startX = parseFloat(el.style.left) || 0;
            startY = parseFloat(el.style.top) || 0;

            el.classList.add('dragging');

            const onMove = (e2) => {
                const dx = e2.clientX - e.clientX;
                const dy = e2.clientY - e.clientY;
                el.style.position = 'relative';
                el.style.left = (startX + dx) + 'px';
                el.style.top = (startY + dy) + 'px';
            };

            const onUp = () => {
                el.classList.remove('dragging');
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
            };

            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        };

        el._dragHandler = onDown;
        el.addEventListener('mousedown', onDown);
    };

    const disableDrag = (el) => {
        if (el._dragHandler) {
            el.removeEventListener('mousedown', el._dragHandler);
            delete el._dragHandler;
        }
        el.classList.remove('dragging');
    };

    return (
        <section
            ref={slideRef}
            className={`slide ${active ? 'active' : ''} ${content.className || ''}`}
            dangerouslySetInnerHTML={{ __html: content.html }}
        />
    );
}

export default Slide;
