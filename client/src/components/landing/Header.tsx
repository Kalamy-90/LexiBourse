/**
 * LexiBourse — Header Component
 * Dark Finance Premium: pill nav flottante, backdrop-blur
 * Boutons: Inviter LexiBourse + Serveur Support + Nous soutenir
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X, TrendingUp, MessageCircle, CreditCard, Coins, Gift } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const LOGO_URL = "/manus-storage/logo_lexibourse_289dc0ce.png";
const DISCORD_INVITE = "https://discord.com/oauth2/authorize?client_id=1511660668049162351";
const DISCORD_SUPPORT = "https://discord.com/invite/wE6vjjCXW3";
const TOPGG_URL = "https://top.gg/bot/1511660668049162351";
const KOFI_URL = "https://ko-fi.com/kalamysteam";

const navLinks = [
  { href: "#features", text: "Fonctionnalités" },
  { href: "#commands", text: "Commandes" },
  { href: "#how-to-start", text: "Démarrer" },
  { href: "#faq", text: "FAQ" },
  { href: "#about", text: "À propos" },
];

const cryptoOptions = [
  {
    name: "Bitcoin",
    network: "BTC",
    address: "39dmeg5pmHgsKFCEXe6rjr5GHMmUva2V4W",
    qrCode: "/manus-storage/bitcoin-qr_7357b67a.png",
  },
  {
    name: "Ethereum",
    network: "ETH",
    address: "0xac0dfE09C9292a92DB3056a286348887D81282DF",
    qrCode: "/manus-storage/ethereum-qr_85b08482.png",
  },
  {
    name: "USDC",
    network: "Ethereum",
    address: "0xac0dfE09C9292a92DB3056a286348887D81282DF",
    qrCode: "/manus-storage/usdc-qr_b147dfbd.png",
  },
  {
    name: "Solana",
    network: "SOL",
    address: "53RA6mgpcMixBuP9P9gTR9X2m8XtQZZVnw48hYbph2ru",
    qrCode: "/manus-storage/solana-qr_551f7e6b.png",
  },
  {
    name: "Tether",
    network: "TRON / TRC20",
    address: "TPobAx1wJxgP7sh737rPfKc6ToSZvb8Vro",
    qrCode: "/manus-storage/tether-tron-qr_bb2817c9.png",
  },
];

export function SupportDialog({ variant = "nav" }: { variant?: "nav" | "hero" | "mobile" }) {
  const [open, setOpen] = useState(false);
  const [showCrypto, setShowCrypto] = useState(false);

  const isNav = variant === "nav";
  const isMobile = variant === "mobile";
  const isHero = variant === "hero";

  const triggerClass = isNav
    ? "rounded-full border border-pink-300/30 bg-pink-400/10 px-4 py-2 text-sm font-extrabold text-pink-100 shadow-lg transition-all duration-300 hover:border-pink-200/55 hover:bg-pink-400/18 hover:text-white flex items-center gap-2"
    : isMobile
    ? "flex w-full items-center rounded-2xl border border-pink-300/25 bg-pink-400/10 px-4 py-4 text-lg font-semibold text-pink-100 transition-colors duration-300 hover:border-pink-200/45 hover:bg-pink-400/15 hover:text-white"
    : "rounded-full border border-pink-300/30 bg-gradient-to-r from-pink-500/18 via-fuchsia-500/16 to-purple-500/18 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-pink-100 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-200/55 hover:text-white flex items-center gap-2";

  return (
    <>
      <button className={triggerClass} onClick={() => { setOpen(true); setShowCrypto(false); }}>
        <Heart className="h-4 w-4 fill-pink-300/30 text-pink-200" />
        {isMobile ? "Nous soutenir" : "Nous soutenir"}
      </button>

      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setShowCrypto(false); }}>
        <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-[2rem] border border-pink-200/20 bg-[#080914]/95 p-0 text-slate-100 shadow-2xl backdrop-blur-2xl">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-pink-200/60 to-transparent" />
          <div className="relative p-7 sm:p-9">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-200/30 bg-pink-300/10 text-pink-200 shadow-xl">
                <Heart className="h-7 w-7 fill-pink-300/25" />
              </div>
              <DialogTitle className="font-display text-3xl font-bold text-pink-100 sm:text-4xl">
                Soutenir LexiBourse
              </DialogTitle>
              <DialogDescription className="mx-auto max-w-xl pt-3 text-base leading-8 text-slate-300">
                Vous aimez LexiBourse ? Aidez-nous à continuer le développement avec un don, ou gratuitement en votant sur Top.gg. Chaque soutien aide le projet à grandir.
              </DialogDescription>
            </DialogHeader>

            {!showCrypto ? (
              <div className="mt-8 grid gap-3">
                <Button
                  className="justify-start rounded-2xl border border-pink-200/25 bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 px-5 py-7 text-left text-sm font-extrabold uppercase tracking-[0.14em] text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  onClick={() => window.open(KOFI_URL, "_blank")}
                >
                  <CreditCard className="mr-3 h-5 w-5" /> Faire un don par carte ou PayPal
                </Button>
                <Button
                  variant="outline"
                  className="justify-start rounded-2xl border border-cyan-200/25 bg-cyan-300/10 px-5 py-7 text-left text-sm font-extrabold uppercase tracking-[0.14em] text-cyan-100 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/15 hover:text-white"
                  onClick={() => setShowCrypto(true)}
                >
                  <Coins className="mr-3 h-5 w-5" /> Faire un don via crypto
                </Button>
                <Button
                  variant="outline"
                  className="justify-start rounded-2xl border border-amber-200/25 bg-amber-300/10 px-5 py-7 text-left text-sm font-extrabold uppercase tracking-[0.14em] text-amber-100 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/45 hover:bg-amber-300/15 hover:text-white"
                  onClick={() => window.open(TOPGG_URL, "_blank")}
                >
                  <Gift className="mr-3 h-5 w-5" /> Soutenir gratuitement sur Top.gg
                </Button>
              </div>
            ) : (
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-pink-200/25 bg-pink-300/10 text-pink-200">
                      <Coins className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-pink-100">Don via crypto</h3>
                      <p className="mt-1 text-sm text-slate-400">Vérifiez toujours le réseau avant l'envoi.</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/[0.08] hover:text-amber-100"
                    onClick={() => setShowCrypto(false)}
                  >
                    Retour
                  </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {cryptoOptions.map((c) => (
                    <div key={c.name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="font-display text-lg font-bold text-amber-100">{c.name}</p>
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{c.network}</p>
                      <img
                        src={c.qrCode}
                        alt={`QR code ${c.name}`}
                        className="mx-auto mb-4 h-36 w-36 rounded-2xl border border-white/10 bg-white object-contain p-2 shadow-lg"
                        loading="lazy"
                      />
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Adresse</p>
                      <p className="break-all rounded-xl border border-white/10 bg-black/30 p-3 font-mono text-xs leading-5 text-slate-200">{c.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "border-b border-white/10 bg-[#070812]/82 shadow-2xl backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 sm:px-6">
          <div className="mx-auto flex w-full items-center justify-between rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 shadow-2xl backdrop-blur-2xl sm:px-5 md:w-fit md:max-w-[calc(100vw-2rem)] md:justify-center md:gap-4 lg:gap-5">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex shrink-0 items-center gap-3"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={LOGO_URL}
                alt="Logo LexiBourse"
                className="h-10 w-10 rounded-full border border-amber-200/40 bg-slate-950 object-cover shadow-lg"
              />
              <span className="font-display text-xl font-bold tracking-wide text-amber-100">
                LexiBourse
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden items-center md:flex md:gap-1">
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:bg-white/7 hover:text-amber-100"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
              {/* Action buttons */}
              <div className="ml-2 flex items-center gap-2">
                <a
                  href={DISCORD_SUPPORT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-2 text-sm font-extrabold text-indigo-100 shadow-lg transition-all duration-300 hover:border-indigo-200/55 hover:bg-indigo-400/18 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Serveur Support
                </a>
                <SupportDialog variant="nav" />
              </div>
            </div>

            {/* Mobile burger */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:text-amber-100 md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-80 border-l border-white/10 bg-[#070812]/95 p-6 backdrop-blur-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={LOGO_URL} alt="Logo" className="h-8 w-8 rounded-full" />
                  <span className="font-display text-lg font-bold text-amber-100">LexiBourse</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex items-center rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 text-lg font-semibold text-slate-200 transition-colors hover:border-amber-200/25 hover:bg-white/[0.06] hover:text-amber-100"
                  >
                    {link.text}
                  </a>
                ))}
                <a
                  href={DISCORD_SUPPORT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="mt-2 flex items-center rounded-2xl border border-indigo-300/25 bg-indigo-400/10 px-4 py-4 text-lg font-semibold text-indigo-100 transition-colors hover:border-indigo-200/45 hover:bg-indigo-400/15 hover:text-white"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Serveur Support
                </a>
                <div className="mt-1">
                  <SupportDialog variant="mobile" />
                </div>
                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-4 text-lg font-extrabold text-slate-950 shadow-xl"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Inviter le bot
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
