import { Injectable } from "@angular/core";
// import { UrlqueueService } from "./urlqueue.service";

@Injectable({
  providedIn: "root",
})
export class EquipmentX3CrudService {
  public webDb: any;
  public items: Array<object> = [];
  public setPreloader: Function;
  constructor() {}

  createDB( webDb, setPreloader) {
    this.setPreloader = setPreloader;
    this.webDb = webDb;
    this.dropTable("equipmentx3");
  }

  dropTable(tableName) {
    this.webDb.transaction((t) => {
      t.executeSql(
        "DROP TABLE IF EXISTS equipmentx3",
        [],
        (t, results) => {
          this.createTable();
        },
        function (t, error) {
          console.error("Error: " + error.message);
        }
      );
    });
  }

  createTable = () => {
    this.webDb.transaction((t) => {
      t.executeSql(
        "CREATE TABLE IF NOT EXISTS equipmentx3 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork)",
        [],
        (t, results) => {
          this.insertArrayRowToDb();
        },
        function (t, error) {
          console.error("Error: " + error.message);
        }
      );
    });
  };

  insertArrayRowToDb = () => {
    // this.setPreloader(1);
    let i = 0;
    this.webDb.transaction((t) => {
      this.items.map((item) => {
        this.insertArrayToDb(item, t);
        i++;
        if (i == this.items.length) {
          console.log("CloseDB");
          this.setPreloader(1);
        }
      });
    });
  };

  insertArrayToDb(item, t) {
    t.executeSql(
      "INSERT INTO equipmentx3 (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru) VALUES (?,?,?)",
      [
        item["_id"],
        item["__v"],
        item["vendor"],
        item["treatmentType"],
        item["treatmentNumber"],
        item["stand"],
        item["serialNumber"],
        item["responsibleNo"],
        item["responsible"],
        item["nextTreatment"],
        item["location"],
        item["lastTreatment"],
        item["imageExists"],
        item["equipmentObjectType"],
        item["equipmentDescription"],
        item["equipmentCategory"],
        item["equipment"],
        item["eqart"],
        item["eartx"],
        item["begru"]
      ],
      (t, results) => {},
      function (t, error) {
        console.error("Error: " + error.message);
      }
    );
  }
}
