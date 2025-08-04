'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Smartphone,
  Laptop,
  Watch,
  Shield,
  Clock,
  MapPin,
  GraduationCap,
  Wrench,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import first from '../public/images/first.png';
import hero from '../public/images/hero.jpg';
import third from '../public/images/third.jpg';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const heroContent = [
    {
      image: first,
      title: '',
      description:
        "" },
        {
          image: third,
          title: 'We Can Fix Your Problem',
          description:
            'We provide the best Gadget repain in Nigeria. You can come to our store for a free estimate without an appointment, or mail your device to us from anywhere in Nigeria to receive service.',
        },
    {
      image: hero,
      title: 'On-Demand Mobile Repairs at Your Fingertips',
      description:
        'Making Mobile Repairs More Convenient For Everyone',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section>
        <Slider {...settings}>
          {heroContent.map((slide, i) => (
            <div className="relative h-[50vh] md:h-[80vh] w-full md:pt-10" key={i}>
              <Image src={slide.image} alt={slide.title} width={500} height={500} className="absolute inset-0 w-full h-[100%] object-center" />
              <div className={`${slide.title === '' ? "bg-none" : "bg-black/50 "} absolute inset-0 z-0`}></div>
              <div className="relative z-10 p-10 text-white text-center">
                <h1 className="text-3xl font-bold">{slide.title}</h1>
                <p className="font-medium text-xl md:w-[50vw] mx-auto mt-2">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Services Overview */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Repair</h2>
            <p className="text-lg text-gray-600">Professional repair services for all your devices which includes the following and more</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow hover:bg-red-100">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Mobile Phones</CardTitle>
                <CardDescription>Screen repairs, battery replacement, water damage, and more</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow hover:bg-red-100">
              <CardHeader>
                <Laptop className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Laptops</CardTitle>
                <CardDescription>Hardware fixes, software issues, screen replacement</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow hover:bg-red-100">
              <CardHeader>
                <Watch className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Smart Watches</CardTitle>
                <CardDescription>Battery, screen, and connectivity issues resolved</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="academy" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-8">
              <TabsTrigger value="academy">Mobile Gurus Academy</TabsTrigger>
              {/* <TabsTrigger value="centers">Our Repair Centres Near You</TabsTrigger> */}
              <TabsTrigger value="technician">Become a Technician</TabsTrigger>
            </TabsList>

            <TabsContent value="academy" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-8 h-8 text-red-600" />
                    <CardTitle className="text-2xl">Mobile Gurus Academy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <b>Mobile Gurus Academy</b> is Nigeria’s most forward-thinking and hands-on 
                    training institution for mobile gadget repairs. Created by Mobile Gurus Ltd, t
                    he Academy is the brainchild of a mission-driven movement: 
                    to transform the mobile repair industry by raising a new 
                    generation of certified, trusted, and highly skilled technicians —one student at a time.

                  </p>
                  <a href="/academy" rel="noopener noreferrer">
                    <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                  </a>
                </CardContent>
              </Card>
            </TabsContent>

            {/* <TabsContent value="centers" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-8 h-8 text-red-600" />
                    <CardTitle className="text-2xl">Our Repair Centres Near You</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Find the nearest Mobile Gurus repair center in your area. We have locations across Nigeria
                    and are expanding throughout Africa to serve you better.
                  </p>
                  <a href="https://wa.link/s98x66" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-red-600 hover:bg-red-700">Find Location</Button>
                  </a>
                </CardContent>
              </Card>
            </TabsContent> */}

            <TabsContent value="technician" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-8 h-8 text-red-600" />
                    <div>
                      <CardTitle className="text-2xl">Become a Technician</CardTitle>
                      <p className="text-sm text-gray-500">Repair with Mobile Gurus</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <strong>A Commission-Based Model:</strong> Technicians earn a commission on each job they complete,
                    rewarding their expertise and hard work. Join our network of skilled professionals and build
                    your repair business with Mobile Gurus.
                  </p>
                  <a href="https://wa.link/d88xf0" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-red-600 hover:bg-red-700">Apply Now</Button>
                  </a>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Mobile Gurus?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>

            <div className="text-center">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick turnaround times to get you back online</p>
            </div>

            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Convenient Location</h3>
              <p className="text-gray-600">We come to you or visit our nearby centers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
