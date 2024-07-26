import { Home, Settings, HelpCircle } from "lucide-react";
import HomePage from "./pages/Home.jsx";
import SettingsPage from "./pages/Settings.jsx";
import HelpPage from "./pages/Help.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <HomePage />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <SettingsPage />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <HelpPage />,
  },
];
