class AddReviewsColumnForUserNameandCompanyName < ActiveRecord::Migration[6.0]
  def change
    add_column(:reviews, :submitted_user, :string)
    add_column(:reviews, :submitted_company, :string)
  end
end