class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all
    json_response(@users)
  end

  # POST /signup
  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.username, user.password).call
    response = { message: Message.account_created, auth_token: auth_token }
    user_data = User.find_by(username: user.username)
    create_response(response, user_data, :created)
  end

  # GET /users/:id
  def show
    json_response(@user)
  end

  # PUT /users/:id
  def update
    @user.update(user_params)
    json_response(status: 'SUCCESS', message: 'updated the user', data: @user.username)
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
    json_response(status: 'SUCCESS', message: 'deleted the user', data: @user.username)

  end

  private

  def user_params
    # whitelist params
    params.permit(
        :username,
        :email,
        :password,
        :password_confirmation
    )
  end

  def set_user
    @user = User.find(params[:id])
  end
end
