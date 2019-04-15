//Step 1: Adding Dependencies
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';

//Step 2: Creating Routes
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "gallery", component: GalleryComponent},
  {path: "login", component: LoginComponent}
];

//Step 3: Configuring NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//Step 4: Exporting Routing Module
export class AppRoutingModule {}
