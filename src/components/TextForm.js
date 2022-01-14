import React , { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('enter text');
    const handleUpClick=()=>{
        console.log("onClick");
        setText(text.toUpperCase());
        props.showAlert("Converted to upper case","success");
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lower case","success");
    }
    const handleFirstUpCase=()=>{
        setText(text.replace(/\b(\w)/g, s => s.toUpperCase()));
        props.showAlert("First letter has been capitalize","success");
    }
    const clearText=()=>{
        const newText='';
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }
    const handleOnChange=(event)=>{
        console.log("onChange");
        setText(event.target.value);
    }
    return (
        <>
        <div className='container'>
            <h3 style={{ color:props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
             <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white' , color:props.mode==='dark'?'white':'black'}} cols="16" rows="8"></textarea>
            </div>
            <div>
                 <button type="button" className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
                 <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
                 <button type="button" className="btn btn-primary mx-2" onClick={handleFirstUpCase}>convert to first letter capital</button>
                 <button type="button" className="btn btn-primary mx-2" onClick={clearText}>clear text</button>
            </div>
         </div>
         <div className='container my-2' style={{ color:props.mode==='dark'?'white':'black'}}>
             <h4>Your Text Summary</h4>
             <p >{text.split(" ").length} words and  {text.length} characters</p>
             <p>{0.008*text.split(" ").length} minutes read</p>
             <h4>Preview</h4>
             <p>{text.length>0?text:"Enter something to preview it here."}</p>
         </div>
         </>
    )
}
