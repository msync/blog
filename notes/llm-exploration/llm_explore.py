# [[file:llm-explore.org::*Inspecting our model][Inspecting our model:1]]
from transformers import AutoModelForCausalLM, QuantoConfig
model_name = "microsoft/Phi-3-mini-128k-instruct"
device = "cpu" # Can be "mps" on Apple Silicon, or "cuda" if you have it.

quantization_config = QuantoConfig(weights="int4")
model = AutoModelForCausalLM.from_pretrained(model_name,
                                             quantization_config=quantization_config,
                                             device_map=device,
                                             trust_remote_code=True)

print(model)
# Inspecting our model:1 ends here

# [[file:llm-explore.org::*Inspecting our model][Inspecting our model:2]]
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained(model_name)
print(tokenizer)
# Inspecting our model:2 ends here

# [[file:llm-explore.org::*Inspecting our model][Inspecting our model:3]]
print(0, tokenizer.decode([0]))
print(1, tokenizer.decode([1]))
print(1001, tokenizer.decode([1001]))
print(15987, tokenizer.decode([15987]))
print(32009, tokenizer.decode([32009]))
print(32010, tokenizer.decode([32010]))
print(32011, tokenizer.decode([32011]))
# Inspecting our model:3 ends here

# [[file:llm-explore.org::*Inspecting our model][Inspecting our model:4]]
example_text = "A list of colors: red, blue"

# The .to(device) is not needed and defaults to using the "cpu"
example_text_tokens = tokenizer([example_text], return_tensors="pt").to(device)

example_text_generated_ids = model.generate(**example_text_tokens)
example_text_generated = tokenizer.batch_decode(example_text_generated_ids, skip_special_tokens=True)
print(example_text_generated)
# Inspecting our model:4 ends here

# [[file:llm-explore.org::*Code][Code:2]]
# From the PreTrainedModel base
print(model.config_class)
print(model.is_parallelizable)
print(model.base_model_prefix)
print(model.main_input_name)
print(model.hf_quantizer)
print(model.get_input_embeddings())
print(model.get_output_embeddings())
# Code:2 ends here

# [[file:llm-explore.org::*Code][Code:3]]
import torch
out_embeddings = model.get_output_embeddings()
out_embeddings(torch.tensor([]))
# Code:3 ends here
