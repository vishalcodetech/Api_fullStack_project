from django.urls import path
from api import views


urlpatterns = [
    path('employee/',views.studentList.as_view())
]