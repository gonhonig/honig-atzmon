from .models import Project, Image
from .serializers import ProjectSerializer, ImageSerializer
from rest_framework import generics

class ProjectListCreate(generics.ListCreateAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer


class ProjectListCreateType(generics.ListCreateAPIView):
	serializer_class = ProjectSerializer
	
	def get_queryset(self):
		type = self.kwargs['type']
		return Project.objects.filter(type=type)


class ProjectRetrive(generics.RetrieveAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer


class ImageListCreate(generics.ListCreateAPIView):
	queryset = Image.objects.all()
	serializer_class = ImageSerializer

class ImageListFilter(generics.ListCreateAPIView):
	serializer_class = ImageSerializer

	def get_queryset(self):
		project = self.kwargs['project']
		return Image.objects.filter(project=project)
