import { UtilsService } from "./../../../../services/global/utils.service";
import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { formatDate, Location } from "@angular/common";
import { TreatmentsService } from "src/app/services/global/treatments.service";
import { TreatmentModule } from "src/app/models/treatment/treatment.module";
import { PhotoService } from "src/app/services/photo.services";
import { Network } from "@ionic-native/network/ngx";
import { EquipmentService } from "src/app/services/equipment/equipment.service";
import { EquipmentX2Service } from "src/app/services/equipmentX2/equipmentX2.service";
import { EquipmentX3Service } from "src/app/services/equipmentX3/equipmentX3.service";
import { ChecklistCrudService } from "src/app/services/checklist/checklist.crud";
import { ChecklistService } from "src/app/services/checklist/checklist.service";
import { UrlqueueService } from "src/app/services/urlqueue/urlqueue.service";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"],
})
export class TaskFormComponent implements OnInit {
  @Input() task;
  treatmentType;
  treatment: TreatmentModule = new TreatmentModule();
  checkListTask;
  notForSubmit: boolean;
  checkList = [];
  checkListCommited = [];
  // checkListNotCommited;
  currentImage: any;
  filesToUpload: any;
  wasTakePicture: boolean = false;

  constructor(
    public router: Router,
    public treatmentsService: TreatmentsService,
    public equiService:EquipmentService,
    public equiX2Service:EquipmentX2Service,
    public equiX3Service:EquipmentX3Service,
    public checkListService:ChecklistService,
    public photoService: PhotoService,
    public urlService:UrlqueueService,
    public location: Location,
    public utils: UtilsService,
    public network:Network,
  ) {
    
  }

  async ngOnInit() {
    if(this.network.type!=='none'){
      this.checkListTask = await this.treatmentsService.getCL(
        this.task.equipment
      );
    }
    localStorage.equipment=this.task.equipment;
    let value=await this.checkListService.getCL(this.task.equipment); 
    console.log(value); 
    if(value && value[0]) {
      value[0].checkList=JSON.parse(value[0].checklist)
      this.checkListTask=value[0];
    }
    this.treatment.equipment = this.task.equipment;
    this.treatment.type = this.task.treatmentType;
    this.treatment.responsible = this.task.responsible;
    this.treatment.externalUser = JSON.parse(localStorage.empNum);
    this.treatment.treatmentDate = this.task.nextTreatment;
    this.treatment.begru = this.task.begru;
    this.treatment.imageExists = this.task.imageExists;
    this.treatmentType = JSON.parse(localStorage.treatmentType);
   
    this.treatment.treatmentDescription = formatDate(
      new Date(),
      "dd.MM.yyyy",
      "en"
    );
    if(this.checkListTask){
      for (
        let index = 0;
        index < this.checkListTask["checkList"].length;
        index++
      ) {
        if (this.checkListTask["checkList"][index]["commited"] === true) {
          // console.log(this.checkList[index]["checked"]);
          
          this.checkListCommited.push(this.checkListTask["checkList"][index]);
        } else {
          this.checkList.push(this.checkListTask["checkList"][index]);
        }
      }
      if (this.checkList && this.checkListTask.treatmentLongDescription) {
        this.treatment.treatmentLongDescription = this.checkListTask.treatmentLongDescription;
      }
    }
    console.log('treatment',this.treatment);
  }
  async ionViewDidEnter(){
    
 console.log('sadhkgshajdb')
  }

  takePicture() {
    this.photoService.takePicture(this.task.treatmentType, this.task.equipment);
    // this.wasTakePicture = true;
    // console.log("ressss:", res);
    this.treatment.imageExists = true;
    // this.utils.presentToast("תמונה הועלתה בהצלה!");
  }

  async onSubmit() {
    
    for (let index = 0; index < this.checkList.length; index++) {
      if (this.checkList[index]["checked"] === true) {
        // console.log(this.checkList[index]["checked"]);
        this.checkList[index]["commited"]=true;
        this.treatment.codeList.push(this.checkList[index].code);
      }
    }
    if(this.checkListTask){
      this.checkListService.deleteFromDbById(this.checkListTask.equipment)
      this.checkListService.insertUrlToDb(this.checkListTask);
    }
   

    // this.treatment.checkList = this.checkList;
    this.treatment.finish = false;
    console.log("notification123: ", JSON.stringify(this.treatment), this.task);
    this.treatmentsService.setTreatment(this.treatment);
    this.task.atWork=true;
    if(this.treatment.type === "X1"){
      this.equiService.updateDbById(this.task,this.task._id);
    } else if(this.treatment.type === "X2"){
      this.equiX2Service.updateDbById(this.task,this.task._id);
    } else if(this.treatment.type === "X3"){
      this.equiX3Service.updateDbById(this.task,this.task._id);
    }
    this.utils.presentToast("הטיפול נשמר!");
    this.router.navigate(["/home/true/true/" + localStorage.type]);
    this.location.back();
  }

  onChange = (e) => {
    console.log("Change", e.target.files);
    this.filesToUpload = e.target.files;
    this.photoService.uploadFromBrowser(
      this.filesToUpload,
      this.task.treatmentType,
      this.task.equipment
    );
  };

  async onSave(treatment) {
    console.log("imageExists - ", this.checkListTask);
    let checkListvalue= this.checkList;
      for (let index = 0; index < this.checkList.length; index++) {
        if (this.checkList[index]["checked"] === true) {
          this.checkList[index]["commited"]=true;
          this.treatment.codeList.push(this.checkList[index].code);
        } else {
          this.notForSubmit = true;
        }
      }
      if(this.checkListTask){
        this.checkListService.deleteFromDbById(this.checkListTask.equipment)
        this.checkListService.insertUrlToDb(this.checkListTask);
      }
      console.log("imageExists - ", this.checkListTask);
      if (this.notForSubmit != true || this.treatment.type != "X1") {
        this.treatment.finish = true;
      } else {
        this.treatment.finish = false;
        this.utils.presentalertConfirm(
          "לא ניתן לשלוח את הטיפול ללא מילוי כל הפעולות"
        );
        return false;
      }
      
      if (
        (this.treatment.type == "X3" || this.treatment.type == "X2") &&
        this.treatment.imageExists != true
      ) {
        this.utils.presentalertConfirm("לא ניתן לשלוח את הטיפול ללא צרופות!");
        return false;
  
      }
      console.log(this.task.atWork);
      if(this.treatment.type === "X1"){
        localStorage.taskLength=localStorage.taskLength-1;
        this.equiService.deleteFromDbById(this.task._id);
      } else if(this.treatment.type === "X2"){
        localStorage.taskX2Length=localStorage.taskLength-1;
        this.equiX2Service.deleteFromDbById(this.task._id)
        
      } else if(this.treatment.type === "X3"){
        localStorage.taskX3Length=localStorage.taskLength-1;
        this.equiX3Service.deleteFromDbById(this.task._id);
      }
      this.treatmentsService.setTreatment(this.treatment);
      this.utils.presentToast("הטיפול נשלח ל - SAP!");
      this.router.navigate(["/home/true/true/" + localStorage.type])
  }
}
