get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  if params[:user_input] == params[:user_input].upcase
    "Not since 1987"
  else
    "SPEAK UP"
  end
end
