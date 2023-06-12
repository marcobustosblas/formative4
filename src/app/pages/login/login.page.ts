import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modelUser: string = '';
  modelPass: string = '';

  constructor(private dbService: DbService) { 
    console.log('Pagina iniciada');
  }

  ngOnInit() {
  }

  validarCredenciales(){
    console.log(this.modelUser);
    console.log(this.modelPass);
  }

}
