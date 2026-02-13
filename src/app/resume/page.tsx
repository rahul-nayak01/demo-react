"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo, education, experience, skills, certificates } from "@/data/portfolio";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center mb-12"
            >
              <h1 className="text-4xl font-bold">Resume</h1>
              <button className="btn-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="card">
                <h3 className="text-lg font-semibold">{personalInfo.name}</h3>
                <p className="text-gray-600">{personalInfo.title}</p>
                <p className="text-gray-500 text-sm mt-2">{personalInfo.location}</p>
                <p className="text-gray-600 mt-4">{personalInfo.bio}</p>
                <div className="flex gap-4 mt-4 text-sm">
                  <a href={personalInfo.social.github} className="text-blue-600 hover:underline">GitHub</a>
                  <a href={personalInfo.social.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">Email</a>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.institution} className="card">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{edu.institution}</h3>
                        <p className="text-gray-600">{edu.degree}</p>
                      </div>
                      <span className="text-sm text-gray-500">{edu.year}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">GPA: {edu.gpa}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.company + exp.role} className="card">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{exp.company}</h3>
                        <p className="text-gray-600">{exp.role}</p>
                      </div>
                      <span className="text-sm text-gray-500">{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="card">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">
                        {category.replace("_", " ")}
                      </h3>
                      <p className="text-gray-700">{skillList.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-4">Certificates</h2>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.name} className="card flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500">{cert.year}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
