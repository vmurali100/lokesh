//Step 1: Adding Dependencies
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

//Step 2: Creating Routes
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent }
];

//Step 3: Configuring NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//Step 4: Exporting Routing Module
export class AppRoutingModule {}
