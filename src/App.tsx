/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  MoveRight, 
  ShieldCheck, 
  Globe, 
  Truck, 
  Handshake, 
  Wheat, 
  Building2, 
  Send, 
  Search, 
  FileCheck, 
  DoorOpen, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Markets', href: '#markets' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/20 selection:text-on-surface">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              alt="Ecorce Trading co. Logo" 
              className="h-10 w-auto" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugGoJnZ7I4vvI6aXgcdQMoIhyUrfYqmQVHH_K8WRGp2STqwud3NCu-Txx1OmcGBpZaHGkZgbEFmbVaNV8OdeIXpkxrIfUr7ZPKIaWm8WzBbDKlUN-nMyR0wBPSQYgG_olw17pboLOAO10rUzDvteKsM6fkQSTCVJNB87oNoe3n7s_A7gUNfoI9pNTinJD4vRZFpRK4uLIb9tdJpQRa4Hfs5mcI14_kv0nWkufZwpmU8Dyd-9Se-QTMizLUxu5brr4lgze6V6dEv"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-on-surface font-headline font-semibold tracking-tight hover:text-secondary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-md font-medium transition-all hover:opacity-90 shadow-sm">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-headline font-bold text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-primary text-on-primary w-full py-4 rounded-md font-bold text-lg">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/60 z-10 hero-gradient"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 h-full w-full">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTFXlS8zJU578-381T81-EQ43R6R3X2qcKoWYMkk12SI9Ahh0Hv6W3oSD74u_6Ill9IO4sNy2zSAq0OYvQF12tlQd48EklXkIR9u_3-SpRzl4oRJrgwCOEEpd5nsIcM0Yn6XSN9DDzxvkgCXaILrzVDRPzBXGBTwWsYs5_Fnm9DGPqw7Q6yGkqnP6gOXvUnlDjBxgLFHSL3r3pmr46Zy5nEB0Yafj-LYQDkorN5l4JPXm9tBuEv-bCJjVw1A5c_GErjprb5ko5aQ" alt="Wheat fields" referrerPolicy="no-referrer" />
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2qN6kSQgR5o81IJAhzhiGs3LNS1WvsDA9suKulyYGUD6dQrzXE542SXtThGA3ak61uMR6ma2Pfo3_1IoiXLnmN6B2WavnVbHBoLS0K0J9H6rX4VkDSgOrBqeAVEmFRf-GKqJS4ZGo8g7zL8so1As7-PFvfkB2KV-gqYc0Jazwo0x2jg_1b5fRS_Y2cr_xzJFXislSx1yjx5GPjJllAkWLCQ89kr1DGfUYXKE9aHjHB52Hayle4iIX0XrlKzQSg5-SqxNTSS3lEQ" alt="Silk fabrics" referrerPolicy="no-referrer" />
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnmqQrKEMs4Fk573A1Ld7KOD4tqdaSam7vWYgtBamlJgyzGhRDcFl0sWJNTf15lZPY-ZW0zaOMrhp9xqHwAEtBIDmBo7Bh0yrq9IDPeZsORqLoL1avrKhnjqXyQTMfzHgyTzPYwqVoJr488q-W2uRY-ypt7nmIzN-MfRbzTyWzHfHgiig5SRk7IWvbhSu6y_ua2Ampp8d8WIQGGAE4kukvr3wToQBiLrohUCQuaeSp0RXmEodkv6GvAkehV8J8pe_OA4ZUAxXi7Q" alt="Handicrafts" referrerPolicy="no-referrer" />
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3j7JtkpCjYRqDx_CR7uVDa4O2WLW6Z8xTZ0XCVHvlr23YlqS7m8eoqhcylTzGOno1j3GAjuzAT-opjDOJJZyiSS3wmaqf89Q2q5bshj6Wkj_nW3rxwXPxIiYNfNiSNkKCc8wkS-vt3CnXwlRD3eIhgqGrTcUNKl8EyM-F8wnvAZGsZqRV_pvHOrtyRoZWlv6L6PnpLHIeUylaaZealdQ9qqACnk2u0ndZ4-UEYJqHBcdK4Mh7wpQ_vOMIEutRX-efuaI213RjQQ" alt="Machinery" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto py-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-label uppercase tracking-[0.2em] text-white bg-primary/40 backdrop-blur-md rounded-full border border-white/20"
          >
            The world is within your reach
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white mb-8 leading-[1.1] tracking-tight"
          >
            Where Global <span className="text-secondary">Excellence</span> Meets Opportunity
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-surface-container-low font-light mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ecorce Trading co. is a multi-category powerhouse bridging continents, connecting markets with India's finest exports.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#products" className="w-full sm:w-auto px-10 py-4 cta-gradient text-on-surface font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2 rounded-md">
              Explore Our Products
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-md font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              Request a Quote
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="animate-bounce p-2 rounded-full border border-white/30 text-white">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-surface px-6 md:px-12 lg:px-24" id="about">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative grid grid-cols-2 gap-4 h-[600px]">
            <div className="space-y-4 pt-12">
              <div className="h-2/3 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATKWmlhuDl3dzdXo6g5jfztvm6RHN1H5I1CZ1LKj0FeTqnpFECDuabhuu2KiPzSFqqZxIz2kJNRikW9Rfl3rWRQV8wPkIw6UXQODrCYVW7pANVb7xv4T-CfH04kx91uJ6zZScY9JxtoiGnBrfyPxDbyUGrOfh_nGKUNfrMNMysTFav6JIIeQo4sbJ0E0-UOa4sItYsvBLYqX2dhe-D4avkmnbjVWXmjyEJjherZ0CFKrBwiTuq50_laQdLgfQeALLKepb_Rbeqmg" alt="Spices" referrerPolicy="no-referrer" />
              </div>
              <div className="h-1/3 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center bg-surface-container p-8">
                <img alt="Ecorce Trading co. Icon" className="w-full h-auto opacity-80" src="https://lh3.googleusercontent.com/aida/ADBb0ugGoJnZ7I4vvI6aXgcdQMoIhyUrfYqmQVHH_K8WRGp2STqwud3NCu-Txx1OmcGBpZaHGkZgbEFmbVaNV8OdeIXpkxrIfUr7ZPKIaWm8WzBbDKlUN-nMyR0wBPSQYgG_olw17pboLOAO10rUzDvteKsM6fkQSTCVJNB87oNoe3n7s_A7gUNfoI9pNTinJD4vRZFpRK4uLIb9tdJpQRa4Hfs5mcI14_kv0nWkufZwpmU8Dyd-9Se-QTMizLUxu5brr4lgze6V6dEv" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-1/3 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnmqQrKEMs4Fk573A1Ld7KOD4tqdaSam7vWYgtBamlJgyzGhRDcFl0sWJNTf15lZPY-ZW0zaOMrhp9xqHwAEtBIDmBo7Bh0yrq9IDPeZsORqLoL1avrKhnjqXyQTMfzHgyTzPYwqVoJr488q-W2uRY-ypt7nmIzN-MfRbzTyWzHfHgiig5SRk7IWvbhSu6y_ua2Ampp8d8WIQGGAE4kukvr3wToQBiLrohUCQuaeSp0RXmEodkv6GvAkehV8J8pe_OA4ZUAxXi7Q" alt="Wood carving" referrerPolicy="no-referrer" />
              </div>
              <div className="h-2/3 rounded-xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs145Ph3vU0ejDtjlauYB-eO-TrLBL_KkKwN4yq4hV7R3KpTQ4bL3284k0c6mPmXWBbYqaY6SsyAhPz8PW_-Kf-3ITZu7KpG1GJqkQHe6epn0T0iYSTtgOSlxltjliNcklkGUi7vxosjVOthwIdBbhbinNPUIsDaiIau5Nuuim2qGaSWwdi9C2DwMyrcbsKx7lRM7UXXZfsC_XMvESTwsOSsO5AgsyjuYy6rX-kCnjvb-m0DW0uzOuJSosxVcjBJ0iehUJ2NdgsQ" alt="Tea plantation" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-secondary font-label uppercase tracking-widest text-sm font-bold mb-3 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight mb-6">Rooted in Heritage.<br />Reaching Every Horizon.</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Ecorce Trading co. acts as a premier gateway between the world's most vibrant economies. We specialize in curating, verifying, and delivering high-quality exports that meet stringent international standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
                <div className="text-3xl font-headline font-bold text-primary mb-1">20+</div>
                <div className="text-sm font-label uppercase font-medium text-on-surface-variant">Global Markets</div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary">
                <div className="text-3xl font-headline font-bold text-secondary mb-1">500+</div>
                <div className="text-sm font-label uppercase font-medium text-on-surface-variant">Verified Suppliers</div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
                <div className="text-3xl font-headline font-bold text-primary mb-1">100%</div>
                <div className="text-sm font-label uppercase font-medium text-on-surface-variant">Quality Assurance</div>
              </div>
            </div>
            <div className="pt-4">
              <button className="flex items-center gap-4 text-primary font-bold hover:text-secondary hover:gap-6 transition-all duration-300">
                LEARN MORE ABOUT OUR MISSION
                <MoveRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-surface-container px-6 md:px-12 lg:px-24" id="products">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-label uppercase tracking-widest text-sm font-bold mb-3 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Global Commodities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Agricultural & Food",
                desc: "Premium grains, exotic spices, and seasonal harvests sourced directly for global distribution.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBslnXXyZozovB682g3dmg6-yMcxPVpfvv0JWq5NV9GN8xyrKhAVYow2va7DvMuHEZBNvU_sSHWqPrnyJO2YsBMt-AqYoHT7ThljLLjCVHxQLxzVZk8d-CJKlqklVO5--5tUPQtnsJf0rgeW7mNSkyJwND79rbr9udadk152s-qqkXT0M6weIQPiFYxCd1OTrdHgTDk6yTwuMNoVZTQdHKdziPKiakNwcZbfBGywYiTRAkeCs77mbT01qxtLMzqtsOgUsCIu22Obw"
              },
              {
                title: "Textiles & Garments",
                desc: "Sustainable cotton, silk, and finished garments reflecting millenia-old textile expertise.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2qN6kSQgR5o81IJAhzhiGs3LNS1WvsDA9suKulyYGUD6dQrzXE542SXtThGA3ak61uMR6ma2Pfo3_1IoiXLnmN6B2WavnVbHBoLS0K0J9H6rX4VkDSgOrBqeAVEmFRf-GKqJS4ZGo8g7zL8so1As7-PFvfkB2KV-gqYc0Jazwo0x2jg_1b5fRS_Y2cr_xzJFXislSx1yjx5GPjJllAkWLCQ89kr1DGfUYXKE9aHjHB52Hayle4iIX0XrlKzQSg5-SqxNTSS3lEQ"
              },
              {
                title: "Handicrafts & Artisan",
                desc: "Authentic wood carvings, metalwork, and pottery created by multi-generational master artisans.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJyRzPyhz8fY2dA7AYQm6xMgFrVtCeZEsRWxen41voSeqqyQBsecUytEZyJiZGOt1KayniDkgINLZDPWaO4WmIlu6ifo1Zg_zfxQcdaQqKbel0moN5AfdiwU4GEaVpl4ZP0bWyMoxrzfiJSP3ek5sqGwMN1no49ZVHwXgqC1LbFrMK0zCEv52l2dxUdjCbcDtC95U-BYVL2neVXY0VtkRAb1Q1RfYa6a5BX2YtSkbNhwDQBtd6hLTWc17XNswWz8Ky9Z2GO3hTCg"
              },
              {
                title: "Industrial Goods",
                desc: "Precision manufacturing, industrial components, and materials for global production lines.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3j7JtkpCjYRqDx_CR7uVDa4O2WLW6Z8xTZ0XCVHvlr23YlqS7m8eoqhcylTzGOno1j3GAjuzAT-opjDOJJZyiSS3wmaqf89Q2q5bshj6Wkj_nW3rxwXPxIiYNfNiSNkKCc8wkS-vt3CnXwlRD3eIhgqGrTcUNKl8EyM-F8wnvAZGsZqRV_pvHOrtyRoZWlv6L6PnpLHIeUylaaZealdQ9qqACnk2u0ndZ4-UEYJqHBcdK4Mh7wpQ_vOMIEutRX-efuaI213RjQQ"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#001a40] shadow-lg"
              >
                <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src={item.img} alt={item.title} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a40] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-8 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-headline font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-surface-container-low text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                  <button className="bg-secondary px-6 py-2 rounded text-sm text-on-surface font-bold">Enquire Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 bg-surface px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-headline font-bold text-primary mb-16 border-l-8 border-secondary pl-6">The Ecorce Trading Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/30">
            {[
              {
                icon: <ShieldCheck size={48} />,
                title: "Uncompromising Quality",
                desc: "Our multi-tier inspection protocols ensure that every shipment matches the high standards of our global clientele."
              },
              {
                icon: <Globe size={48} />,
                title: "Strategic Trade Routes",
                desc: "Deep logistical networks and expertise in international trade regulations across Europe, UK, and West Africa."
              },
              {
                icon: <Truck size={48} />,
                title: "Seamless Logistics",
                desc: "From source to doorstep, we manage the complexities of freight, customs, and delivery so you can focus on growth."
              },
              {
                icon: <Handshake size={48} />,
                title: "Reliable Partnerships",
                desc: "We build long-term value through transparent trading and sustainable supply chains tailored to your specific needs."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface p-12 hover:bg-surface-container-low transition-colors duration-500">
                <div className="text-primary mb-6">{item.icon}</div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-24 bg-[#001a40] text-white overflow-hidden relative" id="markets">
        <div className="absolute inset-0 opacity-10">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCf9fc6AJyHXIHFgQSTYIFjB9XOhq_Dd1nMrXMnrC1PGAewZOIQjUKU2EVEwsK7gjtBc-S4ltAw1SWiRPaOhrGQRwCUHtFNtzrLGgMb_QatByhNWf029ZCW2MI3jFIl1RKUMKUFlRJCKUVtAujV3o5wZQLZSHMW82Nt2BaFwa-TV7KlhOhWI2XiVPqhwPgtP602LGeDcLv7T-M4xnvD-F2ab3vL3hKuqt342wHCywfNNQToq7pQ1Vxydurs_UM0lsANLiq-Ef0ww" alt="World Map" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-secondary font-label uppercase tracking-widest text-sm font-bold mb-3 block">Global Footprint</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold">Connecting Continents</h2>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-label uppercase tracking-wider">Trading Live</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                id: "01",
                title: "West Africa",
                desc: "Bulk export of agricultural commodities and industrial machinery to high-growth markets in Nigeria, Ghana, and Senegal.",
                icon: <Wheat size={48} />,
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDer0e5OoMfkzlDBseszIQWn2u4L9-hxsCZf73mTIszxHjXnKeXHwwmdKF_VuRjW8oLb57qibMZKQhEkDWVhMCZcDNxw4G_INag1rdhQuEaJjhcDgSt1emckHHDMkMpgxRTPMQFjMigKuk-V-mkXYemJP6f7aSG94KT4tF47v6WbpVnvr_kyBms-7FlhB2IhdwXas7Ts6VGo9IWjgWYGBBwJN1jeCoko6-4V8EfyTl3znf26Gw1fDFn3SYiwx--r-pN3AgtP3MqVw"
              },
              {
                id: "02",
                title: "Europe & UK",
                desc: "Premium textiles, designer handicrafts, and specialized industrial components serving London, Paris, and beyond.",
                icon: <Building2 size={48} />,
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNiN5FhkprNGobZsWu9CV5TODGjRph6YA-Ryi3-Bs3uRhi3onYxZt0LMorALY5g3XQKsc2uAvPFWVgf43A8yvyhOQTFslOMVZInjBu19-fc_XIJ2zmAn9aR8ivtDDW--kP0R6QH61MSme35W1yFLVDqT9YVtLcqzndnyJrKLuaSCHa0uW3DHpQcckge817XSUdVW0DzafljIiR3iRpRI51KYL-e_P6DxGl5eg2cmbqoHceFODPNqTSoYekzMjpSF_7BHgUp0CkJA"
              }
            ].map((market) => (
              <div key={market.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-secondary">{market.icon}</div>
                    <span className="text-4xl font-headline font-bold opacity-20">{market.id}</span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold mb-4">{market.title}</h3>
                  <p className="text-surface-container-low/80 text-lg leading-relaxed mb-8">{market.desc}</p>
                </div>
                <img className="w-full h-48 object-cover rounded-xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src={market.img} alt={market.title} referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Our Global Trade Process</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-outline-variant -z-10"></div>
            {[
              { icon: <Send size={24} />, title: "Send Inquiry", desc: "Define your product needs and target market." },
              { icon: <Search size={24} />, title: "Verified Sourcing", desc: "We curate the best suppliers matching your specifications." },
              { icon: <FileCheck size={24} />, title: "Compliance", desc: "Full documentation and quality check at source." },
              { icon: <DoorOpen size={24} />, title: "Safe Delivery", desc: "Final shipment cleared and delivered to your location." }
            ].map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center text-center px-4 group">
                <div className="w-16 h-16 bg-surface-container-highest border-2 border-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h4 className="font-headline font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-on-surface-variant max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface-container-low px-6 md:px-12 lg:px-24" id="contact">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-4xl font-headline font-bold text-primary mb-6">Let's Connect</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  The world is within your reach. Our trade specialists are ready to help you navigate global procurement and supply.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: <Mail size={24} />, title: "Email Us", val: "ecorcetradingco@gmail.com" },
                  { icon: <Phone size={24} />, title: "Call Us", val: "+91 98 1733 4655" },
                  { icon: <MapPin size={24} />, title: "Headquarters", val: "4 ETC, Bhiwani, Haryana 127201" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-on-surface">{item.title}</div>
                      <div className="text-on-surface-variant">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-md font-bold hover:scale-105 transition-all shadow-lg">
                <MessageSquare size={20} />
                CHAT WITH A SPECIALIST
              </button>
            </div>
            <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-outline-variant/20">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="col-span-1">
                  <label className="block text-xs font-label uppercase font-bold text-on-surface-variant mb-2">Name</label>
                  <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary rounded-md p-3" placeholder="Full Name" type="text" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-label uppercase font-bold text-on-surface-variant mb-2">Company</label>
                  <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary rounded-md p-3" placeholder="Company Name" type="text" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-label uppercase font-bold text-on-surface-variant mb-2">Country</label>
                  <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary rounded-md p-3" placeholder="Your Country" type="text" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-label uppercase font-bold text-on-surface-variant mb-2">Category</label>
                  <select className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary rounded-md p-3">
                    <option>Select Product Interest</option>
                    <option>Agricultural Goods</option>
                    <option>Textiles & Garments</option>
                    <option>Handicrafts</option>
                    <option>Industrial Goods</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-label uppercase font-bold text-on-surface-variant mb-2">Email</label>
                  <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary rounded-md p-3" placeholder="email@company.com" type="email" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-label uppercase font-bold text-on-surface-variant mb-2">Phone</label>
                  <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary rounded-md p-3" placeholder="+00 000 000 0000" type="tel" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-label uppercase font-bold text-on-surface-variant mb-2">Message</label>
                  <textarea className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary rounded-md p-3" placeholder="Detailed requirements..." rows={4}></textarea>
                </div>
                <div className="col-span-2">
                  <button className="w-full cta-gradient text-on-surface py-4 rounded-md font-bold text-lg hover:shadow-xl transition-all" type="submit">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-high">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
          <div className="col-span-1">
            <img alt="Ecorce Trading co. Logo" className="h-10 w-auto mb-6" src="https://lh3.googleusercontent.com/aida/ADBb0ugGoJnZ7I4vvI6aXgcdQMoIhyUrfYqmQVHH_K8WRGp2STqwud3NCu-Txx1OmcGBpZaHGkZgbEFmbVaNV8OdeIXpkxrIfUr7ZPKIaWm8WzBbDKlUN-nMyR0wBPSQYgG_olw17pboLOAO10rUzDvteKsM6fkQSTCVJNB87oNoe3n7s_A7gUNfoI9pNTinJD4vRZFpRK4uLIb9tdJpQRa4Hfs5mcI14_kv0nWkufZwpmU8Dyd-9Se-QTMizLUxu5brr4lgze6V6dEv" referrerPolicy="no-referrer" />
            <p className="text-on-surface-variant font-body font-light leading-relaxed">
              Connecting global markets with excellence. The world is within your reach.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-headline font-bold text-primary mb-6">Expertise</h4>
            <ul className="space-y-3">
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Global Sourcing</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Logistics Hub</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Sustainability</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-headline font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Markets</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-headline font-bold text-primary mb-6">Stay Updated</h4>
            <p className="text-sm mb-4 opacity-70">Subscribe to our global trade insights.</p>
            <div className="flex">
              <input className="bg-white border-none rounded-l-md w-full focus:ring-1 focus:ring-secondary p-3" placeholder="Email" type="email" />
              <button className="bg-secondary px-4 rounded-r-md text-on-surface">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-12 py-8 border-t border-outline-variant/20 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface/50 text-sm">
            © 2024 Ecorce Trading co. The world is within your reach.
          </p>
          <div className="flex items-center gap-6">
            <img alt="Logo Mark" className="h-8 w-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida/ADBb0ugGoJnZ7I4vvI6aXgcdQMoIhyUrfYqmQVHH_K8WRGp2STqwud3NCu-Txx1OmcGBpZaHGkZgbEFmbVaNV8OdeIXpkxrIfUr7ZPKIaWm8WzBbDKlUN-nMyR0wBPSQYgG_olw17pboLOAO10rUzDvteKsM6fkQSTCVJNB87oNoe3n7s_A7gUNfoI9pNTinJD4vRZFpRK4uLIb9tdJpQRa4Hfs5mcI14_kv0nWkufZwpmU8Dyd-9Se-QTMizLUxu5brr4lgze6V6dEv" referrerPolicy="no-referrer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
