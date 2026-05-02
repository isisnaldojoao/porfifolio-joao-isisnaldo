"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Home as HomeIcon, 
  Folder, 
  Wrench, 
  Mail, 
  Download, 
  MapPin, 
  Briefcase,
  ArrowRight,
  Code2,
  Database,
  Layout,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap
} from "lucide-react";

// Dados para as seções dinâmicas
const myBooks = [
  { title: "Código Limpo", author: "Robert C. Martin", status: "read", category: "Desenvolvimento" ,image:'/codigo-limpo.jpg'},
  { title: "Domain Driven Design", author: "Eric Evans", status: "reading", category: "Desenvolvimento", image: '/ddd.jpg' }
];

const education = [
  {
    institution: "Unicesumar",
    degree: "Engenharia de Software",
    period: "2023 — Presente",
    status: "Em andamento"
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Lógica para tornar o menu dinâmico
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Ativa quando a seção está próxima ao centro
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
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Função para aplicar estilos dinâmicos no menu
  const getNavClass = (id: string) => {
    const base = "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300";
    const active = "bg-black text-white dark:bg-white dark:text-black shadow-md scale-105";
    const inactive = "hover:bg-zinc-100 text-zinc-500 dark:text-zinc-400 dark:hover:bg-zinc-800";
    return `${base} ${activeSection === id ? active : inactive}`;
  };

  const handleDownloadCV = () => {
    // 1. Defina o caminho do arquivo (coloque o PDF na pasta /public)
    const fileUrl = "/curriculo-joao-isisnaldo.pdf"; 
    
    // 2. Crie um elemento de link temporário
    const link = document.createElement("a");
    link.href = fileUrl;
    
    // 3. Define o nome que o arquivo terá ao ser baixado
    link.download = "Curriculo_Joao_Isisnaldo.pdf";
    
    // 4. Simula o clique e remove o elemento
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100 selection:bg-black selection:text-white scroll-smooth">
      
      {/* --- NAVEGAÇÃO FLUTUANTE --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
        <div className="flex items-center gap-1 p-2 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full shadow-lg dark:bg-zinc-900/80 dark:border-zinc-800">
          <a href="#home" className={getNavClass("home")}>
            <HomeIcon size={16} /> <span className="hidden sm:inline">Home</span>
          </a>
          <a href="#education" className={getNavClass("education")}>
            <GraduationCap size={16} /> <span className="hidden sm:inline">Escolaridade</span>
          </a>
          <a href="#projects" className={getNavClass("projects")}>
            <Folder size={16} /> <span className="hidden sm:inline">Projetos</span>
          </a>
          <a href="#books" className={getNavClass("books")}>
            <BookOpen size={16} /> <span className="hidden sm:inline">Livros</span>
          </a>
          <a href="#services" className={getNavClass("services")}>
            <Wrench size={16} /> <span className="hidden sm:inline">Serviços</span>
          </a>
          <a href="#contact" className={getNavClass("contact")}>
            <Mail size={16} /> <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
<section id="home" className="min-h-screen flex items-center pt-32 pb-20 scroll-mt-20">
  <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
    
    {/* COLUNA PRINCIPAL: TEXTO E BIO (Ocupa mais espaço) */}
    <div className="lg:col-span-3 space-y-10">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          Disponível agora
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
          João <span className="text-zinc-400">Isisnaldo</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-300">
          Engenharia de Software
        </p>
      </div>

      <div className="space-y-6 text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
       <p className="max-w-lg text-lg text-zinc-500 leading-relaxed dark:text-zinc-400">
          Desenvolvedor web proficiente em <strong>React, Next.js, Tailwind CSS e Supabase</strong>. Focado em criar sistemas escaláveis e interfaces intuitivas, como o <strong>Sou Educador</strong>.
        </p>
      </div>

      {/* STACKS: Lista simples e limpa */}

      <div className="flex items-center gap-6 pt-4">
        <a href="#contact" className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold hover:opacity-80 transition-opacity">
          Contato
        </a>
        <button 
        onClick={handleDownloadCV}
        className="text-sm font-bold border-b-2 border-zinc-200 dark:border-zinc-800 pb-1 hover:border-black dark:hover:border-white transition-colors">
          Download CV
        </button>
      </div>
    </div>

    {/* COLUNA LATERAL: IMAGEM/ELEMENTO VISUAL (Ocupa menos espaço) */}
    <div className="lg:col-span-2 flex flex-col gap-8">
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Tecnologias</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <span>TypeScript</span> • <span>Next.js</span> • <span>React</span> • <span>Node.js</span> • 
          <span>SAP ABAP</span> • <span>SQL</span> • <span>Tailwind CSS</span> • <span>Flutter</span> • 
          <span>Vue.js</span> • <span>Git</span> • <span>ZPL</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/joao-isisnaldo/" 
          target="_blank"
          className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold hover:opacity-80 transition-opacity">
          Linkedin
        </a>
        <a 
        href="https://github.com/isisnaldojoao" 
        target="_blank" className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold hover:opacity-80 transition-opacity">
          Github
        </a>
      </div>

      {/* Badge de localização simples */}
      <div className="flex items-center gap-3 text-zinc-400 text-sm">
        <MapPin size={18} />
        <span>Maranhão, Brasil</span>
      </div>
    </div>

  </div>
</section>

      {/* --- ESCOLARIDADE --- */}
      <section id="education" className="py-32 bg-white dark:bg-zinc-950 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Formação Acadêmica</h2>
            <p className="text-zinc-500">Minha trajetória de aprendizado na Unicesumar.</p>
          </div>
          <div className="space-y-8 max-w-2xl mx-auto">
            {education.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 p-8 bg-zinc-50 border border-zinc-200 rounded-3xl dark:bg-zinc-900 dark:border-zinc-800">
                <div className="p-4 bg-black text-white rounded-2xl h-fit dark:bg-white dark:text-black">
                  <GraduationCap size={32} />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-zinc-400">{item.period} • {item.status}</span>
                  <h3 className="text-2xl font-bold">{item.degree}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJETOS --- */}
      <section id="projects" className="py-32 bg-zinc-50 dark:bg-black scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-zinc-500">Soluções digitais como o <strong>Sou Educador</strong> e o <strong>LOUDinhos</strong>.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group p-6 bg-white border border-zinc-200 rounded-[2rem] hover:border-black transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-white">
              <div className="aspect-video mb-6 bg-zinc-200 rounded-2xl overflow-hidden relative dark:bg-zinc-800">
                <Image src="/sou-educador.png" alt="Sou Educador" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sou Educador</h3>
              <p className="text-zinc-500 mb-4 text-sm">Plataforma de gerenciamento escolar completa.</p>
              <div className="flex gap-3 text-xs font-mono text-zinc-400 uppercase mb-4">
                <span>Next.js</span> • <span>Supabase</span> • <span>Tailwind</span>
              </div>
              <a href="https://www.soueducador.com" target="_blank" className="text-sm font-bold flex items-center gap-2 hover:underline">
                Visitar site <ArrowRight size={14} />
              </a>
            </div>
            <div className="group p-6 bg-white border border-zinc-200 rounded-[2rem] hover:border-black transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-white">
              <div className="aspect-video mb-6 bg-zinc-200 rounded-2xl overflow-hidden relative dark:bg-zinc-800">
                <Image src="/loudinhos.png" alt="LOUDinhos" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">LOUDinhos</h3>
              <p className="text-zinc-500 mb-4 text-sm">Central de informações do competitivo da LOUD.</p>
              <div className="flex gap-3 text-xs font-mono text-zinc-400 uppercase mb-4">
                <span>NextJS</span> • <span>Firebase</span> • <span>Node</span>
              </div>
              <a href="https://loudinhos.com.br" target="_blank" className="text-sm font-bold flex items-center gap-2 hover:underline">
                Visitar site <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- ESTANTE DE LIVROS --- */}
      <section id="books" className="py-32 bg-white dark:bg-zinc-950 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">Minha Estante</h2>
              <p className="text-zinc-500">Leituras que aprimoram minha técnica.</p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <span className="flex items-center gap-2 text-zinc-400">
                <CheckCircle2 size={18} className="text-green-500" /> Já li
              </span>
              <span className="flex items-center gap-2 text-zinc-400">
                <Clock size={18} className="text-blue-500" /> Lendo
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {myBooks.map((book, idx) => (
              <div key={idx} className="group relative">
                <div className="aspect-[3/4] mb-4 bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-2 dark:bg-zinc-900 dark:border-zinc-800 relative">
                  {book.image ? (
                    <Image src={book.image} alt={book.title} fill className="object-cover p-2" />
                  ) : (
                    <BookOpen size={32} className="text-zinc-300 mb-4" />
                  )}
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
                    <BookOpen size={32} className="text-zinc-300 mb-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{book.category}</span>
                  </div>
                  {/* FIX DO ÍCONE: Garantindo posicionamento absoluto correto */}
                  <div className={`absolute top-4 right-4 p-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm ${
                    book.status === 'reading' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                  }`}>
                    {book.status === 'reading' ? <Clock size={14} /> : <CheckCircle2 size={14} />}
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 group-hover:text-zinc-600 transition-colors">{book.title}</h3>
                <p className="text-xs text-zinc-500">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVIÇOS --- */}
      <section id="services" className="py-32 bg-zinc-50 dark:bg-black scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white border border-zinc-200 rounded-[2.5rem] space-y-4 dark:bg-zinc-900 dark:border-zinc-800">
              <Code2 className="text-zinc-400" size={32} />
              <h3 className="text-xl font-bold">Frontend Dev</h3>
              <p className="text-zinc-500 text-sm">React, Next.js e Tailwind para interfaces modernas.</p>
            </div>
            <div className="p-10 bg-white border border-zinc-200 rounded-[2.5rem] space-y-4 dark:bg-zinc-900 dark:border-zinc-800">
              <Database className="text-zinc-400" size={32} />
              <h3 className="text-xl font-bold">Backend & DB</h3>
              <p className="text-zinc-500 text-sm">Supabase, Node.js e arquiteturas escaláveis.</p>
            </div>
            <div className="p-10 bg-white border border-zinc-200 rounded-[2.5rem] space-y-4 dark:bg-zinc-900 dark:border-zinc-800">
              <Layout className="text-zinc-400" size={32} />
              <h3 className="text-xl font-bold">Web Planning</h3>
              <p className="text-zinc-500 text-sm">Análise de requisitos e UX focado em resultados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <footer id="contact" className="py-32 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold text-center">Vamos criar algo juntos?</h2>
          <div className="flex gap-4">
            <a href="mailto:seuemail@dev.com" className="p-4 bg-black text-white rounded-2xl hover:scale-110 transition-all dark:bg-white dark:text-black shadow-lg">
              <Mail size={24} />
            </a>
          </div>
          <div className="text-center text-xs text-zinc-400 uppercase tracking-widest">
            © 2026 João Isisnaldo • Maranhão, Brasil
          </div>
        </div>
      </footer>
    </div>
  );
}