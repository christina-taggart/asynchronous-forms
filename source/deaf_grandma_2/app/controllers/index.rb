get '/' do
  @grandma = params[:grandma]
  erb :index
end

post '/grandma' do
  erb :index
end
