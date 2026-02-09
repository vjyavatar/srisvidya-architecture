import React, { useState, useEffect } from 'react';
import { Camera, Mail, Phone, MapPin, Send, X, Menu, ChevronRight, Award, Users, Lightbulb, Heart } from 'lucide-react';

export default function SriVidyaArchitecture() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Projects data - easily editable
  const projects = [
    {
      id: 1,
      title: "Modern Villa Residence",
      category: "Residential",
      description: "A contemporary 3BHK villa design featuring open floor plans, sustainable materials, and seamless indoor-outdoor living. Located in a suburban setting with emphasis on natural light.",
      features: ["3500 sq ft", "Sustainable Design", "Smart Home Integration", "Landscape Design"],
      image: "🏡",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Corporate Office Space",
      category: "Commercial",
      description: "Designed a 10,000 sq ft corporate office with collaborative workspaces, meeting rooms, and employee wellness areas. Modern aesthetic with biophilic design elements.",
      features: ["10,000 sq ft", "Collaborative Spaces", "Biophilic Design", "Energy Efficient"],
      image: "🏢",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Luxury Apartment Interior",
      category: "Interior",
      description: "Complete interior transformation of a 2000 sq ft apartment featuring contemporary furniture, custom lighting, and a neutral color palette with accent walls.",
      features: ["2000 sq ft", "Custom Furniture", "Smart Lighting", "Minimalist Aesthetic"],
      image: "🛋️",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 4,
      title: "Boutique Hotel Design",
      category: "Commercial",
      description: "Conceptual design for a 20-room boutique hotel combining traditional architecture with modern amenities. Focus on guest experience and Instagram-worthy spaces.",
      features: ["20 Rooms", "Rooftop Lounge", "Spa & Wellness", "Restaurant Design"],
      image: "🏨",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "Eco-Friendly Family Home",
      category: "Residential",
      description: "Sustainable residential design featuring rainwater harvesting, solar panels, natural ventilation, and locally sourced materials. Zero-waste construction approach.",
      features: ["4BHK", "Solar Powered", "Rainwater Harvesting", "Natural Materials"],
      image: "🌿",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 6,
      title: "Retail Showroom",
      category: "Commercial",
      description: "High-end retail showroom design with focus on product display, customer flow, and brand experience. Modern facade with floor-to-ceiling glass.",
      features: ["3000 sq ft", "Modern Facade", "Display Systems", "Customer Experience"],
      image: "🏪",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  // Services data
  const services = [
    {
      icon: "🏡",
      title: "Residential Design",
      description: "Dream homes that reflect your lifestyle and personality",
      features: ["Floor Plans", "3D Visualization", "Material Selection", "Interior Design"]
    },
    {
      icon: "🏢",
      title: "Commercial Architecture",
      description: "Functional spaces that enhance productivity and aesthetics",
      features: ["Office Design", "Retail Spaces", "Hospitality", "Mixed-Use"]
    },
    {
      icon: "🎨",
      title: "Interior Design",
      description: "Transform your interiors with contemporary aesthetics",
      features: ["Space Planning", "Furniture Design", "Lighting Design", "Color Consulting"]
    },
    {
      icon: "📐",
      title: "3D Visualization",
      description: "Photo-realistic renders to visualize your project",
      features: ["3D Modeling", "Virtual Tours", "Walkthroughs", "Rendering"]
    },
    {
      icon: "🌱",
      title: "Sustainable Design",
      description: "Eco-friendly architecture for a better tomorrow",
      features: ["Green Building", "Energy Efficiency", "Sustainable Materials", "LEED Consulting"]
    },
    {
      icon: "💡",
      title: "Design Consultation",
      description: "Expert advice to guide your project decisions",
      features: ["Site Analysis", "Concept Development", "Budget Planning", "Timeline Planning"]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      project: "Modern Villa",
      text: "Sri Vidya transformed our vision into reality. Her attention to detail and creative solutions exceeded our expectations!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      project: "Office Interior",
      text: "Working with Sri Vidya was a pleasure. She understood our needs perfectly and delivered a stunning office space.",
      rating: 5
    },
    {
      name: "Amit Patel",
      project: "Residential Design",
      text: "Fresh perspective, innovative ideas, and professional execution. Highly recommend for anyone looking to build their dream home!",
      rating: 5
    }
  ];

  // Blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Interior Design Trends for 2025",
      excerpt: "Discover the latest trends shaping modern Indian homes this year...",
      date: "Feb 8, 2025",
      category: "Interior Design",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainable Architecture: Building for the Future",
      excerpt: "How to incorporate eco-friendly practices in your next project...",
      date: "Feb 5, 2025",
      category: "Sustainability",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Maximizing Small Spaces: Design Tips",
      excerpt: "Smart solutions for making the most of compact living areas...",
      date: "Feb 1, 2025",
      category: "Tips & Tricks",
      readTime: "4 min read"
    }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form handling
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend/email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className={`text-2xl font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Sri Vidya Architecture
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900"
            >
              <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            R. S. Sri Vidya
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-blue-200">
            Designing Spaces That Inspire Living
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Residential • Commercial • Interior Design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-8xl">
                👩‍💼
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg font-bold">
                3+ Years Experience
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Hello, I'm Sri Vidya</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                A passionate 3rd-year Bachelor of Architecture student with a vision to transform spaces into meaningful experiences. I specialize in residential, commercial, and interior design, bringing fresh perspectives and innovative solutions to every project.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My approach combines contemporary design trends with functional aesthetics, creating spaces that not only look beautiful but enhance the way people live and work.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Award className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Education</h4>
                    <p className="text-gray-600">B.Arch (3rd Year)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Projects</h4>
                    <p className="text-gray-600">15+ Completed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Specialization</h4>
                    <p className="text-gray-600">3 Design Areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Philosophy</h4>
                    <p className="text-gray-600">Form & Function</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-gray-700 italic">
                  "Form follows function, beauty serves purpose. Every design decision creates an experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">My Services</h2>
            <p className="text-xl text-gray-600">Comprehensive design solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ChevronRight className="text-blue-600 w-5 h-5 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Portfolio</h2>
            <p className="text-xl text-gray-600">Explore my recent projects and design work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-8xl transition-transform duration-300 group-hover:scale-110`}>
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <span className="inline-block bg-white text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                      <p className="mt-4">Click to view details</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className={`h-96 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center text-white text-9xl rounded-t-2xl`}>
                {selectedProject.image}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <ChevronRight className="text-blue-600 w-5 h-5 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-300">What my clients say about working with me</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 shadow-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-blue-400">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Latest from Blog</h2>
            <p className="text-xl text-gray-600">Design insights, tips, and inspiration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl">
                  📝
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to bring your vision to life? Let's start a conversation!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-4 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-300 text-lg">srisvidya.architecture@gmail.com</p>
                  <p className="text-gray-400 text-sm mt-1">24-hour response time</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-4 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-300 text-lg">+91 [Your Number]</p>
                  <p className="text-gray-400 text-sm mt-1">Available 9 AM - 7 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-4 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-300 text-lg">India</p>
                  <p className="text-gray-400 text-sm mt-1">Serving clients nationwide</p>
                </div>
              </div>

              <div className="bg-yellow-500 text-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">🎁 Free Consultation</h3>
                <p className="text-lg">Get a 30-minute design consultation absolutely free! No obligation, just ideas.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Architecture</option>
                    <option value="interior">Interior Design</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tell me about your project *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your project, timeline, budget, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                    ✓ Thank you! I'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Sri Vidya Architecture</h3>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="hover:text-blue-400 transition-colors text-3xl">📷</a>
              <a href="#" className="hover:text-blue-400 transition-colors text-3xl">💼</a>
              <a href="#" className="hover:text-blue-400 transition-colors text-3xl">💬</a>
              <a href="#" className="hover:text-blue-400 transition-colors text-3xl">📧</a>
            </div>
            <p className="text-gray-400 mb-2">&copy; 2025 R. S. Sri Vidya Architecture. All rights reserved.</p>
            <p className="text-gray-500">Designing spaces that inspire living | Residential • Commercial • Interior</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
