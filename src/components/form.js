import React from "react";
import '../components/css/formcontainer.css';
const FormContainer = props => {
    return (
        <div className="formcontainer">
            <form>
                <h1>Create Note</h1>
                <input placeholder="Enter Title " className="entertitle" />
                <textarea placeholder="Enter Note" className="text"></textarea>
            </form>
        </div>
    );
}
export default FormContainer;