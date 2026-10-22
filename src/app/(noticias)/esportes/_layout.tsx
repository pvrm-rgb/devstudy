import { Stack } from "expo-router";
import { cores } from "../../../theme";

export default function EsportesStack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: cores.branco },
        headerTintColor: cores.texto,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: cores.fundo },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Esportes" }} />
      <Stack.Screen name="[id]" options={{ title: "Notícia" }} />
    </Stack>
  );
}
