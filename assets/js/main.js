/**
 * Main JavaScript - Hostal & Restaurante Aconcagua
 * Funcionalidad interactiva, renderizado del menú, cotizador WhatsApp y Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMenu();
  initRooms();
  initReservationForm();
  initLightbox();
  initFloatingWhatsApp();
  initFaqAccordion();
});

// ----------------------------------------------------
// NAVBAR & MOBILE MENU
// ----------------------------------------------------
function initNavbar() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    drawerBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileDrawer.classList.add('translate-x-full');
    drawerBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Sticky header shadow change on scroll
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('shadow-xl', 'shadow-black/40');
    } else {
      header.classList.remove('shadow-xl', 'shadow-black/40');
    }
  });
}

// ----------------------------------------------------
// MENU RENDERING & FILTERING
// ----------------------------------------------------
let activeCategory = 'destacados';

function initMenu() {
  const tabsContainer = document.getElementById('menu-tabs');
  const itemsContainer = document.getElementById('menu-items-grid');
  const searchInput = document.getElementById('menu-search-input');

  if (!tabsContainer || !itemsContainer) return;

  // Render Tabs
  tabsContainer.innerHTML = MENU_CATEGORIES.map(cat => {
    const isActive = cat.id === activeCategory;
    const count = MENU_ITEMS.filter(item => item.category === cat.id).length;
    return `
      <button 
        data-category="${cat.id}"
        class="menu-tab-btn flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
          isActive 
            ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/40 border border-amber-400/40' 
            : 'bg-[#112236] text-slate-300 hover:text-white hover:bg-[#1A3350] border border-[#1E3854]'
        }"
      >
        <i class="fas ${cat.icon} text-xs"></i>
        <span>${cat.name}</span>
        <span class="text-[11px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-amber-800/80 text-amber-200' : 'bg-slate-800 text-slate-400'}">${count}</span>
      </button>
    `;
  }).join('');

  // Add click events to tabs
  document.querySelectorAll('.menu-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      activeCategory = cat;
      updateTabsUI();
      renderMenuItems();
      if (searchInput) searchInput.value = '';
    });
  });

  // Search filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      renderMenuItems(query);
    });
  }

  // Initial render
  renderMenuItems();
}

function updateTabsUI() {
  document.querySelectorAll('.menu-tab-btn').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    const isActive = cat === activeCategory;
    const countBadge = btn.querySelector('span:last-child');
    
    if (isActive) {
      btn.className = 'menu-tab-btn flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap bg-amber-600 text-white shadow-lg shadow-amber-900/40 border border-amber-400/40';
      if (countBadge) countBadge.className = 'text-[11px] px-1.5 py-0.5 rounded-full bg-amber-800/80 text-amber-200';
    } else {
      btn.className = 'menu-tab-btn flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap bg-[#112236] text-slate-300 hover:text-white hover:bg-[#1A3350] border border-[#1E3854]';
      if (countBadge) countBadge.className = 'text-[11px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400';
    }
  });
}

function renderMenuItems(searchQuery = '') {
  const itemsContainer = document.getElementById('menu-items-grid');
  if (!itemsContainer) return;

  let filtered = MENU_ITEMS;

  if (searchQuery) {
    filtered = MENU_ITEMS.filter(item => 
      item.name.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery)))
    );
  } else {
    filtered = MENU_ITEMS.filter(item => item.category === activeCategory);
  }

  if (filtered.length === 0) {
    itemsContainer.innerHTML = `
      <div class="col-span-full text-center py-12 px-4 glass-panel rounded-2xl">
        <i class="fas fa-search text-3xl text-amber-500/50 mb-3"></i>
        <h3 class="text-lg font-serif font-bold text-white mb-1">No se encontraron platos</h3>
        <p class="text-sm text-slate-400 max-w-sm mx-auto">Prueba con otra palabra o selecciona una categoría del menú.</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = filtered.map(item => {
    const waText = encodeURIComponent(`Hola Hostal & Restaurante Aconcagua, quisiera consultar sobre el plato: "${item.name}" (${item.priceFormatted})`);
    const waUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${waText}`;

    return `
      <div class="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] hover:border-amber-500/30 group">
        ${item.image ? `
          <div class="relative h-48 w-full img-zoom-container cursor-pointer" onclick="openLightbox('${item.image}', '${item.name} - ${item.priceFormatted}')">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              loading="lazy" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#112236] via-transparent to-black/20"></div>
            ${item.badge ? `
              <span class="absolute top-3 left-3 bg-amber-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md backdrop-blur-sm">
                ${item.badge}
              </span>
            ` : ''}
            <span class="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-slate-300 text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1">
              <i class="fas fa-expand text-[10px]"></i> Ver foto
            </span>
          </div>
        ` : `
          <div class="pt-5 px-5 flex items-center justify-between">
            ${item.badge ? `
              <span class="bg-amber-600/20 text-amber-400 border border-amber-500/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                ${item.badge}
              </span>
            ` : '<span></span>'}
            <span class="text-amber-500/50"><i class="fas fa-utensils text-xs"></i></span>
          </div>
        `}

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-3 mb-2">
              <h3 class="font-serif text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                ${item.name}
              </h3>
              <span class="font-bold text-amber-400 text-lg whitespace-nowrap font-serif">
                ${item.priceFormatted}
              </span>
            </div>

            <p class="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
              ${item.description}
            </p>

            ${item.tags ? `
              <div class="flex flex-wrap gap-1.5 mb-4">
                ${item.tags.map(t => `<span class="text-[11px] bg-[#162E47] text-slate-300 px-2 py-0.5 rounded">${t}</span>`).join('')}
              </div>
            ` : ''}
          </div>

          <div class="pt-3 border-t border-[#1E3854] flex items-center justify-between">
            <span class="text-xs text-slate-400 font-medium">Restaurante Aconcagua</span>
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-500/30 transition-all"
            >
              <i class="fab fa-whatsapp"></i>
              <span>Consultar</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ----------------------------------------------------
// ROOMS RENDERING
// ----------------------------------------------------
function initRooms() {
  const container = document.getElementById('rooms-grid');
  if (!container) return;

  container.innerHTML = ROOMS_DATA.map(room => {
    const waText = encodeURIComponent(`Hola Hostal Aconcagua, deseo consultar disponibilidad para la "${room.name}" (${room.priceFormatted} por noche)`);
    const waUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${waText}`;

    return `
      <div class="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-[#1E3854] hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 group">
        <!-- Room Image -->
        <div class="relative h-64 w-full img-zoom-container cursor-pointer" onclick="openLightbox('${room.image}', '${room.name} - ${room.priceFormatted}')">
          <img 
            src="${room.image}" 
            alt="${room.name}" 
            loading="lazy" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#112236] via-transparent to-black/30"></div>
          
          <span class="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            ${room.tag}
          </span>

          <div class="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-right">
            <span class="text-xs text-slate-300 block">Tarifa por noche</span>
            <span class="text-xl font-serif font-extrabold text-amber-400">${room.priceFormatted}</span>
            <span class="text-[11px] text-slate-400"> CLP</span>
          </div>
        </div>

        <!-- Room Details -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
              ${room.name}
            </h3>

            <div class="flex items-center gap-2 text-xs text-amber-300 mb-4 bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-800/30 w-fit">
              <i class="fas fa-users"></i>
              <span>${room.capacity}</span>
            </div>

            <p class="text-sm text-slate-300 leading-relaxed mb-6">
              ${room.description}
            </p>

            <div class="space-y-2 mb-6">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Servicios Incluidos:</h4>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                ${room.amenities.map(a => `
                  <li class="flex items-center gap-2">
                    <i class="fas fa-check-circle text-amber-500 text-xs shrink-0"></i>
                    <span>${a}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <div class="pt-4 border-t border-[#1E3854] flex flex-col sm:flex-row items-center gap-3">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full sm:flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-900/30 transition-all text-sm"
            >
              <i class="fab fa-whatsapp text-lg"></i>
              <span>Reservar por WhatsApp</span>
            </a>
            <button 
              onclick="prefillReservation('hostal', '${room.name}')"
              class="w-full sm:w-auto px-4 py-3 bg-[#162E47] hover:bg-[#1E3854] text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all"
            >
              Cotizar estadía
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ----------------------------------------------------
// RESERVATION WIDGET / WHATSAPP ASSISTANT
// ----------------------------------------------------
function initReservationForm() {
  const serviceInputs = document.querySelectorAll('input[name="res-service"]');
  const dynamicFields = document.getElementById('res-dynamic-fields');
  const submitBtn = document.getElementById('res-submit-btn');

  function updateFields() {
    const selected = document.querySelector('input[name="res-service"]:checked')?.value || 'restaurante';

    if (selected === 'restaurante') {
      dynamicFields.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Fecha de la Visita</label>
            <input type="date" id="res-date" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Horario Deseado</label>
            <select id="res-time" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Almuerzo (13:00 a 15:30)">Almuerzo (13:00 a 15:30)</option>
              <option value="Tarde / After Office (17:00 a 19:30)">Tarde / After Office (17:00 a 19:30)</option>
              <option value="Cena Romántica / Noche (20:00 a 23:00)">Cena Romántica / Noche (20:00 a 23:00)</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Cantidad de Personas</label>
            <select id="res-guests" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="2 personas (Pareja)">2 personas (Pareja)</option>
              <option value="3 a 4 personas (Familia/Amigos)">3 a 4 personas (Familia/Amigos)</option>
              <option value="5 a 8 personas (Grupo)">5 a 8 personas (Grupo)</option>
              <option value="Más de 8 personas (Evento/Celebración)">Más de 8 personas (Evento/Celebración)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Ambiente Preferido</label>
            <select id="res-zone" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Salón Principal con Candelabros">Salón Principal con Candelabros</option>
              <option value="Bar & Barra de Vinos">Bar & Barra de Vinos</option>
              <option value="Terraza al Aire Libre">Terraza al Aire Libre</option>
            </select>
          </div>
        </div>
      `;
    } else if (selected === 'hostal') {
      dynamicFields.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Fecha de Check-In</label>
            <input type="date" id="res-checkin" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Fecha de Check-Out</label>
            <input type="date" id="res-checkout" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Tipo de Habitación</label>
            <select id="res-room-type" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Habitación Suite Standard ($50.000)">Habitación Suite Standard ($50.000)</option>
              <option value="Habitación Doble Suite ($50.000)">Habitación Doble Suite ($50.000)</option>
              <option value="Habitación Doble Económica ($40.000)">Habitación Doble Económica ($40.000)</option>
              <option value="Habitación Single Económica ($30.000)">Habitación Single Económica ($30.000)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">¿Desea incluir Tinaja Caliente?</label>
            <select id="res-hot-tub" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Sí, deseo consultar valor con Tinaja Caliente">Sí, me gustaría incluir Tinaja Caliente</option>
              <option value="Solo Hospedaje y Desayuno">Solo Hospedaje y Desayuno</option>
            </select>
          </div>
        </div>
      `;
    } else if (selected === 'tinaja') {
      dynamicFields.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Fecha Deseada</label>
            <input type="date" id="res-tinaja-date" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">Horario de Tinaja</label>
            <select id="res-tinaja-time" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <option value="Tarde (17:00 a 19:00)">Tarde (17:00 a 19:00)</option>
              <option value="Noche bajo las estrellas (20:00 a 22:30)">Noche bajo las estrellas (20:00 a 22:30)</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label class="block text-xs font-semibold text-slate-300 mb-1">¿Desea maridar con cena o tabla?</label>
          <select id="res-tinaja-pack" class="w-full bg-[#0D1C2D] border border-[#1E3854] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
            <option value="Pack Tinaja + Tabla de Carnes o Marina + Vinos">Pack Tinaja + Tabla + Vino del Valle</option>
            <option value="Solo uso de Tinaja Temperada">Solo uso de Tinaja Temperada</option>
          </select>
        </div>
      `;
    }

    // Set default date to today or tomorrow
    const today = new Date().toISOString().split('T')[0];
    const dateInput = dynamicFields.querySelector('input[type="date"]');
    if (dateInput) {
      dateInput.min = today;
      dateInput.value = today;
    }
  }

  serviceInputs.forEach(input => {
    input.addEventListener('change', updateFields);
  });

  updateFields();

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = document.querySelector('input[name="res-service"]:checked')?.value || 'restaurante';
      const name = document.getElementById('res-name')?.value.trim() || 'Cliente';
      const notes = document.getElementById('res-notes')?.value.trim() || '';

      let message = `*SOLICITUD DE RESERVA - HOSTAL & RESTAURANTE ACONCAGUA*\n`;
      message += `--------------------------------------\n`;
      message += `👤 *Nombre:* ${name}\n`;

      if (service === 'restaurante') {
        const date = document.getElementById('res-date')?.value || 'Por definir';
        const time = document.getElementById('res-time')?.value || '';
        const guests = document.getElementById('res-guests')?.value || '';
        const zone = document.getElementById('res-zone')?.value || '';

        message += `🍽️ *Servicio:* Mesa en Restaurante\n`;
        message += `📅 *Fecha:* ${date}\n`;
        message += `⏰ *Horario:* ${time}\n`;
        message += `👥 *Personas:* ${guests}\n`;
        message += `🏛️ *Ambiente:* ${zone}\n`;
      } else if (service === 'hostal') {
        const checkin = document.getElementById('res-checkin')?.value || 'Por definir';
        const checkout = document.getElementById('res-checkout')?.value || 'Por definir';
        const room = document.getElementById('res-room-type')?.value || '';
        const hotTub = document.getElementById('res-hot-tub')?.value || '';

        message += `🛏️ *Servicio:* Hospedaje en Hostal\n`;
        message += `📥 *Check-In:* ${checkin}\n`;
        message += `📤 *Check-Out:* ${checkout}\n`;
        message += `🏨 *Habitación:* ${room}\n`;
        message += `♨️ *Tinaja:* ${hotTub}\n`;
      } else if (service === 'tinaja') {
        const date = document.getElementById('res-tinaja-date')?.value || 'Por definir';
        const time = document.getElementById('res-tinaja-time')?.value || '';
        const pack = document.getElementById('res-tinaja-pack')?.value || '';

        message += `♨️ *Servicio:* Experiencia Tinaja Caliente\n`;
        message += `📅 *Fecha:* ${date}\n`;
        message += `⏰ *Horario:* ${time}\n`;
        message += `🍷 *Opción:* ${pack}\n`;
      }

      if (notes) {
        message += `📝 *Observaciones:* ${notes}\n`;
      }
      message += `--------------------------------------\n`;
      message += `¿Tienen disponibilidad para esta fecha? Muchas gracias.`;

      const finalUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
      window.open(finalUrl, '_blank');
    });
  }
}

// Prefill assistant from room cards
window.prefillReservation = function(serviceType, roomName) {
  const serviceRadio = document.querySelector(`input[name="res-service"][value="${serviceType}"]`);
  if (serviceRadio) {
    serviceRadio.checked = true;
    serviceRadio.dispatchEvent(new Event('change'));
  }
  
  setTimeout(() => {
    const roomSelect = document.getElementById('res-room-type');
    if (roomSelect && roomName) {
      for (let i = 0; i < roomSelect.options.length; i++) {
        if (roomSelect.options[i].text.includes(roomName)) {
          roomSelect.selectedIndex = i;
          break;
        }
      }
    }
    const section = document.getElementById('reservar');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

// ----------------------------------------------------
// LIGHTBOX MODAL
// ----------------------------------------------------
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

window.openLightbox = function(imageSrc, caption = '') {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-image');
  const modalCaption = document.getElementById('lightbox-caption');

  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  if (modalCaption) modalCaption.textContent = caption;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-image');
  if (!modal) return;
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  if (modalImg) modalImg.src = '';
  document.body.style.overflow = '';
};

// ----------------------------------------------------
// FLOATING WHATSAPP POPUP
// ----------------------------------------------------
function initFloatingWhatsApp() {
  const trigger = document.getElementById('wa-floating-btn');
  const popup = document.getElementById('wa-popup-card');
  const closePopup = document.getElementById('wa-popup-close');

  if (!trigger || !popup) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    popup.classList.toggle('hidden');
  });

  if (closePopup) {
    closePopup.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.classList.add('hidden');
    });
  }

  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !trigger.contains(e.target)) {
      popup.classList.add('hidden');
    }
  });
}

// ----------------------------------------------------
// FAQ ACCORDIONS
// ----------------------------------------------------
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-toggle-btn');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = !content.classList.contains('hidden');

      // Close other accordions
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

      if (!isExpanded) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}
