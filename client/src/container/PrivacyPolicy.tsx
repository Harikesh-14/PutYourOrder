function PrivacyPolicy() {
  return (
    <div className="md:ml-[20rem] p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Privacy Policies</h1>

      <div className="my-7 bg-white border-b border-gray-300 px-10 py-7 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-800 pl-8">
          Welcome to PutYourOrder. These Privacy Policies govern your use of our website and services. By accessing or using our website, you agree to be bound by these policies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
        <p className="text-gray-800 pl-8">We collect personal information that you voluntarily provide to us when you register on our website, subscribe to our newsletter, or fill out a form. This information may include your name, email address, phone number, and other details.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
        <p className="text-gray-800 pl-8">We use the information we collect to:</p>
        <ul className="list-disc list-inside ml-4 pl-8 ">
          <li>Personalize your experience and respond to your individual needs.</li>
          <li>Improve our website based on your feedback.</li>
          <li>Send periodic emails and updates.</li>
          <li>Process transactions and provide customer service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. How We Protect Your Information</h2>
        <p className="text-gray-800 pl-8">We implement a variety of security measures to safeguard your personal information. We use encryption to protect sensitive information transmitted online and restrict access to your information to authorized personnel only.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Use of Cookies</h2>
        <p className="text-gray-800 pl-8">We use cookies to help us remember and process items in your shopping cart and understand and save your preferences for future visits.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Third-Party Disclosure</h2>
        <p className="text-gray-800 pl-8">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to Policies</h2>
        <p className="text-gray-800 pl-8">We reserve the right to modify these Privacy Policies at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following any changes constitutes your acceptance of the revised policies.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="text-gray-800 pl-8">If you have any questions about these Privacy Policies, please contact us at ranjansinhaharikesh@gmail.com</p>

        <a
          href="mailto:ranjansinhaharikesh@gmail.com"
          className="block text-blue-500 font-semibold mt-5 hover:underline cursor-pointer transition duration-300 ease-in-out text-lg text-center"
        >Contact Us</a>
      </div>
    </div>
  )
}

export default PrivacyPolicy