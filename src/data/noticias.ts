export type Categoria = 'tecnologia' | 'esportes';

export type Noticia = {
  id: string;
  categoria: Categoria;
  titulo: string;
  resumo: string;
  conteudo: string;
};

export const noticias: Noticia[] = [
  { id: 't1', categoria: 'tecnologia', titulo: 'React Native lança nova versão',
    resumo: 'A nova versão 0.xx traz melhorias de performance...',
    conteudo: 'A nova versão do React Native traz melhorias de performance, novas APIs e correções que deixam os apps mais rápidos e estáveis.' },
  { id: 't2', categoria: 'tecnologia', titulo: 'IA generativa bate recordes',
    resumo: 'Modelos de linguagem estão cada vez mais avançados...',
    conteudo: 'Modelos de linguagem estão cada vez mais avançados e passaram a ser usados em tarefas de escrita, programação e análise de dados.' },
  { id: 't3', categoria: 'tecnologia', titulo: 'Expo SDK 52 é lançado',
    resumo: 'Novas APIs, melhorias no Dev Client e correções de estabilidade para projetos mobile.',
    conteudo: 'O novo SDK do Expo traz novas APIs, melhorias no Dev Client e correções de estabilidade para projetos mobile.' },
  { id: 't4', categoria: 'tecnologia', titulo: 'TypeScript 5.x melhora performance',
    resumo: 'Atualizações no compilador reduzem tempos de build e melhoram suporte a decorators.',
    conteudo: 'As atualizações do compilador reduzem o tempo de build e melhoram o suporte a decorators em projetos grandes.' },
  { id: 't5', categoria: 'tecnologia', titulo: 'Hermes recebe otimizações',
    resumo: 'Engine JavaScript do React Native ganha melhor gerenciamento de memória e start mais rápido.',
    conteudo: 'A engine JavaScript do React Native ganhou melhor gerenciamento de memória e tempo de inicialização mais curto.' },

  { id: 'e1', categoria: 'esportes', titulo: 'Final do campeonato é definida',
    resumo: 'Os times X e Y se enfrentarão na grande final...',
    conteudo: 'Após semifinais eletrizantes, os times X e Y garantiram suas vagas e se enfrentarão na grande final do campeonato nacional no próximo domingo. A equipe X venceu de virada com um gol nos acréscimos, enquanto o time Y dominou seu adversário com uma vitória por 3 a 0. A expectativa é de um jogo histórico no estádio Maracanã.' },
  { id: 'e2', categoria: 'esportes', titulo: 'Atleta quebra recorde mundial',
    resumo: 'Na modalidade de corrida, um novo recorde foi estabelecido...',
    conteudo: 'Na modalidade de corrida, um novo recorde mundial foi estabelecido diante de um estádio lotado.' },
  { id: 'e3', categoria: 'esportes', titulo: 'Clássico termina empatado',
    resumo: 'Em jogo equilibrado, equipes dividem pontos após viradas nos minutos finais.',
    conteudo: 'Em jogo equilibrado, as equipes dividiram os pontos após viradas nos minutos finais da partida.' },
  { id: 'e4', categoria: 'esportes', titulo: 'Seleção confirma amistosos',
    resumo: 'Jogos de preparação visam dar ritmo a jovens promessas antes do torneio continental.',
    conteudo: 'Os jogos de preparação visam dar ritmo a jovens promessas antes do torneio continental.' },
  { id: 'e5', categoria: 'esportes', titulo: 'Maratonista surpreende',
    resumo: 'Atleta vence prova de rua e estabelece melhor marca pessoal em percurso desafiador.',
    conteudo: 'A atleta venceu a prova de rua e estabeleceu a melhor marca pessoal em um percurso desafiador.' },
];