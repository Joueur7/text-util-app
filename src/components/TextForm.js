import React, { useState} from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'
import SpeechToText from './VT';



export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was selected" + text);
        if( text !== '')
        {
        let newUppertext = text.toUpperCase();
        setText(newUppertext);
        props.showAlert("Converted to Uppercase","success");
        }
        else
        {
        props.showAlert("There's Nothing To UpperCase Into TextBox","warning");
        }
    }
    const handleLowClick = ()=>{
        //console.log("Uppercase was selected" + text);
        if( text !== '')
        {
        let newLowertext = text.toLowerCase();
        setText(newLowertext);
        props.showAlert("Converted to Lowercase","success");
        }
        else
        {
        props.showAlert("There's Nothing To LowerCase Into TextBox","warning");
        }
    }

    const handleClear = ()=>{
        let newText = '';
        setText(newText)
    }

    //Text-to-speech
    const { speak } = useSpeechSynthesis();

    ///////
    //Speech-to-Text seperate js


    // const handlecopyfunction = () => {
    //     if(text !== '')
    //     {
    //       var copyText = document.getElementById({text});
    //       copyText.select();
    //       navigator.clipboard.writeText(copyText.value);
    //       props.showAlert("Copied the text : "+ copyText.value, "success");
    //     }
    //     else
    //     {
    //       props.showAlert("There's Nothing To Copy Into TextBox","warning");
    //     }    
    // }
    
    const handleExtraspaces = () => {
        if(text !== '')
        {
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("All extra spaces are cleared","success");
        }
        else
        {
          props.showAlert("There's Nothing Remove Spaces Into TextBox","warning");
        }
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }


    const [text,setText] = useState('');


    
    return (
        <>
        <div className = "container" style= {{color:props.mode==='light'?'#0f2540':'white'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                <textarea className="form-control" value ={text} style= {{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'grey':'white'}}onChange={handleOnChange} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={() => navigator.clipboard.writeText(text)}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Clear Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={() => speak({ text: text })}>Text-To-Speech</button>        
                <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
        </div>

        <div className="container my-3" style= {{color:props.mode==='light'?'#0f2540':'white'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter Something To Preview'}</p>   
        </div> 
        <div className = "container" style= {{color:props.mode==='light'?'#0f2540':'white'}}>
            <SpeechToText />
        </div>
        </>
    )
}
