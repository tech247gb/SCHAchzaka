import {TreatmentCrudService} from "./treatment.crud";
import {Injectable} from "@angular/core";
import {SyncAPIService} from "../sync.service";
import {UtilsService} from "../global/utils.service";

@Injectable({providedIn: "root"})

export class TreatmentService {
    public webDb : any;

    constructor(public equipmenrService : TreatmentCrudService, public syncAPIService : SyncAPIService, public utils : UtilsService,) {}

    insertUrlToDb = (item) => {
        this.webDb = this.syncAPIService.webDb;
        return new Promise((resolve, reject) => {
            this.webDb.transaction((t) => {
                t.executeSql("INSERT INTO treatment (equipment,treatmentDate,treatmentDescription,treatmentLongText,type,__v,_id) VALUES (?,?,?,?,?,?,?)", [
                    item["equipment"],
                    item["treatmentDate"],
                    item["treatmentDescription"],
                    item["treatmentLongText"],
                    item["type"],
                    item["__v"],
                    item["_id"],
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
                t.executeSql("DELETE FROM treatment ")
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
                t.executeSql("DELETE FROM treatment WHERE _id = ?", [
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
    getTreatment = (equipment,type) => {
        console.log(equipment);
        this.webDb = this.syncAPIService.webDb;
        try {
            return new Promise((resolve, reject) => {
                this.webDb.transaction((tx) => {
                   
                    tx.executeSql( "SELECT * FROM treatment WHERE equipment = ?",
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
                    tx.executeSql("SELECT * FROM treatment", [], (tx, results) => {
                        resolve(this.utils.getArrayFromJson(results.rows).length);
                    });
                });
            });
        } catch (err) {
            console.log(err);
        }
    };
}

