import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ClientEditComponent } from './client-edit.component';

@Injectable()
export class ClientEditGuard implements CanDeactivate<ClientEditComponent> {

    canDeactivate(component: ClientEditComponent): boolean {
        if (component.isDirty) {
            const clientName = component.clientRecord && component.clientRecord.firstName || 'New Client';
            return confirm(`Navigate away and lose all changes to ${clientName}?`);
        }
        return true;
    }
}
