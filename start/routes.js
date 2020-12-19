"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

const UserType = use("App/Enums/UserType");

Route.group("/", () => {
  Route.post("/user-field", "UserField/UserFieldController.create")
    .validator("CreateUserField")
    .middleware("auth:jwt", `guard:${UserType.SUPPORT}`);

  Route.post("/auth", "UserSupport/UserSupportAuthController.create").validator(
    "auth"
  );
}).prefix("/api/support");
