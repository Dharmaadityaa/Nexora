import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Cpu, Smartphone, Brain, Lightbulb, Building2, Target, Rocket, X, ChevronLeft, ChevronRight, MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "@/assets/logo.png";

export default function NexoraTech() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      description: "Platform e-commerce modern dengan fitur lengkap untuk mendukung bisnis online. Dilengkapi dengan sistem pembayaran terintegrasi, manajemen inventory, dan dashboard analytics real-time.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2025"
    },
    {
      id: 2,
      title: "Smart Home IoT System",
      category: "IoT Development",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      description: "Sistem IoT untuk mengontrol perangkat rumah pintar melalui aplikasi mobile. Terintegrasi dengan voice assistant dan automation scheduling untuk kenyamanan maksimal.",
      tech: ["Arduino", "React Native", "MQTT", "Firebase"],
      year: "2025"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: "Dashboard analytics dengan AI untuk prediksi tren bisnis dan insights otomatis. Menggunakan machine learning untuk analisis data kompleks dan visualisasi interaktif.",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      year: "2024"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      description: "Aplikasi mobile banking dengan keamanan tinggi dan user experience yang intuitif. Fitur transfer, pembayaran, investasi, dan customer support terintegrasi dalam satu platform.",
      tech: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
      year: "2024"
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      description: "Platform pembelajaran online untuk institusi pendidikan dengan fitur video streaming, quiz interaktif, dan tracking progress siswa secara real-time.",
      tech: ["Next.js", "MongoDB", "WebRTC", "AWS"],
      year: "2024"
    },
    {
      id: 6,
      title: "Healthcare Monitoring System",
      category: "IoT & Mobile",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      description: "Sistem monitoring kesehatan berbasis IoT dengan wearable devices. Data kesehatan pasien dapat dimonitor secara real-time oleh tenaga medis melalui dashboard web dan mobile app.",
      tech: ["React Native", "Node.js", "IoT Sensors", "MySQL"],
      year: "2025"
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Nexora Tech Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#vision" className="hover:text-blue-400 transition">Vision</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.25),transparent_60%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          {/* Logo di Hero Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <img 
              src={logoImage} 
              alt="Nexora Tech Logo" 
              className="h-40 w-auto md:h-48 drop-shadow-2xl"
            />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nexora Tech
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Future-driven technology company in Web, Mobile, IoT, and Artificial Intelligence Development.
          </p>
          <Button className="rounded-2xl px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
            Explore Our Galaxy
          </Button>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Tentang Nexora Tech */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-bold">Tentang Nexora Tech</h3>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Nexora Tech adalah startup teknologi yang berfokus pada pengembangan solusi digital modern untuk bisnis, institusi, dan masyarakat. Kami hadir untuk membantu proses transformasi digital melalui layanan teknologi yang inovatif, efisien, dan berkelanjutan.
              </p>
              <p>
                Sebagai perusahaan pengembang teknologi, Nexora Tech mengintegrasikan kreativitas, keahlian teknis, dan pemahaman bisnis dalam setiap solusi yang kami bangun. Kami tidak hanya menciptakan produk digital yang berfungsi, tetapi juga solusi yang memberikan dampak nyata, meningkatkan produktivitas, serta mendorong pertumbuhan jangka panjang bagi klien.
              </p>
              <p>
                Dengan cakupan layanan mulai dari web development, mobile application, desktop application, hingga Artificial Intelligence (AI), Nexora Tech berkomitmen menjadi partner teknologi yang andal dan adaptif terhadap perkembangan zaman.
              </p>
            </div>
          </div>

          {/* Filosofi Nexora Tech */}
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-bold">Filosofi Nexora Tech</h3>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Nama <span className="text-blue-400 font-semibold">Nexora Tech</span> berasal dari gabungan kata <span className="text-purple-400 font-semibold">Nexus</span> yang berarti koneksi dan <span className="text-purple-400 font-semibold">Aurora</span> yang melambangkan cahaya masa depan. Filosofi ini mencerminkan peran kami sebagai penghubung antara teknologi modern saat ini dengan inovasi masa depan.
              </p>
              <p>
                Kami percaya bahwa teknologi bukan sekadar alat, melainkan jembatan untuk menciptakan peluang, efisiensi, dan kemajuan. Oleh karena itu, Nexora Tech mengusung filosofi membangun solusi digital yang cerdas, relevan, dan visioner—solusi yang mampu menjawab kebutuhan hari ini sekaligus mempersiapkan masa depan.
              </p>
              <p>
                Setiap produk dan layanan yang kami kembangkan berlandaskan pada nilai <span className="text-blue-400 font-semibold">inovasi</span>, <span className="text-blue-400 font-semibold">kualitas</span>, <span className="text-blue-400 font-semibold">kolaborasi</span>, dan <span className="text-blue-400 font-semibold">keberlanjutan</span>, dengan tujuan menghadirkan teknologi yang tidak hanya canggih, tetapi juga bermakna dan berdampak positif bagi bisnis serta masyarakat.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16">Our Services</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Globe />, title: "Web Development", desc: "Modern, scalable, and secure web applications." },
              { icon: <Smartphone />, title: "Mobile Apps", desc: "Cross-platform mobile solutions (Android & iOS)." },
              { icon: <Cpu />, title: "IoT Systems", desc: "Smart devices and connected systems integration." },
              { icon: <Brain />, title: "AI Technology", desc: "Machine learning, automation, and AI solutions." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold">Visi</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Menjadi startup pengembang solusi digital yang inovatif, adaptif, dan berdampak, dalam membantu bisnis dan masyarakat tumbuh melalui teknologi.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold">Misi</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-1">Menciptakan produk digital yang bernilai dan berkelanjutan</h4>
                <p className="text-sm text-gray-400">Mengembangkan website, aplikasi, dan sistem digital yang tidak hanya berfungsi, tetapi juga memberikan dampak nyata.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Mengutamakan kualitas, inovasi, dan efisiensi</h4>
                <p className="text-sm text-gray-400">Setiap solusi dirancang dengan teknologi modern dan proses pengembangan yang efektif.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Menjadi partner teknologi yang terpercaya</h4>
                <p className="text-sm text-gray-400">Menjalin kerja sama jangka panjang melalui komunikasi yang transparan dan profesional.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Mendukung transformasi digital bisnis dan UMKM</h4>
                <p className="text-sm text-gray-400">Membantu klien beradaptasi dan bersaing di era digital.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Mengembangkan talenta dan budaya kolaboratif</h4>
                <p className="text-sm text-gray-400">Membangun tim yang solid, kreatif, dan terus belajar mengikuti perkembangan teknologi.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projects" className="py-32 bg-black/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-4">Recent Projects</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our latest digital solutions that have helped businesses transform and grow
            </p>
          </motion.div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full grid md:grid-cols-3 gap-6">
                    {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer group"
                      >
                        <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                              {project.year}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="text-xs text-blue-400 font-semibold mb-2">{project.category}</div>
                            <h4 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition">{project.title}</h4>
                            <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech.slice(0, 3).map((tech, idx) => (
                                <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-md">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/20 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/20 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx ? "bg-blue-500 w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-2 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-6 bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  {selectedProject.year}
                </div>
              </div>

              <div className="p-8">
                <div className="text-sm text-blue-400 font-semibold mb-2">{selectedProject.category}</div>
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full rounded-xl py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
                  View Full Case Study
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logoImage} 
                  alt="Nexora Tech Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bertransformasi menjadi perusahaan yang mampu menjawab tantangan di era revolusi industri 4.0
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4">Layanan Kami</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2">
                  <span className="text-blue-500">›</span> Software Development
                </li>
                <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2">
                  <span className="text-blue-500">›</span> Web & Mobile Application
                </li>
                <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2">
                  <span className="text-blue-500">›</span> IoT & Smart Systems
                </li>
                <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2">
                  <span className="text-blue-500">›</span> Artificial Intelligence
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4">Hubungi Kami</h4>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                  <div>
                    <p className="font-semibold text-white mb-1">ALAMAT:</p>
                    <p className="text-sm leading-relaxed">
                      Jember, Jawa Timur, Indonesia
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                  <div>
                    <p className="font-semibold text-white mb-1">EMAIL:</p>
                    <a href="mailto:info@nexoratech.com" className="text-sm hover:underline">
                      info@nexoratech.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                  <div>
                    <p className="font-semibold text-white mb-1">PHONE:</p>
                    <a href="tel:+6281234567890" className="text-sm hover:underline">
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <p className="font-semibold text-white mb-3">SOSIAL MEDIA:</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-lg flex items-center justify-center transition">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
            <p>© Copyright 2026. All Rights Reserved by <span className="text-blue-400 font-semibold">Nexora Tech</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}