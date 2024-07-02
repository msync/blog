# [[file:llm-exploring-to-understand.org::*Code][Code:1]]
from transformers import AutoTokenizer, AutoModelForCausalLM, QuantoConfig

model_name = "microsoft/Phi-3-mini-128k-instruct"

tokenizer = AutoTokenizer.from_pretrained(model_name)

quantization_config = QuantoConfig(weights="int8")
quantized_model = AutoModelForCausalLM.from_pretrained(model_name,
                                                       quantization_config=quantization_config,
                                                       device_map="cpu",
                                                       trust_remote_code=True)

print(quantized_model)

model_inputs = tokenizer(["A list of colors: red, blue"], return_tensors="pt")
generated_ids = quantized_model.generate(**model_inputs)
print(generated_ids)

generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)
print(generated_text)
# Code:1 ends here
