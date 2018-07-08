set :stage, :production
set :rails_env, :production
set :branch, 'master'
server ENV['PRODUCTION_SERVER_IP'], user: ENV["PRODUCTION_DEPLOY_USER"], roles: %w{web app db}
