"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Home as HomeIcon,
  Folder,
  Wrench,
  Mail,
  MapPin,
  ArrowRight,
  Code2,
  Database,
  Layout,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Languages,
} from "lucide-react";

// ─── Traduções ────────────────────────────────────────────────────────────────
const translations = {
  pt: {
    available: "Disponível agora",
    role: "Engenharia de Software",
    bio: "Desenvolvedor web proficiente em React, Next.js, Tailwind CSS e Supabase. Focado em criar sistemas escaláveis e interfaces intuitivas, como o Sou Educador.",
    contactBtn: "Contato",
    downloadCV: "Download CV",
    techLabel: "Tecnologias",
    location: "Maranhão, Brasil",
    // Education
    educationTitle: "Formação Acadêmica",
    educationSub: "Minha trajetória de aprendizado na Unicesumar.",
    // Projects
    projectsTitle: "Projetos em Destaque",
    projectsSub: "Soluções digitais como o Sou Educador e o LOUDinhos.",
    projectSouDesc: "Plataforma de gerenciamento escolar completa.",
    projectLoudDesc: "Central de informações do competitivo da LOUD.",
    visitSite: "Visitar site",
    // Books
    booksTitle: "Minha Estante",
    booksSub: "Leituras que aprimoram minha técnica.",
    alreadyRead: "Já li",
    reading: "Lendo",
    // Services
    servicesTitle: "Serviços",
    servicesSub: "O que posso construir para você.",
    service1Title: "Frontend Dev",
    service1Desc: "React, Next.js e Tailwind para interfaces modernas.",
    service2Title: "Backend & DB",
    service2Desc: "Supabase, Node.js e arquiteturas escaláveis.",
    service3Title: "Web Planning",
    service3Desc: "Análise de requisitos e UX focado em resultados.",
    // Contact
    contactTitle: "Vamos criar algo juntos?",
    footer: "© 2026 João Isisnaldo • Maranhão, Brasil",
    // Nav
    navHome: "Home",
    navEducation: "Escolaridade",
    navProjects: "Projetos",
    navBooks: "Livros",
    navServices: "Serviços",
    navContact: "Contato",
    // Education item
    eduDegree: "Engenharia de Software",
    eduInstitution: "Unicesumar",
    eduPeriod: "2023 — Presente",
    eduStatus: "Em andamento",
    // Books
    book1Title: "Código Limpo",
    book1Author: "Robert C. Martin",
    book2Title: "Entendendo Algoritmos",
    book2Author: "Aditya Y. Bhargava",
    book3Title: "Domain Driven Design",
    book3Author: "Eric Evans",
    translateBtn: "English",
  },
  en: {
    available: "Available now",
    role: "Software Engineering",
    bio: "Web developer proficient in React, Next.js, Tailwind CSS and Supabase. Focused on building scalable systems and intuitive interfaces, such as Sou Educador.",
    contactBtn: "Contact",
    downloadCV: "Download CV",
    techLabel: "Technologies",
    location: "Maranhão, Brazil",
    // Education
    educationTitle: "Academic Background",
    educationSub: "My learning journey at Unicesumar.",
    // Projects
    projectsTitle: "Featured Projects",
    projectsSub: "Digital solutions like Sou Educador and LOUDinhos.",
    projectSouDesc: "Complete school management platform.",
    projectLoudDesc: "Information hub for LOUD's competitive scene.",
    visitSite: "Visit site",
    // Books
    booksTitle: "My Bookshelf",
    booksSub: "Readings that sharpen my skills.",
    alreadyRead: "Read",
    reading: "Reading",
    // Services
    servicesTitle: "Services",
    servicesSub: "What I can build for you.",
    service1Title: "Frontend Dev",
    service1Desc: "React, Next.js and Tailwind for modern interfaces.",
    service2Title: "Backend & DB",
    service2Desc: "Supabase, Node.js and scalable architectures.",
    service3Title: "Web Planning",
    service3Desc: "Requirements analysis and results-focused UX.",
    // Contact
    contactTitle: "Let's build something together?",
    footer: "© 2026 João Isisnaldo • Maranhão, Brazil",
    // Nav
    navHome: "Home",
    navEducation: "Education",
    navProjects: "Projects",
    navBooks: "Books",
    navServices: "Services",
    navContact: "Contact",
    // Education item
    eduDegree: "Software Engineering",
    eduInstitution: "Unicesumar",
    eduPeriod: "2023 — Present",
    eduStatus: "In progress",
    // Books
    book1Title: "Clean Code",
    book1Author: "Robert C. Martin",
    book2Title: "Grokking Algorithms",
    book2Author: "Aditya Y. Bhargava",
    book3Title: "Domain Driven Design",
    book3Author: "Eric Evans",
    translateBtn: "Português",
  },
};

// Hook para detectar elementos visíveis
function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState<"pt" | "en">("pt");
  useScrollAnimation();

  const t = translations[lang];

  const books = [
    { title: t.book1Title, author: t.book1Author, status: "read", category: "Dev", image: "/codigo-limpo.jpg" },
    { title: t.book2Title, author: t.book2Author, status: "read", category: "Dev", image: "/entendendo_algoritmos.jpg" },
    { title: t.book3Title, author: t.book3Author, status: "reading", category: "Dev", image: "/ddd.jpg" },
  ];

  // Lógica para tornar o menu dinâmico
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const getNavClass = (id: string) => {
    const base =
      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300";
    const active = "bg-blue-600 text-white shadow-md shadow-blue-200 scale-105";
    const inactive = "hover:bg-blue-50 text-slate-500 hover:text-blue-600";
    return `${base} ${activeSection === id ? active : inactive}`;
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/curriculo-joao-isisnaldo.pdf";
    link.download = "Curriculo_Joao_Isisnaldo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* ── NAVEGAÇÃO FLUTUANTE ─────────────────────────────────── */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <div className="flex items-center gap-1 p-2 bg-white/90 backdrop-blur-md border border-blue-100 rounded-full shadow-lg shadow-blue-100/40">
          <a href="#home" onClick={(e) => scrollToSection(e, "home")} className={getNavClass("home")}>
            <HomeIcon size={16} /> <span className="hidden sm:inline">{t.navHome}</span>
          </a>
          <a href="#education" onClick={(e) => scrollToSection(e, "education")} className={getNavClass("education")}>
            <GraduationCap size={16} /> <span className="hidden sm:inline">{t.navEducation}</span>
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className={getNavClass("projects")}>
            <Folder size={16} /> <span className="hidden sm:inline">{t.navProjects}</span>
          </a>
          <a href="#books" onClick={(e) => scrollToSection(e, "books")} className={getNavClass("books")}>
            <BookOpen size={16} /> <span className="hidden sm:inline">{t.navBooks}</span>
          </a>
          <a href="#services" onClick={(e) => scrollToSection(e, "services")} className={getNavClass("services")}>
            <Wrench size={16} /> <span className="hidden sm:inline">{t.navServices}</span>
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className={getNavClass("contact")}>
            <Mail size={16} /> <span className="hidden sm:inline">{t.navContact}</span>
          </a>

          {/* Botão Traduzir */}
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all duration-300 ml-1"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <Languages size={15} />
            <span className="hidden sm:inline">{t.translateBtn}</span>
          </button>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section id="home" className="min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/40 to-blue-100/30">
        <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Coluna principal */}
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-6">
              <div className="animate-on-scroll inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              </div>

              <h1 className="animate-on-scroll delay-1 text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                João <span className="text-blue-500">Isisnaldo</span>
              </h1>

              <p className="animate-on-scroll delay-2 text-xl md:text-2xl font-medium text-slate-500">
                {t.role}
              </p>
            </div>

            <div className="animate-on-scroll delay-3 text-slate-500 leading-relaxed max-w-2xl">
              <p className="max-w-lg text-lg leading-relaxed">
                {t.bio.split("React, Next.js, Tailwind CSS e Supabase")[0]}
                <strong className="text-slate-700">React, Next.js, Tailwind CSS e Supabase</strong>
                {t.bio.split("React, Next.js, Tailwind CSS e Supabase")[1]?.split("Sou Educador")[0]}
                {lang === "pt" && <strong className="text-slate-700">Sou Educador</strong>}
                {lang === "en" && <strong className="text-slate-700">Sou Educador</strong>}
                {lang === "pt" ? "." : "."}
              </p>
            </div>

            <div className="animate-on-scroll delay-4 flex items-center gap-6 pt-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                {t.contactBtn}
              </a>
              <button
                onClick={handleDownloadCV}
                className="text-sm font-bold border-b-2 border-blue-200 pb-1 hover:border-blue-600 text-blue-600 transition-colors"
              >
                {t.downloadCV}
              </button>
            </div>
          </div>

          {/* Coluna lateral */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="animate-on-scroll delay-2 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400">{t.techLabel}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-700">
                <span>TypeScript</span> • <span>Next.js</span> • <span>React</span> • <span>Node.js</span> •
                <span>SAP ABAP</span> • <span>SQL</span> • <span>Tailwind CSS</span> • <span>Flutter</span> •
                <span>Vue.js</span> • <span>Git</span> • <span>ZPL</span>
              </div>
            </div>

            <div className="animate-on-scroll delay-3 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/joao-isisnaldo/"
                target="_blank"
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/isisnaldojoao"
                target="_blank"
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-700 transition-colors"
              >
                Github
              </a>
            </div>

            <div className="animate-on-scroll delay-4 flex items-center gap-3 text-slate-400 text-sm">
              <MapPin size={18} className="text-blue-400" />
              <span>{t.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESCOLARIDADE ────────────────────────────────────────── */}
      <section id="education" className="min-h-screen flex items-center py-32 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6 text-center w-full">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 text-white">{t.educationTitle}</h2>
            <p className="text-blue-200">{t.educationSub}</p>
          </div>
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="animate-on-scroll delay-2 flex flex-col items-center gap-4 p-8 bg-white/10 backdrop-blur border border-white/20 rounded-3xl">
              <div className="p-4 bg-white text-blue-600 rounded-2xl h-fit shadow-lg">
                <GraduationCap size={32} />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium text-blue-200">{t.eduPeriod} • {t.eduStatus}</span>
                <h3 className="text-2xl font-bold text-white">{t.eduDegree}</h3>
                <p className="text-blue-200">{t.eduInstitution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETOS ─────────────────────────────────────────────── */}
      <section id="projects" className="min-h-screen flex items-center py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">{t.projectsTitle}</h2>
            <p className="text-slate-500">{t.projectsSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-on-scroll delay-2 group p-6 bg-white border border-blue-100 rounded-[2rem] hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all">
              <div className="aspect-video mb-6 bg-blue-50 rounded-2xl overflow-hidden relative">
                <Image src="/sou-educador.png" alt="Sou Educador" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sou Educador</h3>
              <p className="text-slate-500 mb-4 text-sm">{t.projectSouDesc}</p>
              <div className="flex gap-3 text-xs font-mono text-blue-400 uppercase mb-4">
                <span>Next.js</span> • <span>Supabase</span> • <span>Tailwind</span>
              </div>
              <a href="https://www.soueducador.com" target="_blank" className="text-sm font-bold flex items-center gap-2 text-blue-600 hover:underline">
                {t.visitSite} <ArrowRight size={14} />
              </a>
            </div>
            <div className="animate-on-scroll delay-3 group p-6 bg-white border border-blue-100 rounded-[2rem] hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all">
              <div className="aspect-video mb-6 bg-blue-50 rounded-2xl overflow-hidden relative">
                <Image src="/loudinhos.png" alt="LOUDinhos" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">LOUDinhos</h3>
              <p className="text-slate-500 mb-4 text-sm">{t.projectLoudDesc}</p>
              <div className="flex gap-3 text-xs font-mono text-blue-400 uppercase mb-4">
                <span>NextJS</span> • <span>Firebase</span> • <span>Node</span>
              </div>
              <a href="https://loudinhos.com.br" target="_blank" className="text-sm font-bold flex items-center gap-2 text-blue-600 hover:underline">
                {t.visitSite} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVROS ──────────────────────────────────────────────── */}
      <section id="books" className="min-h-screen flex items-center py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 animate-on-scroll">
            <div>
              <h2 className="text-4xl font-bold mb-4">{t.booksTitle}</h2>
              <p className="text-slate-500">{t.booksSub}</p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <span className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 size={18} className="text-green-500" /> {t.alreadyRead}
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                <Clock size={18} className="text-blue-500" /> {t.reading}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {books.map((book, idx) => (
              <div key={idx} className={`animate-on-scroll delay-${idx + 2} group relative`}>
                <div className="aspect-[3/4] mb-4 bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm transition-all group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:-translate-y-2 relative">
                  {book.image ? (
                    <Image src={book.image} alt={book.title} fill className="object-cover p-2" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100">
                      <BookOpen size={32} className="text-blue-300 mb-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{book.category}</span>
                    </div>
                  )}
                  <div className={`absolute top-4 right-4 p-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm ${book.status === "reading" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`}>
                    {book.status === "reading" ? <Clock size={14} /> : <CheckCircle2 size={14} />}
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 group-hover:text-blue-600 transition-colors">{book.title}</h3>
                <p className="text-xs text-slate-500">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ─────────────────────────────────────────────── */}
      <section id="services" className="min-h-screen flex items-center py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">{t.servicesTitle}</h2>
            <p className="text-slate-500">{t.servicesSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll delay-2 p-10 bg-blue-600 rounded-[2.5rem] space-y-4 hover:scale-105 transition-transform shadow-xl shadow-blue-200">
              <Code2 className="text-blue-200" size={32} />
              <h3 className="text-xl font-bold text-white">{t.service1Title}</h3>
              <p className="text-blue-200 text-sm">{t.service1Desc}</p>
            </div>
            <div className="animate-on-scroll delay-3 p-10 bg-white border border-blue-100 rounded-[2.5rem] space-y-4 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all">
              <Database className="text-blue-500" size={32} />
              <h3 className="text-xl font-bold">{t.service2Title}</h3>
              <p className="text-slate-500 text-sm">{t.service2Desc}</p>
            </div>
            <div className="animate-on-scroll delay-4 p-10 bg-white border border-blue-100 rounded-[2.5rem] space-y-4 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all">
              <Layout className="text-blue-500" size={32} />
              <h3 className="text-xl font-bold">{t.service3Title}</h3>
              <p className="text-slate-500 text-sm">{t.service3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ──────────────────────────────────────────────── */}
      <footer id="contact" className="min-h-screen flex items-center py-32 bg-blue-600 border-t border-blue-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8 w-full">
          <h2 className="animate-on-scroll text-4xl font-bold text-center text-white">{t.contactTitle}</h2>
          <div className="animate-on-scroll delay-2 flex gap-4">
            <a
              href="mailto:seuemail@dev.com"
              className="p-4 bg-white text-blue-600 rounded-2xl hover:scale-110 transition-all shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="animate-on-scroll delay-3 text-center text-xs text-blue-200 uppercase tracking-widest">
            {t.footer}
          </div>
        </div>
      </footer>
    </div>
  );
}