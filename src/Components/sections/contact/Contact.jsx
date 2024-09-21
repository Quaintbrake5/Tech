import './Contact.css'
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { PiBuildingOfficeThin } from "react-icons/pi";

function Contact() {
  return (
    <>
      
       <h2>Get in Touch with us</h2>


       <div className="contact_container">

        <div className="box">
          <div className="icons"><FaSquarePhoneFlip className='icon1' /></div>
          <p className="info11">Call Us Now</p>

          <p className="contact_info">(555) 987-3642 OR (555) 762-8194 <br /> </p>

        </div>


        <div className="box">

          <div className="icons"><MdMail className='icon2' /></div>
          <p className="info1">Send Us An Email</p>

          <p className="contact_info">contact@crescent-solutions.com</p>
          
        </div>


        <div className="box">
          <div className="icons"><PiBuildingOfficeThin className='icon3' /></div>
          <p className="info1">Visit Our Offices</p>

          <p className="contact_info">
          Golden Tower Business Park
          321 Crescent Avenue, Suite 804
          Westbrook, VA 23901
          </p>

        </div>

       </div>

    </>
  );
};

export default Contact;