import react, { Component } from "react"

class FileUpload extends Component {

        constructor(){
            super()

        }

        handleOnClick(props) {
                let file = document.getElementById('selectedFiled').files;
                console.log(file);
                if (file.length < 0) {
                        return false;
                }
        }

        render() {
                return (
                        <div>
                                <input type="file" id="selectFiles" value="import"></input>
                                <button id="import"></button>
                        </div>
                );
        }
}

export default FileUpload
