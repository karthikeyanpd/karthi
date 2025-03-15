from django.shortcuts import render

def index(request):
    return render(request,'myjewel/index.html')
