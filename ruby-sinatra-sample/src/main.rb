require 'sinatra'
require "sinatra/reloader" if development?
require 'Sequel'

Sequel::Model.plugin(:schema)
Sequel.connect("sqlite://sample.db")

class Comments < Sequel::Model
  unless table_exists?
    set_schema do
      primary_key :id
      string :name
      string :title
      timestamp :created_at
    end
    create_table
  end
end


get('/stream') { Stream.new }
class Stream
  def each
    100.times { |i| yield "#{i}\n" }
  end
end

get '/' do
  @time = Time.now
  @name = "hello"
  erb :index
end

get '/hello/:name' do
  # matches "GET /hello/foo" and "GET /hello/bar"
  # params[:name] is 'foo' or 'bar'
  "Hello #{params[:name]}!"
end

get '/db' do
  
  #Commentsテーブルから結果セットを取得してビューへ渡す
  
  @items = Comments.all
  erb :items
end

