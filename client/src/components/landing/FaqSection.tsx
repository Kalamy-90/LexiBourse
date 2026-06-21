/**
 * Lexi Bourse — FAQ Section
 * Dark Finance Premium: accordion avec animations
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Comment fonctionne le système de prix ?",
    a: "Le prix d'un mot évolue en temps réel selon les achats et les ventes : chaque achat fait monter le cours, chaque vente le fait baisser. De plus, les prix sont recalculés toutes les heures en fonction de l'utilisation des mots dans le chat. Un mot non utilisé pendant une heure perd automatiquement 5% de sa valeur.",
  },
  {
    q: "Comment sont choisis les mots cotés en bourse ?",
    a: "Au lancement, le bot analyse les 250 derniers messages de chaque salon (hors salons exclus) et identifie les 10 noms communs et adjectifs les plus utilisés grâce à une IA linguistique (spaCy). Ces mots deviennent les premières actions de votre bourse.",
  },
  {
    q: "Avec combien d'argent démarre-t-on ?",
    a: "Chaque joueur commence avec 100 💰 crédits. Cet argent peut être utilisé pour acheter des actions sur les mots cotés. Vous pouvez augmenter votre capital en vendant des actions avec profit et en recevant des dividendes hebdomadaires.",
  },
  {
    q: "Qu'est-ce que les dividendes ?",
    a: "Chaque samedi, le bot verse des dividendes en DM à tous les actionnaires. Le montant est calculé selon le nombre de fois où votre mot a été utilisé dans le chat durant la semaine (0,05 crédit par usage, multiplié par le nombre d'actions que vous possédez).",
  },
  {
    q: "Lexi Bourse est-il gratuit ?",
    a: "Oui, Lexi Bourse est 100% gratuit ! Toutes les fonctionnalités sont disponibles sans abonnement ni paiement. Si vous souhaitez soutenir le développement du projet, vous pouvez faire un don via le bouton 'Nous soutenir' ou voter gratuitement sur Top.gg.",
  },
  {
    q: "Le bot fonctionne-t-il sur plusieurs serveurs ?",
    a: "Oui, chaque serveur a sa propre bourse indépendante avec ses propres mots, joueurs et historique de prix. Les données sont sauvegardées automatiquement toutes les 15 minutes.",
  },
  {
    q: "Comment rejoindre le serveur de support ?",
    a: "Vous pouvez rejoindre le serveur Discord officiel de support via le lien dans la section 'À propos'. Vous y trouverez de l'aide, les annonces de mises à jour et la communauté Lexi Bourse.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="premium-card overflow-hidden"
    >
      <button
        className="relative z-10 flex w-full items-center justify-between gap-4 p-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-100">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-amber-300"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-7 text-slate-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur Lexi Bourse et son fonctionnement.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
