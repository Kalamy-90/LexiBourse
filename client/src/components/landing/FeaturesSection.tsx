/**
 * Lexi Bourse — Features Section
 * Dark Finance Premium: grille de cartes premium avec icônes et animations
 */
import { motion } from "framer-motion";
import { TrendingUp, BarChart2, Coins, Trophy, BookOpen, Bell, Settings, Shield } from "lucide-react";

const sectionAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const features = [
  {
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
    title: "Marché en Temps Réel",
    description:
      "Le prix d'un mot change en temps réel selon les achats et les ventes. Il est aussi recalculé chaque heure selon l'utilisation dans le chat. Un mot non utilisé perd 1% par heure sauf si le serveur est inactif.",
  },
  {
    icon: BarChart2,
    color: "text-amber-300",
    bg: "bg-amber-300/10 border-amber-300/20",
    title: "Graphiques Interactifs",
    description:
      "Visualisez l'évolution des prix sur 24h, 7 jours ou 30 jours grâce à des graphiques générés automatiquement pour chaque mot coté.",
  },
  {
    icon: Coins,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    title: "Achat et Vente d'Actions",
    description:
      "Achetez des actions sur vos mots favoris : chaque achat fait monter le prix, chaque vente le fait baisser. Spéculez sur les tendances et revendez au bon moment pour maximiser vos profits.",
  },
  {
    icon: Trophy,
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
    title: "Classement des Investisseurs",
    description:
      "Comparez votre portefeuille avec les autres membres du serveur et grimpez dans le classement des meilleurs traders.",
  },
  {
    icon: Bell,
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    title: "Dividendes Hebdomadaires",
    description:
      "Chaque samedi, recevez en DM vos dividendes calculés selon l'activité de vos mots possédés durant toute la semaine.",
  },
  {
    icon: BookOpen,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    title: "Journal Officiel",
    description:
      "Chaque dimanche, un résumé public des performances de la semaine : hausse, baisse et tendance du moment.",
  },
  {
    icon: Settings,
    color: "text-slate-400",
    bg: "bg-slate-400/10 border-slate-400/20",
    title: "Configuration Avancée",
    description:
      "Panneau d'administration interactif pour configurer le salon, le rôle à mentionner, les heures d'événements et les salons exclus.",
  },
  {
    icon: Shield,
    color: "text-rose-400",
    bg: "bg-rose-400/10 border-rose-400/20",
    title: "IA Linguistique (spaCy)",
    description:
      "Analyse intelligente des messages grâce à spaCy : seuls les noms communs et adjectifs significatifs sont indexés en bourse.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      {/* Background blobs */}
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-amber-300/8 blur-3xl" />
      <div className="absolute bottom-16 right-0 h-72 w-72 rounded-full bg-green-500/8 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Fonctionnalités</span>
          <h2 className="section-title">Un marché boursier complet</h2>
          <p className="section-subtitle">
            Lexi Bourse transforme votre serveur Discord en une véritable place boursière. Chaque conversation devient une opportunité d'investissement.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feat) => (
            <motion.div key={feat.title} variants={itemAnimation} className="premium-card group cursor-default">
              <div className="relative z-10 p-6">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${feat.bg} ${feat.color} shadow-lg`}
                >
                  <feat.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mb-3 text-lg font-bold text-slate-100">{feat.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{feat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
