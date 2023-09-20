import { Product } from "@/Dbconfig/model";
import { connect } from "mongoose";
import {NextResponse}  from "next/server";



//database connection

(async()=> {
    console.log(process.env.DATABASEURL)
    try {
        await connect(process.env.DATABASEURL)
        console.log("connected") } 
        catch (error) {
        console.log("error -> " + error)}
})()

export async function GET(req){
    const data= await Product.find()
    // return NextResponse.json(Data)

    return NextResponse.json(data)
}


export async function POST(req){
  

    console.log("hello")
    const Data= await req.json()
    const NewProduct= await new Product(Data);
    NewProduct.save()
    
    return NextResponse.json(NewProduct,{success:true})
   
}