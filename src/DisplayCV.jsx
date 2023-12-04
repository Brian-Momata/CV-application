import './DisplayCV.css';

export default function DisplayCVDetails({ cvdetails, handleEdit }) {
  return (
    <div className="cv-container">
      <h1>Here are your CV Details</h1>
      <div className="section">
        <h2>General Information</h2>
        <p>First Name: {cvdetails.name.firstname}</p>
        <p>Last Name: {cvdetails.name.lastname}</p>
        <p>Email: {cvdetails.email}</p>
        <p>Phone Number: {cvdetails.phoneNumber}</p>
      </div>
      <div className="section">
        <h2>Educational Experience</h2>
        <p>School: {cvdetails.school}</p>
        <p>Title of Study: {cvdetails.titleOfStudy}</p>
        <p>Date of Study: {cvdetails.dateOfStudy}</p>
      </div>
      <div className="section">
        <h2>Practical Experience</h2>
        <p>Company: {cvdetails.company}</p>
        <p>Position Title: {cvdetails.positionTitle}</p>
        <p>From: {cvdetails.companyFrom}</p>
        <p>To: {cvdetails.companyTo}</p>
        <p>Main Responsibilities: {cvdetails.responsibilities}</p>
      </div>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
