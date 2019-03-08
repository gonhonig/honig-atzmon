from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Project, Image

class ProjectSerializer(ModelSerializer):
	image = SerializerMethodField()
	year = SerializerMethodField()
	class Meta:
		model = Project
		fields = [
			'id',
			'title',
			'type',
			'location',
			'year',
			'spread',
			'image',
		]

	def get_year(self, obj):
		return obj.year.year

	def get_image(self, obj):
		try:
			image = str(obj.images.first())
		except:
			image = None
		return image



class ImageSerializer(ModelSerializer):
	path = SerializerMethodField()
	class Meta:
		model = Image
		fields = [
			'id',
			'project',
			'path'
		]

	def get_path(self, obj):
		return obj.filename
