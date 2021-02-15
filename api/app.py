from flask import Flask, jsonify, request, json, send_file
import base64
from flask import send_file
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)


products = [{'name': 'Baby PJ',
            'price': '£30',
            'id':'1',
            'image': 'https://www.piccalilly.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/c/oc-1265_honey_bee_2_piece_baby_set.jpg'},
            {'name': 'Three-Piece Baby Set',
            'price': '£20',
            'id':'2',
            'image': 'https://www.piccalilly.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/c/oc-1601_little_london_3_piece_baby_set_2.jpg'},
            {'name': 'Baby Set',
            'price': '£30',
            'id':'3',
            'image': 'https://4.imimg.com/data4/TM/KO/MY-25226044/1-500x500.jpg'}]


@app.route('/fetchProducts', methods=['GET'])
def fetchProducts():

    return jsonify({'products':products})


@app.route('/addtocart', methods=['POST'])
def addtocart():
    new_cart_data = request.get_json()

    with open('cart.json') as json_file:
        cart_data = json.load(json_file)

    cart_data.append(new_cart_data)

    with open('cart.json', 'w') as outfile:
        json.dump(cart_data, outfile)

    print('hello')
    return jsonify({'cartlength': len(cart_data)})

@app.route('/fetchCart', methods=['GET'])
def fetchCart():

    with open('cart.json') as json_file:
        cart_data = json.load(json_file)

    return jsonify({'cart' : cart_data})

@app.route('/deleteItem', methods=['POST'])
def deleteItem():

    delete_item_id = request.get_json()

    with open('cart.json') as json_file:
        cart_data = json.load(json_file)

    for cart_item in cart_data:
        if cart_item['id'] == delete_item_id:
            cart_data.remove(cart_item)
            break
    
    with open('cart.json', 'w') as outfile:
        json.dump(cart_data, outfile)

    return jsonify({'cart' : cart_data})



if __name__ == '__main__':
    app.run(host='0.0.0.0',port='5000')
