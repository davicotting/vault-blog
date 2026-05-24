import { ImagesUrls } from "@/app/utils/enums/users-url";
import { Post } from "@/components/posts-layout/types";

const { VAULT_BOY, DAVI_COTTING, ZUSTAND, NESTJS, CODING_COVER } = ImagesUrls;

export const POSTS: Post[] = [
  {
    id: "1",
    title: "Zustand me fez repensar tudo que eu sabia sobre estado",
    excerpt:
      "Redux me traumatizou. Context API me cansou. Aí veio o Zustand e eu percebi que gerenciar estado pode ser simples de verdade.",
    category: "Dev",
    date: "22 mai. 2026",
    slug: "zustand-gerenciamento-de-estado",
    imageUrl: ZUSTAND,
  },
  {
    id: "2",
    title: "NestJS: o framework que me ensinou a gostar de backend",
    excerpt:
      "Sempre fui frontend de coração. Mas o NestJS tem uma estrutura tão familiar que finalmente me sinto em casa no servidor.",
    category: "Dev",
    date: "18 mai. 2026",
    slug: "nestjs-descobrindo-o-backend",
    imageUrl: NESTJS,
  },
  {
    id: "3",
    title: "O que ninguém te conta sobre trabalhar remoto",
    excerpt:
      "Liberdade total, pijama o dia todo e uma solidão que nenhum artigo de produtividade vai resolver.",
    category: "Carreira",
    date: "10 mai. 2026",
    slug: "trabalho-remoto-real",
    imageUrl: DAVI_COTTING,
  },
  {
    id: "4",
    title: "Clean Code na prática: o que realmente importa",
    excerpt:
      "Nomes bonitos e funções pequenas não salvam um sistema mal projetado. O que realmente torna o código limpo?",
    category: "Dev",
    date: "05 mai. 2026",
    slug: "clean-code-na-pratica",
    imageUrl: VAULT_BOY,
  },
  {
    id: "5",
    title: "Burnout silencioso no mundo tech",
    excerpt:
      "Você ainda produz, ainda faz PR, ainda vai às reuniões. Mas algo apagou. Isso também é burnout.",
    category: "Vida",
    date: "28 abr. 2026",
    slug: "burnout-silencioso",
    imageUrl: DAVI_COTTING,
  },
  {
    id: "6",
    title: "Primeira semana como dev sênior",
    excerpt:
      "Esperava mais autonomia, mais respeito. Ganhei mais cobranças e menos respostas. Um relato sem filtro.",
    category: "Carreira",
    date: "20 abr. 2026",
    slug: "primeira-semana-senior",
    imageUrl: CODING_COVER,
  },
];
