import {
  Get,
  Res,
  Param,
  Body,
  JsonController,
  Post,
  UploadedFiles,
  UploadedFile,
  Delete,
  BodyParam,
  Put,
  Authorized,
} from "routing-controllers";
import { ImageUploadService } from "../../services/v1/imagesUpload.service";
import {FILE_UPLOAD_OPTIONS_IMAGE} from '../../constants/upload_files.constant'


@JsonController("/api/v1/images")
class IceCreamController {
  constructor(private readonly imageUploadService: ImageUploadService) {}

  @Get("/")
  images(@Res() response: any) {
    const images = this.imageUploadService.getUploadImage();
    return images;
  }

  @Post("/")
  uploadImage( @UploadedFile("image", { options: FILE_UPLOAD_OPTIONS_IMAGE }) inputData: any) {
    const rsp = this.imageUploadService.uploadImage(inputData);
    return rsp;
  }
  /*
  @Post("/")
  uploadImages(@UploadedFiles("images", { options: FILE_UPLOAD_OPTIONS  }) inputData: File[]) {
    console.log(inputData)
    //const iceCream = this.imageUploadService.uploadImage(inputData);
    return true;
  }
  */
}
export default IceCreamController;



