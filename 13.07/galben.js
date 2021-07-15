function getExtension(file){
  const strings=file.split(".");
  return strings[strings.length-1];
}
console.log(getExtension("functions.js"));