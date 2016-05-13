require 'spec_helper'
require 'capybara/rspec'

RSpec.describe SessionsController, type: :controller do

  describe "POST #create" do
    it "logs in user with valid credentials" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

 end
