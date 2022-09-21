import React, { useEffect } from "react";
import '../components/css/formcontainer.css';
function FormContainer() {
  
    // useEffect(()=>{
    //     setNotes({
    //         title: 'jchgchg',
    //         note:'hfxfhxghcghjhvjh'
    //     });
    // },[])
    return (
        <div className="formcontainer">
            <form>
                <h1>Create Note</h1>
                <input type="text" placeholder="Enter Title " id="input" className="entertitle" />
                <textarea placeholder="Enter Note" className="text" id="text"></textarea>
            </form>
        </div>
    );
}
export default FormContainer;