import './style.css';

const state = { current: 0, total: 0, transitioning: false, editMode: false, slideshowMode: false };

function init() {
    const slides = document.querySelectorAll('.slide');
    state.total = slides.length;
    buildNavDots();
    goTo(0);
    bindEvents();
    setupEditMode();
}

function buildNavDots() {
    const container = document.getElementById('nav-dots');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < state.total; i++) {
        const dot = document.createElement('button');
        dot.className = 'nav-dot';
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        container.appendChild(dot);
    }
}

function goTo(index) {
    if (index < 0 || index >= state.total || state.transitioning) return;
    state.transitioning = true;
    const slides = document.querySelectorAll('.slide');
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    state.current = index;
    updateDots();
    updateProgress();
    updateCounter();
    updateSidebar();
    setTimeout(() => { state.transitioning = false; }, 350);
}

function next() { goTo(state.current + 1); }
function prev() { goTo(state.current - 1); }

function updateDots() {
    document.querySelectorAll('.nav-dot').forEach((d, i) => d.classList.toggle('active', i === state.current));
}

function updateProgress() {
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = ((state.current + 1) / state.total * 100) + '%';
}

function updateCounter() {
    const counter = document.getElementById('slide-counter');
    if (counter) counter.textContent = `${String(state.current + 1).padStart(2, '0')} / ${String(state.total).padStart(2, '0')}`;
}

function updateSidebar() {
    document.querySelectorAll('.sidebar-item').forEach((item, i) => item.classList.toggle('active', i === state.current));
}

/* ===== SLIDESHOW MODE ===== */
function startSlideshow() {
    state.slideshowMode = true;
    document.body.classList.add('slideshow-mode');
    if (state.editMode) toggleEditMode();
    document.documentElement.requestFullscreen?.() || document.documentElement.webkitRequestFullscreen?.();
}

function exitSlideshow() {
    state.slideshowMode = false;
    document.body.classList.remove('slideshow-mode');
    if (document.fullscreenElement) document.exitFullscreen?.();
    else if (document.webkitFullscreenElement) document.webkitExitFullscreen?.();
}

/* ===== EDIT MODE ===== */
function toggleEditMode() {
    state.editMode = !state.editMode;
    document.body.classList.toggle('edit-mode', state.editMode);
    const btn = document.getElementById('btn-edit');
    if (btn) btn.classList.toggle('active', state.editMode);

    const editables = document.querySelectorAll('.editable');
    editables.forEach(el => {
        el.contentEditable = state.editMode ? 'true' : 'false';
    });

    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(el => {
        if (state.editMode) enableDrag(el);
        else disableDrag(el);
    });
}

function enableDrag(el) {
    let offsetX, offsetY, startX, startY;
    const onDown = (e) => {
        if (!state.editMode) return;
        e.preventDefault();
        const rect = el.getBoundingClientRect();
        const parentRect = el.parentElement.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        startX = rect.left - parentRect.left;
        startY = rect.top - parentRect.top;
        el.classList.add('dragging');

        const onMove = (e2) => {
            const px = e2.clientX - el.parentElement.getBoundingClientRect().left - offsetX;
            const py = e2.clientY - el.parentElement.getBoundingClientRect().top - offsetY;
            el.style.position = 'relative';
            el.style.left = (px - startX) + 'px';
            el.style.top = (py - startY) + 'px';
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
}

function disableDrag(el) {
    if (el._dragHandler) {
        el.removeEventListener('mousedown', el._dragHandler);
        delete el._dragHandler;
    }
}

function setupEditMode() {
    // Mark text elements as editable
    document.querySelectorAll('.slide-title, .slide-subtitle, .slide-label, .card-title, .card-desc, .cover-title, .cover-sub, .cover-badge, .cover-meta-value, .timeline-content, .timeline-time, .org-name, .price-name, .price-amount, .cta-button').forEach(el => {
        el.classList.add('editable');
    });
    // Mark cards and major blocks as draggable
    document.querySelectorAll('.card, .price-card, .org-card, .stat-item').forEach(el => {
        el.classList.add('draggable');
    });
}

function bindEvents() {
    document.addEventListener('keydown', (e) => {
        if (state.editMode && e.target.contentEditable === 'true') return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
        if (e.key === 'Escape') {
            if (state.slideshowMode) exitSlideshow();
            else toggleSidebar(false);
        }
    });

    let wheelTimer = null;
    document.addEventListener('wheel', (e) => {
        if (state.editMode) return;
        e.preventDefault();
        if (wheelTimer) return;
        wheelTimer = setTimeout(() => { wheelTimer = null; }, 600);
        if (e.deltaY > 0) next(); else prev();
    }, { passive: false });

    let touchStartY = 0;
    document.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; });
    document.addEventListener('touchend', (e) => {
        if (state.editMode) return;
        const diff = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    });

    const toggle = document.getElementById('sidebar-toggle');
    if (toggle) toggle.addEventListener('click', () => toggleSidebar());

    document.querySelectorAll('.sidebar-item').forEach((item, i) => {
        item.addEventListener('click', () => { goTo(i); toggleSidebar(false); });
    });

    // Control bar buttons
    const btnSlideshow = document.getElementById('btn-slideshow');
    if (btnSlideshow) btnSlideshow.addEventListener('click', startSlideshow);

    const btnEdit = document.getElementById('btn-edit');
    if (btnEdit) btnEdit.addEventListener('click', toggleEditMode);

    // Fullscreen change
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && state.slideshowMode) exitSlideshow();
    });
}

function toggleSidebar(force) {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    const isOpen = force !== undefined ? force : !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', isOpen);
}

document.addEventListener('DOMContentLoaded', init);
