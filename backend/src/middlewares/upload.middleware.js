const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/documentos",
  filename: function (_req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (_, file, cb) => {
  const allowedMimes = [
    "application/pdf",
    "application/msword",
    "image/jpeg",
    "image/png",
  ];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type."));
  }
};

const upload = multer({ storage, fileFilter }).array("documentos", 10);

module.exports = upload;
