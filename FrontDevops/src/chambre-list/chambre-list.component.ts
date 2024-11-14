import { Component, OnInit } from '@angular/core';
import { Chambre } from 'src/chambre';
import { ChambreService } from 'src/chambre.service';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent implements OnInit {
  chambres: Chambre[] = [];

  constructor(private chambreService: ChambreService) {}

  ngOnInit(): void {
    this.loadChambres();
  }

  loadChambres(): void {
    this.chambreService.getChambres().subscribe((data) => {
      this.chambres = data;
    });
  }




}