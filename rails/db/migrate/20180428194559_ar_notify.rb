class ArNotify < ActiveRecord::Migration[5.1]
  def change
    add_column :availability_requests, :notify, :boolean, default: true, null: false
  end
end
