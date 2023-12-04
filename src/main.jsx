import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react'
import CVInfo from './CVInfo.jsx'
import DisplayCVDetails from './DisplayCV.jsx'
import './index.css'

function CVApp(){
  const [showCVInfo, setShowCVInfo] = useState(true);
  const [cvDetails, setCVDetails] = useState(null);

  const handleCVSubmit = (details) => {
    setCVDetails(details);
    setShowCVInfo(false); // Hide the CVInfo after submission
  }

  const handleCVEdit = () => {
    setShowCVInfo(true);
  }

  return (
    <div>
      {showCVInfo ? (
        < CVInfo handleSubmission={handleCVSubmit} updatedDetails={cvDetails} />
      ) : (
        < DisplayCVDetails cvdetails={cvDetails} handleEdit={handleCVEdit} />
      )}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < CVApp />
  </React.StrictMode>,
)
