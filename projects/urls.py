from django.urls import path
from . import views

urlpatterns = [
    path('api/projects', views.ProjectListCreate.as_view()),
    path('api/projects/<int:pk>', views.ProjectRetrive.as_view()),
    path('api/projects/<slug:type>', views.ProjectListCreateType.as_view()),
    path('api/images', views.ImageListCreate.as_view()),
    path('api/images/<int:project>', views.ImageListFilter.as_view()),
]
