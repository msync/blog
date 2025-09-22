# [[file:readme.org::*GPT][GPT:2]]
with open('input.txt', 'r', encoding='utf-8') as f:
    text = f.read()
print("length of dataset in characters: ", len(text))
# GPT:2 ends here

# [[file:readme.org::*GPT][GPT:3]]
chars = sorted(list(set(text)))
vocab_size = len(chars)

stoi = { ch : i for i, ch in enumerate(chars) }
itos = { i : ch for i, ch in enumerate(chars) }

encode = lambda s: [stoi[c] for c in s] # string -> list[integer]
decode = lambda l: ''.join([itos[i] for i in l]) # list[integer] -> string
# GPT:3 ends here

# [[file:readme.org::*GPT][GPT:5]]
import mlx.core as mx
data = mx.array(encode(text))
# GPT:5 ends here

# [[file:readme.org::*GPT][GPT:7]]
n = int(0.9 * len(data))
train_data = data[:n]
val_data = data[n:]
# GPT:7 ends here

# [[file:readme.org::*GPT][GPT:8]]
block_size = 8
# GPT:8 ends here
