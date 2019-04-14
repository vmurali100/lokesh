import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child/child.component";
import { ViewComponent } from './view/view.component';
import { ChildCompComponent } from './view/child-comp/child-comp.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, ViewComponent, ChildCompComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
