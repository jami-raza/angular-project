import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBasicComponent } from './mat-basic/mat-basic.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { LeadModalComponent } from './lead-modal/lead-modal.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { LeadsComponent } from './leads/leads.component';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import {  RoutesModule } from './routes/routes.module';
import { HomeComponent } from './home/home.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [MatBasicComponent, LeadModalComponent, LeadsComponent, HomeComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    RoutesRoutingModule,
RoutesModule,
MatTooltipModule,
FormsModule

  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    RoutesRoutingModule,
RoutesModule,
MatTooltipModule,
FormsModule

  ],
})
export class NgMaterialModule {}
