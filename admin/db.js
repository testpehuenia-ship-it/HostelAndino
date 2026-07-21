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
        "TV Smart con servicio de DirecTV.",
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
  mesTarifas: "Mes actual",
  tarifas: [
    { id: 1, name: "Dormitorio Compartido", desc: "6 camas, baño compartido", price: "18500" },
    { id: 2, name: "Habitación Privada Doble", desc: "Vista a la montaña, baño privado", price: "35000" },
    { id: 3, name: "Suite Andina", desc: "Jacuzzi, estufa a leña", price: "55000" }
  ],
  promociones: [
    {
      id: 1,
      active: true,
      title: "Promoción fuera de temporada",
      desc: "Disfrutá del silencio de Villa Pehuenia entre Mayo y Junio con un 30% de descuento en estadías mayores a 3 noches.",
      cta_text: "Solicitar Promo",
      createdAt: new Date().toISOString()
    }
  ],
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
  heroPc: [
    { id: 1, src: "/hero01.webp", template: 0, title: "Desconectá en Villa Pehuenia", subtitle: "Villa Pehuenia, Patagonia", fontSize: 72, fontStyle: "Playfair Display", titleLeft: 50, titleTop: 45, titleW: 0, titleH: 0, titleRotation: 0, subLeft: 50, subTop: 35, subW: 0, subH: 0, subRotation: 0, textColor: "#ffffff", textBgColor: "#000000", textBgOpacity: 0, imgPosX: 50, imgPosY: 50 },
    { id: 2, src: "/hero02.webp", template: 0, title: "Experiencia Única en la Montaña", subtitle: "Calidez y Naturaleza", fontSize: 72, fontStyle: "Playfair Display", titleLeft: 50, titleTop: 45, titleW: 0, titleH: 0, titleRotation: 0, subLeft: 50, subTop: 35, subW: 0, subH: 0, subRotation: 0, textColor: "#ffffff", textBgColor: "#000000", textBgOpacity: 0, imgPosX: 50, imgPosY: 50 },
    { id: 3, src: "/hero03.webp", template: 0, title: "El Refugio Perfecto para Vos", subtitle: "Confort entre Araucarias", fontSize: 72, fontStyle: "Playfair Display", titleLeft: 50, titleTop: 45, titleW: 0, titleH: 0, titleRotation: 0, subLeft: 50, subTop: 35, subW: 0, subH: 0, subRotation: 0, textColor: "#ffffff", textBgColor: "#000000", textBgOpacity: 0, imgPosX: 50, imgPosY: 50 },
    { id: 4, src: "/hero04.webp", template: 0, title: "15 Años de Calidez", subtitle: "Hostel Andino", fontSize: 72, fontStyle: "Playfair Display", titleLeft: 50, titleTop: 45, titleW: 0, titleH: 0, titleRotation: 0, subLeft: 50, subTop: 35, subW: 0, subH: 0, subRotation: 0, textColor: "#ffffff", textBgColor: "#000000", textBgOpacity: 0, imgPosX: 50, imgPosY: 50 }
  ],
  heroMobile: [
    { id: 1, src: "/hero01.webp", template: 0, title: "Desconectá en Villa Pehuenia", subtitle: "Villa Pehuenia, Patagonia", fontSize: 36, fontStyle: "Playfair Display", titleLeft: 50, titleTop: 45, titleW: 0, titleH: 0, titleRotation: 0, subLeft: 50, subTop: 35, subW: 0, subH: 0, subRotation: 0, textColor: "#ffffff", textBgColor: "#000000", textBgOpacity: 0, imgPosX: 50, imgPosY: 50 },
    { id: 2, src: "/hero02.webp", template: 0, title: "Experiencia Única en la Montaña", subtitle: "Calidez y Naturaleza", fontSize: 36, fontStyle: "Playfair Display", titleLeft: 50, titleTop: 45, titleW: 0, titleH: 0, titleRotation: 0, subLeft: 50, subTop: 35, subW: 0, subH: 0, subRotation: 0, textColor: "#ffffff", textBgColor: "#000000", textBgOpacity: 0, imgPosX: 50, imgPosY: 50 },
    { id: 3, src: "/hero03.webp", template: 0, title: "El Refugio Perfecto para Vos", subtitle: "Confort entre Araucarias", fontSize: 36, fontStyle: "Playfair Display", titleLeft: 50, titleTop: 45, titleW: 0, titleH: 0, titleRotation: 0, subLeft: 50, subTop: 35, subW: 0, subH: 0, subRotation: 0, textColor: "#ffffff", textBgColor: "#000000", textBgOpacity: 0, imgPosX: 50, imgPosY: 50 },
    { id: 4, src: "/hero04.webp", template: 0, title: "15 Años de Calidez", subtitle: "Hostel Andino", fontSize: 36, fontStyle: "Playfair Display", titleLeft: 50, titleTop: 45, titleW: 0, titleH: 0, titleRotation: 0, subLeft: 50, subTop: 35, subW: 0, subH: 0, subRotation: 0, textColor: "#ffffff", textBgColor: "#000000", textBgOpacity: 0, imgPosX: 50, imgPosY: 50 }
  ]
};

// Database helper functions
window.db = {
  _initialized: false,
  _data: null,
  
  init: async () => {
    window.db._isFallback = false;
    try {
      const res = await fetch('/api/data?t=' + new Date().getTime());
      if (res.ok) {
        const data = await res.json();
        if (Object.keys(data).length > 0) {
          window.db._data = data;
        } else {
          window.db._data = JSON.parse(JSON.stringify(defaultHostelData));
          window.db._isFallback = true;
        }
      } else {
        window.db._data = JSON.parse(JSON.stringify(defaultHostelData));
        window.db._isFallback = true;
      }
    } catch (err) {
      console.error('Error loading db:', err);
      window.db._data = JSON.parse(JSON.stringify(defaultHostelData));
      window.db._isFallback = true;
    }
    
    let parsed = window.db._data;
    let changed = false;
    
    // Auto-repair step: if any video is using the old static Google Photos URL, replace it with a demo YouTube video
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

    // Auto-repair/Migration: Ensure mesTarifas exists and migrate old low/mid/high to single price
    if (!parsed.mesTarifas) {
      parsed.mesTarifas = "Mes actual";
      changed = true;
    }
    if (parsed.tarifas) {
      parsed.tarifas.forEach(t => {
        if (t.low !== undefined && t.price === undefined) {
          t.price = t.low; // migrate old low season to base price
          delete t.low;
          delete t.mid;
          delete t.high;
          changed = true;
        }
      });
    }

    // Auto-repair/Migration: Replace Netflix with DirecTV
    if (parsed.servicios && parsed.servicios.confort && parsed.servicios.confort.estar) {
      const index = parsed.servicios.confort.estar.indexOf("TV Smart con servicio de Netflix.");
      if (index !== -1) {
        parsed.servicios.confort.estar[index] = "TV Smart con servicio de DirecTV.";
        changed = true;
      }
    }

    // Migration: Separation of PC and Mobile hero slides
    if (parsed.hero) {
      parsed.heroPc = [];
      parsed.heroMobile = [];
      parsed.hero.forEach(h => {
        parsed.heroPc.push({
          id: h.id, src: h.src, template: h.template || 0, title: h.title, subtitle: h.subtitle,
          fontSize: h.fontSizePc || 72, fontStyle: h.fontStyle,
          titleLeft: h.titleLeft ?? 50, titleTop: h.titleTop ?? 45, titleW: h.titleW || 0, titleH: h.titleH || 0, titleRotation: 0,
          subLeft: h.subLeft ?? 50, subTop: h.subTop ?? 35, subW: h.subW || 0, subH: h.subH || 0, subRotation: 0,
          textColor: h.textColor || "#ffffff", textBgColor: h.textBgColor || "#000000", textBgOpacity: h.textBgOpacity || 0,
          imgPosX: h.imgPosX ?? 50, imgPosY: h.imgPosY ?? 50
        });
        parsed.heroMobile.push({
          id: h.id, src: h.srcMobile || h.src, template: h.template || 0, title: h.title, subtitle: h.subtitle,
          fontSize: h.fontSizeMobile || 36, fontStyle: h.fontStyle,
          titleLeft: h.titleLeft ?? 50, titleTop: h.titleTop ?? 45, titleW: h.titleW || 0, titleH: h.titleH || 0, titleRotation: 0,
          subLeft: h.subLeft ?? 50, subTop: h.subTop ?? 35, subW: h.subW || 0, subH: h.subH || 0, subRotation: 0,
          textColor: h.textColor || "#ffffff", textBgColor: h.textBgColor || "#000000", textBgOpacity: h.textBgOpacity || 0,
          imgPosX: h.imgPosX ?? 50, imgPosY: h.imgPosY ?? 50
        });
      });
      delete parsed.hero;
      changed = true;
    }

    // Auto-repair: Ensure hero arrays exist and have all properties
    ['heroPc', 'heroMobile'].forEach(heroKey => {
      if (!parsed[heroKey]) {
        parsed[heroKey] = JSON.parse(JSON.stringify(defaultHostelData[heroKey]));
        changed = true;
      }
      
      // Migration: Convert flat title/subtitle to texts array
      if (parsed[heroKey]) {
        parsed[heroKey].forEach(h => {
          if (h.texts === undefined) {
            h.texts = [];
            if (h.title !== undefined && h.title !== '') {
              h.texts.push({
                id: 1, type: 'title', content: h.title, font: h.fontStyle || "Playfair Display",
                size: h.fontSize || (heroKey === 'heroPc' ? 72 : 36),
                color: h.textColor || "#ffffff", bgColor: h.textBgColor || "#000000", bgOpacity: h.textBgOpacity || 0,
                left: h.titleLeft ?? 50, top: h.titleTop ?? 45, w: h.titleW || 0, h: h.titleH || 0, rot: h.titleRotation || 0
              });
            }
            if (h.subtitle !== undefined && h.subtitle !== '') {
              h.texts.push({
                id: 2, type: 'subtitle', content: h.subtitle, font: h.fontStyle || "Playfair Display",
                size: heroKey === 'heroPc' ? 12 : 8,
                color: h.textColor || "#ffffff", bgColor: "#000000", bgOpacity: 0,
                left: h.subLeft ?? 50, top: h.subTop ?? 35, w: h.subW || 0, h: h.subH || 0, rot: h.subRotation || 0
              });
            }
            changed = true;
          }
        });
      }
    });

    if (!parsed.bannerOpcionales) {
      parsed.bannerOpcionales = [];
      changed = true;
    } else if (!Array.isArray(parsed.bannerOpcionales)) {
      parsed.bannerOpcionales = [{
        id: 1,
        src: parsed.bannerOpcionales.src || '',
        visible: parsed.bannerOpcionales.visible !== undefined ? parsed.bannerOpcionales.visible : true
      }];
      changed = true;
    }
    
    // Auto-repair/Migration: Convert old promociones object to array
    if (parsed.promociones && !Array.isArray(parsed.promociones)) {
      parsed.promociones = [
        {
          id: 1,
          active: parsed.promociones.active || false,
          title: parsed.promociones.title || '',
          desc: parsed.promociones.desc || '',
          cta_text: parsed.promociones.cta_text || 'Solicitar Promo',
          createdAt: new Date().toISOString()
        }
      ];
      changed = true;
    }
    
    if (changed && !window.db._isFallback) {
      // Fire and forget save if we migrated
      fetch('/api/data', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(parsed)
      }).catch(err => console.error(err));
    }
    
    window.db._initialized = true;
  },

  getData: () => {
    if (!window.db._initialized) {
      console.warn('getData called before db is fully initialized. Returning defaults or stale data.');
      return window.db._data || defaultHostelData;
    }
    return window.db._data;
  },
  
  saveData: async (data) => {
    window.db._data = data;
    try {
      await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (err) {
      console.error('Error saving data:', err);
      // Optional: show a toast or alert that saving failed
    }
  }
};

// Start initialization immediately
window.db.init();
