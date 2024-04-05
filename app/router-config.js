import { AccountController } from "./controllers/AccountController.js";
import { AuthController } from "./controllers/AuthController.js";
import { ImageController } from "./controllers/ImageController.js";
import { PopupController } from "./controllers/PopupController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { SettingsController } from "./controllers/SettingsController.js";
import { TODOController } from "./controllers/TODOController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ImageController, QuoteController, PopupController, TODOController, WeatherController, SettingsController],
    view: 'app/views/MainView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])
