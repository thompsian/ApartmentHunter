class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :street
      t.string :city
      t.string :zip

      t.timestamps
    end
  end
end
