const express=require('express')
const Razorpay=require('razorpay')

const app=express()

const razorpay=new Razorpay({
    key_id: "rzp_test_ypNzDEdIJxYD7Z" ,
    key_secret: "HpHcdFDc5eRL3fX3GYBKrZpM" 
})

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))


app.use('/public', express.static('public'));
app.get('/', (req, res)=>{
    res.render('razorpay.ejs')
})
app.get('/about',(req,res)=>{
    res.render('about.ejs')
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

app.listen(5000);