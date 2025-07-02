'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Cert = {
  name: string
  issued: string
  image: string
}

const certs: Cert[] = [
  { name: 'Smart India Hackathon Finalist', issued: 'Gov. of India - SIH 2022', image: '/assets/certs/1665763375951.jpg' },
  // { name: 'Cybersecurity Virtual Experience', issued: 'Mastercard', image: '/assets/certs/cybersecurity.jpg' },
  // { name: 'SQL & Relational Databases', issued: 'IBM', image: '/assets/certs/sql-ibm.jpg' },
  { name: 'Flutter & Dart', issued: 'Udemy', image: '/assets/certs/UC-30ed9331-1fd2-45cf-ae51-f48805ad8d3b.jpg' },
  // { name: 'SQL Injection Attacks', issued: 'EC-Council', image: '/assets/certs/sql-injection.jpg' },
  { name: 'Android Bug Bounty Hunting', issued: 'EC-Council', image: '/assets/certs/2140d980-ff9b-41d5-ab51-3eb8b817d2a7.png' },

  // IBM Certificates
  { name: 'Big Data', issued: 'IBM', image: '/assets/certs/Big Data_page-0001.jpg' },
  { name: 'Hadoop', issued: 'IBM', image: '/assets/certs/Hadoop_page-0001.jpg' },
  { name: 'ML with Python', issued: 'IBM', image: '/assets/certs/Ml with python_page-0001.jpg' },
  { name: 'Python Certificate', issued: 'IBM', image: '/assets/certs/python certificate_page-0001.jpg' },
  { name: 'CEJAVA1IN Certificate', issued: 'IBM', image: '/assets/certs/Sarbesh Kumar Tiwari_IBM CEJAVA1IN Certificate_page-0001.jpg' },
  { name: 'CEPYT1IN Certificate', issued: 'IBM', image: '/assets/certs/Sarbesh Kumar Tiwari_IBM CEPYT1IN Certificate_page-0001.jpg' },

  // IBM Badges
  { name: 'Big Data Foundations - Level 1', issued: 'IBM Badge', image: '/assets/certs/Big_Data_Foundations___Level_1_Badge20220918-46-p35sng_page-0001.jpg' },
  { name: 'Data Analysis Using Python', issued: 'IBM Badge', image: '/assets/certs/Data_Analysis_Using_Python_Badge20220918-46-gdenjf_page-0001.jpg' },
  { name: 'Enterprise Design Thinking Practitioner', issued: 'IBM Badge', image: '/assets/certs/Enterprise_Design_Thinking_Practitioner_Badge20211118-36-1jvaqjc_page-0001.jpg' },
  { name: 'Hadoop Foundations - Level 1', issued: 'IBM Badge', image: '/assets/certs/Hadoop_Foundations___Level_1_Badge20220916-46-1jubit2_page-0001.jpg' },
  { name: 'Intro to Machine Learning with Sound', issued: 'IBM Badge', image: '/assets/certs/Introduction_to_Machine_Learning_with_Sound_Badge20220916-46-qs1ptk_page-0001.jpg' },
  { name: 'Machine Learning with Python - Level 1', issued: 'IBM Badge', image: '/assets/certs/Machine_Learning_with_Python___Level_1_Badge20220916-46-f025h7_page-0001.jpg' },
  { name: 'Python for Data Science', issued: 'IBM Badge', image: '/assets/certs/Python_for_Data_Science_Badge20220914-46-smqr71_page-0001.jpg' },
  { name: 'Data Science with Python', issued: 'IBM Badge', image: '/assets/certs/Data Science Python_page-0001.jpg' },

  // Cognitive Classes
  { name: 'Database Management', issued: 'Cognitive Classes', image: '/assets/certs/Database management_page-0001.jpg' },
  { name: 'ML with Sound', issued: 'Cognitive Classes', image: '/assets/certs/ML with sound_page-0001.jpg' },

  // Accenture
  { name: 'Accenture Certificate', issued: 'Accenture', image: '/assets/certs/accenture_page-0001.jpg' },

  // Chegg
  { name: 'Honor Code Violation Training', issued: 'Chegg', image: '/assets/certs/certificate-of-completion-for-honor-code-violation_page-0001.jpg' },
  { name: 'Mastering the Guidelines', issued: 'Chegg', image: '/assets/certs/certificate-of-completion-for-mastering-the-guidelines_page-0001.jpg' },
  { name: 'Q&A Best Practices', issued: 'Chegg', image: '/assets/certs/certificate-of-completion-for-q-a-best-practices_page-0001.jpg' },
  { name: 'Solving International Questions', issued: 'Chegg', image: '/assets/certs/certificate-of-completion-for-solving-international-questions_page-0001.jpg' },
  { name: 'Welcome Training for New Experts', issued: 'Chegg', image: '/assets/certs/certificate-of-completion-for-welcome-training-for-new-experts_page-0001.jpg' },
]


const credlyBadges = [
  '9cdbd0b5-2fb0-4b8e-a65c-dcc460b80d0f',
  '0a9a63aa-66b2-4a31-a76f-fc187c7c39d9',
  'f7fba45e-0047-4c0c-ab38-2f61c8964602',
  '3dab7fc0-eca4-4726-adb9-dfbaeb68a422',
  '159bf240-0597-4a63-9fcb-90be57419fe4',
  '1017bad2-1585-47a3-9797-cba3ec3df5a7',
  'a35f8c1c-aa71-446f-bda6-b307c9586278',
]

export default function Certifications() {
  const [selected, setSelected] = useState<Cert | null>(null)

  const badgeRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Certifications
      </motion.h2>

      {selected && (
  <motion.div 
    className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelected(null)} // Close on backdrop click
  >
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-xl max-w-3xl w-full relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      onClick={(e) => e.stopPropagation()} // Prevent click bubbling
    >
      <button 
        onClick={() => setSelected(null)} 
        className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-2xl"
      >
        &times;
      </button>
      <h3 className="text-2xl font-bold mb-2">{selected.name}</h3>
      <p className="text-gray-600 mb-4">Issued by {selected.issued}</p>
      <img 
        src={selected.image} 
        alt={selected.name} 
        className="w-full rounded-lg"
      />
    </motion.div>
  </motion.div>
)}


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ scale: 1.05 }} 
            onClick={() => setSelected(cert)}
            className="cursor-pointer bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <img src={cert.image} alt={cert.name} className="h-40 w-full object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{cert.name}</h3>
            <p className="text-sm text-gray-600">Issued by {cert.issued}</p>
          </motion.div>
        ))}
      </div>

      {/* Badges Section */}
      <section className="py-10 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Verified Credly Badges
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {credlyBadges.map((badgeId, index) => (
          <div
            key={badgeId}
            ref={(el) => {
              if (el) {
                badgeRefs.current[index] = el;
              }
            }}
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id={badgeId}
            data-share-badge-host="https://www.credly.com"
          />
        ))}
      </div>
    </section>
    </section>
  )
}
