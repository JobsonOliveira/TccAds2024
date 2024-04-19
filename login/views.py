from django.shortcuts import render

def home(request):
    status = request.GET.get('status')
    return render(request, 'index.html', {'status': status})
def login(request):
    
    return render(request, 'login.html')
