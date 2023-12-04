import { useEffect, useState } from 'react';
import './CVInfo.css'

function NameInfo({stateVariable, inputChange}) {
  return (
    <div className="name-info">
      <input
        type="text"
        placeholder="First name"
        id= "firstname"
        name="firstname"
        value={stateVariable.name.firstname}
        onChange ={e => inputChange(stateVariable, 'firstname', e.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        id= "lastname"
        name="lastname"
        value={stateVariable.name.lastname}
        onChange ={e => inputChange(stateVariable, 'lastname', e.target.value)}
      />
    </div>
  )
}

function ContactInfo({stateVariable, inputChange}) {
  return (
    <div className="contact-info">
      <input
        type="email"
        placeholder="email"
        id= "email"
        name="email"
        value={stateVariable.email}
        onChange ={e => inputChange(stateVariable, 'email', e.target.value)}
      />
      <input
        type="phone"
        placeholder="Phone number"
        id= "phone"
        name="phone"
        value={stateVariable.phoneNumber}
        onChange ={e => inputChange(stateVariable, 'phoneNumber', e.target.value)}
      />
    </div>
  )
}

function EducationalInfo({stateVariable, inputChange}) {
  return (
    <div>
      <input
        type="text"
        placeholder="School"
        id= "school"
        name="school"
        value={stateVariable.school}
        onChange ={e => inputChange(stateVariable, 'school', e.target.value)}
      />
      <input
        type="text"
        placeholder="Title of study"
        id="study"
        name="study"
        value={stateVariable.titleOfStudy}
        onChange ={e => inputChange(stateVariable, 'titleOfStudy', e.target.value)}
      />
      <label htmlFor='study-date'>Date of study:</label>
      <input
        type="date"
        id="study-date"
        name="study-date"
        value={stateVariable.dateOfStudy}
        onChange ={e => inputChange(stateVariable, 'dateOfStudy', e.target.value)}
      />
    </div>
  )
}

function PracticalInfo({stateVariable, inputChange}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Company"
        id="company-name"
        name="company-name"
        value={stateVariable.company}
        onChange ={e => inputChange(stateVariable, 'company', e.target.value)}
      />
      <input
        type="text"
        placeholder="Position title"
        id="company-position"
        name="company-position"
        value={stateVariable.positionTitle}
        onChange ={e => inputChange(stateVariable, 'positionTitle', e.target.value)}
      />
      <label htmlFor="company-from">from:</label>
      <input
        type="date"
        id="company-from"
        name="company-from"
        value={stateVariable.companyFrom}
        onChange ={e => inputChange(stateVariable, 'companyFrom', e.target.value)}
      />
      <label htmlFor="company-to">to:</label>
      <input
        type="date"
        id="company-to"
        name="company-to"
        value={stateVariable.companyTo}
        onChange ={e => inputChange(stateVariable, 'companyTo', e.target.value)}
      /> 
      <textarea
        name="responsibilities"
        id="responsibilities"
        cols="30"
        rows="10"
        placeholder="Main responsibilities"
        value={stateVariable.responsibilities}
        onChange ={e => inputChange(stateVariable, 'responsibilities', e.target.value)}
      >
      </textarea>
    </div>
  )
}

export default function CVInfo({handleSubmission, updatedDetails = null}){
  const [cvDetails, setCvDetails] = useState({
    name: { firstname: '', lastname: '' },
    email: '',
    phoneNumber: '',
    school: '',
    titleOfStudy: '',
    dateOfStudy: '',
    company: '',
    positionTitle: '',
    companyFrom: '',
    companyTo: '',
    responsibilities: ''
  });
  
  useEffect(() => {
    if(updatedDetails) {
      setCvDetails(updatedDetails);
    }
  }, [updatedDetails]);

  const handleInputChange = (prevDetails, property, value) => {
    if (property in cvDetails) {
      setCvDetails({...prevDetails, [property]: value});
    } else {
      // if the property is nested
      setCvDetails({
        ...prevDetails,
        name: {...prevDetails.name, [property]: value}
      });
    }
  }

  const logDetails = () => {
    handleSubmission(cvDetails);
  }
  return (
    <>
    <h1>CV Application</h1>
    <section className="general-info">
      <h2>General Information</h2>
      <NameInfo stateVariable={cvDetails} inputChange={handleInputChange}/>
      <ContactInfo stateVariable={cvDetails} inputChange={handleInputChange}/>
    </section>
    <section className="educational-exp">
      <h2>Educational Experience</h2>
      <EducationalInfo stateVariable={cvDetails} inputChange={handleInputChange}/>
    </section>
    <section className="practical-exp">
      <h2>Practical Experience</h2>
      <PracticalInfo stateVariable={cvDetails} inputChange={handleInputChange}/>
    </section>
    <button onClick={logDetails}>Submit</button>
    </> 
  )
}