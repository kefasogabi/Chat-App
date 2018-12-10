import { ChatRoomComponent } from './app/chat-room/chat-room.component';
import { ChatFormComponent } from './app/chat-form/chat-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { Routes } from '@angular/router';
import { SignupFormComponent } from './app/signup-form/signup-form.component';

export const appRoutes: Routes = [
    { path: 'signup', component: SignupFormComponent},
    { path: 'login', component: LoginFormComponent },
    { path: 'chat', component: ChatRoomComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];