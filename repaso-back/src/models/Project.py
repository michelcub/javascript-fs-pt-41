from utils import db

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(80))

    def __repr__(self):
        return f'<Project {self.url}>'

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
        }
    
    def serialize_with_users(self):
        return {
            "id": self.id,
            "url": self.url,
            "users": [user.serialize() for user in self.users]
        }