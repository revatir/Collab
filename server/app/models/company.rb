class Company < ApplicationRecord
  belongs_to :user
  has_many :reviews

  validates_presence_of :company_name, :category_1, :about, :unique
end
