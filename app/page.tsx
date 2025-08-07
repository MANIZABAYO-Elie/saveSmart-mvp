"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Smartphone, Target, TrendingUp, Users, Star, CheckCircle, PiggyBank, BarChart3, Bell, ExternalLink, Mail, Phone, MapPin, FileText, Shield, HelpCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  // Add modal content components
  const HelpCenterModal = () => (
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center">
          <HelpCircle className="h-6 w-6 mr-2 text-green-600" />
          Help Center
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Getting Started</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• How to create your account</li>
                <li>• Setting up your first budget</li>
                <li>• Connecting mobile money</li>
                <li>• Understanding auto-save</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Mobile Money</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Supported providers</li>
                <li>• Adding funds to your account</li>
                <li>• Transaction limits</li>
                <li>• Security and safety</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Savings Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Setting savings goals</li>
                <li>• Automatic transfers</li>
                <li>• Progress tracking</li>
                <li>• Monthly check-ins</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Account Management</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Updating your profile</li>
                <li>• Changing your PIN</li>
                <li>• Account security</li>
                <li>• Data export</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Need more help?</strong> Contact our support team at support@savesmart.rw or call +250 788 123 456
          </p>
        </div>
      </div>
    </DialogContent>
  )

  const ContactModal = () => (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center">
          <Mail className="h-6 w-6 mr-2 text-green-600" />
          Contact Us
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Mail className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium">Email Support</p>
            <p className="text-sm text-gray-600">support@savesmart.rw</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Phone className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium">Phone Support</p>
            <p className="text-sm text-gray-600">+250 788 123 456</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <MapPin className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium">Office Address</p>
            <p className="text-sm text-gray-600">KG 9 Ave, Kigali, Rwanda</p>
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Business Hours:</strong><br />
            Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 2:00 PM
          </p>
        </div>
      </div>
    </DialogContent>
  )

  const PrivacyPolicyModal = () => (
    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center">
          <Shield className="h-6 w-6 mr-2 text-green-600" />
          Privacy Policy
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Information We Collect</h3>
          <p className="text-gray-600 mb-2">We collect information you provide directly to us, such as:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Account information (name, email, phone number)</li>
            <li>Financial information (income, savings goals, transaction history)</li>
            <li>Usage data (app interactions, preferences)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">How We Use Your Information</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Provide and maintain our savings services</li>
            <li>Process transactions and send notifications</li>
            <li>Improve our app and develop new features</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Data Security</h3>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All financial data is encrypted and stored securely.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Your Rights</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Access and update your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>
        </div>
        <div className="p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Last updated:</strong> January 2024. For questions about this policy, contact privacy@savesmart.rw
          </p>
        </div>
      </div>
    </DialogContent>
  )

  const FeaturesModal = () => (
    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center">
          <Target className="h-6 w-6 mr-2 text-green-600" />
          SaveSmart Features
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="grid gap-4">
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <BarChart3 className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold">Smart Budgeting</h3>
              <p className="text-sm text-gray-600">Create budgets with templates or manual input. Track income, expenses, and set realistic savings targets.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <Smartphone className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Mobile Money Integration</h3>
              <p className="text-sm text-gray-600">Connect with MTN, Airtel, Tigo Cash, and other providers for automatic transfers and easy funding.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
            <TrendingUp className="h-6 w-6 text-purple-600 mt-1" />
            <div>
              <h3 className="font-semibold">Visual Progress Tracking</h3>
              <p className="text-sm text-gray-600">See your progress with charts, virtual savings jars, and milestone celebrations.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <Bell className="h-6 w-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-semibold">Smart Notifications</h3>
              <p className="text-sm text-gray-600">Get reminders, tips, and alerts to keep you on track with your savings goals.</p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  )

  const PricingModal = () => (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center">
          <PiggyBank className="h-6 w-6 mr-2 text-green-600" />
          Pricing
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <h3 className="text-2xl font-bold text-green-600 mb-2">Free Forever</h3>
          <p className="text-gray-600 mb-4">SaveSmart is completely free to use</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✅ Unlimited savings goals</li>
            <li>✅ Mobile money integration</li>
            <li>✅ Progress tracking</li>
            <li>✅ Budget templates</li>
            <li>✅ No hidden fees</li>
          </ul>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Coming Soon: Premium Features</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Advanced analytics</li>
            <li>• Investment recommendations</li>
            <li>• Priority support</li>
            <li>• Custom savings challenges</li>
          </ul>
        </div>
      </div>
    </DialogContent>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PiggyBank className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">SaveSmart</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-600 hover:text-gray-900">Features</button>
              </DialogTrigger>
              <FeaturesModal />
            </Dialog>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">Reviews</Link>
            <Link href="/app" className="text-gray-600 hover:text-gray-900">Login</Link>
          </div>
        </nav>
      </header>

      {/* Keep all existing sections unchanged */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                🎯 Trusted by 10,000+ savers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Saving Made Simple, Fun, and{" "}
                <span className="text-green-600">Automatic</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Build a habit of saving with smart budgeting, automatic transfers, and motivational visuals. 
                Perfect for young professionals who want to save but feel overwhelmed.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/app">
                  Start Saving Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/app">
                  Try SaveSmart Free
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Works offline</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Mobile money ready</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Monthly Progress</h3>
                  <p className="text-3xl font-bold text-green-600">RWF 45,000</p>
                  <p className="text-sm text-gray-600">of RWF 50,000 goal</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Smart Budget</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Bell className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Auto Reminders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to save successfully
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              SaveSmart combines proven savings strategies with modern technology to make saving effortless and engaging.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget Easily</h3>
                <p className="text-gray-600 leading-relaxed">
                  Set up your budget in minutes with templates or manual input. Track income, expenses, and set realistic savings targets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Automatically</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with mobile money for automatic transfers. Set it once and watch your savings grow without thinking about it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay Motivated</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visual progress bars, virtual savings jars, and milestone celebrations keep you motivated on your savings journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by savers across Rwanda
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from people who transformed their saving habits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "I never thought I could save RWF 100,000 in 6 months! SaveSmart made it so easy with automatic transfers and the visual progress kept me motivated."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">AM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Aline Mukamana</p>
                    <p className="text-sm text-gray-600">Teacher, Kigali</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The budgeting templates saved me hours. As a small business owner, I needed something simple that works even when internet is slow."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">JB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jean Baptiste</p>
                    <p className="text-sm text-gray-600">Entrepreneur, Butare</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The virtual savings jar is genius! Seeing my progress visually made saving feel like a game. I've saved more in 3 months than in the past year."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">MN</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marie Nyirahabimana</p>
                    <p className="text-sm text-gray-600">Student, Kigali</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your saving habits?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of Rwandans who are building wealth one smart save at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/app">
                  Start Saving Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-green-700">
                <Link href="/app">
                  Login to Account
                </Link>
              </Button>
            </div>
            <p className="text-sm text-green-200 mt-4">
              Free to start • No credit card required • Works offline
            </p>
          </div>
        </div>
      </section>

      {/* Updated Footer with functional links */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <PiggyBank className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">SaveSmart</span>
              </div>
              <p className="text-gray-400">
                Making saving simple, fun, and automatic for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="hover:text-white transition-colors">Features</button>
                    </DialogTrigger>
                    <FeaturesModal />
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="hover:text-white transition-colors">Pricing</button>
                    </DialogTrigger>
                    <PricingModal />
                  </Dialog>
                </li>
                <li>
                  <Link href="/app" className="hover:text-white transition-colors">Mobile App</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="hover:text-white transition-colors">Help Center</button>
                    </DialogTrigger>
                    <HelpCenterModal />
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="hover:text-white transition-colors">Contact Us</button>
                    </DialogTrigger>
                    <ContactModal />
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="hover:text-white transition-colors">Privacy Policy</button>
                    </DialogTrigger>
                    <PrivacyPolicyModal />
                  </Dialog>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a 
                    href="https://twitter.com/savesmart_rw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    Twitter <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://facebook.com/savesmart.rwanda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    Facebook <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/250788123456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    WhatsApp <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SaveSmart. All rights reserved. Made with ❤️ in Rwanda.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
