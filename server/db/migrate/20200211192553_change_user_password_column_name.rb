class ChangeUserPasswordColumnName < ActiveRecord::Migration[6.0]
  def change
    def change
      rename_column :users, :password, :password_digest
    end
  end
end
