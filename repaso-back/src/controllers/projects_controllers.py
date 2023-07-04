from flask import jsonify, request

from utils import db
from models import Project, User

def get():
    query = db.select(Project)
    projects = db.session.execute(query).scalars()
    projects = [project.serialize_with_users() for project in projects]
    return jsonify(projects), 200

def post():
    project_url = request.json.get('url')
    project_users = request.json.get('users')

    users_from_db = []

    for user in project_users:
        user = db.session.get(User, user)
        if user:
            users_from_db.append(user)

    project = Project(
        users = users_from_db,
        url = project_url
    )

    db.session.add(project)
    db.session.commit()
    return jsonify(project.serialize_with_users()), 201