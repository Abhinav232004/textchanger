import React, { useState } from 'react'
// import { ReactPropTypes } from 'react'
// import PropTypes from 'prop-types';
// import { SuspenseProps } from 'react';


function Text(props) {
     const [text, settext] = useState("Enter your text here")
     const UpperCaseClicked=()=>{
        // console.log("upper case was clicked" +text)
        let newtext=text.toUpperCase()
        settext(newtext)
     }
     const handleonchange=(event)=>
     {
        settext(event.target.value);
        // console.log(text)

     }
     const LowerCaseClicked=()=>{
        let newtext=text.toLowerCase()
        settext(newtext)
     }
     const ClearText=()=>{
        settext("")
     }
     const words=(text.split(" ").length)
     const alphabet=text.length-words +   1
     const CopyText=()=>{
      var text=document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);

     }
     const Removespace=()=>{
      let newtext=text.split(/[ ]+/);
      settext(newtext.join(" "))
      // console(newtext)
     }
  return (
   <>
<div className="mb-3 container my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Enter your Text,Here</h1><div className='mb-3'>
  <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="mybox" rows="12" value={text} onChange={handleonchange}></textarea></div>
  <button type="button" class="btn btn-primary my-3 me-3" onClick={UpperCaseClicked}>UpperCase</button>
  <button type="button" class="btn btn-primary my-3 me-3" onClick={LowerCaseClicked}>LowerCase</button>
  <button type="button" class="btn btn-primary my-3 me-3" onClick={ClearText}>ClearText</button>
  <button type="button" class="btn btn-primary my-3 me-3" onClick={CopyText}>Copy Text</button>
  <button type="button" class="btn btn-primary my-3" onClick={Removespace}>Remove Extra Spaces</button>
  {/* <div className="container">Your </div> */}
  
</div>
<div className={`container mb-3 my-3 text-${props.mode==='dark'?'light':'dark'}`}>
  <h1 >Your text summary</h1>
  
  <p className='mx-1' >{words} words and {alphabet} alphabet</p>
  <h1>Preview</h1>
  <p>{text}</p>
  </div>

  </>

  )
}
export default Text;
