// Default Hostel Data
const defaultHostelData = {
  servicios: {
    nuestros: [
      { id: 1, text: "Cambio de blanquería cada 4 días (salvo que el huésped solicite otra frecuencia).", icon: "checkroom" },
      { id: 2, text: "Limpieza diaria.", icon: "clean_hands" },
      { id: 3, text: "Traductor bilingüe inglés–español.", icon: "translate" },
      { id: 4, text: "Recepción las 24 horas.", icon: "schedule" },
      { id: 5, text: "Áreas públicas y privadas libres de humo.", icon: "smoke_free" },
      { id: 6, text: "Guarda de equipos de ski y snowboard.", icon: "ac_unit" },
      { id: 7, text: "Mesa de pool sin restricciones.", icon: "circle" },
      { id: 8, text: "Juegos de mesa.", icon: "casino" },
      { id: 9, text: "Nintendo Wii.", icon: "sports_esports" },
      { id: 10, text: "WiFi.", icon: "wifi" }
    ],
    confort: {
      cocina: [
        "Horno industrial refractario pizzero.",
        "Cocina, bacha y heladera industriales.",
        "Mesa principal con 14 sillas estilo campo.",
        "Mesa individual con 2 sillas.",
        "Vajilla completa para 20 huéspedes.",
        "Horno microondas."
      ],
      estar: [
        "Dos cómodos divanes cama.",
        "Un sillón confortable de dos cuerpos.",
        "TV Smart con servicio de Netflix.",
        "Calefacción.",
        "Mesa de pool."
      ],
      habitaciones: [
        "Colchones de resortes y somieres.",
        "Ropa de cama premium.",
        "Mesas de luz con lámparas individuales.",
        "Placares o percheros."
      ],
      sanitarios: [
        "Baños completos compartidos.",
        "Agua caliente las 24 horas.",
        "Limpieza profunda diaria.",
        "Jabón y elementos básicos."
      ],
      blanqueria: [
        "Toallas y toallones de alta densidad.",
        "Cambio programado cada 4 días.",
        "Sábanas de percal de algodón.",
        "Frazadas de abrigo adicionales."
      ],
      estacionamiento: [
        "Estacionamiento privado descubierto gratuito.",
        "Amplio jardín forestado con especies nativas.",
        "Sector de parrilla y fogón exterior.",
        "Vistas panorámicas a la montaña."
      ]
    },
    opcionales: [
      { id: 1, name: "Desayuno", icon: "local_cafe" },
      { id: 2, name: "Almuerzo y cena", icon: "restaurant_menu" },
      { id: 3, name: "Amenities", icon: "soap" },
      { id: 4, name: "Transfers", icon: "airport_shuttle" }
    ],
    cards: [
      { id: 1, title: "Wi-Fi Alta Velocidad", desc: "Conexión de fibra óptica simétrica estable en todas las áreas públicas y privadas del hostel.", icon: "wifi", badge: "Incluido", category: "General" },
      { id: 2, title: "Limpieza Diaria & Blanquería", desc: "Servicios diarios de mantenimiento de habitaciones y cambio periódico de blanquería cada 4 días.", icon: "mop", badge: "Incluido", category: "General" },
      { id: 3, title: "Cocina Industrial", desc: "Cocina y vajilla completas a disposición para 20 huéspedes, equipada con horno pizzero.", icon: "restaurant", badge: "A disposición", category: "Cocina" }
    ]
  },
  tarifas: [
    { id: 1, name: "Dormitorio Compartido", desc: "6 camas, baño compartido", low: "18500", mid: "25000", high: "35000" },
    { id: 2, name: "Habitación Privada Doble", desc: "Vista a la montaña, baño privado", low: "35000", mid: "45000", high: "60000" },
    { id: 3, name: "Suite Andina", desc: "Jacuzzi, estufa a leña", low: "55000", mid: "75000", high: "95000" }
  ],
  promociones: {
    active: true,
    title: "Promoción fuera de temporada",
    desc: "Disfrutá del silencio de Villa Pehuenia entre Mayo y Junio con un 30% de descuento en estadías mayores a 3 noches.",
    cta_text: "Solicitar Promo"
  },
  galeria: [
    { id: 1, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxJqbSPErKYMD9k53OUXMyXHCfgdIhk3U84do-jlPmL8_zEp-0v2KFYoNMHIWFFywJQgEShsHyR42wDb4k83R2Rn5G0dwA7ZQB7VAm0nsE3AYjYjg934rNgrcgCRqrt9KH6-W2D3gHrm8vogzBBfL-SKHJidmBpPbJYvMLkns2TS-BdQOF6YI1x4eM_vsoE2LFAp7ZQ-yW30psqe6Glfk6lADiNFZ2Gv1dYbKtwelfla2UuRQ4eBKGsbIj4z2IGgR18LfMheydoeg", alt: "Portada Principal", visible: true, size: "large" },
    { id: 2, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQskT4g9rSMDe7YBMN4EelqixTm3lfmxQ0fMm16hr5b9c7GlzEmGh2K-Qhy4oCxRQbW2P_P_4HluJLs4PKDZrXEg0aWvergXgMY_RmMupexXRaU7C8D5Ssod2Lx8M_E_bzdnckVI93YWXUb2rvLeDUUuROte4yBbriEoHEeN4RfQE8rYP2O4s_6bnLJ6kGaJiYTD5uAgkpsXpaT2nCrF2V4QLQKOYTUb8bziJe2oRRB8d50iKxePn5lyscl1pTK51CZ9m2BuJbwlk", alt: "Habitación", visible: true, size: "small" },
    { id: 3, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD90lbe2jv4tXQl2RNZdB4H661_he1HAmEfMOfVG8uCRf5wCaQohe-9c7mNUBQzUf6rwj9liuZHKrGzNvvw30my3ocBGwn8kww6NtLMzfK51rKRtrlAZdYD5d04LfgxUdGXRJnYp1UYD5q94IPElBuqixu2lTbs9SQ4K_GSw7fbo_zSwj8T_A7LQAwZpJw88_BwlHrxSb2BqQwZ1y5BepQ1uQwAtXyKPLvF5B25FZmsYSglDI_pzOlowC0PueZox8bau6sVuGUhvKk", alt: "Gastronomía", visible: true, size: "small" },
    { id: 4, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLyxV_odQVWm5yVPStKUMtlu4yzuKWfXrYPOTs8wDZwYcuGlpJWjxuTWc2gq536Kzy4AvZqUXUNf-fr-NOZN11sI_YScBNCXnr0F_CN9oLu4VHjwATUXN6Nc76j5FrqEHnnNfrM7T0aitqJuMuvT8Lio4qDkCLOaAtAUDznUAHpKsg7NABzUQHj_REAsrQf0q4XtSmfnDyKUuGHL7lUOsvk7tWb-6mjz11lE_BWsS4J9aJbF5icxgIbtdtOAhtJ6cdd8JbVaZzmzc", alt: "Entorno", visible: true, size: "small" },
    { id: 5, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXmy8F16mNIUi6oHXq4vwZWZxpoSz9CrwxAkwtDi7I0dsOAUW7rSJENzw6sxzwfzMc4B188Pf4S1ahfw93aRse4zmbPz_mSBVRwIami5rqouRWltAE4B3nazinRVXqBDxKT9saYKxRetDzjt1w896HtDtSszZhTYf8irt-TMABap6s3kFL7jTisjQkncftjBGBzx1VbwfEupIGJ1bO09l2s4ZPIePF6n_qp3cUZb5v6IaQz0BdKT_zeb9kUG1LT5O8jtwZOgeiE8s", alt: "Detalles", visible: true, size: "small" },
    { id: 6, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcn-sWMyp_d0LPrlvzpyp3FHaoG0e7tn60mvEn5zAEyuKblJwLhiDfJiuYc5aVJqPXsz8XaG9RwTR50W8BtEYHshwPFkIe32IyRu9L8v31eu1g_HUgWgwBUEutx39slRi9p5cP3FXrg77vIV5pcT-i67v39eAzGfe7XvJAOR-8W_0CjiwyV-JAvDsGvCUlAO1C-4RWkgDGjnKzs8bb7Bzbr6Gsf0EleOA0Ow9Atu6Rta1kI6ZFLdbP2pRYA4gsqasYM35DtLTp-X8", alt: "Bienestar", visible: true, size: "small" }
  ],
  videos: [
    { id: 1, src: "https://www.youtube.com/watch?v=FqV18l8L2jY", title: "Moquehue Aéreo", visible: true },
    { id: 2, src: "https://www.youtube.com/watch?v=eE726q08jNs", title: "Tour por el Hostel", visible: true }
  ],
  hero: [
    { id: 1, src: "/hero01.webp", template: 1, title: "Desconectá en Villa Pehuenia", subtitle: "Villa Pehuenia, Patagonia", fontSizePc: 72, fontSizeMobile: 36, fontStyle: "Playfair Display" },
    { id: 2, src: "/hero02.webp", template: 1, title: "Experiencia Única en la Montaña", subtitle: "Calidez y Naturaleza", fontSizePc: 72, fontSizeMobile: 36, fontStyle: "Playfair Display" },
    { id: 3, src: "/hero03.webp", template: 1, title: "El Refugio Perfecto para Vos", subtitle: "Confort entre Araucarias", fontSizePc: 72, fontSizeMobile: 36, fontStyle: "Playfair Display" },
    { id: 4, src: "/hero04.webp", template: 1, title: "15 Años de Calidez", subtitle: "Hostel Andino", fontSizePc: 72, fontSizeMobile: 36, fontStyle: "Playfair Display" }
  ]
};

// Database helper functions
window.db = {
  getData: () => {
    let data = localStorage.getItem('hostel_data');
    if (!data) {
      data = JSON.stringify(defaultHostelData);
      localStorage.setItem('hostel_data', data);
    }
    const parsed = JSON.parse(data);
    
    // Auto-repair step: if any video is using the old static Google Photos URL, replace it with a demo YouTube video
    let changed = false;
    if (parsed.videos) {
      parsed.videos.forEach(v => {
        if (v.src && v.src.includes('lh3.googleusercontent.com/aida-public')) {
          if (v.id === 1) {
            v.src = "https://www.youtube.com/watch?v=FqV18l8L2jY";
          } else if (v.id === 2) {
            v.src = "https://www.youtube.com/watch?v=eE726q08jNs";
          } else {
            v.src = "https://www.youtube.com/watch?v=FqV18l8L2jY";
          }
          changed = true;
        }
      });
    }

    // Auto-repair/Migration: Ensure hero exists in database
    if (!parsed.hero) {
      parsed.hero = JSON.parse(JSON.stringify(defaultHostelData.hero));
      changed = true;
    }
    
    if (changed) {
      localStorage.setItem('hostel_data', JSON.stringify(parsed));
    }
    
    return parsed;
  },
  saveData: (data) => {
    localStorage.setItem('hostel_data', JSON.stringify(data));
  }
};
