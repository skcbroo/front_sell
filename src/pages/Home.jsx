import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Shield, 
  FileText, 
  CreditCard, 
  Lock,
  Calculator,
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from 'lucide-react';

function App() {
  const [calculatorValue, setCalculatorValue] = useState('');
  const [estimatedOffer, setEstimatedOffer] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateOffer = () => {
    const value = parseFloat(calculatorValue);
    if (value && value > 0) {
      // Simulate offer calculation (typically 60-80% of claim value)
      const offer = Math.round(value * 0.7);
      setEstimatedOffer(offer);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#2B6CB0]">MIDLEJ Capital</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-gray-700 hover:text-[#2B6CB0] transition-colors">Como Funciona</a>
              <a href="#vantagens" className="text-gray-700 hover:text-[#2B6CB0] transition-colors">Vantagens</a>
              <a href="#contato" className="text-gray-700 hover:text-[#2B6CB0] transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#EBF4FF] via-[#DBEAFE] to-[#BFDBFE] overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Turn Your Legal Case Into 
              <span className="text-[#2B6CB0]"> Cash Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Get paid in less than 24 hours — fast, legal, and hassle-free.
            </p>

            <div className="mb-12">
              <a
                href="https://wa.me/5561996204646?text=Olá! Tenho interesse em vender meu processo judicial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#2B6CB0] text-white font-bold text-lg rounded-full shadow-xl hover:bg-[#1E40AF] hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Sell My Case Now
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">24h Payment</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">100% Legal</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <FileText className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Minimal Papers</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <CreditCard className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">No Collateral</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Privacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MIDLEJ Capital?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the fastest, most secure way to convert your legal settlement into immediate cash.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Clock className="w-8 h-8" />}
              title="Payment within 24 hours"
              description="Receive your money faster than any traditional financing option"
              color="text-blue-600"
            />
            <BenefitCard 
              icon={<Shield className="w-8 h-8" />}
              title="100% Legal and Secure"
              description="All transactions are fully compliant with legal requirements"
              color="text-green-600"
            />
            <BenefitCard 
              icon={<FileText className="w-8 h-8" />}
              title="Minimal Paperwork"
              description="Simple process with minimal documentation required"
              color="text-purple-600"
            />
            <BenefitCard 
              icon={<CreditCard className="w-8 h-8" />}
              title="No Collateral Needed"
              description="Your legal case serves as the only collateral required"
              color="text-orange-600"
            />
            <BenefitCard 
              icon={<Lock className="w-8 h-8" />}
              title="Guaranteed Privacy"
              description="Complete confidentiality throughout the entire process"
              color="text-indigo-600"
            />
            <BenefitCard 
              icon={<Calculator className="w-8 h-8" />}
              title="Fair Valuations"
              description="Competitive offers based on thorough case analysis"
              color="text-teal-600"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 5-step process to get your money fast</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            <ProcessStep 
              number="1"
              title="Submit Documents"
              description="Upload your legal case documents for quick review"
              isFirst={true}
            />
            <ProcessStep 
              number="2"
              title="Get Proposal"
              description="Receive our competitive offer within 24 hours"
            />
            <ProcessStep 
              number="3"
              title="Sign Agreement"
              description="Digital signature for fast processing"
            />
            <ProcessStep 
              number="4"
              title="Court Registration"
              description="We handle all legal formalities"
            />
            <ProcessStep 
              number="5"
              title="Get Paid"
              description="Money transferred within 24 hours"
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Offer</h2>
            <p className="text-xl text-gray-600">Get an instant estimate of what your case is worth</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
            <div className="max-w-md mx-auto">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Enter your claim value (R$)
              </label>
              <input
                type="number"
                value={calculatorValue}
                onChange={(e) => setCalculatorValue(e.target.value)}
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#2B6CB0] focus:ring-0 outline-none transition-colors"
                placeholder="Ex: 100,000"
              />
              <button
                onClick={calculateOffer}
                className="w-full mt-6 px-6 py-4 bg-[#2B6CB0] text-white font-bold text-lg rounded-xl hover:bg-[#1E40AF] transition-colors shadow-lg"
              >
                Calculate Now
              </button>
              
              {estimatedOffer && (
                <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Estimated offer:</p>
                    <p className="text-3xl font-bold text-[#2B6CB0]">{formatCurrency(estimatedOffer)}</p>
                    <p className="text-sm text-gray-500 mt-2">*Estimate based on typical market rates</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="vantagens" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MIDLEJ vs Bank Loans</h2>
            <p className="text-xl text-gray-600">See why we're the better choice</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#2B6CB0] to-[#1E40AF] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">MIDLEJ Capital</th>
                    <th className="px-6 py-4 text-center font-bold">Traditional Bank Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <ComparisonRow 
                    feature="Processing Time"
                    midlej="24 hours"
                    bank="5-30 days"
                    midlejGood={true}
                  />
                  <ComparisonRow 
                    feature="Interest Rates"
                    midlej="No interest"
                    bank="2-5% per month"
                    midlejGood={true}
                  />
                  <ComparisonRow 
                    feature="Documentation"
                    midlej="Minimal"
                    bank="Extensive"
                    midlejGood={true}
                  />
                  <ComparisonRow 
                    feature="Collateral Required"
                    midlej="Only your case"
                    bank="Personal assets"
                    midlejGood={true}
                  />
                  <ComparisonRow 
                    feature="Credit Check"
                    midlej="Not required"
                    bank="Strict requirements"
                    midlejGood={true}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Maria Santos"
              role="Business Owner"
              content="I received my money in less than 24 hours. The process was incredibly smooth and professional."
              rating={5}
            />
            <TestimonialCard 
              name="João Silva"
              role="Lawyer"
              content="MIDLEJ Capital helped my client get immediate liquidity. Excellent service and fair terms."
              rating={5}
            />
            <TestimonialCard 
              name="Ana Costa"
              role="Individual Client"
              content="No bureaucracy, fast payment, and great communication. Highly recommended!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2B6CB0] to-[#1E40AF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to turn your legal case into instant cash?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of clients who have already received their money fast and securely.
          </p>
          <a
            href="https://wa.me/5561996204646?text=Olá! Tenho interesse em vender meu processo judicial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-[#2B6CB0] font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Talk to an Expert
            <ArrowRight className="w-6 h-6 ml-3" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="text-3xl font-bold text-[#60A5FA] mb-6">MIDLEJ Capital</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for converting legal settlements into immediate cash. 
                Fast, secure, and completely legal.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/5561996204646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#60A5FA]" />
                  <span>(61) 9 9620-4646</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#60A5FA]" />
                  <span>contato@midlejcapital.com.br</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#60A5FA] mt-1" />
                  <span>SHIS QI 19, Conjunto 04, Casa 19<br />Lago Sul, Brasília/DF</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MIDLEJ Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description, color }) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className={`${color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description, isFirst = false, isLast = false }) {
  return (
    <div className="relative">
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#2B6CB0] to-[#60A5FA] transform translate-x-2"></div>
      )}
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center relative z-10 hover:shadow-xl transition-shadow duration-300">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2B6CB0] to-[#1E40AF] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
          {number}
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ComparisonRow({ feature, midlej, bank, midlejGood }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="font-medium text-green-700">{midlej}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <XCircle className="w-5 h-5 text-red-600" />
          <span className="font-medium text-red-700">{bank}</span>
        </div>
      </td>
    </tr>
  );
}

function TestimonialCard({ name, role, content, rating }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{content}"</p>
      <div>
        <div className="font-bold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
}

export default App;
