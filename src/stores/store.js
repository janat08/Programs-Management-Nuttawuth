import {observable, action, extendObservable} from "mobx"

var s = observable({
    users: [{index: 0, name: "all", roles: {admin: true, publisher: true, programManager: true, participant: true, editor: true}}],
    currentUserIndex: 0,
    roles: ["admin", "publisher", "programManager", "participant", "editor"],
    get currentUser (){
        return this.users[this.currentUserIndex]
    },
    login: action(function(i){
        this.currentUserIndex = i
    }),    
    register: action(function(x){
        this.users.push(Object.assign(x, {index: this.users.length-1}))
        this.currentUserIndex = this.users.length-1
    }),
})


// class store {
//     constructor(){
//         this.extendObservable(this, {
//             users: [{name: "all", roles: {admin: true, publisher: true, programManager: true, participant: true, editor: true}}],
//             currentUserIndex: 0,
//             get currentUser (){
//                 return this.users[currentUserIndex]
//             },
//             login: action(function(i){
//                 this.currentUserIndex = i
//             }),    
//             register: action(function(x){
//                 this.users.push(x)
//                 this.currentUserIndex = this.users.length-1
//             }),
//         })
//     }
// }

export default s