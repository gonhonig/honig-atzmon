from django.contrib import admin
from django.shortcuts import get_object_or_404
from . import models
from multiupload.admin import MultiUploadAdmin


class ImageInlineAdmin(admin.TabularInline):
    model = models.Image


class GalleryMultiuploadMixing(object):

    def process_uploaded_file(self, uploaded, gallery, request):
        if gallery:
            image = gallery.images.create(file=uploaded)
        else:
            image = Image.objects.create(file=uploaded, gallery=None)
        return {
            'url': image.file.url,
            'thumbnail_url': image.file.url,
            'id': image.id,
            'name': image.filename
        }


class ProjectAdmin(GalleryMultiuploadMixing, MultiUploadAdmin):
    inlines = [ImageInlineAdmin,]
    multiupload_form = True
    multiupload_list = False

    def delete_file(self, pk, request):
        obj = get_object_or_404(Image, pk=pk)
        return obj.delete()


class ImageAdmin(GalleryMultiuploadMixing, MultiUploadAdmin):
    multiupload_form = False
    multiupload_list = True
    multiupload_limitconcurrentuploads = 6


admin.site.register(models.Project, ProjectAdmin)
