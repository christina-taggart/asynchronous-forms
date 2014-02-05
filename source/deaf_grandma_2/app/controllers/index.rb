get '/' do
  @grandma = params[:grandma]
  erb :index
end

post '/grandma' do
  @grandma_response = grandma_response(params[:user_input])
  erb :response, layout: false
end
