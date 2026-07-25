import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Pathfinder Pest Control</title>
        <meta name="description" content="Privacy policy for Pathfinder Pest Control, Tulsa Oklahoma." />
      </Helmet>

      <section className="bg-[#112a44] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg text-gray-600">
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>
          <h2 className="text-2xl font-bold text-[#112a44] mb-4">Introduction</h2>
          <p className="mb-6">
            Pathfinder Pest Control ("we," "us," or "our") is committed to protecting your personal information and your right to privacy. This privacy policy explains how we collect, use, and protect information when you visit our website or use our services.
          </p>
          <h2 className="text-2xl font-bold text-[#112a44] mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, such as:</p>
          <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
            <li>Name, email address, and phone number when you contact us or request a quote</li>
            <li>Service address and property details when scheduling pest control services</li>
            <li>Payment information when you pay for services</li>
            <li>Communications you send to us</li>
          </ul>
          <h2 className="text-2xl font-bold text-[#112a44] mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
            <li>Provide, maintain, and improve our pest control services</li>
            <li>Process transactions and send related information</li>
            <li>Send promotional communications, with your consent</li>
            <li>Respond to your comments and questions</li>
            <li>Comply with legal obligations</li>
          </ul>
          <h2 className="text-2xl font-bold text-[#112a44] mb-4">Information Sharing</h2>
          <p className="mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
          </p>
          <h2 className="text-2xl font-bold text-[#112a44] mb-4">Data Security</h2>
          <p className="mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <h2 className="text-2xl font-bold text-[#112a44] mb-4">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at:<br />
            Pathfinder Pest Control<br />
            3240 S 82nd E Ave Suite A, Tulsa, OK 74145<br />
            Phone: +1 918-504-5245
          </p>
        </div>
      </section>
    </>
  )
}
