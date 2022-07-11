import { Injectable } from "@angular/core";
// import { UrlqueueService } from "./urlqueue.service";

@Injectable({
  providedIn: "root",
})
export class TreatmentCrudService {
  public webDb: any;
  public items: Array<object> = [];
  public setPreloader: Function;
  constructor() {}
  createDB( webDb, setPreloader) {
    this.setPreloader = setPreloader;
    this.webDb = webDb;
    this.dropTable("treatment");
  }

  dropTable(tableName) {
    this.webDb.transaction((t) => {
      t.executeSql(
        "DROP TABLE IF EXISTS treatment",
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
        "CREATE TABLE IF NOT EXISTS treatment (equipment,treatmentDate,treatmentDescription,treatmentLongText,type,__v,_id)",
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
      "INSERT INTO treatment (equipment,treatmentDate,treatmentDescription,treatmentLongText,type,__v,_id) VALUES (?,?,?)",
      [
        item["_id"],
        item["__v"],
        item["treatmentLongText"],
        item["treatmentDescription"],
        item["treatmentDate"],
        item["equipment"],
      ],
      (t, results) => {},
      function (t, error) {
        console.error("Error: " + error.message);
      }
    );
  }
}
