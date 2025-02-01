from transformers import pipeline

nlp_pipeline = pipeline("text-generation", model="facebook/blenderbot-400M-distill")

def get_career_advice(user_input):
    response = nlp_pipeline(user_input, max_length=100, do_sample=True)
    return response[0]["generated_text"]
