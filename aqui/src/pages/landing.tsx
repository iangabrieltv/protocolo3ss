import { motion } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Zap, 
  MapPin, 
  Car, 
  Lock, 
  CheckCircle2, 
  AlertTriangle,
  Heart,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPage() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-sans font-bold tracking-tighter text-white">
            PROTOCOLO <span className="text-primary">3S</span>
          </div>
          <Button onClick={scrollToPricing} variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6">
            GARANTIR ACESSO
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-woman.png" 
            alt="Woman walking confidently" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply" />
        </div>

        <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide backdrop-blur-sm mb-4">
              SABEDORIA • SEGURANÇA • SOBREVIVÊNCIA
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.1]">
              Transforme Medo em <br className="hidden md:block" />
              <span className="text-gradient">Poder Absoluto</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
              O caminho inteligente para retomar o controle da sua vida. 
              Não seja refém da insegurança. Saiba prever, evitar e reagir.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToPricing} size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 px-8 rounded-full shadow-[0_0_30px_-5px_hsl(270_80%_65%_/_50%)] transition-all hover:scale-105">
                QUERO ME SENTIR SEGURA
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background relative">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
              Você conhece essa sensação?
            </h2>
            <p className="text-gray-400 text-lg">
              Aquele aperto no peito quando você está sozinha e percebe que algo não está certo.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: MapPin, title: "Na Rua Escura", text: "Passos atrás de você. Coração dispara. Você acelera, mas o medo continua." },
              { icon: Car, title: "No Transporte", text: "O motorista muda a rota ou te olha estranho. A dúvida paralisa: o que eu faço?" },
              { icon: Lock, title: "Em Casa", text: "Entrar na garagem, no elevador. Aquele segundo de vulnerabilidade que parece eterno." }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 p-8 bg-red-950/20 border border-red-500/20 rounded-2xl text-center">
            <p className="text-red-200 text-lg font-medium">
              "Como eu queria estar preparada, saber o que fazer, agir rápido, sem pânico."
            </p>
            <p className="mt-4 text-gray-400">
              É um cenário real para milhares de mulheres, mas <strong>não precisa ser o seu.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - The 3S */}
      <section className="py-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 z-0">
          <img src="/images/bg-safety.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-0" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">O Método</span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">Protocolo 3S</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Sabedoria, Segurança e Sobrevivência. Um sistema completo para prever, evitar e neutralizar ameaças.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Eye size={120} />
              </div>
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Sabedoria</h3>
              <p className="text-gray-400 mb-6">
                O "Radar Anti-Predador". Aprenda a ler intenções antes que elas virem ações.
              </p>
              <ul className="space-y-3">
                {["Linguagem corporal", "Identificação de padrões", "Intuição afiada"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 size={16} className="mr-2 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/20 to-card border border-primary/40 rounded-3xl p-8 relative overflow-hidden transform lg:-translate-y-8 shadow-[0_0_50px_-10px_rgba(124,58,237,0.2)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield size={120} />
              </div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. Segurança</h3>
              <p className="text-gray-300 mb-6">
                Crie barreiras invisíveis. Domine o espaço e imponha respeito sem precisar de força.
              </p>
              <ul className="space-y-3">
                {["Comandos de voz", "Escudo Digital", "Postura de poder"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-white">
                    <CheckCircle2 size={16} className="mr-2 text-primary-foreground" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={120} />
              </div>
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Sobrevivência</h3>
              <p className="text-gray-400 mb-6">
                Se o pior acontecer, saiba reagir. Técnicas biomecânicas para escapar e sobreviver.
              </p>
              <ul className="space-y-3">
                {["Pontos vitais", "Escape de agarramento", "Reação explosiva"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 size={16} className="mr-2 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 animate-pulse" />
              <img 
                src="/images/bonus-mockup.png" 
                alt="Bonus Book Mockup" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Presente Exclusivo</span>
                <h2 className="text-4xl font-sans font-bold text-white mb-6">
                  Turbine sua Proteção com estes <span className="text-gradient">Bônus Gratuitos</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Ao garantir seu acesso hoje, você leva um pacote completo de ferramentas práticas para acelerar seus resultados.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Guia Rápido de Transporte", desc: "Atitudes para situações de risco em ônibus, metrô e trem." },
                  { title: "Checklist Diário", desc: "O preparo essencial para sair de casa mais segura todo dia." },
                  { title: "Vídeo Aula Extra", desc: "Demonstrações práticas simples para aplicar sem medo." }
                ].map((bonus, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{bonus.title}</h4>
                      <p className="text-sm text-gray-400">{bonus.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-center gap-3 text-amber-500 mb-2 font-bold uppercase tracking-tight text-sm">
                  <AlertTriangle size={18} /> Urgência Máxima
                </div>
                <p className="text-amber-200/80">
                  Oferta exclusiva com bônus disponíveis apenas para os <strong>100 primeiros compradores</strong> nesta semana! Restam poucas vagas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30 border-y border-white/5">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-sans font-bold text-center text-white mb-16">
            Histórias de quem retomou o controle
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Camila", city: "Curitiba", text: "Antes, toda vez que eu saía sozinha, sentia o medo apertar no peito. Depois do Protocolo 3S, aprendi a me posicionar com firmeza. Foi libertador." },
              { name: "Larissa", city: "Recife", text: "Eu não acreditava que algo tão simples pudesse fazer tanta diferença, mas as técnicas de reação me salvaram. Hoje me sinto forte." },
              { name: "Beatriz", city: "São Paulo", text: "Usar o celular, Uber ou andar sozinha nunca mais foi uma tortura. Agora eu controlo a situação. Isso mudou minha vida por completo." },
              { name: "Janaína", city: "Rio de Janeiro", text: "Foi incrível como o Protocolo 3S me ensinou a ler as pessoas e o ambiente. Antes eu sentia que estava sempre um passo atrás." },
              { name: "Renata", city: "Manaus", text: "Com as orientações digitais eu consegui blindar minha presença na internet. Nunca teria pensado que algo online pudesse ser tão perigoso." },
              { name: "Patrícia", city: "Fortaleza", text: "Eu já tinha tentado outras defesas pessoais, mas nunca fizeram tanto sentido e foram tão fáceis de aplicar no meu dia a dia." },
            ].map((t, i) => (
              <Card key={i} className="bg-card border-white/5 hover:border-primary/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4 text-primary">
                    {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-400 flex items-center justify-center text-xs font-bold text-white mr-3">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.city}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-primary/30 shadow-[0_0_100px_-20px_rgba(124,58,237,0.15)] text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />
             
             <div className="mb-8">
               <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white mb-4">
                 Sua segurança não tem preço.
               </h2>
               <p className="text-xl text-gray-400">
                 Mas custa menos que um jantar fora.
               </p>
             </div>

             <div className="flex items-baseline justify-center gap-2 mb-8">
               <span className="text-2xl text-gray-500 line-through">R$ 97,00</span>
               <span className="text-6xl font-bold text-primary">R$ 19,90</span>
             </div>

             <ul className="text-left max-w-md mx-auto space-y-4 mb-10">
               {[
                 "Acesso imediato e vitalício",
                 "Módulo Radar Anti-Predador",
                 "Técnicas de Barreira Invisível",
                 "Escudo Digital e Cybersegurança",
                 "Guia de Sobrevivência Física",
                 "Garantia de 7 dias incondicional"
               ].map((feat, i) => (
                 <li key={i} className="flex items-center text-gray-300">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mr-3 shrink-0">
                     <CheckCircle2 size={14} />
                   </div>
                   {feat}
                 </li>
               ))}
             </ul>

             <Button 
               size="lg" 
               className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-xl h-16 px-12 rounded-full shadow-lg shadow-primary/25 animate-pulse hover:animate-none transition-all transform hover:scale-105"
               onClick={() => window.open("https://pay.kiwify.com.br/oyDKEKQ", "_blank")}
             >
               QUERO GARANTIR MINHA SEGURANÇA AGORA
             </Button>

             <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
               <Lock size={14} /> Pagamento 100% Seguro
             </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-white/5 border-t border-white/5">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Shield size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Risco Zero: Garantia de 7 Dias</h3>
          <p className="text-gray-400 mb-8">
            Teste todo o conteúdo. Se você não sentir que sua percepção de segurança mudou, se não se sentir mais confiante, nós devolvemos 100% do seu dinheiro. Sem perguntas.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-white/5 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Protocolo 3S. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
