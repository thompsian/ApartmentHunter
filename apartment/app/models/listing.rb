class Listing < ApplicationRecord
  validates :zip, presence:true
end
