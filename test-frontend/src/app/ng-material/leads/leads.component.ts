import { Component, OnInit } from '@angular/core';
import { AllLeads } from 'src/app/types/lead-form-types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  leads!: null;
  
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/leads').subscribe(data => {
            
            this.leads = data
            console.log(this.leads, "Leads")
        })
  }

  selectedgroup: any

  getVal() {
    console.log(this.selectedgroup)
    // console.log(this.groups.filter(x => x.name == this.selectedgroup)[0].items)
  }

}
