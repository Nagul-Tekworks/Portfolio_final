'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Mail, Phone, Linkedin, Github, Award, Users, Code, GraduationCap, Briefcase, Star, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  const skills = {
    java: [
      'Core Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate',
      'REST APIs', 'Microservices', 'Maven', 'JUnit', 'Mockito'
    ],
    python: [
      'Python Programming', 'Machine Learning', 'Data Science', 'Pandas', 'NumPy',
      'Scikit-Learn', 'NLP', 'Streamlit', 'Data Visualization'
    ],
    frontend: [
      'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap',
      'Responsive Design', 'React Native', 'Angular'
    ],
    bigdata: [
      'Hadoop', 'Hive', 'Pig', 'Sqoop', 'Spark', 'MapReduce',
      'HBase', 'Shell Scripting', 'Oozie'
    ],
    databases: [
      'PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'SQLite',
      'Database Design', 'Query Optimization'
    ],
    tools: [
      'Git', 'Docker', 'IntelliJ IDEA', 'VS Code', 'Postman',
      'Swagger', 'CI/CD', 'Maven'
    ]
  }

  const projects = [
    {
      id: 'bitlabs-web',
      title: 'bitLabs Web Application',
      role: 'Project Lead',
      tech: 'React.js, Spring Boot, Spring Security, PostgreSQL',
      description: 'Job portal offering smart job recommendations, application tracking, recruiter dashboards, and Moodle integration.',
      url: 'https://www.bitlabs.in/jobs',
      highlights: [
        'Role-based authentication system',
        'Smart job recommendation engine',
        'Integrated MCQ testing platform',
        'Moodle LMS integration',
        'Real-time application tracking'
      ]
    },
    {
      id: 'bitlabs-mobile',
      title: 'bitLabs Mobile App',
      role: 'Project Manager & Technical Architect',
      tech: 'React Native, Supabase, Edge Functions, Docker',
      description: 'Mobile version of bitLabs platform for Android & iOS with job discovery and progress tracking.',
      highlights: [
        'Cross-platform mobile development',
        'Dockerized API deployment',
        'Real-time data synchronization',
        'Published on Play Store & App Store',
        'PostgreSQL backend with Edge Functions'
      ]
    },
    {
      id: 'school-management',
      title: 'School Management System',
      role: 'Lead Developer',
      tech: 'Java, Servlet, JSP, MySQL',
      description: 'Comprehensive software to manage admissions, certificates, fee submissions, and department coordination.',
      highlights: [
        'Student admission management',
        'Certificate generation system',
        'Fee payment tracking',
        'Department coordination tools',
        'MVC architecture implementation'
      ]
    },
    {
      id: 'hadoop-analysis',
      title: 'Employee Data Analysis Using Hadoop',
      role: 'Lead Analyst & Developer',
      tech: 'MapReduce, Pig, Hive, Flume, HBase',
      description: 'Big data pipeline for large-scale employee datasets with advanced analytics and insights.',
      highlights: [
        'Large-scale data processing',
        'ETL pipeline development',
        'Advanced analytics with Hive/Pig',
        'Real-time data ingestion with Flume',
        'Scalable data storage with HBase'
      ]
    }
  ]

  const experience = [
    {
      company: 'Tekworks',
      role: 'Technical Lead | Learning and Development Manager & Project Manager',
      period: 'Mar 2021 – Present',
      achievements: [
        'Managed real-time projects in Full-Stack Java, Mobile App Development, and Data Science',
        'Designed and delivered training programs for 1,000+ graduates',
        'Led development of bitLabs Web and Mobile applications',
        'Conducted placement drives and technical interviews',
        'Delivered workshops at 5+ engineering colleges'
      ]
    },
    {
      company: 'NIIT Ltd',
      role: 'Senior Trainer & Software Developer',
      period: 'Sep 2016 – Nov 2020',
      achievements: [
        'Delivered training sessions across Java Full Stack, Python, and Data Structures',
        'Mentored over 1,500+ learners in career transitions',
        'Conducted technical workshops on Big Data Technologies',
        'Designed curriculum and training materials',
        'Guided final-year students in capstone projects'
      ]
    },
    {
      company: 'U-Tech Software Solutions Pvt Ltd',
      role: 'Java J2EE Developer',
      period: 'Aug 2015 – Feb 2016',
      achievements: [
        'Developed JSPs and Servlets with validations',
        'Contributed to frontend development using JSTL'
      ]
    }
  ]

  const trainingPrograms = [
    {
      institution: 'CVR College - Center of Excellence',
      program: 'Python + ML Program',
      duration: '120 hours',
      students: '90+ students',
      year: '2024-25'
    },
    {
      institution: 'CVR College - Center of Excellence',
      program: 'DL + NLP + GenAI Program',
      duration: '120 hours',
      students: '40+ students',
      year: '2024-25'
    },
    {
      institution: 'Multiple Engineering Colleges',
      program: 'Technical Workshops',
      colleges: 'RK College, SRK College, Lingayya\'s Institute, Sivani College',
      focus: 'Java, Python, Data Science, Big Data'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Nagul Meera Shaik</h1>
              <p className="text-lg text-slate-600 mt-1">Technical Lead & Learning Development Manager</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a href="tel:+919052425905" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9052425905</span>
              </a>
              <a href="mailto:sa.nagulmeera@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <Mail className="w-4 h-4" />
                <span className="text-sm">sa.nagulmeera@gmail.com</span>
              </a>
              <a href="http://www.linkedin.com/in/nagul-meera-shaik-085a8358" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://github.com/Nagul-Tekworks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Teams Through Technology & Training
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              12+ years of experience in Full-Stack Development, Team Leadership, and Technical Training
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-blue-200">Graduates Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-blue-200">College Workshops</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Multiple</div>
                <div className="text-blue-200">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="achievements">Awards</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-slate-700">
                  Results-driven Project Manager and Full Stack Developer with 12+ years of experience in software development, 
                  team leadership, and technical training. Skilled in Java, Python, and Big Data, delivering scalable solutions 
                  and mentoring teams to achieve business goals efficiently.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Leadership & Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Team Leadership</Badge>
                    <span className="text-sm text-slate-600">Development & QA Teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Technical Training</Badge>
                    <span className="text-sm text-slate-600">1000+ Graduates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Mentoring</Badge>
                    <span className="text-sm text-slate-600">Train the Trainer Programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Workshops</Badge>
                    <span className="text-sm text-slate-600">College Programs</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Technical Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Full-Stack Java</Badge>
                    <span className="text-sm text-slate-600">Spring Boot, React.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Data Science</Badge>
                    <span className="text-sm text-slate-600">Python, ML, NLP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Big Data</Badge>
                    <span className="text-sm text-slate-600">Hadoop, Spark, Hive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Mobile Development</Badge>
                    <span className="text-sm text-slate-600">React Native</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Java Full Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.java.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Python & Data Science</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.python.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Frontend Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Big Data Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.bigdata.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Development Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-700 mt-1">
                        {exp.role}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2">
                        {project.title}
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        <Badge variant="outline" className="mr-2">{project.role}</Badge>
                        <span className="text-sm text-slate-600">{project.tech}</span>
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleProject(project.id)}
                      className="mt-2 md:mt-0"
                    >
                      {expandedProject === project.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  {expandedProject === project.id && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Training Tab */}
          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Training Programs & Workshops
                </CardTitle>
                <CardDescription>
                  Comprehensive training programs delivered across multiple institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {trainingPrograms.map((program, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-2">{program.institution}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{program.program}</Badge>
                        </div>
                        {program.duration && (
                          <p className="text-sm text-slate-600">Duration: {program.duration}</p>
                        )}
                        {program.students && (
                          <p className="text-sm text-slate-600">Students: {program.students}</p>
                        )}
                        {program.year && (
                          <p className="text-sm text-slate-600">Year: {program.year}</p>
                        )}
                        {program.colleges && (
                          <p className="text-sm text-slate-600">Colleges: {program.colleges}</p>
                        )}
                        {program.focus && (
                          <p className="text-sm text-slate-600">Focus Areas: {program.focus}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technical Training Areas</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Java Full Stack Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Python & Machine Learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Deep Learning & NLP</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Big Data Technologies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Generative AI</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Training Methodologies</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Hands-on Project-based Learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Industry-oriented Curriculum</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Blended Learning Models</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Train the Trainer Programs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Technical Workshops & Bootcamps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-lg">"Build Trust" Award</h4>
                    <p className="text-slate-600">Tekworks / Symphonize</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Recognized for exemplifying company values in client delivery and mentoring
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg">Star of the Month</h4>
                    <p className="text-slate-600">Tekworks</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Awarded for consistent performance in project execution and training contributions
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">Machine Learning</Badge>
                    <span className="text-sm text-slate-600">Great Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">Python Data Science</Badge>
                    <span className="text-sm text-slate-600">NIIT (2017)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">Hadoop Tech-Mentor</Badge>
                    <span className="text-sm text-slate-600">NIIT (2016)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">Core Java</Badge>
                    <span className="text-sm text-slate-600">NIIT (2016)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">ChatGPT with Excel</Badge>
                    <span className="text-sm text-slate-600">Great Learning</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-600" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Training Impact</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Trained 1,000+ graduates in technical skills</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Mentored 1,500+ learners in career transitions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Conducted workshops at 5+ engineering colleges</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Designed industry-oriented curriculum</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Technical Leadership</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Led development of bitLabs platform</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Published mobile apps on Play Store & App Store</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Managed cross-functional development teams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Conducted technical interviews & hiring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Nagul Meera Shaik</h3>
              <p className="text-slate-300">Technical Lead & Learning Development Manager</p>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm text-slate-300">Guntur, Andhra Pradesh, India</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-slate-300 text-sm">
                "Setting high standards and delivering quality outcomes through continuous learning and mentoring"
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-6 pt-6 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 Nagul Meera Shaik. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
