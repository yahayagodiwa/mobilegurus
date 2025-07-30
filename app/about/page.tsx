import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Users, 
  Shield, 
  Clock, 
  DollarSign, 
  Wrench, 
  GraduationCap 
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Mobile Gurus
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming the mobile repair experience in Nigeria and across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              At Mobile Gurus, we're dedicated to transforming the mobile repair experience in Nigeria and across Africa. 
              Our mission is simple: to provide a seamless, reliable, and professional mobile repair service that brings 
              expert technicians directly to you, wherever you are.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              In an age where mobile devices are essential for daily life, we understand the frustration of being without 
              your phone or tablet. Whether it's a cracked screen, a battery replacement, or a more complex issue, Mobile 
              Gurus is here to ensure your device is repaired quickly and efficiently—without the hassle.
            </p>

            <p className="text-lg text-gray-700 mb-12">
              We are driven by a passion for innovation and quality service. Our app connects users with certified 
              technicians who bring the repair shop to your doorstep or offer fast, in-store services. Every technician 
              on our platform is highly trained and equipped with top-tier tools and replacement parts, ensuring that 
              every repair meets our rigorous standards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Mobile Gurus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Mobile Gurus?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-red-600" />
                  <CardTitle>Convenience at Your Fingertips</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Whether you're at home, work, or anywhere in between, Mobile Gurus is just a few taps away. 
                  No more waiting in long queues or searching for a repair shop.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-8 h-8 text-red-600" />
                  <CardTitle>Affordable Pricing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe that quality repairs shouldn't come with an unreasonable price tag. Our transparent 
                  pricing ensures you always know what to expect before you pay.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-red-600" />
                  <CardTitle>Fast & Reliable Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We aim to get your device up and running as quickly as possible, minimizing any downtime and stress.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-red-600" />
                  <CardTitle>Expert Technicians</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every Mobile Gurus technician is trained and equipped to handle a wide variety of mobile device 
                  repairs, from smartphones to tablets to laptops. We are committed to excellence in every service we provide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Empowering Technicians */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Technicians</h2>
              <p className="text-lg text-gray-700 mb-6">
                Mobile Gurus isn't just about helping customers—it's also about empowering the technicians who make 
                our services possible. We provide a platform for skilled technicians to showcase their expertise, 
                build their businesses, and reach a broader clientele.
              </p>
              <p className="text-lg text-gray-700">
                By offering competitive earnings and professional development opportunities through the Mobile Gurus 
                Academy, we aim to create a thriving community of repair experts who are shaping the future of mobile 
                repair across Africa.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Building a network of skilled professionals</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Professional development through our academy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Eye className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-8">
            We envision a future where mobile repairs are as easy and accessible as ordering a taxi, where no device 
            is left behind due to expensive or inconvenient repair services. Our goal is to make Mobile Gurus the 
            go-to platform for mobile repairs, empowering both customers and technicians alike.
          </p>
          <p className="text-lg text-gray-700">
            We're committed to building a connected Africa, one repair at a time.
          </p>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-lg mb-8">
            Whether you're a customer in need of a quick fix or a technician looking for more opportunities, Mobile 
            Gurus is here to make your mobile repair experience faster, more convenient, and more professional.
          </p>
          <p className="text-lg mb-8">
            We're not just fixing devices; we're fixing the way mobile repair services are done in Nigeria and beyond. 
            Together, we can revolutionize the mobile repair industry, one device at a time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}