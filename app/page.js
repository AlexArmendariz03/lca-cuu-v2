import HomePage from "@/app/components/HomePage";
import Navigation from "@/app/components/Navigation";
import Invitation from "@/app/components/Invitation";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HomePage />
      <Invitation />
      <Footer />
    </div>
  );
}
