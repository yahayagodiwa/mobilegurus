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
  Users, 
  Wrench 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
    <section
  className="relative bg-[url(../public/images/hero.jpg)] from-red-50 to-purple-50 py-20 bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                On-Demand Mobile Repairs at Your Fingertips
              </h1>
              <p className="text-xl text-white mb-8">
                Making Mobile Repairs More Convenient For Everyone
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                Book Now
              </Button>
            </div>
           
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Repair</h2>
            <p className="text-lg text-gray-600">Professional repair services for all your devices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Mobile Phones</CardTitle>
                <CardDescription>Screen repairs, battery replacement, water damage, and more</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Laptop className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Laptops</CardTitle>
                <CardDescription>Hardware fixes, software issues, screen replacement</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="academy" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="academy" className="text-sm md:text-base">Mobile Gurus Academy</TabsTrigger>
              <TabsTrigger value="centers" className="text-sm md:text-base">Our Repair Centres Near You</TabsTrigger>
              <TabsTrigger value="technician" className="text-sm md:text-base">Become a Technician</TabsTrigger>
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
                    Join our comprehensive training program and become a certified mobile repair technician. 
                    Learn from industry experts and gain hands-on experience with the latest repair techniques.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="centers" className="space-y-4">
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
                  <Button className="bg-red-600 hover:bg-red-700">Find Locations</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technician" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-8 h-8 text-red-600" />
                    <CardTitle className="text-2xl">Become a Technician - Repair with Mobile Gurus</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <strong>A Commission-Based Model:</strong> Technicians earn a commission on each job they complete, 
                    rewarding their expertise and hard work. Join our network of skilled professionals and build 
                    your repair business with Mobile Gurus.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700">Apply Now</Button>
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