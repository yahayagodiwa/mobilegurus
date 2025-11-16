import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import laptop from "../../public/images/laptop.jpg"
import technincian from "../../public/images/students.jpg"

export default function TechnicianProgram() {
  return (
    <>
    <Header />
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* HERO */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4"><em>Become a Mobile Gurus Technician</em></h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Repair with Mobile Gurus. Grow your repair business one fix at a time.
        </p>
        {/* <div className="mt-10">
          <Image
            src="/images/technician-hero.jpg"
            alt="Technician at work"
            width={1200}
            height={700}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div> */}
      </div>

      {/* Why Join */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Why Become a Mobile Gurus Technician?</h3>
          <p className="text-gray-600">
            Earn up to <strong>40% commission</strong> on each repair. No capital needed — just your skills.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>We provide workspace, parts, tools, electricity</li>
            <li>Customers are assigned to you automatically</li>
            <li>We handle logistics, marketing, and support</li>
          </ul>
        </div>
        <Image
          src={laptop}
          alt="Tools and workspace"
          width={600}
          height={400}
          className="rounded-xl shadow-md object-cover"
        />
      </div>

      {/* Learn & Grow */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Image
          src={technincian}
          alt="Training session"
          width={600}
          height={400}
          className="rounded-xl shadow-md object-cover"
        />
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Learn. Earn. Grow.</h3>
          <p className="text-gray-600">
            Technicians get <strong>free access</strong> to Mobile Gurus Academy.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Phone & Laptop Repair Courses</li>
            <li>Free schematics and advanced guides</li>
            <li>Board-level repair and diagnostics</li>
            <li>Certification & career coaching</li>
          </ul>
        </div>
      </div>

      {/* How it works */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">How It Works – Simple as Uber</h3>
        <div className="grid md:grid-cols-5 gap-6 text-center text-gray-700">
          {[
            'Customer requests repair',
            'Smart technician matching',
            'You accept the job',
            'Do the repair with our tools',
            'Get paid instantly (40%)'
          ].map((step, index) => (
            <div key={index} className="p-4 border rounded-xl shadow-sm bg-white">
              <p className="font-bold text-xl mb-2">{index + 1}</p>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Recap */}
      <div className="bg-gray-100 rounded-2xl p-8 md:p-12 space-y-6">
        <h3 className="text-2xl font-semibold text-center">Your Pathway to Success</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Daily jobs — no customer hunting</li>
          <li>Professional network & identity</li>
          <li>Free training & growth opportunities</li>
          <li>Leadership, franchise & coaching roles</li>
          <li>Zero overhead, all earnings</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Ready to Build Your Dream Repair Business?</h3>
        <p className="text-gray-600">You’ve got the skill. We’ve got everything else.</p>
       <a href='https://wa.link/epc8ej' target='_blank'> <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
           Apply Now
        </button>
        </a>
      </div>
    </section>
    <Footer />
    </>
  );
}
