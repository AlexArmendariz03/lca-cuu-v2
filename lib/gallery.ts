import fs from "fs";
import path from "path";

export type GalleryPhoto = {
  src: string;
  alt: string;
  video?: string;
};

export type GalleryAlbum = {
  title: string;
  cover: string | null;
  photos: GalleryPhoto[];
};

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const VIDEO_EXTENSIONS = [".mp4"];

function readAlbumPhotos(folder: string, albumTitle: string): GalleryPhoto[] {
  const dir = path.join(process.cwd(), "public", "galeria", folder);
  if (!fs.existsSync(dir)) return [];

  const filesByBaseName = new Map<string, { image?: string; video?: string }>();

  for (const entry of fs.readdirSync(dir)) {
    const ext = path.extname(entry).toLowerCase();
    const baseName = path.basename(entry, ext);
    const current = filesByBaseName.get(baseName) ?? {};

    if (IMAGE_EXTENSIONS.includes(ext)) {
      current.image = entry;
    } else if (VIDEO_EXTENSIONS.includes(ext)) {
      current.video = entry;
    } else {
      continue;
    }

    filesByBaseName.set(baseName, current);
  }

  return Array.from(filesByBaseName.entries())
    .filter(([, files]) => files.image)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, files]) => ({
      src: `/galeria/${folder}/${files.image}`,
      alt: `Foto de ${albumTitle}`,
      video: files.video ? `/galeria/${folder}/${files.video}` : undefined,
    }));
}

const ALBUM_FOLDERS: { title: string; folder: string }[] = [
  { title: "Servicios", folder: "servicios" },
  { title: "Conciertos", folder: "conciertos" },
  { title: "Eventos especiales", folder: "eventos" },
];

export function getGalleryAlbums(): GalleryAlbum[] {
  return ALBUM_FOLDERS.map(({ title, folder }) => {
    const photos = readAlbumPhotos(folder, title);
    return {
      title,
      cover: photos[0]?.src ?? null,
      photos,
    };
  });
}
