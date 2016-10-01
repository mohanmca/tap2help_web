import * as Backendless from 'Backendless'
import $ from 'jQuery'
import {UserService} from 'Backendless'

const userProps = ['email', 'name', 'password'];

//init();

export function init() {
    // $('.carousel').carousel({
    //     interval: false
    // });

    for (var element in userProps) {
        makeComponent(userProps[element]);
    }
}

export function makeComponent(property) {
    console.log('makeComponent')
    $("#regFields").append("<div><input type='text' class='input-block-level user-properties' placeholder= '" + property.name + "' name='" + property.name + "'> </input></div>");
}

export function createUser(form) {
    var user = new Backendless.User();
    userProps.map(name => user[name] = form[name].value);
    console.dir(user)
    try {
        var register = Backendless.UserService.register(user);
        showInfo(" User successfully created");
    } catch (e) {
        showInfo(e.message);
    }
}

export function logout() {
    Backendless.UserService.logout()
}

export function loginUser(form)/*function to check userid & password*/
{
    var loggedIn = false
    try {
        var user = Backendless.UserService.login(form.userid.value, form.pswrd.value, true);
        if (user != null) {
            showInfo("Login successful");
            loggedIn = true
            $('#myCarousel').carousel(2)
        } else {
            showInfo("Login failed");
            loggedIn = false
        }
    } catch (e) {
        showInfo("Login failed. " + e.message);
    }
    return loggedIn;
}

export function showInfo(text) {
    $('#message').text(text);
    // var carousel = $('.carousel');
    // carousel.carousel(2);
    // carousel.carousel('pause');
}
