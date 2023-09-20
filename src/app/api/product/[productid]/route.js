import { Product } from "@/Dbconfig/model"
import { NextResponse } from "next/server"

export async function DELETE(req,content){
 const id=content.params.productid
 const deleteMessage= await Product.findByIdAndDelete(id);
 return NextResponse.json({status: deleteMessage,
    succuss: true})
}

export async function PUT(req,content){
    const id=content.params.productid
    const data= await req.json()
    const Message=await Product.findOneAndUpdate({_id:id}, data, {
        new: true});
    return NextResponse.json({message:Message})

   }

   