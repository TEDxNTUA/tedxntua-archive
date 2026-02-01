'use client';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files stored on your device that help websites remember information 
              about you between visits. We use cookies to enhance your experience and analyze how you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">2. What Cookies Do We Use?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Analytics Cookies:</strong> Google Analytics and Google Tag Manager cookies track 
              your interactions to help us understand user behavior and improve our website.</li>
              <li><strong>Consent Cookies:</strong> We store your cookie preference (accept/reject) locally 
              to remember your choice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">3. Cookie Consent & Control</h2>
            <p>
              When you first visit our website, we display a cookie consent banner. By clicking "Accept," 
              you consent to all cookies mentioned above. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Click "Reject" to disable analytics tracking</li>
              <li>Clear your browser cookies to reset your preferences</li>
              <li>Change your cookie settings in your browser at any time</li>
              <li>Contact us to request cookie deletion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">4. Third-Party Cookies</h2>
            <p>
              We use the following third-party services that may set cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Google Analytics:</strong> Analytics and usage tracking - <a href="https://policies.google.com/privacy" className="text-red-600 hover:underline">Google Privacy Policy</a></li>
              <li><strong>Google Tag Manager:</strong> Tag management - <a href="https://policies.google.com/privacy" className="text-red-600 hover:underline">Google Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">5. Data Retention</h2>
            <p>
              Analytics cookies are retained according to Google's default policies (typically 14 months). 
              Your consent preference is stored indefinitely until you change it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">6. Your Rights</h2>
            <p>
              Under GDPR and CCPA, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Know what cookies are used</li>
              <li>Give or withdraw consent</li>
              <li>Request data deletion</li>
              <li>Access your collected data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">7. Browser Settings</h2>
            <p>
              Most browsers allow you to refuse cookies or alert you when cookies are being sent. 
              For more information, visit your browser's help section.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">8. GDPR & CCPA Compliance</h2>
            <p>
              This cookie policy complies with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>GDPR:</strong> Explicit consent required before tracking (we ask before setting analytics cookies)</li>
              <li><strong>CCPA:</strong> Right to know, delete, and opt-out (available through our consent banner)</li>
              <li><strong>ePrivacy Directive:</strong> Cookies require prior consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">9. Contact Us</h2>
            <p>
              If you have questions about our cookie practices, please contact us through 
              the information provided on our website.
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
