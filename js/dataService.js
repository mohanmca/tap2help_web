import $ from 'jQuery'
import * as Backendless from 'Backendless'
import {
    Comment,
    Disaster,
    Assesment,
    Attributes,
    AssesmentAttribute,
    Users
} from './model'

var attributesMap = {}

export function saveAssesment(assesment) {
    try {
        console.dir(assesment)
        return Backendless.Persistence.of(Assesment).save(assesment)
    } catch (e) {
        if (e.code != 1009)
            alert(e.message);
    }
    return [];
}

export function getAssesments(userId) {
    try {
        var assesmentStore = Backendless.Persistence.of(Assesment)
        var dataQuery = new Backendless.DataQuery();
        dataQuery.condition = `ownerId = '${userId}'`;
        var assesments = assesmentStore.find(dataQuery).data;
        return assesments
    } catch (e) {
        if (e.code != 1009)
            alert(e.message);
    }
    return [];
}

function addComment() {
    const comment = new Comment("Comment", "authorEmail@author.com");
    var dataStore = Backendless.Persistence.of(Comment);
    dataStore.save(commentObject);
    console.log(commentObject);
}

function addUser() {
    var user = new Backendless.User();
    user.email = "test2@test.com";
    user.password = "test2";
    try {
        var result = Backendless.UserService.register(user);
        console.log(result.username);
    } catch (error) {
        console.log(error);
    }
} 

export function getAttributesMap() {
    if (Object.keys(attributesMap).length == 0) {
        console.log("Loading global attributes")
        var _globalAttributes = Backendless.Persistence.of(Attributes).find().data
        _globalAttributes.map(attr => attributesMap[attr.id] =  attr.key )
        console.dir(attributesMap)
    }
    return attributesMap;
}

export function getUsers() {
    try {
        return Backendless.Persistence.of(Users).find().data;
    } catch (e) {
        if (e.code != 1009)
            alert(e.message);
    }
    return [];
}

export function getDisasters() {
    try {
        return Backendless.Persistence.of(Disaster).find().data;
    } catch (e) {
        if (e.code != 1009)
            alert(e.message);
    }
    return [];
}
