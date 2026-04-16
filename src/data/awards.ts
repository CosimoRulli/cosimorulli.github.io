export interface Award {
  title: string;
  event: string;
  year: number;
}

export const awards: Award[] = [
  {
    title: "Best Student Short Paper Award",
    event: "ECIR 2025 — 47th European Conference on Information Retrieval",
    year: 2025,
  },
  {
    title: "Best Paper Award (runner-up)",
    event: "SIGIR 2024 — 47th International ACM SIGIR Conference on Research and Development in Information Retrieval",
    year: 2024,
  },
];
