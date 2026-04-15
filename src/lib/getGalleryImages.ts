import fs from "fs";
import path from "path";

export interface GalleryImage {
  src: string;
  alt: string;
}

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/**
 * Reads all images from /public/images/gallery/ and returns their public paths.
 * Called server-side only (Next.js Server Component).
 */
export function getGalleryImages(): GalleryImage[] {
  if (!fs.existsSync(GALLERY_DIR)) {
    return [];
  }

  const files = fs.readdirSync(GALLERY_DIR).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return SUPPORTED_EXTENSIONS.includes(ext);
  });

  // Sort alphabetically so order is predictable
  files.sort();

  return files.map((file) => {
    const nameWithoutExt = path.basename(file, path.extname(file));
    // Convert filename to readable alt text: "01-planted-trees" → "Planted trees"
    const alt = nameWithoutExt
      .replace(/^\d+[-_]?/, "") // strip leading numbers/separators
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim() || "Skógar gallery photo";

    return {
      src: `/images/gallery/${file}`,
      alt,
    };
  });
}
