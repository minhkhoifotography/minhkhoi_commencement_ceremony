const photoFolders = [
    {
        name: "Lễ Tốt Nghiệp",
        photos: [
            { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400", title: "LeTotNghiep.jpg" },
            { url: "https://images.unsplash.com/photo-1541339907198-e08756defe2e?w=400", title: "KyNiem.jpg" }
        ]
    },
    {
        name: "Bạn Bè",
        photos: [
            { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400", title: "BanBe.jpg" }
        ]
    }
];

function renderGallery(filter = "") {
    const container = document.getElementById('gallery-container');
    const fragment = document.createDocumentFragment();
    
    const filtered = photoFolders.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()));
    
    filtered.forEach(folder => {
        const div = document.createElement('div');
        div.className = 'folder-section';
        let photosHtml = folder.photos.map(p => `
            <div class="photo-card">
                <img src="${p.url}" loading="lazy" decoding="async">
                <div class="photo-info">${p.title}</div>
            </div>`).join('');
            
        div.innerHTML = `<h3>📂 ${folder.name}</h3><div class="gallery">${photosHtml}</div>`;
        fragment.appendChild(div);
    });

    container.innerHTML = "";
    container.appendChild(fragment);
}

function filterGallery() {
    const term = document.getElementById('gallerySearch').value;
    renderGallery(term);
}

window.onload = () => renderGallery();
