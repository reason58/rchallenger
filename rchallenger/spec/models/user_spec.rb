require 'spec_helper'
require 'capybara/rspec'

RSpec.describe User, type: :model do
  it "is valid with name, email and password confirmation" do
    u = create(:user, :agent)
  end

  end
