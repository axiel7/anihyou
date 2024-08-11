async function downloadBetaApk() {
  downloadAndUnzipFile(
    "https://github.com/axiel7/AniHyou-android/actions/runs/10315616204/artifacts/1793985560",
  );
}

async function downloadAndUnzipFile(url) {
  try {
    // Fetch the zip file from the URL
    const response = await fetch(url);
    const blob = await response.blob();

    // Load the zip content using JSZip
    const zip = await JSZip.loadAsync(blob);

    // Iterate through each file in the zip
    for (const filename in zip.files) {
      const file = zip.files[filename];

      // If it's not a directory, save the file
      if (!file.dir) {
        const fileBlob = await file.async("blob");

        // Create a temporary anchor element for each file
        const a = document.createElement("a");
        a.href = URL.createObjectURL(fileBlob);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  } catch (error) {
    console.error("Error downloading or unzipping the file:", error);
  }
}
