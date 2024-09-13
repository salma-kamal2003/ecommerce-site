import { Component, Input } from '@angular/core';

interface User {
  name: string;
  role: 'admin' | 'user';
}

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {

  @Input() users: User[] = []
}


