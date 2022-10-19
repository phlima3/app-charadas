import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pergunta: string;
  resposta: string;
  hasClicked = false;
  constructor(private http: HttpClient) {}

  solicitarCharada() {
    const url = 'http://lucasreno.kinghost.net/charada';
    this.http.get(url).subscribe((resposta: any) => {
      this.pergunta = resposta[0].pergunta;
      this.resposta = resposta[0].resposta;
    });
    this.hasClicked = false;
  }
  responder() {
    this.hasClicked = true;
  }
}
