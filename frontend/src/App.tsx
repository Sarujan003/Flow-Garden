import Cultivating from "./components/Cultivating";
import FeaturedFlora from "./components/FeaturedFlora";
import FooterGarden from "./components/FooterGarden";
import HandsOn from "./components/HandsOn";
import Urban from "./components/Urban";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const NavItem = ({ label }: { label: string }) => (
  <a href="#" className="px-2 py-1 text-[11px] uppercase tracking-widest font-medium hover:opacity-70 transition-opacity">
    {label}
  </a>
);


export default function App() {
  return (
    <div className="min-h-screen selection:bg-tertiary selection:text-surface">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-surface/80 backdrop-blur-xl border-b border-primary/5">
        <div className="text-2xl font-serif italic font-bold">Flows Garden</div>
        <div className="hidden lg:flex items-center gap-6">
          <NavItem label="Gallery" />
          <NavItem label="Workshops" />
          <div className="w-[1px] h-4 bg-primary/20 mx-2" />
          <NavItem label="Events" />
          <NavItem label="About" />
        </div>
        <button className="bg-primary text-surface px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-tertiary transition-colors shadow-lg shadow-primary/10">
          Join Community
        </button>
      </nav>

      {/* Hero Section */}
      <Cultivating />

      {/* Philosophy Block */}
      <Urban />

      {/* Featured Flora */}
      <FeaturedFlora />

      {/* Workshop Masterclass */}
      <HandsOn />

      {/* Footer */}
      <FooterGarden />

    </div>
  );
}
