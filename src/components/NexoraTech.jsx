import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Cpu, Smartphone, Brain } from "lucide-react";

export default function NexoraTech() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nexora Tech
          </h1>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#vision" className="hover:text-blue-400">Vision</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
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
          className="relative z-10 max-w-3xl"
        >
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
          className="text-center"
        >
          <h3 className="text-4xl font-bold mb-6">About Nexora Tech</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Nexora Tech is a futuristic technology company focused on building intelligent digital solutions. We specialize in Web Applications, Mobile Applications, Internet of Things (IoT), and Artificial Intelligence to help businesses evolve in the digital era.
          </p>
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
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
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
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-4">Vision</h3>
            <p className="text-gray-400">
              To become a leading global technology company that shapes the future through intelligent, innovative, and sustainable digital solutions.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-4">Mission</h3>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>Develop high-quality web, mobile, IoT, and AI solutions.</li>
              <li>Empower businesses with smart digital transformation.</li>
              <li>Deliver innovative and scalable technology systems.</li>
              <li>Create sustainable and future-ready digital ecosystems.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-white/10 text-center text-gray-500">
        <p>© 2026 Nexora Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}
