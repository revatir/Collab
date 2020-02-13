class AddCompaniesLogoUrlColumn < ActiveRecord::Migration[6.0]
    def change
      add_column(:users, :logo_url, :string)
    end  
end
