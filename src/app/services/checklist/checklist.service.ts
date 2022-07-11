import {ChecklistCrudService} from "./checklist.crud";
import {Injectable} from "@angular/core";
import {SyncAPIService} from "../sync.service";
import {UtilsService} from "../global/utils.service";

@Injectable({providedIn: "root"})

export class ChecklistService {
    public webDb : any;

    constructor(public equipmenrService : ChecklistCrudService, public syncAPIService : SyncAPIService, public utils : UtilsService,) {}

    insertUrlToDb = (item) => {
        let value=item.checkList
        item.checklist=JSON.stringify(value)
        this.webDb = this.syncAPIService.webDb;
        return new Promise((resolve, reject) => {
            this.webDb.transaction((t) => {
                t.executeSql("INSERT INTO checklist (checklist,equipment,codeGroup,imageExists,responsible,treatmentDescription,treatmentLongDescription) VALUES (?,?,?,?,?,?,?)", [
                    item["checklist"],
                    item["equipment"],
                    item["codeGroup"],
                    item["imageExists"],
                    item["responsible"],
                    item["treatmentDescription"],
                    item["treatmentLongDescription"],

                ], (t, results) => { // console.log('jashdasd', results)

                    resolve("success");
                }, function (t, error) {
                    console.log("Error insert: " + error.message);
                });
            });
        });
    };


    deleteFromDb = () => {
        this.webDb = this.syncAPIService.webDb;
        return new Promise((resolve, reject) => {
            this.webDb.transaction((t) => {
                t.executeSql("DELETE FROM checklist ")
                resolve("success");
            }, function (t, error) {
                console.log("Error insert: " + error.message);
            });
        });

    };
    deleteFromDbById = (item) => {
        this.webDb = this.syncAPIService.webDb;
        console.log('ghfhgf',item);
        return new Promise((resolve, reject) => {
            this.webDb.transaction((t) => {
                t.executeSql("DELETE FROM checklist WHERE equipment = ?", [
                    item,
                ], (t, results) => {
                    console.log(results);
                    resolve("success");
                }, function (t, error) {
                    console.log("Error insert: " + error.message);
                });
            });
        });
    };
    getCL = (equipment) => {
        console.log('equipment',equipment);
        this.webDb = this.syncAPIService.webDb;
        try {
            return new Promise((resolve, reject) => {
                this.webDb.transaction((tx) => {
                   
                    tx.executeSql( "SELECT * FROM checklist WHERE equipment = ?",
                           [equipment], (tx, results) => {
                        resolve(this.utils.getArrayFromJson(results.rows));
                    });
                });
            });
        } catch (err) {
            console.log(err);
        }
    };
    getTaskAppCount= () => {
        this.webDb = this.syncAPIService.webDb;
        try {
            return new Promise((resolve, reject) => {
                this.webDb.transaction((tx) => {
                    tx.executeSql("SELECT * FROM checklist", [], (tx, results) => {
                        resolve(this.utils.getArrayFromJson(results.rows).length);
                    });
                });
            });
        } catch (err) {
            console.log(err);
        }
    };
    updateDbById = (id,item) => {
        this.webDb = this.syncAPIService.webDb;
        console.log('ghfhgf',item);
        // return new Promise((resolve, reject) => {
        //     this.webDb.transaction((t) => {
        //         t.executeSql("UPDATE checklist SET equipment = ?",
        //         [id], (t, results) => {
        //             console.log(results);
        //             resolve("success");
        //         }, function (t, error) {
        //             console.log("Error insert: " + error.message);
        //         });
        //     });
        // });
    };
}

