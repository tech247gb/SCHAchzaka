import { Injectable } from "@angular/core";
// import { UrlqueueService } from "./urlqueue.service";

@Injectable({
  providedIn: "root",
})
export class ChecklistCrudService {
  public webDb: any;
  public items: Array<object> = [];
  public setPreloader: Function;
  constructor() {}
  createDB( webDb, setPreloader) {
    this.setPreloader = setPreloader;
    this.webDb = webDb;
    this.dropTable("checklist");
  }

  dropTable(tableName) {
    this.webDb.transaction((t) => {
      t.executeSql(
        "DROP TABLE IF EXISTS checklist",
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
        "CREATE TABLE IF NOT EXISTS checklist (checklist,equipment,codeGroup,imageExists,responsible,treatmentDescription,treatmentLongDescription)",
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
      "INSERT INTO checklist (checkList,codeGroup,imageExists,responsible,treatmentDescription,treatmentLongDescription) VALUES (?,?,?)",
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
