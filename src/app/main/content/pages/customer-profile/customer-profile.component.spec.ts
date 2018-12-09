import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerProfileComponent } from './customer-profile.component';
import { CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FedexsharedModule } from 'src/app/shared/fedexshared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { metaDataProviderFactory } from './customer-profile.module';
import { CustomerProfileService } from './customer-profile.service';

describe('CustomerProfileComponent', () => {
  let component: CustomerProfileComponent;
  let fixture: ComponentFixture<CustomerProfileComponent>;
  let customerProfileService: CustomerProfileService;
  beforeEach(async(async () => {
    await TestBed.get(CustomerProfileService).donePromise;
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FedexsharedModule, HttpClientModule, BrowserAnimationsModule],
      declarations: [CustomerProfileComponent],
      providers: [CustomerProfileService, {
        provide: APP_INITIALIZER, useFactory: metaDataProviderFactory
        , deps: [CustomerProfileService], multi: true
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    customerProfileService = TestBed.get(CustomerProfileService);
    spyOn(customerProfileService, 'getMetaData').and.callThrough();
    spyOn(customerProfileService, 'getCurMetaData').and.callThrough();
    fixture = TestBed.createComponent(CustomerProfileComponent);
    component = fixture.componentInstance;
    component.metaData = spyOn(customerProfileService, 'getCurMetaData').and.returnValue(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
