'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message about your project",
      contact: "hello@stickmananimations.com",
      action: "Send Email",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our animation experts",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      color: "text-animation-success"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      contact: "Available 24/7",
      action: "Start Chat",
      color: "text-animation-accent"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Our Studio",
      content: "123 Animation Street, Creative District, CA 90210"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM PST, Sat: 10AM-4PM PST"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-enhanced">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-animation-primary/10 text-animation-primary border border-animation-primary/20 mb-6">
            <MessageCircle size={16} />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-gradient mb-6">
            Let's Create Something Amazing Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your animation ideas to life? We'd love to hear about your project 
            and discuss how we can help you achieve your creative vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="input w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="input w-full"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select id="projectType" className="input w-full">
                    <option value="">Select a project type</option>
                    <option value="character">Character Animation</option>
                    <option value="commercial">Commercial/Advertising</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="educational">Educational</option>
                    <option value="gaming">Gaming</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select id="budget" className="input w-full">
                    <option value="">Select a budget range</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-plus">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select id="timeline" className="input w-full">
                    <option value="">Select a timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-plus-months">3+ months</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input w-full resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full group">
                  Send Message
                  <Send size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="card p-6 hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                        <method.icon size={24} className={method.color} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                        <p className="text-muted-foreground mb-3">{method.description}</p>
                        <div className="text-primary font-medium mb-3">{method.contact}</div>
                        <button className="btn btn-outline btn-sm group">
                          {method.action}
                          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Office Information</h2>
              <div className="space-y-4">
                {officeInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="card p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <info.icon size={24} className="text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <div className="space-y-3">
                {[
                  "15+ years of animation experience",
                  "500+ successful projects completed",
                  "Fast turnaround times",
                  "Competitive pricing",
                  "Ongoing support & revisions",
                  "Multiple file format delivery"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-animation-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
