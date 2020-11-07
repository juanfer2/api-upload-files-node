import { EntityRepository, Repository } from "typeorm";
import { ImageUpload } from "../../models/v1/imageUpload.model";

@EntityRepository(ImageUpload)
export class ImageUploadRepository extends Repository<ImageUpload> {}
