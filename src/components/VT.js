import { useEffect } from "react";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText=()=>{
    const {transcript, resetTranscript} = useSpeechRecognition()
    useEffect(()=>{
        SpeechRecognition.startListening({continuous:true})
        console.log('listening starts')
    },[]);

    return(
        <>
            <div className="mb-3">
            <textarea className="form-control" value ={transcript} id="myBox" rows="7" ></textarea>
            </div>
            <button onClick={resetTranscript} type="button" class="btn btn-success mx-2">Clear Text</button>
               <button onClick={(e)=>{
               e.preventDefault();
               SpeechRecognition.stopListening()
               console.log('Mic OFF')
               }}
               type="button" class="btn btn-success mx-2">Stop Listening</button>
            <button className="btn btn-primary mx-2" onClick={() => navigator.clipboard.writeText(transcript)}>Copy to Clipboard</button>

        </>
    )
}
export default SpeechToText