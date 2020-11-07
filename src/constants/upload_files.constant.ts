import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';

export const FILE_UPLOAD_OPTIONS_IMAGE = {
  storage: multer.diskStorage({
      destination: (req: any, file: any, cb: any) => { 
        cb(null, './src/uploads/images')
      },
      filename: (req: any, file: any, cb: any) => { 
        const name = file.originalname.split('.')
        const ext = name[1]
        //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,  uuidv4() + '.' +ext)
      }
  }),
  /*
  fileFilter: (req: any, file: any, cb: any) => { ...
  },
  */
 /*
  limits: {
      fieldNameSize: 255,
      fileSize: 1024 * 1024 * 2
  }
  */
}

export const FILE_UPLOAD_OPTIONS_IMAGES = {
  storage: multer.diskStorage({
      destination: (req: any, file: any, cb: any) => { 
        cb(null, './src/files/images')
      },
      filename: (req: any, file: any, cb: any) => { 
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
      }
  }),
  /*
  fileFilter: (req: any, file: any, cb: any) => { ...
  },
  */
 /*
  limits: {
      fieldNameSize: 255,
      fileSize: 1024 * 1024 * 2
  }
  */
}