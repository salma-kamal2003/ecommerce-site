import { Component } from '@angular/core';
import { FormListComponent } from '../form-list/form-list.component';
import { NgIf, NgForOf } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';
import { TitlecasePipe } from '../../titlecase.pipe'



@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormListComponent, NgIf, NgForOf, FormsModule, GoogleMap, TitlecasePipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})


export class ContactsComponent {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  newUser: any = {
    name: '',
    role: '',
    imageUrl: ''
  };

  users: any[] = [
    { name: 'John Doe', role: 'User', imageUrl: 'https://images.pexels.com/photos/1161668/pexels-photo-1161668.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Alice Smith', role: 'Admin', imageUrl: 'https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Jane Smith', role: 'Admin', imageUrl: 'https://images.pexels.com/photos/1457824/pexels-photo-1457824.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Roze Smith', role: 'User', imageUrl: 'https://images.pexels.com/photos/15827726/pexels-photo-15827726/free-photo-of-portrait-of-a-brunette.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  defaultImageUrl = 'https://th.bing.com/th/id/OIP.3U017h9GAnFM3aRkV-WLiwHaHa?rs=1&pid=ImgDetMain'; // Default placeholder image

  onSubmit(): void {
    // Handle contact form submission
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newUser.imageUrl = reader.result as string; // Convert image to base64
      };
      reader.readAsDataURL(file);
    }
  }

  addUser(): void {
    if (!this.newUser.imageUrl) {
      this.newUser.imageUrl = this.defaultImageUrl; // Use default image if none selected
    }
    this.users.push({ ...this.newUser });
    this.newUser = { name: '', role: '', imageUrl: '' }; // Reset form
  }
}
