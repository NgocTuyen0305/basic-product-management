import express from 'express';
import multer from 'multer';
import uploadImage from '../controllers/upload';
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'NodeJs');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname);
  },
});
const imageFilter = (req, file, cb) => {
  // Chỉ cho phép các file có đuôi là jpg, jpeg, png, gif
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });
router.post("/images/upload",upload.array('image'),uploadImage)
// router.delete("/images/:publicId", deleteImage);
// router.put("/images/:publicId",upload.array("image", 10 ),updateImage)
export default router
