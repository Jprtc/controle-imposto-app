import { createBottomTabNavigator, BottomTabNavigationProp }
  from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Cadastro } from '../pages/Cadastro'
import { ListarVendas } from '../pages/ListarVendas'
import { PesquisarVendas } from '../pages/PesquisarVendas'

type AppRoutes={
    cadastro:undefined;
    listarVenda:undefined;
    pesquisarVenda:undefined;
}

export type AppNavigatorRoutesProps =
  BottomTabNavigationProp<AppRoutes>

  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

  export function AppRoutes() {
    const theme = useTheme()
  
    return (
      <Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          height: 88
        }
      }}>
        <Screen
          name='cadastro'
          component={Cadastro}
          options={{
            tabBarLabel: 'Cadastrar Venda',
            tabBarIcon: (({ size, color }) =>
              <AntDesign
                name='pluscircleo'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Screen
          name='listarVenda'
          component={ListarVendas}
          options={{
            tabBarLabel: 'Listar Vendas',
            tabBarIcon: (({ size, color }) =>
              <FontAwesome
                name='list-ul'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Screen
          name='pesquisarVenda'
          component={PesquisarVendas}
          options={{
            tabBarLabel: 'Pesquisar Vendas',
            tabBarIcon: (({ size, color }) =>
              <AntDesign
                name='search1'
                size={size}
                color={color}
              />
            )
          }}
        />
  
      </Navigator>
    )
  }