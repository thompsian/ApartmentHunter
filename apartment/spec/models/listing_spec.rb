require 'rails_helper'

RSpec.describe Listing, type: :model do
  it "should validate name" do
    listing = Listing.create
    expect(listing.errors[:zip]).to_not be_empty
  end
end
