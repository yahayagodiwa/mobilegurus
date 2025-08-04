import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Laptop, 
  Watch, 
  Tablet, 
  Monitor, 
  Headphones,
  Wrench,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Phone Repair",
      description: "Complete repair services for all smartphone brands",
      features: [
        "Screen replacement and repair",
        "Battery replacement",
        "Water damage restoration",
        "Camera and speaker fixes",
        "Charging port repair",
        "Software troubleshooting"
      ]
    },
    {
      icon: Laptop,
      title: "Laptop Repair",
      description: "Professional laptop repair and maintenance services",
      features: [
        "Hardware diagnostics and repair",
        "Screen replacement",
        "Keyboard and trackpad fixes",
        "Hard drive replacement",
        "RAM upgrades",
        "Software installation and cleanup"
      ]
    },
    {
      icon: Watch,
      title: "Smart Watch Repair",
      description: "Specialized repair services for all smartwatch brands",
      features: [
        "Battery replacement",
        "Screen repair",
        "Water damage repair",
        "Strap replacement",
        "Connectivity issues",
        "Software updates"
      ]
    },
    {
      icon: Tablet,
      title: "Tablet Repair",
      description: "Expert tablet repair services for all major brands",
      features: [
        "Touch screen repair",
        "Battery replacement",
        "Charging port fixes",
        "Speaker and microphone repair",
        "Camera replacement",
        "Software restoration"
      ]
    },
    {
      icon: Monitor,
      title: "Computer Monitor Repair",
      description: "Display repair services for desktop monitors",
      features: [
        "Screen replacement",
        "Backlight repair",
        "Color calibration",
        "Connection port fixes",
        "Power supply repair",
        "Stand and mounting fixes"
      ]
    },
    {
      icon: Headphones,
      title: "Audio Device Repair",
      description: "Repair services for headphones and audio equipment",
      features: [
        "Driver replacement",
        "Cable repair",
        "Jack and connector fixes",
        "Redtooth connectivity",
        "Noise cancellation repair",
        "Cushion and headband replacement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Repair Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional repair services for all your electronic devices. Fast, reliable, and affordable.
            </p>
           <a href='https://wa.link/epc8ej' target='_blank'> <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Book a Repair
            </Button>\
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-red-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
               <a href='https://wa.link/epc8ej' target='_blank'>  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                    Get Quote
                  </Button>
                  </a> 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple steps to get your device repaired</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">Schedule your repair through our website or app</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Diagnosis</h3>
              <p className="text-gray-600">Our certified technicians diagnose the issue</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Repair</h3>
              <p className="text-gray-600">Fast, professional repair with quality parts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Promise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All repairs come with a comprehensive warranty and quality guarantee
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most repairs completed within 24-48 hours or while you wait
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Expert Technicians</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certified professionals with years of experience and ongoing training
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}