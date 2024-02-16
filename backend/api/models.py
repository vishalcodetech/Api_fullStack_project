from django.db import models

# Create your models here.

class Employee(models.Model):
    employeeName = models.CharField(max_length=100)
    email =  models.CharField(max_length = 100)
    