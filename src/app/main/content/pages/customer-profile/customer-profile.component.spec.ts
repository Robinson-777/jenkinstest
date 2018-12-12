import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerProfileComponent } from './customer-profile.component';
import { CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, ApplicationInitStatus } from '@angular/core';
import { FedexsharedModule } from 'src/app/shared/fedexshared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { metaDataProviderFactory } from './customer-profile.module';
import { CustomerProfileService } from './customer-profile.service';
describe('CustomerProfileComponent', () => {
  let component: CustomerProfileComponent;
  let fixture: ComponentFixture<CustomerProfileComponent>;
  let provider: CustomerProfileService;
  let MetaData: any;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FedexsharedModule, HttpClientModule, BrowserAnimationsModule],
      declarations: [CustomerProfileComponent],
      providers: [CustomerProfileService]
    }).compileComponents();

  });
  beforeEach(async () => {
    provider = TestBed.get(CustomerProfileService);
    await provider.getMetaData().then((result) => {
      if (result) {
        MetaData = provider.getCurMetaData();
      }
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileComponent);
    component = fixture.componentInstance;
    component.metaData = MetaData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
