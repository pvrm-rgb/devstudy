import { useRouter } from 'expo-router';
import ListaNoticias from '../../../components/ListaNoticias';

export default function Tecnologia() {
  const router = useRouter();
  return (
    <ListaNoticias
      categoria="tecnologia"
      onAbrir={(id) => router.push({ pathname: '/tecnologia/[id]', params: { id } })}
    />
  );
}