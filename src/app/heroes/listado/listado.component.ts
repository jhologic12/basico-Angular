import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroes: string[]=['Spiderman', 'Iroman','Hulk','Thor','Capitán América'];
  heroeBorrado:string = '' ;
  heroesBorrados:string[]=[];
  borrarHeroe(){
    console.log("Borrando...")
     this.heroeBorrado = this.heroes.shift()|| ''; 
     this.heroesBorrados?.push(this.heroeBorrado!);

}



}