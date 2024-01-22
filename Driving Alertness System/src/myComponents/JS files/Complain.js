import React, { useState } from 'react';
import '../CSS_files/Complain.css'
import update from '../images/update.png'

export const Complain = ({nav}) => {

const [selectedFile, setSelectedFile]= useState(null);

  const handleFileInput =(event) =>{

    setSelectedFile(event.target[0])
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Replace 'upload_url' with the actual URL to which you want to upload the file
    fetch('upload_url', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <>
    {nav}
    <div className='container'>
      <div className='row'>

        <div className='col-md-6'>
          <div className='container mt-5 text-center whole'>
            <div className='main-heading'>
              <h1>Update Model</h1>
            </div>
            <div className='body'>
              <h3> Latest Release</h3>
              <p>Blink Detection <a href='#'>abc</a></p>
              <p>Yawn Detection <a href='#'>abc</a></p>
            </div>
          </div>
        </div>


        <div className='col-md-6'>
          <img className='update-image' src={update}/>
        </div>

        <div className='text-center mt-5'>
        {/* <!-- Button trigger modal --> */}
<button type="button" className='Button' data-toggle="modal" data-target="#exampleModalCenter1">
  Register a Complain
</button>
{/* 
<!-- Modal --> */}
<div className="modal fade" id="exampleModalCenter1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Register a Complain</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body m-1 p-5">
      <div>
      <textarea rows="4" cols="50" onChange={handleFileInput}></textarea>
      
      <input type="file" onChange={handleFileInput} />
      
      <button className='Comp-Button' onClick={handleUpload}>Upload</button>
    </div>
      </div>
      
    </div>
  </div>
</div>
        </div>


      </div>
      </div>
    </>
  )
}

export default Complain;