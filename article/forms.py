from django import forms
from django.urls import reverse
from .models import ArticlePost

# 写文章的表单类
class ArticlePostForm(forms.ModelForm):

    class Meta:
        # 指明数据模型来源
        model = ArticlePost
        # 定义表单包含的字段
        fields = ('title', 'body')

    def get_absolute_url(self):
        return reverse('article:article_detail', args=[self.id])