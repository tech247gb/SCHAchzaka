import {EquipmentCrudService} from "./equipment.crud";
import {Injectable} from "@angular/core";
import {SyncAPIService} from "../sync.service";
import {UtilsService} from "../global/utils.service";

@Injectable({providedIn: "root"})

export class EquipmentService {
    public webDb : any;

    constructor(public equipmenrService : EquipmentCrudService, public syncAPIService : SyncAPIService, public utils : UtilsService,) {}

    insertUrlToDb = (item) => {
        this.webDb = this.syncAPIService.webDb;
        return new Promise((resolve, reject) => {
            this.webDb.transaction((t) => {
                t.executeSql("INSERT INTO equipment (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipmentObjectType,equipmentDescription,equipmentCategory,equipment,eqart,eartx,begru,atWork) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [

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
                    item["begru"],
                    item['atWork']?item['atWork']:false

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
                t.executeSql("DELETE FROM equipment ")
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
                t.executeSql("DELETE FROM equipment WHERE _id = ?", [
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
    updateDbById = (item,id) => {
        this.webDb = this.syncAPIService.webDb;
        console.log('ghfhgf',item);
        return new Promise((resolve, reject) => {
            this.webDb.transaction((t) => {
                t.executeSql("UPDATE equipment SET atWork = ? WHERE _id = ?",
                ["true", id], (t, results) => {
                    console.log(results);
                    resolve("success");
                }, function (t, error) {
                    console.log("Error insert: " + error.message);
                });
            });
        });
    };
    getTasks = () => {
        this.webDb = this.syncAPIService.webDb;
        try {
            return new Promise((resolve, reject) => {
                this.webDb.transaction((tx) => {
                    tx.executeSql("SELECT * FROM equipment", [], (tx, results) => {
                        resolve(this.utils.getArrayFromJson(results.rows));
                    });
                });
            });
        } catch (err) {
            console.log(err);
        }
    };
    getTaskX1Count= () => {
        this.webDb = this.syncAPIService.webDb;
        try {
            return new Promise((resolve, reject) => {
                this.webDb.transaction((tx) => {
                    tx.executeSql("SELECT * FROM equipment", [], (tx, results) => {
                        resolve(this.utils.getArrayFromJson(results.rows).length);
                    });
                });
            });
        } catch (err) {
            console.log(err);
        }
    };

}

