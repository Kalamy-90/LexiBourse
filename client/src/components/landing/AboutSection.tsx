/**
 * LexiBourse — About Section
 * Dark Finance Premium: section À propos inspirée de Daily Question
 * Layout: 2 colonnes égales, chaque colonne remplit toute la hauteur sans espace vide
 * Gauche: La Kalamy's Team (haut) + Daily Question (bas)
 * Droite: Nous contacter (haut) + À propos de Kalamy (bas)
 */
import { motion } from "framer-motion";
import { Users, MessageCircle, Mail, ExternalLink, Bot, Sparkles, UserPlus, TrendingUp } from "lucide-react";

const sectionAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ContactLink({
  href,
  children,
  icon: Icon,
  accent = "amber",
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ElementType;
  accent?: "amber" | "blue";
}) {
  const borderColor = accent === "blue" ? "rgba(96,165,250,0.2)" : undefined;
  const bgColor = accent === "blue" ? "rgba(96,165,250,0.06)" : undefined;
  const iconClass =
    accent === "blue"
      ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300"
      : "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-200/20 bg-amber-300/10 text-amber-200";
  const hoverTextClass = accent === "blue" ? "group-hover:text-blue-300" : "group-hover:text-amber-200";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link group"
      style={accent === "blue" ? { borderColor, background: bgColor } : undefined}
    >
      <span className="inline-flex items-center gap-3">
        <span className={iconClass}>
          <Icon className="h-4 w-4" />
        </span>
        <span className={accent === "blue" ? "text-blue-200" : ""}>{children}</span>
      </span>
      <ExternalLink className={`h-4 w-4 text-slate-500 transition-colors ${hoverTextClass}`} />
    </a>
  );
}

const highlights = [
  { icon: Bot, text: "Bots Discord sur mesure pour chaque serveur" },
  { icon: Sparkles, text: "LexiBourse et Daily Question, projets phares" },
  { icon: UserPlus, text: "Ouverte aux nouveaux membres motivés" },
];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden py-24"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background blobs */}
      <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-16 left-0 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="section-eyebrow">Kalamy's Team</span>
          <h2 className="section-title">Qui sommes-nous ?</h2>
          <p className="section-subtitle">
            Une équipe spécialisée dans le développement de bots Discord personnalisés, portée par Kalamy et construite autour de ses projets passionnants.
          </p>
        </div>

        {/* 2 colonnes égales, chacune avec 2 cartes empilées */}
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">

          {/* === Colonne gauche === */}
          <div className="flex flex-col gap-6">

            {/* La Kalamy's Team */}
            <motion.article custom={0} variants={itemAnimation} className="premium-card flex-1">
              <div className="relative z-10 p-7 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-amber-200/25 bg-amber-300/10 text-amber-200 shadow-xl" style={{ height: "3.25rem", width: "3.25rem" }}>
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-amber-100">La Kalamy's Team</h3>
                </div>

                <div className="space-y-4 text-sm leading-7 text-slate-300">
                  <p>
                    La Kalamy's Team est une équipe de développement spécialisée dans les bots Discord, créée par Kalamy (kalamy_yt sur Discord). Actuellement composée d'un seul membre, la team travaille sur différents projets autour du développement de bots personnalisés.
                  </p>
                  <p>
                    Parmi les créations de la team, les projets principaux sont <strong className="text-amber-200">LexiBourse</strong> — un bot qui transforme les conversations de votre serveur en marché boursier — et <strong className="text-amber-200">Daily Question</strong>, un bot de questions quotidiennes avec classement.
                  </p>
                  <p>
                    La Kalamy's Team peut également réaliser des bots Discord sur commande : automatisation, modération, IA, jeux, tickets, économie, et bien plus.
                  </p>
                  <p>
                    La team accueille également les nouveaux membres souhaitant rejoindre l'aventure et participer aux futurs projets.
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {highlights.map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4 text-xs font-semibold leading-5 text-slate-200"
                    >
                      <Icon className="mb-2 h-5 w-5 text-amber-200" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Daily Question */}
            <motion.aside custom={2} variants={itemAnimation} className="premium-card">
              <div className="relative z-10 p-7 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300 shadow-xl">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-blue-200">Daily Question</h3>
                </div>
                <p className="mb-5 text-sm leading-7 text-slate-300">
                  <strong className="text-blue-200">Daily Question</strong> est l'autre projet phare de la Kalamy's Team. Ce bot Discord envoie automatiquement une question de culture générale chaque jour sur votre serveur, avec un classement des meilleurs répondants et de nombreuses fonctionnalités avancées.
                </p>
                <ContactLink href="https://daily-question.netlify.app/" icon={TrendingUp} accent="blue">
                  Découvrir Daily Question
                </ContactLink>
              </div>
            </motion.aside>
          </div>

          {/* === Colonne droite === */}
          <div className="flex flex-col gap-6">

            {/* Nous contacter */}
            <motion.aside custom={1} variants={itemAnimation} className="premium-card">
              <div className="relative z-10 p-7 sm:p-8">
                <h3 className="font-display mb-4 text-2xl font-bold text-amber-100">Nous contacter</h3>
                <p className="mb-5 text-sm leading-7 text-slate-300">
                  Vous souhaitez commander un bot, poser une question ou rejoindre la communauté ? Contactez la Kalamy's Team via :
                </p>
                <div className="grid gap-3">
                  <ContactLink href="https://discord.com/invite/wE6vjjCXW3" icon={MessageCircle}>
                    Discord LexiBourse
                  </ContactLink>
                  <ContactLink href="mailto:kalamys.team@gmail.com" icon={Mail}>
                    kalamys.team@gmail.com
                  </ContactLink>
                </div>
              </div>
            </motion.aside>

            {/* À propos de Kalamy */}
            <motion.aside custom={3} variants={itemAnimation} className="premium-card flex-1">
              <div className="relative z-10 p-7 sm:p-8">
                <h3 className="font-display mb-4 text-2xl font-bold text-amber-100">À propos de Kalamy</h3>
                <p className="mb-5 text-sm leading-7 text-slate-300">
                  Je suis Kalamy (kalamy_yt sur Discord), développeur Discord et créateur de la Kalamy's Team. Je développe principalement des bots Discord personnalisés, et c'est moi qui ai créé LexiBourse, Daily Question, les autres bots et ce site.
                </p>
                <div className="grid gap-3">
                  <ContactLink href="https://discord.com/invite/wE6vjjCXW3" icon={MessageCircle}>
                    Serveur Discord ou message privé
                  </ContactLink>
                  <ContactLink href="mailto:kalamy.pro@gmail.com" icon={Mail}>
                    kalamy.pro@gmail.com
                  </ContactLink>
                  <ContactLink href="https://fr.fiverr.com/s/DBp51wo" icon={ExternalLink}>
                    Fiverr de Kalamy
                  </ContactLink>
                </div>
                <p className="mt-5 rounded-2xl border border-amber-200/15 bg-amber-300/10 p-4 text-sm font-semibold leading-7 text-amber-100/90">
                  Que ce soit pour un simple renseignement ou pour créer un bot complet, n'hésitez pas à me contacter.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Passionné par la finance, les jeux et la programmation, je construis des outils qui rendent les serveurs Discord plus vivants et engageants. Chaque bot est conçu avec soin pour s'adapter parfaitement à sa communauté.
                </p>
              </div>
            </motion.aside>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
