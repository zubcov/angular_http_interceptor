import { ExemploService } from './../../shared/exemplo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private exampleService: ExemploService) { }

  ngOnInit(): void {

  }


  public pesquisar(): void {
    this.exampleService.buscarAll().subscribe(
      (resp: any[]) => {
        console.log(resp);
      },
      (error: Error) => {
        console.error("Erro ao buscar dados");
      },
      () => {
        console.table("Busca finalizada!");
      }
    );
  }

}
