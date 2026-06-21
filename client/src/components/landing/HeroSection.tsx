/**
 * LexiBourse — Hero Section
 * Dark Finance Premium: bannière pleine largeur, CTA Discord
 * Corrections: lien invite correct, pas de stats, boutons Serveur Support + Nous soutenir
 */
import { motion } from "framer-motion";
import { TrendingUp, MessageCircle } from "lucide-react";
import { SupportDialog } from "./Header";

const BANNER_URL = "/manus-storage/banniere_lexibourse_dc83c5aa.png";
const LOGO_URL = "/manus-storage/logo_lexibourse_289dc0ce.png";
const DISCORD_INVITE = "https://discord.com/oauth2/authorize?client_id=1511660668049162351";
const DISCORD_SUPPORT = "https://discord.com/invite/wE6vjjCXW3";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BANNER_URL}
          alt="Bannière LexiBourse"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070812]/70 via-[#070812]/60 to-[#070812]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070812]/40 via-transparent to-[#070812]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-24 pt-32 text-center sm:px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={LOGO_URL}
            alt="Logo LexiBourse"
            className="mx-auto h-24 w-24 rounded-2xl border-2 border-amber-200/40 bg-slate-950/80 object-cover shadow-2xl shadow-amber-950/40 sm:h-28 sm:w-28"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="section-eyebrow">Bot Discord — Finance et Investissement</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Transformez chaque{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #fff8df 0%, #f4c974 52%, #22c55e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            mot
          </span>{" "}
          en investissement
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="section-subtitle mt-6 max-w-2xl"
        >
          LexiBourse analyse les conversations de votre serveur Discord et crée un marché boursier dynamique basé sur les mots utilisés. Achetez, vendez, spéculez — et devenez le meilleur investisseur !
        </motion.p>

        {/* CTA Buttons — row 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button flex items-center gap-2"
          >
            <TrendingUp className="h-5 w-5" />
            Inviter LexiBourse
          </a>
        </motion.div>

        {/* CTA Buttons — row 2: Serveur Support + Nous soutenir */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={DISCORD_SUPPORT}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button-secondary flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Serveur Support
          </a>
          <SupportDialog variant="hero" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-6 w-px bg-gradient-to-b from-amber-200/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
