/// <reference path="node_modules/backendless/libs/backendless.d.ts" />

module MyApp {

    var APP_ID: string = '4ED00D7B-240E-B654-FF92-8E5E8C6F0100';
    var APP_KEY: string = 'ED5ADED3-C445-16A1-FF88-3F041A6C7000';
    var APP_VER: string = 'v1';

    Backendless.initApp(APP_ID, APP_KEY, APP_VER);

    // more code will be added here

    var user: Backendless.User = new Backendless.User();
    user.email = "test2@test.com";
    user.password = "test2";
    try {
        var result: Backendless.User = Backendless.UserService.register(user);
        console.log(result.username)
    } catch (error) {
        console.log(error);
    }

    class Comment {
       constructor(public message:string, public authorEmail:string) {
       }
    }


    var dataStore:Backendless.DataStore = Backendless.Persistence.of(Comment);
    var commentObject:Comment = new Comment("I'm in", user.username);
    dataStore.save(commentObject);
    console.log(commentObject)

}
