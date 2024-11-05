  // import multer from "multer";


  // const storage = multer.diskStorage({
  //     destination: function (req, file, cb) {
  //       cb(null, './public/temp')
  //     },
  //     // nano-ids as file names can be used 
  //     filename: function (req, file, cb) {
  //       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  //       cb(null, file.fieldname + '-' + uniqueSuffix) //filename.originalName can be used for general projects
  //     }
  //   })
    
  //   const upload = multer({ storage: storage })


  // export default upload = multer({
  //     storage //  storage, ony can be used for general projects
  // });


  import multer from "multer";

  const storage = multer.diskStorage({
      destination: function (_req, _file, cb) {
        cb(null, "./public/temp")
      },
      filename: function (_req, file, cb) {
        
        cb(null, file.originalname)
      }
    })
    
  export const upload = multer({ 
      storage, 
  })