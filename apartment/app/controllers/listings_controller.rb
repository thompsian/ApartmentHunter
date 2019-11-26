class ListingsController < ApplicationController
  def index
    listings = Listing.all
    render json:listings
  end

  def create
    listing = Listing.create(listing_params)
    if listing.valid?
      render json: listing, status: 201
    else
      render json:listing.errors, status: :unprocessable_entity
    end
  end

  def update
    listing = Listing.find(params[:id])
    if listing.update(listing_params)
      render json: listing, status: 201
    else
      render json: listing.errors, status: 422
    end
  end

  def destroy
    listing = Listing.find params[:id]
    if listing.destroy
        render json: listing
    else
        render json: {error: 'could not delete'}, status: 400
    end
end

  private
  def listing_params
    params.require(:listing).permit(:street, :city, :zip)
  end
end
