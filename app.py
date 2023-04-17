from keras.utils import load_img, img_to_array
from PIL import Image
import json
from flask import Flask, jsonify, request
import tensorflow as tf
from tensorflow import keras
import numpy as np
from flask import Flask, render_template



app = Flask(__name__)

# Load the pre-trained model
model = keras.models.load_model('10class_model_yt_vgg16.h5')

@app.route('/') 
def index():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
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

    # get the file from POST
    file = request.files['file']

    # print(file)
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
    threshold = 0.7

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

    # Render the result.html template with the result value
    return render_template("result.html", result=result)

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0')
#  "start": "python app.py"