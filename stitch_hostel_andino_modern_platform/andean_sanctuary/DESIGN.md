---
name: Andean Sanctuary
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#454840'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#75786f'
  outline-variant: '#c5c8bd'
  surface-tint: '#546346'
  primary: '#28351c'
  on-primary: '#ffffff'
  primary-container: '#3e4c31'
  on-primary-container: '#acbc9a'
  inverse-primary: '#bccca9'
  secondary: '#5f5f59'
  on-secondary: '#ffffff'
  secondary-container: '#e1e0d9'
  on-secondary-container: '#63635e'
  tertiary: '#402e15'
  on-tertiary: '#ffffff'
  tertiary-container: '#594429'
  on-tertiary-container: '#cfb290'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e8c4'
  primary-fixed-dim: '#bccca9'
  on-primary-fixed: '#131f08'
  on-primary-fixed-variant: '#3d4b30'
  secondary-fixed: '#e4e2dc'
  secondary-fixed-dim: '#c8c7c0'
  on-secondary-fixed: '#1b1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#fdddb9'
  tertiary-fixed-dim: '#e0c29f'
  on-tertiary-fixed: '#281803'
  on-tertiary-fixed-variant: '#584329'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The brand identity for the design system is rooted in the concept of "Refined Ruggedness." It targets travelers seeking a bridge between the raw beauty of the Patagonian wilderness and the sophisticated comfort of a high-end retreat. The UI must evoke a sense of serenity, warmth, and exclusivity.

The visual style is a blend of **Minimalism** and **Modern Corporate**, utilizing generous whitespace to allow photography of the landscapes and lodge to breathe. To integrate the mountain and wood elements subtly, we employ organic textures, a nature-inspired palette, and precision line art that mirrors topographic maps or architectural structures. The result is a clean, intentional interface that feels both contemporary and deeply connected to its environment.

## Colors

The palette is derived from the natural elements of Villa Pehuenia. 

- **Primary (Forest Deep):** A refined, dark coniferous green used for key accents, primary actions, and branding elements.
- **Secondary (Andean Cream):** The foundational background color. It is warmer than pure white, providing a "paper" or "raw wool" feel that reduces eye strain and enhances the rustic-premium aesthetic.
- **Tertiary (Timber Bark):** A muted wood-tone used for subtle dividers, secondary icons, and decorative elements to ground the design.
- **Neutral (Slate):** A soft off-black used for body text to ensure high legibility against the cream background without the harshness of pure black.

## Typography

This system uses a high-contrast typographic pairing to signal "Premium Hospitality."

- **Headlines:** `Playfair Display` provides a literary and elegant feel. It should be used sparingly for titles and section headers to maintain its impact.
- **Body & Interface:** `Manrope` is used for all functional text. Its modern, geometric construction ensures clarity and a contemporary technical feel that balances the traditional serif headlines.
- **Scaling:** On mobile devices, display sizes are significantly reduced, and line heights are increased slightly to accommodate smaller viewport widths.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to ensure the content remains centered and focused, while adopting a **Fluid Grid** for mobile.

- **Desktop (1280px+):** A 12-column grid with wide 64px outer margins to emphasize the "exclusive" and "spacious" brand personality.
- **Mobile (<768px):** A 4-column grid with 20px margins. 
- **Rhythm:** All spacing (padding, margins, gaps) must be multiples of the 8px base unit. Component-to-component spacing should be generous (typically 32px or 48px) to reinforce the minimal aesthetic.

## Elevation & Depth

To maintain a sophisticated and clean appearance, depth is created through **Tonal Layers** and **Ambient Shadows** rather than heavy borders.

- **Surfaces:** Secondary surfaces (like cards or menus) use a slightly lighter or darker tint of the Andean Cream background.
- **Shadows:** Use extremely soft, low-opacity shadows (Blur: 30px, Opacity: 4-6%) with a slight Forest Green tint in the shadow color. This makes the elements appear as if they are floating gently above the surface, mimicking soft natural light filtering through trees.
- **Backdrop:** Occasionally use a subtle Gaussian blur on overlays to create a "frosted" look that doesn't distract from the photography beneath.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding removes the clinical sharpness of right angles while remaining more sophisticated than bubbly, fully-rounded corners. 

- Large image containers and primary cards may use `rounded-lg` (0.5rem) to feel more inviting.
- Interactive elements like buttons should maintain the consistent 0.25rem radius to appear architectural and precise.

## Components

- **Buttons:** Primary buttons use the Forest Green background with Andean Cream text. Use a "Ghost" style for secondary actions with a 1px border in Timber Bark. All buttons feature a subtle hover state that slightly deepens the green or shifts the background tone.
- **Inputs:** Text fields should be minimalist, featuring only a bottom border or a very light Andean Cream fill. Labels use the `label-sm` style (uppercase, tracked out).
- **Cards:** Cards are container-less where possible, defined by whitespace. When a background is needed, use a soft Tonal Layer with the Ambient Shadow defined in the Elevation section.
- **Icons:** Use "Premium" thin-line icons (1px or 1.5px stroke). Avoid filled icons unless used for active states in navigation.
- **Chips:** Small, rounded elements used for amenities (e.g., "WiFi", "Breakfast"). Use a Forest Green outline with a very light green tinted background.
- **Dividers:** Use thin (1px) lines in a low-opacity Timber Bark to separate content sections without breaking the visual flow.