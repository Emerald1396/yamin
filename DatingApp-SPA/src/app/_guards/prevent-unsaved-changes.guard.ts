import { Injectable } from "@angular/core";
import { MemberEditComponent } from '../members/member-list/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';

@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent>{
    canDeactivate(component: MemberEditComponent){
        if (component.editForm.dirty) {
            return confirm("Are u sure.................")
        }
        return true;
    }
}