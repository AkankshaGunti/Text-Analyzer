import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TextForms(props) {
   const handleUppercase =()=>{
    var NewText = text.toUpperCase();  
    setText(NewText);
    props.showAlert("Converted to uppercase","info");
   }
   const handleLowercase =()=>{
    var NewText = text.toLowerCase();  
    setText(NewText);
    props.showAlert("Converted to Lowercase","info");
   }
   const handleClear =()=>{
    setText("");
    props.showAlert("Text cleared","info");
   }
   const handleVowels=()=>{
    var count = 0;
     for(var i=0;i<text.length;i++)
     {
      if(text[i] ==='a' || text[i]==='e' || text[i]==='i' || text[i]==='o' || text[i] ==='u' || text[i]==='A' || text[i]==='E' || text[i] ==='I' || text[i]==='O' || text[i] ==='U')
      {
        count++;
      }
     }
     setVowels(count);
    //  props.showAlert("Vowel count displayed down","info");
   }
   const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied Successfully","info");
    }
    const handleExtraSpaces = () =>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(' '));
      props.showAlert("Extra spaces removed","info");
    }
   function handleOnchange(event) {
    setText(event.target.value);
    handleVowels();
    // props.showAlert("Text is being updated...","success");
   }
   const [text,setText] = useState('');
   const [vowels , setVowels] = useState(0);
  return (
    <>
    <Form className='container'> 
        <h2>{props.heading}</h2> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" name='myBox' placeholder="Enter here" value={text} onChange={handleOnchange} rows={13} />
      </Form.Group>
      <div className="d-inline">
           <Button className='mx-1' variant="primary" onClick={handleUppercase}>Uppercase</Button>
           <Button className='mx-1' variant="primary" onClick={handleLowercase}>Lowercase</Button>
           <Button className='mx-1' variant="primary" onClick={handleClear}>Clear Text</Button>
           <Button className='mx-1' variant="primary" onClick={handleCopy}>Copy text</Button>
           <Button className='mx-1' variant="primary" onClick={handleExtraSpaces}>Remove Extra Spaces</Button>
           <Button className='mx-1' variant="primary" onClick={handleVowels}>Click here to know the vowel count</Button>
      </div>
    </Form>

    <div className='container my-3'>
    <p>{text.trim() ? `${text.trim().split(/\s+/).length} words ${text.trim().length} characters` : '0 words 0 characters'}</p>
    <p> {text.split(" ").length*0.008} Minutes read </p>
    <p>Number of vowels = {vowels}</p> 
    </div>
    </>
  )
}

export default TextForms