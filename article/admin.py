from django.contrib import admin

# 别忘了导入ArticlerPost
from .models import ArticlePost

class ArticleAdmin(admin.ModelAdmin):
    '''英雄人物模型管理类'''
    list_display = ['title', 'author', 'body', 'created']

# 注册ArticlePost到admin中
admin.site.register(ArticlePost, ArticleAdmin)