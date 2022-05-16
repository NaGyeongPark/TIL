from rest_framework import serializers
from django.contrib.auth import get_user_model
from ..models import Comment

User = get_user_model()

# CUD => validation
# R => Data Serializing

class CommentSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerial):
        model = User
        fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Comment
        fields = ('pk', 'user', 'content', 'article')
        read_only_fields = ('article',)