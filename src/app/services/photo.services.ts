import { UtilsService } from "./global/utils.service";
import { Injectable } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Storage } from "@ionic/storage";
import Swal from "sweetalert2";
import { File, FileEntry } from "@ionic-native/file/ngx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Platform } from "@ionic/angular";
import { SettingsService } from "./global/setting.service";
import { Network } from "@ionic-native/network/ngx";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  public photos: Photo[] = [];
  public type: number = 0;
  lastImage: string = null;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };

  constructor(
    private camera: Camera,
    public platform: Platform,
    private storage: Storage,
    private file: File,
    public http: HttpClient,
    public settingsService: SettingsService,
    public network:Network,
    public utilsService: UtilsService
  ) {}

  takePicture(treatmentType, equipment) {
    this.camera.getPicture(this.options).then(
      (imageData) => {
        this.file
          .resolveLocalFilesystemUrl(imageData)
          .then((entry: FileEntry) => {
            entry.file((file) => {
              if (this.network.type!=='none'){
                this.readFile(file, treatmentType, equipment);
              }else{
                this.readFileOffline(file, treatmentType, equipment);
              }
              
            });
          });
      },
      (err) => {
        // Handle error
      }
    );
  }

  readFile(file: any, treatmentType, equipment) {
    const reader = new FileReader();

    reader.onloadend = async () => {
      const imgBlob = new Blob([reader.result], {
        type: file.type,
      });
        let formData = new FormData();
        formData.append("treatmentType", treatmentType);
        formData.append("equipment", equipment);
        //formData.append('image', myphoto, '123.jpg');
        formData.append("image", imgBlob, file.name);
  
        var headers = new HttpHeaders();
        console.log("FileWeb : ", file);
        headers.append(
          "Content-Type",
          "multipart/form-data;boundary=" + Math.random()
        );
        headers.append("Accept", "application/json");
        const httpOptions = {
          headers,
        };
        await this.sendToServer(
          this.settingsService.photoURL,
          formData,
          httpOptions
        );
     
      
      this.utilsService.presentToast("התמונה הועלתה בהצלחה!!");
      // alert("הועלה קובץ בשם: " + file.name);
    };
    reader.readAsArrayBuffer(file);
  }
  readFileOffline(file: any, treatmentType, equipment) {
    const reader = new FileReader();
    reader.onloadend = async () => {
      let imgBlob =reader.result.toString();
        let formData={};
        formData['treatmentType']= treatmentType;
        formData['equipment']= equipment;
        formData['image'] =imgBlob;
        formData['name']=file.name;
        formData['type']=file.type;
        let res = await this.sendToServer(
          this.settingsService.photoURL,
          formData
        );

      this.utilsService.presentToast("התמונה הועלתה בהצלחה!!");
     
    };

    reader.readAsDataURL(file);
    
  }


  async uploadFromBrowser(file, treatmentType, equipment) {
    var headers = new HttpHeaders();
    console.log("FileWeb : ", file);
    headers.append(
      "Content-Type",
      "multipart/form-data;boundary=" + Math.random()
    );
    headers.append("Accept", "application/json");
    const reader = new FileReader();
    console.log("FILE : ", file[0].name, file.type);
    let myphoto = new Blob([reader.result], { type: file[0].type });
    reader.onloadend = async () => {
      // alert("הועלה קובץ בשם: " + file[0].name)
      const httpOptions = {
        headers,
      };

      let formData = new FormData();
      formData.append("treatmentType", treatmentType);
      formData.append("equipment", equipment);
      //formData.append('image', myphoto, '123.jpg');
      formData.append("image", myphoto, "123.jpg");
     await this.sendToServer(
        this.settingsService.photoURL,
        formData,
        httpOptions
      );
    };
    reader.readAsArrayBuffer(myphoto);
  }

  sendToServer(url, formData, httpOptions?) {
    return new Promise(async (resolve, reject) => {
      await this.http.post(url, formData, httpOptions).subscribe((data) => {
        console.log(data);
        resolve(data);
      });
    });
  }
}

class Photo {
  data: any;
}
