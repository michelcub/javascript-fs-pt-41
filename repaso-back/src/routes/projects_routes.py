from flask import Blueprint, request

from controllers.projects_controllers import get, post

projects_routes = Blueprint("projects", __name__)

@projects_routes.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return get()
    if request.method == 'POST':
        return post()
