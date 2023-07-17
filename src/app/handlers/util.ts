export const smallImage = (imagePath: string) => {
    if(imagePath !== null){
        const image = imagePath.match(/media\/screenshots/) 
        ? imagePath.replace("/media/screenshots", `/media/resize/1280/-/screenshots`)
        : imagePath.replace("/media/games", `/media/resize/1280/-/games`)
        return image;
    }else{
        return imagePath;
    }
}