require 'rails_helper'

describe "Listings API", type: :request do
  it "gets a list of Apartment Listings" do
    # Create a new cat in the Test Database (not the same one as development)
    Listing.create(street: 'J St', city: 'San Diego', zip: '90010')

    # Make a request to the API
    get '/listings'

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to have_http_status(:ok)

    # Assure that we got one result back as expected
    expect(json.length).to eq 1
  end
end
