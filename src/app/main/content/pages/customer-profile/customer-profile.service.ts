import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {
  private curMetaData = null;
  constructor(private http: HttpClient) { }
  public getCurMetaData() {
    return this.curMetaData;
  }
  getMetaData() {
    return new Promise((resolve, reject) => {
      const url = '/assets/utility/metadata.json';
      this.http.get(url).subscribe((result: any) => {
        if (result) {
          const objmetadata = {};
          for (const key in result.fieldsData) {
            if (result.fieldsData.hasOwnProperty(key)) {
              objmetadata[result.fieldsData[key]['fieldName'] + '_' + result.fieldsData[key]['fieldId']] = result.fieldsData[key];
            }
          }
          // this.metaData = objmetadata;
          this.curMetaData = objmetadata;
          resolve(true);
        }
        // this.masterData = result;
      }, error => console.error(error));
    });
  }
}
