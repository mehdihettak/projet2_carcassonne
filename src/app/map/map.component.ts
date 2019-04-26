import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { GameService } from '../game.service';
import { MapService } from '../map.service';
import { PanZoomConfig, PanZoomAPI, PanZoomModel } from 'ng2-panzoom';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  cases = undefined
  tileRotation: number;
  private panZoomConfig: PanZoomConfig = new PanZoomConfig({
    zoomLevels: 4,
    scalePerZoomLevel: 1.5,
    initialPanX : -10300,
    initialPanY : -10300,
    freeMouseWheelFactor: 0.01,
    zoomToFitZoomLevelFactor: 0.98,
    dragMouseButton: 'right',
  });

  constructor(private deck: DeckService, private game: GameService, private map: MapService) { }

  ngOnInit() {
    this.cases = this.map.generateMap()
  }

  rotateTile() {
    this.tileRotation = this.game.rotationTile()
  }
  
}





