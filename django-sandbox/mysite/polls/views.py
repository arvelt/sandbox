from django.shortcuts import render
from django.http import HttpResponse

"""
    basic response
"""
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


"""
    django generic view
"""
from django.views.generic import View
class MyView(View):

    def dispatch(self, request, *args, **kwargs):
        print "call diapatch methed"
        return super(MyView, self).dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        print "call GET methed"
        return HttpResponse('Hello, World!')
