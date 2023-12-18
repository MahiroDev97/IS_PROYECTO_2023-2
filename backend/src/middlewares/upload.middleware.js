const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "./public/documents");
  },
  filename: (_req, file, cb) => {
    if (file != null) {
      const ext = file.originalname.split(".").pop();
      cb(null, `${Date.now()}.${ext}`);
    }
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

const upload = multer({ storage, fileFilter }).array("documents", 10);

module.exports = { upload, storage };
