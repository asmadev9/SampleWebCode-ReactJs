
import Users from "views/Users.jsx";
import User from "views/User.jsx";
import Games from "views/Games.jsx";
import NewGame from "views/NewGame.jsx";
import NewNotification from "views/NewNotification.jsx";
import ViewAllQA from "views/ViewAllQA.jsx";
import Notifications from "views/Notifications.jsx";
import Login from "views/Login.jsx";

const dashboardRoutes = [
  {
    path: "/users",
    name: "users",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/user/:id",
    name: "user",
    component: User,
    layout: "/admin"
  },
  {
    path: "/games",
    name: "games",
    component: Games,
    layout: "/admin"
  },
  {
    path: "/schedule-game",
    name: "gamesnew",
    component: NewGame,
    layout: "/admin"
  },
  {
    path: "/send-notification",
    name: "newNotification",
    component: NewNotification,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "notifications",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "manage-qa",
    name: "manageQA",
    component: ViewAllQA,
    layout: "/admin"
  }
];

export default dashboardRoutes;
