class CompaniesController < ApplicationController
  skip_before_action :authorize_request, only: [:indexall, :create]
  before_action :set_user, only: [:index]
  before_action :set_user_company, only: [:show, :update, :destroy]

  # GET /users/:user_id/companies
  def index
    json_response(@user.company)
  end

   #GET /companies
  def indexall
    @allcompanies = Company.all
    json_response(@allcompanies)
  end

  # POST /users/:user_id/companies
  def create
    Company.create!(company_params)
    # json_response(@company, :created)
    json_response(status: "SUCCESS", message: 'Company created successfully.', data: @company)
  end

  # GET /users/:user_id/companies/:id
  def show
    json_response(@company)
  end

  # PUT /users/:user_id/companies
  def update
    @company.update(company_params)
    json_response(status: 'SUCCESS', message: 'Company updated successfully.', data: @company.company_name)
  end

  # DELETE /users/:user_id/companies
  def destroy
    @company.destroy
    json_response(status: 'SUCCESS', message: 'Company deleted successfully.', data: @company.company_name)
  end

  private

  def company_params
    params.permit(:company_name, :category_1, :category_2, :category_3, :about, :unique, :website, :user_id, :logo_url)
  end


  def set_user
    @user = User.find(params[:user_id])
  end

  def set_user_company
    @company = @user.company if @user
  end
end
