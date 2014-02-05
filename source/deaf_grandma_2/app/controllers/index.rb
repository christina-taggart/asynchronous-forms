get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
 if params[:user_input].upcase == params[:user_input]
  "Not since 1884"
  else
    "Can't hear ya!"
  end
end

