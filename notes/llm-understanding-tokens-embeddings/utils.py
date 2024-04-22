# [[file:llm.org::*Utils][Utils:1]]
import os
import torch
import torch.nn as nn
from functools import cache
from transformers import AutoTokenizer, AutoModel

class EmbeddingModel(nn.Module):
    def __init__(self, vocab_size, embedding_dim):
        super(EmbeddingModel, self).__init__()
        self.embedding = nn.Embedding(num_embeddings=vocab_size, embedding_dim=embedding_dim)

    def forward(self, input_ids):
        return self.embedding(input_ids)


def print_tokens(tokenizer, input_ids_tensor):
    token_texts = [tokenizer.decode([token_id], skip_special_tokens=True) for token_id in input_ids_tensor[0]]
    header = f"{'Token':<10} | {'ID':<8}"
    print(f"{'='*30}\n{'Tokens and their IDs':^30}\n{'='*30}")
    print(header)
    print(f"{'-'*10}-+-{'-'*17}")

    for idx, token_id in enumerate(input_ids_tensor[0]):
        token_text = token_texts[idx]
        print(f"{token_text:<10} | {token_id:<20}")

    print(f"{'='*30}")


def extract_embeddings(model_name, embeddings_filename):
    if not os.path.isfile(embeddings_filename):
        model = AutoModel.from_pretrained(model_name)
        embeddings = model.get_input_embeddings()
        print(f"Extracted embeddings layer for {model_name}: {embeddings}")
        torch.save(embeddings.state_dict(), embeddings_filename)
    else:
        print(f"File {embeddings_filename} already exists...")


# Optimizing on load times for REPL-workflows - we cache
@cache
def load_embeddings(embeddings_filename):
    embeddings_data = torch.load(embeddings_filename)
    weights = embeddings_data["weight"]
    vocab_size, dimensions = weights.size()

    embeddings = EmbeddingModel(vocab_size, dimensions)
    embeddings.embedding.weight.data = weights
    embeddings.eval()
    return embeddings
# Utils:1 ends here
