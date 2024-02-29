from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


@api_view(['GET'])
def category_list(request):
    queryset = Category.objects.all()
    serializer = CategorySerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def recipe_list(request):
    queryset = Recipe.objects.all()
    serializer = RecipeSerializer(queryset, many=True)
    return Response(serializer.data)


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipeList(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
