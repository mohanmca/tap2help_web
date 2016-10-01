import Comment from './model'
import $ from 'jQuery'
import * as Backendless from 'Backendless'
import * as init from './init'
import * as userService from './userService'
import * as managementService from './management'
import * as dataService from './dataService'
import * as viewService from './viewService'

export function logout() {
    userService.logout()
    viewService.showPrivilegedMenu()
    console.log("Logged out")
}

export function loginUser(form) {
    if (userService.loginUser(form)) {
        viewService.showPrivilegedMenu()
        $('#myCarousel').carousel('next')
    } else {
        console.log("Sorry!, Your login is failure!")
    }
}

export {userService, managementService, dataService, Backendless, viewService}
