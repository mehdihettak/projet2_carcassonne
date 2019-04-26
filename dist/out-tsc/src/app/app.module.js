import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GameService } from './game.service';
import { DeckService } from './deck.service';
import { PiocheComponent } from './pioche/pioche.component';
import { MapService } from './map.service';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GameStartComponent } from './game-start/game-start.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Ng2PanZoomModule } from 'ng2-panzoom';
var appRoutes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'game-start',
        component: GameStartComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'retour-menu',
        component: HomeComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                MapComponent,
                PiocheComponent,
                MenuComponent,
                ModalComponent,
                HomeComponent,
                GameStartComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                NgbModule,
                FormsModule,
                RouterModule.forRoot(appRoutes),
                ButtonsModule.forRoot(),
                Ng2PanZoomModule
            ],
            providers: [GameService, DeckService, MapService, NgbModal],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map