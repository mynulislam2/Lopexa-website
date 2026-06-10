type HeroSlideVisualProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Animated SVGator slides must load via `<object>` (or inline SVG).
 * `<img>` and Next/Image do not execute scripts inside external SVGs.
 */
export function HeroSlideVisual({ src, alt, className }: HeroSlideVisualProps) {
  return (
    <object
      data={src}
      type="image/svg+xml"
      className={className}
      aria-label={alt}
      role="img"
    />
  );
}
