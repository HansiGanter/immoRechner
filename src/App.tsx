import React, { useState } from "react";
import {
  Layout,
  Menu,
  ConfigProvider,
  Dropdown,
  DatePicker,
  theme,
  Switch,
  Flex,
} from "antd";
import type { ConfigProviderProps } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { Button } from "antd";
import logo from "./assets/logo.svg";
import "./App.css";
import enUS from "antd/locale/en_US";
import deDE from "antd/locale/de_DE";
import esES from "antd/locale/es_ES";
import dayjs from "dayjs";

type Locale = ConfigProviderProps["locale"];

dayjs.locale("de");

const { Header, Content } = Layout;

const navbarItems = [
  {
    key: 1,
    label: `Transactions`,
  },
  {
    key: 2,
    label: `Dashboard`,
  },
  {
    key: 3,
    label: `Playground`,
  },
];

type LanguageOption = {
  locale: any;
  label: string;
  emoji: string;
  dayjsLocale: string;
};

const languageOptions: LanguageOption[] = [
  { locale: enUS, label: "English", emoji: "🇬🇧", dayjsLocale: "en" },
  { locale: deDE, label: "Deutsch", emoji: "🇩🇪", dayjsLocale: "de" },
  { locale: esES, label: "Español", emoji: "🇪🇸", dayjsLocale: "es" },
];

const App: React.FC = () => {
  const [locale, setLocal] = useState<Locale>(enUS);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>({
    locale: enUS,
    label: "English",
    emoji: "🇬🇧",
    dayjsLocale: "en",
  });

  const changeLanguage = (language: LanguageOption) => {
    setSelectedLanguage(language);
    setLocal(language.locale);
    dayjs.locale(language.dayjsLocale);
  };

  const languageItems = languageOptions.map((item) => ({
    key: item.label,
    label: (
      <span onClick={() => changeLanguage(item)}>
        {item.emoji} {item.label}
      </span>
    ),
  }));

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // New state for dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode state
  };

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout style={{ height: "100%" }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: isDarkMode ? "#141414" : "white",
            borderBottom: isDarkMode
              ? "1px solid rgba(253, 253, 253, 0.12)"
              : "1px solid rgba(5, 5, 5, 0.06)",
          }}
        >
          <img
            src={logo}
            className="App-logo"
            style={{ padding: 8 }}
            alt="logo"
          />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={navbarItems}
            style={{ flex: 1, minWidth: 0 }}
          />
          <div style={{ display: "flex", gap: 16 }}>
            <Dropdown menu={{ items: languageItems }} placement="bottomRight">
              <Button
                type="text"
                shape="circle"
                onClick={(e) => e.preventDefault()}
                style={{ fontSize: 24 }}
              >
                {selectedLanguage.emoji}
              </Button>
            </Dropdown>
            <Button
              onClick={toggleTheme}
              shape="circle"
              type="text"
              style={{ fontSize: 24 }}
            >
              {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
            </Button>
          </div>
        </Header>
        <Content style={{ padding: "48px 48px" }}>
          Content
          <DatePicker />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
