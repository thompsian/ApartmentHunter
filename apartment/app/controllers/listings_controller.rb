class ListingsController < ApplicationController
  def index
    listings = Listing.all
    render json:listings
  end

  def create
    listing = Listing.create(listing_params)
    if listing.valid?
      render json: listing
    else
      render json:listing.errors, status: :unprocessable_entity
    end
  end

  def listing_params
    params.require(:listing).permit(:street, :city, :zip)
  end
end
