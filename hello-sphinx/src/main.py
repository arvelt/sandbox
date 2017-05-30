# -*- coding: UTF-8 -*-
import sys

def main(name, age=None):
    """Greeting function.

    :param name: Your name.
    :param age: Youre age. (option)
    """
    print "hello, " + name

    if age is not None:
        print "You are " + age

if __name__ == '__main__':
    argvs = sys.argv
    args = sys.argv
    if len(args) == 2:
        main(args[1])
    elif len(args) == 3:
        main(args[1], args[2])
    else:
        main("")
