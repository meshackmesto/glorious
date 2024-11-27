import React from 'react';
import './style/Enquire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Enquire = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d171e69-69cc-49fd-b9c5-768c5dcde3a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <div className='main-enquire'>
      <h1>Enquire</h1>
      </div>
    <div className="enquire-hero">
      <div className="enquire-left">
      <form onSubmit={onSubmit}> 
        <h3>Parent/Guardian's Details</h3>
        <label>Name (Required)</label>
        <input type="text" id="parent-name" name="parent-name" required placeholder="Firstname , Lastname" />
        
        <label>Email Address (Required)</label>
        <input type="text" name="email" required placeholder='Email'/>
        
        <label>Contact Phone Number (Required) (with country code)</label>
        <input type="number" name="phone" required placeholder='Phone Number' />
        
        <label >Occupation</label>
        <input type="text"name="occupation"placeholder='Occupation'/>
        
        <label htmlFor="address">Address</label>
        <input type="text" id="street-address" name="street-address" placeholder="Street Address" />
        <label>Address 2</label>
        <input type="text" id="address-line-2" name="address-line-2" placeholder="Address Line 2" />
        <label>City</label>
        <input type="text" id="city" name="city" placeholder="City" />
        <label>County/state/Region</label>
        <input type="text" id="state" name="state" placeholder="County / State / Region" />
        <label>ZIP/postal code</label>
        <input type="text" id="zip" name="zip" placeholder="ZIP / Postal Code" />
        <label>Country</label>
        <input type="text" id="country" name="country" placeholder="Country" />
        <hr/>
        <h3>Pupil's Details</h3>
        <label>Childs name</label>
        <input type="text" name="name" placeholder='Enter childs full names' required/>
        <label htmlFor="dob">Date of Birth (dd/mm/yyyy)</label>
        <input type="date" id="dob" name="dob" placeholder="DD/MM/YYYY" />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
        </select>
        <label htmlFor="nationality">Nationality</label>
        <input type="text" id="nationality" name="nationality"
        placeholder='Nationality' />
        <label htmlFor="entry-year">Term and Year of Entry</label>
        <input type="year" id="entry-year" name="entry-year"
        placeholder='Term and Year of Entry' />
        <button type='submit' className='btn Home-btn dark-btn'>Submit Now <FontAwesomeIcon  className="fa" icon={faArrowRight} /></button>
    </form>
    <span>{result}</span>
      </div>
      <div className="enquire-right">
        <h3>Why Enquire with Glorious Dawn Montessori School</h3>
        <p>Are you looking for an exceptional educational experience for your child? Glorious Dawn Montessori School offers a unique and nurturing learning environment that fosters independence, creativity, and a love of learning. With a focus on holistic development, our school provides a strong foundation for your child's future success. Contact us today to learn more about our programs and schedule a visit. 
        </p>
        <h3>Quote</h3>
        <p>**Nurture your child's potential with a Montessori education. Discover the difference at Glorious Dawn Montessori School.**
        </p>
      </div>
    </div>
    </>
  )
}

export default Enquire;