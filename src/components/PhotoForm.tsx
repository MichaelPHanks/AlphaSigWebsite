import { useState } from "react";

function PhotoForm() {
  const [uploadedFile, changeFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  function handleFileChange(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      changeFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
      };
      reader.readAsDataURL(file);
    }
  }
  function handleSubmit() {}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
      <div>
        {previewImage && (
          <div className="mb-3">
            <img
              src={previewImage}
              alt="Preview"
              className="img-fluid"
              style={{ maxWidth: "50%" }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default PhotoForm;
