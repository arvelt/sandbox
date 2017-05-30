# -*- encoding:utf-8 -*-
from setuptools import setup, find_packages

setup(
    name='my-py-module',
    version='0.0.1',
    author='Keisuke Ota',
    author_email='arvelt.s@gmail.com',
    packages=find_packages(),
    install_requires=[],
    description = '',
    long_description = '',
    url = '',
    license = 'MIT',
    # scripts = ['src/hoge.py'],
    platforms = ['Mac OS X'],
    # platforms = ['POSIX', 'Windows', 'Mac OS X'],
    entry_points={
        'console_scripts': 'my-module = src.app:main'
    },
    zip_safe=False,
    classifiers=[
          'Environment :: Console',
          'Intended Audience :: Developers',
          'Operating System :: OS Independent',
          'Programming Language :: Python',
          'Topic :: Utilities'
    ]
)
