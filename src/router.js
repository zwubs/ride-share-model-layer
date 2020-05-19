import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import RideReport from "./pages/RideReport";
import AddVehicle from "./pages/AddVehicle.vue";
import AddVehicleType from "./pages/AddVehicleType.vue";
import Authorization from "./pages/Authorization.vue";
import DriverSignUp from "./pages/DriverSignUp";
import PassengerRides from "./pages/PassengerRides";
import Accounts from "./pages/Accounts.vue";
import SignUp from "./pages/SignUp.vue";
import EditRideVehicle from "./pages/EditRideVehicle.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { name: "home-page", path: "/", component: Home },
    { name: "authorization-page", path: "/authorization", component: Authorization},
    { name: "ride-report-page", path: "/ride-report", component: RideReport},
    { name: "add-vehicle-page", path: "/addvehicle", component: AddVehicle },
    { name: "add-vehicle-type-page", path: "/addvehicletype", component: AddVehicleType },
    { name: "driver-signup-page", path:"/driver-signup", component:DriverSignUp},
    { name: "passenger-rides-page", path:"/passenger-rides", component: PassengerRides},
    { name: "authorization-page", path: "/authorization", component: Authorization},
    { name: "accounts-page", path: "/accounts", "component": Accounts },
    { name: "sign-up-page", path: "/signup", "component": SignUp },
    { name: "edit-ride-vehicle-page", path: "/edit-ride-vehicle", component: EditRideVehicle }
  ]
});
