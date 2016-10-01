import Comment from './model'
import $ from 'jQuery'
import * as dataService from './dataService'

export function showReports() {
    if (isValidUser()) {
        var content = require("html!../report.html");
        var users = dataService.getUsers()
        $("#rptContent").empty().html(content)
        $("#showDisasters").empty().html(getDisastersView())

        users.map(user => $("#userSelect").append($('<option>', {
            value: user.objectId,
            text: user.email
        })));
    }else{
        $("#rptContent").empty().html("Please login first to see this section!")
    }

}

export function getDisastersView() {
  var disasters = dataService.getDisasters()
  var options = disasters.map(disaster => `<option value="${disaster.id}">${disaster.name}</option>`).join("")
  var disastersHtml = `<select id="disasters">${options}</select>`
  return disastersHtml
}

export function showManagement() {
    if (isValidUser()) {
        var content = require("html!../management.html");
        $("#managementContent").empty().html(content)
        $("#showMgmtDisasters").empty().html(getDisastersView())
    }
}

function isValidUser() {
    var user = Backendless.UserService.getCurrentUser()
    console.log("User: " + user)
    return user && user.email && user.email.trim().length > 5
}

export function showPrivilegedMenu() {
    if (isValidUser()) {
        $('#login').hide()
        $('#logout').show()
        $('#reports').show()
        $('#management').show()
        application.viewService.showReports();
        application.viewService.showManagement();
    } else {
        $('#login').show()
        $('#logout').hide()
        $('#reports').hide()
        $('#management').hide()
    }
}
export function showAssesments(userId) {
    var assesments = dataService.getAssesments(userId)
    $("#showAssesments").empty().html(toTable(assesments))
}

export function toTable(assesments) {
    var header = "<tr><td>id</td><td>name</td><td>userId</td><td>description</td></tr>"
    var rows = header + assesments.map(assesment => `<tr><td>${assesment.id}</td><td>${assesment.name}</td><td>${assesment.userid}</td><td>${attributesToTable(assesment.assesmentAttributes)}</td></tr>`).join("")
    return `<table  border=1>${rows}</table>`
}

export function attributesToTable(attribute) {
    var map = dataService.getAttributesMap()
    var rows = attribute.map(attribute => `<tr><td>${map[attribute.id]}</td><td>${attribute.name}</td></tr>`).join("")
    return `<table border=1>${rows}</table>`
}
