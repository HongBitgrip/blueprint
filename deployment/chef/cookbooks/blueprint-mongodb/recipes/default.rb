# Cookbook Name:: blueprint-mongodb
# Recipe:: default
#
# Copyright (c) 2016-2018 Coremedia, All Rights Reserved.

# -----------------------------------------------------------------------

# https://supermarket.chef.io/cookbooks/mongodb3#readme
require 'chef/version_constraint'
chef_gem 'chef-rewind' do
  compile_time true
end
require 'chef/rewind'

include_recipe 'ulimit::default'
include_recipe 'blueprint-mongodb::disable-thp'
include_recipe 'mongodb3'

# remove original service / cookbook_file
unwind 'service[disable-transparent-hugepages]'
unwind 'cookbook_file[/etc/init.d/disable-transparent-hugepages]'

# remove original service
unwind 'service[mongod]'
unwind "template[#{node['mongodb3']['mongod']['config_file']}]"

# Update the mongodb config file
template "cm_#{node['mongodb3']['mongod']['config_file']}" do
  path node['mongodb3']['mongod']['config_file']
  source 'mongodb.conf.erb'
  cookbook 'mongodb3'
  mode 0644
  variables(
    config: node['mongodb3']['config']['mongod']
  )
  helpers Mongodb3Helper
end

# include own service
service 'mongod' do
  case node['platform']
  when 'ubuntu'
    if node['platform_version'].to_f >= 15.04
      provider Chef::Provider::Service::Systemd
    elsif node['platform_version'].to_f >= 14.04
      provider Chef::Provider::Service::Upstart
    end
  end
  supports start: true, stop: true, restart: true, status: true
  action :enable
  subscribes :restart, "template[cm_#{node['mongodb3']['mongod']['config_file']}]", :immediately
end
