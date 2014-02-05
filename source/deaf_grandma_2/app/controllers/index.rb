get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  talk_to_grandma(params[:user_input])
end

#------HELPER METHOD-----
def talk_to_grandma(user_input)
	if !(user_input == user_input.upcase)
    "HUH? SPEAK UP SONNY!"
  else
    "NO, NOT SINCE 1943!"
  end
end