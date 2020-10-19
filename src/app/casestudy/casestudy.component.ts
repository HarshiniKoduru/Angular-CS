import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableDataService} from '../table-data.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent implements OnInit {
  selectedFile:any = "";
  hasFloodRisk = false;
  headers: string[];
 
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  constructor(private dataservice: TableDataService) { }
  customers: any;
  list: any;
  users: any;
  count: number;

  ngOnInit() {
    //json_Data = this.dataservice.jsonData;

  }

  
  onFileSelect(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;

    } else {
      this.selectedFile = "";
    }

  }
  getCustomers(pageNumber = 0,PageSize = 50,sortBy = 'borrower'): void {
    this.hasFloodRisk = false;
    this.dataservice.getcustomers(pageNumber, PageSize, sortBy).subscribe((response) => {
      this.count = Object.keys(response).length;
      console.log(response[0])
      this.headers = Object.getOwnPropertyNames(response[0]);

      this.users = JSON.parse(JSON.stringify(response));
      console.log(this.users)

      this.users.forEach((item) => {
        if (item.flood_risk != "" && item.flood_risk) {
          this.hasFloodRisk = true;
        }
      })
      if (!this.hasFloodRisk) {
        this.headers.splice(4, 1);
      }
      
    }, (error) => { });
  }
  uploadFile(): void {
    this.hasFloodRisk = false;
    if (this.selectedFile == "") {
      alert("please select file");
    }
    let data = new FormData();
    data.append('file', this.selectedFile);
    this.dataservice.uploadFile(data).subscribe((response) => {
      this.count = Object.keys(response).length;
      console.log(response[0])
      this.headers = Object.getOwnPropertyNames(response[0]);
     
      this.users = JSON.parse(JSON.stringify(response));
      console.log(this.users)
     
      this.users.forEach((item) => {
        if (item.flood_risk != "" && item.flood_risk) {
          this.hasFloodRisk = true;
        }
      })
        if (!this.hasFloodRisk) {
          this.headers.splice(4, 1);
        }      
      // }
    },
     (error) => console.log(error));
    


    this.uploadFileInput.nativeElement.value = "";
  }
    

  }


