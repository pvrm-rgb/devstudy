import { useRouter } from "expo-router";
import ListaNoticias from "../../../components/ListaNoticias";

export default function Esportes() {
  const router = useRouter();
  return (
    <ListaNoticias
      categoria="esportes"
      onAbrir={(id) =>
        router.push({ pathname: "/esportes/[id]", params: { id } })
      }
    />
  );
}
