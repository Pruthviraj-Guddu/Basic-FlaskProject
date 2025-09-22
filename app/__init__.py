# app/__init__.py

import os
from flask import Flask
from .db import close_db

def create_app():
    app = Flask(__name__, template_folder='../templates', static_folder = '../static')

    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    app.config['DATABASE'] = os.path.join(BASE_DIR, '..', 'dev', 'wroom.db')
    
    from .routes import init_routes
    init_routes(app)

    return app

