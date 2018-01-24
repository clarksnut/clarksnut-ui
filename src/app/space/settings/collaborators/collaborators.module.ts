import { ClarksnutModule } from '../../../ngx-clarksnut';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-modal';

import { ListModule } from 'patternfly-ng';

import { CollaboratorsComponent } from './collaborators.component';
import { CollaboratorsRoutingModule } from './collaborators-routing.module';

import { AddCollaboratorsDialogModule } from './add-collaborators-dialog/add-collaborators-dialog.module';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    CollaboratorsRoutingModule,
    ListModule,
    AddCollaboratorsDialogModule,
    ModalModule,
    ClarksnutModule
  ],
  declarations: [
    CollaboratorsComponent
  ],
  providers: [
    BsDropdownConfig
  ]
})
export class CollaboratorsModule {
  constructor(http: Http) { }
}
