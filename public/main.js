( async () => {
    let rustApp = null;

    try{
        rustApp = await import("../pkg");
    }catch(err){
        console.error(err);
        return;
    }

    const input = document.getElementById("upload");
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        const base64 = fileReader.result.replace(/^data:image\/(jpe?g|png|gif);base64,/, "");
        const grayScaleImg = rustApp.grayscale(base64);
        document.getElementById("new-img").setAttribute("src", grayScaleImg);
    }

    input.addEventListener("change", () => {
        fileReader.readAsDataURL(input.files[0]);
    })
})()