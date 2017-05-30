# coding:utf-8


print "hellow world!"
print "ようこそパイソンの世界へ！"

#引数
#print sys.argv[0]

#print help( 1 )		#ヘルプメッセージが表示
print dir( 1 )		#メ属性を表示
print type(1) 		#オブジェクトの型を表示

if "" :
	print "true"
else :
	print "false"

print "List and loop"
list = [1,"a",20,"b",40]
for data in list:
	print data

print "loop reversed"
for data in reversed( list) :
	print data


print "Dictionary and loop"
dic = { 'key1':"aaa",'key2':"bbb",'key3':"ccc"}
for data in dic :
	print dic[data]

print "Dictionary print key and value"
for k,v in dic.iteritems():
	print k,v 

print "Prime number"
numList = range(2,10)
for n in numList:
	for x in range(2,n) :
		if n % x == 0:
			break
	else :
		print n ,"is prime number"

print "File write"
f = open('tmp.txt','w')
string = """first paragraph
this is wroted by sctipt
2nd string
"""
f.write(string)
f.close

print "File read1"
f = open('tmp.txt','rU')
line = f.readline() 
while ( line ) : 
	print line.rstrip("\n")
	line = f.readline() 
f.close

print "File read2"
f = open('tmp.txt','r')
lines = f.readlines() 
f.close

for line in lines :
	print line.rstrip("\n")


print "Exceptions"
def divide(x, y):
	try:
		result = x / y
	except ZeroDivisionError:
		print "division by zero!"
	else:
		print "result is", result
	finally:
	        print "executing finally clause"

divide(2, 1)
divide(2, 0)
divide("2", "1")
 