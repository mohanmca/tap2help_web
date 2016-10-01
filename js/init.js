import * as Backendless from 'Backendless'
import $ from 'jQuery'

let notInitialized = true

export function init() {
    console.log("Application initialization - started")
    var APP_ID = '4ED00D7B-240E-B654-FF92-8E5E8C6F0100';
    var APP_KEY = '9FA43F77-53DA-2D88-FF36-44DFC400C600';
    var APP_VER = 'v1';
    Backendless.initApp(APP_ID, APP_KEY, APP_VER);
    notInitialized = false
    console.log("Application initialization - completed")
    //$('.carousel').carousel({interval: false});
}

if(notInitialized) {
  init();
}
