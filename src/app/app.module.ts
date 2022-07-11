import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { HTTP } from "@ionic-native/http/ngx";
import { HttpInterceptor } from './interceptors/http.interceptor';

import { Camera } from '@ionic-native/camera/ngx';
import { FormsModule } from "@angular/forms";
import { ZBar } from "@ionic-native/zbar/ngx";
import { IonicStorageModule } from "@ionic/storage";
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AppUpdate } from "@ionic-native/app-update/ngx";
import { Network } from "@ionic-native/network/ngx";
import { AppVersion } from '@ionic-native/app-version/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ZBar,
    File,
    Camera,
    FilePath,
    FileTransfer,
    AppUpdate,
    Network,
    NetworkInterface,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true,
    },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
