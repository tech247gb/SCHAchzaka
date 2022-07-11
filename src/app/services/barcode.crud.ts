import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BarcodeCrudService {
  public webDb: any;
  public items: Array<object> = [];
  public setPreloader: Function;
  constructor() {}

  updateWebDb(webDb, setPreloader) {
    this.setPreloader = setPreloader;
    this.webDb = webDb;
  }

  createDB(json, webDb) {
    this.webDb = webDb;
    this.items = json;
    this.dropTable("locations");

  }

  dropTable(tableName) {
    this.webDb.transaction((t) => {
      t.executeSql(
        "DROP TABLE IF EXISTS barcode",
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
        "CREATE TABLE IF NOT EXISTS barcode (equipment)",
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
    let i = 0;
    this.webDb.transaction((t) => {
      this.items.map((item) => {
        this.insertArrayToDb(item, t);
        i++;
        if (i == this.items.length) {
          console.log("barcode CloseDB");
        }
      });
    });
  };

  insertArrayToDb(item, t) {
      t.executeSql(
        "INSERT INTO barcode (equipment) VALUES (?)",
        [
          item
        ],
        (t, results) => {},
        function (t, error) {
          console.error("Error: " + error.message);
        }
      );
    // }
  }
}
