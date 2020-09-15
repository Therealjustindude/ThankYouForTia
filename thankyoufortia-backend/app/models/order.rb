class Order < ApplicationRecord
	has_many :menu_selections
	has_many :menu_items, through: :menu_selections
end
