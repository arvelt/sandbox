"""
livedoor weather api 
http://weather.livedoor.com/weather_hacks/
http://weather.livedoor.com/weather_hacks/webservice

地区ID
http://weather.livedoor.com/forecast/rss/primary_area.xml

東京の天気
http://weather.livedoor.com/forecast/webservice/json/v1?city=130010

requests モジュール
http://docs.python-requests.org/en/latest/
>>> r = requests.get('https://api.github.com/user', auth=('user', 'pass'))
>>> r.status_code
200
>>> r.headers['content-type']
'application/json; charset=utf8'
>>> r.encoding
'utf-8'
>>> r.text
u'{"type":"User"...'
>>> r.json()
{u'private_gists': 419, u'total_private_repos': 77, ...}

>>> payload = {'key1': 'value1', 'key2': 'value2'}
>>> r = requests.get("http://httpbin.org/get", params=payload)
>> print r.url

"""

import requests

r = requests.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=130010')
