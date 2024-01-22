import React, { useState } from 'react';
import '../CSS_files/UpdateModel.css'

const UpdateModel = ({ nav }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (event) => {

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
        <div class="d-none d-lg-block d-md-block">
        <div className='conatiner subscription '>
            <div className='col-md-1'></div>
            <div className='col-md-5 basic'>
                <div className='head text-center'>
                    <div className='title'>
                        <h2>Update Model</h2>
                    </div>
                    <hr />
                </div>
                <div className='Model-Body mt-5'>
                    <h3>Existing Model</h3>

                </div>
                <p>Blink Detectiion <a href='#'>abc</a></p>
                <p>Yawn Detectiion <a href='#'>abc</a></p>





                <input type="file" onChange={handleFileInput} />





                <input className='mt-2' type="file" onChange={handleFileInput} />
                <br />
                <button type='button' className='Navutton' >Buy</button>



            </div>
            <div className='col-md-5 premium'>
            <div className='head text-center'>
                    <div className='title'>
                        <h2>Review Complains</h2>
                    </div>
                    <hr />
                </div>

                <button type='button' className='Navutton' >Buy</button>
            </div>
            <div className='col-md-1'></div>
        </div>
</div>


// Mobile

<div class="d-lg-none d-xl-none d-lg-none d-md-none">
        <div className='conatiner subscription-mobiles '>
            <div className='col-md-1'></div>
            <div className='col-md-5 basic-mobiles'>
                <div className='head text-center'>
                    <div className='title'>
                        <h2>Update Model</h2>
                    </div>
                    <hr />
                </div>
                <div className='Model-Body mt-5'>
                    <h3>Existing Model</h3>

                </div>
                <p>Blink Detectiion <a href='#'>abc</a></p>
                <p>Yawn Detectiion <a href='#'>abc</a></p>





                <input type="file" onChange={handleFileInput} />





                <input className='mt-2' type="file" onChange={handleFileInput} />
                <br />
                <button type='button' className='Navutton' >Buy</button>



            </div>
            <div className='col-md-5 premium-mobiles'>
            <div className='head text-center'>
                    <div className='title'>
                        <h2>Review Complains</h2>
                    </div>
                    <hr />
                </div>

                <button type='button' className='Navutton' >Buy</button>
            </div>
            <div className='col-md-1'></div>
        </div>
</div>
</>
    )
}

export default UpdateModel