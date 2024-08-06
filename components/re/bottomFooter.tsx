import Link from 'next/link';
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaYoutube, FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

export default function BottomFooter() {
  return (
    <div className="w-full flex flex-col bg-sH text-white justify-center items-center p-4 text-xs">
      <div className="flex flex-col items-center text-center">
        <h3 className='text-3xl text-pH font-bold'>DonoCare Consultancy Services</h3>
        <h3 className="text-xl mt-2">We Are Reimagining The Relationship Between People & Technology</h3>
      </div>

      <div className="flex flex-col items-center mt-4">
        <p className="text-gray-400">Newsletter</p>
        <p className="text-gray-400 text-center">By subscribing to our mailing list you will always be updated with the latest news from us.</p>
        <div className="flex mt-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 rounded-l-md text-black"
          />
          <button className="bg-gray-500 p-2 rounded-r-md">Subscribe</button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <ul className='flex text-sm flex-col items-center gap-2'>
          <li className="flex items-center gap-2"><FaPhoneAlt /> +91 91201 83508</li>
          <li className="flex items-center gap-2"><FaGlobe /> Donocare.com</li>
          <li className="flex items-center gap-2"><FaEnvelope /> info@donocare.com</li>
          <li className="flex items-center gap-2"><FaMapMarkerAlt /> Delhi | Patna</li>
        </ul>
      </div>

      <div className="flex mt-4 gap-4">
        <a href="https://www.facebook.com" className='text-white text-2xl'><CiFacebook /></a>
        <a href="https://www.instagram.com" className='text-white text-2xl'><CiInstagram /></a>
        <a href="https://www.linkedin.com" className='text-white text-2xl'><CiLinkedin /></a>
        <a href="https://www.twitter.com" className='text-white text-2xl'><CiTwitter /></a>
        <a href="https://www.youtube.com" className='text-white text-2xl'><FaYoutube /></a>
      </div>

      <div className="flex justify-between w-full mt-6 px-4 text-center">
        <Link href={'/privacy-policy'}>Privacy Policy</Link>
        <Link href={'/terms-conditions'}>Terms & Conditions</Link>
      </div>
    </div>
  );
}
