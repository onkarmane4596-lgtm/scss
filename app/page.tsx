import { Shield, Mail, Phone, Globe, Search, Target, Activity, FileText, CheckCircle2, Award, ShieldCheck, BookOpen, Users, GraduationCap, Building2, ChevronRight, Lock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-900/50 selection:text-blue-100">
      
      {/* HERO SECTION */}
      <header className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-cyan-900/40 overflow-hidden group">
        {/* Base Background Image with subtle slow zoom */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-30 transform scale-105 group-hover:scale-110 transition-transform duration-[20s] ease-out" style={{ backgroundImage: "url('/hero.png')" }}></div>
        
        {/* Dynamic Animated Gradient Mesh Overlay */}
        <div className="absolute inset-0 -z-20 mix-blend-color-dodge">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        </div>

        {/* Deep Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-[#020617]/70 backdrop-blur-[8px] -z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
        
        {/* Glowing Top Line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
        
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-800/50 text-xs font-semibold text-cyan-100 mb-10 uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.1)] backdrop-blur-md hover:border-cyan-400/50 transition-colors duration-300">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Chhatrapati Shahu Maharaj Sevabhavi Sanstha</span>
          </div>

          <img src="/logo.png" alt="SKYLINE Centre of Excellence Logo" className="w-24 h-24 md:w-32 md:h-32 mb-8 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:drop-shadow-[0_0_50px_rgba(34,211,238,0.8)] hover:scale-105 transition-all duration-500 ease-out" />
          
          <div className="flex flex-col items-center mb-10 w-full max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-black mb-2 tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              SKYLINE
            </h1>
            
            <div className="flex items-center gap-4 w-full mb-2">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-cyan-500/80"></div>
              <span className="text-sm md:text-base lg:text-xl font-bold tracking-[0.4em] text-cyan-400 uppercase">
                Centre of Excellence
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/50 to-cyan-500/80"></div>
            </div>

            <div className="text-xs md:text-sm font-semibold tracking-[0.3em] text-slate-400 uppercase mb-2">
              In
            </div>

            <div className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 uppercase mb-8 text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Cyber Security and Forensics
            </div>

            <div className="flex items-center gap-4 w-full opacity-90">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
              <p className="text-xs md:text-sm lg:text-base tracking-[0.2em] italic font-medium text-white drop-shadow-md whitespace-nowrap">
                Where Security Meets Intelligence
              </p>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-200 mb-6 tracking-wide drop-shadow-lg">
            Learn Today. Secure Tomorrow. <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">Lead The Future.</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Industry-focused cybersecurity training and digital forensics education, empowering students with real-world skills to protect what matters most.
          </p>
        </div>
      </header>

      {/* ABOUT & PURPOSE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">About the Institute</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-8"></div>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  <strong className="text-slate-200 font-medium">SKYLINE Centre of Excellence in Cyber Security and Forensics</strong> operates under the prestigious <strong className="text-slate-200 font-medium">Chhatrapati Shahu Maharaj Sevabhavi Sanstha</strong> with the core objective of providing high-quality, accessible education in the field of cybersecurity.
                </p>
                <p>
                  The institute focuses on developing student skills through rigorous practical training, an industry-relevant curriculum, and a guided learning environment. We are committed to building strong foundational and practical skills in cyber defense and digital investigation.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 lg:p-10 shadow-2xl shadow-black/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <h3 className="text-xl font-medium text-blue-400 uppercase tracking-widest mb-4">Our Purpose</h3>
              <h4 className="text-2xl font-semibold text-white mb-4">Your Future Starts Here. With SKYLINE.</h4>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our commitment is to your future. We bridge the gap between theoretical knowledge and real-world application, ensuring our graduates are prepared to detect, respond, and mitigate evolving digital threats globally.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Globally Recognized", icon: Globe },
                  { label: "Expert Led", icon: Users },
                  { label: "Practical Labs", icon: Target },
                  { label: "Career Focused", icon: GraduationCap }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                    <item.icon className="w-5 h-5 text-blue-500" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE (4 Pillars) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-800/60 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Core Domains of Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Mastering the critical disciplines required to secure modern digital infrastructures.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Cyber Security", desc: "Protect systems, data, and networks from evolving sophisticated threats." },
              { icon: Search, title: "Digital Forensics", desc: "Investigate, analyze, and uncover digital evidence with absolute precision." },
              { icon: FileText, title: "Risk & Compliance", desc: "Assess risks, implement vital controls, and ensure strict regulatory compliance." },
              { icon: Activity, title: "Incident Response", desc: "Detect, respond, and recover from security breaches with speed and confidence." }
            ].map((pillar, idx) => (
              <div key={idx} className="group bg-slate-900/50 hover:bg-slate-900 border border-slate-800/60 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300">
                <pillar.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSE: ETHICAL HACKING */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Featured Program
              </div>
              <h2 className="text-3xl font-semibold text-white mb-4">Ethical Hacking Course</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Take the next step toward a rewarding career. Designed to build your skills, boost your confidence, and help you secure tomorrow in a fully equipped digital lab environment.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Industry-Recognized Certification", desc: "Earn a globally respected credential validating your skills." },
                  { title: "Hands-on Lab Experience", desc: "Practice with real-world tools in dedicated digital environments." },
                  { title: "Expert-Led Training", desc: "Learn directly from certified professionals with years of experience." },
                  { title: "Affordable Education", desc: "High-quality, practical learning at pocket-friendly fees." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 bg-slate-950 border-l border-slate-800 p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <Lock className="w-16 h-16 text-slate-700 mb-6" strokeWidth={1} />
              <h3 className="text-2xl font-medium text-white mb-2">Admissions Open</h3>
              <p className="text-slate-400 mb-8">Limited seats available. Maximum impact for your career.</p>
              <a href="https://wa.me/919922779934?text=Hello%20SKYLINE!%20I%20am%20interested%20in%20enrolling%20in%20a%20course." target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a] font-medium py-3 px-6 rounded-lg transition-colors">
                Chat on WhatsApp <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALL COURSES & CERTIFICATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Comprehensive Academic Programs</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Structured specifically for students to build strong foundational and practical cybersecurity expertise from the ground up.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Column 1: Diplomas */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-medium text-white">Diploma Programs</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Diploma in Cyber Security",
                  "Diploma in Ethical Hacking",
                  "Diploma in Digital Forensics",
                  "Diploma in Information Security & Risk Management"
                ].map((course, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="text-blue-500 mt-1 leading-none">•</span>
                    <span className="leading-snug">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Advanced Diplomas */}
            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-8 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg rounded-tr-xl">New</div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-700">
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-medium text-white">Advanced Diplomas</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Advanced Diploma in Cyber Security & Ethical Hacking",
                  "Advanced Diploma in Digital Forensics & Incident Investigation",
                  "Advanced Diploma in Network Security & Cyber Defense",
                  "Advanced Diploma in Cyber Threat Intelligence & SOC Operations"
                ].map((course, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-blue-400 mt-1 leading-none">•</span>
                    <span className="leading-snug">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Certificates */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-medium text-white">Certificate Courses</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Ethical Hacking (Foundation Level)",
                  "Network Security Fundamentals",
                  "Cyber Law & Compliance",
                  "Digital Forensics Investigation",
                  "Web Application Security Basics",
                  "Penetration Testing Basics"
                ].map((course, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="text-blue-500 mt-1 leading-none">•</span>
                    <span className="leading-snug">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Advanced Certs */}
            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-8 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg rounded-tr-xl">New</div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-700">
                <Target className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-medium text-white">Advanced Certifications</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Certified Ethical Hacking (CEH-Oriented Training)",
                  "Advanced Penetration Testing & Vulnerability Assessment",
                  "Security Operations Center (SOC) Analyst Training",
                  "Malware Analysis & Reverse Engineering (Introductory)",
                  "Incident Response & Cyber Crisis Management",
                  "Cloud Security Fundamentals (AWS / Azure Basics)",
                  "Mobile Application Security Testing",
                  "Web Application Penetration Testing (Advanced)"
                ].map((course, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-blue-400 mt-1 leading-none">•</span>
                    <span className="leading-snug">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYLINE / BENEFITS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Why Choose SKYLINE?</h2>
            <div className="w-12 h-1 bg-slate-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { title: "Career-Driven Curriculum", desc: "Designed to meet specific industry demands and adapt to future technological trends." },
              { title: "Job Assistance Support", desc: "Comprehensive resume guidance, interview preparation, and dedicated placement support." },
              { title: "Flexible Learning Options", desc: "Weekday, weekend, and fast-track batches available to suit your schedule." },
              { title: "Hands-On Experience", desc: "Work extensively on real-life scenarios, practical case studies, and modern tools." },
              { title: "Small Batch Sizes", desc: "Ensuring highly personal attention and significantly better learning outcomes." },
              { title: "Comprehensive Study Material", desc: "Up-to-date, structured, and easy-to-understand content provided to all students." }
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium mb-2">{reason.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer className="bg-[#050812] border-t border-slate-900 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="SKYLINE Logo" className="w-10 h-10 object-contain" />
                <h3 className="text-xl font-semibold text-white">SKYLINE</h3>
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                Centre of Excellence in Cyber Security and Forensics. Securing today for a safer tomorrow.
              </p>
              <p className="text-sm text-slate-500 font-medium">Under Chhatrapati Shahu Maharaj Sevabhavi Sanstha</p>
            </div>
            
            <div className="md:text-right flex flex-col md:items-end justify-center">
              <h4 className="text-white font-medium mb-6">Connect With Us</h4>
              <div className="space-y-4">
                <a href="https://skycyberforensics.in" className="flex items-center md:justify-end gap-3 text-slate-400 hover:text-white transition-colors group">
                  <span className="text-sm font-medium">skycyberforensics.in</span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                    <Globe className="w-4 h-4 text-blue-500" />
                  </div>
                </a>
                <a href="mailto:info@skycyberforensics.in" className="flex items-center md:justify-end gap-3 text-slate-400 hover:text-white transition-colors group">
                  <span className="text-sm font-medium">info@skycyberforensics.in</span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                    <Mail className="w-4 h-4 text-blue-500" />
                  </div>
                </a>
                <div className="flex items-center md:justify-end gap-3 text-slate-400">
                  <div className="text-sm font-medium flex flex-col md:items-end gap-1">
                    <a href="tel:+919922779934" className="hover:text-white transition-colors">9922779934</a>
                    <a href="tel:+919130092227" className="hover:text-white transition-colors">9130092227</a>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 text-center flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600 font-medium">
              &copy; {new Date().getFullYear()} SKYLINE Centre of Excellence. All rights reserved.
            </p>
            <p className="text-xs text-slate-600 font-medium">
              Satara, Maharashtra
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
