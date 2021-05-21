import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdministrationComponent } from './client-administration.component';

describe('ClientAdministrationShellComponent', () => {
  let component: ClientAdministrationComponent;
  let fixture: ComponentFixture<ClientAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
