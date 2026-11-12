'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  Clock,
  Database,
  DollarSign,
  Download,
  FileCheck,
  Leaf,
  Linkedin,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  compactProjects,
  flagshipProjects,
  type ProjectMetric,
  type ProjectMetricIcon,
} from '@/lib/projects'
import Image from "next/image"
import Link from "next/link"
import { RevealSection } from "@/components/reveal-section"
import { FlagshipCard } from "@/components/flagship-card"
import { AnimatedMetric } from "@/components/animated-metric"

const metricIcons: Record<ProjectMetricIcon, LucideIcon> = {
  target: Target,
  "trending-up": TrendingUp,
  zap: Zap,
  clock: Clock,
  users: Users,
  dollar: DollarSign,
  activity: Activity,
  leaf: Leaf,
  "file-check": FileCheck,
  database: Database,
  shield: ShieldCheck,
}

function MetricTiles({
  metrics,
  compact = false,
}: {
  metrics: ProjectMetric[]
  compact?: boolean
}) {
  return (
    <div
      className={
        compact
          ? "grid grid-cols-2 gap-2 pt-4 mt-auto"
          : "grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 mt-auto"
      }
    >
      {metrics.map((metric) => {
        const Icon = metricIcons[metric.icon]
        return (
          <div
            key={metric.label}
            className={
              compact
                ? "flex flex-col items-center justify-center bg-[#F3F1EC] border border-[#E5E2DC] rounded-lg p-2.5 text-center"
                : "flex flex-col items-center justify-center bg-[#F3F1EC] border border-[#E5E2DC] rounded-lg p-3 text-center"
            }
          >
            <Icon
              className={
                compact ? "w-4 h-4 text-[#14532D] mb-1.5" : "w-5 h-5 text-[#14532D] mb-2"
              }
            />
            <AnimatedMetric
              stat={metric.stat}
              className={
                compact ? "text-lg font-bold text-[#14532D]" : "text-2xl font-bold text-[#14532D]"
              }
            />
            <p
              className={
                compact
                  ? "mt-0.5 flex min-h-[3rem] items-center justify-center text-[11px] leading-snug text-[#52525B]"
                  : "mt-1 flex min-h-[4.25rem] items-center justify-center text-xs leading-snug text-[#52525B]"
              }
            >
              {metric.label}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [activeDomain, setActiveDomain] = useState<string>("All")
  const [openArch, setOpenArch] = useState<Set<string>>(new Set())

  const toggleArch = (slug: string) => {
    setOpenArch((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      return next
    })
  }

  const domains = ["All", "Embedded & IoT", "Applied AI / RAG", "Enterprise & Operations"] as const
  const filteredFlagship = activeDomain === "All"
    ? flagshipProjects
    : flagshipProjects.filter((p) => p.domain === activeDomain)
  const filteredCompact = activeDomain === "All"
    ? compactProjects
    : compactProjects.filter((p) => p.domain === activeDomain)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#F7F6F2]/80 backdrop-blur-md border-b border-[#E5E2DC] z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-serif font-bold text-[#18181B] text-2xl">Dushyant Puri, MBA </h1>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm text-[#18181B] hover:text-[#14532D] transition-colors">About</button>
              <button onClick={() => scrollToSection('education')} className="text-sm text-[#18181B] hover:text-[#14532D] transition-colors">Education</button>
              <button onClick={() => scrollToSection('work')} className="text-sm text-[#18181B] hover:text-[#14532D] transition-colors">Work</button>
              <button onClick={() => scrollToSection('how-i-work')} className="text-sm text-[#18181B] hover:text-[#14532D] transition-colors">How I Work</button>
              <button onClick={() => scrollToSection('community')} className="text-sm text-[#18181B] hover:text-[#14532D] transition-colors">Community</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-[#18181B] hover:text-[#14532D] transition-colors">Contact</button>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[#14532D] text-white text-sm font-medium hover:bg-[#0F5132] transition-colors"
            >
              Work With Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <RevealSection>
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#18181B] mb-6 leading-[0.9] tracking-tight">
                Turning vague
                <br />
                ideas into
                <br />
                <span className="font-serif italic text-[#C2410C]">shipped</span>
                <br />
                products.
              </h1>
              <p className="text-xl text-[#52525B] mb-4 leading-relaxed">
                Product & Delivery leader with 12+ years experience in software, embedded, and IoT. I'm usually brought in when the problem is ambiguous but the outcome really matters.
              </p>
              <p className="text-lg text-[#18181B] mb-8">
                Open to contract projects, fractional product leadership, and select full-time roles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#14532D] hover:bg-[#0F5132] text-white rounded-full"
                  onClick={() => scrollToSection('work')}
                >
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#E5E2DC]"
                  onClick={() => scrollToSection('contact')}
                >
                  Work With Me
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="h-64 rounded-full overflow-hidden bg-[#F7F6F2] w-64">
                  <Image
                    src="/images/design-mode/aCloseup.jpeg"
                    alt="Dushyant Puri - Professional headshot"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="text-sm py-1 px-3">Product Management</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">Embedded & IoT</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">MVP Delivery</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealSection>

      {/* Experience & Collaborations Strip */}
      <RevealSection delay={0.1}>
      <section className="py-8 px-4 bg-[#18181B] border-y border-[#18181B]">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-widest text-[#F8FAFC]/70 mb-4">
            Experience & Collaborations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#F8FAFC]">
            <span className="text-sm font-medium">Conestoga SMART Centre</span>
            <span className="hidden sm:inline text-[#F8FAFC]/30">•</span>
            <span className="text-sm font-medium">Dexterra Group</span>
            <span className="hidden sm:inline text-[#F8FAFC]/30">•</span>
            <span className="text-sm font-medium">Skyjack Inc.</span>
            <span className="hidden sm:inline text-[#F8FAFC]/30">•</span>
            <span className="text-sm font-medium">DXC Technologies</span>
            <span className="hidden sm:inline text-[#F8FAFC]/30">•</span>
            <span className="text-sm font-medium">Boomi IPaaS</span>
          </div>
        </div>
      </section>
      </RevealSection>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#F7F6F2]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-[#18181B] mb-8">About Me</h2>
          <p className="text-lg text-[#52525B] mb-12 leading-relaxed max-w-4xl">
            With over 12 years of experience, I specialize in taking organizations through full product development cycles—from ambiguity to clarity to shipped outcomes. My work spans B2B software, embedded systems, IoT platforms, and applied research initiatives. I'm known for transforming complex, messy problems into clear plans that teams can execute, and most importantly, for making sure the work actually ships.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#18181B] mb-3">Experience</h3>
              <p className="text-[#52525B] leading-relaxed">
                12+ years • B2B software, embedded systems, IoT platforms, applied research initiatives
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#18181B] mb-3">Strengths</h3>
              <p className="text-[#52525B] leading-relaxed">
                Problem framing, roadmapping, stakeholder alignment, delivery & RAID management
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#18181B] mb-3">How I work with you</h3>
              <p className="text-[#52525B] leading-relaxed">
                Contract projects • Fractional product/program leadership • Select full-time roles
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="https://www.linkedin.com/in/puridushyant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </Button>
            </Link>

            <a
              href="/PDFs/Dushyant-Puri-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section id="education" className="py-20 px-4 bg-[#F7F6F2]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-[#18181B] mb-4">Education & Credentials</h2>
          <p className="text-lg text-[#52525B] mb-12">
            Formal training that underpins my product, delivery, and technical work.
          </p>

          {/* Degree Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* MBA Card */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">MBA</CardTitle>
                <CardDescription className="text-base">
                  University Canada West • Vancouver BC
                  <div className="text-sm text-[#52525B] mt-1">2022 – 2023</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-[#52525B] space-y-2">
                  <li>• Focus on strategy, operations, and technology management</li>
                  <li>• Applied coursework in product strategy and business analytics</li>
                  <li>• Team projects leading cross-functional initiatives</li>
                </ul>
              </CardContent>
            </Card>

            {/* Postgraduate Certificate Card */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Postgraduate – Project Management</CardTitle>
                <CardDescription className="text-base">
                  Conestoga College • Kitchener, ON
                  <div className="text-sm text-[#52525B] mt-1">2013 – 2014</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-[#52525B] space-y-2">
                  <li>• Advanced training in project planning, scheduling, and risk management</li>
                  <li>• Emphasis on Agile, hybrid, and traditional delivery approaches</li>
                  <li>• Hands-on work with stakeholder communication and governance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Bachelor's Card */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Bachelor's in Mechanical Engineering</CardTitle>
                <CardDescription className="text-base">
                  Rajiv Gandhi Technical University • Madhya Pradesh, India
                  <div className="text-sm text-[#52525B] mt-1">2006 – 2011</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-[#52525B] space-y-2">
                  <li>• Strong foundation in systems thinking and engineering principles</li>
                  <li>• Exposure to manufacturing, design, and testing environments</li>
                  <li>• Final-year project related to real-world engineering problems</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-[#18181B] mb-6">Selected Certifications</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm py-2 px-4">CSPO – Certified Scrum Product Owner</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">A-CSM – Advanced Certified ScrumMaster</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">PRINCE2</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Lean Six Sigma</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">ISO 9001 Internal Auditor</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Agile & Hybrid Delivery</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <RevealSection delay={0.15}>
      <section id="work" className="py-20 px-4 bg-[#F3F1EC]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#18181B] mb-4">Featured Work</h2>
            <p className="text-lg text-[#52525B]">
              Real projects where I shepherded solutions from idea to working outcomes.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="relative flex flex-wrap gap-2 mb-8"
          >
            {domains.map((domain) => {
              const isActive = activeDomain === domain
              return (
                <button
                  key={domain}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveDomain(domain)}
                  onKeyDown={(e) => {
                    const idx = domains.indexOf(domain)
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                      e.preventDefault()
                      const next = domains[(idx + 1) % domains.length]
                      setActiveDomain(next)
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                      e.preventDefault()
                      const prev = domains[(idx - 1 + domains.length) % domains.length]
                      setActiveDomain(prev)
                    } else if (e.key === 'Home') {
                      e.preventDefault()
                      setActiveDomain(domains[0])
                    } else if (e.key === 'End') {
                      e.preventDefault()
                      setActiveDomain(domains[domains.length - 1])
                    }
                  }}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D]"
                >
                  {isActive && (
                    <motion.span
                      layoutId="domain-indicator"
                      className="absolute inset-0 rounded-full bg-[#14532D]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-white' : 'text-[#18181B] hover:text-[#14532D]'}`}>
                    {domain}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Tier 1 — Flagship case studies */}
          {filteredFlagship.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredFlagship.map((project) => (
              <FlagshipCard
                key={project.slug}
                className="flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-2xl mb-4 min-h-[4rem]">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-[#F3F1EC] text-[#14532D] hover:bg-[#F3F1EC]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="font-semibold text-[#18181B] mb-2">Problem</p>
                      <p className="text-[#52525B]">{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#18181B] mb-2">My Role</p>
                      <ul className="list-disc list-inside text-[#52525B] space-y-1">
                        {project.role.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[#18181B] mb-2">Outcome</p>
                      <p className="text-[#52525B]">{project.outcome}</p>
                    </div>
                  </div>
                  <MetricTiles metrics={project.metrics} />
                  {project.architectureNodes && project.architectureNodes.length > 0 && (
                    <div className="pt-4 border-t border-[#E5E2DC]">
                      <button
                        type="button"
                        aria-expanded={openArch.has(project.slug)}
                        aria-controls={`arch-${project.slug}`}
                        onClick={() => toggleArch(project.slug)}
                        className="text-sm font-medium text-[#14532D] hover:text-[#0F5132] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D] rounded"
                      >
                        {openArch.has(project.slug) ? "Hide System Architecture" : "View System Architecture"}
                      </button>
                      {openArch.has(project.slug) && (
                        <div
                          id={`arch-${project.slug}`}
                          className="mt-4 rounded-lg border border-[#E5E2DC] bg-[#F3F1EC] p-4"
                        >
                          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                            {project.architectureNodes!.map((node, idx) => (
                              <div key={node} className="flex flex-col md:flex-row items-center gap-2 md:gap-3 w-full md:w-auto">
                                <div className="w-full md:w-auto max-w-full text-center rounded-md bg-white border border-[#E5E2DC] px-3 py-2 text-xs font-medium text-[#18181B] break-words">
                                  {node}
                                </div>
                                {idx < project.architectureNodes!.length - 1 && (
                                  <span
                                    className="text-[#52525B] rotate-90 md:rotate-0"
                                    aria-hidden="true"
                                  >
                                    →
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                          {project.architectureNote && (
                            <p className="mt-3 text-xs text-[#52525B] leading-relaxed">
                              {project.architectureNote}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </FlagshipCard>
            ))}
          </div>
          )}

          {/* Tier 2 — Compact delivered projects */}
          {filteredCompact.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-[#18181B] mt-16 mb-6">
                More Delivered Projects
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
            {filteredCompact.map((project) => (
              <Card
                key={project.slug}
                className="shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 py-5"
              >
                <CardHeader className="px-5">
                  {project.date && (
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#52525B]">
                      {project.date}
                    </p>
                  )}
                  <CardTitle className="text-xl leading-tight min-h-[4.75rem]">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-[#F3F1EC] text-[#14532D] hover:bg-[#F3F1EC]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 px-5">
                  <p className="text-sm leading-snug text-[#52525B]">{project.summary}</p>
                  <MetricTiles metrics={project.metrics} compact />
                  {project.architectureNodes && project.architectureNodes.length > 0 && (
                    <div className="pt-2">
                      <button
                        type="button"
                        aria-expanded={openArch.has(project.slug)}
                        aria-controls={`arch-${project.slug}`}
                        onClick={() => toggleArch(project.slug)}
                        className="text-xs font-medium text-[#14532D] hover:text-[#0F5132] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D] rounded"
                      >
                        {openArch.has(project.slug) ? "Hide System Architecture" : "View System Architecture"}
                      </button>
                      {openArch.has(project.slug) && (
                        <div
                          id={`arch-${project.slug}`}
                          className="mt-3 rounded-lg border border-[#E5E2DC] bg-[#F3F1EC] p-3"
                        >
                          <div className="flex flex-col gap-2">
                            {project.architectureNodes!.map((node, idx) => (
                              <div key={node} className="flex flex-col items-center">
                                <div className="w-full text-center rounded-md bg-white border border-[#E5E2DC] px-2 py-1.5 text-[11px] font-medium text-[#18181B]">
                                  {node}
                                </div>
                                {idx < project.architectureNodes!.length - 1 && (
                                  <span className="text-[#52525B]" aria-hidden="true">↓</span>
                                )}
                              </div>
                            ))}
                          </div>
                          {project.architectureNote && (
                            <p className="mt-2 text-[11px] text-[#52525B] leading-relaxed">
                              {project.architectureNote}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
            </>
          )}
        </div>
      </section>
      </RevealSection>

      {/* How I Work Section */}
      <section id="how-i-work" className="py-20 px-4 bg-[#F7F6F2]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-[#18181B] mb-4">How I Work</h2>
          <p className="text-lg text-[#52525B] mb-12">
            My job is to take messy ideas, align the right people, and drive the work to a real outcome.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-sm border-l-4 border-l-[#14532D]">
              <CardHeader>
                <CardTitle className="text-xl">Start with the real problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#52525B] leading-relaxed">
                  I make sure we're aligned on business and user outcomes, not just a feature list. Discovery work and problem framing are essential before jumping into solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-[#14532D]">
              <CardHeader>
                <CardTitle className="text-xl">Make a realistic plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#52525B] leading-relaxed">
                  Epics, milestones, risks, and dependencies are surfaced early and tracked throughout. I create roadmaps that teams can actually execute against.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-[#14532D]">
              <CardHeader>
                <CardTitle className="text-xl">Keep teams unblocked</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#52525B] leading-relaxed">
                  I work across engineering, design, and stakeholders to remove blockers and make decisions. When teams are stuck, I help them move forward.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-[#14532D]">
              <CardHeader>
                <CardTitle className="text-xl">Finish what we start</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#52525B] leading-relaxed">
                  I focus on shipping something that works and can be tested, not endless "in progress" work. Done means deployed, validated, and ready for users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-[#F7F6F2]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-[#18181B] mb-8">Community & Side Projects</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-[#52525B] leading-relaxed">
                Beyond client work, I'm active in the product and tech community. I believe in sharing knowledge, mentoring emerging talent, and continuously building new things. Whether it's speaking at meetups, advising students, or tinkering with embedded systems on weekends, I stay engaged with the broader ecosystem.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14532D] mt-2"></div>
                <p className="text-[#52525B]">Mentoring junior PMs and engineering students transitioning into product roles</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14532D] mt-2"></div>
                <p className="text-[#52525B]">Participating in and speaking at local product management and IoT meetups</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14532D] mt-2"></div>
                <p className="text-[#52525B]">Building and sharing embedded/IoT and software side projects</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#14532D] mt-2"></div>
                <p className="text-[#52525B]">Posting product insights, project breakdowns, and lessons learned on LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#F7F6F2]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-[#18181B] mb-12">Skills at a Glance</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#14532D]">AI & RAG Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-[#52525B] space-y-2">
                  <li>• Local LLMs (Ollama)</li>
                  <li>• RAG Pipelines</li>
                  <li>• Python</li>
                  <li>• Streamlit</li>
                  <li>• OpenCV / YOLOv8</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#14532D]">Edge & IoT Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-[#52525B] space-y-2">
                  <li>• ESP32 / Custom PCBs</li>
                  <li>• Capacitive & ToF Sensors</li>
                  <li>• MQTT / REST Telemetry</li>
                  <li>• Raspberry Pi / NVIDIA Jetson</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#14532D]">Cloud & Enterprise Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-[#52525B] space-y-2">
                  <li>• Next.js</li>
                  <li>• Vercel</li>
                  <li>• GitHub</li>
                  <li>• Boomi</li>
                  <li>• SSO & API Governance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#14532D]">Delivery & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-[#52525B] space-y-2">
                  <li>• Agile / Scrum (A-CSM, CSPO)</li>
                  <li>• PRINCE2 Practitioner</li>
                  <li>• SR&ED / ARD Applied R&D</li>
                  <li>• ISO 9001:2015</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#F7F6F2]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-[#18181B] mb-4">Work With Me</h2>
          <p className="text-lg text-[#52525B] mb-12 leading-relaxed">
            If you need someone to take a complex initiative from vague idea to shipped reality. Whether it's an MVP, an embedded/IoT prototype, or a cross-functional program—I'd love to talk.
          </p>

          <Card className="shadow-sm">
            <CardContent className="pt-6">
              <form
                action="https://formspree.io/f/mjkjlrak"
                method="POST"
                className="space-y-6"
                >
               
               {/* <input type="hidden" name="form-name" value="contact" /> */}

                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#14532D] hover:bg-[#0F5132] text-white">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-[#E5E2DC] text-center">
                <p className="text-[#52525B] mb-4">Prefer LinkedIn? Connect with me there.</p>
                <Link
                  href="https://www.linkedin.com/in/puridushyant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#18181B] border-t border-[#18181B]">
        <div className="container mx-auto max-w-6xl text-center text-[#F8FAFC]/80">
          <p>© 2026 Dushyant Puri. Product & Delivery Leader.</p>
        </div>
      </footer>
    </div>
  )
}
