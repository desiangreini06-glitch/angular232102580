import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, "login-page");
  }

}
