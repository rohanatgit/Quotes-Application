const express=require('express');
const app=express();
const mongoose =require('mongoose');
const seedDB=require('./seed');
const quotesRoutes=require('./apis/quotesRoutes');
const cors=require('cors');


mongoose.connect('mongodb://127.0.0.1:27017/quotes-db')
    .then(() => console.log('Connecting Open!'))
    .catch((err) => console.log(err));



    app.use(cors({
        origin:['http://localhost:3000']
    }));


    app.use(express.json());

//seed the database with the dummy quotes


// seedDB();




app.get('/hello',(req,res)=>{
    res.status(200).json({msg:'Hello From Quotes App Server'});
})


app.use(quotesRoutes);


const port=process.env.PORT || 8000;


app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})