import {EquipmentAllCrudService} from "./equipmentAll.crud";
import {Injectable} from "@angular/core";
import {SyncAPIService} from "../sync.service";
import {UtilsService} from "../global/utils.service";

@Injectable({providedIn: "root"})

export class EquipmentAllService {
    public webDb : any;

    constructor(public equipmenrService : EquipmentAllCrudService, public syncAPIService : SyncAPIService, public utils : UtilsService,) {}

    insertUrlToDb = (item) => {
        this.webDb = this.syncAPIService.webDb;
        return new Promise((resolve, reject) => {
            this.webDb.transaction((t) => {
                t.executeSql("INSERT INTO equipmentAll (_id,__v,vendor,treatmentType,treatmentNumber,stand,serialNumber,responsibleNo,responsible,nextTreatment,location,lastTreatment,imageExists,equipment,equipmentObjectType,equipmentDescription,equipmentCategory,eqart,eartx,begru) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
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
                    item["equipment"],
                    item["equipmentObjectType"],
                    item["equipmentDescription"],
                    item["equipmentCategory"],
                    item["eqart"],
                    item["eartx"],
                    item["begru"]

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
                t.executeSql("DELETE FROM equipmentAll ")
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
                t.executeSql("DELETE FROM equipmentAll WHERE _id = ?", [
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
    getTasks = () => {
        this.webDb = this.syncAPIService.webDb;
        try {
            return new Promise((resolve, reject) => {
                this.webDb.transaction((tx) => {
                    tx.executeSql("SELECT * FROM equipmentAll", [], (tx, results) => {
                        resolve(this.utils.getArrayFromJson(results.rows));
                    });
                });
            });
        } catch (err) {
            console.log(err);
        }
    };
    getTaskAllCount= () => {
        this.webDb = this.syncAPIService.webDb;
        try {
            return new Promise((resolve, reject) => {
                this.webDb.transaction((tx) => {
                    tx.executeSql("SELECT * FROM equipmentAll", [], (tx, results) => {
                        resolve(this.utils.getArrayFromJson(results.rows).length);
                    });
                });
            });
        } catch (err) {
            console.log(err);
        }
    };

}

