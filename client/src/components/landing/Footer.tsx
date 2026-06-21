/**
 * Lexi Bourse — Footer
 * Dark Finance Premium: footer avec liens et copyright
 */
import { TrendingUp } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663275414430/QNPzyrYiThtZLDzG.png";
const DISCORD_INVITE = "https://discord.com/oauth2/authorize?client_id=1511660668049162351";
const TOPGG_URL = "https://top.gg/bot/1511660668049162351";

const footerLinks = [
  { href: "#features", label: "Fonctionnalités" },
  { href: "#commands", label: "Commandes" },
  { href: "#how-to-start", label: "Démarrer" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "À propos" },
  { href: DISCORD_INVITE, label: "Support Discord", external: true },
  { href: TOPGG_URL, label: "Voter sur Top.gg", external: true },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/20 py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Logo Lexi Bourse"
              className="h-10 w-10 rounded-full border border-amber-200/40 bg-slate-950 object-cover shadow-lg"
            />
            <span className="font-display text-xl font-bold text-amber-100">Lexi Bourse</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-slate-400 transition-colors hover:text-amber-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Invite CTA */}
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-300/10 px-6 py-3 text-sm font-bold text-amber-200 transition-all duration-300 hover:border-amber-200/40 hover:bg-amber-300/15 hover:text-amber-100"
          >
            <TrendingUp className="h-4 w-4" />
            Inviter Lexi Bourse sur votre serveur
          </a>

          {/* Divider */}
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Construit par{" "}
              <a
                href="https://discord.com/invite/wE6vjjCXW3"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-200/70 hover:text-amber-200 transition-colors"
              >
                Kalamy's Team
              </a>
            </p>
            <p className="mt-1 text-xs text-slate-600">
              © {new Date().getFullYear()} Lexi Bourse — Tous droits réservés.
              <span className="ml-2">Technologie : Python (discord.py), spaCy, JSON.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
