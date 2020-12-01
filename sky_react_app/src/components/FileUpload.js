import React, { useRef } from 'react'

const FileUpload = ({ onFileSelect }) => {
        const fileInput = useRef(null)

        const handleFileInput = (e) => {
                // handle validations
                console.log(e.target.files[0])
                onFileSelect(e.target.files[0])
        }

        return (
                <div>
                        <input type="file" onChange={handleFileInput} accept="application/JSON" />
                        <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary">Import</button>
                </div>
        );
}

export default FileUpload
