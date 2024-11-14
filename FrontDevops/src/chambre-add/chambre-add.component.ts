import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chambre } from 'src/chambre';
import { ChambreService } from 'src/chambre.service';
import { TypeChambre } from 'src/type-chambre';

@Component({
  selector: 'app-chambre-add',
  templateUrl: './chambre-add.component.html',
  styleUrls: ['./chambre-add.component.css']
})
export class ChambreAddComponent {

  // Available types of rooms (enum values)
  typeChambres = Object.values(TypeChambre); // Get the enum values for the dropdown

  constructor(private chambreService: ChambreService) {}

  add(form: NgForm) {
    if (form.valid) {
      const chambre: Chambre = {
        idChambre: 0, // Assuming id is auto-generated
        numeroChambre: form.value.numeroChambre,
        typeChambre: form.value.typeChambre // Get type from form
      };

      this.chambreService.AddChambre(chambre).subscribe(
        (response) => {
          console.log('Chambre Added:', response);
          // Optionally, close the modal
        },
        (error) => {
          console.error('Error adding chambre:', error);
        }
      );
    }
  }




  }

