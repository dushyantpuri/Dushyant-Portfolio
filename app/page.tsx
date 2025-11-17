'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Download, TrendingUp, Users, Clock, DollarSign, Target, Zap } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-slate-900 text-2xl">Dushyant Puri, MBA </h1>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('education')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Education</button>
              <button onClick={() => scrollToSection('work')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Work</button>
              <button onClick={() => scrollToSection('how-i-work')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">How I Work</button>
              <button onClick={() => scrollToSection('community')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Community</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
                Turning vague ideas into shipped products.
              </h1>
              <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                Product & Delivery leader with 12+ years experience in software, embedded, and IoT. I'm usually brought in when the problem is ambiguous but the outcome really matters.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Open to contract projects, fractional product leadership, and select full-time roles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection('work')}
                >
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                >
                  Work With Me
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="h-64 rounded-full overflow-hidden bg-slate-200 w-64">
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About Me</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-4xl">
            With over 12 years of experience, I specialize in taking organizations through full product development cycles—from ambiguity to clarity to shipped outcomes. My work spans B2B software, embedded systems, IoT platforms, and applied research initiatives. I'm known for transforming complex, messy problems into clear plans that teams can execute, and most importantly, for making sure the work actually ships.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experience</h3>
              <p className="text-slate-600 leading-relaxed">
                12+ years • B2B software, embedded systems, IoT platforms, applied research initiatives
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strengths</h3>
              <p className="text-slate-600 leading-relaxed">
                Problem framing, roadmapping, stakeholder alignment, delivery & RAID management
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">How I work with you</h3>
              <p className="text-slate-600 leading-relaxed">
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
      <section id="education" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education & Credentials</h2>
          <p className="text-lg text-slate-600 mb-12">
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
                  <div className="text-sm text-slate-500 mt-1">2022 – 2023</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
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
                  <div className="text-sm text-slate-500 mt-1">2013 – 2014</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
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
                  <div className="text-sm text-slate-500 mt-1">2006 – 2011</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li>• Strong foundation in systems thinking and engineering principles</li>
                  <li>• Exposure to manufacturing, design, and testing environments</li>
                  <li>• Final-year project related to real-world engineering problems</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Selected Certifications</h3>
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
      <section id="work" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Work</h2>
            <p className="text-lg text-slate-600">
              Real projects where I shepherded solutions from idea to working outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <Card className="shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">SmartCV – Computer Vision Inventory Analytics</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">IoT</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">AI/ML</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Problem</p>
                    <p className="text-slate-600">Manual inventory tracking in warehouses was error-prone and time-consuming, limiting operational efficiency.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">My Role</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      <li>Led discovery to define MVP scope and technical feasibility</li>
                      <li>Coordinated cross-functional team of engineers, data scientists, and operations</li>
                      <li>Drove decision-making on edge computing architecture and camera placement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Outcome</p>
                    <p className="text-slate-600">MVP delivered for pilot deployment, enabling real-time inventory tracking with 95% accuracy in controlled environment.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 mt-auto">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Target className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">90%</p>
                    <p className="text-xs text-slate-600">Inventory Accuracy</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">70%</p>
                    <p className="text-xs text-slate-600">Error Reduction</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Zap className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">2×</p>
                    <p className="text-xs text-slate-600">Productivity Increase</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">8 Mo</p>
                    <p className="text-xs text-slate-600">Delivery Timeline</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Vortex iBMS – Smart Battery Platform</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Embedded</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">IoT</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Problem</p>
                    <p className="text-slate-600">Industrial equipment needed intelligent battery management to prevent failures and optimize performance across distributed sites.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">My Role</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      <li>Framed problem with stakeholders to align on technical and business requirements</li>
                      <li>Created phased roadmap balancing firmware, cloud platform, and analytics delivery</li>
                      <li>Managed RAID log and unblocked engineering team through hardware integration challenges</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Outcome</p>
                    <p className="text-slate-600">Pilot-ready system launched with remote monitoring capabilities, reducing battery-related equipment failures by 40%.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 mt-auto">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">15%</p>
                    <p className="text-xs text-slate-600">Grid Usage Reduction</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">5+</p>
                    <p className="text-xs text-slate-600">Fleet Operators</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Zap className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">85%</p>
                    <p className="text-xs text-slate-600">Uptime Improvement</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <DollarSign className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">30%</p>
                    <p className="text-xs text-slate-600">Cost Reduction</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Skyjack Digital Services</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">B2B SaaS</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Platform</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Problem</p>
                    <p className="text-slate-600">Construction equipment manufacturer needed to launch digital services offering for fleet management and predictive maintenance.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">My Role</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      <li>Translated business vision into technical product roadmap with clear milestones</li>
                      <li>Aligned engineering, design, and business stakeholders on priority features</li>
                      <li>Drove sprint planning and risk mitigation for multi-team delivery</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Outcome</p>
                    <p className="text-slate-600">New digital capability launched on schedule, enabling customers to monitor equipment health and reduce downtime.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 mt-auto">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <DollarSign className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">$1M+</p>
                    <p className="text-xs text-slate-600">Project Value</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">10%</p>
                    <p className="text-xs text-slate-600">Revenue Growth</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">500+</p>
                    <p className="text-xs text-slate-600">Active Users</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">18 Mo</p>
                    <p className="text-xs text-slate-600">Delivery Timeline</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Packing Digitization for D2C Brand</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Operations</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Analytics</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Problem</p>
                    <p className="text-slate-600">E-commerce brand struggled with manual packing processes leading to errors, delays, and lack of visibility into fulfillment metrics.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">My Role</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      <li>Conducted discovery with operations team to map current process and pain points</li>
                      <li>Designed solution architecture integrating barcode scanners, WMS, and analytics dashboard</li>
                      <li>Managed vendor relationships and coordinated implementation with internal IT</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Outcome</p>
                    <p className="text-slate-600">Digitized packing workflow deployed, reducing errors by 70% and providing real-time fulfillment visibility for operations team.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 mt-auto">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">70%</p>
                    <p className="text-xs text-slate-600">Error Reduction</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Zap className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">2×</p>
                    <p className="text-xs text-slate-600">Throughput Increase</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Target className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">80%</p>
                    <p className="text-xs text-slate-600">Uptime Improvement</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">12 Mo</p>
                    <p className="text-xs text-slate-600">Implementation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section id="how-i-work" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How I Work</h2>
          <p className="text-lg text-slate-600 mb-12">
            My job is to take messy ideas, align the right people, and drive the work to a real outcome.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-sm border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl">Start with the real problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  I make sure we're aligned on business and user outcomes, not just a feature list. Discovery work and problem framing are essential before jumping into solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl">Make a realistic plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Epics, milestones, risks, and dependencies are surfaced early and tracked throughout. I create roadmaps that teams can actually execute against.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl">Keep teams unblocked</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  I work across engineering, design, and stakeholders to remove blockers and make decisions. When teams are stuck, I help them move forward.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl">Finish what we start</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  I focus on shipping something that works and can be tested, not endless "in progress" work. Done means deployed, validated, and ready for users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Community & Side Projects</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Beyond client work, I'm active in the product and tech community. I believe in sharing knowledge, mentoring emerging talent, and continuously building new things. Whether it's speaking at meetups, advising students, or tinkering with embedded systems on weekends, I stay engaged with the broader ecosystem.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-slate-600">Mentoring junior PMs and engineering students transitioning into product roles</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-slate-600">Participating in and speaking at local product management and IoT meetups</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-slate-600">Building and sharing embedded/IoT and software side projects</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-slate-600">Posting product insights, project breakdowns, and lessons learned on LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Skills at a Glance</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Product & Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li>• Discovery & problem framing</li>
                  <li>• Roadmapping & prioritization</li>
                  <li>• Stakeholder management</li>
                  <li>• Agile & hybrid delivery</li>
                  <li>• Risk & RAID management</li>
                  <li>• Sprint planning & execution</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Technical Context</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li>• Embedded systems</li>
                  <li>• IoT platforms & connectivity</li>
                  <li>• AI/ML project delivery</li>
                  <li>• Dashboards & analytics</li>
                  <li>• Cloud architecture</li>
                  <li>• Hardware integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li>• Jira & Confluence</li>
                  <li>• Azure DevOps</li>
                  <li>• GitHub & version control</li>
                  <li>• Power BI & Tableau</li>
                  <li>• Figma & design tools</li>
                  <li>• SQL & data analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Work With Me</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
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

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                <p className="text-slate-600 mb-4">Prefer LinkedIn? Connect with me there.</p>
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
      <footer className="py-8 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-6xl text-center text-slate-600">
          <p>© 2025 Dushyant Puri. Product & Delivery Leader.</p>
        </div>
      </footer>
    </div>
  )
}
