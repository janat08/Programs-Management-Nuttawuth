import Home from './pages/Home';
import Login from './comps/Login';
import Register from './comps/Register';

import AdminUsers from './pages/AdminUsers.js';
import Submit from './pages/Submit';
import PublisherResources from './pages/PublisherResources';
import PublisherHistory from './pages/PublisherHistory';
import PublisherAccess from './pages/PublisherAccess';
import Programs from './pages/Programs';
import Profile from './pages/Profile';
import History from './pages/History';
import Forms from './pages/Forms';
import EditPrograms from './pages/EditPrograms';
import EditApplications from './pages/EditApplications';
import Applications from './pages/Applications';

import Admin from './pages/Admin';
import Programmer from './pages/Programmer';
import Editor from './pages/Editor';
import Publisher from './pages/Publisher';
import User from './pages/User';

export default[
    {
        path : "/",
        exact : true,
        component : Home,
        name : "Home"
    }, {
        path : "/login",
        component : Login,
        name : "Login"
    }, {
        path : "/register",
        component : Register,
        name : "Register"
    }, {
        path : "/admin",
        component : Admin,
        name : "Admin",
        routes : [
            {
                path: "/admin/users",
                component: AdminUsers,
                name: "Users"
            }, {
                path: "/admin/forms",
                component: Forms,
                name: "Forms"
            }
        ]
    },
    //  {
    //     path : "/publisher",
    //     component : Publisher,
    //     name : "Publisher",
    //     routes : [
    //         {
    //             path: "/publisher/resources",
    //             component: PublisherResources,
    //             name: "Resources"
    //         }, {
    //             path: "/publisher/history",
    //             component: PublisherHistory,
    //             name: "History"
    //         }, {
    //             path: "/publisher/access",
    //             component: PublisherAccess,
    //             name: "Access"
    //         }
    //     ]
    // }, {
    //     path : "/programmer",
    //     component : Programmer,
    //     name : "Programmer",
    //     routes : [
    //         {
    //             path: "/programmer/applications",
    //             component: Applications,
    //             name: "Applications"
    //         }, {
    //             path: "/programmer/programs",
    //             component: Programs,
    //             name: "Programs"
    //         }
    //     ]
    // }, {
    //     path : "/user",
    //     component : User,
    //     name : "User",
    //     routes : [
    //         {
    //             path: "/user/profile",
    //             component: Profile,
    //             name: "Profile"
    //         }, {
    //             path: "/user/history",
    //             component: History,
    //             name: "History"
    //         }, {
    //             path: "/user/submit",
    //             component: Submit,
    //             name: "Submit"
    //         }
    //     ]
    // }, {
    //     path : "/editor",
    //     component : Editor,
    //     name : "Editor",
    //     routes : [
    //         {
    //             path: "/editor/programs",
    //             component: EditPrograms,
    //             name: "Programs"
    //         }, {
    //             path: "/editor/applications",
    //             component: EditApplications,
    //             name: "Applications"
    //         }
    //     ]
    // }
]