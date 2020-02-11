class User < ApplicationRecord
  # encrypt password
  has_secure_password

  has_one :company

  validates_presence_of :username, :password_digest
end
