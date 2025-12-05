import { Menu, X, BookOpen, Award, GraduationCap, Smartphone, Zap, Briefcase } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in the Premium Educational Bundle for LKR 3000. Can you provide more details?"
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Digital Edu Store</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Digital Edu Store
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-4">
            Unlimited learning from world's top universities.
          </p>
          <p className="text-lg text-blue-200 mb-10 max-w-3xl mx-auto">
            Transform your career with access to thousands of courses, professional certificates,
            and exclusive resources. Get everything you need to succeed in today's competitive
            job market at an unbeatable price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="bg-blue-500 bg-opacity-30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-40 transition-all border-2 border-white"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Everything you need to advance your career
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get unlimited access to world-class learning resources and professional development tools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">10,000+ Courses</h3>
              <p className="text-gray-600">
                Access an extensive library of courses across various disciplines and skill levels
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Certificates</h3>
              <p className="text-gray-600">
                Earn recognized certificates to boost your resume and career prospects
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">University Courses</h3>
              <p className="text-gray-600">
                Learn from top universities including Stanford, MIT, and Harvard
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learn Anywhere</h3>
              <p className="text-gray-600">
                Study on any device with our mobile apps and offline download options
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited Access</h3>
              <p className="text-gray-600">
                No restrictions - learn at your own pace with lifetime access to materials
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Career Support</h3>
              <p className="text-gray-600">
                Get career guidance, resume reviews, and interview preparation resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Course Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 rounded-xl text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-2">Data Science</h3>
              <p className="text-purple-100">Machine Learning, AI, Analytics</p>
            </div>

            {/* Category 2 */}
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-xl text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-2">Technology</h3>
              <p className="text-green-100">Web Dev, Mobile Apps, Cloud</p>
            </div>

            {/* Category 3 */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-xl text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-2">Business</h3>
              <p className="text-orange-100">Marketing, Finance, Management</p>
            </div>

            {/* Category 4 */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-xl text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-2">Personal Development</h3>
              <p className="text-indigo-100">Leadership, Productivity, Skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Gift Bundle Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              🎁 Exclusive Bonus Package
            </h2>
            <p className="text-xl text-cyan-50">
              Get these premium tools absolutely FREE with your subscription!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Gift 1 */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg">
                  🤖
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ChatGPT Plus</h3>
                <p className="text-gray-600 mb-2">1 Month Access</p>
                <p className="text-lg font-semibold text-green-600">Value: LKR 6,000</p>
              </div>

              {/* Gift 2 */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-600 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg">
                  🎨
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Canva Edu Pro</h3>
                <p className="text-gray-600 mb-2">1 Year Access</p>
                <p className="text-lg font-semibold text-blue-600">Value: LKR 15,000</p>
              </div>

              {/* Gift 3 */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg">
                  💼
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Career Premium</h3>
                <p className="text-gray-600 mb-2">3 Months Access</p>
                <p className="text-lg font-semibold text-blue-600">Value: LKR 12,000</p>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-gray-600">Total Bonus Value:</p>
                  <p className="text-3xl font-bold text-gray-900">LKR 33,000</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">Your Price Today:</p>
                  <p className="text-4xl font-bold text-blue-600">LKR 3,000</p>
                </div>
                <div className="bg-red-500 text-white px-6 py-3 rounded-lg">
                  <p className="text-sm">You Save:</p>
                  <p className="text-2xl font-bold">91% OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Simple, Transparent Pricing
          </h2>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Premium Bundle</h3>
              <div className="text-5xl font-bold mb-2">LKR 3,000</div>
              <p className="text-blue-100">One-time payment • Lifetime Access</p>
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* What's Included */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">10,000+ Online Courses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Professional Certificates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">University Course Access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Mobile & Desktop Access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Unlimited Learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Career Support Resources</span>
                    </li>
                  </ul>
                </div>

                {/* Free Premium Bonuses */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-cyan-600 pb-2">
                    Free Premium Bonuses
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">🎁</span>
                      <span className="text-gray-700">ChatGPT Plus (1 Month)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">🎁</span>
                      <span className="text-gray-700">Canva Edu Pro (1 Year)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">🎁</span>
                      <span className="text-gray-700">LinkedIn Career Premium (3 Months)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">🎁</span>
                      <span className="text-gray-700">Worth LKR 33,000+</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Your Subscription Now
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                ✅ 100% Legitimate Account • Instant Access • Secure Payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Get Started in 3 Easy Steps
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Process Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600">
                    Click the WhatsApp button below to get in touch with our team. We'll respond immediately
                    to help you get started.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Make Payment</h3>
                  <p className="text-gray-600">
                    Complete the secure one-time payment of LKR 3,000. We accept multiple payment methods
                    for your convenience.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get Instant Access</h3>
                  <p className="text-gray-600">
                    Receive your account credentials and bonus packages immediately. Start learning right away!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - WhatsApp Contact Box */}
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl font-bold mb-2">Contact Us on WhatsApp</h3>
                <p className="text-green-50">
                  Chat with us directly for instant support and quick processing
                </p>
              </div>

              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6 backdrop-blur-sm">
                <p className="text-sm text-green-50 mb-2">Available 24/7</p>
                <p className="text-2xl font-bold">+94 78 690 4949</p>
              </div>

              <a
                href={`https://wa.me/94786904949?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-green-600 py-4 rounded-lg font-bold text-lg text-center hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Start WhatsApp Chat
              </a>

              <p className="text-center text-sm text-green-50 mt-4">
                💚 Fast Response • Friendly Support • Secure Purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is this account legitimate?
              </h3>
              <p className="text-gray-600">
                Yes! We provide 100% legitimate educational accounts with full access to all features.
                All accounts are properly licensed and comply with platform terms.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How quickly will I get access?
              </h3>
              <p className="text-gray-600">
                Access is instant! Once payment is confirmed, you'll receive your account credentials
                and bonus packages within minutes via WhatsApp.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept bank transfers, mobile payments, and other secure payment methods.
                Contact us on WhatsApp for detailed payment instructions.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will I receive actual certificates?
              </h3>
              <p className="text-gray-600">
                Yes! You can earn recognized certificates from top universities and institutions
                that you can add to your LinkedIn profile and resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Digital Edu Store</span>
              </div>
              <p className="text-gray-400">
                Your gateway to unlimited learning and professional development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <p className="text-gray-400 mb-2">WhatsApp: +94 78 690 4949</p>
              <p className="text-gray-400">Available 24/7 for support</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Digital Edu Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
