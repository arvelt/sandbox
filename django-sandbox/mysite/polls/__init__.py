from django.core import signals
import sys

def _handle_request_start(*_unused_args, **_unused_kwargs):
    print "Request start signal"

def _handle_request_finished(*_unused_args, **_unused_kwargs):
    print "Request finished signal"

def _handle_uncaught_exception(*_unused_args, **_unused_kwargs):
    exc_info = sys.exc_info()
    print "Error occured signal: %r " % exc_info[1]

signals.got_request_exception.connect(_handle_uncaught_exception)
signals.request_started.connect(_handle_request_start)
signals.request_finished.connect(_handle_request_finished)
