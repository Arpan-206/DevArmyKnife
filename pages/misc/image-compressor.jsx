import imageCompression from "browser-image-compression";
import { saveAs } from "file-saver";
import { FileUploader } from "react-drag-drop-files";

export default function ImageCompressor() {
  const fileTypes = ["JPG", "PNG", "GIF", "SVG"];
  const handleChange = (files) => {
    var imageFile = files;
    console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    var options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    imageCompression(imageFile, options)
      .then(function (compressedFile) {
        console.log(
          "compressedFile instanceof Blob",
          compressedFile instanceof Blob
        ); // true
        console.log(
          `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
        ); // smaller than maxSizeMB

        saveAs(compressedFile, imageFile.name); // write your own logic
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
            Image Compressor
          </h1>
          <p className="mx-auto leading-relaxed items-start text-base comfortaa text-justify">
            Upload your images and compress them to save space or store them in bulk.
          </p>
          <div className="flex flex-wrap -mx-4 -mb-10 items-center text-center h-64">
            <FileUploader
              className="h-full w-full"
              handleChange={handleChange}
              name="image"
              types={fileTypes}
            />
          </div>
        </div>
      </section>
    </>
  );
}
