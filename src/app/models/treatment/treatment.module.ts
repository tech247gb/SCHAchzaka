export class TreatmentModule {
  equipment: string = "";
  begru: "";
  type: string = "";
  treatmentDate: Date;
  treatmentDescription: string = "";
  treatmentLongDescription: string = "";
  finish: boolean;
  externalUser: string = "";
  responsible: string = "";
  codeList: Array<string> = [];
  imageExists: boolean = false;
}
