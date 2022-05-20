let storage = require("../config/firebase.config");
import { getStorage, ref, uploadBytes } from "firebase/storage";
/*class FileUploadHelper{
    static uploadFile = async(file,folderName)=>{
        return new Promise((resolve, refect) =>{

           
            const blob = ;

            const fileReference = blob.firebase
    }
}*/
const storage = getStorage();
const storageRef = ref(storage, "some-child");

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log("Uploaded a blob or file!");
});
