import { Outlet } from "@tanstack/react-router";
import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
