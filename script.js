// Sample property data
const properties = [
    {
        id: 1,
        title: "شقة فاخرة في الرياض",
        type: "شقة",
        price: 750000,
        location: "الرياض",
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "شقة فاخرة مع إطلالة جميلة على المدينة، تحتوي على غرف معيشة واسعة ومطبخ عصري."
    },
    {
        id: 2,
        title: "فيلا عائلية في جدة",
        type: "فيلا",
        price: 1500000,
        location: "جدة",
        bedrooms: 4,
        bathrooms: 3,
        area: 250,
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "فيلا واسعة مع حديقة خاصة ومسابح، مثالية للعائلات الكبيرة."
    },
    {
        id: 3,
        title: "منزل عصري في الدمام",
        type: "منزل",
        price: 900000,
        location: "الدمام",
        bedrooms: 3,
        bathrooms: 2,
        area: 180,
        images: [
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "منزل عصري في حي هادئ مع جميع المرافق الحديثة."
    },
    {
        id: 4,
        title: "مكتب تجاري في الرياض",
        type: "مكتب",
        price: 1200000,
        location: "الرياض",
        bedrooms: 0,
        bathrooms: 2,
        area: 150,
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "مكتب تجاري في مركز المدينة مع إطلالة على الشارع الرئيسي."
    },
    {
        id: 5,
        title: "شقة استوديو في مكة",
        type: "شقة",
        price: 400000,
        location: "مكة",
        bedrooms: 1,
        bathrooms: 1,
        area: 60,
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "شقة استوديو مثالية للعزاب مع جميع المرافق الأساسية."
    },
    {
        id: 6,
        title: "فيلا دوبلكس في المدينة المنورة",
        type: "فيلا",
        price: 2000000,
        location: "المدينة المنورة",
        bedrooms: 5,
        bathrooms: 4,
        area: 300,
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "فيلا دوبلكس مع مساحات واسعة وتصميم فاخر."
    }
];

// DOM elements
const propertyList = document.getElementById('property-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const typeFilter = document.getElementById('type-filter');
const priceFilter = document.getElementById('price-filter');
const contactForm = document.getElementById('contact-form');

// Display properties
function displayProperties(propertiesToShow) {
    propertyList.innerHTML = '';
    propertiesToShow.forEach((property, index) => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.setAttribute('data-id', property.id);
        propertyCard.innerHTML = `
            <img src="${property.images[0]}" alt="${property.title}">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p><strong>النوع:</strong> ${property.type}</p>
                <p><strong>الموقع:</strong> ${property.location}</p>
                <p><strong>الغرف:</strong> ${property.bedrooms} | <strong>الحمامات:</strong> ${property.bathrooms}</p>
                <p><strong>المساحة:</strong> ${property.area} م²</p>
                <p class="price">${property.price.toLocaleString()} ريال</p>
                <div class="property-actions">
                    <button class="btn btn-primary" onclick="openModal(${property.id})">عرض التفاصيل</button>
                    <button class="btn btn-secondary" onclick="addToFavorites(${property.id})">❤️ أعجبني</button>
                </div>
            </div>
        `;
        propertyList.appendChild(propertyCard);
    });
}

// Filter properties
function filterProperties() {
    let filtered = properties;

    // Text search
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(property =>
            property.title.toLowerCase().includes(searchTerm) ||
            property.location.toLowerCase().includes(searchTerm) ||
            property.type.toLowerCase().includes(searchTerm)
        );
    }

    // Type filter
    const typeValue = typeFilter.value;
    if (typeValue) {
        filtered = filtered.filter(property => property.type === typeValue);
    }

    // Price filter
    const priceValue = priceFilter.value;
    if (priceValue) {
        if (priceValue === '0-500000') {
            filtered = filtered.filter(property => property.price < 500000);
        } else if (priceValue === '500000-1000000') {
            filtered = filtered.filter(property => property.price >= 500000 && property.price <= 1000000);
        } else if (priceValue === '1000000+') {
            filtered = filtered.filter(property => property.price > 1000000);
        }
    }

    displayProperties(filtered);
}

// Event listeners
searchBtn.addEventListener('click', filterProperties);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterProperties();
    }
});

typeFilter.addEventListener('change', filterProperties);
priceFilter.addEventListener('change', filterProperties);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً لك! تم إرسال رسالتك بنجاح.');
    contactForm.reset();
});

// Modal functionality
const modal = document.getElementById('propertyModal');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalLocation = document.getElementById('modalLocation');
const modalBedrooms = document.getElementById('modalBedrooms');
const modalBathrooms = document.getElementById('modalBathrooms');
const modalArea = document.getElementById('modalArea');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalMainImage = document.getElementById('modalMainImage');
const modalThumbnails = document.getElementById('modalThumbnails');

function openModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    modalTitle.textContent = property.title;
    modalType.textContent = property.type;
    modalLocation.textContent = property.location;
    modalBedrooms.textContent = property.bedrooms;
    modalBathrooms.textContent = property.bathrooms;
    modalArea.textContent = property.area;
    modalPrice.textContent = property.price.toLocaleString() + ' ريال';
    modalDescription.textContent = property.description;

    // Set main image
    modalMainImage.src = property.images[0];

    // Create thumbnails
    modalThumbnails.innerHTML = '';
    property.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.onclick = () => changeMainImage(image, thumbnail);
        modalThumbnails.appendChild(thumbnail);
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function changeMainImage(imageSrc, thumbnailElement) {
    modalMainImage.src = imageSrc;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnailElement.classList.add('active');
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside or on close button
modal.onclick = function(event) {
    if (event.target === modal || event.target.classList.contains('close')) {
        closeModal();
    }
}

// Favorites functionality
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function addToFavorites(propertyId) {
    const index = favorites.indexOf(propertyId);
    if (index === -1) {
        favorites.push(propertyId);
        showNotification('تم إضافة العقار إلى المفضلة!', 'success');
    } else {
        favorites.splice(index, 1);
        showNotification('تم إزالة العقار من المفضلة!', 'info');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
    updateFavoritesCount();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.property-card').forEach(card => {
        const propertyId = parseInt(card.getAttribute('data-id'));
        const button = card.querySelector('.btn-secondary');
        if (favorites.includes(propertyId)) {
            button.textContent = '💖 في المفضلة';
            button.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
        } else {
            button.textContent = '❤️ أعجبني';
            button.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
        }
    });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1001;
        animation: slideInRight 0.3s ease-out;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

function shareProperty() {
    const title = modalTitle.textContent;
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        });
    } else {
        navigator.clipboard.writeText(`${title} - ${url}`).then(() => {
            showNotification('تم نسخ الرابط!', 'success');
        });
    }
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

function showFavorites() {
    const favoriteProperties = properties.filter(property => favorites.includes(property.id));
    displayProperties(favoriteProperties);
    document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
}

// Update favorites count
function updateFavoritesCount() {
    document.getElementById('favoritesCount').textContent = favorites.length;
}

// Initial display and setup
displayProperties(properties);
updateFavoriteButtons();
updateFavoritesCount();