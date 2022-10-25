import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./authorization.component";

let routing = RouterModule.forChild([
    { path: "authorization", component: AuthComponent },
    { path: "main", component: AdminComponent },
    { path: "**", redirectTo: "authorization" }
]);
@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule {}