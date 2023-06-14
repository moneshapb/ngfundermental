import { Component } from '@angular/core'
import { AuthService } from './auth.service'

@Component({
templateUrl: './login.component.html',

})

export class LoginComponent {

constructor(private authService:AuthService){

}

userName: any
password: any

login(formValues: any) {
this.authService.loginUser(formValues.userName, formValues.password)

}

}
