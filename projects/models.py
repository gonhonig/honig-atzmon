from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    year = models.DateField()
    spread = models.IntegerField()

    def __str__(self):
        return self.title


class Image(models.Model):
    file = models.FileField('File', upload_to='')
    project = models.ForeignKey('Project', related_name='images', blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.filename

    @property
    def filename(self):
        return self.file.name.rsplit('/', 1)[-1]