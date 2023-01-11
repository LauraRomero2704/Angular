import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // STRINS INTERPOLATIONS
  name = 'Laura';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  // CLASES Y ESTILOS
  widthImg = 10;

  // PROPERTY BINDING
  btnDisabled = true;

  // Objetos
  person = {
    name: 'Laura',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }


  // ARRAYS
  names: string[] = ['Laura', 'Valentina', 'Cindy'];
  newName = '';
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://gestion.pe/resizer/inb0c2Xv9ACm38BaSd1gYS7adZU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/M6RWKLJWSVDD5OWOLC5Q3EHDWE.jpg'  
    },
    {
      name: 'Hola',
      price: 321,
      image: 'https://gestion.pe/resizer/inb0c2Xv9ACm38BaSd1gYS7adZU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/M6RWKLJWSVDD5OWOLC5Q3EHDWE.jpg'
    },
    {
      name: 'Jugar',
      price: 345,
      image: 'https://gestion.pe/resizer/inb0c2Xv9ACm38BaSd1gYS7adZU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/M6RWKLJWSVDD5OWOLC5Q3EHDWE.jpg'
    },
    {
      name: 'Celular',
      price: 890,
      image: 'https://gestion.pe/resizer/inb0c2Xv9ACm38BaSd1gYS7adZU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/M6RWKLJWSVDD5OWOLC5Q3EHDWE.jpg'
    },
    {
      name: 'Compu',
      price: 123,
      image: 'https://gestion.pe/resizer/inb0c2Xv9ACm38BaSd1gYS7adZU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/M6RWKLJWSVDD5OWOLC5Q3EHDWE.jpg'
    },
    {
      name: 'Gato',
      price: 678,
      image: 'https://gestion.pe/resizer/inb0c2Xv9ACm38BaSd1gYS7adZU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/M6RWKLJWSVDD5OWOLC5Q3EHDWE.jpg'
    }
  ]


  // EVENTOS

  // Metodos
  toggleButton() {
    this.btnDisabled = !this.btnDisabled; // Negar
  }

  increaseAge() {
    this.person.age += 1; // Sumar
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }


  // *NGFOR -> Agregar nombre
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  // *NGFOR -> Eliminar nombre
  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
