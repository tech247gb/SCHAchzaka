import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  // public globalURL: string = "https://192.168.101.219:9000/";
  // public globalServerURL: string = "https://192.168.101.219:9000/";
  public globalServerURL: string = "https://dysch-dev.sch.co.il:9000/";
  public globalURL: string = "https://dysch-dev.sch.co.il:9000/";
  public photoURL: string = "https://dysch-dev.sch.co.il:9000/upload";

  // public globalURL: string = "https://192.168.101.219:9000/";

  // public globalServerURL: string = "https://appprod.sch.co.il:9000/";
  public versionOnServer: string = "1.0.1";
  public currentVersion: string = "1.03";
  public lastAPKurl: string =
    "https://dysch.sch.co.il:5000/dayalotApp/currentVersion?download=true";
  // "https://192.168.101.219:5000//dayalotApp/download=true";
  constructor() { }

  setGlobalURL(num) {

  }
}
