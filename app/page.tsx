"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Smartphone,
  Laptop,
  Watch,
  Shield,
  Clock,
  MapPin,
  GraduationCap,
  Wrench,
  ArrowRight,
  Star,
  CheckCircle,
  Users,
  Award,
  Zap,
  BookOpen,
  Briefcase,
  Headphones,
  Gamepad,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import first from "../public/images/home1.jpg";
import hero from "../public/images/hero.jpg";
import laptop from "../public/images/laptop.jpg";
import { useRouter } from "next/navigation";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

const slideInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

// Animated components
const AnimatedCard = ({
  children,
  delay = 0,
}: {
  children?: ReactNode;
  delay?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedSection = ({
  children,
  variants = fadeInUp,
}: {
  children?: ReactNode;
  variants?: any;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("academy");
  const router = useRouter();
  const heroContent = [
    {
      image: first,
      title: "Expert Gadget Repairs",
      description:
        "Professional repair services for all your favorite devices with warranty guarantee",
      cta: "Get Free Estimate",
    },
    {
      image: laptop,
      title: "We Can Fix Your Problem",
      description:
        "We provide the best gadget repair in Nigeria. Visit our store for a free estimate or mail your device from anywhere in Nigeria.",
      cta: "Find Location",
    },
    {
      image: hero,
      title: "On-Demand Mobile Repairs",
      description:
        "Making mobile repairs more convenient for everyone with our expert technicians",
      cta: "Book Service",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />

      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bg to-bg" />

        {heroContent.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-text to-primary bg-clip-text text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {heroContent[currentSlide].title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {heroContent[currentSlide].description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {heroContent[currentSlide].cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => router.push("/services")}
                variant="outline"
                size="lg"
                className="border-2 border-text text-white hover:bg-text hover:text-bg px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroContent.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary w-8" : "bg-muted/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-8 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-text rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: "10K+", label: "Devices Repaired", icon: Zap },
              { number: "98%", label: "Success Rate", icon: Award },
              { number: "4.9/5", label: "Customer Rating", icon: Star },
              { number: "24/7", label: "Support", icon: Users },
            ].map((stat, index) => (
              <motion.div key={index} variants={scaleIn} className="p-6">
                <FloatingElement delay={index * 0.2}>
                  <stat.icon className="w-8 h-8 mx-auto mb-4 opacity-80" />
                </FloatingElement>
                <motion.div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variants={fadeInUp}>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                What We <span className="text-primary">Repair</span>
              </motion.h2>
              <motion.p
                className="text-xl text-muted max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Professional repair services for all your devices with 6-month
                warranty
              </motion.p>
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Smartphone,
                title: "Mobile phones & Tablets",
                description:
                  "Screen repairs, battery replacement, water damage, and more",
                features: [
                  "Screen Replacement",
                  "Battery Issues",
                  "Water Damage",
                  "Software Problems",
                ],
              },
              {
                icon: Laptop,
                title: "Laptop & Desktop",
                description:
                  "Hardware fixes, software issues, screen replacement and upgrades",
                features: [
                  "Hardware Repair",
                  "Software Issues",
                  "Screen Replacement",
                  "Performance Upgrade",
                ],
              },
              {
                icon: Headphones,
                title: "Music box & Headphones",
                description:
                  "Expert repair for music boxes, wired and wireless headphones.",
                features: [
                  "Battery Replacement",
                  "Speaker/Audio Fix",
                  "Connectivity Repair",
                  "Software & Firmware Update",
                ],
              },
              {
                icon: Gamepad,
                title: "Power Bank & Game Console",
                description:
                  "Reliable repair services for power banks and handheld game.",
                features: [
                  "Battery Replacement",
                  "Charging Port Repair",
                  "Overheating Fix",
                  "System & Firmware Update",
                ],
              },
            ].map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-2 border-border bg-card text-card-foreground shadow-xl hover:shadow-2xl transition-all duration-300 group md:h-[28rem] h-full">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      >
                        <service.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + featureIndex * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Get Service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Tab Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variants={fadeInUp}>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Join Our <span className="text-primary">Community</span>
              </motion.h2>
              <motion.p
                className="text-xl text-muted max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Whether you want to learn new skills or build a career, we have
                opportunities for you
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <Tabs
              defaultValue="academy"
              className="w-full"
              onValueChange={setActiveTab}
            >
              {/* Modern Tab List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 bg-muted/50 p-2 rounded-2xl mb-16">
                  {[
                    {
                      value: "academy",
                      label: "Academy",
                      icon: BookOpen,
                    },
                    {
                      value: "technician",
                      label: "Technician",
                      icon: Briefcase,
                    },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="flex items-center justify-center space-x-3 py-4 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:text-primary transition-all duration-300 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <tab.icon className="w-5 h-5" />
                      </motion.div>
                      <span className="font-semibold">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>

              {/* Academy Tab Content */}
              <TabsContent value="academy" className="mt-0">
                <motion.div
                  key="academy"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-card to-card/50">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                      {/* Left Content */}
                      <div className="p-8 lg:p-12">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                              <GraduationCap className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-3xl font-bold text-card-foreground">
                                Mobile Gurus Academy
                              </CardTitle>
                              <div className="flex items-center space-x-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                                <span className="ml-2 text-sm text-muted-foreground">
                                  4.9/5 (500+ students)
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Nigeria&apos;s premier hands-on training institution
                            for mobile gadget repairs. Transform your career
                            with certified training programs and join the next
                            generation of skilled technicians.
                          </p>

                          <div className="space-y-4 mb-8">
                            {[
                              "Hands-on practical training",
                              "Industry-certified courses",
                              "Job placement assistance",
                              "Modern tools and equipment",
                              "Flexible learning schedules",
                            ].map((feature, index) => (
                              <motion.div
                                key={index}
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                              >
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-card-foreground">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                onClick={() => router.push("/academy")}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl"
                              >
                                Explore Courses
                                <ArrowRight className="ml-2 w-5 h-5" />
                              </Button>
                            </motion.div>
                            <Button
                              onClick={() => router.push("/academy")}
                              variant="outline"
                              className="border-border text-card-foreground hover:bg-muted px-8 py-3 rounded-xl"
                            >
                              View Curriculum
                            </Button>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right Side - Visual Element */}
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-12 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          className="text-center"
                        >
                          <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <GraduationCap className="w-16 h-16 text-primary" />
                          </div>
                          <div className="bg-card rounded-2xl p-6 shadow-lg">
                            <p className="text-sm text-muted-foreground mb-2">
                              Next Cohort Starts
                            </p>
                            <p className="text-2xl font-bold text-card-foreground">
                              March 1, 2024
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              Limited seats available
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Technician Tab Content */}
              <TabsContent value="technician" className="mt-0">
                <motion.div
                  key="technician"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-card to-card/50">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                      {/* Left Content */}
                      <div className="p-8 lg:p-12">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                              <Wrench className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-3xl font-bold text-card-foreground">
                                Become a Technician
                              </CardTitle>
                              <p className="text-muted-foreground mt-2">
                                Build your repair business with us
                              </p>
                            </div>
                          </div>

                          <div className="mb-6 p-6 bg-primary/5 rounded-2xl">
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground mb-2">
                                Average Monthly Earnings
                              </p>
                              <p className="text-3xl font-bold text-card-foreground">
                                ₦150K - ₦400K
                              </p>
                            </div>
                          </div>

                          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Join Nigeria&apos;s fastest-growing network of
                            skilled technicians. Earn competitive commissions
                            with our proven business model and comprehensive
                            support system.
                          </p>

                          <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {[
                              {
                                title: "Flexible Schedule",
                                desc: "Choose your working hours",
                              },
                              {
                                title: "Modern Tools",
                                desc: "Access to latest equipment",
                              },
                              {
                                title: "Training & Support",
                                desc: "Continuous skill development",
                              },
                              {
                                title: "Growth Opportunities",
                                desc: "Career advancement paths",
                              },
                            ].map((benefit, index) => (
                              <motion.div
                                key={index}
                                className="bg-card border border-border rounded-xl p-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                              >
                                <h4 className="font-semibold text-card-foreground mb-2">
                                  {benefit.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {benefit.desc}
                                </p>
                              </motion.div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                onClick={() => router.push("/academy")}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl"
                              >
                                Apply Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                              </Button>
                            </motion.div>
                            <Button
                              onClick={() => router.push("/academy")}
                              variant="outline"
                              className="border-border text-card-foreground hover:bg-muted px-8 py-3 rounded-xl"
                            >
                              Learn More
                            </Button>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right Side - Visual Element */}
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-12 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          className="text-center"
                        >
                          <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-16 h-16 text-primary" />
                          </div>
                          <div className="space-y-4">
                            <div className="bg-card rounded-2xl p-4 shadow-lg">
                              <p className="text-sm text-muted-foreground">
                                Commission Rate
                              </p>
                              <p className="text-2xl font-bold text-card-foreground">
                                Up to 40%
                              </p>
                            </div>
                            <div className="bg-card rounded-2xl p-4 shadow-lg">
                              <p className="text-sm text-muted-foreground">
                                Support Available
                              </p>
                              <p className="text-lg font-bold text-card-foreground">
                                24/7
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-primary">Mobile Gurus?</span>
              </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                Experience the difference with our customer-focused approach and
                expert services
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: "Expert Technicians",
                description:
                  "Certified professionals with years of experience and continuous training",
              },
              {
                icon: Clock,
                title: "Fast Service",
                description:
                  "Quick turnaround times with same-day service options available",
              },
              {
                icon: MapPin,
                title: "Nationwide Coverage",
                description:
                  "We come to you or visit our conveniently located service centers",
              },
            ].map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <motion.div
                  className="text-center p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FloatingElement delay={index * 0.5}>
                      <feature.icon className="w-10 h-10 text-primary" />
                    </FloatingElement>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <AnimatedSection variants={scaleIn}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Get Your Device Fixed?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact us today for a free estimate and experience the best
              gadget repair service in Nigeria
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-secondary-foreground text-text hover:bg-primary-foreground/90 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Book Service Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Free Estimate
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
}
