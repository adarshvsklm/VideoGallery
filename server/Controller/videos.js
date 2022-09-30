 import VideoModel from "../Models/VideoModel.js";

export const upload =(req,res)=>{
    console.log(req.body);
    try{
        VideoModel.create({title:req.body.title,videoUrl:req.body.url,userId:req.session.user._id})
    .then((response)=>{
        res.status(201).json({message:"Success"})
    })
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}

export const allVideos=(req,res)=>{
    VideoModel.find().then((response)=>{
        console.log(response);
        res.status(200).json(response)
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    })
}