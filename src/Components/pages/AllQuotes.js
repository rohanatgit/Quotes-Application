import React,{useState,useEffect} from 'react';
import Quote from '../Quote/Quote';
import axios from 'axios';

function AllQuotes() {

//   const DUMMY_QUOTES = [
//     {
//         author: 'Mahatma Gandhi',
//         text:'A man is but the product of his thoughts. What he thinks, he becomes.'
//     },
//     {
//         author: 'Mahatma Gandhi',
//         text:'The greatness of humanity is not in being human, but in being humane.'
//     },
//     {
//         author: 'Nelson Mandela',
//         text:"It always seems impossible until it's done."
//     },
//     {
//         author: 'Abraham Lincoln',
//         text:"Democracy is by the people, for the people, of the people."
//     },
// ];


const [quotes,setQuotes]=useState([]);
const [isLoading,setIsLoading]=useState(true);


async function getAllQuoutes(){
  try{
    const res= await axios.get('http://localhost:8000/allquotes');
    setQuotes(res.data);
    setIsLoading(false);
  }
  catch(e){
     console.log('Cannot fetch the quotes at the moment');
  }

}

useEffect(()=>{
   getAllQuoutes();
},[])


  return (
    <div>
    <h1>All Quotes</h1>
    {isLoading ?
        <p>Loading....</p> :
        <ul style={{padding:'0px'}}>
        {
            quotes.map((quote) => {
                return <Quote
                    key={quote._id}
                    author={quote.author}
                    text={quote.text}
                    id={quote._id}
                />
            })
        }
    </ul>
    }
  
  
</div>
  )
}

export default AllQuotes
