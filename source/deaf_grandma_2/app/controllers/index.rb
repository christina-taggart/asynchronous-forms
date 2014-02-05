get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  # display the data that was sent here
  if params[:user_input] == params[:user_input].upcase
    "Not since 1987!!!"
  else
    "SPEAK UP SONNY!"
  end
end
