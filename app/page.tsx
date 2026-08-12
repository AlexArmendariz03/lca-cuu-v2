import HomePage from "@/app/components/HomePage";
import Navigation from "@/app/components/Navigation";
import Invitation from "@/app/components/Invitation";
import Footer from "@/app/components/Footer";
import { getGalleryAlbums } from "@/lib/gallery";

export default function Home() {
  const galleryAlbums = getGalleryAlbums();

  return (
    <div>
      <Navigation />
      <HomePage galleryAlbums={galleryAlbums} />
      <Invitation />
      <Footer />
    </div>
  );
}
