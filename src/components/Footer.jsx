import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const contactInfo = [
  { label: 'support@skillsphere.com', icon: <MdEmail size={18} /> },
  { label: '+1 (800) 123-4567', icon: <MdPhone size={18} /> },
  { label: '123 Learning St, New York, NY', icon: <MdLocationOn size={18} /> },
];

const socialLinks = [
  { label: 'Facebook', icon: <FaFacebook size={18} /> },
  { label: 'Twitter / X', icon: <FaTwitter size={18} /> },
  { label: 'LinkedIn', icon: <FaLinkedin size={18} /> },
  { label: 'YouTube', icon: <FaYoutube size={18} /> },
];

const legalLinks = [
  { label: 'Terms & Conditions' },
  { label: 'Privacy Policy' },
];

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

     
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="list-none flex flex-col gap-3">
            {contactInfo.map(({ label, icon }) => (
              <li key={label} className="flex items-center gap-2 text-sm">
                <span className="text-primary">{icon}</span>
                {label}
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold text-lg mb-4">Social Links</h3>
          <ul className="list-none flex flex-col gap-3">
            {socialLinks.map(({ label, icon }) => (
              <li key={label} className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
                <span className="text-primary">{icon}</span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="list-none flex flex-col gap-3">
            {legalLinks.map(({ label }) => (
              <li key={label} className="text-sm cursor-pointer hover:text-primary hover:underline transition-colors">
                {label}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-base-300 text-center py-4 text-sm text-base-content/60">
        © {new Date().getFullYear()} 🎓 SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;