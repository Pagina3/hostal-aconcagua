/**
 * Datos oficiales del Menú y Habitaciones - Hostal & Restaurante Aconcagua
 * La Ligua, V Región de Valparaíso, Chile
 */

const MENU_CATEGORIES = [
  { id: 'destacados', name: '⭐ Destacados', icon: 'fa-award' },
  { id: 'compartir', name: '🥢 Para Compartir', icon: 'fa-utensils' },
  { id: 'tablas_ensaladas', name: '🥗 Tablas & Ensaladas', icon: 'fa-seedling' },
  { id: 'principales', name: '🥩 Platos Principales', icon: 'fa-fire' },
  { id: 'sandwiches', name: '🍔 Sándwiches & Burgers', icon: 'fa-burger' },
  { id: 'cocteleria_vinos', name: '🍸 Vinos & Coctelería', icon: 'fa-wine-glass-alt' },
  { id: 'postres', name: '🍰 Postres & Cafetería', icon: 'fa-ice-cream' }
];

const MENU_ITEMS = [
  // --- DESTACADOS ---
  {
    id: 'm1',
    category: 'destacados',
    name: 'Tartar de Atún con Queso de Cabra',
    price: 13000,
    priceFormatted: '$13.000',
    description: 'Finos cortes de lomo de atún fresco, coronado con queso de cabra artesanal, aderezado con alcaparras, pan tostado, palta y toque de aceite de ajonjolí.',
    badge: 'Favorito del Chef',
    image: 'assets/img/dish-tartar-atun.jpg',
    tags: ['Mariscos', 'Gourmet', 'Fresco']
  },
  {
    id: 'm2',
    category: 'destacados',
    name: 'Filete de Salmón al Grill con Frutos del Mar',
    price: 15500,
    priceFormatted: '$15.500',
    description: 'Generoso filete de salmón fresco cocido al grill, napado con una reducción marina de calamar y camarones, acompañado de risotto cremoso de champiñones.',
    badge: 'Plato Insignia',
    image: 'assets/img/dish-salmon-mariscos.jpg',
    tags: ['Salmón', 'Risotto', 'Mariscos']
  },
  {
    id: 'm3',
    category: 'destacados',
    name: 'Rack de Costillas de Cerdo BBQ (Dos Sabores)',
    price: 12500,
    priceFormatted: '$12.500',
    description: 'Tiernas costillas de cerdo en corte rack bañadas con nuestra salsa BBQ secreta de la casa, servidas con papas fritas crujientes y dip agridulce.',
    badge: 'Imperdible',
    image: 'assets/img/dish-costillas-bbq.jpg',
    tags: ['Carnes', 'BBQ', 'Crocante']
  },
  {
    id: 'm4',
    category: 'destacados',
    name: 'Lomo de Res Blue Jazz con Risotto Cremoso',
    price: 15000,
    priceFormatted: '$15.000',
    description: 'Fino corte de vacuno sellado a punto, napado en salsa aterciopelada de queso azul y rúcula fresca, acompañado sobre suave risotto cremoso.',
    badge: 'Especialidad',
    image: 'assets/img/dish-lomo-risotto.jpg',
    tags: ['Vacuno', 'Queso Azul', 'Risotto']
  },
  {
    id: 'm5',
    category: 'destacados',
    name: 'Rollitos de Vegetales Salteados (8 unidades)',
    price: 12000,
    priceFormatted: '$12.000',
    description: 'Frescos rollitos envueltos en finas hojas de arroz, rellenos de verduras crocantes salteadas al wok con sésamo, servidos con salsa agridulce de durazno y soya.',
    badge: 'Vegetariano',
    image: 'assets/img/dish-rollitos-arroz.jpg',
    tags: ['Vegetariano', 'Saludable', 'Entrada']
  },
  {
    id: 'm6',
    category: 'destacados',
    name: 'Ensalada de los Valles de Aconcagua',
    price: 9000,
    priceFormatted: '$9.000',
    description: 'Mezclum seleccionado de lechugas hidropónicas, tomates deshidratados, nueces tostadas, láminas de queso parmesano y supremas de naranja con vinagreta balsámica.',
    badge: 'De la Huerta',
    image: 'assets/img/dish-ensalada-valles.jpg',
    tags: ['Fresco', 'Nueces', 'Cítrico']
  },

  // --- PARA COMPARTIR ---
  {
    id: 'c1',
    category: 'compartir',
    name: 'Tartar de Salmón con Rúcula y Vegetales',
    price: 13000,
    priceFormatted: '$13.000',
    description: 'Tartar de salmón fresco coronado con rúcula silvestre y vegetales salteados (zanahoria y pimientos marinados con salsa de soya tradicional).',
    badge: 'Entrada Fría',
    image: null,
    tags: ['Salmón', 'Fresco']
  },
  {
    id: 'c2',
    category: 'compartir',
    name: 'Tartar de Atún con Queso de Cabra',
    price: 13000,
    priceFormatted: '$13.000',
    description: 'Finos cortes de lomo de atún, coronado con queso de cabra, aderezado con alcaparras, pan, palta y aceite de ajonjolí.',
    badge: 'Recomendado',
    image: 'assets/img/dish-tartar-atun.jpg',
    tags: ['Atún', 'Queso Cabra']
  },
  {
    id: 'c3',
    category: 'compartir',
    name: 'Tuna Tataki Abrazado con Sésamo',
    price: 14000,
    priceFormatted: '$14.000',
    description: 'Tajadas de atún selladas y abrazadas en sésamo tostado, acompañadas con puré de plátano maduro caramelizado y ensalada china aromática.',
    badge: 'Fusión',
    image: null,
    tags: ['Atún', 'Oriental']
  },
  {
    id: 'c4',
    category: 'compartir',
    name: 'Papas Coltrane con Mechada y Cheddar',
    price: 13000,
    priceFormatted: '$13.000',
    description: 'Abundante porción de papas fritas rústicas, ciboulette, baño de queso cheddar fundido, carne mechada de vacuno desmechada a fuego lento y crema agria.',
    badge: 'Ideal para 2-3',
    image: null,
    tags: ['Papas', 'Mechada', 'Cheddar']
  },
  {
    id: 'c5',
    category: 'compartir',
    name: 'Rollitos de Hojas de Arroz con Salsa Durazno (8u)',
    price: 12000,
    priceFormatted: '$12.000',
    description: 'Frescos rollitos de hojas de arroz rellenas de vegetales salteados, acompañados con salsa agridulce casera de durazno y salsa de soya.',
    badge: 'Vegetariano',
    image: 'assets/img/dish-rollitos-arroz.jpg',
    tags: ['Rollitos', '8 unidades']
  },

  // --- TABLAS & ENSALADAS ---
  {
    id: 't1',
    category: 'tablas_ensaladas',
    name: 'Tabla Marina Especial Aconcagua',
    price: 24000,
    priceFormatted: '$24.000',
    description: 'Dúo de cebiches frescos (salmón y pescado blanco del día), calamares a la romana, timbal de atún sellado, chicharrón crocante de pescado, camote glaseado, maíz frito y pan al ajillo.',
    badge: 'Para 2 a 3 personas',
    image: null,
    tags: ['Mariscos', 'Cebiche', 'Para Compartir']
  },
  {
    id: 't2',
    category: 'tablas_ensaladas',
    name: 'Tabla Vegetariana Rústica',
    price: 18500,
    priceFormatted: '$18.500',
    description: 'Hummus de garbanzos cremoso, hummus de berenjena ahumada, tomatitos cherry salteados, vegetales salteados de estación, champiñones al romero y láminas de parmesano con tostadas al ajillo.',
    badge: '100% Vegetariano',
    image: null,
    tags: ['Vegetariano', 'Hummus', 'Saludable']
  },
  {
    id: 't3',
    category: 'tablas_ensaladas',
    name: 'Tabla de Carnes Mixtas',
    price: 24000,
    priceFormatted: '$24.000',
    description: 'Cortes seleccionados de carne de res, filete de pollo marinado y lomo de cerdo salteados con verduras al wok, acompañados de quesadillas calientes, salsa de palta, crema agria y papas fritas.',
    badge: 'Para Compartir',
    image: 'assets/img/dish-pollo-salteado.jpg',
    tags: ['Vacuno', 'Cerdo', 'Pollo', 'Quesadillas']
  },
  {
    id: 't4',
    category: 'tablas_ensaladas',
    name: 'Ensalada Quinoa Crazy',
    price: 9000,
    priceFormatted: '$9.000',
    description: 'Quinoa andina aderezada con aceite de oliva extra virgen, tamarindo, remolacha y nueces crocantes, coronada con tortillas de maíz crujientes y queso crema.',
    badge: 'Superfood',
    image: null,
    tags: ['Quinoa', 'Nutritiva']
  },
  {
    id: 't5',
    category: 'tablas_ensaladas',
    name: 'Ensalada de los Valles',
    price: 9000,
    priceFormatted: '$9.000',
    description: 'Mezclum de hojas verdes, tomates deshidratados, nuez de la zona, queso parmesano en hebras y gajos de naranja natural, aderezadas con vinagreta balsámica.',
    badge: 'Frescura Local',
    image: 'assets/img/dish-ensalada-valles.jpg',
    tags: ['Cítrica', 'Ensalada']
  },
  {
    id: 't6',
    category: 'tablas_ensaladas',
    name: 'Ensalada de Pera Azul',
    price: 9000,
    priceFormatted: '$9.000',
    description: 'Mix de hojas verdes y brotes tiernos de espinaca, láminas de pera pochada, queso azul intenso y nueces tostadas, aderezados con miel y jengibre fresco.',
    badge: 'Gourmet',
    image: null,
    tags: ['Queso Azul', 'Pera', 'Miel']
  },

  // --- PLATOS PRINCIPALES ---
  {
    id: 'p1',
    category: 'principales',
    name: 'Rack Costillas de Cerdo Dos Sabores BBQ',
    price: 12500,
    priceFormatted: '$12.500',
    description: 'Costilla de cerdo en rack napada generosamente con salsa BBQ artesanal, acompañada de papas fritas doradas y pocillo de salsa agridulce.',
    badge: 'Carne Seleccionada',
    image: 'assets/img/dish-costillas-bbq.jpg',
    tags: ['Cerdo', 'BBQ', 'Papas']
  },
  {
    id: 'p2',
    category: 'principales',
    name: 'Filete de Salmón al Grill con Salsa de Frutos del Mar',
    price: 15500,
    priceFormatted: '$15.500',
    description: 'Filete de salmón fresco cocido a la parrilla, salseado con frutos del mar (camarones ecuatorianos y anillos de calamar), acompañado de risotto de champiñones.',
    badge: 'Recomendación Marina',
    image: 'assets/img/dish-salmon-mariscos.jpg',
    tags: ['Salmón', 'Mariscos', 'Risotto']
  },
  {
    id: 'p3',
    category: 'principales',
    name: 'Risotto de Camarones al Parmesano',
    price: 13500,
    priceFormatted: '$13.500',
    description: 'Arroz arborio italiano cocinado a fuego lento con vino blanco, mantequilla y queso parmesano grana padano, coronado con camarones salteados al ajillo.',
    badge: 'Cremoso',
    image: null,
    tags: ['Arborio', 'Camarones', 'Parmesano']
  },
  {
    id: 'p4',
    category: 'principales',
    name: 'Risotto de Champiñones Naturales',
    price: 12500,
    priceFormatted: '$12.500',
    description: 'Arroz arborio tradicional ligado con queso parmesano y hierbas aromáticas, coronado con variedad de champiñones naturales salteados al vino blanco.',
    badge: 'Vegetariano',
    image: null,
    tags: ['Champiñones', 'Risotto', 'Vegetariano']
  },
  {
    id: 'p5',
    category: 'principales',
    name: 'Lomo de Atún Sellado con Ajonjolí sobre Vegetales al Wok',
    price: 15000,
    priceFormatted: '$15.000',
    description: 'Fresco medallón de lomo de atún con costra crocante de semillas de ajonjolí blanco y negro, servido sobre abundante cama de verduras salteadas al wok con toques de soya.',
    badge: 'Atún Rojo',
    image: null,
    tags: ['Atún', 'Wok', 'Sésamo']
  },
  {
    id: 'p6',
    category: 'principales',
    name: 'Suprema de Pollo al Grill con Finas Hierbas',
    price: 12500,
    priceFormatted: '$12.500',
    description: 'Jugosa pechuga de pollo marinada con romero y ajo asado, cocida a punto al grill, acompañada de papas fritas rústicas y salsa de la casa.',
    badge: 'Clásico',
    image: 'assets/img/dish-pollo-salteado.jpg',
    tags: ['Pollo', 'Grill', 'Romero']
  },
  {
    id: 'p7',
    category: 'principales',
    name: 'Lomo de Res 3 Pimientas con Puré Cremoso',
    price: 15000,
    priceFormatted: '$15.000',
    description: 'Fino corte de lomo de vacuno vetado, bañado con salsa demi-glace a las 3 pimientas enteras tostadas, acompañado de puré de papas suave y cremoso.',
    badge: 'Corte Premium',
    image: 'assets/img/dish-lomo-carne.jpg',
    tags: ['Vacuno', 'Pimienta', 'Puré']
  },
  {
    id: 'p8',
    category: 'principales',
    name: 'Lomo de Res Blue Jazz sobre Risotto',
    price: 15000,
    priceFormatted: '$15.000',
    description: 'Medallón de lomo vetado cubierto con cremosa salsa de queso azul y hojas de rúcula silvestre, servido sobre risotto cremoso al parmesano.',
    badge: 'Sabor Intenso',
    image: 'assets/img/dish-lomo-risotto.jpg',
    tags: ['Vacuno', 'Queso Azul', 'Risotto']
  },

  // --- SÁNDWICHES & RÁPIDOS ---
  {
    id: 's1',
    category: 'sandwiches',
    name: 'Sándwich de Mechada con Papas Fritas',
    price: 12000,
    priceFormatted: '$12.000',
    description: 'Generosa carne mechada de vacuno cocinada por horas sobre pan baguette crocante, bañada en crema de queso fundido, tomate fresco y lechuga, con papas fritas.',
    badge: 'El Más Pedido',
    image: null,
    tags: ['Mechada', 'Baguette', 'Queso Fundido']
  },
  {
    id: 's2',
    category: 'sandwiches',
    name: 'Hamburguesa Blue Jazz Artesanal',
    price: 12000,
    priceFormatted: '$12.000',
    description: 'Hamburguesa casera de vacuno en suave pan brioche tostado con mantequilla, bañada en queso azul derretido, cebolla caramelizada, champiñones, pepinillos y papas.',
    badge: 'Burger Gourmet',
    image: null,
    tags: ['Brioche', 'Queso Azul', 'Caramelizada']
  },
  {
    id: 's3',
    category: 'sandwiches',
    name: 'Sándwich Granjero con Pechuga Apanada',
    price: 12000,
    priceFormatted: '$12.000',
    description: 'Crujiente pechuga de pollo apanada estilo sureño, bañada en crema de queso fundido, tomate en rodajas, pepinillo agridulce y lechuga fresca con papas fritas.',
    badge: 'Crocante',
    image: null,
    tags: ['Pollo Crispy', 'Papas']
  },
  {
    id: 's4',
    category: 'sandwiches',
    name: 'Wraps de Pollo a la Plancha con Papas',
    price: 12000,
    priceFormatted: '$12.000',
    description: 'Fajitas de pechuga de pollo salteada en cama de lechuga fresca sobre tortilla de trigo caliente a la plancha con aderezo especial y papas fritas.',
    badge: 'Ligero & Rico',
    image: null,
    tags: ['Wrap', 'Pollo', 'Papas']
  },
  {
    id: 's5',
    category: 'sandwiches',
    name: 'Wraps de Vegetales Salteados con Papas',
    price: 12000,
    priceFormatted: '$12.000',
    description: 'Vegetales seleccionados salteados al wok sobre tortilla de trigo a la plancha, lechuga crocante y papas fritas caseras.',
    badge: 'Vegetariano',
    image: null,
    tags: ['Wrap', 'Vegetales']
  },

  // --- POSTRES ---
  {
    id: 'd1',
    category: 'postres',
    name: 'Helado Frito Aconcagua',
    price: 5500,
    priceFormatted: '$5.500',
    description: 'Esfera de helado cremosa envuelta en crujiente costra frita caliente, creando un contraste frío-calor inolvidable, con fresas frescas y salsa de frutos rojos.',
    badge: 'Especialidad Dulce',
    image: null,
    tags: ['Helado', 'Frutos Rojos', 'Caliente-Frío']
  },
  {
    id: 'd2',
    category: 'postres',
    name: 'Tiramisú Tradicional de la Casa',
    price: 6000,
    priceFormatted: '$6.000',
    description: 'Postre italiano con capas de galletas soletillas embebidas en café expreso recién colado y licor, entrelazadas con suave crema mascarpone y cacao en polvo.',
    badge: 'Clásico Italiano',
    image: null,
    tags: ['Café', 'Mascarpone', 'Cacao']
  },
  {
    id: 'd3',
    category: 'postres',
    name: 'Volcán de Chocolate Tibio',
    price: 6000,
    priceFormatted: '$6.000',
    description: 'Bizcocho tibio de chocolate amargo al 70% con corazón de chocolate fundido que fluye al cortar, acompañado de una bola de helado artesanal.',
    badge: 'Chocolateros',
    image: null,
    tags: ['Chocolate', 'Fondant']
  },

  // --- TRAGOS DE AUTOR & VINOS ---
  {
    id: 'w1',
    category: 'cocteleria_vinos',
    name: 'Trago de Autor: Alcázar',
    price: 7000,
    priceFormatted: '$7.000',
    description: 'Gin Orange perfumado, Aperol vibrante y chispeante ginger beer con toque cítrico.',
    badge: 'Autor',
    image: null,
    tags: ['Gin', 'Aperol', 'Refrescante']
  },
  {
    id: 'w2',
    category: 'cocteleria_vinos',
    name: 'Trago de Autor: Gentil Dubois',
    price: 7000,
    priceFormatted: '$7.000',
    description: 'Vodka importado, vermouth blanco seco, licor Cointreau de naranja y reducción artesanal de jarabe de uva Merlot.',
    badge: 'Autor',
    image: null,
    tags: ['Vodka', 'Merlot', 'Cointreau']
  },
  {
    id: 'w3',
    category: 'cocteleria_vinos',
    name: 'Trago de Autor: Scarlet Rose’s',
    price: 7000,
    priceFormatted: '$7.000',
    description: '"Para reparar las almas rotas y hacer del momento una fiesta": Gin Pink floral, Campari italiano y jarabe de rosas artesanal.',
    badge: 'Exclusivo',
    image: null,
    tags: ['Gin Pink', 'Rosas', 'Floral']
  },
  {
    id: 'w4',
    category: 'cocteleria_vinos',
    name: 'Trago de Autor: Olimpiako’s',
    price: 7500,
    priceFormatted: '$7.500',
    description: 'Frescura que llega al olimpo con licor Malibú, Amaretto Disaronno, crema de coco sedosa y coulis tropical de piña dulce.',
    badge: 'Tropical',
    image: null,
    tags: ['Coco', 'Piña', 'Malibu']
  },
  {
    id: 'w5',
    category: 'cocteleria_vinos',
    name: 'Pisco Sour Catedral Tradicional',
    price: 7000,
    priceFormatted: '$7.000',
    description: 'Preparado con pisco chileno seleccionado, zumo de limón de pica natural exprimido al minuto, goma y amargo de angostura.',
    badge: 'Tradición Chilena',
    image: null,
    tags: ['Pisco Chileno', 'Limón Natural']
  },
  {
    id: 'w6',
    category: 'cocteleria_vinos',
    name: 'Pisco Mango Sour Catedral',
    price: 7000,
    priceFormatted: '$7.000',
    description: 'Deliciosa variante con pulpa de mango tropical maduro, pisco chileno aromático y jugo de limón natural.',
    badge: 'Tropical',
    image: null,
    tags: ['Mango', 'Pisco']
  },
  {
    id: 'w7',
    category: 'cocteleria_vinos',
    name: 'Moscow Mule / Mai Tai / Mojito Cubano',
    price: 7500,
    priceFormatted: '$7.500',
    description: 'Cócteles internacionales preparados con licores de primera línea, menta fresca del huerto y cítricos naturales.',
    badge: 'Coctelería Clásica',
    image: null,
    tags: ['Clásicos', 'Ginger Beer']
  },
  {
    id: 'w8',
    category: 'cocteleria_vinos',
    name: 'Vino Carmenere Gran Reserva 2019 (In Situ - Valle Aconcagua)',
    price: 19000,
    priceFormatted: '$19.000',
    description: 'Vino tinto de cepa emblemática del Valle de Aconcagua, cuerpo elegante, notas a mora, especias dulces y taninos sedosos.',
    badge: 'Valle de Aconcagua',
    image: null,
    tags: ['Vino Tinto', 'Valle Aconcagua']
  },
  {
    id: 'w9',
    category: 'cocteleria_vinos',
    name: 'Vino Cabernet Sauvignon Gran Reserva (In Situ)',
    price: 18000,
    priceFormatted: '$18.000',
    description: 'Estructura profunda, crianza en roble, notas a cassis y frutos rojos maduros, ideal para maridar con carnes y tablas.',
    badge: 'Gran Reserva',
    image: null,
    tags: ['Cabernet', 'Crianza']
  },
  {
    id: 'w10',
    category: 'cocteleria_vinos',
    name: 'Cervezas Artesanales Locales Pipo’s (500 cc)',
    price: 4000,
    priceFormatted: '$4.000',
    description: 'Variedades de la cervecería artesanal de la zona: Porter tostada, Preludio Irish Red Ale, Doña Catalina Witbier y Blonde Ale La Chorreada.',
    badge: 'Producción Local',
    image: null,
    tags: ['Artesanal', '500 cc', 'La Ligua']
  }
];

// --- HABITACIONES DEL HOSTAL ---
const ROOMS_DATA = [
  {
    id: 'suite-standard',
    name: 'Habitación Suite Standard',
    price: 50000,
    priceFormatted: '$50.000',
    period: 'por noche',
    tag: 'Más Solicitada',
    image: 'assets/img/room-suite-standard.jpg',
    description: 'Espaciosa y luminosa habitación matrimonial con cama King/Queen de resortes pocket, elegantes pisos de madera, baño privado en suite con ducha de agua caliente continua y Smart TV.',
    capacity: '2 personas (1 Cama Matrimonial King)',
    amenities: [
      'Cama Matrimonial King / Queen',
      'Baño Privado en suite completo',
      'Smart TV pantalla plana con cable',
      'WiFi Fibra Óptica de alta velocidad',
      'Desayuno campestre incluido',
      'Ropa de cama premium y toallas',
      'Calefacción y ventilación',
      'Servicio a la habitación'
    ]
  },
  {
    id: 'doble-suite',
    name: 'Habitación Doble Suite',
    price: 50000,
    priceFormatted: '$50.000',
    period: 'por noche',
    tag: 'Ideal Familias o Parejas',
    image: 'assets/img/room-doble-suite.jpg',
    description: 'Cómoda suite equipada con cama matrimonial de dos plazas y cama individual adicional. Amplio cuarto de baño privado moderno con espejo iluminado y ducha espaciosa.',
    capacity: 'Hasta 3 personas (1 Matrimonial + 1 Plaza)',
    amenities: [
      '1 Cama Matrimonial + 1 Cama Individual',
      'Baño Privado moderno con ducha amplia',
      'Smart TV pantalla plana',
      'WiFi Fibra Óptica gratis',
      'Desayuno incluido para los huéspedes',
      'Toallas de cuerpo y manos',
      'Mueble velador y repisa'
    ]
  },
  {
    id: 'doble-economica',
    name: 'Habitación Doble Económica',
    price: 40000,
    priceFormatted: '$40.000',
    period: 'por noche',
    tag: 'Mejor Relación Calidad-Precio',
    image: 'assets/img/room-doble-economica.jpg',
    description: 'Acogedora habitación con dos camas individuales de plaza y media, decoración con cuadros artísticos, velador central y ambiente silencioso para un descanso reparador.',
    capacity: '2 personas (2 Camas Individuales)',
    amenities: [
      '2 Camas individuales confortables',
      'Baño privado / exclusivo',
      'WiFi de alta velocidad',
      'Desayuno incluido',
      'Toallas y sábanas limpias',
      'Lámpara de noche y enchufes dobles'
    ]
  },
  {
    id: 'single-economica',
    name: 'Habitación Single Económica',
    price: 30000,
    priceFormatted: '$30.000',
    period: 'por noche',
    tag: 'Viajeros & Ejecutivos',
    image: 'assets/img/room-single-economica.jpg',
    description: 'Habitación individual cálida y tranquila con ventana hacia el patio interior, cortinas blackout, cama de 1 plaza con cobertor suave y velador con lámpara de lectura.',
    capacity: '1 persona (1 Cama Individual)',
    amenities: [
      '1 Cama individual acogedora',
      'Ventana exterior con luz natural',
      'WiFi de alta velocidad para trabajo',
      'Desayuno incluido',
      'Baño completo',
      'Lámpara de lectura'
    ]
  }
];

// Datos de contacto y negocio
const BUSINESS_INFO = {
  name: 'Hostal & Restaurante Aconcagua',
  phone: '+56 9 7698 0072',
  phoneRaw: '56976980072',
  email: 'reservas@hostalaconcagua.cl',
  address: 'Esmeralda #173, La Ligua, V Región de Valparaíso, Chile',
  mapsUrl: 'https://maps.app.goo.gl/qkeWdEED1ipJDwQh7',
  wazeUrl: 'https://waze.com/ul?ll=-32.4483784,-71.2277853&navigate=yes',
  coords: { lat: -32.4483784, lng: -71.2277853 },
  instagram: 'https://www.instagram.com/hostalaconcagua/',
  facebook: 'https://www.facebook.com/Hostal-Aconcagua-750767688624369',
  scheduleRestaurant: 'Lunes a Domingo: 12:30 a 23:30 hrs',
  scheduleHostal: 'Check-in: 14:00 hrs | Check-out: 12:00 hrs (Recepción 24/7)'
};
