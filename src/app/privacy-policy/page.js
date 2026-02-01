'use client';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">1. Introduction</h2>
            <p>
              TEDxNTUA Archive ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">2. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Automatically Collected:</strong> Through Google Analytics and Google Tag Manager, 
              we collect information about your device, browser type, pages visited, time spent on pages, 
              and general geographic location (anonymized).</li>
              <li><strong>No Sensitive Data:</strong> We do NOT collect passwords, payment information, 
              email addresses (unless you voluntarily provide them), or personally identifiable information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To understand user behavior and improve our website</li>
              <li>To measure website performance and user engagement</li>
              <li>To optimize content and user experience</li>
              <li>For analytics and statistical purposes only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">4. Google Analytics & Tag Manager</h2>
            <p>
              We use Google Analytics and Google Tag Manager to track user interactions. These services 
              are governed by Google's Privacy Policy. You can opt-out of Google Analytics tracking by:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Clicking "Reject" on our cookie consent banner</li>
              <li>Using your browser's privacy settings</li>
              <li>Installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-red-600 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information 
              from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">6. GDPR & CCPA Compliance</h2>
            <p>
              We comply with GDPR (European Union) and CCPA (California) regulations. You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access your personal data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Opt-out of tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, 
              please contact us through the information provided on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on our website.
            </p>
          </section>
        </div>

        <p className="text-gray-500 mt-12 text-sm">
          Last Updated: February 1, 2026
        </p>
      </div>
    </div>
  );
}
