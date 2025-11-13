export const projects = [
  {
    id: 1,
    title: "Machine Translator (English - Hindi)",
    description: "Built a Neural Machine Translation model to translate english sentences to Hindi. Used the hindi-visual-genome dataset for training. Used Indic-NLP library for hindi data. Achieved a BLUe score of 0.72 on n gram",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Python", "NLP", "ML", "DL"],
  },
  {
    id: 2,
    title: "Text Summarizer (NLP)",    
    description: "Built an Extractive Text Summarization Model using the TextRank Algorithm. Trained on a local text file.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tags: ["Numpy", "matplotlib", "networkx" , "sklearn", "PyPDF2"],
  },
  {
    id: 3,
    title: "CF based Recommendation System",
    description: "Collaborative Filtering Based Recommender Systems using Low Rank Matrix Factorization(User Movie Embeddings) Neural Network in Keras. Dataset used is Movielens 100k uploaded on Kaggle. Achieved a validation loss of 0.78",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Python", "ML", "DL", "NLP"],
  },
  {
    id: 4,
    title: "Title Generation for Kaggle Kernels",
    description: "Used Meta Kaggle Dataset to train a model to train new kernel titles for kaggle. Used Google’s Word2vec embeddings and built a Sequential Model to achieve a loss of 1.04",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    tags: ["ML", "DL"],
  }
];