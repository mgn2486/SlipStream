import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { IClient } from 'src/app/shared/models/client-model/client.model';
import { ClientService } from 'src/app/shared/services/client-service/client.service';
import { UserService } from 'src/app/shared/services/user-service/user.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  @ViewChild(NgForm) editForm!: NgForm;
  pageTitle: string = 'Product Edit';
  errorMessage: string='';
  private originalClientDetails!: IClient;
  clientRecord!: IClient;

  get isDirty(): boolean {
      return this.editForm.dirty ? true : false;
  }

  constructor(private _clientService: ClientService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.route.params.subscribe(
          params => {
              const id = params['id'];
              console.log('Do we have an id', id);
              this.getClientById(id);
          }
      );
  }

  getClientById(id: string): void {
      this._clientService.getClientById(id)
          .subscribe(
              client => this.onClientRetrieved(client),
              error => this.errorMessage = <any>error
          );
  }

  onClientRetrieved(client: IClient): void {
      // Reset back to pristine
      this.editForm.reset();

      // Display the data in the form
      // Use a copy to allow cancel.
      this.originalClientDetails = client;
      this.clientRecord = Object.assign({}, client);

      if (this.clientRecord.id === "0") {
          this.pageTitle = 'Add New Client';
      } else {
          this.pageTitle = `Edit Client: ${this.clientRecord.firstName}`;
      }
  }

  cancel(): void {
      // Navigate back to the product list
      this.router.navigate(['/clients']);
  }

  deleteClient(): void {
      if (this.clientRecord.id) {
          if (confirm(`Really delete the client: ${this.clientRecord.firstName}?`)) {
              this._clientService.deleteClient(this.clientRecord.id)
                  .subscribe(
                      () => this.onSaveComplete(),
                      (error: any) => this.errorMessage = <any>error
                  );
          }
      } else {
          this.onSaveComplete();
      }
  }

  saveClientRecord(): void {
      if (this.editForm.valid) {
          this._clientService.saveClientRecord(this.clientRecord)
              .subscribe(() => {
                  this.onSaveComplete();
              },
              (error: any) => this.errorMessage = <any>error
              );
      } else {
          this.errorMessage = 'Please correct the validation errors.';
      }
  }

  onSaveComplete(): void {
      // Reset back to pristine
      this.editForm.reset(this.editForm.value);
      this.router.navigate(['/products']);
  }

  onBack() {
    this.router.navigate(['/clients']);
  }
}
