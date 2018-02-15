import {observable, action, extendObservable, toJS} from "mobx"
import fields from "./formFields"
import _ from "lodash"
window.JS = toJS

var s = observable({
    users: [{index: 0, name: "all powerfull", roles: {admin: true, publisher: true, programManager: true, participant: true, editor: true}}],
    currentUserIndex: 0,
    roles: ["admin", "publisher", "programManager", "participant", "editor"],
    form: fields,
    get currentUser (){
        return this.users[this.currentUserIndex]
    },
    login: action(function(i){
        this.currentUserIndex = i
    }),    
    register: action(function(x){
        this.users.push(Object.assign(x, {index: this.users.length}))
        this.currentUserIndex = this.users.length-1
    }),
    setValue: action(function(...address){
        // address.push("value")
        return function(val){
        // _.set(s.form, address, val)
        address.reduce((a,x)=>{ 
            return a[x]
        }, s.form).value = val
        console.log(
            address.reduce((a,x)=>{
                return a[x]
            }, s.form).value
        )
        }
    }),
    addField: action(function(...fields){
        var fields = fields.reduce((a,x)=>{
            return a[x]
        }, s.form)
        fields.value.push("")
    })
})
window.s = s

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