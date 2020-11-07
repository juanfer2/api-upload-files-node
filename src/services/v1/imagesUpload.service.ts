import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ImageUploadRepository } from "../../repositories/v1/imageUpload.repository";
import { ImageUpload } from "../../models/v1/imageUpload.model";
import { Multer } from "multer";
import os from 'os'
import {dataParse} from '../../utils/parser/parser.util'

@Service()
export class ImageUploadService {
  constructor(
    @InjectRepository() private imageUploadRepository: ImageUploadRepository
  ) {}

  async uploadImage(inputData: any): Promise<any> {
    try {
      console.log(inputData)
      const data = {
        name: inputData.filename,
        type: inputData.mimetype,
        imageUrl: 'http://localhost:4000/images/'+inputData.filename
      }
      const image = await this.imageUploadRepository.save(data); 
      return dataParse(image);
    } catch (error) {
      return error;
    }
  }

  async getUploadImage(): Promise<any> {
    try {
      const images = this.imageUploadRepository.find({});
      return images
    } catch (error) {
      console.log(error)
      return error;
    }
  }


}
