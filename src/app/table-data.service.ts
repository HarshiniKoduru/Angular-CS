import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  jsonData: Observable<any>;
  constructor(private http: HttpClient) { }
  url: string = "http://localhost:6117/casestudy/customers/";
  uploadUrl: string = "http://localhost:6117/casestudy/upload/0/50/borrower";

  getcustomers(pageNumber, PageSize, sortBy) {
    console.log("calling get customers");
    return this.http.get(this.url +"/"+ pageNumber + "/" +PageSize+"/"+sortBy);
  }

  uploadFile(data) {
    return this.http.post(this.uploadUrl, data);
    
  }
}
