import "moment/locale/ru";
import "antd/dist/antd.css";
import "./resources/css/base.css";
import "./resources/css/welcome_block/welcome-block.css";
import "./resources/css/welcome_block/__content/welcome-block__content.css";
import "./resources/css/welcome_block/__row/welcome-block__row.css";
import "./resources/css/welcome_block/__divider/welcome-block__divider.css";
import "./resources/css/welcome_block/__circular-arrow/welcome-block__circular-arrow.css";
import "./resources/css/welcome_block/__logo/welcome-block__logo.css";
import "./resources/css/welcome_block/__menu/welcome-block__menu.css";
import "./resources/css/about-block/about-block.css";
import "./resources/css/about-block/__h2/about-block__h2.css";
import "./resources/css/about-block/__title-bar/about-block__title-bar.css";
import "./resources/css/about-block/__item/about-block__item.css";
import "./resources/css/sponsors-block/sponsors-block.css";
import "./resources/css/sponsors-block/__item/sponsors-block__item.css";
import "./resources/css/form-login-block/form-login-block.css";
import "./resources/css/form-login-block/__login/form-login-block__login.css";
import "./resources/css/form-login-block/__login/__button/form-login-block__login__button.css";

import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";
import moment from "moment";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "./api/redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

moment.locale("ru");
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={ruRU}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
