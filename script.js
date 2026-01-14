function showImage() {
    const img = document.getElementById('myImage');
    if (!img) return;
    img.classList.toggle('hide');
}

const galleries = {
    majooda: [
        'majooda.jpg'
    ],
    elaaq: [
        'elaaq.jpg'
    ],
    hamzy: [
        'hamzy.jpg'
    ],
    building: [
        'building1.jpg'
    ]
};

let currentGallery = null;

function showGallery(name, btn) {
    const galleryEl = document.getElementById('gallery');
    if (!galleryEl) return;

    // toggle active class on buttons
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));

    // إذا نفس المجموعة مفتوحة فاخفها
    if (currentGallery === name) {
        galleryEl.innerHTML = '';
        currentGallery = null;
        return;
    }

    if (btn) btn.classList.add('active');

    // افتح المجموعة الجديدة
    currentGallery = name;
    galleryEl.innerHTML = '';

    const list = galleries[name] || [];
    if (list.length === 0) {
        galleryEl.textContent = 'لا توجد صور لهذه المجموعة.';
        return;
    }

    list.forEach(src => {
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = src;
        img.alt = name;

        // افتح الصورة في lightbox عند النقر
        img.addEventListener('click', () => openLightbox(src));

        wrapper.appendChild(img);
        galleryEl.appendChild(wrapper);
    });
}

function openLightbox(src) {
    // أنشئ العنصر
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.tabIndex = 0;

    const img = document.createElement('img');
    img.src = src;
    img.alt = '';

    lb.appendChild(img);

    // إغلاق عند النقر خارج الصورة أو على الـ lightbox
    lb.addEventListener('click', (e) => {
        if (e.target === lb) document.body.removeChild(lb);
    });

    document.body.appendChild(lb);
}

// Theme functions
function setTheme(name) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(name);
    localStorage.setItem('theme', name);

    // toggle active class on theme buttons
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    const btn = name === 'light' ? document.getElementById('btn-light') : document.getElementById('btn-dark');
    if (btn) btn.classList.add('active');
}

function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
}

// run init on load
initTheme();
