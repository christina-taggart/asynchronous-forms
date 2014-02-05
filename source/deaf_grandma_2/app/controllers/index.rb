get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  if params[:user_input].upcase == params[:user_input]
    "Hey sonny"
  else
    "Speak up!"
  end
end
