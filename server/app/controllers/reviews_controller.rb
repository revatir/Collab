class ReviewsController < ApplicationController
  before_action :set_company
  before_action :set_company_review, only: [:show, :update, :destroy]

  # GET /users/:user_id/company
  def index
    json_response(@company.reviews)
  end

  # GET /users/:user_id/companies/:id/review/:id
  def show
    json_response(@review)
  end

  # POST /users/:user_id/company
  def create
    @company.reviews.create!(review_params)
    # json_response(@review, :created)
    json_response(status: "SUCCESS", message: 'Review created successfully.', data: @review)
  end

  # PUT /users/:user_id/company
  def update
    @review.update(review_params)
    json_response(status: 'SUCCESS', message: 'Company updated successfully.', data: @review)
  end

  # DELETE /users/:users_id/company
  def destroy
    @review.destroy
    json_response(status: 'SUCCESS', message: 'Review deleted successfully.', data: @review)
  end

  private

  def review_params
    params.permit(:review, :done)
  end

  def set_company
    @company = Company.find(params[:company_id])
  end

  def set_company_review
    @review = @company.review.find_by!(id: params[:id]) if @company
  end
end
