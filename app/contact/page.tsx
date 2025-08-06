'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      device: '',
      issue: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Mobile Gurus for all your device repair needs. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+234 9034626287</p>
                <p className="text-gray-600">+234 9037979916</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">mobilegurusteam@gmail.com</p>
                {/* <p className="text-gray-600">support@mobilegurus.ng</p> */}
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Akwa Ibom, Nigeria</p>
                <p className="text-gray-600">11 Ekpenyong St, Uyo 520221, </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Mon - Saturday: 8AM - 6PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-8 h-8 text-red-600" />
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="device">Device Type</Label>
                      <select
                        id="device"
                        name="device"
                        value={formData.device}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">Select Device</option>
                        <option value="smartphone">Smartphone</option>
                        <option value="laptop">Laptop</option>
                        <option value="tablet">Tablet</option>
                        <option value="smartwatch">Smart Watch</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="issue">Issue Description</Label>
                    <Input
                      id="issue"
                      name="issue"
                      type="text"
                      value={formData.issue}
                      onChange={handleInputChange}
                      placeholder="Brief description of the problem"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your repair needs..."
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8 cursor-pointer" onClick={()=>window.location.href = "https://maps.app.goo.gl/8yDESF1dfkmxjDWn6"}>
              <Card>
                <CardHeader>
                  <CardTitle>Visit Our Main Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4 cursor-pointer" 
                  >
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      {/* <p className="text-gray-500">Interactive Map Coming Soon</p> */}
                      <p className="text-sm text-gray-400">11 Ekpenyong St, Uyo 520221, Akwa Ibom, Nigeria</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      11 Ekpenyong St, Uyo 520221, Akwa Ibom, Nigeria
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                     +234 9034626287
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Open Monday - Saturday
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle>Emergency Repairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Need urgent repair services? We offer emergency repair services for critical business devices.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Emergency Repair Hotline
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}