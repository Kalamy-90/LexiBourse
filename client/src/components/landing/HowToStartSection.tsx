/**
 * Lexi Bourse — How To Start Section
 * Dark Finance Premium: étapes numérotées avec ligne de connexion
 */
import { motion } from "framer-motion";
import { UserPlus, Settings, TrendingUp, Coins } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    color: "text-amber-300",
    bg: "bg-amber-300/10 border-amber-300/20",
    title: "Inviter le bot",
    description: "Cliquez sur le bouton d'invitation et autorisez Lexi Bourse à rejoindre votre serveur Discord. Assurez-vous de lui donner les permissions nécessaires.",
  },
  {
    number: "02",
    icon: Settings,
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
    title: "Configurer la bourse",
    description: "En tant qu'administrateur, utilisez /configurer pour définir le salon d'annonces, le rôle à mentionner et les horaires des événements hebdomadaires.",
  },
  {
    number: "03",
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
    title: "Lancer le scan initial",
    description: "Le bot analyse automatiquement l'historique de vos salons pour identifier les 10 mots les plus utilisés et ouvrir la bourse avec les premiers cours.",
  },
  {
    number: "04",
    icon: Coins,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    title: "Investir et Profiter",
    description: "Chaque membre démarre avec 100 💰 crédits. Utilisez /bourse pour voir les cours, /acheter pour investir et /portfolio pour suivre vos gains en temps réel !",
  },
];

export default function HowToStartSection() {
  return (
    <section id="how-to-start" className="relative overflow-hidden py-24">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-300/6 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Démarrage</span>
          <h2 className="section-title">Prêt en 4 étapes</h2>
          <p className="section-subtitle">
            Ouvrez votre bourse en quelques minutes. Aucune configuration complexe, juste un bot qui s'adapte à votre serveur.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="premium-card group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative z-10 p-6">
                {/* Step number */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-white/10 group-hover:text-white/15 transition-colors">
                    {step.number}
                  </span>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${step.bg} ${step.color}`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display mb-3 text-lg font-bold text-slate-100">{step.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://discord.com/invite/wE6vjjCXW3"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button inline-flex items-center gap-2"
          >
            <TrendingUp className="h-5 w-5" />
            Ouvrir ma bourse maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
