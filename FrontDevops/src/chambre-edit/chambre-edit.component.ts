import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chambre } from 'src/chambre';
import { ChambreService } from 'src/chambre.service';
import { TypeChambre } from 'src/type-chambre';

@Component({
  selector: 'app-chambre-edit',
  templateUrl: './chambre-edit.component.html',
  styleUrls: ['./chambre-edit.component.css']
})
export class ChambreEditComponent implements OnInit {
  updateForm!: FormGroup;
  typeChambreKeys: string[] = Object.keys(TypeChambre);

  @Input() chambre!: Chambre;

  constructor(
    private formB: FormBuilder,
    private chambreService: ChambreService
  ) {}

  ngOnInit() {
    if (this.chambre == null) {
      return;
    }

    this.updateForm = this.formB.group({
      numeroChambre: [this.chambre.numeroChambre],
      typeChambre: [this.chambre.typeChambre],
    });
  }

  updateChambre() {
    const updatedChambre: Chambre = {
      idChambre: this.chambre.idChambre,
      numeroChambre: this.updateForm.value.numeroChambre,
      typeChambre: this.updateForm.value.typeChambre,
    };

    this.chambreService.updateChambre(updatedChambre).subscribe(
      (response) => {
        alert('Chambre updated successfully!');
        this.chambreService.filter('RegisterClick');

      },
      (error) => {
        console.error('Update failed:', error);
      }
    );
  }
}