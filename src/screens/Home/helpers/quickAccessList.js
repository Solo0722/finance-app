import { Iconify } from "react-native-iconify";
import { darkTheme } from "../../../theme/colors";
import { routeNames } from "../../../constants/routeNames";

export const quickAccessList = [
  {
    id: "1",
    icon: (
      <Iconify
        icon="solar:card-send-bold"
        size={24}
        color={darkTheme.grayColor}
        strokeWidth={20}
      />
    ),
    color: "success.300",
    name: "Send money",
    toPage: "",
  },
  {
    id: "2",
    icon: (
      <Iconify
        icon="solar:card-recive-bold"
        size={24}
        color={darkTheme.grayColor}
        strokeWidth={20}
      />
    ),
    color: "darkBlue.300",
    name: "Receive money",
    toPage: "",
  },
  {
    id: "3",
    icon: (
      <Iconify
        icon="solar:dollar-minimalistic-bold"
        size={24}
        color={darkTheme.grayColor}
        strokeWidth={20}
      />
    ),
    color: "amber.300",
    name: "Currency converter",
    toPage: routeNames.CURRENCYCONVERTER,
  },
  {
    id: "4",
    icon: (
      <Iconify
        icon="solar:plain-3-bold"
        size={24}
        color={darkTheme.grayColor}
        strokeWidth={20}
      />
    ),
    color: "darkBlue.300",
    name: "Send money",
    toPage: "",
  },
  {
    id: "5",
    icon: (
      <Iconify
        icon="solar:plain-3-bold"
        size={24}
        color={darkTheme.grayColor}
        strokeWidth={20}
      />
    ),
    color: "darkBlue.300",
    name: "Send money",
    toPage: "",
  },
  {
    id: "6",
    icon: (
      <Iconify
        icon="solar:plain-3-bold"
        size={24}
        color={darkTheme.grayColor}
        strokeWidth={20}
      />
    ),
    color: "darkBlue.300",
    name: "Send money",
    toPage: "",
  },
  {
    id: "7",
    icon: (
      <Iconify
        icon="solar:plain-3-bold"
        size={24}
        color={darkTheme.grayColor}
        strokeWidth={20}
      />
    ),
    color: "darkBlue.300",
    name: "Send money",
    toPage: "",
  },
];
