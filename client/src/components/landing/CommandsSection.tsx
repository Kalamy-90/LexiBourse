/**
 * LexiBourse — Commands Section
 * Dark Finance Premium: pills de commandes avec description
 */
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const sectionAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemAnimation = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const userCommands = [
  { cmd: "/bourse", desc: "Affiche le marché et les graphiques de prix (Jour / Semaine / Mois) pour chaque mot coté." },
  { cmd: "/portfolio", desc: "Affiche tes liquidités disponibles et la liste de tes actions avec profit/perte en temps réel." },
  { cmd: "/acheter <mot> <quantité>", desc: "Achète des actions d'un mot pour parier sur sa hausse future. L'autocomplétion suggère les mots disponibles." },
  { cmd: "/vendre <mot> <quantité>", desc: "Revend tes actions pour récupérer tes bénéfices. Influence aussi le prix du mot à la baisse." },
  { cmd: "/top", desc: "Affiche le classement des 10 investisseurs les plus riches du serveur (liquidités + valeur du portefeuille)." },
  { cmd: "/help", desc: "Ouvre le menu d'aide interactif avec guide d'utilisation, commandes et paramètres admin." },
];

const adminCommands = [
  { cmd: "/configurer", desc: "Ouvre le panneau de configuration exclusif aux administrateurs : salon, rôle, horaires, liste noire." },
  { cmd: "📺 Salon", desc: "Définit le salon où le bot publie le Journal hebdomadaire et les annonces de dividendes." },
  { cmd: "📢 Rôle à ping", desc: "Rôle mentionné lors des annonces importantes (journal, ouverture de la bourse)." },
  { cmd: "📰 Heure du Journal", desc: "Heure de publication du résumé hebdomadaire (chaque dimanche)." },
  { cmd: "🏦 Heure Dividendes", desc: "Heure de distribution des dividendes aux actionnaires (chaque samedi)." },
  { cmd: "🚫 Exclure des salons", desc: "Définit les salons ignorés par le bot (ex : salon spam, hors-sujet)." },
];

export default function CommandsSection() {
  return (
    <section id="commands" className="relative overflow-hidden py-24">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500/8 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Commandes</span>
          <h2 className="section-title">Toutes les commandes du bot</h2>
          <p className="section-subtitle">
            Des commandes slash intuitives pour les joueurs et un panneau de configuration complet pour les administrateurs.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* User Commands */}
          <motion.div
            className="premium-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10 p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/20 bg-amber-300/10 text-amber-200">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-amber-100">Commandes Utilisateurs</h3>
              </div>
              <motion.div
                className="flex flex-col gap-4"
                variants={sectionAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {userCommands.map((c) => (
                  <motion.div key={c.cmd} variants={itemAnimation} className="group">
                    <div className="command-pill mb-2 inline-block">{c.cmd}</div>
                    <p className="text-sm leading-6 text-slate-400">{c.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Admin Commands */}
          <motion.div
            className="premium-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative z-10 p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-200/20 bg-purple-300/10 text-purple-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-purple-200">Paramètres Admin</h3>
              </div>
              <motion.div
                className="flex flex-col gap-4"
                variants={sectionAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {adminCommands.map((c) => (
                  <motion.div key={c.cmd} variants={itemAnimation}>
                    <div className="command-pill mb-2 inline-block text-purple-300">{c.cmd}</div>
                    <p className="text-sm leading-6 text-slate-400">{c.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
