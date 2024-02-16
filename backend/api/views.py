from django.shortcuts import render
from .serializers import EmployeeSerializer
from rest_framework.generics import ListAPIView
from .models import Employee
# Create your views here.

class studentList(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    