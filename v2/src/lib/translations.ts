export interface Translation {
  nav: {
    about: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    role: string;
    badge: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    resume: string;
    contactBtn: string;
    resumeUrl: string;
  };
  shortcuts: {
    resume: string;
    linkedin: string;
    github: string;
    email: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      languages: string;
      frameworks: string;
      devops: string;
      security_ai: string;
    };
    items: Array<{
      name: string;
      category: "languages" | "frameworks" | "devops" | "security_ai";
      level: string;
      icon: string;
      description: string;
    }>;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      badge?: string;
      description: string;
      highlights: string[];
      tags: string[];
    }>;
  };
  contact: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    buttonText: string;
    modalTitle: string;
    modalSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successTitle: string;
    successDesc: string;
    errorText: string;
    closeBtn: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const translations: Record<"pt" | "en", Translation> = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      role: "Desenvolvedor Full Stack",
      badge: "Disponível para novos projetos",
      title: "Marcos Wiendl",
      subtitle1:
        "Desenvolvedor Full Stack com experiência na criação de soluções digitais de alto impacto, unindo interfaces fluidas e intuitivas a arquiteturas back-end robustas.",
      subtitle2:
        "Formado em Sistemas para Internet e cursando MBA em Full Stack Web Development. Focado em qualidade de código, performance e experiência do usuário inspirada nas melhores práticas globais.",
      resume: "Ver Currículo",
      contactBtn: "Falar Comigo",
      resumeUrl:
        "https://docs.google.com/document/d/1yatQVIWEDEmYTadhTIj7WGjDKqT07UXa40HVRWieyr4/edit?usp=sharing",
    },
    shortcuts: {
      resume: "Currículo",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "E-mail",
    },
    skills: {
      title: "Habilidades & Tecnologias",
      subtitle:
        "Ferramentas e ecossistemas que utilizo para projetar e construir aplicações modernas e escaláveis.",
      categories: {
        all: "Todas",
        languages: "Linguagens",
        frameworks: "Frameworks & Libs",
        devops: "DevOps & Cloud",
        security_ai: "Segurança, IA & APIs",
      },
      items: [
        {
          name: "Segurança, Auth & Passkeys",
          category: "security_ai",
          level: "Avançado",
          icon: "security",
          description: "Passkeys (WebAuthn), 2FA/TOTP, JWT persistente, controle RBAC, Rate Limiting e práticas OWASP.",
        },
        {
          name: "Java",
          category: "languages",
          level: "Avançado",
          icon: "java",
          description: "Desenvolvimento robusto com POO, Spring Boot, JPA e APIs RESTful enterprise.",
        },
        {
          name: "TypeScript",
          category: "languages",
          level: "Avançado",
          icon: "typescript",
          description: "Tipagem estática rigorosa para aplicações Next.js e Node.js escaláveis.",
        },
        {
          name: "Spring Boot",
          category: "frameworks",
          level: "Avançado",
          icon: "springboot",
          description: "Microserviços, segurança com Spring Security/JWT, WebSockets e persistência JPA.",
        },
        {
          name: "Next.js",
          category: "frameworks",
          level: "Avançado",
          icon: "nextjs",
          description: "App Router, SSR, SSG, otimização de performance, Server Actions e SEO.",
        },
        {
          name: "React & React Native",
          category: "frameworks",
          level: "Avançado",
          icon: "react",
          description: "Construção de UIs reativas com hooks, estado global e suporte a aplicações web e mobile.",
        },
        {
          name: "Integração com LLMs",
          category: "security_ai",
          level: "Avançado",
          icon: "ai",
          description: "Engenharia de prompts, integração com APIs da OpenAI / Anthropic, chatbots inteligentes e agentes.",
        },
        {
          name: "Meta Cloud API (WhatsApp)",
          category: "security_ai",
          level: "Avançado",
          icon: "meta",
          description: "Automação de mensagens via WhatsApp Cloud API, webhooks assíncronos e processamento por filas.",
        },
        {
          name: "Node.js",
          category: "frameworks",
          level: "Intermediário",
          icon: "nodejs",
          description: "Construção de APIs assíncronas, middlewares e integrações com microserviços.",
        },
        {
          name: "HAProxy & Traefik",
          category: "devops",
          level: "Avançado",
          icon: "haproxy",
          description: "Proxy reverso, balanceamento de carga, roteamento de microsserviços e terminação SSL/TLS.",
        },
        {
          name: "AWS (S3, RDS, SES)",
          category: "devops",
          level: "Avançado",
          icon: "aws",
          description: "Armazenamento de objetos no S3, instâncias relacionais AWS RDS e e-mails transacionais via SES.",
        },
        {
          name: "Servidores Linux",
          category: "devops",
          level: "Avançado",
          icon: "linux",
          description: "Gerenciamento e hardening de servidores Linux (Ubuntu/Debian), SSH, UFW e gestão de processos.",
        },
        {
          name: "PostgreSQL & MySQL",
          category: "devops",
          level: "Avançado",
          icon: "database",
          description: "Modelagem relacional, otimização de queries, migrations (Flyway) e gestão em nuvem.",
        },
        {
          name: "Docker & Compose",
          category: "devops",
          level: "Intermediário",
          icon: "docker",
          description: "Containerização de aplicações, Docker Compose e ambientes reprodutíveis.",
        },
        {
          name: "Git & CI/CD",
          category: "devops",
          level: "Avançado",
          icon: "git",
          description: "Fluxo de versionamento Git, automação de build e deploy via GitHub Actions.",
        },
        {
          name: "JavaScript",
          category: "languages",
          level: "Avançado",
          icon: "javascript",
          description: "ES6+, manipulação assíncrona, eventos e desenvolvimento moderno web/mobile.",
        },
        {
          name: "Python",
          category: "languages",
          level: "Intermediário",
          icon: "python",
          description: "Automação, scripts de processamento e integrações com modelos de IA.",
        },
        {
          name: "HTML5 / CSS3",
          category: "languages",
          level: "Avançado",
          icon: "html",
          description: "Semântica web, acessibilidade, CSS moderno, animações e layout responsivo.",
        },
      ],
    },
    experience: {
      title: "Trajetória Profissional",
      subtitle: "Experiências práticas construindo produtos de tecnologia em ambientes reais.",
      present: "Atual",
      items: [
        {
          role: "Co-Founder & CTO",
          company: "Walpag",
          period: "Jun 2026 — Atual",
          description:
            "Plataforma de bilheteria digital, gestão acadêmica e meios de pagamento in-event. Atuei desde a arquitetura de software e desenvolvimento full stack até a modelagem de negócios e parcerias B2B.",
          highlights: [
            "Co-desenvolvimento da arquitetura de microsserviços em Java 21 (Spring Boot 3), PostgreSQL, Redis e RabbitMQ",
            "Construção do ecossistema frontend em Next.js 15 (App Router), React 19, TypeScript e integrações SSO (Passkeys / OTP)",
            "Integração de pagamentos Pix/Cartão e emissão de ingressos nativos em carteiras digitais (Apple Wallet e Google Wallet)",
            "Estruturação de negócios B2B, checkout de alta conversão e módulos de gestão acadêmica com emissão automática de certificados",
          ],
          tags: [
            "Java 21",
            "Spring Boot",
            "Next.js 15",
            "React 19",
            "PostgreSQL",
            "Apple Wallet",
            "Google Wallet",
            "Docker",
            "Fintech",
          ],
        },
        {
          role: "Desenvolvedor Full Stack Jr.",
          company: "Tely",
          period: "Jun 2026 — Atual",
          description:
            "Desenvolvimento e sustentação de sistemas corporativos de alto impacto, incluindo plataformas modulares de mensageria com IA, soluções de autoatendimento para totens físicos e APIs de geração de documentos dinâmicos.",
          highlights: [
            "Desenvolvimento de plataforma modular de mensageria multicanal (WhatsApp, SMS e E-mail), orquestrada por agentes de IA para automação de jornadas (cobrança, pesquisas de satisfação)",
            "Construção de plataforma de autoatendimento ponta a ponta para totens físicos da empresa, substituindo sistema legado terceirizado e centralizando a gestão operacional",
            "Criação de API para geração de documentos e faturas personalizadas integrada a CMS corporativo, recibos de pagamento e extrator de consumo de banda",
            "Sustentação contínua de aplicações corporativas, realizando suporte, correções de bugs, melhorias de performance e manutenção evolutiva",
          ],
          tags: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Agentes IA",
            "Meta API (WhatsApp)",
            "APIs REST",
            "CMS",
            "Totens Self-Service",
          ],
        },
        {
          role: "Desenvolvedor Full Stack",
          company: "Fintegra",
          period: "Nov 2025 — Mai 2026",
          description:
            "Idealizei, projetei e desenvolvi uma plataforma SaaS completa. Implementei autenticação avançada, gestão de assinaturas recorrentes com Stripe e um chatbot inteligente integrado ao WhatsApp.",
          highlights: [
            "Arquitetou a aplicação full stack da concepção à produção",
            "Integrou pagamentos recorrentes e assinaturas com Stripe API",
            "Construiu bot IA no WhatsApp com LLMs, webhooks e filas assíncronas",
          ],
          tags: ["Java", "Spring Boot", "React", "Stripe", "LLMs", "PostgreSQL", "WhatsApp API"],
        },
        {
          role: "Desenvolvedor Full Stack (PJ)",
          company: "Fredy Marketing",
          period: "Ago 2025 — Out 2025",
          description:
            "Conduzi a migração da interface legada para uma arquitetura moderna. Desenvolvi um editor visual interativo no estilo Canva para criação e personalização de postagens.",
          highlights: [
            "Modernizou a arquitetura legada reduzindo tempo de carregamento",
            "Criou editor visual de canvas interativo para criação de posts",
            "Implementou práticas ágeis e revisão de código em equipe",
          ],
          tags: ["React", "TypeScript", "Canvas API", "Tailwind CSS", "Git"],
        },
      ],
    },
    contact: {
      title: "Vamos Conversar",
      subtitle1:
        "Tem uma ideia em mente ou quer trocar experiências sobre tecnologia e desenvolvimento?",
      subtitle2: "Estou sempre aberto a novos desafios e conexões profissionais.",
      buttonText: "Entrar em contato",
      modalTitle: "Envie uma mensagem",
      modalSubtitle: "Preencha o formulário abaixo ou envie um e-mail direto.",
      nameLabel: "Seu Nome",
      namePlaceholder: "Como posso te chamar?",
      emailLabel: "Seu E-mail",
      emailPlaceholder: "exemplo@email.com",
      messageLabel: "Sua Mensagem",
      messagePlaceholder: "Conte-me sobre a sua ideia ou projeto...",
      sendBtn: "Enviar Mensagem",
      sendingBtn: "Enviando...",
      successTitle: "Mensagem Enviada!",
      successDesc: "Obrigado pelo contato. Responderei o mais breve possível.",
      errorText: "Ocorreu um erro ao enviar. Tente novamente ou use o e-mail direto.",
      closeBtn: "Fechar",
    },
    footer: {
      copyright: "Marcos Wiendl. Todos os direitos reservados.",
      tagline: "Projetado com critério e precisão segundo os princípios de design da Apple.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      role: "Full Stack Developer",
      badge: "Available for new opportunities",
      title: "Marcos Wiendl",
      subtitle1:
        "Full Stack Developer experienced in creating high-impact digital solutions, bridging fluid intuitive interfaces with robust backend architectures.",
      subtitle2:
        "Degree in Internet Systems and currently pursuing an MBA in Full Stack Web Development. Focused on code quality, performance, and user experience inspired by global best practices.",
      resume: "View Resume",
      contactBtn: "Get in Touch",
      resumeUrl:
        "https://docs.google.com/document/d/1rZlT7FwUL5cEzEnjDiTvlacrUtGhkNRIUZw0WHSW9O8/edit?usp=sharing",
    },
    shortcuts: {
      resume: "Resume",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
    },
    skills: {
      title: "Skills & Technologies",
      subtitle:
        "Tools and tech stacks I utilize to design and engineer modern, scalable applications.",
      categories: {
        all: "All",
        languages: "Languages",
        frameworks: "Frameworks & Libs",
        devops: "DevOps & Cloud",
        security_ai: "Security, AI & APIs",
      },
      items: [
        {
          name: "Security, Auth & Passkeys",
          category: "security_ai",
          level: "Advanced",
          icon: "security",
          description: "Passkeys (WebAuthn), 2FA/TOTP, persistent JWT refresh tokens, RBAC access control, and OWASP best practices.",
        },
        {
          name: "Java",
          category: "languages",
          level: "Advanced",
          icon: "java",
          description: "Robust development with OOP, Spring Boot, JPA, and enterprise RESTful APIs.",
        },
        {
          name: "TypeScript",
          category: "languages",
          level: "Advanced",
          icon: "typescript",
          description: "Strict static typing for scalable Next.js and Node.js applications.",
        },
        {
          name: "Spring Boot",
          category: "frameworks",
          level: "Advanced",
          icon: "springboot",
          description: "Microservices, Spring Security/JWT, WebSockets, and JPA persistence.",
        },
        {
          name: "Next.js",
          category: "frameworks",
          level: "Advanced",
          icon: "nextjs",
          description: "App Router, SSR, SSG, performance optimization, Server Actions, and SEO.",
        },
        {
          name: "React & React Native",
          category: "frameworks",
          level: "Advanced",
          icon: "react",
          description: "Reactive UI development with custom hooks, state management for web & mobile.",
        },
        {
          name: "LLM Integrations",
          category: "security_ai",
          level: "Advanced",
          icon: "ai",
          description: "Prompt engineering, OpenAI / Anthropic APIs integration, autonomous agents, and smart bots.",
        },
        {
          name: "Meta Cloud API (WhatsApp)",
          category: "security_ai",
          level: "Advanced",
          icon: "meta",
          description: "WhatsApp message automation with Meta Cloud API, asynchronous webhooks, and job queues.",
        },
        {
          name: "Node.js",
          category: "frameworks",
          level: "Intermediate",
          icon: "nodejs",
          description: "Async REST APIs, middleware architectures, and microservice integration.",
        },
        {
          name: "HAProxy & Traefik",
          category: "devops",
          level: "Advanced",
          icon: "haproxy",
          description: "Reverse proxy, load balancing, microservices routing, and SSL/TLS termination.",
        },
        {
          name: "AWS (S3, RDS, SES)",
          category: "devops",
          level: "Advanced",
          icon: "aws",
          description: "Object storage in S3, relational databases on AWS RDS, and transactional email via SES.",
        },
        {
          name: "Linux Servers",
          category: "devops",
          level: "Advanced",
          icon: "linux",
          description: "Linux server administration & hardening (Ubuntu/Debian), SSH, UFW, and process management.",
        },
        {
          name: "PostgreSQL & MySQL",
          category: "devops",
          level: "Advanced",
          icon: "database",
          description: "Relational data modeling, query optimization, migrations (Flyway), and cloud DB management.",
        },
        {
          name: "Docker & Compose",
          category: "devops",
          level: "Intermediate",
          icon: "docker",
          description: "Application containerization, Docker Compose, and reproducible environments.",
        },
        {
          name: "Git & CI/CD",
          category: "devops",
          level: "Advanced",
          icon: "git",
          description: "Git versioning workflows, automated build and deployment pipelines via GitHub Actions.",
        },
        {
          name: "JavaScript",
          category: "languages",
          level: "Advanced",
          icon: "javascript",
          description: "ES6+, async operations, event driven and modern web/mobile development.",
        },
        {
          name: "Python",
          category: "languages",
          level: "Intermediate",
          icon: "python",
          description: "Automation, data processing scripts, and integrations with AI models.",
        },
        {
          name: "HTML5 / CSS3",
          category: "languages",
          level: "Advanced",
          icon: "html",
          description: "Web semantics, accessibility, modern CSS, spring animations, and responsive layout.",
        },
      ],
    },
    experience: {
      title: "Work Experience",
      subtitle: "Hands-on experience building technology products in professional environments.",
      present: "Present",
      items: [
        {
          role: "Co-Founder & CTO",
          company: "Walpag",
          period: "Jun 2026 — Present",
          description:
            "Digital ticketing, academic management, and in-event payment platform. Led software architecture, full stack engineering, business modeling, and B2B partnerships.",
          highlights: [
            "Co-developed microservices architecture in Java 21 (Spring Boot 3), PostgreSQL, Redis, and RabbitMQ",
            "Built frontend ecosystem in Next.js 15 (App Router), React 19, TypeScript, and SSO authentication (Passkeys / OTP)",
            "Integrated Pix/Credit payment gateways and native digital wallet passes (Apple Wallet & Google Wallet API)",
            "Engineered high-conversion single-page checkout, producer dashboards, and automated certificate issuance",
          ],
          tags: [
            "Java 21",
            "Spring Boot",
            "Next.js 15",
            "React 19",
            "PostgreSQL",
            "Apple Wallet",
            "Google Wallet",
            "Docker",
            "Fintech",
          ],
        },
        {
          role: "Junior Full Stack Developer",
          company: "Tely",
          period: "Jun 2026 — Present",
          description:
            "Engineering and maintenance of enterprise-grade applications, including modular AI messaging platforms, physical totem self-service solutions, and dynamic document generation APIs.",
          highlights: [
            "Engineered a modular multichannel messaging platform (WhatsApp, SMS, Email) orchestrated by AI agents for automated user journeys (collections, CSAT surveys)",
            "Built an end-to-end self-service totem platform, replacing third-party legacy software and centralizing operational management",
            "Developed a dynamic document & personalized invoice generation API integrated with corporate CMS, payment receipts, and bandwidth consumption analytics",
            "Ongoing maintenance and support of mission-critical enterprise applications, executing performance optimizations and feature evolutions",
          ],
          tags: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "AI Agents",
            "Meta API (WhatsApp)",
            "REST APIs",
            "CMS",
            "Self-Service Totems",
          ],
        },
        {
          role: "Full Stack Developer",
          company: "Fintegra",
          period: "Nov 2025 — May 2026",
          description:
            "Designed and built a complete SaaS platform across all application layers. Implemented authentication, recurring subscription billing with Stripe, and an AI WhatsApp chatbot.",
          highlights: [
            "Architected full stack application from concept to production",
            "Integrated recurring Stripe payments and subscriptions",
            "Built AI WhatsApp bot using LLMs, webhooks, and async queues",
          ],
          tags: ["Java", "Spring Boot", "React", "Stripe", "LLMs", "PostgreSQL", "WhatsApp API"],
        },
        {
          role: "Full Stack Developer (Contractor)",
          company: "Fredy Marketing",
          period: "Aug 2025 — Oct 2025",
          description:
            "Led the migration of legacy UI to a modern architecture. Engineered a Canva-style visual canvas editor for social post creation.",
          highlights: [
            "Modernized legacy codebase, drastically cutting load times",
            "Built interactive visual canvas editor for post creation",
            "Implemented agile practices and peer code reviews",
          ],
          tags: ["React", "TypeScript", "Canvas API", "Tailwind CSS", "Git"],
        },
      ],
    },
    contact: {
      title: "Let's Connect",
      subtitle1:
        "Have an idea in mind or want to talk about tech and software engineering?",
      subtitle2: "I'm always open to new challenges and professional networking.",
      buttonText: "Get in touch",
      modalTitle: "Send a message",
      modalSubtitle: "Fill out the form below or send a direct email.",
      nameLabel: "Your Name",
      namePlaceholder: "What's your name?",
      emailLabel: "Your Email",
      emailPlaceholder: "example@email.com",
      messageLabel: "Your Message",
      messagePlaceholder: "Tell me about your project or idea...",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      successTitle: "Message Sent!",
      successDesc: "Thank you for reaching out. I will respond as soon as possible.",
      errorText: "An error occurred while sending. Please try again or use direct email.",
      closeBtn: "Close",
    },
    footer: {
      copyright: "Marcos Wiendl. All rights reserved.",
      tagline: "Designed with precision following Apple's fluid interface principles.",
    },
  },
};
