const { useState, useEffect, useRef } = React;

// --- Icon Component Wrapper using Vanilla Lucide ---
// This safely renders icons using the global `lucide` object
const Icon = ({ name, className = "", size = 24 }) => {
    const iconRef = useRef(null);

    useEffect(() => {
        if (iconRef.current && window.lucide) {
            // Clear previous icon if any
            iconRef.current.innerHTML = '';

            // Create the icon SVG
            const iconSvg = window.lucide.createElement(window.lucide.icons[name]);

            // Apply attributes
            if (iconSvg) {
                iconSvg.setAttribute('class', `lucide lucide-${name} ${className}`);
                iconSvg.setAttribute('width', size);
                iconSvg.setAttribute('height', size);
                iconRef.current.appendChild(iconSvg);
            }
        }
    }, [name, className, size]);

    return <span ref={iconRef} className="inline-flex items-center justify-center"></span>;
};

// --- Components ---

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 glass top-0 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
                    <span className="text-neon-blue">&lt;</span>
                    Shantanu.dev
                    <span className="text-neon-blue">/&gt;</span>
                </a>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
                    <a href="#projects" className="hover:text-neon-cyan transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-neon-cyan transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-neon-cyan transition-colors">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/shantanu-983/Resume/blob/main/SHANTANU%20PANDEY%20resume%20(3).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-all hover:border-neon-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    >
                        View Resume <Icon name="ExternalLink" size={16} />
                    </a>
                    <button className="md:hidden text-slate-300">
                        <Icon name="Menu" size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 z-10 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT: Text */}
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-sm text-slate-300 mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Available for new opportunities
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                            Hi, I'm{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan animate-gradient-x text-glow">
                                Shantanu Pandey
                            </span>
                        </h1>

                        <h2 className="text-lg md:text-xl text-slate-400 font-medium mb-6">
                            Software Developer | Web Developer | DSA Enthusiast
                        </h2>

                        <p className="text-slate-400 mb-8 text-base leading-relaxed max-w-lg">
                            Building scalable web applications and cracking algorithms.
                            I obsess with precision and love building amazing ideas into reality.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <a href="#projects" className="px-7 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-1">
                                View Projects
                            </a>
                            <a href="#contact" className="px-7 py-3 rounded-full glass-card text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2 transform hover:-translate-y-1 border border-slate-700">
                                Contact Me <Icon name="Mail" size={16} />
                            </a>
                        </div>


                    </div>

                    {/* RIGHT: Profile Photo */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            {/* Outer glow blur */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan blur-3xl opacity-25 scale-110 animate-float"></div>
                            {/* Spinning dashed ring */}
                            <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-neon-purple/30 profile-spin-ring"></div>
                            {/* Photo ring */}
                            <div className="profile-ring w-64 h-64 md:w-80 md:h-80 animate-float" style={{ animationDelay: '1s' }}>
                                <div className="profile-ring-inner">
                                    <img src="public/profile.png" alt="Shantanu Pandey - Software Developer" />
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full border border-neon-cyan/30 text-xs text-neon-cyan font-semibold shadow-lg">
                                ✨ Open to Work
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Building, breaking, and improving — <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">one line of code at a time.</span>
                        </h2>
                    </div>
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <p className="text-slate-300 leading-relaxed relative z-10 text-lg">
                            I am a Computer Science student with a deep passion for software development.
                            My approach combines solid engineering principles with an eye for modern, minimalist design.
                            I don't just write code; I strive to build scalable solutions that offer intuitive user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Noise Shield",
            subtitle: "Real-Time Noise Monitoring & Alert System",
            badge: "🏆 CMR Hackfest 3.0 — National Finalist · Top teams among 1,832+",
            description: "Built an Arduino-based IoT prototype that captures real-time sound data across city zones and visualizes it on an interactive web dashboard. Implemented alert classification (Safe, Warning, High Alert) using threshold logic — all delivered within a 36-hour hackathon sprint.",
            tags: ["Arduino", "HTML", "CSS", "JavaScript", "Chart.js", "IoT"],
            github: "https://github.com/shantanu-983",
            demo: null,
            color: "from-blue-500/20 to-cyan-500/20",
            icon: "Radio"
        },
        {
            title: "Civic Voices",
            subtitle: "Civic-Tech Ideathon Project",
            badge: "✅ Shortlisted — Trikaya Hack-to-Hire Ideathon",
            description: "Contributed to system architecture and feature workflow design for a civic issue reporting platform aimed at improving transparency and accessibility in community-government communication. Structured a citizen reporting mechanism to bridge the gap between citizens and local authorities.",
            tags: ["System Design", "Feature Workflow", "Civic Tech"],
            github: "https://github.com/shantanu-983",
            demo: null,
            color: "from-purple-500/20 to-pink-500/20",
            icon: "Users"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold">Featured Projects</h2>
                    <div className="h-px bg-slate-800 flex-grow"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, idx) => (
                        <div key={idx} className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full">
                            {/* Project Banner */}
                            <div className={`h-44 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                                <Icon name={project.icon} size={56} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-navy-900/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                {/* Achievement Badge */}
                                <div className="text-xs font-medium text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 rounded-full px-3 py-1 mb-4 inline-block w-fit leading-relaxed">
                                    {project.badge}
                                </div>

                                <h3 className="text-xl font-bold mb-1 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                <p className="text-sm text-slate-500 mb-3 font-medium">{project.subtitle}</p>
                                <p className="text-slate-400 mb-5 text-sm flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-neon-cyan border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <Icon name="Github" size={18} /> View GitHub
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-blue transition-colors flex items-center gap-2 text-sm font-medium ml-auto">
                                            <Icon name="ExternalLink" size={18} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Education = () => {
    const edu = [
        {
            degree: "B.Tech — Computer Science",
            school: "Oriental Institute of Science And Technology",
            location: "Bhopal",
            year: "Expected July 2028",
            icon: "GraduationCap",
            highlights: ["Research: AI Based Cloud Computing", "Active participant in national-level hackathons"],
            color: "from-blue-500/20 to-purple-500/20"
        },
        {
            degree: "12th Grade",
            school: "St Karen's Secondary School",
            location: "Patna",
            year: "May 2024",
            icon: "BookOpen",
            highlights: ["Attended IIT Patna Science Workshop", "Attended Tech Seminar at IIT Patna"],
            color: "from-purple-500/20 to-cyan-500/20"
        },
        {
            degree: "10th Grade",
            school: "Mount Litera Zee School",
            location: "Patna",
            year: "August 2022",
            icon: "Award",
            highlights: ["School Sports Captain", "Blue House Vice Captain"],
            color: "from-cyan-500/20 to-green-500/20"
        }
    ];

    return (
        <section id="education" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold">Education</h2>
                    <div className="h-px bg-slate-800 flex-grow"></div>
                </div>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800 hidden md:block"></div>

                    <div className="space-y-8">
                        {edu.map((item, idx) => (
                            <div key={idx} className="md:pl-16 relative group">
                                {/* Timeline dot */}
                                <div className={`absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} hidden md:flex items-center justify-center ring-4 ring-navy-900`}>
                                    <Icon name={item.icon} size={20} className="text-white" />
                                </div>

                                <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{item.degree}</h3>
                                            <p className="text-slate-400 text-sm font-medium">{item.school} &mdash; {item.location}</p>
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 text-neon-cyan border border-slate-700 whitespace-nowrap self-start sm:self-center">
                                            {item.year}
                                        </span>
                                    </div>

                                    {item.highlights.length > 0 && (
                                        <ul className="mt-3 space-y-1.5">
                                            {item.highlights.map((h, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                                    <Icon name="ChevronRight" size={14} className="text-neon-cyan flex-shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Programming",
            icon: "Code2",
            skills: ["C", "C++", "Python", "Java (Basic)"]
        },
        {
            title: "Web Development",
            icon: "Globe",
            skills: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Tools",
            icon: "Wrench",
            skills: ["Git", "GitHub", "VS Code", "SQL"]
        },
        {
            title: "Problem Solving",
            icon: "Brain",
            skills: ["DSA", "Problem Solving", "Critical Thinking", "Logical Reasoning"]
        },
        {
            title: "IoT & Hardware",
            icon: "Cpu",
            skills: ["Arduino", "IOT", "ESP32", "Noise Sensor Integration"]
        },
        {
            title: "Core CS",
            icon: "BookOpen",
            skills: ["Data Structures", "OOP", "Software Engineering", "Cybersecurity Fundamentals", "Networking"]
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold">Technical Arsenal</h2>
                    <div className="h-px bg-slate-800 flex-grow"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-2xl hover-glow transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 group-hover:text-neon-purple transition-colors">
                                <Icon name={cat.icon} size={24} className={cat.icon === 'Globe' ? 'text-neon-blue' : cat.icon === 'Code2' ? 'text-neon-purple' : 'text-neon-cyan'} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                            <ul className="space-y-3">
                                {cat.skills.map(skill => (
                                    <li key={skill} className="flex items-center gap-3 text-slate-300">
                                        <Icon name="CheckCircle2" size={16} className="text-neon-cyan" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Network = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Network &amp; Profiles</h2>
                    <p className="text-slate-400">Find me across the web.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="https://github.com/shantanu-983"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 w-32 border border-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    >
                        <Icon name="Github" size={32} />
                        <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shantanu-pandey-b8067530a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 w-32 border border-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:text-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    >
                        <Icon name="Linkedin" size={32} />
                        <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                        href="https://leetcode.com/u/shantanu983/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 w-32 border border-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:text-yellow-500 hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                    >
                        <Icon name="Code" size={32} />
                        <span className="text-sm font-medium">LeetCode</span>
                    </a>
                    <a
                        href="https://github.com/shantanu-983/Resume/blob/main/SHANTANU%20PANDEY%20resume%20(3).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 w-32 border border-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:text-purple-400 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    >
                        <Icon name="FileText" size={32} />
                        <span className="text-sm font-medium">Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            alert('Please fill all fields.');
            return;
        }
        setStatus('sending');

        // ✅ EmailJS config — replace with your real IDs from emailjs.com
        const SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_xxxxxx'
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xxxxxx'
        const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEFghiJKL'

        window.emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name:  form.name,
            from_email: form.email,
            message:    form.message,
            to_name:    'Shantanu',
        }, PUBLIC_KEY)
        .then(() => {
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        })
        .catch(() => {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        });
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-4xl font-bold mb-6">Let's build something together.</h2>
                <p className="text-slate-400 mb-10 text-lg">
                    Have an opportunity or a question? Reach out!
                    I'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl text-left max-w-xl mx-auto border border-slate-800">
                    <div className="mb-5">
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                        <input
                            type="text" id="name" value={form.name} onChange={handleChange}
                            className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-3 text-white form-input transition-all"
                            placeholder="John Doe" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                        <input
                            type="email" id="email" value={form.email} onChange={handleChange}
                            className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-3 text-white form-input transition-all"
                            placeholder="john@example.com" required />
                    </div>
                    <div className="mb-7">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                        <textarea
                            id="message" rows="4" value={form.message} onChange={handleChange}
                            className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-3 text-white form-input transition-all resize-none"
                            placeholder="Hello Shantanu..." required>
                        </textarea>
                    </div>

                    {status === 'success' && (
                        <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
                            ✅ Message sent! I'll get back to you soon.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                            ❌ Something went wrong. Please email me directly.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full py-3.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? 'Sending...' : (<>Send Message <Icon name="Send" size={18} /></>)}
                    </button>
                </form>

                <div className="mt-10 text-slate-400 flex items-center justify-center gap-2">
                    <Icon name="Mail" size={18} />
                    <a href="mailto:shantanupandey983@gmail.com" className="hover:text-neon-cyan transition-colors">shantanupandey983@gmail.com</a>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="border-t border-slate-800/50 py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-slate-400 text-sm">
                    © 2026 Shantanu Pandey. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                    <a href="https://github.com/shantanu-983" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Icon name="Github" size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/shantanu-pandey-b8067530a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                        <Icon name="Linkedin" size={20} />
                    </a>
                    <a href="https://leetcode.com/u/shantanu983/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-500 transition-colors">
                        <Icon name="Code" size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    // Re-initialize icons whenever component mounts
    useEffect(() => {
        if (window.lucide) {
            // This is a safety catch to ensure icons that might not have been
            // caught by the Icon component wrapper are rendered.
            window.lucide.createIcons();
        }
    }, []);

    return (
        <div className="font-sans text-slate-200">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Education />
                <Network />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
