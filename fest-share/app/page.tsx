"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Users, Shield, ChevronRight, Languages, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

type LanguageType = 'en' | 'pt';

interface FeatureProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

interface StepProps {
  number: string;
  title: string;
  description: string;
}



const content = {
  en: {
    nav: {
      joinWaitlist: "Join the Squad 🎉"
    },
    hero: {
      title: "The future of festival travel\nis just around the corner",
      subtitle: "No more showing up solo! Link up with your future festival bestie, split the costs, and make memories before it all starts 🚗",
      cta: "Join the Waitlist"
    },
    features: {
      safe: {
        title: "Safe & Reliable 🛡️",
        description: "Verified drivers and real-time tracking for peace of mind"
      },
      community: {
        title: "Meet Your Tribe 🤝",
        description: "Connect with festival-goers who share your vibe"
      },
      price: {
        title: "Save That Coin 💰",
        description: "Split costs and save more for the festival experience"
      }
    },
    howItWorks: {
      title: "How It Works",
      step1: {
        title: "Pick Your Festival 🎪",
        description: "Browse the hottest festivals near you"
      },
      step2: {
        title: "Squad Up 🤘",
        description: "Match with festival-goers heading your way"
      },
      step3: {
        title: "Roll Deep 🚗",
        description: "Link up and hit the road together"
      }
    },
    cta: {
      title: "Be the First to Know",
      subtitle: "Join our waitlist for early access and exclusive launch offers",
      button: "Join the Waitlist"
    },
    comingSoon: {
      title: "Launching Soon",
      description: "We're working hard to bring you the best festival travel experience. Here's what you can look forward to:",
      features: [
        "Ride Sharing",
        "Festival Matching",
        "Group Discounts"
      ]
    },
    newsletter: {
      placeholder: "Enter your email",
      button: "Subscribe"
    }
  },
  pt: {
    nav: {
      joinWaitlist: "Entrar na Lista"
    },
    hero: {
      title: "O futuro das viagens para festivais\nestá chegando",
      subtitle: "FestShare está se preparando para revolucionar como você viaja para festivais. Economize dinheiro, faça amigos e crie memórias - tudo antes da música começar.",
      cta: "Entrar na Lista de Espera"
    },
    features: {
      safe: {
        title: "Segurança Total",
        description: "Motoristas verificados e rastreamento em tempo real para sua segurança"
      },
      community: {
        title: "Conheça Pessoas",
        description: "Conecte-se com pessoas que curtem os mesmos festivais que você"
      },
      price: {
        title: "Melhor Preço",
        description: "Divida os custos e economize mais para aproveitar o festival"
      }
    },
    howItWorks: {
      title: "Como Funciona",
      step1: {
        title: "Escolha o Festival",
        description: "Selecione o festival que você quer ir"
      },
      step2: {
        title: "Reserve sua Carona",
        description: "Encontre e reserve a carona perfeita"
      },
      step3: {
        title: "Viaje em Grupo",
        description: "Conheça seu grupo e aproveite a viagem"
      }
    },
    cta: {
      title: "Seja o Primeiro a Saber",
      subtitle: "Entre na nossa lista de espera para acesso antecipado e ofertas exclusivas de lançamento",
      button: "Entrar na Lista de Espera"
    },
    comingSoon: {
      title: "Lançamento Em Breve",
      description: "Estamos trabalhando duro para trazer a você a melhor experiência de viagem para festivais. Aqui está o que você pode esperar:",
      features: [
        "Compartilhamento de Caronas",
        "Encontre seu Festival",
        "Descontos em Grupo"
      ]
    },
    newsletter: {
      placeholder: "Digite seu email",
      button: "Inscrever-se"
    }
  }
}

export default function Page() {

  const [language, setLanguage] = useState<LanguageType>('en')

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'pt' : 'en')

  const handleNewsletterSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your newsletter signup logic here
  }

  return (
    <div className="min-h-screen text-white font-inter bg-black">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-black text-white p-2">
        Skip to main content
      </a>
      <nav role="banner" className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">
            FestShare
          </span>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
            >
              <Languages className="w-4 h-4" aria-hidden="true" />
              <span>{language === 'en' ? 'Português' : 'English'}</span>
            </Button>
            <Button variant="default" size="sm">
              {content[language].nav.joinWaitlist}
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
<motion.h1 
  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-pink-400 to-violet-400 bg-[length:200%_auto] bg-clip-text text-transparent whitespace-pre-line animate-gradient-x leading-normal md:leading-tight py-1" // Added leading classes and py-1
  initial={{ scale: 0.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ 
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.1 
  }}
>
  {content[language].hero.title}
</motion.h1>
  <motion.p 
    className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
  >
    {content[language].hero.subtitle}
  </motion.p>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
  >
    <Button size="lg" className="bg-[#1A1A1A] hover:bg-[#252525] text-white">
      {content[language].hero.cta}
    </Button>
  </motion.div>
</motion.div>

        </div>
      </section>

      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={<Shield className="w-6 h-6 text-violet-400" />}
              title={content[language].features.safe.title}
              description={content[language].features.safe.description}
            />
            <Feature
              icon={<Users className="w-6 h-6 text-pink-400" />}
              title={content[language].features.community.title}
              description={content[language].features.community.description}
            />
            <Feature
              icon={<Car className="w-6 h-6 text-violet-400" />}
              title={content[language].features.price.title}
              description={content[language].features.price.description}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{content[language].howItWorks.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step 
              number="1" 
              title={content[language].howItWorks.step1.title}
              description={content[language].howItWorks.step1.description}
            />
            <Step 
              number="2" 
              title={content[language].howItWorks.step2.title}
              description={content[language].howItWorks.step2.description}
            />
            <Step 
              number="3" 
              title={content[language].howItWorks.step3.title}
              description={content[language].howItWorks.step3.description}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black"> {/* Changed from bg-primary/10 */}
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">{content[language].comingSoon.title}</h2>
    <p className="text-xl text-gray-300 mb-8">{content[language].comingSoon.description}</p>
    <div className="flex justify-center space-x-4">
      {content[language].comingSoon.features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <CheckCircle className="w-5 h-5 text-primary mr-2" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="py-20 bg-gradient-to-b from-black to-violet-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{content[language].cta.title}</h2>
            <p className="text-gray-400 mb-8">{content[language].cta.subtitle}</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {content[language].cta.button}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <form onSubmit={handleNewsletterSignup} className="mt-8 max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={content[language].newsletter.placeholder}
                  className="flex-grow px-4 py-2 rounded-l-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {content[language].newsletter.button}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      <footer role="contentinfo" className="py-8 bg-black/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FestShare. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            <a href="#" className="underline hover:text-white">Accessibility Statement</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeInOut" }
    }}
    className="relative p-6 rounded-xl bg-white/5 border border-white/10 group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-pink-500/0 to-violet-600/0 group-hover:from-violet-600/20 group-hover:via-pink-500/20 group-hover:to-violet-600/20 transition-all duration-500" aria-hidden="true"></div>
    <div className="relative">
      <motion.div 
        className="mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {React.cloneElement(icon, { 'aria-hidden': 'true' })}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
)

const Step = ({ number, title, description }: StepProps) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeInOut" }
    }}
    className="text-center"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center mx-auto mb-4"
      aria-hidden="true"
    >
      <span className="text-xl font-bold">{number}</span>
    </motion.div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)


