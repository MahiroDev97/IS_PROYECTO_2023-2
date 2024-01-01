const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/documentos",
  filename: function (_req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).array("documentos");

module.exports = upload;
