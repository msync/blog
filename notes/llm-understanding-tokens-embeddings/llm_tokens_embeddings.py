# [[file:llm-understanding-tokens-embeddings.org::*Imports][Imports:1]]
from utils import *
from constants import *
import numpy as np
import torch
from transformers import AutoTokenizer
from gensim import downloader # Gensim has its own downloader
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
# Imports:1 ends here

# [[file:llm-understanding-tokens-embeddings.org::*Data prep][Data prep:1]]
extract_embeddings(mistral_model_name, mistral_model_embeddings_extract_file)
extract_embeddings(llama3_model_name, llama3_model_embeddings_extract_file)
# Data prep:1 ends here

# [[file:llm-understanding-tokens-embeddings.org::*Exploring Tokenization in Code][Exploring Tokenization in Code:1]]
tokenizer = AutoTokenizer.from_pretrained(mistral_model_name)

print(f"The vocabulary size is {len(tokenizer)}")

inputs = tokenizer("Who is Pani Puri?", return_tensors="pt")
input_ids = inputs["input_ids"]
print_tokens(tokenizer, input_ids)

inputs = tokenizer("Who is Katy Perry?", return_tensors="pt")
input_ids = inputs["input_ids"]
print_tokens(tokenizer, input_ids)
# Exploring Tokenization in Code:1 ends here

# [[file:llm-understanding-tokens-embeddings.org::*Exploring Tokenization in Code][Exploring Tokenization in Code:2]]
tokenizer = AutoTokenizer.from_pretrained(llama3_model_name)

print(f"The vocabulary size is {len(tokenizer)}")

inputs = tokenizer("Who is Pani Puri?", return_tensors="pt")
input_ids = inputs["input_ids"]
print_tokens(tokenizer, input_ids)

inputs = tokenizer("Who is Katy Perry?", return_tensors="pt")
input_ids = inputs["input_ids"]
print_tokens(tokenizer, input_ids)
# Exploring Tokenization in Code:2 ends here

# [[file:llm-understanding-tokens-embeddings.org::*Word Embeddings][Word Embeddings:1]]
glove_model = downloader.load(glove_model_name)

example_word = "tower"
print(f"Vector representation of the word {example_word}")
print(f"Vector is of size {len(glove_model[example_word])} x 1")
print(glove_model[example_word])

vocabulary_size = len(glove_model.index_to_key)
print(f"First 10 words found in the model out of {vocabulary_size}")
for index, word in enumerate(glove_model.index_to_key):
    if index == 10:
        break
    print(f"word {index} of {vocabulary_size}: {word}")

print("Words similar to 'sea'")
print(glove_model.most_similar("sea", topn=5))

print("Words similar to 'dark'")
print(glove_model.most_similar("dark", topn=5))
# Word Embeddings:1 ends here

# [[file:llm-understanding-tokens-embeddings.org::*Visualizing the Embeddings][Visualizing the Embeddings:1]]
plt.style.use('ggplot')

def display_pca_scatterplot(model, words):
    word_vectors = np.array([model[w] for w in words])
    twodim = PCA().fit_transform(word_vectors)[:,:2]

    plt.figure(figsize=(6, 6))
    plt.scatter(twodim[:,0], twodim[:,1], edgecolors='k', c='r')
    for word, (x, y) in zip(words, twodim):
        plt.text(x + 0.05, y + 0.05, word)

display_pca_scatterplot(glove_model, ["sea", "waters", "mediterranean", "arctic", "tea", "giant", "lion", "hockey"])
plt.savefig("gensim-word-similarities.png")
# Visualizing the Embeddings:1 ends here

# [[file:llm-understanding-tokens-embeddings.org::*LLM Model Embeddings][LLM Model Embeddings:1]]
llama3_embeddings = load_embeddings(llama3_model_embeddings_extract_file)
llama3_tokenizer = AutoTokenizer.from_pretrained(llama3_model_name)

text_for_embeddings = "The oceans and the seas are filled with salty water, cried the earth."
# We need the return_tensors to be set to pt because the embeddings model expects a tensor in that format
text_tokens = llama3_tokenizer(text_for_embeddings, truncation=True, return_tensors="pt")
input_ids = text_tokens["input_ids"]

print(f"The input ids are: {input_ids}")
input_embeddings = llama3_embeddings(input_ids)
print("===== Embeddings =====")
print(input_embeddings)
# LLM Model Embeddings:1 ends here

# [[file:llm-understanding-tokens-embeddings.org::*Sanity check][Sanity check:1]]
embeddings = load_embeddings(llama3_model_embeddings_extract_file)
tokenizer = AutoTokenizer.from_pretrained(llama3_model_name)
print(tokenizer("Hello, world!"))
# Sanity check:1 ends here
