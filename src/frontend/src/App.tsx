import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Code2, ExternalLink, Github, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import profileImg from "@/assets/Profile.jpeg";

const PROFILE = {
  name: "Dit's Dev",
  firstName: "Aditya",
  lastName: "Developer",
  title: "Full-Stack Web2 & Web3 Developer",
  bio: "As a Full-Stack Web2 & Web3 Developer, I craft digital experiences bridging traditional web technologies with blockchain innovation. 1+ years turning complex problems into clean, intuitive solutions through elegant engineering and thoughtful design.",
  background:
    "As an informatics student passionate about computers, I self-taught web development and blockchain. Fascinated by solving real-world problems and creating interactive experiences, I learned HTML, CSS, JavaScript, and explored blockchain via Ethereum and ICP. Through tutorials, challenges, and experimentation, I progressed from static pages to full-stack apps and dApps. This drives me to innovate in Web2/Web3 integration and UI design, working on AI tools and headless CMS. My philosophy: elegant code for beautiful, seamless interfaces.",
  avatarUrl: profileImg,
  githubUrl: "https://github.com/DITYAPUTRAPREMANA",
  stats: [
    { value: "1+", label: "Years" },
    { value: "31", label: "Projects" },
    { value: "100+", label: "Commits" },
  ],
};

const PROJECTS = [
  {
    title: "Financial AI Agent",
    description:
      "An AI-powered financial assistant that provides personalized investment advice and portfolio management using advanced algorithms and real-time market data.",
    techStack: ["JavaScript"],
    projectUrl: "https://financial-ai-agent-y8om.vercel.app/",
  },
  {
    title: "Flight Info Chatbot",
    description:
      "A Telegram chatbot that delivers real-time flight information, schedules, and updates using Python, Flask, and the Telegram Bot API for seamless user interaction.",
    techStack: ["python", "flask", "telegram bot api"],
    projectUrl: "https://t.me/jadwalpenerbangan_bot",
  },
  {
    title: "Cerpentify",
    description:
      "A headless CMS powered by the Internet Computer Protocol (ICP), enabling developers to own and manage their portfolio data fully. Features zero downtime, no hosting costs, and seamless integration with Motoko, React, TypeScript, and TailwindCSS. Project is currently in development.",
    techStack: ["Motoko", "React", "ICP", "TypeScript", "TailwindCSS"],
    projectUrl: "https://cerpentify-blmb.vercel.app/",
  },
  {
    title: "VeryProof",
    description:
      "A comprehensive analytics dashboard built with Vue 3, D3.js, and Vite for stunning data visualizations. Backend powered by Motoko for handling 20+ chart types with real-time data updates and high performance. Project is currently in development.",
    techStack: ["TypeScript", "tailwindcss", "Vite", "ICP", "Motoko"],
    projectUrl: "https://very-proof-cjv9.vercel.app/",
  },
];

const SOCIALS = [
  {
    platform: "GitHub",
    url: "https://github.com/DITYAPUTRAPREMANA",
    Icon: FaGithub,
    label: "@DITYAPUTRAPREMANA",
    hoverClass: "group-hover:text-foreground",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/aditya-premana-putra-7b980a285/",
    Icon: FaLinkedin,
    label: "Aditya Premana Putra",
    hoverClass: "group-hover:text-blue-400",
  },
  {
    platform: "X (Twitter)",
    url: "https://x.com/adityaPrem19944",
    Icon: FaTwitter,
    label: "@adityaprem",
    hoverClass: "group-hover:text-sky-400",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/imdot_1/",
    Icon: FaInstagram,
    label: "@imdot_1",
    hoverClass: "group-hover:text-pink-400",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Profile", href: "#profile" },
    { label: "Projects", href: "#projects" },
    { label: "Social", href: "#social" },
    { label: "GitHub", href: "#github" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#profile"
          className="font-display text-xl font-bold gradient-text tracking-tight"
          whileHover={{ scale: 1.03 }}
          data-ocid="nav.link"
        >
          Dit's Dev
        </motion.a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md group"
                whileHover={{ scale: 1.03 }}
                data-ocid="nav.link"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border/50 px-6 pb-4"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/30 last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ─── Hero / Profile Section ───────────────────────────────────────────────────
// FIX 1: Typographic drama — split name weight contrast + stats row
function ProfileSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="profile"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      data-ocid="profile.section"
    >
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1400x800.jpg"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      </motion.div>

      {/* Ambient orbs */}
      <div className="absolute top-24 left-[10%] w-80 h-80 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-[8%] w-[28rem] h-[28rem] rounded-full bg-primary/4 blur-3xl pointer-events-none" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* ── Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-primary" />
                Developer Portfolio
                <span className="w-8 h-px bg-primary" />
              </span>
            </motion.div>

            {/* ── FIX 1: Name with weight contrast split ── */}
            <motion.h1
              variants={itemVariants}
              className="font-display leading-[1.0] mb-5"
            >
              {/* First name — thin, large */}
              <span className="block text-6xl md:text-8xl font-light tracking-tight text-foreground/70">
                {PROFILE.firstName}
              </span>
              {/* Last name — heavy, gradient, slightly indented */}
              <span className="block text-6xl md:text-8xl font-extrabold tracking-tight gradient-text ml-1 md:ml-2">
                {PROFILE.lastName}
              </span>
            </motion.h1>

            {/* title — tighter, more refined */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold text-primary tracking-[0.15em] uppercase mb-6"
            >
              {PROFILE.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-foreground/90 leading-[1.75] text-base mb-8 max-w-md"
            >
              {PROFILE.bio}
            </motion.p>

            {/* ── FIX 1: Stats row ── */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-4 gap-4 mb-10 py-6 border-y border-border/40"
            >
              {PROFILE.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold gradient-text leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 32px oklch(0.74 0.155 65 / 0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary font-semibold px-8 rounded-full border border-primary/20 transition-all"
                  data-ocid="profile.primary_button"
                >
                  View My Work
                </Button>
              </motion.a>
              <motion.a
                href="#github"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/60 hover:border-primary/50 hover:bg-primary/8 font-semibold px-8 rounded-full transition-all duration-300"
                  data-ocid="profile.secondary_button"
                >
                  <Github size={15} className="mr-2" />
                  GitHub
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-2 border-primary/25 shadow-gold">
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div className="absolute -inset-3 rounded-full border border-primary/15 animate-pulse" />
                <div className="absolute -inset-7 rounded-full border border-primary/8" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* My Story card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
              <Code2 size={14} className="text-primary" />
            </div>
            <h2 className="font-display text-xl font-semibold">My Story</h2>
          </div>
          <p className="text-foreground/90 leading-[1.8] max-w-3xl">
            {PROFILE.background}
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-muted-foreground/40 text-xs tracking-[0.2em] uppercase"
          >
            <span>Scroll</span>
            <ArrowDown size={13} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────
// FIX 2: Index number watermark + left accent line on cards
const CARD_NUMS = ["01", "02", "03", "04"];

function ProjectCard({
  project,
  index,
}: { project: (typeof PROJECTS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 280, damping: 22 },
      }}
      data-ocid={`portfolio.item.${index + 1}`}
    >
      {/* FIX 2: left accent line via pl + border-l, remove old generic border */}
      <Card className="relative h-full overflow-hidden bg-card border-border/40 hover:border-primary/30 transition-colors duration-300 group shadow-card hover:shadow-card-hover">
        {/* Left accent stripe */}
        <div className="absolute left-0 top-4 bottom-4 w-px bg-border/60 group-hover:bg-primary/70 transition-colors duration-400" />

        {/* Watermark index number */}
        <span
          aria-hidden
          className="absolute right-4 top-3 font-display text-[5.5rem] font-extrabold leading-none text-foreground/[0.04] group-hover:text-primary/[0.07] transition-colors duration-400 select-none pointer-events-none"
        >
          {CARD_NUMS[index]}
        </span>

        <CardContent className="pl-7 pr-6 py-7 flex flex-col h-full gap-5 relative z-10">
          <div className="flex items-start justify-between gap-3">
            {/* Index chip */}
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-semibold tracking-wider">
              {CARD_NUMS[index]}
            </span>
            <motion.a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              whileHover={{ scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              data-ocid={`portfolio.link.${index + 1}`}
            >
              <ExternalLink size={15} />
            </motion.a>
          </div>

          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-[1.75]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-secondary/60 text-muted-foreground border border-border/40 font-mono-code px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-28 relative"
      data-ocid="portfolio.section"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-primary" />
            My Work
            <span className="w-6 h-px bg-primary" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <em className="gradient-text not-italic">Projects</em>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            A selection of projects I've built — from startups to personal
            experiments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5" data-ocid="portfolio.list">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social Section ───────────────────────────────────────────────────────────
function SocialSection() {
  return (
    <section id="social" className="py-28 relative" data-ocid="social.section">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-primary" />
            Connect
            <span className="w-6 h-px bg-primary" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Find Me <em className="gradient-text not-italic">Online</em>
          </h2>
          <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
            Follow along for code snippets, project updates, and thoughts on
            software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {SOCIALS.map((social, i) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/40 hover:border-primary/35 transition-all duration-250 group shadow-card hover:shadow-card-hover"
              data-ocid={`social.link.${i + 1}`}
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300 shrink-0">
                <social.Icon
                  size={20}
                  className={`text-muted-foreground/70 transition-colors duration-300 ${social.hoverClass}`}
                />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                  {social.platform}
                </p>
                <p className="text-xs text-muted-foreground font-mono truncate mt-0.5">
                  {social.label}
                </p>
              </div>
              <ExternalLink
                size={13}
                className="ml-auto shrink-0 text-muted-foreground/30 group-hover:text-primary/50 transition-colors"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GitHub CTA Section ───────────────────────────────────────────────────────
// FIX 3: Bordered enclosure panel with inner glow — dedicated end-of-page moment
function GithubCTASection() {
  return (
    <section id="github" className="py-24 relative" data-ocid="github.section">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* FIX 3: Contained enclosure panel */}
          <div className="relative rounded-3xl border border-primary/20 overflow-hidden">
            {/* inner glow bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.07] via-primary/[0.04] to-transparent pointer-events-none" />
            {/* radial spotlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            {/* bottom edge ambient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-primary/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 text-center px-8 py-16">
              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <motion.div
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 rounded-2xl bg-card border border-border/60 flex items-center justify-center"
                  style={{
                    boxShadow:
                      "0 0 24px oklch(0.74 0.155 65 / 0.2), 0 4px 16px rgba(0,0,0,0.4)",
                  }}
                >
                  <Github size={28} className="text-primary" />
                </motion.div>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Let's Build{" "}
                <em className="gradient-text not-italic">Together</em>
              </h2>
              <p className="text-muted-foreground text-base max-w-lg mx-auto mb-10 leading-[1.75]">
                Explore my open-source projects, star something useful, or just
                browse what I've been building.
              </p>

              <motion.a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 40px oklch(0.74 0.155 65 / 0.55), 0 0 80px oklch(0.74 0.155 65 / 0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 18 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary font-bold text-base px-10 py-5 h-auto rounded-full border border-primary/25 gap-2.5 transition-all"
                  data-ocid="github.primary_button"
                >
                  <Github size={20} />
                  View on GitHub
                </Button>
              </motion.a>

              <p className="mt-5 text-xs text-muted-foreground/50 tracking-wide">
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="border-t border-border/20 py-8 text-center text-sm text-muted-foreground/50">
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <ProfileSection />
        <ProjectsSection />
        <SocialSection />
        <GithubCTASection />
      </main>
      <Footer />
    </div>
  );
}
