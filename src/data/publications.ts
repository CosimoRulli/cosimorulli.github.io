export interface Paper {
  venueTag?: string;
  title: string;
  authors: string;
  venue: string;
  short?: string;
  note?: string;
  award?: string;
  doi?: string;
  pdf?: string;
  code?: string;
}

export interface PublicationGroup {
  year: number | string;
  papers: Paper[];
}

export const publications: PublicationGroup[] = [
  {
    year: 2026,
    papers: [
      {
        venueTag: 'ECIR',
        title: 'Neural Lexical Search with Learned Sparse Retrieval',
        authors: 'Andrew Yates, Carlos Lassance, Cosimo Rulli, Eugene Yang, Sean MacAvaney, Siddharth A. K. Singh, Thong Nguyen, Yibin Lei',
        venue: 'ECIR',
        short: 'ECIR • 2026',
        doi: 'https://doi.org/10.1007/978-3-032-21321-1_5',
      },
      {
        venueTag: 'ECIR',
        title: 'Multivector Reranking in the Era of Strong First-Stage Retrievers',
        authors: 'Silvio Martinico, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'ECIR',
        short: 'ECIR • 2026',
        doi: 'https://doi.org/10.1007/978-3-032-21324-2_4',
      },
      {
        venueTag: 'ECIR',
        title: 'Forward Index Compression for Learned Sparse Retrieval',
        authors: 'Sebastian Bruch, Martino Fontana, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'ECIR',
        short: 'ECIR • 2026',
        doi: 'https://doi.org/10.1007/978-3-032-21300-6_35',
      },
      {
        venueTag: 'ECIR',
        title: 'Evaluating the Efficiency and Effectiveness of Learned Sparse Retrieval with the lsr_benchmark',
        authors: 'Maik Fröbe, Ferdinand Schlatt, Cosimo Rulli, Tim Hagen, Jan Heinrich Merker, Gijs Hendriksen, Carlos Lassance, Franco Maria Nardini, Rossano Venturini, Martin Potthast',
        venue: 'ECIR',
        short: 'ECIR • 2026',
        doi: 'https://doi.org/10.1007/978-3-032-21321-1_57',
      },
      {
        venueTag: 'SIGIR',
        title: 'Sparton: Fast and Memory-Efficient Triton Kernel for Learned Sparse Retrieval',
        authors: 'Thong Nguyen, Cosimo Rulli, Franco Maria Nardini, Rossano Venturini, Andrew Yates',
        venue: 'SIGIR',
        short: 'SIGIR • 2026',
        note: 'Accepted (to appear)',
      },
      {
        venueTag: 'SIGIR',
        title: 'Efficient Multivector Retrieval with Token-Aware Clustering and Hierarchical Indexing',
        authors: 'Silvio Martinico, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'SIGIR',
        short: 'SIGIR • 2026',
        note: 'Accepted (to appear)',
      },
      {
        venueTag: 'ICWSM',
        title: "Gender Disparities in StackOverflow's Community-Based Question Answering: A Matter of Quantity versus Quality",
        authors: 'Maddalena Amendola, Cosimo Rulli, Carlos Castillo, Andrea Passarella, Raffaele Perego',
        venue: 'ICWSM',
        short: 'ICWSM • 2026',
        doi: 'https://doi.org/10.48550/arXiv.2601.23063',
      },
    ],
  },
  {
    year: 2025,
    papers: [
      {
        venueTag: 'IEEE',
        title: 'ChatGPT Versus Modest Large Language Models: An Extensive Study on Benefits and Drawbacks for Conversational Search',
        authors: 'Guido Rocchietti, Cosimo Rulli, Franco Maria Nardini, Cristina Ioana Muntean, Raffaele Perego, Ophir Frieder',
        venue: 'IEEE Access',
        short: 'IEEE Access • 2025',
        doi: 'https://doi.org/10.1109/ACCESS.2025.3529741',
      },
      {
        venueTag: 'INF',
        title: 'Neural network compression using binarization and few full-precision weights',
        authors: 'Franco Maria Nardini, Cosimo Rulli, Salvatore Trani, Rossano Venturini',
        venue: 'Inf. Sci.',
        short: 'Inf. Sci. • 2025',
        doi: 'https://doi.org/10.1016/j.ins.2025.122251',
      },
      {
        venueTag: 'ECIR',
        title: 'kANNolo: Sweet and Smooth Approximate k-Nearest Neighbors Search',
        authors: 'Leonardo Delfino, Domenico Erriquez, Silvio Martinico, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'ECIR',
        short: 'ECIR • 2025',
        doi: 'https://doi.org/10.1007/978-3-031-88717-8_29',
      },
      {
        venueTag: 'ECIR',
        title: 'Investigating the Scalability of Approximate Sparse Retrieval Algorithms to Massive Datasets',
        authors: 'Sebastian Bruch, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini, Leonardo Venuta',
        venue: 'ECIR',
        short: 'ECIR • 2025',
        doi: 'https://doi.org/10.1007/978-3-031-88714-7_43',
      },
      {
        venueTag: 'EMNLP',
        title: 'FoodSafeSum: Enabling Natural Language Processing Applications for Food Safety Document Summarization and Analysis',
        authors: 'Juli Bakagianni, Korbinian Randl, Guido Rocchietti, Cosimo Rulli, Franco Maria Nardini, Salvatore Trani, Aron Henriksson, Anna Romanova, John Pavlopoulos',
        venue: 'EMNLP (Findings)',
        short: 'EMNLP (Findings) • 2025',
        pdf: 'https://aclanthology.org/2025.findings-emnlp.911/',
      },
      {
        venueTag: 'SIGIR',
        title: 'Efficient Conversational Search via Topical Locality in Dense Retrieval',
        authors: 'Cristina Ioana Muntean, Franco Maria Nardini, Raffaele Perego, Guido Rocchietti, Cosimo Rulli',
        venue: 'SIGIR',
        short: 'SIGIR • 2025',
        doi: 'https://doi.org/10.1145/3726302.3730186',
      },
      {
        venueTag: 'SIGIR',
        title: 'Effective Inference-Free Retrieval for Learned Sparse Representations',
        authors: 'Franco Maria Nardini, Thong Nguyen, Cosimo Rulli, Rossano Venturini, Andrew Yates',
        venue: 'SIGIR',
        short: 'SIGIR • 2025',
        doi: 'https://doi.org/10.1145/3726302.3730185',
      },
      {
        venueTag: 'SIGIR',
        title: 'Efficient Approximate Nearest Neighbor Search on a Raspberry Pi',
        authors: 'Silvio Martinico, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'SIGIR',
        short: 'SIGIR • 2025',
        doi: 'https://doi.org/10.1145/3726302.3730268',
      },
      {
        venueTag: 'SIGIR',
        title: 'Neural Lexical Search with Learned Sparse Retrieval',
        authors: 'Andrew Yates, Carlos Lassance, Cosimo Rulli, Eugene Yang, Sean MacAvaney, Siddharth A. K. Singh, Thong Nguyen, Yibin Lei',
        venue: 'SIGIR',
        short: 'SIGIR • 2025',
        doi: 'https://doi.org/10.1145/3726302.3731693',
      },
      {
        venueTag: 'arXiv',
        title: 'Efficient Sketching and Nearest Neighbor Search Algorithms for Sparse Vector Sets',
        authors: 'Sebastian Bruch, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'arXiv',
        short: 'arXiv • 2025',
        doi: 'https://doi.org/10.48550/arXiv.2509.24815',
      },
    ],
  },
  {
    year: 2024,
    papers: [
      {
        venueTag: 'IEEE',
        title: 'Efficient Inverted Index-based Approximate Retrieval over High-dimensional Learned Sparse Representations',
        authors: 'Sebastian Bruch, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'IEEE Data Eng. Bull.',
        short: 'IEEE Data Eng. Bull. • 2024',
        pdf: 'http://sites.computer.org/debull/A24sept/p43.pdf',
      },
      {
        venueTag: 'CIKM',
        title: 'Pairing Clustered Inverted Indexes with κ-NN Graphs for Fast Approximate Retrieval over Learned Sparse Representations',
        authors: 'Sebastian Bruch, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'CIKM',
        short: 'CIKM • 2024',
        doi: 'https://doi.org/10.1145/3627673.3679977',
      },
      {
        venueTag: 'ECIR',
        title: 'Efficient Multi-vector Dense Retrieval with Bit Vectors',
        authors: 'Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'ECIR',
        short: 'ECIR • 2024',
        doi: 'https://doi.org/10.1007/978-3-031-56060-6_1',
      },
      {
        venueTag: 'ICDE',
        title: 'Distilled Neural Networks for Efficient Learning to Rank: (Extended Abstract)',
        authors: 'Franco Maria Nardini, Cosimo Rulli, Salvatore Trani, Rossano Venturini',
        venue: 'ICDE',
        short: 'ICDE • 2024',
        doi: 'https://doi.org/10.1109/ICDE60146.2024.00478',
      },
      {
        venueTag: 'IIR',
        title: 'LongDoc Summarization using Instruction-tuned Large Language Models for Food Safety Regulations',
        authors: 'Guido Rocchietti, Cosimo Rulli, Korbinian Randl, Cristina Ioana Muntean, Franco Maria Nardini, Raffaele Perego, Salvatore Trani, Manos Karvounis, Jakub Janostik',
        venue: 'IIR',
        short: 'IIR • 2024',
        pdf: 'https://ceur-ws.org/Vol-3802/paper27.pdf',
      },
      {
        venueTag: 'IIR',
        title: 'Seismic: Efficient and Effective Retrieval over Learned Sparse Representation',
        authors: 'Sebastian Bruch, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'IIR',
        short: 'IIR • 2024',
        pdf: 'https://ceur-ws.org/Vol-3802/paper17.pdf',
      },
      {
        venueTag: 'SEBD',
        title: 'Efficient and Effective Multi-Vector Dense Retrieval with EMVB',
        authors: 'Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'SEBD',
        short: 'SEBD • 2024',
        pdf: 'https://ceur-ws.org/Vol-3741/paper13.pdf',
      },
      {
        venueTag: 'SIGIR',
        title: 'Efficient Inverted Indexes for Approximate Retrieval over Learned Sparse Representations',
        authors: 'Sebastian Bruch, Franco Maria Nardini, Cosimo Rulli, Rossano Venturini',
        venue: 'SIGIR',
        short: 'SIGIR • 2024',
        doi: 'https://doi.org/10.1145/3626772.3657769',
      },
      
    ],
  },
  {
    year: 2023,
    papers: [
      {
        venueTag: 'IEEE',
        title: 'Distilled Neural Networks for Efficient Learning to Rank',
        authors: 'Franco Maria Nardini, Cosimo Rulli, Salvatore Trani, Rossano Venturini',
        venue: 'IEEE Trans. Knowl. Data Eng.',
        short: 'IEEE Trans. Knowl. Data Eng. • 2023',
        doi: 'https://doi.org/10.1109/TKDE.2022.3152585',
      },
      {
        venueTag: 'arXiv',
        title: 'Neural Network Compression using Binarization and Few Full-Precision Weights',
        authors: 'Franco Maria Nardini, Cosimo Rulli, Salvatore Trani, Rossano Venturini',
        venue: 'arXiv',
        short: 'arXiv • 2023',
        doi: 'https://doi.org/10.48550/arXiv.2306.08960',
      },
    ],
  },
];
