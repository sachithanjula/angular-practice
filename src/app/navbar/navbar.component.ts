import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>Navbar component</h1>
                <p>Dummy para</p>
                <button>SUBMIT</button>`,
    styles: `h1{
                    background: black;
                }
            `,

    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [HeaderComponent],
})

export class AppNavbar {

}