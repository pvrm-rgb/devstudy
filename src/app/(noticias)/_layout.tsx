import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { cores } from '../../theme';

export default function NoticiasTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // o cabeçalho "Notícias" vem do Drawer
        tabBarActiveTintColor: cores.texto,
        tabBarInactiveTintColor: cores.textoSuave,
        tabBarStyle: {
          backgroundColor: cores.branco,
          borderTopWidth: 1,
          borderTopColor: cores.borda,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="tecnologia"
        options={{
          title: 'Tecnologia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="esportes"
        options={{
          title: 'Esportes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}