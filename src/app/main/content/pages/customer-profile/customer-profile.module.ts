import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CustomerProfileComponent } from './customer-profile.component';
import { FedexsharedModule } from 'src/app/shared/fedexshared.module';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CustomerProfileService } from './customer-profile.service';

export function metaDataProviderFactory(provider: CustomerProfileService) {
    // const obj = new CustomerProfileModule(null);
    return () => provider.getMetaData();
}
@NgModule({
    imports: [CommonModule, FedexsharedModule],
    exports: [CustomerProfileComponent],
    declarations: [CustomerProfileComponent],
    providers: [{ provide: APP_INITIALIZER, useFactory: metaDataProviderFactory, deps: [CustomerProfileService], multi: true },
        CustomerProfileService]
})

export class CustomerProfileModule { }
