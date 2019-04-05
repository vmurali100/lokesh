import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { ParentComponent } from './comp3/parent/parent.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { LeftComponent } from './sibling/left/left.component';
import { RightComponent } from './sibling/right/right.component';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ParentComponent,
    ParentCompComponent,
    ChildCompComponent,
    SecondParentComponent,
    SecondChildComponent,
    SiblingComponent,
    LeftComponent,
    RightComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
