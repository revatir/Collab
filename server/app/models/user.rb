class User < ApplicationRecord
  # encrypt password
  has_secure_password

  has_one :company

  validates_presence_of :password_digest
  validates :username, uniqueness: true, presence: true
end
