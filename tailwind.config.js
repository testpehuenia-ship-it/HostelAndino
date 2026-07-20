/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./admin/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#281803",
        "on-tertiary-container": "#cfb290",
        "secondary-container": "#e1e0d9",
        "on-primary": "#ffffff",
        "on-surface-variant": "#454840",
        "outline": "#75786f",
        "surface-tint": "#546346",
        "on-primary-container": "#acbc9a",
        "inverse-primary": "#bccca9",
        "secondary": "#5f5f59",
        "background": "#fcf9f8",
        "on-secondary-fixed": "#1b1c18",
        "outline-variant": "#c5c8bd",
        "error-container": "#ffdad6",
        "tertiary": "#402e15",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "on-tertiary": "#ffffff",
        "inverse-surface": "#303030",
        "surface-container-highest": "#e4e2e1",
        "secondary-fixed": "#e4e2dc",
        "on-surface": "#1b1c1c",
        "tertiary-fixed": "#fdddb9",
        "surface-container": "#f0eded",
        "primary": "#28351c",
        "primary-fixed-dim": "#bccca9",
        "surface-dim": "#dcd9d9",
        "surface-container-low": "#f6f3f2",
        "tertiary-container": "#594429",
        "error": "#ba1a1a",
        "on-primary-fixed-variant": "#3d4b30",
        "primary-fixed": "#d8e8c4",
        "on-error-container": "#93000a",
        "surface-container-high": "#eae7e7",
        "surface-bright": "#fcf9f8",
        "on-secondary-container": "#63635e",
        "primary-container": "#3e4c31",
        "tertiary-fixed-dim": "#e0c29f",
        "surface-variant": "#e4e2e1",
        "on-tertiary-fixed-variant": "#584329",
        "surface": "#fcf9f8",
        "on-secondary": "#ffffff",
        "on-secondary-fixed-variant": "#474742",
        "on-primary-fixed": "#131f08",
        "on-background": "#1b1c1c",
        "inverse-on-surface": "#f3f0f0",
        "secondary-fixed-dim": "#c8c7c0"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "container-max": "1280px",
        "margin-desktop": "64px",
        "unit": "8px",
        "gutter": "24px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "display-lg": ["Playfair Display"],
        "label-sm": ["Manrope"],
        "headline-lg": ["Playfair Display"],
        "body-lg": ["Manrope"],
        "headline-md": ["Playfair Display"],
        "headline-lg-mobile": ["Playfair Display"],
        "body-md": ["Manrope"]
      },
      fontSize: {
        "display-lg": ["56px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.08em", "fontWeight": "600"}],
        "headline-lg": ["40px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-md": ["28px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
