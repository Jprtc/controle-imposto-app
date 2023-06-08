import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Cadastro } from "../pages/Cadastro";
import { Listar } from "../pages/Listar";
import { Pesquisar } from "../pages/Pesquisar";
import { TotaisImposto } from "../pages/TotaisImposto";

type AppRoutes = {
  cadastro: undefined;
  listar: undefined;
  pesquisar: undefined;
  totaisImposto: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          height: 88,
        },
      }}
    >
      <Screen
        name="cadastro"
        component={Cadastro}
        options={{
          tabBarLabel: "Cadastrar Nota Fiscal",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="pluscircleo" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="listar"
        component={Listar}
        options={{
          tabBarLabel: "Listar Notas",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="list-ul" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="pesquisar"
        component={Pesquisar}
        options={{
          tabBarLabel: "Pesquisar Notas",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="totaisImposto"
        component={TotaisImposto}
        options={{
          tabBarLabel: "Totais por Imposto",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="clipboard-list" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
