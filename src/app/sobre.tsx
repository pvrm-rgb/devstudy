import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { cores } from "../theme";

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.tela}>
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Sobre</Text>
        {/* Troque por uma imagem de jornal em assets/images/ se quiser */}
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.imagem}
        />
        <View style={styles.linha} />
        <Text style={styles.texto}>Esse é o Mini App de Notícias.</Text>
        <Text style={styles.texto}>
          Você vai praticar diferentes tipos de navegação com React-Native:
        </Text>
        <Text style={styles.item}>• Drawer (raiz)</Text>
        <Text style={styles.item}>• Tabs (Tecnologia/Esportes)</Text>
        <Text style={styles.item}>• Stacks (Lista → Detalhes)</Text>
      </View>

      <Pressable
        style={styles.botao}
        onPress={() => router.navigate("/tecnologia")}
      >
        <Text style={styles.botaoTexto}>VOLTAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    borderTopWidth: 1,
    borderTopColor: cores.borda,
    padding: 16,
  },
  caixa: {
    flex: 1,
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 6,
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: cores.texto,
  },
  imagem: { width: 120, height: 120, alignSelf: "center", marginVertical: 12 },
  linha: { height: 1, backgroundColor: cores.borda, marginBottom: 12 },
  texto: { fontSize: 16, color: cores.texto, marginBottom: 6 },
  item: { fontSize: 16, color: cores.texto, marginLeft: 12, marginBottom: 4 },
  botao: {
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 6,
    padding: 14,
    alignItems: "center",
    marginTop: 12,
  },
  botaoTexto: { fontWeight: "bold", color: cores.texto },
});
