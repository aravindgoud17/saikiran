import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { Practice1Component } from './practice1/practice1.component';
import { AravindComponent } from './aravind/aravind.component';
import { KiranComponent } from './kiran/kiran.component';
import { SaiComponent } from './sai/sai.component';
import { CricketComponent } from './cricket/cricket.component';
import { S1Component } from './s1/s1.component';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AuthModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    TableComponent,
    Practice1Component,
    AravindComponent,
    KiranComponent,
    SaiComponent,
    CricketComponent,
    S1Component,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
