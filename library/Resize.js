// Resize.js

const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
const path = require('path');

class Resize {
    
  constructor(folder) {
    this.folder = folder;
  }

  async saveImage(buffer) {
    const filename = Resize.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(2048, 2048, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(filepath);
    
    return filename;
  }
 
  static filename() {
    return uuidv4()+".jpg";
  }

  filepath(filename) {
    return path.resolve(this.folder+"/"+filename)
  }
}
module.exports = Resize;