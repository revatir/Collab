Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users do
    resources :companies do
      resources :reviews
      end
  end



  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
  get 'companies', to: 'companies#indexall'

end