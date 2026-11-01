import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.{jpg,jpeg,png,webp}', { eager: true });

/** The photo saved as src/assets/projects/<id>.*, if there is one. */
export function projectPhoto(id: string): ImageMetadata | undefined {
  const match = Object.entries(files).find(([path]) => path.split('/').pop()!.replace(/\.\w+$/, '') === id);
  return match?.[1].default;
}
