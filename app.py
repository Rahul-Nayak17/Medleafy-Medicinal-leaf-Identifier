from PIL import Image
import json
from flask import Flask, jsonify, request, render_template, Response
from tensorflow import keras
import tensorflow as tf
from googletrans import Translator
import numpy as np
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

# Load the pre-trained model
model = keras.models.load_model('updated_vgg16.h5')

class_names = ['Amruthballi',
               'Betel',
               'Brahmi',
               'Doddapatra',
               'Hipli',
               'Mint',
               'Neem',
               'Parijata',
               'Peepal',
               'Tulsi']

translator = Translator()

@app.route('/') 
def index():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    # get the file from POST
    file = request.files['file']

    image = Image.open(file.stream)

    # image preprocessing
    image = image.resize((224, 224))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)

    # Pass the image through the model to get predictions
    predictions = model.predict(image)

    # We take the highest probability
    pred_label = np.argmax(predictions, axis=1)
    pred_prob = np.max(predictions)

    # Set a threshold probability value
    threshold = 0.8

    if pred_prob >= threshold:
        # The predicted probability is above the threshold
        if pred_label[0] < len(class_names):
            # The predicted class is within the range of the class names
            result = class_names[pred_label[0]]
        else:
            # The predicted class is outside the range of the class names
            result = "Input image does not belong to any of the 10 trained classes"
    else:
        # The predicted probability is below the threshold
        result = "Input image does not belong to any of the 10 trained classes"

    global global_result
    global_result = result
    
    return render_template("result.html", result=result)

@app.route('/translate', methods=['POST'])
def translate():
    result = global_result

    return render_template("Result-Translate-KN.html", result=result)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
