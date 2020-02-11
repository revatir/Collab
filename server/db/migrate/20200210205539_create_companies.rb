class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :category_1
      t.string :category_2
      t.string :category_3
      t.text :about
      t.text :unique
      t.string :website
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
