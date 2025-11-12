'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Award,
  ArrowUpRight,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'

const stats = [
  { label: 'Graduates Trained', value: '2000+', caption: 'Across universities & corporate cohorts' },
  { label: 'Years in Tech', value: '12+', caption: 'Engineering, mentoring & delivery leadership' },
  { label: 'Programs Designed', value: '250+', caption: 'Hands-on bootcamps and industry pathways' },
  { label: 'Platforms Shipped', value: '10+', caption: 'Web, mobile & data products in production' },
]

const differentiators = [
  {
    title: 'Strategic Delivery',
    description:
      'Leads cross-functional teams from concept to launch, pairing disciplined execution with pragmatic innovation.',
    icon: Rocket,
  },
  {
    title: 'Learning at Scale',
    description:
      'Designs enterprise academies and college programs that translate emerging tech into measurable talent outcomes.',
    icon: Users,
  },
  {
    title: 'Productised Engineering',
    description:
      'Builds resilient, secure platforms across web, mobile and data ecosystems with tight feedback loops.',
    icon: Layers,
  },
]

const capabilityMatrix = [
  {
    title: 'Full-Stack Engineering',
    focus: 'Java | Spring | Microservices | React | Cloud-native delivery',
    items: [
      'Core Java',
      'Spring Boot',
      'Spring Security',
      'Hibernate',
      'REST APIs',
      'Microservices',
      'React.js',
      'PostgreSQL',
      'Supabase',
      'Docker',
    ],
  },
  {
    title: 'Data & Intelligence',
    focus: 'Analytics pipelines | ML Ops | GenAI enablement',
    items: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Data Science', 'Machine Learning', 'NLP', 'GenAI', 'Streamlit'],
  },
  {
    title: 'Big Data Fabric',
    focus: 'High-volume data processing & orchestration',
    items: ['Hadoop', 'Spark', 'Hive', 'Pig', 'Sqoop', 'MapReduce', 'HBase', 'Oozie', 'Flume'],
  },
  {
    title: 'Experience Engineering',
    focus: 'Responsive UI | Design systems | Accessibility-first',
    items: ['React Native', 'Angular', 'HTML5', 'CSS3', 'Bootstrap', 'UI Architecture', 'Storytelling Dashboards'],
  },
  {
    title: 'Platforms & Tooling',
    focus: 'DevOps | Quality | Collaboration',
    items: ['Git', 'CI/CD', 'Postman', 'Swagger', 'IntelliJ IDEA', 'VS Code', 'Maven', 'JUnit', 'Mockito'],
  },
  {
    title: 'Data Stores & Governance',
    focus: 'Relational & document databases with strong observability',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'SQLite', 'Query Optimization', 'Database Design'],
  },
]

  const projects = [
    {
      id: 'bitlabs-web',
    title: 'bitLabs Talent Acceleration Platform',
      role: 'Project Lead',
    tech: 'React, Spring Boot, Spring Security, PostgreSQL',
      url: 'https://www.bitlabs.in/jobs',
    description:
      'A unified hiring and upskilling cloud for job-seekers, recruiters and academic partners with role-based experiences.',
      highlights: [
      'Microservice architecture with SSO and multi-tenancy',
      'Smart job recommendation engine driven by learner telemetry',
      'Integrated MCQ testing, proctoring and recruiter dashboards',
      'Moodle LMS bridge delivering curriculum continuity',
    ],
    },
    {
      id: 'bitlabs-mobile',
    title: 'bitLabs Mobile Companion',
      role: 'Project Manager & Technical Architect',
      tech: 'React Native, Supabase, Edge Functions, Docker',
    description:
      'End-to-end mobile app for progress tracking, job alerts and personalised learning on Android & iOS.',
      highlights: [
      'Realtime sync across devices with Supabase and edge functions',
      'Dockerised deployment pipelines with staged rollouts',
      'Delivered to both Play Store and App Store with shared codebase',
      'Usage analytics powering in-app nudges and coaching moments',
    ],
    },
    {
      id: 'school-management',
    title: 'Institution Management Suite',
      role: 'Lead Developer',
      tech: 'Java, Servlet, JSP, MySQL',
    description:
      'Comprehensive campus operations platform covering admissions, finance, certification, timetables and compliance.',
      highlights: [
      'Modular MVC architecture with secure departmental workflows',
      'Automated certificate generation and audit-friendly reporting',
      'Payment integration with full ledger reconciliation',
    ],
    },
    {
      id: 'hadoop-analysis',
    title: 'Enterprise Workforce Intelligence',
      role: 'Lead Analyst & Developer',
    tech: 'Hadoop, MapReduce, Pig, Hive, Flume, HBase',
    description:
      'Big data analytics pipeline ingesting multi-year employee data to unlock leadership, retention and compensation insights.',
      highlights: [
      'Near real-time ingestion with Flume feeding HBase storage',
      'Reusable Hive models driving advanced analytics packs',
      'ETL automations reducing manual reporting by 60%',
    ],
  },
  ]

  const experience = [
    {
      company: 'Tekworks',
    role: 'Technical Lead | L&D Manager | Project Manager',
      period: 'Mar 2021 – Present',
      achievements: [
      'Scaled full-stack, QA and data science squads delivering multiple concurrent products.',
      'Architected and launched bitLabs web and mobile ecosystems serving thousands of learners.',
      'Designed corporate and campus programs graduating 1,000+ engineers every year.',
      'Ran placement drives, talent assessments and technical interviews across partner institutions.',
    ],
    },
    {
      company: 'NIIT Ltd',
      role: 'Senior Trainer & Software Developer',
      period: 'Sep 2016 – Nov 2020',
      achievements: [
      'Delivered immersive training across Java full stack, Python and data structures for 1,500+ learners.',
      'Launched big data workshops, mentoring capstone teams from discovery to defence.',
      'Shaped national curriculum blueprints and reusable lab assets for NIIT academies.',
    ],
    },
    {
      company: 'U-Tech Software Solutions Pvt Ltd',
      role: 'Java J2EE Developer',
      period: 'Aug 2015 – Feb 2016',
      achievements: [
      'Built secure JSP and Servlet modules with complex validations and data flows.',
      'Partnered with UI teams to uplift presentation layer using JSTL frameworks.',
    ],
  },
  ]

  const trainingPrograms = [
    {
    institution: 'CVR College – Centre of Excellence',
    program: 'Python + Machine Learning Immersive',
      duration: '120 hours',
    students: '90+ learners',
    year: '2024 – 2025',
    },
    {
    institution: 'CVR College – Centre of Excellence',
    program: 'Deep Learning, NLP & GenAI Bootcamp',
      duration: '120 hours',
    students: '40+ learners',
    year: '2024 – 2025',
  },
  {
    institution: 'Partner Engineering Colleges',
    program: 'Technical Leadership Workshops',
    duration: '2 – 3 day sprints',
    students: 'RK, SRK, Lingayya’s, Sivani & more',
    year: 'Ongoing',
  },
]

const awards = [
  {
    title: '“Build Trust” Award',
    organisation: 'Tekworks / Symphonize',
    description: 'Honoured for exceptional client advocacy, delivery excellence and mentorship impact.',
  },
  {
    title: 'Star of the Month',
    organisation: 'Tekworks',
    description: 'Recognised for orchestrating high-stakes launch readiness and academy success metrics.',
  },
]

const certifications = [
  { title: 'Machine Learning', issuer: 'Great Learning' },
  { title: 'Python Data Science', issuer: 'NIIT (2017)' },
  { title: 'Hadoop Tech-Mentor', issuer: 'NIIT (2016)' },
  { title: 'Core Java', issuer: 'NIIT (2016)' },
  { title: 'ChatGPT with Excel', issuer: 'Great Learning' },
]

const contactLinks = [
  {
    label: 'Call',
    href: 'tel:+919052425905',
    icon: Phone,
    sublabel: '+91 9052425905',
  },
  {
    label: 'Mail',
    href: 'mailto:sa.nagulmeera@gmail.com',
    icon: Mail,
    sublabel: 'sa.nagulmeera@gmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nagul-meera-shaik-085a8358',
    icon: Linkedin,
    sublabel: 'Stay connected',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Nagul-Tekworks',
    icon: Github,
    sublabel: 'Engineering playbook',
  },
]

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />
        <div className="absolute right-[-12rem] top-1/3 h-[32rem] w-[32rem] rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="absolute left-[-12rem] bottom-[-10rem] h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-10 md:pt-16">
        <header className="relative grid gap-10 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 shadow-2xl backdrop-blur md:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)]">
          <div className="pointer-events-none absolute right-6 top-6 z-10 flex h-28 w-28 items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/70 p-1 shadow-xl backdrop-blur">
            <Image
              src="/profile.png"
              alt="Portrait of Nagul Meera Shaik"
              width={108}
              height={108}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
          <div className="max-w-2xl space-y-4 pt-16 md:pt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1 text-sm text-slate-300">
              <Sparkles className="h-4 w-4 text-sky-400" />
              Technical Lead · Learning & Development Strategist
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Nagul Meera Shaik
            </h1>
            <p className="text-lg text-slate-300">
              I help organisations build high-performing engineering teams, ship resilient digital products and uplift talent
              pipelines through deeply hands-on learning experiences.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-400">
                <a href="mailto:sa.nagulmeera@gmail.com">
                  Let&apos;s collaborate
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800">
                <a href="#projects">View signature work</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 self-start pt-16 md:pt-0">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 transition hover:border-slate-600 hover:bg-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-slate-200 transition group-hover:bg-sky-500/20 group-hover:text-sky-300">
                    <contact.icon className="h-5 w-5" />
        </div>
                  <div>
                    <p className="text-sm font-medium text-white">{contact.label}</p>
                    <p className="text-xs text-slate-400">{contact.sublabel}</p>
              </div>
            </div>
                <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-sky-300" />
              </a>
            ))}
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-4" aria-label="Career metrics">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-slate-800/80 bg-slate-900/70 shadow-xl">
              <CardHeader className="space-y-2">
                <CardTitle className="text-sm font-semibold text-slate-400">{stat.label}</CardTitle>
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <CardDescription className="text-sm text-slate-400">{stat.caption}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-3" aria-label="Value proposition">
          {differentiators.map((item) => (
            <div key={item.title} className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-sky-500" />
              <item.icon className="mb-4 h-8 w-8 text-sky-300" />
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </section>

        <section id="capabilities" className="space-y-8" aria-label="Capabilities">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Core Capability Matrix</h2>
              <p className="text-sm text-slate-400">
                Engineering rigour meets talent amplification across the stack and delivery lifecycle.
              </p>
                  </div>
            <Badge className="w-fit border border-sky-500/40 bg-sky-500/15 text-sky-200">Hands-on leadership</Badge>
                  </div>
          <div className="grid gap-6 md:grid-cols-2">
            {capabilityMatrix.map((capability) => (
              <Card key={capability.title} className="h-full border-slate-800/70 bg-slate-900/70 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{capability.title}</CardTitle>
                  <CardDescription className="text-slate-400">{capability.focus}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {capability.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="border border-slate-700 bg-slate-800/80 text-slate-200">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
                    ))}
                  </div>
        </section>

        <section id="projects" className="space-y-10" aria-label="Signature work">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Signature Delivery</h2>
              <p className="text-sm text-slate-400">
                Product, platform and data outcomes delivered with measurable business uplift.
              </p>
            </div>
            <Badge className="w-fit border border-purple-500/40 bg-purple-600/20 text-purple-100">Impact-first</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl transition hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-sky-900/40"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10" />
                </div>
                <div className="relative flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{project.role}</p>
                    </div>
                    <Badge className="border border-slate-700 bg-slate-800/80 text-slate-200">{project.tech}</Badge>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <div className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                        {project.url && (
                    <Button
                      asChild
                      variant="ghost"
                      className="w-fit rounded-full border border-transparent bg-slate-800/60 text-slate-200 transition hover:border-sky-500/50 hover:bg-slate-800/80 hover:text-sky-200"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Explore case study
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
        </section>

        <section id="experience" className="space-y-10" aria-label="Experience timeline">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
              <h2 className="text-3xl font-semibold text-white">Experience Timeline</h2>
              <p className="text-sm text-slate-400">Leadership across delivery, curriculum design and talent transformation.</p>
                  </div>
            <Badge className="w-fit border border-indigo-500/40 bg-indigo-600/20 text-indigo-100">Trusted partner</Badge>
                  </div>
          <div className="relative grid gap-10">
            <div className="absolute left-4 top-1 bottom-4 w-px bg-slate-800 md:left-1/2 md:-translate-x-1/2" />
            {experience.map((role, index) => (
              <div
                key={role.company}
                className={`relative flex flex-col gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 shadow-xl md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:ml-auto md:translate-y-6' : 'md:mr-auto md:-translate-y-6'
                }`}
              >
                <div className="absolute left-4 top-6 h-3 w-3 rounded-full border border-sky-400 bg-slate-900 md:left-auto md:right-[-1.65rem] md:top-1/2 md:-translate-y-1/2" />
                <div className="space-y-1">
                  <h3 className="text-2xl font-semibold text-white">{role.company}</h3>
                  <p className="text-sm font-medium text-slate-300">{role.role}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{role.period}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  {role.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <TrendingUp className="mt-[2px] h-4 w-4 flex-shrink-0 text-sky-300" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="training" className="space-y-10" aria-label="Training programs">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Training & Talent Uplift</h2>
              <p className="text-sm text-slate-400">Designing future-ready engineers through immersive, outcome-led journeys.</p>
            </div>
            <Badge className="w-fit border border-sky-500/40 bg-sky-500/15 text-sky-200">Academy architect</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trainingPrograms.map((program) => (
              <Card key={program.program} className="border-slate-800/70 bg-slate-900/70 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{program.program}</CardTitle>
                  <CardDescription className="text-slate-400">{program.institution}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-slate-300">
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-sky-300" /> {program.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-sky-300" /> {program.students}
                  </p>
                  <p className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-sky-300" /> {program.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="recognition" className="grid gap-6 lg:grid-cols-2" aria-label="Recognition">
          <Card className="h-full border-slate-800/70 bg-slate-900/70 shadow-xl">
            <CardHeader className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-100">
                <Award className="h-4 w-4" /> Recognition
              </div>
              <CardTitle className="text-2xl text-white">Awards & Highlights</CardTitle>
              <CardDescription className="text-slate-400">
                Celebrated for building trust, accelerating delivery and elevating learning culture.
              </CardDescription>
                </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-200">
              {awards.map((award) => (
                <div key={award.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <h3 className="text-lg font-semibold text-white">{award.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{award.organisation}</p>
                  <p className="mt-2 text-slate-300">{award.description}</p>
                  </div>
              ))}
                </CardContent>
              </Card>

          <Card className="h-full border-slate-800/70 bg-slate-900/70 shadow-xl">
            <CardHeader className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/15 px-4 py-1 text-sm text-sky-200">
                <ShieldCheck className="h-4 w-4" /> Credentials
              </div>
              <CardTitle className="text-2xl text-white">Certifications</CardTitle>
              <CardDescription className="text-slate-400">
                Continuous learning as a catalyst for better product decisions and stronger teams.
              </CardDescription>
              </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-200">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3">
                  <div>
                    <p className="text-base font-semibold text-white">{cert.title}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{cert.issuer}</p>
                  </div>
                  <GraduationCap className="h-5 w-5 text-sky-300" />
                </div>
              ))}
              </CardContent>
            </Card>
        </section>
      </div>

      <footer className="border-t border-slate-800/70 bg-slate-950/90 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-base font-semibold text-white">Nagul Meera Shaik</p>
            <p className="text-slate-400">Technical Lead · Learning & Development Strategist</p>
            <p className="flex items-center gap-2 text-slate-500">
              <MapPin className="h-4 w-4" /> Guntur · Andhra Pradesh · India
            </p>
          </div>
          <div className="text-slate-500">
            “Setting bold standards, mentoring with empathy, delivering with precision.”
          </div>
          <div className="text-slate-600">© {new Date().getFullYear()} Nagul Meera Shaik. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
