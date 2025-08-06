import { React, useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";

export const Project02 = (props) => {

    const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  //SAS URL for the input container
  const inputContainerSasUrl = "https://aisdemofuncstor.blob.core.windows.net/input-timecode-files?sp=r&st=2025-08-06T15:16:00Z&se=2025-08-06T23:31:00Z&spr=https&sv=2024-11-04&sr=c&sig=RXbF4iovIaGjPn%2Bau%2BH%2Be5VbAatiNkTF5KXjlfs7WlA%3D"; // Replace with your actual SAS URL

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const uploadFile = async () => {
    if (!file) return;
    setUploading(true);
    const blobServiceClient = new BlobServiceClient(inputContainerSasUrl);
    const containerClient = blobServiceClient.getContainerClient("");
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    await blockBlobClient.uploadBrowserData(file);
    setUploading(false);
    // Optionally, start polling for the processed file
    pollForProcessedFile(file.name);
  };

  // Poll your GetDownloadSAS endpoint for the processed file
  const pollForProcessedFile = async (filename) => {
    const maxAttempts = 20;
    let attempts = 0;
    while (attempts < maxAttempts) {
      const res = await fetch(
        `https://aisdemofunctionapp-d2gbhye8e0b6e7bx.eastus-01.azurewebsites.net/api/GetDownloadURL?blobName=${filename}`
      );
      if (res.status === 200) {
        const data = await res.json();
        setDownloadUrl(data.downloadUrl);
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds
      attempts++;
    }
  };

  return (
    <div id="project02">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
                        <img src="img/portfolio/YouTubeTimeCodeConverterIcon.png" className="img-responsive" alt="" />{" "}{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>YouTube Timecode Converter</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <input id="fileInput" type="file" accept=".txt" onChange={handleFileChange} className="hidden-file-input" />
                <label htmlFor="fileInput" className="btn btn-custom btn-lg" style={{ marginBottom: 0, marginRight: 0 }}>
                  Choose File
                </label>

                <span className="file-name styled-file-name">{file ? file.name : "No file chosen"}</span>

              </div>

              <button onClick={uploadFile} disabled={uploading} className="btn btn-custom btn-lg ">
                {uploading ? "Uploading..." : "Convert to YouTube Timecode Format"}
              </button>
              {downloadUrl && (
                <a href={downloadUrl} download className="btn btn-custom btn-lg ">
                  Download Processed File
                </a>
              )}
              <h3>Features</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Features1.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};