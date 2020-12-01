import React, { useRef } from 'react'

const FileUpload = ({ onFileSelect }) => {
        const fileInput = useRef(null)

        const handleFileInput = (e) => {
                // handle validations
                onFileSelect(e.target.files[0])
        }

        return (
                <div>
                        <input type="file" onChange={handleFileInput} />
                        <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary">Import</button>
                </div>
        );
}

export default FileUpload
