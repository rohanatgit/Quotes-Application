import React,{useRef} from 'react';
import styles from './NewQuote.module.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function NewQuotes() {

const usernameInputref=useRef();
const quoteInputRef=useRef();

const navigate=useNavigate();


const addQuoteHandler=async(e)=>{
  e.preventDefault();
  

  const author=usernameInputref.current.value;
  const text=quoteInputRef.current.value;
   try{
    const res= await axios.post('http://localhost:8000/addQuotes',{author,text});
    console.log(res);
    navigate('/'); // to navigate to the allQuotes page after creating a new quote.
   }
   catch(e){
    console.log('cannot Create quote at the moment');
   }
}

  return (
    <form onSubmit={addQuoteHandler} className={styles['new-quote-form']}>
        <div>
          <label htmlFor='author'>Author</label>
          <input type="text" id="author" placeholder='Author Name' ref={usernameInputref}/>
        </div>
        <div>
          <label htmlFor='quote'>Quote</label>
          <textarea cols={20} rows={3} ref={quoteInputRef} ></textarea>
        </div>

        <button>Submit</button>
      </form>
  
  )
}

export default NewQuotes
