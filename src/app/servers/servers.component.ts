import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [FormsModule,ServerComponent],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent  implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
