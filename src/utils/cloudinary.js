import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'; // file system



cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

const uploadOnCloudinary = async (localfilePath)=>{
    try{
        if(!localfilePath) return console.log("error")
        //upload the file to the cloudinary
        const response = await cloudinary.uploader.upload(localfilePath,{
            resource_type: "auto"
        })
        // file has been uploaded successfully
        //console.log("file is uploaded successfully on cloudinary", response.url);
        fs.unlinkSync(localfilePath)
        return response;
        
    } catch(error){
        fs.unlinkSync(localfilePath) // remove locally saved temporary file as the upload operation got failed
        return console.error("Error from  cloudinary ",error);
    }
}


export { uploadOnCloudinary}

// (async function() {

//     // Configuration
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY, 
//         api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
//     });
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();