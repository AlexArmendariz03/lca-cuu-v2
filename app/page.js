import HomePage from "@/app/components/HomePage";
import Navigation from "@/app/components/Navigation";
import Invitation from "@/app/components/Invitation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HomePage />
      <Invitation />
    </div>
  );
}
