import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { cores, opcoesHeader } from "../theme";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          ...opcoesHeader,
          drawerStyle: { backgroundColor: cores.branco },
          drawerActiveBackgroundColor: cores.fundo,
          drawerActiveTintColor: cores.texto,
          drawerInactiveTintColor: cores.textoSuave,
          drawerItemStyle: {
            borderWidth: 1,
            borderColor: cores.borda,
            borderRadius: 6,
          },
        }}
      >
        {/* Rota "/" só redireciona, então some do menu */}
        <Drawer.Screen
          name="index"
          options={{ drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="(noticias)"
          options={{
            title: "Notícias",
            drawerLabel: "Notícias",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="sobre"
          options={{
            title: "Sobre",
            drawerLabel: "Sobre",
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="information-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
