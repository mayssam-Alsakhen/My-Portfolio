'use client';
import { motion } from 'framer-motion';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-background rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-accent rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-background rounded-lg"></div>
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-accent rounded-full"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${20 + (i * 5)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
            Let's Build Something 
            <span className="text-accent"> Amazing</span>
          </h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I'm here to help you create 
            exceptional digital experiences that stand out.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto"> {/* Centered and reduced max width */}
          {/* Contact Methods - Centered */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-background/20">
              <h3 className="text-2xl font-bold text-background mb-8 text-center">Get in Touch</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: '📧',
                    title: "Email",
                    content: "mayssamalsakhen17@gmail.com",
                    // link: "mailto:mayssamalsakhen17@gmail.com"
                  },
                  {
                    icon: '📱',
                    title: "Phone",
                    content: "+96181575855",
                    // link: "tel:+961-81575855"
                  },
                  {
                    icon: '📍',
                    title: "Location",
                    content: "Tripoli, Lebanon",
                    // link: ""
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    // href={item.link}
                    className="flex items-center cursor-pointer space-x-4 p-4 rounded-xl bg-background/5 hover:bg-background/10 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-background font-medium">{item.title}</p>
                      <p className="text-background/70">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-6 border-t border-background/20">
                <p className="text-background font-medium mb-4 text-center">Follow my work</p>
                <div className="flex justify-center space-x-3">
                  {[
                    { icon: 'github', label: 'GitHub' , link: "https://github.com/mayssam-Alsakhen"},
                    { icon: 'linkedin', label: 'LinkedIn', link: "https://www.linkedin.com/in/mayssam-alsakhen/" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      aria-label={social.label}
                    >
                      {social.icon=== 'github' ? <IoLogoGithub /> : <FaLinkedin />}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-background/80 mb-4">Prefer a more direct approach?</p>
          <motion.a
  href="mailto:mayssamalsakhen17@gmail.com"
  className="inline-flex items-center space-x-2 text-accent font-semibold hover:text-background transition-colors duration-300"
  whileHover={{ scale: 1.05 }}
>
  <span>Send me an email directly</span>
  <span>↗</span>
</motion.a>

        </motion.div> */}
      </div>
    </section>
  );
};

export default ContactSection;