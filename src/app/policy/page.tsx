import Link from "next/link";

/**
 * Route entrypoint.
 */
export default function Page() {
  return (
    <div className="m-8 space-y-8 text-indigo-300">
      {/* Privacy Policy for SR7 */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Privacy Policy for SR7</h1>
        <p>
          At SR7, accessible from{" "}
          <Link href="/" className="font-bold text-indigo-500 hover:underline">
            https://sr7.nl/
          </Link>
          , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains the types
          of information that are collected and recorded by SR7 and how we use it.
        </p>
        <p>
          If you have any additional questions or require more information about our Privacy Policy, please do not
          hesitate to contact us.
        </p>
        <p>
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regard
          to the information that they share and/or collect on SR7. This policy is not applicable to any information
          collected offline or through channels other than this website.
        </p>
      </div>

      {/* Consent */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
      </div>

      {/* Information we collect */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Information we collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will
          be made clear to you at the point when we ask for your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information about you, such as your name, email address,
          phone number, the contents of the message and/or attachments you send us, and any other information you choose
          to provide.
        </p>
        <p>
          When you register for an account, we may ask for your contact information, including items such as your name,
          company name, address, email address, and telephone number.
        </p>
      </div>

      {/* How we use your information */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">How we use your information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="ml-4 space-y-2">
          <li className="flex space-x-2">
            <p>•</p>
            <p>Provide, operate, and maintain our website</p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>Improve, personalize, and expand our website</p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>Understand and analyze how you use our website</p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>Develop new products, services, features, and functionality</p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              Communicate with you, either directly or through one of our partners, including for customer service, to
              provide you with updates and other information relating to the website, and for marketing and promotional
              purposes
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>Send you emails</p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>Find and prevent fraud</p>
          </li>
        </ul>
      </div>

      {/* Log Files */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Log Files</h2>
        <p>
          SR7 follows a standard procedure of using log files. These files log visitors when they visit websites. All
          hosting companies do this and a part of hosting services&apos; analytics. The information collected by log
          files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time
          stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that
          is personally identifiable. The purpose of the information is for analyzing trends, administering the site,
          tracking users&apos; movement on the website, and gathering demographic information.
        </p>
      </div>

      {/* Cookies and Web Beacons */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Cookies and Web Beacons</h2>
        <p>
          Like any other website, SR7 uses &quot;cookies&quot;. These cookies are used to store information including
          visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information
          is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos;
          browser type and/or other information.
        </p>
      </div>

      {/* Google DoubleClick DART Cookie */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads
          to our site visitors based upon their visit to www.website.com and other sites on the internet. However,
          visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy
          Policy at the following URL -{" "}
          <Link
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-500 hover:underline"
          >
            https://policies.google.com/technologies/ads
          </Link>
        </p>
      </div>

      {/* Our Advertising Partners */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Our Advertising Partners</h2>
        <p>
          Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below.
          Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier
          access, we hyperlinked to their Privacy Policies below.
        </p>
        <div className="flex space-x-1">
          <p>Google</p>
          <p>-</p>
          <Link
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-500 hover:underline"
          >
            https://policies.google.com/technologies/ads
          </Link>
        </div>
      </div>

      {/* Advertising Partners Privacy Policies */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Advertising Partners Privacy Policies</h2>
        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of SR7.</p>
        <p>
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used
          in their respective advertisements and links that appear on SR7, which are sent directly to users&apos;
          browser. They automatically receive your IP address when this occurs. These technologies are used to measure
          the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on
          websites that you visit.
        </p>
        <p>Note that SR7 has no access to or control over these cookies that are used by third-party advertisers.</p>
      </div>

      {/* Third Party Privacy Policies */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Third Party Privacy Policies</h2>
        <p>
          SR7&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
          consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may
          include their practices and instructions about how to opt-out of certain options.{" "}
        </p>
        <p>
          You can choose to disable cookies through your individual browser options. To know more detailed information
          about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
        </p>
      </div>

      {/* CCPA Privacy Rights (Do Not Sell My Personal Information) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
        <ul className="ml-4 space-y-2">
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              Request that a business that collects a consumer&apos;s personal data disclose the categories and specific
              pieces of personal data that a business has collected about consumers.
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal
              data.
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </p>
          </li>
        </ul>
      </div>

      {/* GDPR Data Protection Rights */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">GDPR Data Protection Rights</h2>
        <p>
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled
          to the following:
        </p>
        <ul className="ml-4 space-y-2">
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              The right to access - You have the right to request copies of your personal data. We may charge you a
              small fee for this service.
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              The right to rectification - You have the right to request that we correct any information you believe is
              inaccurate. You also have the right to request that we complete the information you believe is incomplete.
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              The right to erasure - You have the right to request that we erase your personal data, under certain
              conditions.
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              The right to restrict processing - You have the right to request that we restrict the processing of your
              personal data, under certain conditions.
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              The right to object to processing - You have the right to object to our processing of your personal data,
              under certain conditions.
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              The right to data portability - You have the right to request that we transfer the data that we have
              collected to another organization, or directly to you, under certain conditions.
            </p>
          </li>
          <li className="flex space-x-2">
            <p>•</p>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </p>
          </li>
        </ul>
      </div>

      {/* Children's Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Children&apos;s Information</h2>
        <p>
          Another part of our priority is adding protection for children while using the internet. We encourage parents
          and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          SR7 does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our website, we strongly encourage you to contact
          us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>
      </div>

      {/* Changes to This Privacy Policy */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for
          any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes
          are effective immediately, after they are posted on this page.
        </p>
        <p>
          Our Privacy Policy was created with the help of the{" "}
          <Link
            href="https://www.privacypolicygenerator.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-500 hover:underline"
          >
            Privacy Policy Generator
          </Link>
          .
        </p>
      </div>

      {/* Contact Us */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
        <div className="flex space-x-1">
          <p>Administrator</p>
          <p>-</p>
          <Link href="mailto:hsr.sr7@gmail.com" className="font-bold text-indigo-500 hover:underline">
            hsr.sr7@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
