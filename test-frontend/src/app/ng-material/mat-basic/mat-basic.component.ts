import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LeadType } from 'src/app/types/lead-form-types';
import { LeadModalComponent } from '../lead-modal/lead-modal.component';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
@Component({
  selector: 'app-mat-basic',
  templateUrl: `./mat-basic.component.html`,
  styleUrls: ['./mat-basic.component.css']
})

export class MatBasicComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private dialogReftwo: MatDialogRef<MatBasicComponent>, private http: HttpClient, private route : Router) { }
  ngOnInit(): void {
    // Form fields with validations
    this.loginForm = this.formBuilder.group({
      automation_name: ["", [Validators.required]],
      project_name: ["", Validators.required]
    });
  }

  
  // Lead Modal function

  openLeadDialog1() {
    const dialogRef = this.dialog.open(LeadModalComponent, {
      maxWidth: '800px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result:`, this.loginForm.value);
      
      this.http.post<LeadType>('http://localhost:3000/leads',  this.loginForm.value ).subscribe(data => {
            console.log(data)
            this.route.navigate(['/leads']);
        })
    });
  }
  
  // First Form Submit function

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.dialogReftwo.close();

    this.openLeadDialog1();
  }


  

}
