import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Globe2, FileText, BookOpen, GraduationCap,
  FlaskConical, Newspaper, Award, ArrowUpRight, Moon, Sun, Download,
  ExternalLink, Microscope, Cpu, Brain, Database, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import rahafPic from "./assets/rk-favicon.png";

// === Editable profile data (update this easily) ===
const profile = {
  name: "Rahaf Alkhadra",
  title: "AI Researcher · Data Scientist",
  tagline: "AI for Healthcare · Generative Models · Responsible AI",
  // photoUrl: "https://avatars.githubusercontent.com/u/9919?v=4", // replace with your image URL
  photoUrl: rahafPic,
  location: "Saudi Arabia · GMT+3",
  email: "rahafalkhadra@gmail.com",
  website: "https://rahaf.example.com",
  github: "https://github.com/RahafBK",
  linkedin: "https://linkedin.com/in/rahafalkhadra",
  orcid: "https://orcid.org/0000-0001-6712-4487",
};

const education = [
  {
    degree: "MSc in Artificial Intelligence",
    school: "University of Surrey, UK",
    year: "2025",
    details: [
      "Dissertation: Generative AI for Mitosis Synthesis in Histopathology Images",
      "Distinction",
    ],
  },
  {
    degree: "BSc in Computer Science",
    school: "Prince Mohammad bin Fahd University",
    year: "2022",
    details: [
      "Capstone Project: Investigation of Malware Detection Techniques Using ML/DL ",
      "Magna Cum Laude",
    ],
  },
];

const thesis = [
  {
    title: "Generative AI for Mitosis Synthesis in Histopathology Images",
    summary:
      "Designed and implemented diffusion and StyleGAN3 pipelines for high-fidelity mitotic figure synthesis on the MIDOG++ multi-domain dataset. Employed patch-based extraction and domain-standard preprocessing to preserve morphological fidelity. Trained conditional generative models to capture tumor-type variability and evaluated outputs using Fréchet Inception Distance (FID) and blinded pathologist review. Demonstrated the utility of synthetic histopathology data for addressing data scarcity in AI-assisted cancer diagnostics.",
    methods: ["GenAI", "Diffusion", "StyleGAN3", "PyTorch", "MIDOG++", "Medical Image Synthes"],
    links: [{ label: "Manuscript (draft)", href: "#" }, { label: "Code", href: "#" }],
  },
    {
    title: "Investigation of Malware Detection Techniques using Machine Learning & Deep Learning (BSc Capstone)",
    summary:
      "Conducted a comparative study to identify the most effective approach for malware detection using multiple paradigms. Evaluated traditional machine learning classifiers, pre-trained deep learning architectures, and a custom convolutional neural network (CNN) developed from scratch. Leveraged static feature extraction from Portable Executable (PE) headers and image-based transformations of binaries, testing on the MallImg dataset (25 malware families) and balanced binary datasets. Achieved up to ~96% accuracy with CNNs for image-based detection, while lightweight feature-based ML models offered competitive results for resource-constrained environments.",
    methods: ["Random Forest", "SVM", "CNN", "Keras/TensorFlow", "MalImg", "PE headers"],
    links: [
      // put your PDF in /public/files and link here
      { label: "Report (PDF)", href: "/files/bsc-capstone-malware-ml-dl.pdf" },
    ],
  },
];

const publications = [
  {
    authors: ["Almomani, I.", "Alkhadra, R.", "Ahmed, M."],
    year: 2024,
    title: "ASParseV3: Auto-Static Parser and Customizable Visualizer",
    venue: "[Bookchapter]",
    doi: "10.1007/978-3-031-34969-0_3",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-34969-0_3",
    blurb: "Parser and visualization tool with extensible architecture for structured analysis.",
  },
  {
    authors: ["Alkhadra, R.", "Abuzaid, J.", "AlShammari, M.", "Mohammed, N."],
    year: 2021,
    title: "Solar Winds Hack: In-Depth Analysis and Countermeasures",
    venue: "[Conference]",
    doi: "10.1109/ICCCNT51525.2021.9579611.",
    link: "https://ieeexplore.ieee.org/document/9579611",
    blurb: "Security analysis and mitigation strategies for the SolarWinds supply-chain attack.",
  },
];

const projects = [
  // ——— Academic Projects ———
  {
    title: "Knife Classification",
    period: "Academic Project",
    tags: ["Computer Vision", "CNN", "Python"],
    description:
      "Trained a CNN-based model to classify 192 knife types from images for law-enforcement applications.",
    links: [],
  },
  {
    title: "Visual Similarity Search",
    period: "Academic Project",
    tags: ["Image Retrieval", "Feature Engineering", "MATLAB"],
    description:
      "Developed an image-based search system using feature extraction and similarity metrics in MATLAB.",
    links: [],
  },
  {
    title: "Vehicle Re-Identification (VeRi)",
    period: "Academic Project",
    tags: ["ReID", "Deep Learning", "Python"],
    description:
      "Trained, optimized, and compared CNN models on VeRi to track vehicles across multiple cameras for smart traffic monitoring.",
    links: [],
  },
  {
    title: "Heart Murmur Classification",
    period: "Academic Project",
    tags: ["Audio ML", "Signal Processing", "Supervised Learning"],
    description:
      "Benchmarked traditional ML vs. deep models for phonocardiogram-based murmur detection.",
    links: [],
  },
  {
    title: "Human Face Generation",
    period: "Academic Project",
    tags: ["Generative Models", "Diffusion", "CelebA-HQ", "Python"],
    description:
      "Trained a diffusion pipeline on CelebA-HQ to generate realistic faces; evaluated quality with FID.",
    links: [],
  },

  // ——— Thesis / Research ———
  {
    title: "Generative AI for Mitosis Synthesis in Histopathology Images",
    period: "Thesis",
    tags: ["Medical Imaging", "Diffusion", "GANs", "PyTorch", "MIDOG++"],
    description:
      "End-to-end pipeline for mitotic ROI extraction, conditional generation, and quantitative evaluation (FID, expert review).",
    links: [{ label: "Manuscript (draft)", href: "#" }, { label: "Code", href: "#" }],
  },

  // ——— Work Experience Projects ———
  {
    title: "Arabic Dataset Web-Scraper for LLM Training",
    period: "SDAIA · 2023",
    tags: ["Data Engineering", "Scrapy", "BeautifulSoup", "LLM"],
    description:
      "Designed and implemented a robust web-scraping pipeline to collect Arabic-language datasets for LLM training; handled deduplication and content quality filters.",
    links: [],
  },
  {
    title: "Visual Tracking Baselines & Evaluation",
    period: "SDAIA · 2023",
    tags: ["Computer Vision", "Tracking", "Benchmarking"],
    description:
      "Researched and evaluated visual tracking methods, establishing baselines and metrics to compare algorithm performance.",
    links: [],
  },
  {
    title: "AI-Driven Cybersecurity Research",
    period: "Prince Sultan University · 2022–2023",
    tags: ["Cybersecurity", "Threat Detection", "ML"],
    description:
      "Conducted applied research on risk mitigation and AI-powered defense mechanisms to enhance threat detection.",
    links: [],
  },
  {
    title: "Security Compliance & Phishing Assessments",
    period: "Saudi Aramco · 2021",
    tags: ["Cybersecurity", "Compliance", "Red Team"],
    description:
      "Performed compliance and phishing assessments; collaborated with Red Team for reconnaissance to improve cyber-resilience.",
    links: [],
  },
];

// === Detailed Project Summaries (for tabs/expanded cards) ===
const projectSummaries = [
  {
    key: "Knife Classification",
    title: "Knife Classification in Real-World Images",
    sections: [
      { h: "Objective", p: "Classify 192 knife categories using ~9,928 images; investigate the effects of architecture and hyperparameters on mAP." },
      { h: "Methodology", p: "Compared EfficientNet-B0, ResNet-50, and ViT; manual HPO across learning rate, batch size, epochs; tested small head modifications for ResNet-50 and ViT." },
      { h: "Results", p: "Best test mAP: ResNet-50 (0.72), followed by ViT (0.71) and EfficientNet-B0 (0.70). Higher/lower LR caused over/underfitting; original heads generalized better than modified variants." },
      { h: "Key Takeaways", p: "Learning rate dominated performance; consider AutoML (Optuna/RayTune) for systematic HPO." },
    ],
  },
  {
    key: "Heart Murmur Classification",
    title: "Heart Murmur Detection from Phonocardiogram Recordings",
    sections: [
      { h: "Objective", p: "Detect murmurs and clinical outcomes from PCG audio and demographics (PhysioNet 2022-inspired)." },
      { h: "Methodology", p: "Tabular: label encoding, KNN imputation, SMOTE; Audio: 1 kHz low-pass filter, spectrograms/chromograms; Models: DT, RF, SVC, KNN, MLP, XGBoost; DL: ResNet18/50/101; augmentation for DL models." },
      { h: "Results", p: "ResNet18 achieved the highest F1 among DL models; Decision Tree led ML models but lagged DL. Augmentation mitigated imbalance; multimodal fusion proposed for future work." },
      { h: "Key Takeaways", p: "Smaller DL models can outperform deeper ones on imbalanced medical audio; augmentation is essential for generalization." },
    ],
  },
  {
    key: "Vehicle Re-Identification (VeRi)",
    title: "Vehicle Re-Identification (VeRi)",
    sections: [
      { h: "Objective", p: "Match vehicles across non-overlapping cameras using CNNs on the VeRi dataset (~50k images, 776 vehicles)." },
      { h: "Methodology", p: "Evaluated MobileNetV3/V2, ResNet18/34/50, DenseNet121; tuned LR, batch size, optimizer; augmentation: Random Erasing, color jitter/augmentation; metrics: mAP and rank accuracy." },
      { h: "Results", p: "Best: DenseNet121 mAP 66.6% after 30 epochs. Random Erasing helped MobileNet & DenseNet; color-based augmentation generally hurt. AMSGrad with LR 0.0003, BS 64 performed best." },
      { h: "Key Takeaways", p: "Dense connectivity yielded the most discriminative features; architecture choice and augmentation strategy were critical." },
    ],
  },
  {
    key: "Human Face Generation",
    title: "Human Face Generation with Diffusion Models",
    sections: [
      { h: "Overview", p: "Trained a U-Net DDPM on CelebA-HQ (2,665 images; +42.95% augmentation) to generate faces; initial toy training on butterfly dataset." },
      { h: "Methodology", p: "AdamW + cosine LR scheduler; L2 loss vs L1; varied epochs and DDPM timesteps; evaluated with FID and human visual validation." },
      { h: "Results", p: "Default FID 84.43 → best FID 68.81 using 200 diffusion timesteps; 300 epochs improved over 100; L1 loss degraded quality (FID 183.64)." },
      { h: "Key Takeaways", p: "Tuning noise scheduler timesteps was most impactful; L2 preferred for fidelity; conditional diffusion and Bayesian HPO are promising next steps." },
    ],
  },
];

// const skills = {
//   Research: ["Diffusion models", "GANs", "RAG", "Explainable AI", "Evaluation (FID, AUROC)"],
//   Programming: ["Python", "PyTorch", "TensorFlow", "FastAPI", "Docker"],
//   Data: ["SQL", "Azure", "MLOps", "Data governance"],
//   Domain: ["Medical imaging", "Cybersecurity", "NLP (Arabic)"],
// };

const skills = { "Programming Languages": [ "Python", "Java", "MATLAB",],
                  "ML/AI Tools": ["HuggingFace", "TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "OpenCV",],
                  "Data Science Tools": ["Pandas", "NumPy", "SciPy",],
                  "Web Scraping Tools": ["Scrapy", "Beautiful Soup",],
                  "Visualization": ["Matplotlib", "Seaborn", "Plotly", "Bokeh",],
                  "Containerization & Deployment": ["Docker", "PyInstaller",],
                  "Version Control": ["Git", "GitHub",],};


// === Small helpers ===
const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
          {Icon && <Icon className="h-5 w-5" aria-hidden />}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  </section>
);

const Tag = ({ children }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
    {children}
  </Badge>
);

const iconForGroup = (group) => {
  const map = {
    "Programming Languages": Cpu,
    "ML/AI Tools": BookOpen,
    "Data Science Tools": Database,
    "Web Scraping Tools": Globe2,
    "Visualization": FlaskConical,
    "Containerization & Deployment": Shield,
    "Version Control": FileText,
    // fallback
    "Programming": Cpu,
    "Research": Brain,
    "Data": Database,
    "Domain": Shield,
  };
  return map[group] || Cpu;
};


// === Main component ===
export default function PortfolioSite() {
  const [dark, setDark] = useState(true);
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const allTags = useMemo(() => {
    const set = new Set(projects.flatMap((p) => p.tags));
    return Array.from(set).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch = [p.title, p.description].join(" ").toLowerCase().includes(search.toLowerCase());
      const matchesTag = filterTag ? p.tags.includes(filterTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [search, filterTag]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50">
        {/* Top bar */}
        <header className="sticky top-0 z-30 backdrop-blur border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/60">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* <div className="size-8 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" /> */}
              <img src="/rk-favicon.png" alt="RK logo" className="h-8 w-8 rounded-xl object-cover"
/>
              <span className="font-semibold">{profile.name}</span>
            </div>
            <nav className="hidden md:flex items-center gap-5 text-sm">
              {[
                ["About", "about"],
                ["Education", "education"],
                ["Thesis", "thesis"],
                ["Publications", "publications"],
                ["Projects", "projects"],
                ["Skills", "skills"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a key={id} href={`#${id}`} className="hover:underline underline-offset-4">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild size="sm" className="rounded-xl">
                <a href="#contact"><ArrowUpRight className="h-4 w-4 mr-1" />Connect</a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main className="mx-auto max-w-6xl px-4">
          <section className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] items-center py-10 md:py-16">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg md:text-xl text-slate-600 dark:text-slate-300">
                {profile.title}
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{profile.tagline}</p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button variant="outline" asChild className="rounded-xl">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="rounded-xl">
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </Button>
                {/* <Button variant="outline" asChild className="rounded-xl">
                  <a href={profile.website} target="_blank" rel="noreferrer" aria-label="Website">
                    <Globe2 className="h-4 w-4 mr-2" /> Website
                  </a>
                </Button> */}
                <Button asChild className="rounded-xl">
                  <a href="#contact" aria-label="Email">
                    <Mail className="h-4 w-4 mr-2" /> Contact
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="justify-self-center">
              <img src={profile.photoUrl} alt={`${profile.name} portrait`} className="h-40 w-40 md:h-56 md:w-56 rounded-2xl object-cover shadow-md" />
            </motion.div>
          </section>

          {/* About */}
          <Section id="about" icon={FileText} title="About">
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              I am an AI researcher and data scientist interested in medical imaging and responsible AI. I'm passionate about applying AI to the medical field to help
              advance healthcare outcomes. My expertise includes generative models (diffusion, GANs),
              medical image analysis, and privacy-aware MLOps. Beyond technical innovation, I strive to inspire and mentor the
              upcoming generation of researchers, fostering a future where technology and human expertise work together to improve lives.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4" />{profile.location}</span>
              <a className="inline-flex items-center gap-2 hover:underline" href={profile.orcid} target="_blank" rel="noreferrer">
                <BookOpen className="h-4 w-4" />ORCID
              </a>
            </div>
          </Section>

          {/* Education */}
          <div className="mt-8 grid gap-6 md:grid-cols-2" id="education">
            {education.map((e, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>{e.degree}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{e.school} · {e.year}</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    {e.details.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Thesis */}
          <div className="mt-8" id="thesis">
            <Section id="thesis" icon={Microscope} title="Thesis & Dissertation">
              <div className="grid gap-6 md:grid-cols-2">
                {thesis.map((t, i) => (
                  <Card key={i} className="rounded-2xl">
                    <CardHeader>
                      <CardTitle>{t.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{t.summary}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {t.methods.map((m) => <Tag key={m}>{m}</Tag>)}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {t.links.map((l) => (
                          <a key={l.label} href={l.href} className="inline-flex items-center gap-2 text-sm hover:underline" target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4" /> {l.label}
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </div>

          {/* Publications */}
          <div className="mt-8" id="publications">
            <Section id="publications" icon={Newspaper} title="Publications">
              <ul className="space-y-4">
                {publications.map((p, i) => (
                  <li key={i} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                    <div className="text-sm md:text-base">
                      <span className="font-semibold">{p.authors.join(", ")}</span> ({p.year}). <i>{p.title}</i>. {p.venue}
                      {p.doi ? <>. DOI: <a className="hover:underline" href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">{p.doi}</a></> : null}
                      {p.link ? <> · <a className="hover:underline" href={p.link} target="_blank" rel="noreferrer">Link</a></> : null}
                    </div>
                    {p.blurb && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.blurb}</p>}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Projects with search & tags */}
          <div className="mt-8" id="projects">
            <Section id="projects" icon={FlaskConical} title="Academic & Applied Projects">
              <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                <Input placeholder="Search projects…" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full md:max-w-sm" />
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant={filterTag === "" ? "default" : "outline"} className="rounded-full" onClick={() => setFilterTag("")}>All</Button>
                  {allTags.map((t) => (
                    <Button key={t} size="sm" variant={filterTag === t ? "default" : "outline"} className="rounded-full" onClick={() => setFilterTag(t)}>
                      {t}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                    <Card className="h-full rounded-2xl">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{p.title}</span>
                          <Badge variant="outline">{p.period}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3 text-sm">
                          {p.links?.map((l) => (
                            <a key={l.label} href={l.href} className="inline-flex items-center gap-2 hover:underline" target="_blank" rel="noreferrer">
                              <ArrowUpRight className="h-4 w-4" /> {l.label}
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>

          {/* Project Summaries (detailed tabs) */}
          <div className="mt-8" id="project-summaries">
            <Section id="project-summaries" icon={FlaskConical} title="Project Case Studies">
              <div className="grid gap-6 md:grid-cols-2">
                {projectSummaries.map((ps) => (
                  <Card key={ps.key} className="rounded-2xl">
                    <CardHeader>
                      <CardTitle>{ps.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {ps.sections.map((s, idx) => (
                          <div key={idx}>
                            <p className="text-sm font-semibold">{s.h}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{s.p}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </div>

          {/* Skills
          <div className="mt-8" id="skills">
            <Section id="skills" icon={Cpu} title="Research Skills & Tools">
              <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(skills).map(([group, items]) => (
                  <Card key={group} className="rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {group === "Research" && <Brain className="h-5 w-5" />}
                        {group === "Programming" && <Cpu className="h-5 w-5" />}
                        {group === "Data" && <Database className="h-5 w-5" />}
                        {group === "Domain" && <Shield className="h-5 w-5" />}
                        <span>{group}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {items.map((s) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </div> */}

{/* Skills */}
<div className="mt-8" id="skills">
  <Section id="skills" icon={Cpu} title="Skills">
    <div className="grid gap-6 md:grid-cols-2">
      {Object.entries(skills).map(([group, items]) => {
        const IconComp = iconForGroup(group);
        return (
          <Card key={group} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {IconComp && <IconComp className="h-5 w-5" />}
                <span>{group}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </Section>
</div>


          {/* Contact */}
          <div className="mt-8 mb-16" id="contact">
            <Section id="contact" icon={Mail} title="Contact">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" /> {profile.email}
                </a>
                <a className="inline-flex items-center gap-2 hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 hover:underline" href={profile.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            </Section>
          </div>
        </main>
      </div>
    </div>
  );
}
