from django.contrib import admin
from .models import ArticleColumn

from .models import ArticlePost

class ArticleAdmin(admin.ModelAdmin):
    '''英雄人物模型管理类'''
    list_display = ['title', 'author', 'body', 'created']

# 注册ArticlePost到admin中
admin.site.register(ArticlePost, ArticleAdmin)
admin.site.register(ArticleColumn)
