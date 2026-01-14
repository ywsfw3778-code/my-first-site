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

function showGallery(name) {
    const galleryEl = document.getElementById('gallery');
    if (!galleryEl) return;

    // إذا نفس المجموعة مفتوحة فاخفها
    if (currentGallery === name) {
        galleryEl.innerHTML = '';
        currentGallery = null;
        return;
    }

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

        wrapper.appendChild(img);
        galleryEl.appendChild(wrapper);
    });
}
