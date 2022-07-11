import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class TreatmentsFilter {
  constructor() {}

  filterTreatmentsByArray(arr, info) {
    let filterArray = [];
    console.log(arr);
    arr.map((item) => {
      if (
        item["eartx"].includes(info["search"]) ||
        item["eqart"].includes(info["search"]) ||
        String(item["equipment"]).includes(info["search"]) ||
        item["equipmentDescription"].includes(info["search"]) ||
        item["equipmentObjectType"].includes(info["search"]) ||
        item["location"].includes(info["search"]) ||
        item["responsible"].includes(info["search"]) ||
        item["vendor"].includes(info["search"])
      ) {
        filterArray.push(item);
      }
    });

    return filterArray;
  }

  checkDates(date, info) {
    let dt = date.split("/");
    let newDt = dt[2] + "-" + dt[1] + "-" + dt[0];

    let check = moment(newDt).isBetween(
      info.startDay,
      info.endDay,
      "days",
      "[]"
    );

    return check;
  }
}
