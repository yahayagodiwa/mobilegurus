'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Wrench,
  Users,
  Phone,
  Laptop,
  ShieldCheck,
} from 'lucide-react';
import Header from '@/components/Header';
import guru from "../../public/images/guru.jpg"
import guru1 from "../../public/images/guru1.jpg"
import students from "../../public/images/students.jpg"
import Footer from '@/components/Footer';

export default function AcademyOverview() {
  return (
    <>
        <Header />
    <section className="bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Welcome to Mobile Gurus Academy</h2>
            <blockquote className="italic text-red-600 text-lg">"We don`t just fix gadgets — we fix the future."</blockquote>
            <p className="text-gray-700">
              Mobile Gurus Academy is Nigeria’s most hands-on training institution for mobile gadget repairs. We're transforming the industry by raising a new generation of certified, trusted technicians — one student at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <Button className="bg-red-600 hover:bg-red-700">Sign Up Now</Button> */}
             <a href='https://wa.me/2349034626287' target='_blank'> <Button variant="outline" >Chat With an Academy Counselor</Button> </a>
            </div>
          </div>
          <div>
            <Image
              src={guru1}
              alt="Students"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full max-h-[50vh] object-cover"
            />
          </div>
        </div>

        {/* Why It Exists */}
        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
             <Image
              src={guru}
              alt="Tools"
              width={600}
              height={400}
              className="rounded-xl w-full max-h-[50vh] object-cover"
            />
            <div className="space-y-4">
          <h3 className="text-2xl font-bold">Why Mobile Gurus Academy Exists</h3>
              <p>
                In today’s digital age, gadgets are lifelines. Yet Nigerians face unskilled roadside repairs, overpriced services, and no formal training path.
              </p>
              <p>
                <strong>Mobile Gurus Academy</strong> solves this by building Nigeria’s most reliable ecosystem for technical education and job-ready certification.
              </p>
            </div>
           
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Our Vision</h4>
            <p>To become Africa’s most respected repair training institution — producing certified technicians who power the digital future.</p>

            <h4 className="text-xl font-bold pt-6">Our Mission</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Train over <strong>100,000</strong> Nigerians</li>
              <li>Build national repair hubs</li>
              <li>Create jobs & freelance careers</li>
              <li>Restore trust in gadget repairs</li>
              <li>Empower youth with useful skills</li>
            </ul>
          </div>
          <Image
            src={students}
            alt="Instructor"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* What Makes Us Different */}
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center"> What Makes Us Different</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="space-y-2">
              <GraduationCap className="w-10 h-10 mx-auto text-red-600 hover:bg-red-600 hover:text-white rounded-md" />
              <h4 className="font-semibold">Best Instructors, Local and Foreign (India + Nigeria)</h4>
              <p>Learn from the very best. Our teachers are drawn from Nigeria’s top repair experts and experienced international technicians from India, the global capital of mobile repair excellence.</p>
            </div>
            <div className="space-y-2">
              <Wrench className="w-10 h-10 mx-auto text-red-600 hover:bg-red-600 hover:text-white rounded-md" />
              <h4 className="font-semibold">Real Tools. Real Parts. Real Practice.</h4>
              <p>Students work with actual devices—phones, laptops, tablets—in a live repair center environment equipped with industry-standard tools and diagnostic equipment.</p>
            </div>
            <div className="space-y-2">
              <ShieldCheck className="w-10 h-10 mx-auto text-red-600 hover:bg-red-600 hover:text-white rounded-md" />
              <h4 className="font-semibold">Certification That Opens Doors</h4>
              <p> Every graduate receives a *Mobile Gurus Certification* recognized nationwide, with a clear path to employment within our national repair centers or franchise system.</p>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Our Courses</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-xl">
              <Phone className="w-8 h-8 text-red-600 mb-2" />
              <h4 className="text-lg font-semibold mb-2">Phone Repair</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Logic board & power faults</li>
                <li>Camera, port, battery, water damage</li>
                <li>Software flashing & unlocking</li>
                <li>Soldering & BGA rework</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Laptop className="w-8 h-8 text-red-600 mb-2" />
              <h4 className="text-lg font-semibold mb-2">Laptop Repair</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Motherboard, BIOS, IC repairs</li>
                <li>Screen, battery, hinge fixes</li>
                <li>Software optimization</li>
                <li>Data recovery</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-2">
            💡 Take one course or both — your career, your path.
          </p>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-100 p-6 rounded-xl space-y-6">
          <h3 className="text-2xl font-bold text-center">Student Testimonials</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <blockquote className="italic text-gray-700 border-l-4 border-red-600 pl-4">
              “I never imagined I could earn over ₦150,000/month just fixing phones. Mobile Gurus changed my life.”
              <footer className="mt-2 text-sm font-semibold text-gray-600">— Confidence Bassey</footer>
            </blockquote>
            <blockquote className="italic text-gray-700 border-l-4 border-red-600 pl-4">
              “I came with zero experience. I left with a job, a certificate, and clients. This is the future.”
              <footer className="mt-2 text-sm font-semibold text-gray-600">— Deborah I.</footer>
            </blockquote>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold"> Ready to Begin?</h3>
          <p className="text-gray-700 text-lg">Start learning. Start earning. Start leading.</p>
          <div className="flex justify-center flex-wrap gap-4">
            {/* <Button className="bg-red-600 hover:bg-red-700">Sign Up Now</Button> */}
           <a href='https://wa.me/2349034626287' target='_blank'> 
            <Button variant="outline">Chat With an Academy Counselor</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
